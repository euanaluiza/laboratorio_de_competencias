import { useState } from 'react'
import IntroScreen from './components/IntroScreen.jsx'
import ParticipantForm from './components/ParticipantForm.jsx'
import QuestionnaireStep from './components/QuestionnaireStep.jsx'
import ResultScreen from './components/ResultScreen.jsx'
import { ASSESSMENT_STEPS } from './data/assessment.js'
import { submitAssessmentSubmission } from './services/assessmentApi.js'
import { createAssessmentResult } from './services/assessmentPayload.js'

const EMPTY_PARTICIPANT = {
  fullName: '',
  email: '',
  consentAccepted: false,
}

const INITIAL_SUBMISSION_STATE = {
  status: 'idle',
  message: '',
}

function App() {
  const [screen, setScreen] = useState('intro')
  const [participant, setParticipant] = useState(EMPTY_PARTICIPANT)
  const [answers, setAnswers] = useState({})
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [submissionState, setSubmissionState] = useState(INITIAL_SUBMISSION_STATE)

  const submitAssessment = async () => {
    const resultToSave = createAssessmentResult(participant, answers)
    setSubmissionState({ status: 'saving', message: 'Enviando suas respostas...' })
    setScreen('submitting')

    try {
      await submitAssessmentSubmission(resultToSave.payload)
      setSubmissionState({ status: 'saved', message: '' })
      setScreen('result')
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'O envio falhou sem informar um motivo.'
      setSubmissionState({ status: 'error', message: errorMessage })
      setScreen('submission-error')
    }
  }

  const handleParticipantSubmit = (nextParticipant) => {
    setParticipant(nextParticipant)
    setScreen('questionnaire')
  }

  const updateAnswer = (questionNumber, nextAnswer) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionNumber]: nextAnswer,
    }))
  }

  const goToNextStep = () => {
    const nextStepIndex = currentStepIndex + 1

    if (nextStepIndex >= ASSESSMENT_STEPS.length) {
      void submitAssessment()
      return
    }

    setCurrentStepIndex(nextStepIndex)
  }

  const returnToQuestionnaire = () => {
    setSubmissionState(INITIAL_SUBMISSION_STATE)
    setScreen('questionnaire')
  }

  if (screen === 'intro') {
    return <IntroScreen onStart={() => setScreen('participant')} />
  }

  if (screen === 'participant') {
    return (
      <ParticipantForm
        initialParticipant={participant}
        onBack={() => setScreen('intro')}
        onSubmit={handleParticipantSubmit}
      />
    )
  }

  if (screen === 'questionnaire') {
    return (
      <QuestionnaireStep
        answers={answers}
        currentStepIndex={currentStepIndex}
        onAnswerChange={updateAnswer}
        onBack={() => setCurrentStepIndex((index) => Math.max(index - 1, 0))}
        onNext={goToNextStep}
        step={ASSESSMENT_STEPS[currentStepIndex]}
        totalSteps={ASSESSMENT_STEPS.length}
      />
    )
  }

  if (screen === 'submitting') {
    return (
      <main className="app-shell" aria-live="polite">
        <section className="result-panel">
          <h1>Enviando suas respostas...</h1>
          <p className="status-pill status-saving">Aguarde enquanto concluímos o envio.</p>
        </section>
      </main>
    )
  }

  if (screen === 'submission-error') {
    return (
      <main className="app-shell" aria-live="assertive">
        <section className="result-panel">
          <h1>Não foi possível enviar suas respostas</h1>
          <div className="status-error-box">
            <p>{submissionState.message}</p>
            <div className="button-row">
              <button
                className="secondary-button"
                type="button"
                onClick={returnToQuestionnaire}
              >
                Voltar ao questionário
              </button>
              <button className="primary-button" type="button" onClick={submitAssessment}>
                Tentar enviar novamente
              </button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (screen === 'result') {
    return <ResultScreen />
  }

  return null
}

export default App
