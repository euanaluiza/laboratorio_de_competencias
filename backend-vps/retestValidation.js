import { REPORT_COMPETENCY_KEYS } from './report/retestReport.js'

export const RETEST_APLICACAO_SET = new Set([
  'aplicou_forte', 'aplicou', 'tentou', 'nao_viveu', 'nao_usou',
])

const COMPETENCY_KEY_SET = new Set(REPORT_COMPETENCY_KEYS)

function assertObject(value, field) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Objeto obrigatório inválido: ${field}`)
  }
  return value
}

export function validateRetestEmail(body) {
  const raw = body && typeof body === 'object' ? body.email : undefined
  if (typeof raw !== 'string' || !raw.trim()) {
    throw new Error('Campo obrigatório inválido: email')
  }
  const email = raw.trim().toLowerCase()
  if (email.length > 320) throw new Error('Campo muito longo: email')
  return email
}

function validateResposta(resposta, key) {
  const item = assertObject(resposta, `responsesByCompetency.${key}`)
  for (const campo of ['consciencia', 'prontidao']) {
    const v = item[campo]
    if (!Number.isInteger(v) || v < 1 || v > 5) {
      throw new Error(`Valor inválido (1..5): ${key}.${campo}`)
    }
  }
  if (!RETEST_APLICACAO_SET.has(item.aplicacao)) {
    throw new Error(`Valor inválido: ${key}.aplicacao`)
  }
  return { consciencia: item.consciencia, prontidao: item.prontidao, aplicacao: item.aplicacao }
}

export function validateRetestPayload(body) {
  const payload = assertObject(body, 'payload')
  const email = validateRetestEmail(payload)
  const responses = assertObject(payload.responsesByCompetency, 'responsesByCompetency')

  const keys = Object.keys(responses)
  if (keys.length !== REPORT_COMPETENCY_KEYS.length || keys.some((k) => !COMPETENCY_KEY_SET.has(k))) {
    throw new Error('responsesByCompetency deve conter exatamente as 6 competências.')
  }

  const responsesByCompetency = {}
  for (const key of REPORT_COMPETENCY_KEYS) {
    responsesByCompetency[key] = validateResposta(responses[key], key)
  }

  const consent = assertObject(payload.consent, 'consent')
  if (consent.accepted !== true) throw new Error('Consentimento é obrigatório.')
  const version = typeof consent.version === 'string' && consent.version.trim() ? consent.version.trim() : '1.0'

  return { email, responsesByCompetency, consent: { accepted: true, version } }
}
