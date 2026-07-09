import { test } from 'node:test'
import assert from 'node:assert/strict'
import { renderRetestReportHtml } from './retestReportTemplate.js'
import { REPORT_COMPETENCY_KEYS } from './retestReport.js'

function seis(fn) {
  const o = {}
  REPORT_COMPETENCY_KEYS.forEach((k, i) => { o[k] = fn(i) })
  return o
}
const INITIAL = seis(() => ({ direction: 'recuo', z3Count: 1, z1Count: 2, z2Count: 0 }))
const RESP = seis(() => ({ consciencia: 4, prontidao: 4, aplicacao: 'aplicou' }))

test('consolidado: documento A4, com síntese, os 3 rótulos de bloco e o nome do aluno', () => {
  const html = renderRetestReportHtml({
    view: 'consolidado', initialResults: INITIAL, retestResponses: RESP, fullName: 'Fulana Silva',
  })
  assert.match(html, /<!DOCTYPE html>/i)
  assert.match(html, /Onde você começou/)
  assert.match(html, /Onde você está agora/)
  assert.match(html, /Leitura do movimento/)
  assert.match(html, /FULANA SILVA/) // nome em MAIÚSCULAS na barra de marca
  assert.match(html, /Todo comportamento que você repete/) // abertura fixa da síntese
  assert.match(html, /Padrões mudam com consciência/) // rodapé novo (v3)
  assert.doesNotMatch(html, /3 semanas|três semanas/i) // v3 removeu referência temporal fixa
  // v4: quadro "O caminho" fixo em cada bloco de competência (6 competências => 6 quadros)
  assert.equal((html.match(/>O caminho</g) || []).length, 6)
  assert.match(html, /PAUSA · ALVO · DIZ · SUSTENTA/)
})

test('sem roda/pips nem <script> (não é score, é texto)', () => {
  const html = renderRetestReportHtml({
    view: 'consolidado', initialResults: INITIAL, retestResponses: RESP, fullName: 'X',
  })
  assert.doesNotMatch(html, /<script/i)
  assert.doesNotMatch(html, /conic-gradient/)
})

test('competencia: renderiza um único bloco', () => {
  const html = renderRetestReportHtml({
    view: 'competencia', competencyKey: 'maturidade_emocional',
    initialResults: INITIAL, retestResponses: RESP, fullName: 'X',
  })
  assert.match(html, /Leitura do movimento/)
  // só um "Onde você começou" (um bloco)
  assert.equal((html.match(/Onde você começou/g) || []).length, 1)
  // o bloco único traz o seu "O caminho" (Maturidade Emocional)
  assert.equal((html.match(/>O caminho</g) || []).length, 1)
  assert.match(html, /PERCEBE · NOMEIA · SEPARA · ESCOLHE/)
})
