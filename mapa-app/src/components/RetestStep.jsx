import ProgressBar from './ProgressBar.jsx'
import {
  RETEST_CONSCIENCIA_SCALE,
  RETEST_PRONTIDAO_SCALE,
  RETEST_APLICACAO_ENUNCIADO,
  RETEST_APLICACAO_OPTIONS,
} from '../data/retest.js'

function RadioGroup({ name, options, selected, onSelect }) {
  return (
    <div className="option-stack">
      {options.map((option) => (
        <label className="option-row" key={option.value}>
          <input
            type="radio"
            name={name}
            checked={selected === option.value}
            onChange={() => onSelect(option.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}

function RetestStep({ step, stepIndex, totalSteps, answer, onChange, onBack, onNext }) {
  const current = answer || {}
  const missing =
    current.consciencia == null || current.prontidao == null || current.aplicacao == null
  const isFirst = stepIndex === 0
  const isLast = stepIndex === totalSteps - 1

  const set = (field) => (value) => onChange({ ...current, [field]: value })

  return (
    <main className="app-shell">
      <section className="questionnaire-panel">
        <ProgressBar currentStepIndex={stepIndex} totalSteps={totalSteps} />
        <p className="eyebrow">Reteste</p>
        <h1>{step.title}</h1>
        <div className="question-list">
          <article className="question-card">
            <p className="question-number">Consciência</p>
            <h2>{step.consciencia}</h2>
            <RadioGroup
              name={`consciencia-${step.key}`}
              options={RETEST_CONSCIENCIA_SCALE}
              selected={current.consciencia}
              onSelect={set('consciencia')}
            />
          </article>
          <article className="question-card">
            <p className="question-number">Prontidão</p>
            <h2>{step.prontidao}</h2>
            <RadioGroup
              name={`prontidao-${step.key}`}
              options={RETEST_PRONTIDAO_SCALE}
              selected={current.prontidao}
              onSelect={set('prontidao')}
            />
          </article>
          <article className="question-card">
            <p className="question-number">Aplicação</p>
            <h2>{RETEST_APLICACAO_ENUNCIADO}</h2>
            <RadioGroup
              name={`aplicacao-${step.key}`}
              options={RETEST_APLICACAO_OPTIONS}
              selected={current.aplicacao}
              onSelect={set('aplicacao')}
            />
          </article>
          {missing ? <p className="field-error">Responda as três perguntas para continuar.</p> : null}
        </div>
        <div className="button-row">
          <button className="secondary-button" type="button" disabled={isFirst} onClick={onBack}>
            Voltar
          </button>
          <button className="primary-button" type="button" onClick={() => !missing && onNext()}>
            {isLast ? 'Enviar respostas' : 'Próxima competência'}
          </button>
        </div>
      </section>
    </main>
  )
}

export default RetestStep
