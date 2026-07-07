const ELIGIBILITY_URL = '/api/retest-eligibility'
const SUBMISSIONS_URL = '/api/retest-submissions'

async function readBody(response) {
  try { return await response.json() } catch { return null }
}

export async function checkRetestEligibility(email, fetchClient = fetch) {
  const response = await fetchClient(ELIGIBILITY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  const body = await readBody(response)
  if (!response.ok || !body?.ok) {
    throw new Error(body?.error || `Falha ao verificar elegibilidade (HTTP ${response.status}).`)
  }
  return Boolean(body.eligible)
}

export async function submitRetest(payload, fetchClient = fetch) {
  const response = await fetchClient(SUBMISSIONS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await readBody(response)
  if (!response.ok || !body?.ok) {
    throw new Error(body?.error || `Falha ao enviar o reteste (HTTP ${response.status}).`)
  }
  return body
}
