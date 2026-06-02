import { useState } from 'react'
import { CONSENT_TEXT } from '../data/assessment.js'

function createInitialDraft(initialParticipant) {
  return {
    fullName: initialParticipant.fullName,
    email: initialParticipant.email,
    className: initialParticipant.className,
    consentAccepted: initialParticipant.consentAccepted,
  }
}

function validateParticipant(draft) {
  return {
    fullName: draft.fullName.trim() ? '' : 'Informe seu nome completo.',
    email: draft.email.trim() ? '' : 'Informe seu e-mail.',
    consentAccepted: draft.consentAccepted ? '' : 'O aceite é obrigatório.',
  }
}

function hasParticipantErrors(errors) {
  return Object.values(errors).some((message) => Boolean(message))
}

function ParticipantForm({ initialParticipant, onBack, onSubmit }) {
  const [draft, setDraft] = useState(createInitialDraft(initialParticipant))
  const [errors, setErrors] = useState({})

  const updateDraftField = (fieldName, nextValue) => {
    setDraft((currentDraft) => ({
      ...currentDraft,
      [fieldName]: nextValue,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateParticipant(draft)
    setErrors(nextErrors)

    if (hasParticipantErrors(nextErrors)) {
      return
    }

    onSubmit(draft)
  }

  return (
    <main className="app-shell">
      <form className="form-panel" onSubmit={handleSubmit}>
        <p className="eyebrow">Identificação e consentimento</p>
        <h1>Antes de começar</h1>
        <div className="field-grid">
          <label className="field-label">
            Nome completo
            <input
              autoComplete="name"
              className={errors.fullName ? 'field-input field-input-error' : 'field-input'}
              onChange={(event) => updateDraftField('fullName', event.target.value)}
              type="text"
              value={draft.fullName}
            />
            {errors.fullName ? <span className="field-error">{errors.fullName}</span> : null}
          </label>
          <label className="field-label">
            E-mail
            <input
              autoComplete="email"
              className={errors.email ? 'field-input field-input-error' : 'field-input'}
              onChange={(event) => updateDraftField('email', event.target.value)}
              type="email"
              value={draft.email}
            />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>
          <label className="field-label">
            Turma
            <input
              className="field-input"
              onChange={(event) => updateDraftField('className', event.target.value)}
              type="text"
              value={draft.className}
            />
          </label>
        </div>
        <section className="consent-box" aria-label="Termo de consentimento">
          {CONSENT_TEXT.split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <label className="checkbox-row">
          <input
            checked={draft.consentAccepted}
            onChange={(event) => updateDraftField('consentAccepted', event.target.checked)}
            type="checkbox"
          />
          Li e concordo com o tratamento dos meus dados para esta atividade.
        </label>
        {errors.consentAccepted ? (
          <span className="field-error">{errors.consentAccepted}</span>
        ) : null}
        <div className="button-row">
          <button className="secondary-button" type="button" onClick={onBack}>
            Voltar
          </button>
          <button className="primary-button" type="submit">
            Continuar
          </button>
        </div>
      </form>
    </main>
  )
}

export default ParticipantForm
