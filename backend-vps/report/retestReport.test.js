import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  cpMedia, faixaCp, partiuDe, movimentoTexto, buildBlock,
  buildSintese, buildRetestReport, REPORT_COMPETENCY_KEYS,
} from './retestReport.js'
import { MOVIMENTO, SINTESE, AGORA_ESTADO, AGORA_APLICACAO } from './retestTexts.js'

test('cpMedia é a média de consciência e prontidão', () => {
  assert.equal(cpMedia(4, 5), 4.5)
  assert.equal(cpMedia(1, 2), 1.5)
})

test('faixaCp cobre 1.0..5.0 nas três faixas, sem buracos', () => {
  assert.equal(faixaCp(5.0), 'alta')
  assert.equal(faixaCp(3.5), 'alta')
  assert.equal(faixaCp(3.0), 'media')
  assert.equal(faixaCp(2.5), 'media')
  assert.equal(faixaCp(2.0), 'baixa')
  assert.equal(faixaCp(1.0), 'baixa')
  for (const cp of [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]) {
    assert.ok(['alta', 'media', 'baixa'].includes(faixaCp(cp)), `cp ${cp}`)
  }
})

test('partiuDe: func => funcional; sub/ff/osc => desvio', () => {
  assert.equal(partiuDe('func'), 'funcional')
  for (const d of ['sub', 'ff', 'osc']) assert.equal(partiuDe(d), 'desvio')
})

// --- Matriz do movimento: as 12 combinações + nao_viveu (verificação da nota 7) ---
const mv = (partiu, faixa, usou, aplicacao = usou ? 'aplicou' : 'nao_usou') =>
  movimentoTexto({ partiu, faixa, usou, aplicacao })

test('R0 (nao_viveu) tem prioridade sobre qualquer combinação', () => {
  assert.equal(mv('desvio', 'alta', true, 'nao_viveu'), MOVIMENTO.NV)
  assert.equal(mv('funcional', 'baixa', false, 'nao_viveu'), MOVIMENTO.NV)
})

test('desvio: R1..R6 nas 6 combinações', () => {
  assert.equal(mv('desvio', 'alta', true), MOVIMENTO.R1)
  assert.equal(mv('desvio', 'alta', false), MOVIMENTO.R2)
  assert.equal(mv('desvio', 'media', true), MOVIMENTO.R3)
  assert.equal(mv('desvio', 'media', false), MOVIMENTO.R4)
  assert.equal(mv('desvio', 'baixa', true), MOVIMENTO.R5)
  assert.equal(mv('desvio', 'baixa', false), MOVIMENTO.R6)
})

test('funcional: R7..R10 nas 6 combinações (media e baixa agrupam usou)', () => {
  assert.equal(mv('funcional', 'alta', true), MOVIMENTO.R7)
  assert.equal(mv('funcional', 'alta', false), MOVIMENTO.R8)
  assert.equal(mv('funcional', 'media', true), MOVIMENTO.R9)
  assert.equal(mv('funcional', 'media', false), MOVIMENTO.R9)
  assert.equal(mv('funcional', 'baixa', true), MOVIMENTO.R10)
  assert.equal(mv('funcional', 'baixa', false), MOVIMENTO.R10)
})

test('cobertura total: as 12 combinações + nao_viveu sempre têm texto (zero fallback)', () => {
  const textos = new Set(Object.values(MOVIMENTO))
  for (const partiu of ['desvio', 'funcional']) {
    for (const faixa of ['alta', 'media', 'baixa']) {
      for (const usou of [true, false]) {
        const t = mv(partiu, faixa, usou)
        assert.ok(t && textos.has(t), `sem texto para ${partiu}/${faixa}/${usou}`)
      }
    }
  }
  assert.ok(textos.has(mv('desvio', 'media', false, 'nao_viveu')))
})

test('buildBlock (desvio, cp alta, usou): estado+aplicação de desvio e movimento R1', () => {
  const block = buildBlock(
    'comunicacao_assertiva',
    { direction: 'recuo', z3Count: 1 },                     // sub -> desvio
    { consciencia: 4, prontidao: 4, aplicacao: 'aplicou' }, // cp 4.0 -> alta
  )
  assert.match(block.comecou, /subexpressão/)
  assert.doesNotMatch(block.comecou, /\[competência\]/)
  assert.equal(block.agora, `${AGORA_ESTADO.desvio.alta} ${AGORA_APLICACAO.desvio.aplicou}`)
  assert.equal(block.movimento, MOVIMENTO.R1)
})

// Tabela de testes obrigatória da spec v4 (T1..T14), via buildBlock ponta a ponta:
// direcao_inicial + consciência + prontidão + aplicação -> regra do movimento.
const DIR_FROM_CODE = { sub: 'recuo', ff: 'excesso', osc: 'oscilante', func: 'funcional' }
const TABELA = [
  ['T1', 'sub', 4, 4, 'aplicou', 'R1'],
  ['T2', 'sub', 4, 4, 'nao_usou', 'R2'],
  ['T3', 'ff', 3, 3, 'aplicou_forte', 'R3'],
  ['T4', 'ff', 3, 3, 'tentou', 'R4'],
  ['T5', 'osc', 2, 2, 'aplicou', 'R5'],
  ['T6', 'osc', 2, 2, 'nao_usou', 'R6'],
  ['T7', 'func', 4, 4, 'aplicou', 'R7'],
  ['T8', 'func', 4, 4, 'nao_usou', 'R8'],
  ['T9', 'func', 3, 3, 'aplicou', 'R9'],
  ['T10', 'func', 3, 3, 'nao_usou', 'R9'],
  ['T11', 'func', 2, 2, 'aplicou', 'R10'],
  ['T12', 'func', 2, 2, 'nao_usou', 'R10'],
  ['T13', 'func', 4, 4, 'nao_viveu', 'NV'],
  ['T14', 'sub', 2, 2, 'nao_viveu', 'NV'],
]

test('T1..T14 da spec v4 (matriz do movimento, ponta a ponta)', () => {
  for (const [id, dir, c, p, ap, regra] of TABELA) {
    const block = buildBlock(
      'comunicacao_assertiva',
      { direction: DIR_FROM_CODE[dir] },
      { consciencia: c, prontidao: p, aplicacao: ap },
    )
    assert.equal(block.movimento, MOVIMENTO[regra], `${id}: ${dir}/${c}/${p}/${ap} -> ${regra}`)
  }
})

test('F1/F2 fronteiras de faixa: 2.5 é media, 3.5 é alta', () => {
  assert.equal(faixaCp(2.5), 'media')
  assert.equal(faixaCp(3.5), 'alta')
})

test('buildBlock inclui o caminho fixo da competência (v4)', () => {
  const block = buildBlock(
    'comunicacao_assertiva',
    { direction: 'recuo' },
    { consciencia: 4, prontidao: 4, aplicacao: 'aplicou' },
  )
  assert.equal(block.caminho.protocolo, 'PAUSA · ALVO · DIZ · SUSTENTA')
  assert.equal(block.caminho.passos.length, 4)
  assert.equal(block.caminho.passos[0].nome, 'PAUSA')
  // o caminho é fixo: não muda com a regra que disparou
  const outro = buildBlock('comunicacao_assertiva', { direction: 'funcional' }, { consciencia: 2, prontidao: 2, aplicacao: 'nao_viveu' })
  assert.deepEqual(outro.caminho, block.caminho)
})

test('buildBlock (funcional, cp media): estado/aplicação funcional e movimento R9', () => {
  const block = buildBlock(
    'maturidade_emocional',
    { direction: 'funcional', z3Count: 3 },
    { consciencia: 3, prontidao: 3, aplicacao: 'nao_usou' }, // cp 3.0 -> media
  )
  assert.equal(block.agora, `${AGORA_ESTADO.funcional.media} ${AGORA_APLICACAO.funcional.nao_usou}`)
  assert.equal(block.movimento, MOVIMENTO.R9)
})

// --- Síntese ---
function seis(fn) {
  const o = {}
  REPORT_COMPETENCY_KEYS.forEach((k, i) => { o[k] = fn(i) })
  return o
}

test('síntese sempre abre com ABERTURA e fecha com FECHAMENTO', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis(() => ({ consciencia: 4, prontidao: 4, aplicacao: 'aplicou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.equal(paragraphs[0], SINTESE.ABERTURA)
  assert.equal(paragraphs[paragraphs.length - 1], SINTESE.FECHAMENTO)
})

test('síntese A: n_aplicacoes >= 3', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis((i) => ({ consciencia: 3, prontidao: 3, aplicacao: i < 3 ? 'aplicou' : 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.ok(paragraphs.includes(SINTESE.A))
})

test('síntese B: >=3 avanços (desvio+alta) e n_aplicacoes<3', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis(() => ({ consciencia: 4, prontidao: 4, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.ok(paragraphs.includes(SINTESE.B))
})

test('síntese C: 1..2 avanços', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis((i) => ({ consciencia: i < 2 ? 4 : 2, prontidao: i < 2 ? 4 : 2, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.ok(paragraphs.includes(SINTESE.C))
})

test('síntese D: 0 avanços', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis(() => ({ consciencia: 2, prontidao: 2, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.ok(paragraphs.includes(SINTESE.D))
})

test('avanço exige desvio: funcional com cp alta NÃO conta como avanço', () => {
  const initial = seis(() => ({ direction: 'funcional', z3Count: 3 }))
  const resp = seis(() => ({ consciencia: 5, prontidao: 5, aplicacao: 'nao_usou' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.ok(paragraphs.includes(SINTESE.D)) // 0 avanços apesar de cp alta, porque tudo é func
})

test('nao_viveu fora de n_aplicacoes; com >=3 anexa o adendo antes do fechamento', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis((i) => ({ consciencia: 2, prontidao: 2, aplicacao: i < 2 ? 'aplicou' : 'nao_viveu' }))
  const { paragraphs } = buildSintese(REPORT_COMPETENCY_KEYS, initial, resp)
  assert.ok(!paragraphs.includes(SINTESE.A)) // n_aplicacoes = 2
  assert.ok(paragraphs.includes(SINTESE.ADENDO_NAO_VIVEU))
  assert.equal(paragraphs[paragraphs.length - 1], SINTESE.FECHAMENTO) // adendo vem antes do fechamento
})

test('buildRetestReport: order + 6 blocks + sintese (abertura+variável+fechamento)', () => {
  const initial = seis(() => ({ direction: 'recuo', z3Count: 1 }))
  const resp = seis(() => ({ consciencia: 4, prontidao: 4, aplicacao: 'aplicou' }))
  const out = buildRetestReport({ initialResults: initial, retestResponses: resp })
  assert.deepEqual(out.order, REPORT_COMPETENCY_KEYS)
  assert.equal(Object.keys(out.blocks).length, 6)
  assert.ok(out.sintese.paragraphs.length >= 3)
  assert.ok(out.blocks.comunicacao_assertiva.movimento.length > 0)
})
