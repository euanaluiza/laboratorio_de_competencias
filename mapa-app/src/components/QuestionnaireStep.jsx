import ProgressBar from './ProgressBar.jsx'

function getQuestionAnswer(question, answers) {
  return answers[question.questionNumber]
}

function isQuestionComplete(question, answers) {
  const answer = getQuestionAnswer(question, answers)

  if (question.questionType === 'situation' || question.questionType === 'value') {
    return Boolean(answer?.selectedOption?.value)
  }

  if (question.questionType === 'thought') {
    return question.statements.every((statement) => {
      const statementAnswer = answer?.statements?.find((item) => item.id === statement.id)
      return Boolean(statementAnswer?.frequency?.value)
    })
  }

  if (question.questionType === 'open') {
    return typeof answer?.answerText === 'string' && answer.answerText.trim().length > 0
  }

  return false
}

function getIncompleteQuestionNumbers(step, answers) {
  return step.questions
    .filter((question) => !isQuestionComplete(question, answers))
    .map((question) => question.questionNumber)
}

function createSelectedOptionAnswer(question, option) {
  return {
    questionNumber: question.questionNumber,
    questionType: question.questionType,
    selectedOption: { ...option },
  }
}

function renderSingleChoiceQuestion(question, answers, onAnswerChange) {
  const selectedValue = getQuestionAnswer(question, answers)?.selectedOption?.value || ''

  return (
    <div className="option-stack">
      {question.options.map((option) => (
        <label className="option-row" key={option.value}>
          <input
            checked={selectedValue === option.value}
            name={`question-${question.questionNumber}`}
            onChange={() => {
              onAnswerChange(
                question.questionNumber,
                createSelectedOptionAnswer(question, option),
              )
            }}
            type="radio"
            value={option.value}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}

function createThoughtAnswer(question, currentAnswer, selectedStatement, frequency) {
  return {
    questionNumber: question.questionNumber,
    questionType: question.questionType,
    statements: question.statements.map((statement) => {
      const currentStatementAnswer = currentAnswer?.statements?.find((item) => {
        return item.id === statement.id
      })

      return {
        id: statement.id,
        text: statement.text,
        zone: statement.zone,
        frequency:
          statement.id === selectedStatement.id
            ? { ...frequency }
            : currentStatementAnswer?.frequency || null,
      }
    }),
  }
}

function renderThoughtQuestion(question, answers, onAnswerChange) {
  const currentAnswer = getQuestionAnswer(question, answers)

  return (
    <div className="thought-stack">
      {question.statements.map((statement) => {
        const statementAnswer = currentAnswer?.statements?.find((item) => {
          return item.id === statement.id
        })
        const selectedFrequency = statementAnswer?.frequency?.value || ''

        return (
          <fieldset className="thought-group" key={statement.id}>
            <legend className="thought-statement">{statement.text}</legend>
            <div className="frequency-options">
              {question.frequencyOptions.map((frequency) => (
                <label className="option-row" key={frequency.value}>
                  <input
                    checked={selectedFrequency === frequency.value}
                    name={`question-${question.questionNumber}-${statement.id}`}
                    onChange={() => {
                      onAnswerChange(
                        question.questionNumber,
                        createThoughtAnswer(question, currentAnswer, statement, frequency),
                      )
                    }}
                    type="radio"
                    value={frequency.value}
                  />
                  <span>{frequency.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )
      })}
    </div>
  )
}

function renderOpenQuestion(question, answers, onAnswerChange) {
  const answerText = getQuestionAnswer(question, answers)?.answerText || ''

  return (
    <textarea
      className="field-input textarea-input"
      onChange={(event) => {
        onAnswerChange(question.questionNumber, {
          questionNumber: question.questionNumber,
          questionType: question.questionType,
          answerText: event.target.value,
        })
      }}
      rows="5"
      value={answerText}
    />
  )
}

function renderQuestionInput(question, answers, onAnswerChange) {
  if (question.questionType === 'situation' || question.questionType === 'value') {
    return renderSingleChoiceQuestion(question, answers, onAnswerChange)
  }

  if (question.questionType === 'thought') {
    return renderThoughtQuestion(question, answers, onAnswerChange)
  }

  if (question.questionType === 'open') {
    return renderOpenQuestion(question, answers, onAnswerChange)
  }

  return null
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
            {isLastStep ? 'Enviar respostas' : 'Próxima etapa'}
          </button>
        </div>
      </section>
    </main>
  )
}

export default QuestionnaireStep
