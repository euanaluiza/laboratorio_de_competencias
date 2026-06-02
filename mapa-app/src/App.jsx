import { useMemo, useState } from 'react'
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
  className: '',
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

  const assessmentResult = useMemo(() => {
    return createAssessmentResult(participant, answers)
  }, [participant, answers])

  const saveAssessmentResult = async (resultToSave) => {
    setSubmissionState({ status: 'saving', message: 'Salvando resultado...' })

    try {
      await submitAssessmentSubmission(resultToSave.payload)
      setSubmissionState({ status: 'saved', message: 'Resultado salvo com sucesso.' })
    } catch (error) {
      setSubmissionState({ status: 'error', message: error.message })
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

  const showResult = () => {
    const resultToSave = createAssessmentResult(participant, answers)
    setScreen('result')
    void saveAssessmentResult(resultToSave)
  }

  const goToNextStep = () => {
    const nextStepIndex = currentStepIndex + 1

    if (nextStepIndex >= ASSESSMENT_STEPS.length) {
      showResult()
      return
    }

    setCurrentStepIndex(nextStepIndex)
  }

  const restartActivity = () => {
    setScreen('intro')
    setParticipant(EMPTY_PARTICIPANT)
    setAnswers({})
    setCurrentStepIndex(0)
    setSubmissionState(INITIAL_SUBMISSION_STATE)
  }

  const retrySubmission = () => {
    void saveAssessmentResult(assessmentResult)
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

  return (
    <ResultScreen
      assessmentResult={assessmentResult}
      onRestart={restartActivity}
      onRetry={retrySubmission}
      submissionState={submissionState}
    />
  )
}

export default App
