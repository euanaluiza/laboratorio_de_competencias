# AGENTS.md — Laboratório de Competências

Guia para agentes de código (Codex etc.). Foco no que muda com frequência hoje: o **reteste** e seu **relatório**. O deploy em produção fica em `DEPLOY.local.md` (não versionado — repo é público).

## Stack e topologia

- **Frontend** (`mapa-app/`): React 19 + Vite. É o questionário inicial **e** o reteste (mesmo build). Servido como estático. Sem TypeScript. Sem framework de teste (só ESLint + build).
- **Backend** (`backend-vps/`): Express + Postgres, ES modules, Node 24. Arquivo principal no repo: `backend-vps/server.v2.js`. `backend-vps/package.json` só existe para `"type":"module"` + `node --test` (as deps reais — express/pg/etc. — ficam na VPS, não aqui).
- **Relatórios**: renderizados **no servidor** em `backend-vps/report/`. São coordenador-facing (a Ana abre no painel e envia). **O participante nunca vê score.**
- **Painel interno**: `backend-vps/report/panel.html` (HTML+JS inline, servido por `GET /api/internal/panel`, protegido por token).

## Fluxo do reteste (visão geral)

1. Aluno abre `…/mapa/?fluxo=reteste` → `mapa-app/src/main.jsx` ramifica para `RetestApp` (senão, questionário normal).
2. Digita o **e-mail** do questionário inicial → `POST /api/retest-eligibility` (só booleano; sem vazar diagnóstico). Se não achar baseline, **bloqueia**.
3. Responde 18 perguntas (6 competências × consciência 1–5 / prontidão 1–5 / aplicação) → `POST /api/retest-submissions`, que casa pelo e-mail com a submissão inicial **mais recente** e grava em `retest_submissions`.
4. Coordenador vê no painel: ao selecionar o aluno, aparece a barra de grupo **1º Teste / Reteste** (a de Reteste só quando há reteste), cada uma com suas sub-abas. O relatório do reteste é servido por `…/retest-report`.

## Mapa de arquivos do reteste

| Arquivo | Papel |
|---|---|
| `backend-vps/report/retestTexts.js` | **Todos os textos** do relatório (verbatim da spec): `COMECOU`, `AGORA_ESTADO`, `AGORA_APLICACAO`, `MOVIMENTO` (NV, R1..R10), `SINTESE`, `RODAPE`, `CAMINHO`. |
| `backend-vps/report/retestReport.js` | Motor **puro**: `cpMedia`, `faixaCp`, `partiuDe`, `movimentoTexto`, `buildBlock`, `buildSintese`, `buildRetestReport`. Sem I/O. |
| `backend-vps/report/retestReportTemplate.js` | `renderRetestReportHtml` (HTML A4, reusa `renderShell`/brand de `reportTemplate.js`). |
| `backend-vps/retestValidation.js` | Validação pura do payload/e-mail. |
| `backend-vps/server.v2.js` | Endpoints (`retest-eligibility`, `retest-submissions`, `retest-report` interno/público), `ensureSchema` (cria `retest_submissions`), `retest_submission_id` na lista de submissões. |
| `backend-vps/report/panel.html` | Painel; menu de dois níveis (grupo `inicial`/`reteste` → sub-abas). |
| `mapa-app/src/data/retest.js` | Conteúdo participante-facing: 18 enunciados + escalas + opções. |
| `mapa-app/src/components/RetestApp.jsx` + `RetestIntro/RetestIdentify/RetestStep.jsx` | Fluxo React. |
| `mapa-app/src/services/retestApi.js` / `retestPayload.js` | Chamadas e montagem do payload. |
| `*.test.js` (ao lado de cada módulo) | Testes com `node --test`. |

## Regras invioláveis do relatório (do design; NÃO quebrar)

1. **Sem score comparável.** O reteste não gera Z1/Z2/Z3 e não reusa o motor de scoring do questionário. Não existe "subiu de X para Y".
2. **Nenhum texto afirma variação/queda** de consciência, prontidão ou percepção — essas dimensões só foram medidas uma vez. O diagnóstico inicial mede **comportamento**, não percepção.
3. **Não exibir o número do diagnóstico inicial** no relatório do reteste. O dado inicial entra só qualitativamente em "Onde você começou" (via `direcao_inicial`).
4. **`nao_viveu`**: sai de `n_aplicacoes` e de qualquer média; dispara a leitura `NV` (R0, prioridade sobre tudo); conta em `n_nao_viveu`.
5. **Matriz do movimento cobre 100%** (R0 + R1..R10). Nunca cair em fallback. Cruzar `partiu_de` × `faixa_cp` × `usou`.
6. **`faixa_cp`**: `alta` se ≥3.5, `media` se ≥2.5 e <3.5, `baixa` se <2.5. Fronteiras reais: **2.5 = media, 3.5 = alta**.
7. **Bloco "Onde você está agora" depende de `partiu_de`** (desvio: sub/ff/osc; funcional: func) — na frase de estado e na de aplicação.
8. **"O caminho" (v4)**: quadro fixo por competência (protocolo + 4 passos), aparece em **todos** os blocos do relatório, **nunca no questionário** (mostrar o caminho antes de perguntar prontidão inflaria a medida).
9. **Textos verbatim.** As specs chegam como anexos (Spec_Reteste_Sistema_v*.md) frequentemente com **mojibake** (ex.: `Ã§`, `Ã£`). NUNCA cole mojibake no código — decodifique para UTF-8 correto (ç, ã, é…). O **código é a fonte de verdade**, não os anexos.

Derivadas: `cp_media = (consciencia+prontidao)/2`; `DIR_TO_CODE = { recuo:'sub', excesso:'ff', oscilante:'osc', funcional:'func' }`; `nivel_inicial = z3Count` (0–3). Competências (chaves + ordem fixa): `comunicacao_assertiva, maturidade_emocional, foco_resultado_produtividade, visao_sistemica, direcao_futuro, protagonismo_profissional`.

## Como testar (rápido, sem deps externas)

```bash
# Motor + textos + template + validação (lógica pura; Node 24, ESM):
node --test backend-vps/report/retestTexts.test.js \
            backend-vps/report/retestReport.test.js \
            backend-vps/report/retestReportTemplate.test.js \
            backend-vps/retestValidation.test.js \
            mapa-app/src/services/retestPayload.test.js

# Sintaxe do server (não há Postgres/deps local):
node --check backend-vps/server.v2.js

# Painel: validar o <script> inline sem navegador:
node -e 'const fs=require("fs");const h=fs.readFileSync("backend-vps/report/panel.html","utf8");new Function(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log("panel OK")'

# Frontend (só quando mexer em mapa-app/):
cd mapa-app && npm run lint && npm run build
```

Fluxo recomendado (foi o que manteve o ritmo): mudou texto/lógica do relatório → ajuste/adicione teste em `retestReport.test.js`/`retestTexts.test.js` → `node --test` → commit. A spec v4 exige, antes de subir, a tabela **T1–T14** (matriz do movimento) e as fronteiras **F1/F2** — já implementadas em `retestReport.test.js`.

## Convenções de código

- ESM em tudo; **sem ponto e vírgula** no fim das linhas JS (siga o estilo dos arquivos vizinhos), aspas simples, imports relativos com sufixo `.js`.
- Módulos de texto = dados puros (sem lógica). Motor = funções puras testáveis. Renderização isolada no template.
- Nada de dependência nova no backend sem necessidade real (os testes rodam com zero deps).

## Git e deploy

- **Trunk-based**: commit direto em `main`, `git push origin main`. A VPS faz `git pull` de `main`. Não há CI.
- Mensagens de commit terminam com trailer `Co-Authored-By:` quando aplicável.
- **Deploy manual** (frontend estático em `/var/www`, backend em `/opt`): passo a passo, hosts e gotchas em **`DEPLOY.local.md`** (não versionado). Gotchas que já morderam: `panel.html` não é `.js` (copiar separado + `pm2 restart`); não copiar `backend-vps/package.json` pra prod; rota `/api` de prefixo novo exige `location` nos **dois** server blocks do nginx + o proxy externo tem atraso de propagação (pode dar 404 por alguns segundos e normalizar).

## Histórico de specs

O reteste evoluiu v1→v4 (a v4 é a atual). Design/plano em `docs/superpowers/` descrevem a lógica antiga (v2) — **desatualizados**; confie no código. Cada nova spec "substitui a anterior por completo": releia as regras invioláveis acima antes de reescrever textos/lógica.
