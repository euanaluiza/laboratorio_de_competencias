import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRetestPayload } from './retestPayload.js'
import { RETEST_COMPETENCY_KEYS } from '../data/retest.js'

test('createRetestPayload monta 6 competências, trim no e-mail e consent com versão', () => {
  const answers = {}
  for (const k of RETEST_COMPETENCY_KEYS) answers[k] = { consciencia: 3, prontidao: 4, aplicacao: 'aplicou' }
  const payload = createRetestPayload('  Aluna@X.com  ', answers, true)
  assert.equal(payload.email, 'Aluna@X.com')
  assert.equal(Object.keys(payload.responsesByCompetency).length, 6)
  assert.deepEqual(payload.responsesByCompetency.visao_sistemica, { consciencia: 3, prontidao: 4, aplicacao: 'aplicou' })
  assert.equal(payload.consent.accepted, true)
  assert.equal(payload.consent.version, '1.0')
})
