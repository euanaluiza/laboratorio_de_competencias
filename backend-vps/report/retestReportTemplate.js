import { buildRetestReport, REPORT_COMPETENCY_KEYS } from './retestReport.js'
import { renderShell, buildReportTitle, renderBrandBar, escapeHtml } from './reportTemplate.js'
import { competencyMeta, REPORT_DISCLAIMER } from './profileTexts.js'

function renderSecao(rotulo, texto) {
  return `
    <div class="sec">
      <h2>${escapeHtml(rotulo)}</h2>
      <p>${escapeHtml(texto)}</p>
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
      </div>
      <div class="foot">
        <p class="foot-disclaimer">${escapeHtml(REPORT_DISCLAIMER)}</p>
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
          <div class="sub">Uma leitura do movimento das 3 semanas.</div>
        </div>
      </div>
      <div class="body synthesis-body">${body}</div>
      <div class="foot">
        <p class="foot-disclaimer">${escapeHtml(REPORT_DISCLAIMER)}</p>
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
