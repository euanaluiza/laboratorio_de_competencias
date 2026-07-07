import { useEffect, useState } from 'react'
import RetestIntro from './RetestIntro.jsx'
import RetestIdentify from './RetestIdentify.jsx'
import RetestStep from './RetestStep.jsx'
import { RETEST_STEPS } from '../data/retest.js'
import { submitRetest } from '../services/retestApi.js'
import { createRetestPayload } from '../services/retestPayload.js'

const DONE_MESSAGE =
  'Reteste concluído. A Ana Luiza vai te enviar a leitura do seu movimento pelo mesmo contato de sempre. Nos vemos por lá!'

function RetestApp() {
  const [screen, setScreen] = useState('intro') // intro | identify | questionnaire | submitting | done | error
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState({})
  const [stepIndex, setStepIndex] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [screen, stepIndex])

  const submit = async (finalAnswers) => {
    setScreen('submitting')
    try {
      await submitRetest(createRetestPayload(email, finalAnswers, true))
      setScreen('done')
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Falha ao enviar.')
      setScreen('error')
    }
  }

  const onStepChange = (nextAnswer) => {
    setAnswers((prev) => ({ ...prev, [RETEST_STEPS[stepIndex].key]: nextAnswer }))
  }

  const onNext = () => {
    if (stepIndex + 1 >= RETEST_STEPS.length) {
      void submit(answers)
      return
    }
    setStepIndex((i) => i + 1)
  }

  const renderScreen = () => {
    if (screen === 'intro') {
      return <RetestIntro onStart={() => setScreen('identify')} />
    }
    if (screen === 'identify') {
      return (
        <RetestIdentify
          initialEmail={email}
          onBack={() => setScreen('intro')}
          onEligible={(confirmedEmail) => { setEmail(confirmedEmail); setScreen('questionnaire') }}
        />
      )
    }
    if (screen === 'questionnaire') {
      return (
        <RetestStep
          step={RETEST_STEPS[stepIndex]}
          stepIndex={stepIndex}
          totalSteps={RETEST_STEPS.length}
          answer={answers[RETEST_STEPS[stepIndex].key]}
          onChange={onStepChange}
          onBack={() => setStepIndex((i) => Math.max(i - 1, 0))}
          onNext={onNext}
        />
      )
    }
    if (screen === 'submitting') {
      return (
        <main className="app-shell" aria-live="polite">
          <section className="result-panel">
            <h1>Enviando o seu reteste…</h1>
            <p className="status-pill status-saving">Aguarde enquanto concluímos o envio.</p>
          </section>
        </main>
      )
    }
    if (screen === 'error') {
      return (
        <main className="app-shell" aria-live="assertive">
          <section className="result-panel">
            <h1>Não foi possível enviar o reteste</h1>
            <div className="status-error-box">
              <p>{errorMessage}</p>
              <div className="button-row">
                <button className="primary-button" type="button" onClick={() => submit(answers)}>
                  Tentar novamente
                </button>
              </div>
            </div>
          </section>
        </main>
      )
    }
    // done
    return (
      <main className="app-shell">
        <section className="result-panel">
          <h1>Reteste concluído</h1>
          <p className="intro-copy">{DONE_MESSAGE}</p>
        </section>
      </main>
    )
  }

  return (
    <>
      {renderScreen()}
      <footer className="app-copyright">
        © {new Date().getFullYear()} Ana Luiza Carvalho · Laboratório de Competências
      </footer>
    </>
  )
}

export default RetestApp
