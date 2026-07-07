import { RETEST_COMPETENCY_KEYS, RETEST_CONSENT_VERSION } from '../data/retest.js'

/**
 * Monta o payload do reteste a partir das respostas por competência.
 * answers: { [key]: { consciencia:1-5, prontidao:1-5, aplicacao:string } }
 */
export function createRetestPayload(email, answers, consentAccepted) {
  const responsesByCompetency = {}
  for (const key of RETEST_COMPETENCY_KEYS) {
    const a = answers[key] || {}
    responsesByCompetency[key] = {
      consciencia: a.consciencia,
      prontidao: a.prontidao,
      aplicacao: a.aplicacao,
    }
  }
  return {
    email: String(email || '').trim(),
    responsesByCompetency,
    consent: { accepted: Boolean(consentAccepted), version: RETEST_CONSENT_VERSION },
  }
}
