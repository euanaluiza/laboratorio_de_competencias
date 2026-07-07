# Reteste + Relatório do Reteste — Design

- **Data:** 2026-07-07
- **Fonte de conteúdo (texto verbatim):** `Spec_Reteste_Sistema.md` (na raiz do repo) — é a fonte de verdade para todos os enunciados, rótulos de escala e textos do relatório. Este documento cobre arquitetura e lógica; não duplica os textos longos.
- **Momento no arco:** Momento 4 — aplicado ~7 dias após o Dia 3. Mede o movimento das 3 semanas. **Não** reaplica o questionário inicial nem gera polo Z1/Z2/Z3.

## Decisões já tomadas (com o Thiago)

1. **Entrada:** fluxo novo dentro do app React (`mapa-app`); o aluno digita o **e-mail** para casar com o diagnóstico inicial.
2. **Sem baseline:** se o e-mail não tiver diagnóstico inicial, **bloqueia e orienta** (não deixa seguir). O relatório inteiro cruza com o inicial; sem baseline perde o sentido.
3. **Painel:** o relatório do reteste aparece como **abas extras no mesmo aluno** (não um modo novo).
4. **Consentimento:** consentimento leve de uma linha no reteste (o aluno já consentiu o texto LGPD completo no questionário inicial). Guardado como booleano + versão no próprio registro do reteste.
5. **Escopo:** feature única, construída e commitada em ordem — dados/engine (com testes) → endpoints → fluxo React → painel.

## Princípio de design (não violar)

O questionário inicial mede **comportamento situacional** (polos Z1/Z2/Z3). O reteste mede **3 dimensões diferentes** da mudança: **Consciência** (percebe o padrão na hora), **Prontidão** (preparo para usar o caminho) e **Aplicação** (se já usou o protocolo numa situação real).

Consequência técnica: o reteste **não** gera score comparável ao inicial. Não existe "subiu de 8 pra 12 pontos". O relatório cruza duas medidas de naturezas diferentes — o **padrão comportamental inicial** (que o sistema já guarda) e o **estado atual de consciência/prontidão/aplicação**. **Nada de gráfico de score subindo.**

## O que o sistema já tem (aproveitado)

- `assessment_submissions.results_by_competency` (JSONB) guarda, por competência, `{ competencyKey, level, z1Count, z2Count, z3Count, direction }`.
- `direcao_inicial` do reteste = `direction` do inicial, via o mapa que **já existe** em `backend-vps/report/reportTemplate.js`:
  `DIR_TO_CODE = { recuo: 'sub', excesso: 'ff', oscilante: 'osc', funcional: 'func' }`.
- `nivel_inicial` (0–3) = `z3Count` do inicial.
- Portanto o bloco "Onde você começou" lê o registro original **direto**, sem re-scoring.
- Renderização de relatório é server-side (`backend-vps/report/`), com `renderShell` (documento A4), `renderBrandBar`, `buildReportTitle`, `competencyMeta` e a identidade visual (Sora/Inter, creme/navy/plum). O reteste reaproveita tudo isso.
- Envio por WhatsApp/e-mail e link público assinado (HMAC do id via `reportToken`) já existem no painel e no backend.

---

## 1. Fluxo do participante (React, em `mapa-app`)

Alcançado no mesmo app por um parâmetro: `…/?fluxo=reteste` (ou `#/reteste`). [App.jsx](../../../mapa-app/src/App.jsx) detecta o parâmetro e renderiza um `RetestApp` autocontido (máquina de estados de telas própria, mesma estilização `app-shell`).

Telas:

1. **Intro** — explicação curta: reteste de ~3 semanas, 18 perguntas, 5–6 min; mede consciência, prontidão e aplicação; **não** repete o questionário.
2. **Identificação** — o aluno digita o **e-mail** usado no questionário original + um checkbox de consentimento de uma linha. Ao "Continuar", o app chama `POST /api/retest-eligibility`.
   - **Sem baseline → bloqueia** com mensagem amigável: "Não encontramos seu diagnóstico inicial com esse e-mail — confira o e-mail usado no questionário ou fale com a Ana."
   - O browser **nunca** recebe o diagnóstico inicial — só um booleano `eligible`.
3. **Questionário** — 6 etapas (uma por competência), cada uma com 3 perguntas de rádio:
   - **Consciência** (escala 1–5, rótulos fixos)
   - **Prontidão** (escala 1–5, rótulos fixos)
   - **Aplicação** (múltipla escolha, 5 opções, valores internos `aplicou_forte | aplicou | tentou | nao_viveu | nao_usou`)

   Todas obrigatórias, mesmo padrão de validação do questionário atual. Reaproveita `ProgressBar` e a marcação de rádio existente (`option-stack`/`option-row`).
4. **Envio → Concluído** — espelha a tela final de hoje: "Reteste concluído. A Ana te envia a leitura do seu movimento." O participante **não** vê nenhum score.

Conteúdo novo (enunciados + rótulos de escala, verbatim da spec) fica em `mapa-app/src/data/retest.js`. Payload de envio montado em um `mapa-app/src/services/retestPayload.js` + chamada em `retestApi.js` (espelhando `assessmentPayload.js` / `assessmentApi.js`).

### Ordem das competências (fixa, igual ao relatório atual)
`comunicacao_assertiva, maturidade_emocional, foco_resultado_produtividade, visao_sistemica, direcao_futuro, protagonismo_profissional`.

---

## 2. Modelo de dados (novo, no estilo existente)

Uma tabela nova, com payload JSONB igual ao `results_by_competency`:

```sql
CREATE TABLE retest_submissions (
  id                    bigserial PRIMARY KEY,
  initial_submission_id bigint NOT NULL REFERENCES assessment_submissions(id) ON DELETE CASCADE,
  participant_id        bigint NOT NULL REFERENCES assessment_participants(id) ON DELETE CASCADE,
  responses_by_competency jsonb NOT NULL,   -- { comp: { consciencia:1-5, prontidao:1-5, aplicacao:'aplicou'|… } }
  consent_accepted      boolean NOT NULL,
  consent_version       text NOT NULL,
  completed_at          timestamptz NOT NULL DEFAULT now(),
  created_at            timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT retest_submissions_responses_object_check
    CHECK (jsonb_typeof(responses_by_competency) = 'object'),
  CONSTRAINT retest_submissions_consent_check CHECK (consent_accepted)
);
CREATE INDEX retest_submissions_initial_submission_id_idx ON retest_submissions (initial_submission_id);
CREATE INDEX retest_submissions_participant_id_idx ON retest_submissions (participant_id);
```

- `initial_submission_id` = a submissão inicial **mais recente** casada por e-mail no momento do envio. É o baseline exato de onde o relatório lê `direction`/`z3Count`.
- Criada via o mesmo `ensureSchema()` idempotente que já existe em `server.v2.js` (mais um arquivo `retest-schema.sql` de referência, no estilo do `assessment-v2-schema.sql`).
- Guardar como JSONB único (em vez de tabela `retest_answers` linha-a-linha) é consistente com `results_by_competency` e suficiente para uma estrutura fixa e pequena.

---

## 3. Endpoints do backend (`server.v2.js`)

- **`POST /api/retest-eligibility`** *(público)* — `{ email }` → `{ ok, eligible: true|false }` apenas. Nenhum dado de diagnóstico sai do servidor.
- **`POST /api/retest-submissions`** *(público)* — valida as 18 respostas (enums fixos, mesmo estilo defensivo do `validatePayload`), resolve a submissão inicial por e-mail, insere o reteste. `404` se não houver baseline.
  - Validação: `responses_by_competency` deve ter exatamente as 6 competências; cada uma com `consciencia`/`prontidao` inteiros 1–5 e `aplicacao` num conjunto fixo de 5 valores.
- **`GET /api/internal/submissions/:id/retest-report?view=consolidado|competencia&competency=…`** *(admin)* — renderiza o relatório do reteste ligado à submissão inicial `:id`. `404` se não houver reteste.
- **`GET /api/public/retest-report/:id?t=HMAC&view=…`** — versão pública assinada (reaproveita `reportToken`), para envio por WhatsApp/e-mail. CSP via `setReportCsp`.
- **`GET /api/internal/submissions`** *(admin)* ganha `retest_submission_id` (o reteste mais recente por submissão inicial) para o painel saber quando mostrar as abas do reteste. (LEFT JOIN LATERAL na `retest_submissions`, no mesmo estilo do join de WhatsApp que já existe.)

---

## 4. Motor do relatório do reteste (o núcleo da spec) — `backend-vps/report/`

Novos arquivos, espelhando `profileTexts.js` / `synthesisTexts.js` / `reportTemplate.js`:

- **`retestTexts.js`** — todas as tabelas de texto fixo da spec:
  - "Onde você começou" por `direcao_inicial` (sub/ff/osc/func).
  - "Onde você está agora": 1ª frase por faixa de `cp_media`; 2ª frase por `aplicacao`.
  - "Leitura do movimento": M1–M6.
  - Textos de síntese (4 condições) + nota `n_nao_viveu >= 3`.
  - Enunciados/escala não são necessários aqui (são participante-facing, ficam no `mapa-app`), mas os **nomes das competências** vêm de `competencyMeta`.

- **`retestReport.js`** — função **pura** `buildRetestReport({ initialResults, retestResponses })` que retorna blocos estruturados por competência + a síntese final. Implementa exatamente:

  Variáveis derivadas por competência:
  ```
  consciencia = 1..5
  prontidao   = 1..5
  aplicacao   = aplicou_forte | aplicou | tentou | nao_viveu | nao_usou
  cp_media    = (consciencia + prontidao) / 2
  direcao_inicial = DIR_TO_CODE[initial.direction]   // sub/ff/osc/func
  nivel_inicial   = initial.z3Count                  // 0..3
  ```

  Faixas de `cp_media` para a 1ª frase de "agora": `4.0–5.0`, `3.0–3.9`, `2.0–2.9`, `1.0–1.9`.

  **Leitura do movimento — algoritmo único (primeira regra que casar, nesta ordem exata):**
  1. **M6** — `aplicacao == nao_viveu`. **Sobrepõe** tudo; avaliada primeiro.
  2. **M2** — desvio (sub/ff/osc) **e** `aplicacao IN (aplicou, aplicou_forte)`. Antes de M1 de propósito: "já aplicou" é a leitura mais forte e, na spec, independe da `cp_media`.
  3. **M1** — desvio **e** `cp_media >= 3.5`.
  4. **M3** — desvio **e** `cp_media < 2.5` **e** não aplicou.
  5. **M4** — funcional (func) **e** `cp_media >= 3.5`.
  6. **M5** — funcional **e** `cp_media < 3.0`.
  7. **Fallback neutro** — nenhuma acima casou (ex.: desvio com `2.5 <= cp_media < 3.5` sem aplicação; func com `3.0 <= cp_media < 3.5`). Texto curto e neutro, a alinhar com a Ana antes do fim (ver notas de implementação).

  Justificativa da ordem: os números M1..M6 da spec são rótulos, não a ordem de avaliação. A única sobreposição real é "desvio + cp_media alta + já aplicou" (M1∩M2); resolvemos por M2 primeiro. `nao_viveu` (M6) é override global e vai no topo.

  **Síntese final** — variáveis:
  ```
  n_competencias_com_avanco = # com cp_media >= 3.5 E direcao_inicial != func
  n_aplicacoes              = # com aplicacao IN (aplicou, aplicou_forte)
  n_nao_viveu               = # com aplicacao == nao_viveu
  ```
  Seleção do texto (na ordem): `n_aplicacoes >= 3` → texto A; senão `n_competencias_com_avanco >= 3` → texto B; senão `1..2` → texto C; senão `0` → texto D. Se `n_nao_viveu >= 3`, anexa a nota de observação ao final.

  Regras críticas:
  - `nao_viveu` **sai** do cálculo de `n_aplicacoes` e de qualquer média de aplicação. Só dispara M6 e conta em `n_nao_viveu`. Não conta como falha nem como neutro.
  - Consciência e prontidão são **sempre** respondidas (percepção interna; sem opção "não vivi").

- **`renderRetestReportHtml({ view, initialResults, retestResponses, fullName, competencyKey? })`** — envolve os blocos no `renderShell` + brand + `renderBrandBar` + `buildReportTitle` existentes, reaproveitando `competencyMeta` para os títulos.
  - Estrutura de cada bloco de competência (conforme a spec):
    ```
    [Nome da competência]
    Onde você começou: …
    Onde você está agora: …
    Leitura do movimento: …
    ```
  - Síntese aparece no topo (card próprio, como o consolidado atual).
  - `view=competencia` renderiza um único bloco (para disparo individual).
  - **Sem roda/pips de score, sem gráfico de progresso.** É texto interpretativo.

---

## 5. Integração no painel (`panel.html`)

Quando o aluno selecionado tiver `retest_submission_id`, a linha de abas ganha **"Reteste"** (consolidado) + uma view de reteste por competência, ao lado de Resumo/Síntese/Consolidado de hoje. Apontam o mesmo `iframe` para `…/retest-report`, e os botões de WhatsApp / e-mail / PDF + a lógica de link público funcionam sem mudança (só muda `view`/caminho). Sem novo "modo" de painel.

- `publicReportUrl()` passa a montar tanto `…/report/…` quanto `…/retest-report/…` conforme a aba ativa.
- Mensagens de WhatsApp/e-mail podem ganhar uma variante curta para o reteste (opcional; pode reusar as atuais numa 1ª versão).

---

## 6. Testes

- **Motor puro (`buildRetestReport`)** — testes unitários cobrindo cada ramo:
  - as 4 faixas de `cp_media`;
  - os 5 textos de `aplicacao`;
  - prioridade M1–M6 (incluindo o override de `nao_viveu` e o desempate M2 antes de M1);
  - as 4 condições de síntese + a nota `n_nao_viveu >= 3`;
  - `nao_viveu` fora de `n_aplicacoes`.
- **Validação dos endpoints** — mesmo tratamento defensivo do caminho de submissão existente (enums, contagem de 6 competências, 404 sem baseline).
- O `mapa-app` não usa framework de testes hoje; o foco de testes é o motor/endpoints no backend. A validação do fluxo React é manual (rodar o app com `?fluxo=reteste`).

---

## Ordem de implementação (commits)

1. Schema (`retest_submissions` + `ensureSchema`) e `retest-schema.sql` de referência.
2. `retestTexts.js` + `retestReport.js` (motor puro) **com testes**.
3. `renderRetestReportHtml` (renderização) + preview local opcional.
4. Endpoints (`retest-eligibility`, `retest-submissions`, `retest-report` interno e público, `retest_submission_id` na lista).
5. Fluxo React (`RetestApp` + telas + `data/retest.js` + services), entrada por `?fluxo=reteste`.
6. Abas do reteste no `panel.html`.

## Notas de implementação / riscos

- **Duplicação de report code:** existe cópia em `mapa-app/src/report/` e `backend-vps/report/`. O relatório do reteste é server-side (coordenador). Implementar **só no backend**; não duplicar no `mapa-app`.
- **Combinações fora das regras M1–M6:** ex. desvio com `2.5 <= cp_media < 3.5` sem aplicação. A spec não define texto explícito — usar um fallback neutro curto e alinhá-lo com a Ana antes do fim. Registrar as combinações não cobertas durante a implementação.
- **Casamento por e-mail:** o app hoje cria uma nova linha de participante a cada envio (sem dedupe). "Mais recente por e-mail" é a heurística; documentar que retestes de e-mails digitados errado simplesmente não passam da elegibilidade (bloqueio intencional).
- **Deploy:** `mapa-app` é build+copy manual para `/var/www`; backend em `/opt` (ver memória). O reteste exige rebuild do frontend e redeploy do backend.
