import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cpMedia, movimentoTexto, buildBlock, buildSintese, buildRetestReport, REPORT_COMPETENCY_KEYS } from './retestReport.js'
import { MOVIMENTO, COMECOU, SINTESE } from './retestTexts.js'

test('cpMedia é a média de consciência e prontidão', () => {
  assert.equal(cpMedia(4, 5), 4.5)
  assert.equal(cpMedia(1, 2), 1.5)
})

test('M6 (nao_viveu) sobrepõe qualquer outra leitura', () => {
  assert.equal(movimentoTexto({ dirCode: 'sub', cp: 5, aplicacao: 'nao_viveu' }), MOVIMENTO.M6)
  assert.equal(movimentoTexto({ dirCode: 'func', cp: 1, aplicacao: 'nao_viveu' }), MOVIMENTO.M6)
})

test('M2 (desvio + aplicou) vem antes de M1 mesmo com cp alta', () => {
  assert.equal(movimentoTexto({ dirCode: 'ff', cp: 4.5, aplicacao: 'aplicou' }), MOVIMENTO.M2)
  assert.equal(movimentoTexto({ dirCode: 'sub', cp: 4.5, aplicacao: 'aplicou_forte' }), MOVIMENTO.M2)
})

test('M1: desvio + cp>=3.5 sem aplicação', () => {
  assert.equal(movimentoTexto({ dirCode: 'osc', cp: 3.5, aplicacao: 'nao_usou' }), MOVIMENTO.M1)
})

test('M3: desvio + cp<2.5 + não aplicou', () => {
  assert.equal(movimentoTexto({ dirCode: 'sub', cp: 2.0, aplicacao: 'nao_usou' }), MOVIMENTO.M3)
  assert.equal(movimentoTexto({ dirCode: 'sub', cp: 2.0, aplicacao: 'tentou' }), MOVIMENTO.M3)
})

test('M4: func + cp>=3.5', () => {
  assert.equal(movimentoTexto({ dirCode: 'func', cp: 4.0, aplicacao: 'nao_usou' }), MOVIMENTO.M4)
})

test('M5: func + cp<3.0', () => {
  assert.equal(movimentoTexto({ dirCode: 'func', cp: 2.5, aplicacao: 'nao_usou' }), MOVIMENTO.M5)
})

test('FALLBACK: desvio com 2.5<=cp<3.5 sem aplicação; func com 3.0<=cp<3.5', () => {
  assert.equal(movimentoTexto({ dirCode: 'sub', cp: 3.0, aplicacao: 'nao_usou' }), MOVIMENTO.FALLBACK)
  assert.equal(movimentoTexto({ dirCode: 'func', cp: 3.0, aplicacao: 'nao_usou' }), MOVIMENTO.FALLBACK)
})

test('buildBlock monta começou (por direção) + agora (cp + aplicação) + movimento', () => {
  const block = buildBlock(
    'comunicacao_assertiva',
    { direction: 'recuo', z3Count: 1 },
    { consciencia: 4, prontidao: 4, aplicacao: 'aplicou' },
  )
  assert.equal(block.key, 'comunicacao_assertiva')
  assert.ok(block.title.length > 0)
  // recuo -> sub, com o nome da competência no lugar do placeholder
  assert.match(block.comecou, /subexpressão/)
  assert.doesNotMatch(block.comecou, /\[competência\]/)
  // agora = frase da faixa 4.0-5.0 + frase de "aplicou"
  assert.match(block.agora, /consciência alta/)
  assert.match(block.agora, /primeiro uso/)
  // desvio + aplicou -> M2
  assert.equal(block.movimento, MOVIMENTO.M2)
})

// Helper: monta os 6 iniciais/respostas a partir de arrays curtos.
function seis(fn) {
  const o = {}
  REPORT_COMPETENCY_KEYS.forEach((k, i) => { o[k] = fn(i) })
  return o
}

test('SINTESE A: n_aplicacoes >= 3', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis((i) => ({ consciencia: 3, prontidao: 3, aplicacao: i < 3 ? 'aplicou' : 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.equal(paragraphs[0], SINTESE.A)
})

test('SINTESE B: >=3 competências com avanço (cp>=3.5, não-func) e n_aplicacoes<3', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis((i) => ({ consciencia: 4, prontidao: 4, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.equal(paragraphs[0], SINTESE.B)
})

test('SINTESE C: 1..2 competências com avanço', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis((i) => ({ consciencia: i < 2 ? 4 : 2, prontidao: i < 2 ? 4 : 2, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.equal(paragraphs[0], SINTESE.C)
})

test('SINTESE D: 0 competências com avanço', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis(() => ({ consciencia: 2, prontidao: 2, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.equal(paragraphs[0], SINTESE.D)
})

test('nao_viveu não conta em n_aplicacoes e, com >=3, anexa a nota', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  // 2 aplicou + 4 nao_viveu => n_aplicacoes=2 (<3) => não é A; nao_viveu>=3 => nota no fim.
  const resp = seis((i) => ({ consciencia: 2, prontidao: 2, aplicacao: i < 2 ? 'aplicou' : 'nao_viveu' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.notEqual(paragraphs[0], SINTESE.A)
  assert.equal(paragraphs[paragraphs.length - 1], SINTESE.NOTA_NAO_VIVEU)
})

test('func não conta como competência com avanço (avanço exige direcao != func)', () => {
  const initial = seis(() => ({ direction: 'funcional', z3Count: 3 }))
  const resp = seis(() => ({ consciencia: 5, prontidao: 5, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.equal(paragraphs[0], SINTESE.D) // 0 avanços apesar de cp alta, porque tudo é func
})

test('buildRetestReport devolve order + 6 blocks + sintese', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis(() => ({ consciencia: 4, prontidao: 4, aplicacao: 'aplicou' }))
  const out = buildRetestReport({ initialResults: initial, retestResponses: resp })
  assert.deepEqual(out.order, REPORT_COMPETENCY_KEYS)
  assert.equal(Object.keys(out.blocks).length, 6)
  assert.ok(out.sintese.paragraphs.length >= 1)
  assert.ok(out.blocks.comunicacao_assertiva.movimento.length > 0)
})
