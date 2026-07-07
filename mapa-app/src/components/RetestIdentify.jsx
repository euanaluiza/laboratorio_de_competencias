import { useState } from 'react'
import { RETEST_CONSENT_TEXT } from '../data/retest.js'
import { checkRetestEligibility } from '../services/retestApi.js'

function RetestIdentify({ initialEmail, onBack, onEligible }) {
  const [email, setEmail] = useState(initialEmail || '')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState('idle') // idle | checking | error | blocked
  const [message, setMessage] = useState('')

  const handleContinue = async () => {
    const trimmed = email.trim()
    if (!trimmed || !consent) {
      setStatus('error')
      setMessage('Informe o e-mail e aceite o consentimento para continuar.')
      return
    }
    setStatus('checking')
    setMessage('')
    try {
      const eligible = await checkRetestEligibility(trimmed)
      if (!eligible) {
        setStatus('blocked')
        setMessage(
          'Não encontramos o seu diagnóstico inicial com esse e-mail. Confira se é o mesmo e-mail que você usou no questionário inicial — ou fale com a Ana Luiza.',
        )
        return
      }
      onEligible(trimmed)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Não foi possível verificar agora.')
    }
  }

  return (
    <main className="app-shell">
      <section className="result-panel">
        <p className="eyebrow">Identificação</p>
        <h1>Vamos localizar o seu mapa</h1>
        <p className="intro-copy">
          Digite o mesmo e-mail que você usou no questionário inicial. É assim que a gente liga o seu
          reteste ao seu diagnóstico de 3 semanas atrás.
        </p>
        <label className="field-label" htmlFor="retest-email">E-mail</label>
        <input
          id="retest-email"
          className="field-input"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="option-row" style={{ marginTop: 14 }}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>{RETEST_CONSENT_TEXT}</span>
        </label>
        {message ? <p className="field-error" aria-live="polite">{message}</p> : null}
        <div className="button-row">
          <button className="secondary-button" type="button" onClick={onBack}>Voltar</button>
          <button
            className="primary-button"
            type="button"
            onClick={handleContinue}
            disabled={status === 'checking'}
          >
            {status === 'checking' ? 'Verificando…' : 'Continuar'}
          </button>
        </div>
      </section>
    </main>
  )
}

export default RetestIdentify
