import { ASSESSMENT_STEPS, COMPETENCIES, QUESTIONS } from '../data/assessment.js'
import { getInterpretationBand } from '../services/assessmentPayload.js'

function findQuestion(questionNumber) {
  return QUESTIONS.find((question) => question.questionNumber === questionNumber)
}

function findOptionLabel(question, optionValue) {
  const option = question.options.find((currentOption) => currentOption.value === optionValue)
  return option?.label || optionValue
}

function getQualitativeQuestions() {
  return ASSESSMENT_STEPS.flatMap((step) => {
    return step.questions.filter((question) => question.questionType === 'multi')
  })
}

function renderSubmissionStatus(submissionState, onRetry) {
  if (submissionState.status === 'saving') {
    return <p className="status-pill status-saving">Salvando resultado...</p>
  }

  if (submissionState.status === 'saved') {
    return <p className="status-pill status-saved">Resultado salvo com sucesso.</p>
  }

  if (submissionState.status === 'error') {
    return (
      <div className="status-error-box">
        <p>Erro ao salvar: {submissionState.message}</p>
        <button className="secondary-button" type="button" onClick={onRetry}>
          Tentar novamente
        </button>
      </div>
    )
  }

  return null
}

function ResultScreen({ assessmentResult, onRestart, onRetry, submissionState }) {
  const qualitativeQuestions = getQualitativeQuestions()

  return (
    <main className="app-shell result-shell">
      <section className="result-panel">
        <div className="result-header">
          <div>
            <p className="eyebrow">Resultado individual</p>
            <h1>Seu Mapa de Competências Comportamentais</h1>
          </div>
          <div className="no-print">{renderSubmissionStatus(submissionState, onRetry)}</div>
        </div>

        <section className="chart-section" aria-label="Pontuação por competência">
          {COMPETENCIES.map((competency) => {
            const score = assessmentResult.scores[competency.key]
            return (
              <div className="chart-row" key={competency.key}>
                <div className="chart-label">
                  <span>{competency.label}</span>
                  <strong>{score}%</strong>
                </div>
                <div className="chart-track">
                  <div className="chart-fill" style={{ width: `${score}%` }} />
                </div>
              </div>
            )
          })}
        </section>

        <section className="result-highlight-grid">
          <article className="result-highlight-card">
            <p className="eyebrow">Competência mais fortalecida</p>
            <h2>{assessmentResult.strongestCompetency.label}</h2>
          </article>
          <article className="result-highlight-card">
            <p className="eyebrow">Competência em maior desenvolvimento</p>
            <h2>{assessmentResult.developmentCompetency.label}</h2>
          </article>
        </section>

        <section className="interpretation-grid">
          {COMPETENCIES.map((competency) => {
            const score = assessmentResult.scores[competency.key]
            const band = getInterpretationBand(score)
            return (
              <article className="interpretation-card" key={competency.key}>
                <h2>{competency.label}</h2>
                <p className="score-band">{band.label}</p>
                <p>{competency.interpretation}</p>
                <p>{band.text}</p>
              </article>
            )
          })}
        </section>

        <section className="reading-section">
          <h2>Leitura qualitativa</h2>
          <div className="qualitative-list">
            {qualitativeQuestions.map((question) => {
              const answer = assessmentResult.answers.find((item) => {
                return item.questionNumber === question.questionNumber
              })
              return (
                <article className="qualitative-card" key={question.questionNumber}>
                  <p className="question-number">Pergunta {question.questionNumber}</p>
                  <h3>{question.text}</h3>
                  <p>
                    {answer.selectedOptions
                      .map((optionValue) => findOptionLabel(question, optionValue))
                      .join(' ')}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="reading-section">
          <h2>Reflexão final</h2>
          <article className="reflection-card">
            <h3>{findQuestion(31).text}</h3>
            <p>{assessmentResult.openAnswers.behaviorToChange}</p>
          </article>
          <article className="reflection-card">
            <h3>{findQuestion(32).text}</h3>
            <p>{assessmentResult.openAnswers.difficultSituations}</p>
          </article>
        </section>

        <div className="button-row no-print">
          <button className="secondary-button" type="button" onClick={() => window.print()}>
            Salvar resultado em PDF
          </button>
          <a className="secondary-button link-button" href="../../index.html">
            Voltar para o Laboratório
          </a>
          <button className="primary-button" type="button" onClick={onRestart}>
            Refazer atividade
          </button>
        </div>
      </section>
    </main>
  )
}

export default ResultScreen
