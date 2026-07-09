const FEATURE_ICONS = {
  question: (
    <>
      <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 17.25h.008v.008H12v-.008Z" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </>
  ),
  grid: (
    <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
  ),
  eye: (
    <>
      <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </>
  ),
  clock: (
    <>
      <path d="M12 6v6h4.5" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </>
  ),
}

const INTRO_CARDS = [
  { label: '32 perguntas', icon: 'question' },
  { label: '6 competências', icon: 'grid' },
  { label: 'Autopercepção', icon: 'eye' },
  { label: '15 min', icon: 'clock' },
]

export function FeatureIcon({ name }) {
  return (
    <svg
      className="feature-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {FEATURE_ICONS[name]}
    </svg>
  )
}

function IntroScreen({ onStart }) {
  return (
    <main className="app-shell intro-screen">
      <section className="intro-panel">
        <div className="intro-layout">
          <div className="intro-content">
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
            <p className="intro-copy intro-emphasis">
              Quanto mais honesta a resposta, mais útil o seu mapa.
            </p>
            <button className="primary-button intro-start-button" type="button" onClick={onStart}>
              Começar atividade
            </button>
          </div>

          <aside className="intro-summary" aria-label="Resumo da atividade">
            <p className="intro-summary-label">Sobre a atividade</p>
            <div className="feature-grid">
              {INTRO_CARDS.map((card) => (
                <div className="feature-card" key={card.label}>
                  <FeatureIcon name={card.icon} />
                  <span>{card.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default IntroScreen
