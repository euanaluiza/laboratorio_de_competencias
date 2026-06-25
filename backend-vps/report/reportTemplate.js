import { selectCompetencyProfile } from './profileSelector.js'
import {
  competencyMeta,
  PROFILE_KEYS,
  REPORT_BRAND,
  REPORT_DISCLAIMER,
} from './profileTexts.js'
import {
  SINTESE_RETRATO,
  SINTESE_FORCA,
  SINTESE_FRAGILIDADE,
  SINTESE_MESMO_NIVEL,
  SINTESE_TENDENCIA,
  SINTESE_CRUZAMENTOS,
  SINTESE_FRASE_POR_ONDE,
  SINTESE_PROTOCOLO,
  SINTESE_FUNCIONAL_PURO,
} from './synthesisTexts.js'

// Identidade visual herdada da landing (analuizacarvalho.com.br/laboratorio-de-competencias):
// fontes Sora (títulos) + Inter (corpo); paleta creme/navy + lilás/plum como acento.
const BRAND = {
  cream: '#F7F3EE',
  sand: '#EDE8E3',
  navy: '#1C2B3A',
  muted: '#6B7A8D',
  line: '#E7DFD1',
  border: 'rgba(28,43,58,0.10)',
  white: '#FFFFFF',
  plum: '#6B2D6B',
  plumLight: '#8B4A8B',
  lilac: '#E8D5E8',
  lilacDeep: '#C9A0C9',
  // Cores semânticas do mapa:
  funcional: '#2E7D6B', // verde — respostas funcionais (z3)
  recuo: '#356A74', // azul-petróleo — lado do recuo (z1)
  excesso: '#C0492E', // vermelho — lado do excesso (z2)
}

// Ordem das competências no relatório.
const REPORT_COMPETENCY_KEYS = [
  'comunicacao_assertiva',
  'maturidade_emocional',
  'foco_resultado_produtividade',
  'visao_sistemica',
  'direcao_futuro',
  'protagonismo_profissional',
]

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function normalizeCount(value, name, competencyKey) {
  if (!Number.isInteger(value) || value < 0 || value > 3) {
    throw new Error(`${name} inválido para ${competencyKey}.`)
  }
  return value
}

// Trilha de 3 pips; `filled` deles preenchidos na cor da variante.
function renderPips(filled, variant) {
  return Array.from({ length: 3 }, (_, index) => {
    if (index < filled) {
      return `<span class="pip pip-${variant}"></span>`
    }
    return '<span class="pip pip-empty"></span>'
  }).join('')
}

// Roda (conic-gradient) com o arco verde proporcional a z3Count/3.
function renderWheel(z3Count) {
  const degrees = Math.round((z3Count / 3) * 360)
  const style = `background:conic-gradient(var(--green) 0 ${degrees}deg, var(--wheel-empty) ${degrees}deg 360deg);`
  return `
    <div class="wheel" style="${style}">
      <div class="inner">
        <span class="n">${z3Count}/3</span>
        <span class="lbl">funcional</span>
      </div>
    </div>`
}

function renderResult(z1Count, z2Count, z3Count) {
  return `
    <div class="result">
      ${renderWheel(z3Count)}
      <div class="tracks">
        <div class="trk">${renderPips(z1Count, 'petrol')}<span class="name">recuo</span></div>
        <div class="trk">${renderPips(z2Count, 'red')}<span class="name">excesso</span></div>
      </div>
    </div>`
}

function renderSteps(steps) {
  if (!Array.isArray(steps) || steps.length === 0) {
    return ''
  }
  const items = steps
    .map(
      (step) =>
        `<li><b>${escapeHtml(step.label)}</b> — ${escapeHtml(step.text)}</li>`,
    )
    .join('')
  return `<ul class="steps">${items}</ul>`
}

function renderPath(meta, profile) {
  if (!meta.protocol) {
    return ''
  }
  const note = profile.note
    ? `<p class="path-note">${escapeHtml(profile.note)}</p>`
    : ''
  return `
    <div class="sec">
      <h2>O caminho</h2>
      <div class="panel">
        <div class="protocol">${escapeHtml(meta.protocol)}</div>
        ${renderSteps(meta.steps)}
        ${note}
      </div>
    </div>`
}

function renderSwaps(naPratica) {
  if (!Array.isArray(naPratica) || naPratica.length === 0) {
    return ''
  }
  const items = naPratica
    .map((item) => {
      const when = item.when
        ? `<span class="when">${escapeHtml(item.when)}</span>`
        : ''
      return `<div class="swap">${when}${escapeHtml(item.text)}</div>`
    })
    .join('')
  return `
    <div class="sec">
      <h2>Na Prática</h2>
      ${items}
    </div>`
}

function renderBody(meta, profile) {
  if (profile.isPlaceholder) {
    return `
      <div class="body">
        <div class="sec">
          <p class="pending">Texto em preparação para esta competência.</p>
        </div>
      </div>`
  }

  return `
    <div class="body">
      <div class="sec">
        <h2>Onde você está</h2>
        <p>${escapeHtml(profile.ondeVoceEsta)}</p>
      </div>
      <div class="sec">
        <h2>Possíveis motivos<span class="tag">hipótese, não veredito</span></h2>
        <p>${escapeHtml(profile.possiveisMotivos)}</p>
      </div>
      ${renderPath(meta, profile)}
      ${renderSwaps(profile.naPratica)}
    </div>`
}

// Nome do participante padronizado em MAIÚSCULAS (aparece na barra de marca de
// cada card e no título/nome do arquivo PDF).
function formatParticipantName(fullName) {
  return String(fullName ?? '').trim().toUpperCase()
}

// Barra de marca do topo do card; à direita, o nome do participante (se houver).
function renderBrandBar(fullName) {
  const brandSegments = REPORT_BRAND.split('·')
  const lastSegment = brandSegments.pop().trim()
  const brandPrefix = brandSegments.join('·')
  const name = formatParticipantName(fullName)
  const nameTag = name ? `<span class="brand-name">${escapeHtml(name)}</span>` : ''
  return `<div class="brand"><span>${escapeHtml(brandPrefix)}· <b>${escapeHtml(lastSegment)}</b></span>${nameTag}</div>`
}

// Título do documento = nome do arquivo sugerido ao salvar em PDF. Tudo em
// MAIÚSCULAS. Ex.: "FULANO X - RELATÓRIO CONSOLIDADO - MAPA DE APOIO -
// LABORATÓRIO DE COMPETÊNCIAS".
function buildReportTitle(fullName, tipo) {
  const name = formatParticipantName(fullName)
  const segments = [String(tipo).toUpperCase(), 'MAPA DE APOIO', 'LABORATÓRIO DE COMPETÊNCIAS']
  if (name) segments.unshift(name)
  return segments.join(' - ')
}

// Renderiza um card completo e independente de uma competência.
function renderCompetencyCard(competencyKey, result, profile, fullName) {
  const meta = competencyMeta[competencyKey]
  if (!meta) {
    throw new Error(`Metadados ausentes para ${competencyKey}.`)
  }
  if (!result) {
    throw new Error(`Resultado ausente para ${competencyKey}.`)
  }

  const z1Count = normalizeCount(result.z1Count, 'z1Count', competencyKey)
  const z2Count = normalizeCount(result.z2Count, 'z2Count', competencyKey)
  const z3Count = normalizeCount(result.z3Count, 'z3Count', competencyKey)

  if (z1Count + z2Count + z3Count !== 3) {
    throw new Error(`z1+z2+z3 deve somar 3 para ${competencyKey}.`)
  }

  return `
    <article class="card">
      ${renderBrandBar(fullName)}
      <div class="head">
        <div>
          <h1>${escapeHtml(meta.title)}</h1>
          <div class="sub">${escapeHtml(meta.subtitle)}</div>
        </div>
        ${renderResult(z1Count, z2Count, z3Count)}
      </div>
      ${renderBody(meta, profile)}
      <div class="foot">
        <p class="foot-disclaimer">${escapeHtml(REPORT_DISCLAIMER)}</p>
        <p class="foot-copyright">© ${new Date().getFullYear()} Ana Luiza Carvalho · Laboratório de Competências</p>
      </div>
    </article>`
}

// Resolve o perfil de uma competência: usa o que foi passado ou seleciona
// automaticamente a partir do resultado do motor (z3Count + direção).
function resolveProfile(competencyKey, result, providedProfile) {
  if (providedProfile) {
    return providedProfile
  }
  if (result && typeof result.direction === 'string' && Number.isInteger(result.z3Count)) {
    return selectCompetencyProfile({
      competencyKey,
      z3Count: result.z3Count,
      direction: result.direction,
    })
  }
  return { isPlaceholder: true }
}

// Consolidado: síntese (primeiro) + os 6 cards completos.
export function renderAssessmentReportHtml({
  resultsByCompetency,
  selectedProfiles,
  fullName,
}) {
  if (!resultsByCompetency || typeof resultsByCompetency !== 'object') {
    throw new Error('resultsByCompetency é obrigatório.')
  }

  const synthesis = renderSynthesisCard(resultsByCompetency, fullName)
  const cards = REPORT_COMPETENCY_KEYS.map((key) => {
    const result = resultsByCompetency[key]
    return renderCompetencyCard(key, result, resolveProfile(key, result, selectedProfiles?.[key]), fullName)
  }).join('')

  return renderShell(synthesis + cards, buildReportTitle(fullName, 'Relatório consolidado'))
}

// Por competência: documento de um único card (disparo individual via WhatsApp).
export function renderSingleCompetencyReportHtml({
  competencyKey,
  result,
  profile,
  fullName,
}) {
  if (!REPORT_COMPETENCY_KEYS.includes(competencyKey)) {
    throw new Error(`Competência desconhecida: ${competencyKey}.`)
  }
  const card = renderCompetencyCard(
    competencyKey,
    result,
    resolveProfile(competencyKey, result, profile),
    fullName,
  )
  return renderShell(card, buildReportTitle(fullName, competencyMeta[competencyKey].title))
}

// ---------------------------------------------------------------------------
// Síntese do Relatório Final (Spec v3) — agrega as 6 competências.
// ---------------------------------------------------------------------------

const DIR_TO_CODE = { recuo: 'sub', excesso: 'ff', oscilante: 'osc', funcional: 'func' }

function listCompetencyNames(items) {
  const names = items.map((i) => i.title)
  if (names.length <= 1) return names[0] || ''
  if (names.length === 2) return `${names[0]} e ${names[1]}`
  return `${names.slice(0, -1).join(', ')} e ${names[names.length - 1]}`
}

// Monta os parágrafos da síntese a partir de results_by_competency.
export function buildSynthesis(resultsByCompetency) {
  const items = REPORT_COMPETENCY_KEYS.map((key) => {
    const r = resultsByCompetency?.[key] || {}
    return {
      key,
      title: competencyMeta[key].title,
      nivel: Number.isInteger(r.z3Count) ? r.z3Count : 0,
      code: DIR_TO_CODE[r.direction] || 'func',
    }
  })

  const total = items.reduce((sum, i) => sum + i.nivel, 0)
  const maxN = Math.max(...items.map((i) => i.nivel))
  const minN = Math.min(...items.map((i) => i.nivel))
  const fortes = items.filter((i) => i.nivel === maxN)
  const frageis = items.filter((i) => i.nivel === minN)
  const count = (code) => items.filter((i) => i.code === code).length
  const ctx = {
    contagem_sub: count('sub'),
    contagem_ff: count('ff'),
    contagem_osc: count('osc'),
    contagem_func: count('func'),
    contagem_nivel0: items.filter((i) => i.nivel === 0).length,
    contagem_nivel3: items.filter((i) => i.nivel === 3).length,
    nivel: Object.fromEntries(items.map((i) => [i.key, i.nivel])),
  }

  let tendencia
  if (ctx.contagem_func >= 5) tendencia = 'func'
  else if (ctx.contagem_sub > ctx.contagem_ff) tendencia = 'sub'
  else if (ctx.contagem_ff > ctx.contagem_sub) tendencia = 'ff'
  else tendencia = 'mista'

  const paragraphs = []

  // BLOCO 1 — retrato geral
  const retrato = SINTESE_RETRATO.find((r) => total >= r.min && total <= r.max)
  if (retrato) paragraphs.push(retrato.text)

  // Funcional puro (total 18): pula blocos 2 e 3
  if (total === 18) {
    paragraphs.push(SINTESE_FUNCIONAL_PURO)
    return { paragraphs }
  }

  // BLOCO 2 — força e fragilidade
  if (maxN === minN) {
    paragraphs.push(SINTESE_MESMO_NIVEL)
  } else {
    paragraphs.push(
      `A competência onde você demonstra mais consistência funcional é ${listCompetencyNames(fortes)} — é onde o padrão de agir proporcional ao que cada situação pede aparece com mais frequência. ${SINTESE_FORCA[fortes[0].key]}`,
    )
    paragraphs.push(
      `A competência onde o desvio aparece com mais força é ${listCompetencyNames(frageis)}. ${SINTESE_FRAGILIDADE[frageis[0].key]}`,
    )
  }

  // BLOCO 3A — tendência geral
  paragraphs.push(SINTESE_TENDENCIA[tendencia])

  // BLOCO 3B — cruzamentos especiais (máx. 3, na ordem)
  let added = 0
  for (const cruz of SINTESE_CRUZAMENTOS) {
    if (added >= 3) break
    if (cruz.test(ctx)) {
      paragraphs.push(cruz.text(ctx))
      added += 1
    }
  }

  // BLOCO 4 — direção de trabalho
  if (maxN !== minN) {
    const proto = SINTESE_PROTOCOLO[frageis[0].key]
    paragraphs.push(
      `Se fosse escolher por onde começar: ${listCompetencyNames(frageis)}. ${SINTESE_FRASE_POR_ONDE[tendencia]}`,
    )
    paragraphs.push(
      `O caminho é ${proto.protocolo}. Comece pelo primeiro passo — ${proto.primeiroPasso} — até ele virar automático. O resto vem depois.`,
    )
  }
  paragraphs.push('O mapa mostra onde você está. Pra onde você vai a partir daqui é com você.')

  return { paragraphs }
}

// Card da síntese (texto agregado das 6 competências) — sem o shell, para
// reutilizar tanto no documento isolado quanto no topo do consolidado.
function renderSynthesisCard(resultsByCompetency, fullName) {
  const { paragraphs } = buildSynthesis(resultsByCompetency)
  const body = paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')
  return `
    <article class="card synthesis">
      ${renderBrandBar(fullName)}
      <div class="head">
        <div>
          <h1>Síntese do seu mapa</h1>
          <div class="sub">Uma leitura do conjunto das 6 competências.</div>
        </div>
      </div>
      <div class="body synthesis-body">${body}</div>
      <div class="foot">
        <p class="foot-disclaimer">${escapeHtml(REPORT_DISCLAIMER)}</p>
        <p class="foot-copyright">© ${new Date().getFullYear()} Ana Luiza Carvalho · Laboratório de Competências</p>
      </div>
    </article>`
}

// Documento A4 da síntese (texto agregado das 6 competências).
export function renderSynthesisReportHtml({ resultsByCompetency, fullName }) {
  if (!resultsByCompetency || typeof resultsByCompetency !== 'object') {
    throw new Error('resultsByCompetency é obrigatório.')
  }
  return renderShell(
    renderSynthesisCard(resultsByCompetency, fullName),
    buildReportTitle(fullName, 'Síntese'),
  )
}

function renderShell(cards, title = 'O seu mapa de apoio') {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --cream: ${BRAND.cream};
      --sand: ${BRAND.sand};
      --navy: ${BRAND.navy};
      --muted: ${BRAND.muted};
      --line: ${BRAND.line};
      --border: ${BRAND.border};
      --white: ${BRAND.white};
      --plum: ${BRAND.plum};
      --plum-light: ${BRAND.plumLight};
      --lilac: ${BRAND.lilac};
      --lilac-deep: ${BRAND.lilacDeep};
      --green: ${BRAND.funcional};
      --petrol: ${BRAND.recuo};
      --red: ${BRAND.excesso};
      --wheel-empty: #DDD5C6;
      --font-head: 'Sora', system-ui, sans-serif;
      --font-body: 'Inter', system-ui, -apple-system, sans-serif;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      padding: 24px 12px;
      background: var(--cream);
      color: var(--navy);
      font-family: var(--font-body);
      -webkit-font-smoothing: antialiased;
    }

    .card {
      display: block;
      width: 720px;
      max-width: 100%;
      margin: 0 auto 28px;
      background: var(--white);
      border: 1px solid var(--lilac);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 48px rgba(107, 45, 107, 0.12);
    }

    .brand {
      background: var(--plum);
      color: #fff;
      padding: 9px 22px;
      font-size: 8.5px;
      letter-spacing: 2px;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .brand b { color: #fff; font-weight: 700; }
    .brand-name { font-weight: 700; letter-spacing: 1px; white-space: nowrap; }

    .head {
      position: relative;
      padding: 22px 22px 18px;
      background: linear-gradient(135deg, var(--lilac) 0%, #FBF5FB 55%, #fff 100%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .head h1 {
      font-family: var(--font-head);
      font-weight: 700;
      margin: 0;
      color: var(--plum);
      font-size: 20px;
      letter-spacing: -0.01em;
    }

    .head .sub { color: var(--plum-light); font-size: 11px; margin-top: 5px; }

    .result { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

    .wheel {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(107, 45, 107, 0.15);
    }

    .wheel .inner {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .wheel .n {
      font-family: var(--font-head);
      font-weight: 700;
      font-size: 15px;
      color: var(--navy);
      line-height: 1;
    }

    .wheel .lbl {
      font-size: 7px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .tracks { font-size: 10px; }
    .trk { display: flex; align-items: center; gap: 5px; margin: 3px 0; }

    .pip { width: 11px; height: 11px; border-radius: 2px; display: inline-block; }
    .pip-empty { border: 1.3px dashed #CDB9CD; }
    .pip-petrol { background: var(--petrol); }
    .pip-red { background: var(--red); }
    .trk .name { margin-left: 4px; color: var(--muted); }

    .body { padding: 18px 22px 6px; }
    .sec { margin-top: 18px; }
    .sec:first-child { margin-top: 0; }

    .sec h2 {
      display: flex;
      align-items: center;
      gap: 9px;
      font-family: var(--font-head);
      font-weight: 600;
      color: var(--navy);
      font-size: 13px;
      margin: 0 0 7px;
    }

    .sec h2::before {
      content: "";
      width: 16px;
      height: 3px;
      border-radius: 2px;
      background: var(--plum);
      flex-shrink: 0;
    }

    .sec p { margin: 0; font-size: 12.5px; line-height: 1.55; color: #3A3A42; }

    .pending {
      color: var(--plum-light);
      font-style: italic;
      background: #FBF5FB;
      border: 1px dashed var(--lilac-deep);
      border-radius: 10px;
      padding: 12px 14px;
    }

    .tag {
      display: inline-block;
      background: var(--lilac);
      color: var(--plum);
      font-size: 8px;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 10px;
      vertical-align: middle;
      font-family: var(--font-body);
      font-weight: 700;
    }

    .panel {
      background: #FBF5FB;
      border: 1px solid var(--lilac);
      border-radius: 14px;
      padding: 14px;
    }

    .protocol {
      background: linear-gradient(135deg, var(--plum) 0%, var(--plum-light) 100%);
      color: #fff;
      text-align: center;
      border-radius: 10px;
      padding: 11px;
      letter-spacing: 2px;
      font-family: var(--font-head);
      font-weight: 700;
      font-size: 13px;
      margin: 0 0 10px;
    }

    .steps { list-style: none; padding: 0; margin: 0; }
    .steps li { font-size: 11.5px; line-height: 1.5; margin: 5px 0; }
    .steps b { color: var(--plum); }
    .path-note {
      font-size: 11.5px;
      margin: 10px 0 0;
      color: var(--plum);
      font-weight: 500;
    }

    .swap {
      background: var(--lilac);
      border-left: 3px solid var(--plum);
      border-radius: 0 10px 10px 0;
      padding: 9px 12px;
      margin: 8px 0;
      font-size: 11.5px;
      line-height: 1.5;
    }

    .swap .when {
      display: block;
      color: var(--petrol);
      font-weight: 700;
      margin-bottom: 3px;
    }

    .foot {
      margin: 14px 22px 18px;
      padding: 11px 14px;
      background: #FBF5FB;
      border-radius: 10px;
      font-size: 10px;
      color: var(--muted);
      text-align: center;
    }

    .foot p { margin: 0; }
    .foot-disclaimer { font-style: italic; }
    .foot-copyright {
      margin-top: 7px;
      padding-top: 7px;
      border-top: 1px solid var(--lilac);
      font-weight: 600;
      color: var(--plum);
      letter-spacing: 0.3px;
    }

    .synthesis-body { padding-bottom: 18px; }
    .synthesis-body p {
      font-size: 12.5px;
      line-height: 1.6;
      color: #3a3a42;
      margin: 0 0 12px;
    }
    .synthesis-body p:last-child {
      margin-bottom: 0;
      font-weight: 600;
      color: var(--plum);
    }

    @media (max-width: 480px) {
      .head { flex-direction: column; align-items: flex-start; }
    }

    /* Impressão / PDF em A4 */
    @page {
      size: A4;
      margin: 0;
    }

    @media print {
      html { margin: 0; }
      body {
        background: #fff;
        margin: 0;
        padding: 12mm;
      }
      /* Garante que as cores da marca (plum, lilás, verde, vermelho) saiam no PDF */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .card {
        width: 100%;
        max-width: 100%;
        margin: 0 auto 8mm;
        box-shadow: none;
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .card:last-child { margin-bottom: 0; }
    }
  </style>
</head>
<body>
  ${cards}
</body>
</html>`
}

// Dados simulados para preview local (Comunicação espelha o exemplo oficial recuo_1).
export const REPORT_PREVIEW_DATA = {
  resultsByCompetency: {
    comunicacao_assertiva: { z1Count: 2, z2Count: 0, z3Count: 1, direction: 'recuo' },
    maturidade_emocional: { z1Count: 1, z2Count: 0, z3Count: 2, direction: 'recuo' },
    foco_resultado_produtividade: { z1Count: 0, z2Count: 3, z3Count: 0, direction: 'excesso' },
    visao_sistemica: { z1Count: 0, z2Count: 1, z3Count: 2, direction: 'excesso' },
    direcao_futuro: { z1Count: 0, z2Count: 0, z3Count: 3, direction: 'funcional' },
    protagonismo_profissional: { z1Count: 1, z2Count: 1, z3Count: 1, direction: 'oscilante' },
  },
}

export function renderExampleAssessmentReportHtml() {
  const selectedProfiles = Object.fromEntries(
    REPORT_COMPETENCY_KEYS.map((key) => {
      const result = REPORT_PREVIEW_DATA.resultsByCompetency[key]
      return [
        key,
        selectCompetencyProfile({
          competencyKey: key,
          z3Count: result.z3Count,
          direction: result.direction,
        }),
      ]
    }),
  )

  return renderAssessmentReportHtml({
    ...REPORT_PREVIEW_DATA,
    selectedProfiles,
  })
}

// Contagens representativas por perfil, só para o visual da roda/trilhas no preview.
// Obs.: oscilante_0 não ocorre no motor (a nível 0, z1+z2=3 nunca empata); fica aqui
// apenas para revisão do texto.
const PREVIEW_ZCOUNTS = {
  funcional_3: { z1Count: 0, z2Count: 0, z3Count: 3 },
  recuo_2: { z1Count: 1, z2Count: 0, z3Count: 2 },
  excesso_2: { z1Count: 0, z2Count: 1, z3Count: 2 },
  recuo_1: { z1Count: 2, z2Count: 0, z3Count: 1 },
  excesso_1: { z1Count: 0, z2Count: 2, z3Count: 1 },
  oscilante_1: { z1Count: 1, z2Count: 1, z3Count: 1 },
  recuo_0: { z1Count: 3, z2Count: 0, z3Count: 0 },
  excesso_0: { z1Count: 0, z2Count: 3, z3Count: 0 },
  oscilante_0: { z1Count: 2, z2Count: 1, z3Count: 0 },
}

// Preview interno: renderiza os 9 perfis de uma competência (para revisão dos textos).
export function renderCompetencyProfilesPreviewHtml(competencyKey) {
  const cards = PROFILE_KEYS.map((profileKey) => {
    const separatorIndex = profileKey.lastIndexOf('_')
    const direction = profileKey.slice(0, separatorIndex)
    const z3Count = Number(profileKey.slice(separatorIndex + 1))
    const profile = selectCompetencyProfile({ competencyKey, z3Count, direction })
    return renderCompetencyCard(competencyKey, PREVIEW_ZCOUNTS[profileKey], profile)
  }).join('')

  return renderShell(cards)
}
