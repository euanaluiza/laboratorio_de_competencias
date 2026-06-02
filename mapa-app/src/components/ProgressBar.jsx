function ProgressBar({ currentStepIndex, totalSteps }) {
  const currentStepNumber = currentStepIndex + 1
  const progressValue = Math.round((currentStepNumber / totalSteps) * 100)

  return (
    <div className="progress-wrap" aria-label={`Etapa ${currentStepNumber} de ${totalSteps}`}>
      <div className="progress-meta">
        <span>Etapa {currentStepNumber}</span>
        <span>{progressValue}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressValue}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
