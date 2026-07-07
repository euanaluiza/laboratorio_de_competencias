import { test } from 'node:test'
import assert from 'node:assert/strict'
import { COMECOU, AGORA_CP, AGORA_APLICACAO, MOVIMENTO, SINTESE } from './retestTexts.js'

test('COMECOU tem os 4 códigos de direção e usa o placeholder [competência]', () => {
  assert.deepEqual(Object.keys(COMECOU).sort(), ['ff', 'func', 'osc', 'sub'])
  for (const text of Object.values(COMECOU)) assert.match(text, /\[competência\]/)
})

test('AGORA_CP cobre 1.0..5.0 sem buraco nos valores reais de cp_media', () => {
  const reais = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]
  for (const cp of reais) {
    const hit = AGORA_CP.filter((b) => cp >= b.min && cp <= b.max)
    assert.equal(hit.length, 1, `cp_media ${cp} deve casar exatamente 1 faixa`)
  }
})

test('AGORA_APLICACAO e MOVIMENTO têm todas as chaves esperadas', () => {
  assert.deepEqual(
    Object.keys(AGORA_APLICACAO).sort(),
    ['aplicou', 'aplicou_forte', 'nao_usou', 'nao_viveu', 'tentou'],
  )
  for (const k of ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'FALLBACK']) {
    assert.ok(MOVIMENTO[k] && MOVIMENTO[k].length > 0, `MOVIMENTO.${k} presente`)
  }
})

test('SINTESE tem A,B,C,D e a nota de nao_viveu', () => {
  for (const k of ['A', 'B', 'C', 'D', 'NOTA_NAO_VIVEU']) {
    assert.ok(SINTESE[k] && SINTESE[k].length > 0, `SINTESE.${k} presente`)
  }
})
