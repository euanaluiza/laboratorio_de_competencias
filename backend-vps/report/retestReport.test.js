import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cpMedia, movimentoTexto, buildBlock } from './retestReport.js'
import { MOVIMENTO, COMECOU } from './retestTexts.js'

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
