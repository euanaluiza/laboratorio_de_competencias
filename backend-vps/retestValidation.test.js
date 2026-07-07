import { test } from 'node:test'
import assert from 'node:assert/strict'
import { validateRetestEmail, validateRetestPayload, RETEST_APLICACAO_SET } from './retestValidation.js'
import { REPORT_COMPETENCY_KEYS } from './report/retestReport.js'

function respostasValidas() {
  const o = {}
  for (const k of REPORT_COMPETENCY_KEYS) o[k] = { consciencia: 3, prontidao: 4, aplicacao: 'aplicou' }
  return o
}
const payloadValido = () => ({
  email: 'Aluna@Exemplo.com ',
  responsesByCompetency: respostasValidas(),
  consent: { accepted: true, version: '1.0' },
})

test('e-mail normalizado (trim + lowercase)', () => {
  assert.equal(validateRetestEmail({ email: '  Foo@Bar.COM ' }), 'foo@bar.com')
})

test('e-mail ausente lança', () => {
  assert.throws(() => validateRetestEmail({}), /email/i)
})

test('payload válido passa e normaliza e-mail', () => {
  const out = validateRetestPayload(payloadValido())
  assert.equal(out.email, 'aluna@exemplo.com')
  assert.equal(Object.keys(out.responsesByCompetency).length, 6)
  assert.equal(out.consent.accepted, true)
})

test('faltando uma competência lança', () => {
  const p = payloadValido()
  delete p.responsesByCompetency.protagonismo_profissional
  assert.throws(() => validateRetestPayload(p), /competência/i)
})

test('consciencia fora de 1..5 lança', () => {
  const p = payloadValido()
  p.responsesByCompetency.visao_sistemica.consciencia = 6
  assert.throws(() => validateRetestPayload(p), /consciencia/i)
})

test('aplicacao inválida lança', () => {
  const p = payloadValido()
  p.responsesByCompetency.direcao_futuro.aplicacao = 'talvez'
  assert.throws(() => validateRetestPayload(p), /aplicacao/i)
})

test('consentimento não aceito lança', () => {
  const p = payloadValido()
  p.consent.accepted = false
  assert.throws(() => validateRetestPayload(p), /consentimento/i)
})

test('RETEST_APLICACAO_SET tem os 5 valores', () => {
  assert.equal(RETEST_APLICACAO_SET.size, 5)
  assert.ok(RETEST_APLICACAO_SET.has('nao_viveu'))
})
