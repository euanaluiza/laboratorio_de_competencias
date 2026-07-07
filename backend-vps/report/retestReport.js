import { competencyMeta } from './profileTexts.js'
import { COMECOU, AGORA_CP, AGORA_APLICACAO, MOVIMENTO } from './retestTexts.js'

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
