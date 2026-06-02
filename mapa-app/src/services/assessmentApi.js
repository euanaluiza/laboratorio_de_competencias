const ASSESSMENT_SUBMISSIONS_URL = '/api/assessment-submissions'

async function readResponseBody(response) {
  try {
    return await response.json()
  } catch {
    return null
  }
}

function createSubmissionError(response, responseBody) {
  const detail = responseBody?.error || responseBody?.message || 'sem detalhe'
  return new Error(
    `Falha ao salvar em ${ASSESSMENT_SUBMISSIONS_URL}: recebido HTTP ${response.status}; esperado HTTP 2xx. Detalhe: ${detail}.`,
  )
}

/**
 * Sends the complete assessment result to the backend.
 *
 * Example:
 * submitAssessmentSubmission(payload)
 */
export async function submitAssessmentSubmission(payload, fetchClient = fetch) {
  const response = await fetchClient(ASSESSMENT_SUBMISSIONS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const responseBody = await readResponseBody(response)

  if (!response.ok) {
    throw createSubmissionError(response, responseBody)
  }

  return responseBody
}
