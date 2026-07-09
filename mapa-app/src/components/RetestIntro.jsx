import { FeatureIcon } from './IntroScreen.jsx'

const RETEST_CARDS = [
  { label: '18 perguntas', icon: 'question' },
  { label: '6 competências', icon: 'grid' },
  { label: 'Percepção e prontidão', icon: 'eye' },
  { label: '5 a 6 min', icon: 'clock' },
]

function RetestIntro({ onStart }) {
  return (
    <main className="app-shell intro-screen">
      <section className="intro-panel">
        <div className="intro-layout">
          <div className="intro-content">
            <p className="eyebrow">Reteste · 3 semanas depois</p>
            <h1>Como está o seu movimento?</h1>
            <p className="lead">Atividade curta para revisitar suas últimas 3 semanas.</p>
            <p className="intro-copy">
              Este instrumento não repete o questionário inicial. Aqui a gente mede o quanto você já
              percebe cada padrão no momento em que ele acontece, o quanto se sente preparado(a) pra
              agir, e se já usou o caminho numa situação real.
            </p>
            <p className="intro-copy">
              Não existe resposta certa ou errada. Responda pensando no que aconteceu de verdade nas
              suas últimas 3 semanas.
            </p>
            <p className="intro-copy intro-emphasis">
              Quanto mais honesta a resposta, mais útil a leitura do seu movimento.
            </p>
            <button className="primary-button intro-start-button" type="button" onClick={onStart}>
              Começar reteste
            </button>
          </div>

          <aside className="intro-summary" aria-label="Resumo do reteste">
            <p className="intro-summary-label">Sobre a atividade</p>
            <div className="feature-grid">
              {RETEST_CARDS.map((card) => (
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

export default RetestIntro
