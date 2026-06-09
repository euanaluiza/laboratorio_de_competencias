const FINAL_MESSAGE =
  'Questionário finalizado. O seu mapa será enviado a você via whatsapp no início do primeiro dia de aula. Nos vemos lá!'

function ResultScreen() {
  return (
    <main className="app-shell">
      <section className="result-panel">
        <h1>Questionário concluído</h1>
        <svg
          className="verified-badge"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Concluído"
        >
          <defs>
            <linearGradient id="verifiedBadgeGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C9A0C9" />
              <stop offset="100%" stopColor="#6B2D6B" />
            </linearGradient>
          </defs>
          <path
            fill="url(#verifiedBadgeGradient)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          />
        </svg>
        <p className="intro-copy">{FINAL_MESSAGE}</p>
      </section>
    </main>
  )
}

export default ResultScreen
