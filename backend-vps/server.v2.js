import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pg from 'pg'
import fs from 'fs'
import crypto from 'crypto'
import {
  renderAssessmentReportHtml,
  renderSingleCompetencyReportHtml,
} from './report/reportTemplate.js'

const envPath = new URL('./.env', import.meta.url).pathname

if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n')

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue

    const index = line.indexOf('=')
    if (index === -1) continue

    const key = line.slice(0, index).trim()
    const value = line.slice(index + 1).trim()
    process.env[key] = value
  }
}

const {
  PORT = '8010',
  PGHOST = '127.0.0.1',
  PGPORT = '5432',
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  CORS_ORIGIN = 'https://analuizacarvalho.com.br',
  ADMIN_TOKEN,
} = process.env

if (!PGDATABASE || !PGUSER || !PGPASSWORD) {
  console.error('Configuração PostgreSQL incompleta.')
  process.exit(1)
}

const app = express()
const pool = new pg.Pool({
  host: PGHOST,
  port: Number(PGPORT),
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
})

const allowedOrigins = new Set([
  CORS_ORIGIN,
  'https://www.analuizacarvalho.com.br',
  'http://localhost:5173',
  'http://localhost:8080',
])

const ASSESSMENT_VERSION = '2.0'
const COMPETENCY_KEYS = [
  'comunicacao_assertiva',
  'maturidade_emocional',
  'foco_resultado_produtividade',
  'visao_sistemica',
  'direcao_futuro',
  'protagonismo_profissional',
]
const COMPETENCY_KEY_SET = new Set(COMPETENCY_KEYS)
const QUESTION_TYPE_SET = new Set(['situation', 'thought', 'value', 'open'])
const ZONE_SET = new Set(['Z1', 'Z2', 'Z3'])
const THOUGHT_ZONE_SET = new Set(['Z1', 'Z2'])
const DIRECTION_SET = new Set(['funcional', 'recuo', 'excesso', 'oscilante'])
const FREQUENCY_SET = new Set(['quase_sempre', 'as_vezes', 'raramente'])
const LEVEL_SET = new Set([0, 2, 4, 6])

app.use(helmet())
app.use(express.json({ limit: '350kb' }))

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.has(origin)) return callback(null, true)
    return callback(new Error('Origin não permitida pelo CORS'))
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}))

function assertObject(value, field) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Objeto obrigatório inválido: ${field}`)
  }

  return value
}

function assertString(value, field, max = 5000) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Campo obrigatório inválido: ${field}`)
  }

  if (value.length > max) {
    throw new Error(`Campo muito longo: ${field}`)
  }

  return value.trim()
}

function optionalString(value, max = 5000) {
  if (value === undefined || value === null) return null
  if (typeof value !== 'string') return null

  const trimmed = value.trim()
  if (!trimmed) return null

  return trimmed.slice(0, max)
}

function assertOptionalString(value, field, max = 5000) {
  if (value === undefined || value === null || value === '') return null

  if (typeof value !== 'string') {
    throw new Error(`Campo opcional inválido: ${field}`)
  }

  const trimmed = value.trim()
  if (!trimmed) return null

  if (trimmed.length > max) {
    throw new Error(`Campo muito longo: ${field}`)
  }

  return trimmed
}

function assertInteger(value, field, min, max) {
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new Error(`Número inteiro inválido: ${field}`)
  }

  return value
}

function assertAllowedValue(value, field, allowedValues) {
  if (!allowedValues.has(value)) {
    throw new Error(`Valor inválido: ${field}`)
  }

  return value
}

function normalizeEmail(email) {
  return assertString(email, 'participant.email', 320).toLowerCase()
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']

  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim()
  }

  return req.socket.remoteAddress || null
}

function normalizeWhatsapp(value) {
  const whatsapp = assertString(value, 'whatsapp', 40)
  const digits = whatsapp.replace(/\D/g, '')

  if (digits.length < 10 || digits.length > 13) {
    throw new Error('WhatsApp inválido.')
  }

  return whatsapp
}

function validateLandingRegistrationPayload(body) {
  if (!body || typeof body !== 'object') {
    throw new Error('Payload inválido.')
  }

  return {
    fullName: assertString(body.fullName || body.nome, 'fullName', 200),
    email: normalizeEmail(body.email),
    whatsapp: normalizeWhatsapp(body.whatsapp),
    source: optionalString(body.source, 120) || 'laboratorio-de-competencias',
  }
}

function expectedQuestionMetadata(questionNumber) {
  if (questionNumber >= 31) {
    return {
      questionType: 'open',
      competencyKey: null,
    }
  }

  const competencyIndex = Math.floor((questionNumber - 1) / 5)
  const positionInCompetency = (questionNumber - 1) % 5
  const questionType =
    positionInCompetency <= 2
      ? 'situation'
      : positionInCompetency === 3
        ? 'thought'
        : 'value'

  return {
    questionType,
    competencyKey: COMPETENCY_KEYS[competencyIndex],
  }
}

function assertExpectedQuestionMetadata(questionNumber, questionType, competencyKey) {
  const expected = expectedQuestionMetadata(questionNumber)

  if (questionType !== expected.questionType) {
    throw new Error(`Tipo incompatível com a pergunta ${questionNumber}.`)
  }

  if (competencyKey !== expected.competencyKey) {
    throw new Error(`Competência incompatível com a pergunta ${questionNumber}.`)
  }
}

function validateSelectedOption(selectedOption, questionNumber, extraField) {
  const option = assertObject(
    selectedOption,
    `answers[${questionNumber}].selectedOption`,
  )
  const normalized = {
    value: assertString(
      option.value,
      `answers[${questionNumber}].selectedOption.value`,
      20,
    ),
    label: assertString(
      option.label,
      `answers[${questionNumber}].selectedOption.label`,
      2000,
    ),
  }

  if (extraField === 'zone') {
    normalized.zone = assertAllowedValue(
      option.zone,
      `answers[${questionNumber}].selectedOption.zone`,
      ZONE_SET,
    )
  }

  if (extraField === 'mappedValue') {
    normalized.mappedValue = assertString(
      option.mappedValue,
      `answers[${questionNumber}].selectedOption.mappedValue`,
      120,
    )
  }

  return normalized
}

function validateThoughtStatements(statements, questionNumber) {
  if (!Array.isArray(statements) || statements.length !== 2) {
    throw new Error(`A pergunta ${questionNumber} deve ter exatamente 2 pensamentos.`)
  }

  const statementIds = new Set()
  const statementZones = new Set()

  const normalized = statements.map((statement, index) => {
    const item = assertObject(
      statement,
      `answers[${questionNumber}].statements[${index}]`,
    )
    const id = assertString(
      item.id,
      `answers[${questionNumber}].statements[${index}].id`,
      120,
    )
    const zone = assertAllowedValue(
      item.zone,
      `answers[${questionNumber}].statements[${index}].zone`,
      THOUGHT_ZONE_SET,
    )
    const frequency = assertObject(
      item.frequency,
      `answers[${questionNumber}].statements[${index}].frequency`,
    )

    if (statementIds.has(id)) {
      throw new Error(`Pensamento duplicado na pergunta ${questionNumber}.`)
    }

    statementIds.add(id)
    statementZones.add(zone)

    return {
      id,
      text: assertString(
        item.text,
        `answers[${questionNumber}].statements[${index}].text`,
        2000,
      ),
      zone,
      frequency: {
        value: assertAllowedValue(
          frequency.value,
          `answers[${questionNumber}].statements[${index}].frequency.value`,
          FREQUENCY_SET,
        ),
        label: assertString(
          frequency.label,
          `answers[${questionNumber}].statements[${index}].frequency.label`,
          120,
        ),
      },
    }
  })

  if (!statementZones.has('Z1') || !statementZones.has('Z2')) {
    throw new Error(`A pergunta ${questionNumber} deve ter um pensamento Z1 e um Z2.`)
  }

  return normalized
}

function validateAnswer(answer, index) {
  const item = assertObject(answer, `answers[${index}]`)
  const questionNumber = assertInteger(
    item.questionNumber,
    `answers[${index}].questionNumber`,
    1,
    32,
  )
  const questionType = assertAllowedValue(
    item.questionType,
    `answers[${questionNumber}].questionType`,
    QUESTION_TYPE_SET,
  )

  if (questionType === 'open') {
    assertExpectedQuestionMetadata(questionNumber, questionType, null)

    return {
      questionNumber,
      questionType,
      competencyKey: null,
      selectedOption: null,
      statements: null,
      answerText: assertString(
        item.answerText,
        `answers[${questionNumber}].answerText`,
        5000,
      ),
    }
  }

  const competencyKey = assertAllowedValue(
    item.competencyKey,
    `answers[${questionNumber}].competencyKey`,
    COMPETENCY_KEY_SET,
  )
  assertExpectedQuestionMetadata(questionNumber, questionType, competencyKey)

  if (questionType === 'situation') {
    return {
      questionNumber,
      questionType,
      competencyKey,
      selectedOption: validateSelectedOption(item.selectedOption, questionNumber, 'zone'),
      statements: null,
      answerText: null,
    }
  }

  if (questionType === 'thought') {
    return {
      questionNumber,
      questionType,
      competencyKey,
      selectedOption: null,
      statements: validateThoughtStatements(item.statements, questionNumber),
      answerText: null,
    }
  }

  return {
    questionNumber,
    questionType,
    competencyKey,
    selectedOption: validateSelectedOption(
      item.selectedOption,
      questionNumber,
      'mappedValue',
    ),
    statements: null,
    answerText: null,
  }
}

function calculateDirection(z1Count, z2Count, z3Count) {
  if (z3Count === 3) return 'funcional'
  // Oscilante = erros caíram pros dois lados; dominante = todos num lado só.
  if (z1Count >= 1 && z2Count >= 1) return 'oscilante'
  if (z2Count === 0) return 'recuo'
  return 'excesso'
}

function validateCompetencyResult(result, competencyKey) {
  const item = assertObject(
    result,
    `results.byCompetency.${competencyKey}`,
  )
  const normalizedKey = assertAllowedValue(
    item.competencyKey,
    `results.byCompetency.${competencyKey}.competencyKey`,
    COMPETENCY_KEY_SET,
  )

  if (normalizedKey !== competencyKey) {
    throw new Error(`Chave de competência divergente: ${competencyKey}.`)
  }

  const level = assertAllowedValue(
    item.level,
    `results.byCompetency.${competencyKey}.level`,
    LEVEL_SET,
  )
  const z1Count = assertInteger(
    item.z1Count,
    `results.byCompetency.${competencyKey}.z1Count`,
    0,
    3,
  )
  const z2Count = assertInteger(
    item.z2Count,
    `results.byCompetency.${competencyKey}.z2Count`,
    0,
    3,
  )
  const z3Count = assertInteger(
    item.z3Count,
    `results.byCompetency.${competencyKey}.z3Count`,
    0,
    3,
  )
  const direction = assertAllowedValue(
    item.direction,
    `results.byCompetency.${competencyKey}.direction`,
    DIRECTION_SET,
  )

  if (z1Count + z2Count + z3Count !== 3) {
    throw new Error(`Contagem de zonas inválida: ${competencyKey}.`)
  }

  if (level !== z3Count * 2) {
    throw new Error(`Nível incompatível com z3Count: ${competencyKey}.`)
  }

  const expectedDirection = calculateDirection(z1Count, z2Count, z3Count)

  if (direction !== expectedDirection) {
    throw new Error(`Direção incompatível com as zonas: ${competencyKey}.`)
  }

  return {
    competencyKey,
    level,
    z1Count,
    z2Count,
    z3Count,
    direction,
  }
}

function validateResults(results) {
  const resultsObject = assertObject(results, 'results')
  const byCompetency = assertObject(
    resultsObject.byCompetency,
    'results.byCompetency',
  )
  const receivedKeys = Object.keys(byCompetency)

  if (
    receivedKeys.length !== COMPETENCY_KEYS.length
    || receivedKeys.some((key) => !COMPETENCY_KEY_SET.has(key))
  ) {
    throw new Error('results.byCompetency deve conter exatamente as 6 competências.')
  }

  return COMPETENCY_KEYS.reduce((normalized, competencyKey) => {
    normalized[competencyKey] = validateCompetencyResult(
      byCompetency[competencyKey],
      competencyKey,
    )
    return normalized
  }, {})
}

function validateAnswers(answers) {
  if (!Array.isArray(answers) || answers.length !== 32) {
    throw new Error('answers deve conter exatamente 32 respostas.')
  }

  const normalized = answers.map(validateAnswer)
  const questionNumbers = new Set(normalized.map((answer) => answer.questionNumber))

  if (questionNumbers.size !== 32) {
    throw new Error('answers contém questionNumber duplicado.')
  }

  return normalized.sort((left, right) => left.questionNumber - right.questionNumber)
}

function assertResultsMatchAnswers(byCompetency, answers) {
  for (const competencyKey of COMPETENCY_KEYS) {
    const zones = answers
      .filter((answer) => {
        return answer.questionType === 'situation'
          && answer.competencyKey === competencyKey
      })
      .map((answer) => answer.selectedOption.zone)
    const calculated = {
      z1Count: zones.filter((zone) => zone === 'Z1').length,
      z2Count: zones.filter((zone) => zone === 'Z2').length,
      z3Count: zones.filter((zone) => zone === 'Z3').length,
    }
    const received = byCompetency[competencyKey]

    if (
      calculated.z1Count !== received.z1Count
      || calculated.z2Count !== received.z2Count
      || calculated.z3Count !== received.z3Count
    ) {
      throw new Error(`Resultados não correspondem às respostas: ${competencyKey}.`)
    }
  }
}

function validatePayload(body) {
  const payload = assertObject(body, 'payload')
  const participant = assertObject(payload.participant, 'participant')
  const assessment = assertObject(payload.assessment, 'assessment')
  const consent = assertObject(payload.consent, 'consent')
  const answers = validateAnswers(payload.answers)
  const byCompetency = validateResults(payload.results)

  if (assessment.version !== ASSESSMENT_VERSION) {
    throw new Error(`assessment.version deve ser ${ASSESSMENT_VERSION}.`)
  }

  if (consent.accepted !== true) {
    throw new Error('Consentimento LGPD é obrigatório.')
  }

  assertResultsMatchAnswers(byCompetency, answers)

  return {
    participant: {
      fullName: assertString(participant.fullName, 'participant.fullName', 200),
      email: normalizeEmail(participant.email),
      className: assertOptionalString(
        participant.className,
        'participant.className',
        120,
      ),
    },
    assessment: {
      slug: assertString(assessment.slug, 'assessment.slug', 120),
      version: ASSESSMENT_VERSION,
    },
    results: {
      byCompetency,
    },
    answers,
    consent: {
      accepted: true,
      consentText: assertString(consent.consentText, 'consent.consentText', 8000),
      consentVersion: assertString(
        consent.consentVersion,
        'consent.consentVersion',
        50,
      ),
      privacyNoticeUrl: assertOptionalString(
        consent.privacyNoticeUrl,
        'consent.privacyNoticeUrl',
        500,
      ),
    },
  }
}

app.get('/health', async (_req, res) => {
  const result = await pool.query('SELECT now() AS now')
  res.json({ ok: true, now: result.rows[0].now })
})

app.post('/api/landing-registrations', async (req, res) => {
  let payload

  try {
    payload = validateLandingRegistrationPayload(req.body)
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    })
  }

  try {
    const result = await pool.query(
      `INSERT INTO landing_registrations (
        full_name,
        email,
        whatsapp,
        source,
        payment_status,
        ip_address,
        user_agent
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, payment_status`,
      [
        payload.fullName,
        payload.email,
        payload.whatsapp,
        payload.source,
        'pending',
        getClientIp(req),
        req.headers['user-agent'] || null,
      ],
    )

    return res.status(201).json({
      ok: true,
      registrationId: result.rows[0].id,
      paymentStatus: result.rows[0].payment_status,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      ok: false,
      error: 'Erro interno ao salvar inscrição.',
    })
  }
})

app.post('/api/assessment-submissions', async (req, res) => {
  let payload

  try {
    payload = validatePayload(req.body)
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    })
  }

  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    const participantResult = await client.query(
      `INSERT INTO assessment_participants (full_name, email, class_name)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [
        payload.participant.fullName,
        payload.participant.email,
        payload.participant.className,
      ],
    )

    const participantId = participantResult.rows[0].id

    const submissionResult = await client.query(
      `INSERT INTO assessment_submissions (
        participant_id,
        assessment_slug,
        assessment_version,
        results_by_competency
      )
      VALUES ($1, $2, $3, $4::jsonb)
      RETURNING id`,
      [
        participantId,
        payload.assessment.slug,
        payload.assessment.version,
        JSON.stringify(payload.results.byCompetency),
      ],
    )

    const submissionId = submissionResult.rows[0].id

    for (const answer of payload.answers) {
      await client.query(
        `INSERT INTO assessment_answers (
          submission_id,
          question_number,
          question_type,
          competency_key,
          selected_option,
          statements,
          answer_text
        )
        VALUES ($1, $2, $3, $4, $5::jsonb, $6::jsonb, $7)`,
        [
          submissionId,
          answer.questionNumber,
          answer.questionType,
          answer.competencyKey,
          answer.selectedOption ? JSON.stringify(answer.selectedOption) : null,
          answer.statements ? JSON.stringify(answer.statements) : null,
          answer.answerText,
        ],
      )
    }

    await client.query(
      `INSERT INTO assessment_consents (
        submission_id,
        consent_text,
        consent_version,
        accepted,
        privacy_notice_url,
        ip_address,
        user_agent
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        submissionId,
        payload.consent.consentText,
        payload.consent.consentVersion,
        payload.consent.accepted,
        payload.consent.privacyNoticeUrl,
        getClientIp(req),
        req.headers['user-agent'] || null,
      ],
    )

    await client.query('COMMIT')

    return res.status(201).json({
      ok: true,
      submissionId,
      participantId,
    })
  } catch (error) {
    await client.query('ROLLBACK')
    console.error(error)

    return res.status(500).json({
      ok: false,
      error: 'Erro interno ao salvar assessment.',
    })
  } finally {
    client.release()
  }
})

// ---------------------------------------------------------------------------
// Painel interno (ADM) — protegido por token simples (Bearer ADMIN_TOKEN).
// Tudo sob /api/internal/* (já encaminhado pelo nginx para o backend).
// ---------------------------------------------------------------------------

let ADMIN_PANEL_HTML = '<!doctype html><meta charset="utf-8"><p>Painel interno indisponível.</p>'
try {
  ADMIN_PANEL_HTML = fs.readFileSync(new URL('./report/panel.html', import.meta.url), 'utf8')
} catch (error) {
  console.error('Painel interno (panel.html) não carregado:', error.message)
}

function safeEqual(a, b) {
  const ab = Buffer.from(String(a))
  const bb = Buffer.from(String(b))
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb)
}

function requireAdmin(req, res, next) {
  if (!ADMIN_TOKEN) {
    return res
      .status(503)
      .json({ ok: false, error: 'Painel interno não configurado (defina ADMIN_TOKEN no .env).' })
  }
  const header = req.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  if (!token || !safeEqual(token, ADMIN_TOKEN)) {
    return res.status(401).json({ ok: false, error: 'Não autorizado.' })
  }
  return next()
}

// Página do painel (pública; o token é pedido dentro dela e usado nas chamadas)
app.get('/api/internal/panel', (_req, res) => {
  // O painel usa <script> inline; o CSP padrão do helmet (script-src 'self')
  // bloquearia. Relaxa o CSP somente nesta página interna.
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data:",
      "connect-src 'self'",
    ].join('; '),
  )
  res.set('Content-Type', 'text/html; charset=utf-8').send(ADMIN_PANEL_HTML)
})

// Lista de submissões (para escolher o aluno)
app.get('/api/internal/submissions', requireAdmin, async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.id, p.full_name, p.email, s.assessment_slug, s.assessment_version,
              s.results_by_competency, s.completed_at, s.created_at
       FROM assessment_submissions s
       JOIN assessment_participants p ON p.id = s.participant_id
       ORDER BY s.created_at DESC`,
    )
    res.json({ ok: true, submissions: result.rows })
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message })
  }
})

// Detalhe de uma submissão (participante + resultados + respostas)
app.get('/api/internal/submissions/:id', requireAdmin, async (req, res) => {
  const id = Number(req.params.id)
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ ok: false, error: 'id inválido.' })
  }
  try {
    const subResult = await pool.query(
      `SELECT s.id, s.assessment_slug, s.assessment_version, s.results_by_competency,
              s.completed_at, s.created_at, p.full_name, p.email, p.class_name
       FROM assessment_submissions s
       JOIN assessment_participants p ON p.id = s.participant_id
       WHERE s.id = $1`,
      [id],
    )
    if (subResult.rowCount === 0) {
      return res.status(404).json({ ok: false, error: 'Submissão não encontrada.' })
    }
    const answersResult = await pool.query(
      `SELECT question_number, question_type, competency_key,
              selected_option, statements, answer_text
       FROM assessment_answers
       WHERE submission_id = $1
       ORDER BY question_number`,
      [id],
    )
    res.json({ ok: true, submission: subResult.rows[0], answers: answersResult.rows })
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message })
  }
})

// Relatório renderizado (HTML) — view=consolidado (padrão) ou competencia
app.get('/api/internal/submissions/:id/report', requireAdmin, async (req, res) => {
  const id = Number(req.params.id)
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send('id inválido.')
  }
  const view = req.query.view === 'competencia' ? 'competencia' : 'consolidado'
  const competency = typeof req.query.competency === 'string' ? req.query.competency : ''
  try {
    const result = await pool.query(
      'SELECT results_by_competency FROM assessment_submissions WHERE id = $1',
      [id],
    )
    if (result.rowCount === 0) {
      return res.status(404).send('Submissão não encontrada.')
    }
    const resultsByCompetency = result.rows[0].results_by_competency
    let html
    if (view === 'competencia') {
      if (!COMPETENCY_KEY_SET.has(competency)) {
        return res.status(400).send('Competência inválida.')
      }
      html = renderSingleCompetencyReportHtml({
        competencyKey: competency,
        result: resultsByCompetency[competency],
      })
    } else {
      html = renderAssessmentReportHtml({ resultsByCompetency })
    }
    return res.set('Content-Type', 'text/html; charset=utf-8').send(html)
  } catch (error) {
    return res.status(500).send('Erro ao gerar relatório: ' + error.message)
  }
})

app.use((_req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' })
})

app.listen(Number(PORT), '127.0.0.1', () => {
  console.log(`Ana Luiza Assessment API listening on 127.0.0.1:${PORT}`)
})
