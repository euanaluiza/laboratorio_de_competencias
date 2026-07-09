import { test } from 'node:test'
import assert from 'node:assert/strict'
import { COMECOU, AGORA_ESTADO, AGORA_APLICACAO, MOVIMENTO, SINTESE, RODAPE } from './retestTexts.js'

test('COMECOU tem os 4 códigos de direção e usa o placeholder [competência]', () => {
  assert.deepEqual(Object.keys(COMECOU).sort(), ['ff', 'func', 'osc', 'sub'])
  for (const text of Object.values(COMECOU)) assert.match(text, /\[competência\]/)
})

test('AGORA_ESTADO: desvio e funcional, cada um com alta/media/baixa', () => {
  for (const partiu of ['desvio', 'funcional']) {
    assert.deepEqual(Object.keys(AGORA_ESTADO[partiu]).sort(), ['alta', 'baixa', 'media'])
  }
})

test('AGORA_APLICACAO: desvio e funcional, cada um com as 5 opções', () => {
  const esperado = ['aplicou', 'aplicou_forte', 'nao_usou', 'nao_viveu', 'tentou']
  for (const partiu of ['desvio', 'funcional']) {
    assert.deepEqual(Object.keys(AGORA_APLICACAO[partiu]).sort(), esperado)
  }
})

test('MOVIMENTO tem NV + R1..R10, todos preenchidos', () => {
  const keys = ['NV', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10']
  assert.deepEqual(Object.keys(MOVIMENTO).sort(), keys.slice().sort())
  for (const k of keys) assert.ok(MOVIMENTO[k] && MOVIMENTO[k].length > 0, `MOVIMENTO.${k}`)
})

test('SINTESE tem abertura, A-D, adendo e fechamento; RODAPE presente', () => {
  for (const k of ['ABERTURA', 'A', 'B', 'C', 'D', 'ADENDO_NAO_VIVEU', 'FECHAMENTO']) {
    assert.ok(SINTESE[k] && SINTESE[k].length > 0, `SINTESE.${k}`)
  }
  assert.ok(RODAPE && RODAPE.length > 0)
})

test('v3 removeu referências temporais fixas (3 semanas / 21 dias)', () => {
  const all = [
    ...Object.values(COMECOU),
    ...Object.values(AGORA_ESTADO.desvio), ...Object.values(AGORA_ESTADO.funcional),
    ...Object.values(AGORA_APLICACAO.desvio), ...Object.values(AGORA_APLICACAO.funcional),
    ...Object.values(MOVIMENTO),
    ...Object.values(SINTESE), RODAPE,
  ].join(' ')
  assert.doesNotMatch(all, /3 semanas|três semanas/i)
  assert.doesNotMatch(all, /21 dias/i)
})
