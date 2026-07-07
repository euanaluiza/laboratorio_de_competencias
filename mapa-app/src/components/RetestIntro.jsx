function RetestIntro({ onStart }) {
  return (
    <main className="app-shell">
      <section className="result-panel">
        <p className="eyebrow">Reteste · 3 semanas depois</p>
        <h1>Como está o seu movimento?</h1>
        <p className="intro-copy">
          Este é um instrumento curto — 18 perguntas, 5 a 6 minutos. Ele não repete o questionário
          inicial. Aqui a gente mede três coisas: o quanto você já percebe cada padrão no momento em
          que ele acontece, o quanto se sente preparado(a) pra agir, e se já usou o caminho numa
          situação real. Não existe resposta certa — responda pensando nas suas últimas 3 semanas.
        </p>
        <div className="button-row">
          <button className="primary-button" type="button" onClick={onStart}>
            Começar
          </button>
        </div>
      </section>
    </main>
  )
}

export default RetestIntro
