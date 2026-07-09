import { buildRetestReport, REPORT_COMPETENCY_KEYS } from './retestReport.js'
import { renderShell, buildReportTitle, renderBrandBar, escapeHtml } from './reportTemplate.js'
import { competencyMeta } from './profileTexts.js'
import { RODAPE } from './retestTexts.js'

function renderSecao(rotulo, texto) {
  return `
    <div class="sec">
      <h2>${escapeHtml(rotulo)}</h2>
      <p>${escapeHtml(texto)}</p>
    </div>`
}

// "O caminho": quadro fixo por competência (protocolo + 4 passos). Reaproveita
// os estilos .panel/.protocol/.steps já presentes no shell do relatório.
function renderCaminho(caminho) {
  const passos = caminho.passos
    .map((p) => `<li><b>${escapeHtml(p.nome)}.</b> ${escapeHtml(p.texto)}</li>`)
    .join('')
  return `
    <div class="sec">
      <h2>O caminho</h2>
      <div class="panel">
        <div class="protocol">${escapeHtml(caminho.protocolo)}</div>
        <ul class="steps">${passos}</ul>
      </div>
    </div>`
}

function renderBlockCard(block, fullName) {
  const meta = competencyMeta[block.key]
  return `
    <article class="card">
      ${renderBrandBar(fullName)}
      <div class="head">
        <div>
          <h1>${escapeHtml(meta.title)}</h1>
          <div class="sub">Reteste · leitura do movimento</div>
        </div>
      </div>
      <div class="body">
        ${renderSecao('Onde você começou', block.comecou)}
        ${renderSecao('Onde você está agora', block.agora)}
        ${renderSecao('Leitura do movimento', block.movimento)}
        ${renderCaminho(block.caminho)}
      </div>
      <div class="foot">
        <p class="foot-disclaimer">${escapeHtml(RODAPE)}</p>
        <p class="foot-copyright">© ${new Date().getFullYear()} Ana Luiza Carvalho · Laboratório de Competências</p>
      </div>
    </article>`
}

function renderSinteseCard(sintese, fullName) {
  const body = sintese.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')
  return `
    <article class="card synthesis">
      ${renderBrandBar(fullName)}
      <div class="head">
        <div>
          <h1>Síntese do reteste</h1>
          <div class="sub">Uma leitura do seu movimento.</div>
        </div>
      </div>
      <div class="body synthesis-body">${body}</div>
      <div class="foot">
        <p class="foot-disclaimer">${escapeHtml(RODAPE)}</p>
        <p class="foot-copyright">© ${new Date().getFullYear()} Ana Luiza Carvalho · Laboratório de Competências</p>
      </div>
    </article>`
}

export function renderRetestReportHtml({ view, initialResults, retestResponses, fullName, competencyKey }) {
  const report = buildRetestReport({ initialResults, retestResponses })

  if (view === 'competencia') {
    if (!REPORT_COMPETENCY_KEYS.includes(competencyKey)) {
      throw new Error(`Competência desconhecida: ${competencyKey}.`)
    }
    const card = renderBlockCard(report.blocks[competencyKey], fullName)
    return renderShell(card, buildReportTitle(fullName, `Reteste · ${competencyMeta[competencyKey].title}`))
  }

  const cards = renderSinteseCard(report.sintese, fullName)
    + report.order.map((key) => renderBlockCard(report.blocks[key], fullName)).join('')
  return renderShell(cards, buildReportTitle(fullName, 'Reteste consolidado'))
}
