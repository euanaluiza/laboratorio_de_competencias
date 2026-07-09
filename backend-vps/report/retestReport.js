import { competencyMeta } from './profileTexts.js'
import { COMECOU, AGORA_ESTADO, AGORA_APLICACAO, MOVIMENTO, SINTESE, CAMINHO } from './retestTexts.js'

export const DIR_TO_CODE = { recuo: 'sub', excesso: 'ff', oscilante: 'osc', funcional: 'func' }

export const REPORT_COMPETENCY_KEYS = [
  'comunicacao_assertiva',
  'maturidade_emocional',
  'foco_resultado_produtividade',
  'visao_sistemica',
  'direcao_futuro',
  'protagonismo_profissional',
]

export function cpMedia(consciencia, prontidao) {
  return (Number(consciencia) + Number(prontidao)) / 2
}

// Cobre todo o intervalo 1.0..5.0 sem buracos.
export function faixaCp(cp) {
  if (cp >= 3.5) return 'alta'
  if (cp >= 2.5) return 'media'
  return 'baixa'
}

export function partiuDe(dirCode) {
  return dirCode === 'func' ? 'funcional' : 'desvio'
}

// Métricas derivadas de um par (diagnóstico inicial, resposta do reteste).
function derive(initial, resposta) {
  const dirCode = DIR_TO_CODE[initial?.direction] || 'func'
  const cp = cpMedia(resposta.consciencia, resposta.prontidao)
  const aplicacao = resposta.aplicacao
  return {
    dirCode,
    partiu: partiuDe(dirCode),
    cp,
    faixa: faixaCp(cp),
    aplicacao,
    usou: aplicacao === 'aplicou' || aplicacao === 'aplicou_forte',
  }
}

// Leitura do movimento — matriz completa (R0=NV tem prioridade; R1..R10 cruzam
// partiu_de × faixa_cp × usou). Nenhum caso cai em fallback.
export function movimentoTexto({ partiu, faixa, usou, aplicacao }) {
  if (aplicacao === 'nao_viveu') return MOVIMENTO.NV
  if (partiu === 'desvio') {
    if (faixa === 'alta') return usou ? MOVIMENTO.R1 : MOVIMENTO.R2
    if (faixa === 'media') return usou ? MOVIMENTO.R3 : MOVIMENTO.R4
    return usou ? MOVIMENTO.R5 : MOVIMENTO.R6
  }
  // funcional
  if (faixa === 'alta') return usou ? MOVIMENTO.R7 : MOVIMENTO.R8
  if (faixa === 'media') return MOVIMENTO.R9
  return MOVIMENTO.R10
}

export function buildBlock(competencyKey, initial, resposta) {
  const title = competencyMeta[competencyKey]?.title || competencyKey
  const m = derive(initial, resposta)

  const comecou = COMECOU[m.dirCode].replaceAll('[competência]', title)
  const estado = AGORA_ESTADO[m.partiu][m.faixa]
  const aplicacao = AGORA_APLICACAO[m.partiu][m.aplicacao]
  const agora = `${estado} ${aplicacao}`
  const movimento = movimentoTexto(m)
  const caminho = CAMINHO[competencyKey] // quadro fixo, não depende de nenhuma variável

  return { key: competencyKey, title, comecou, agora, movimento, caminho }
}

// Síntese: abertura fixa + um texto variável + adendo condicional + fechamento fixo.
export function buildSintese(order, initialResults, retestResponses) {
  let nAvanco = 0
  let nAplicacoes = 0
  let nNaoViveu = 0

  for (const key of order) {
    const m = derive(initialResults?.[key] || {}, retestResponses?.[key] || {})
    if (m.faixa === 'alta' && m.partiu === 'desvio') nAvanco += 1
    if (m.usou) nAplicacoes += 1
    if (m.aplicacao === 'nao_viveu') nNaoViveu += 1
  }

  const paragraphs = [SINTESE.ABERTURA]
  if (nAplicacoes >= 3) paragraphs.push(SINTESE.A)
  else if (nAvanco >= 3) paragraphs.push(SINTESE.B)
  else if (nAvanco >= 1) paragraphs.push(SINTESE.C)
  else paragraphs.push(SINTESE.D)

  if (nNaoViveu >= 3) paragraphs.push(SINTESE.ADENDO_NAO_VIVEU)
  paragraphs.push(SINTESE.FECHAMENTO)

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
