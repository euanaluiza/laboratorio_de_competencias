import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const html = readFileSync(new URL('./panel.html', import.meta.url), 'utf8')
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1]

test('panel inline script is valid JavaScript', () => {
  assert.doesNotThrow(() => new Function(script))
})

test('student list exposes a retest status filter', () => {
  assert.match(html, /<select id="retestFilter"/)
  assert.match(html, /<option value="all">Todos<\/option>/)
  assert.match(html, /<option value="done">Com reteste<\/option>/)
  assert.match(html, /<option value="pending">Sem reteste<\/option>/)
  assert.match(script, /\$\('retestFilter'\)\.onchange = renderList/)
})

test('student list shows retest status badges', () => {
  assert.match(script, /Reteste feito/)
  assert.match(script, /Sem reteste/)
  assert.match(script, /student-badge/)
})
