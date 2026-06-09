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
          Este mapa vai mostrar como você realmente age no trabalho, não o que gostaria de
          ser, mas o que de fato faz quando a situação aperta. É a partir dele que a gente vai
          trabalhar juntos nos três encontros.
        </p>
        <p className="intro-copy">
          Não existe resposta certa ou errada. Responda lembrando de situações que realmente
          aconteceram com você. Se nunca passou por alguma delas, marque a mais parecida com o
          seu jeito habitual, não com o que você gostaria de ter feito.
        </p>
        <p className="intro-copy">
          Quanto mais honesta a resposta, mais útil o seu mapa.
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
