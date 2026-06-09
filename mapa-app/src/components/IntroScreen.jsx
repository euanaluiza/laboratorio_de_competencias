const INTRO_CARDS = [
  '32 perguntas',
  '6 competências',
  'Autopercepção',
  'Uso pedagógico',
]

function IntroScreen({ onStart }) {
  return (
    <main className="app-shell intro-screen">
      <section className="intro-panel">
        <p className="eyebrow">Laboratório de Competências</p>
        <h1>Mapa de Competências Comportamentais</h1>
        <p className="lead">Atividade prática do Laboratório de Competências.</p>
        <p className="intro-copy">
          Não existe resposta certa ou errada. Responda pensando no que você realmente tende
          a fazer na maioria das vezes.
        </p>
        <div className="feature-grid" aria-label="Resumo da atividade">
          {INTRO_CARDS.map((cardText) => (
            <div className="feature-card" key={cardText}>
              {cardText}
            </div>
          ))}
        </div>
        <button className="primary-button" type="button" onClick={onStart}>
          Começar atividade
        </button>
      </section>
    </main>
  )
}

export default IntroScreen
