const FINAL_MESSAGE =
  'Questionário finalizado. O seu mapa será enviado a você via whatsapp no início do primeiro dia de aula. Nos vemos lá!'

function ResultScreen() {
  return (
    <main className="app-shell">
      <section className="result-panel">
        <h1>Questionário concluído</h1>
        <p className="intro-copy">{FINAL_MESSAGE}</p>
      </section>
    </main>
  )
}

export default ResultScreen
