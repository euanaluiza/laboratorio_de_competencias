import ProgressBar from './ProgressBar.jsx'

const MAX_MULTI_SELECTIONS = 2

function isQuestionComplete(question, answers) {
  const answer = answers[question.questionNumber]

  if (question.questionType === 'multi') {
    return Array.isArray(answer) && answer.length > 0
  }

  return typeof answer === 'string' && answer.trim().length > 0
}

function getIncompleteQuestionNumbers(step, answers) {
  return step.questions
    .filter((question) => !isQuestionComplete(question, answers))
    .map((question) => question.questionNumber)
}

function getMultiSelection(question, answers) {
  const answer = answers[question.questionNumber]
  return Array.isArray(answer) ? answer : []
}

function createMultiSelection(currentSelection, optionValue) {
  if (currentSelection.includes(optionValue)) {
    return currentSelection.filter((value) => value !== optionValue)
  }

  if (currentSelection.length >= MAX_MULTI_SELECTIONS) {
    return currentSelection
  }

  return [...currentSelection, optionValue]
}

function renderSingleQuestion(question, answers, onAnswerChange) {
  const selectedValue = answers[question.questionNumber] || ''

  return (
    <div className="option-stack">
      {question.options.map((option) => (
        <label className="option-row" key={option.value}>
          <input
            checked={selectedValue === option.value}
            name={`question-${question.questionNumber}`}
            onChange={() => onAnswerChange(question.questionNumber, option.value)}
            type="radio"
            value={option.value}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}

function renderMultiQuestion(question, answers, onAnswerChange) {
  const selectedOptions = getMultiSelection(question, answers)

  return (
    <div className="option-stack">
      {question.options.map((option) => (
        <label className="option-row" key={option.value}>
          <input
            checked={selectedOptions.includes(option.value)}
            onChange={() => {
              onAnswerChange(
                question.questionNumber,
                createMultiSelection(selectedOptions, option.value),
              )
            }}
            type="checkbox"
          />
          <span>{option.label}</span>
        </label>
      ))}
      <p className="helper-text">Escolha no máximo 2 alternativas.</p>
    </div>
  )
}

function renderOpenQuestion(question, answers, onAnswerChange) {
  const answerText = answers[question.questionNumber] || ''

  return (
    <textarea
      className="field-input textarea-input"
      onChange={(event) => onAnswerChange(question.questionNumber, event.target.value)}
      rows="5"
      value={answerText}
    />
  )
}

function renderQuestionInput(question, answers, onAnswerChange) {
  if (question.questionType === 'single') {
    return renderSingleQuestion(question, answers, onAnswerChange)
  }

  if (question.questionType === 'multi') {
    return renderMultiQuestion(question, answers, onAnswerChange)
  }

  return renderOpenQuestion(question, answers, onAnswerChange)
}

function QuestionnaireStep({
  answers,
  currentStepIndex,
  onAnswerChange,
  onBack,
  onNext,
  step,
  totalSteps,
}) {
  const incompleteQuestions = getIncompleteQuestionNumbers(step, answers)
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === totalSteps - 1

  const handleNext = () => {
    if (incompleteQuestions.length > 0) {
      return
    }

    onNext()
  }

  return (
    <main className="app-shell">
      <section className="questionnaire-panel">
        <ProgressBar currentStepIndex={currentStepIndex} totalSteps={totalSteps} />
        <p className="eyebrow">Questionário</p>
        <h1>{step.title}</h1>
        <div className="question-list">
          {step.questions.map((question) => (
            <article className="question-card" key={question.questionNumber}>
              <p className="question-number">Pergunta {question.questionNumber}</p>
              <h2>{question.text}</h2>
              {renderQuestionInput(question, answers, onAnswerChange)}
              {incompleteQuestions.includes(question.questionNumber) ? (
                <p className="field-error">Esta resposta é obrigatória.</p>
              ) : null}
            </article>
          ))}
        </div>
        <div className="button-row">
          <button className="secondary-button" disabled={isFirstStep} type="button" onClick={onBack}>
            Voltar
          </button>
          <button className="primary-button" type="button" onClick={handleNext}>
            {isLastStep ? 'Ver resultado' : 'Próxima etapa'}
          </button>
        </div>
      </section>
    </main>
  )
}

export default QuestionnaireStep
