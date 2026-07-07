import { competencyMeta } from './profileTexts.js'
import { COMECOU, AGORA_CP, AGORA_APLICACAO, MOVIMENTO, SINTESE } from './retestTexts.js'

export const DIR_TO_CODE = { recuo: 'sub', excesso: 'ff', oscilante: 'osc', funcional: 'func' }

export function cpMedia(consciencia, prontidao) {
  return (Number(consciencia) + Number(prontidao)) / 2
}

function agoraCpText(cp) {
  const band = AGORA_CP.find((b) => cp >= b.min && cp <= b.max)
  return band ? band.text : AGORA_CP[AGORA_CP.length - 1].text
}

// Leitura do movimento — primeira regra que casar, nesta ordem exata.
export function movimentoTexto({ dirCode, cp, aplicacao }) {
  if (aplicacao === 'nao_viveu') return MOVIMENTO.M6
  const aplicou = aplicacao === 'aplicou' || aplicacao === 'aplicou_forte'
  const desvio = dirCode === 'sub' || dirCode === 'ff' || dirCode === 'osc'
  if (desvio) {
    if (aplicou) return MOVIMENTO.M2
    if (cp >= 3.5) return MOVIMENTO.M1
    if (cp < 2.5) return MOVIMENTO.M3
    return MOVIMENTO.FALLBACK
  }
  // func
  if (cp >= 3.5) return MOVIMENTO.M4
  if (cp < 3.0) return MOVIMENTO.M5
  return MOVIMENTO.FALLBACK
}

export function buildBlock(competencyKey, initial, resposta) {
  const title = competencyMeta[competencyKey]?.title || competencyKey
  const dirCode = DIR_TO_CODE[initial?.direction] || 'func'
  const cp = cpMedia(resposta.consciencia, resposta.prontidao)

  const comecou = COMECOU[dirCode].replaceAll('[competência]', title)
  const agora = `${agoraCpText(cp)} ${AGORA_APLICACAO[resposta.aplicacao]}`
  const movimento = movimentoTexto({ dirCode, cp, aplicacao: resposta.aplicacao })

  return { key: competencyKey, title, comecou, agora, movimento }
}

export const REPORT_COMPETENCY_KEYS = [
  'comunicacao_assertiva',
  'maturidade_emocional',
  'foco_resultado_produtividade',
  'visao_sistemica',
  'direcao_futuro',
  'protagonismo_profissional',
]

export function buildSintese(order, initialResults, retestResponses) {
  let nAvanco = 0
  let nAplicacoes = 0
  let nNaoViveu = 0

  for (const key of order) {
    const initial = initialResults?.[key] || {}
    const r = retestResponses?.[key] || {}
    const dirCode = DIR_TO_CODE[initial.direction] || 'func'
    const cp = cpMedia(r.consciencia, r.prontidao)

    if (cp >= 3.5 && dirCode !== 'func') nAvanco += 1
    if (r.aplicacao === 'aplicou' || r.aplicacao === 'aplicou_forte') nAplicacoes += 1
    if (r.aplicacao === 'nao_viveu') nNaoViveu += 1
  }

  const paragraphs = []
  if (nAplicacoes >= 3) paragraphs.push(SINTESE.A)
  else if (nAvanco >= 3) paragraphs.push(SINTESE.B)
  else if (nAvanco >= 1) paragraphs.push(SINTESE.C)
  else paragraphs.push(SINTESE.D)

  if (nNaoViveu >= 3) paragraphs.push(SINTESE.NOTA_NAO_VIVEU)

  return { paragraphs }
}

export function buildRetestReport({ initialResults, retestResponses }) {
  const blocks = {}
  for (const key of REPORT_COMPETENCY_KEYS) {
    blocks[key] = buildBlock(key, initialResults?.[key] || {}, retestResponses?.[key] || {})
  }
  return {
    order: REPORT_COMPETENCY_KEYS,
    blocks,
    sintese: buildSintese(REPORT_COMPETENCY_KEYS, initialResults, retestResponses),
  }
}
