# Assessment v2 — Perguntas, Gabarito e Regras

## Fonte

Este documento foi criado a partir do arquivo:

`Assessment_Competencias_VERSAO_FACILITADORA.pdf`

Versão de facilitadora com gabarito.

As tags `Z1`, `Z2`, `Z3` e os valores são internos.
Na versão do participante, essas tags NÃO devem aparecer.

---

# 1. Instrução para o participante

Responda lembrando de situações que realmente aconteceram com você.

Se de verdade nunca passou por uma delas, marque a opção mais parecida com o seu jeito habitual de agir — não com o que você gostaria de ter feito.

---

# 2. Estrutura do Assessment v2

O assessment tem:

- 6 competências
- 5 perguntas por competência
- 2 perguntas abertas finais
- 32 perguntas no total

Por competência:

- 3 perguntas de situação
- 1 pergunta de pensamento
- 1 pergunta de valor

Resumo esperado:

- 18 situation
- 6 thought
- 6 value
- 2 open
- 32 total

---

# 3. Competências

```js
[
  { key: 'comunicacao_assertiva', label: 'Comunicação Assertiva' },
  { key: 'maturidade_emocional', label: 'Maturidade Emocional' },
  { key: 'foco_resultado_produtividade', label: 'Foco em Resultado e Produtividade' },
  { key: 'visao_sistemica', label: 'Visão Sistêmica' },
  { key: 'direcao_futuro', label: 'Direção de Futuro' },
  { key: 'protagonismo_profissional', label: 'Protagonismo Profissional' }
]
```

---

# 4. Tipos de pergunta

- `situation`
- `thought`
- `value`
- `open`

## 4.1 situation

Cada alternativa tem uma zona interna:

- `Z1` = recuo / subexpressão
- `Z2` = excesso / padrão compensatório
- `Z3` = funcional

Pontuação:

- `Z3` = 2 pontos
- `Z1` = 0 ponto
- `Z2` = 0 ponto

## 4.2 thought

Cada pergunta tem duas afirmações:

- uma puxa para `Z1`
- uma puxa para `Z2`

Frequências:

- `Quase sempre`
- `Às vezes`
- `Raramente`

## 4.3 value

Escolha forçada de UMA alternativa.

Cada alternativa mapeia para um valor.

## 4.4 open

Texto livre. Não pontua.

---

# 5. Regras de cálculo

Por competência:

```text
z1_count = quantidade de respostas Z1 nas situações
z2_count = quantidade de respostas Z2 nas situações
z3_count = quantidade de respostas Z3 nas situações
level = z3_count * 2
```

Direção:

```text
se z3_count = 3 => funcional
se z1_count > z2_count => recuo
se z2_count > z1_count => excesso
se z1_count = z2_count e z3_count < 3 => oscilante
```

Pensamentos e valores não entram no cálculo de `level` e `direction`.

---

# 6. Frequências

```js
[
  { value: 'quase_sempre', label: 'Quase sempre' },
  { value: 'as_vezes', label: 'Às vezes' },
  { value: 'raramente', label: 'Raramente' }
]
```

---

# 7. Perguntas

## Parte 1 — Comunicação Assertiva

### Q1 — situation

Competência: `comunicacao_assertiva`

Enunciado:

Lembre da última vez que você discordou de uma decisão numa reunião ou conversa de trabalho — e quem decidia tinha mais peso que você. O que você fez?

Alternativas:

- a) Não falei na hora — achei melhor não abrir discussão na frente de todo mundo, ainda mais com alguém acima de mim.  
  `zone: Z1`
- b) Falei na hora o que pensava, sem rodeio — se ninguém aponta, passa errado; prefiro falar com franqueza, mesmo que o tom soe duro.
  `zone: Z2`
- c) Falei que enxergava diferente e expliquei o porquê em poucas palavras, sem brigar pra que fosse do meu jeito.  
  `zone: Z3`

### Q2 — situation

Competência: `comunicacao_assertiva`

Enunciado:

Lembre da última vez que te pediram pra assumir algo — uma tarefa, um prazo, uma demanda a mais — que você sabia que ia te sobrecarregar. O que você fez?

Alternativas:

- a) Aceitei mesmo assim — preferi não criar problema; depois eu dava um jeito.  
  `zone: Z1`
- b) Falei o que dava pra assumir e o que não dava, e a gente acertou o que vinha primeiro.  
  `zone: Z3`
- c) Deixei claro, meio sem paciência, que eu já estava no meu limite e que aquilo não cabia — uma hora a gente tem que se impor.
  `zone: Z2`

### Q3 — situation

Competência: `comunicacao_assertiva`

Enunciado:

Lembre da última vez que alguém não cumpriu algo combinado com você, ou que você precisou cobrar ou pedir algo importante pra você. O que você fez?

Alternativas:

- a) Retomei o combinado direto com a pessoa — falei o que tinha ficado pra trás e o que eu precisava dali pra frente.  
  `zone: Z3`
- b) Deixei pra lá e dei meu jeito por conta própria — cobrar ia parecer que eu estava reclamando ou fazendo drama.
  `zone: Z1`
- c) Cobrei na hora, sem muito filtro — quando deixo passar vira costume, prefiro deixar claro logo.  
  `zone: Z2`

### Q4 — thought

Competência: `comunicacao_assertiva`

Enunciado:

Quando você precisa se posicionar, dizer não ou cobrar alguém, com que frequência passa pela sua cabeça cada pensamento?

Afirmações:

- 1) “Melhor não falar agora, pra não criar climão ou desagradar alguém.”  
  `zone: Z1`
- 2) “Se eu não falar firme, acabam passando por cima de mim.”  
  `zone: Z2`

### Q5 — value

Competência: `comunicacao_assertiva`

Enunciado:

Quando você precisa dizer algo difícil e não dá pra agradar todo mundo, o que pesa mais forte em você na hora? (UMA)

Alternativas:

- a) Não estremecer a relação, manter o clima bom.  
  `mappedValue: Pertencimento`
- b) Dizer o que eu penso de verdade, mesmo que incomode.  
  `mappedValue: Verdade`
- c) Que a coisa seja justa, que cada um assuma o que é seu.  
  `mappedValue: Justiça`
- d) Não passar uma imagem ruim, não parecer difícil.  
  `mappedValue: Reconhecimento`
- e) Resolver logo e seguir em frente.  
  `mappedValue: Resultado`

---

## Parte 2 — Maturidade Emocional

### Q6 — situation

Competência: `maturidade_emocional`

Enunciado:

Lembre da última vez que você recebeu uma crítica dura, ou um feedback que te pegou de surpresa. O que você fez?

Alternativas:

- a) Expliquei o meu lado na hora — parte daquilo vinha de quem não tinha visto tudo, e eu não ia deixar ficar uma impressão errada de mim.  
  `zone: Z2`
- b) Concordei e agradeci ali, de boa — mas depois fiquei dias remoendo, pensando no que tinham achado de mim.  
  `zone: Z1`
- c) Segurei a vontade de responder na hora, deixei a poeira baixar, e depois pensei com calma no que tinha ali de verdade pra eu aproveitar.  
  `zone: Z3`

### Q7 — situation

Competência: `maturidade_emocional`

Enunciado:

Lembre da última vez que algo importante desandou de um jeito que você não esperava — um plano que furou, um problema que caiu no seu colo. Nas horas seguintes, o que aconteceu com você?

Alternativas:

- a) Me chateei, mas respirei, separei o que ainda dava pra resolver do que não dava mais, e fui cuidar do que estava na minha mão.
  `zone: Z3`
- b) Travei — o nervosismo tomou conta, não sabia por onde começar e demorei um tempão pra conseguir reagir.
  `zone: Z1`
- c) Já fui resolvendo no impulso — puxei tudo pra mim, cobrei quem estava do lado, e só fui sentir o baque depois.  
  `zone: Z2`

### Q8 — situation

Competência: `maturidade_emocional`

Enunciado:

Lembre da última vez que algo te abalou de verdade no trabalho — uma situação injusta, uma conversa pesada, um erro seu exposto na frente dos outros. Pensando em como você ficou nos dias seguintes:

Alternativas:

- a) Por fora segui normal, como se não tivesse mexido comigo — mas por dentro ficou martelando, ou apareceu depois em forma de cansaço, irritação, sono ruim.  
  `zone: Z1`
- b) Não me deixei ficar mal — engoli, mantive a postura e o foco no trabalho; me abalar ali não ia ajudar em nada.
  `zone: Z2`
- c) Deixei vir o que tinha que vir, tirei um tempo pra digerir, e aí consegui virar a página de verdade — sem ficar remoendo nem fingir que não tinha doído.  
  `zone: Z3`

### Q9 — thought

Competência: `maturidade_emocional`

Enunciado:

Quando algo mexe com você emocionalmente no trabalho, com que frequência passa pela sua cabeça cada pensamento?

Afirmações:

- 1) “Não posso deixar transparecer o que estou sentindo, senão vão me achar frágil.”  
  `zone: Z2`
- 2) “Melhor nem mexer no que me incomodou — é só seguir que passa.”  
  `zone: Z1`

### Q10 — value

Competência: `maturidade_emocional`

Enunciado:

Quando algo te abala emocionalmente no trabalho, o que pesa mais forte em você na hora? (UMA)

Alternativas:

- a) Não deixar isso virar briga ou desgaste com os outros.  
  `mappedValue: Pertencimento`
- b) Manter o controle, não me sentir sem chão.
  `mappedValue: Segurança`
- c) Não passar imagem de frágil ou sem controle.
  `mappedValue: Reconhecimento`
- d) Que tivessem sido justos comigo.  
  `mappedValue: Justiça`
- e) Não travar — conseguir seguir e resolver.  
  `mappedValue: Resultado`

---

## Parte 3 — Foco em Resultado e Produtividade

### Q11 — situation

Competência: `foco_resultado_produtividade`

Enunciado:

Lembre da última semana realmente cheia que você teve — muita demanda e tarefa ao mesmo tempo. Na prática, como você tocou aquilo?

Alternativas:

- a) Abracei tudo de uma vez e fui tocando no impulso — parar pra organizar ia ser perda de um tempo que eu não tinha.  
  `zone: Z2`
- b) Parei um instante pra ver o que era mais importante, comecei por aí, e deixei o resto pra depois.  
  `zone: Z3`
- c) Fui fazendo primeiro o que era mais rápido e o que gritava mais alto, pra ir tirando da frente — o importante mesmo ficou pro fim.  
  `zone: Z1`

### Q12 — situation

Competência: `foco_resultado_produtividade`

Enunciado:

Lembre da última vez que você teve uma entrega importante que dependia só de você, sem ninguém cobrando prazo. Como foi?

Alternativas:

- a) Como ninguém estava cobrando, fui empurrando com a barriga — sempre tinha algo mais urgente na frente.  
  `zone: Z1`
- b) Fui aceitando outras coisas que apareciam, e ela acabou disputando espaço com todo o resto.  
  `zone: Z2`
- c) Marquei uma data pra mim e reservei um tempo no meio da semana, como se alguém fosse cobrar.  
  `zone: Z3`

### Q13 — situation

Competência: `foco_resultado_produtividade`

Enunciado:

Lembre da última vez que você terminou o dia no limite, tendo feito mil coisas pequenas, mas deixando de lado as atividades que eram de fato mais relevantes. Depois disso, o que você fez?

Alternativas:

- a) No dia seguinte inverti a ordem: comecei pelo que era mais importante e deixei o resto pra depois.  
  `zone: Z3`
- b) Fiquei até mais tarde e puxei ainda mais coisa pra mim, pra conseguir dar conta de tudo.  
  `zone: Z2`
- c) Me frustrei, mas não tomei nenhuma decisão pra mudar — no dia seguinte continuei do mesmo jeito.
  `zone: Z1`

### Q14 — thought

Competência: `foco_resultado_produtividade`

Enunciado:

Quando o trabalho aperta, com que frequência passa pela sua cabeça cada pensamento?

Afirmações:

- 1) “Eu preciso dar conta de tudo — se sobra coisa, é falha minha.”  
  `zone: Z2`
- 2) “Isso eu resolvo depois, ainda dá tempo.”  
  `zone: Z1`

### Q15 — value

Competência: `foco_resultado_produtividade`

Enunciado:

Quando o trabalho acumula e você não vai dar conta de tudo bem, o que pesa mais forte? (UMA)

Alternativas:

- a) Entregar e fazer andar, custe o que custar.  
  `mappedValue: Resultado`
- b) Fazer bem feito, mesmo que demore mais.  
  `mappedValue: Excelência`
- c) Não passar a imagem de quem não dá conta.  
  `mappedValue: Reconhecimento`
- d) Manter tudo organizado e sob controle.  
  `mappedValue: Segurança`
- e) Não deixar ninguém na mão.  
  `mappedValue: Pertencimento`

---

## Parte 4 — Visão Sistêmica

### Q16 — situation

Competência: `visao_sistemica`

Enunciado:

Lembre da última vez que te passaram uma tarefa sem muito contexto — só “faz isso”. O que você fez?

Alternativas:

- a) Fiz do jeito que pediram e pronto, sem ficar perguntando muito — não queria atrasar nem parecer que estava enrolando.
  `zone: Z1`
- b) Antes de começar, perguntei rapidinho pra que era aquilo e quem ia usar, pra não fazer no escuro — e aí toquei.  
  `zone: Z3`
- c) Quis entender tudo nos mínimos detalhes e levantei um monte de perguntas — só ia tocar com a certeza de que nada sairia errado.  
  `zone: Z2`

### Q17 — situation

Competência: `visao_sistemica`

Enunciado:

Lembre da última vez que você percebeu um problema que se repetia, mas que não era exatamente da sua responsabilidade. O que você fez?

Alternativas:

- a) Entrei e resolvi por conta própria — alguém tinha que resolver e ninguém estava fazendo nada.
  `zone: Z2`
- b) Reparei, mas não me meti — não era minha função, e não queria pisar no que era dos outros.  
  `zone: Z1`
- c) Avisei quem podia resolver, mostrei onde aquilo estava atrapalhando, e ajudei no que dava do meu lado.  
  `zone: Z3`

### Q18 — situation

Competência: `visao_sistemica`

Enunciado:

Lembre da última vez que você terminou a sua parte de algo, mas dava pra ver que quem ia pegar dali podia ter dificuldade. O que você fez?

Alternativas:

- a) Antes de passar adiante, expliquei o que era importante e o que podia complicar, pra facilitar pra quem ia pegar.  
  `zone: Z3`
- b) Considerei a minha parte feita — cada um cuida do que é seu, e a minha eu já tinha entregado.  
  `zone: Z1`
- c) Acabei entrando também na parte do outro pra garantir que saísse do jeito certo.  
  `zone: Z2`

### Q19 — thought

Competência: `visao_sistemica`

Enunciado:

Em coisas que envolvem várias pessoas, com que frequência passa pela sua cabeça cada pensamento?

Afirmações:

- 1) “Fiz a minha parte; o que vem depois não é problema meu.”  
  `zone: Z1`
- 2) “Se eu não ficar de olho em tudo, alguma coisa vai sair errada.”  
  `zone: Z2`

### Q20 — value

Competência: `visao_sistemica`

Enunciado:

Quando uma entrega envolve várias pessoas e etapas, o que pesa mais forte em você? (UMA)

Alternativas:

- a) Que o resultado final saia.  
  `mappedValue: Resultado`
- b) Que nada dê errado no caminho.  
  `mappedValue: Segurança`
- c) Que as pessoas trabalhem bem juntas.  
  `mappedValue: Pertencimento`
- d) Cuidar bem do que é meu, sem invadir o dos outros.  
  `mappedValue: Autonomia`
- e) Que a entrega inteira fique bem feita.  
  `mappedValue: Excelência`

---

## Parte 5 — Direção de Futuro

Observação:

Ancora em padrão recente, não episódio único, porque decisão sobre o futuro raramente vira uma cena nítida na memória.

### Q21 — situation

Competência: `direcao_futuro`

Enunciado:

Pense nos últimos meses. Quando apareceu uma chance de crescer que exigia se expor, se esforçar mais ou sair da zona de conforto, o que você costumou fazer?

Alternativas:

- a) Acabei adiando ou deixando passar — senti que ainda não tinha preparo suficiente, que faltava alguma coisa.
  `zone: Z1`
- b) Pensei se aquilo me levava pra onde eu quero chegar, e quando levava, encarei mesmo com o frio na barriga.  
  `zone: Z3`
- c) Agarrei na hora, antes de pensar direito — morro de medo de perder oportunidade e ficar pra trás.  
  `zone: Z2`

### Q22 — situation

Competência: `direcao_futuro`

Enunciado:

Pense em algo que você diz que quer pra sua vida ou carreira, mas que a sua rotina de hoje não sustenta. Nos últimos tempos, diante dessa diferença, o que você fez?

Alternativas:

- a) Escolhi uma mudança pequena e comecei a mexer numa parte da rotina — pouca coisa, mas de verdade.  
  `zone: Z3`
- b) Aquilo me incomodou e fiquei pensando muito, mas na prática não saí muito do lugar.
  `zone: Z1`
- c) Me cobrei demais e tentei mudar tudo de uma vez — o que não durou nem um pouco.  
  `zone: Z2`

### Q23 — situation

Competência: `direcao_futuro`

Enunciado:

Pense nas decisões mais importantes que você tomou nos últimos tempos. Na hora de escolher, o que mais pesou?

Alternativas:

- a) O que parecia mais ousado ou que me fazia avançar mais rápido, mesmo sem eu ter clareza do que ia custar.  
  `zone: Z2`
- b) O que me dava menos dor de cabeça na hora ou evitava um atrito imediato.  
  `zone: Z1`
- c) O que combinava mais com aquilo que eu acredito e com a direção que eu quero seguir, mesmo custando mais agora.  
  `zone: Z3`

### Q24 — thought

Competência: `direcao_futuro`

Enunciado:

Quando você pensa no seu futuro, com que frequência passa pela sua cabeça cada pensamento?

Afirmações:

- 1) “Eu queria crescer, mas não sei nem por onde começar.”  
  `zone: Z1`
- 2) “Preciso correr — sinto que estou ficando pra trás em relação aos outros.”  
  `zone: Z2`

### Q25 — value

Competência: `direcao_futuro`

Enunciado:

Quando você decide algo sobre seu futuro ou sua carreira, o que pesa mais forte? (UMA)

Alternativas:

- a) Crescer, aprender, evoluir.  
  `mappedValue: Crescimento`
- b) Não arriscar o que eu já tenho, manter o chão firme.  
  `mappedValue: Segurança`
- c) Construir uma reputação, ter reconhecimento pelo caminho.
  `mappedValue: Reconhecimento`
- d) Ter liberdade pra decidir do meu jeito.  
  `mappedValue: Autonomia`
- e) Avançar de verdade, ver resultado concreto.  
  `mappedValue: Resultado`

---

## Parte 6 — Protagonismo Profissional

### Q26 — situation

Competência: `protagonismo_profissional`

Enunciado:

Lembre da última vez que você fez uma boa entrega que passou batida — ninguém viu nem deu o crédito. O que você fez?

Alternativas:

- a) Me chateei, mas não falei nada — ia parecer que eu estava querendo aparecer.
  `zone: Z1`
- b) Fiz questão de deixar bem claro que tinha sido eu — não ia deixar meu trabalho passar como se fosse de outra pessoa.  
  `zone: Z2`
- c) Num momento tranquilo, dei um jeito de mostrar o que eu tinha feito e de acertar isso melhor dali pra frente.  
  `zone: Z3`

### Q27 — situation

Competência: `protagonismo_profissional`

Enunciado:

Lembre da última vez que você enxergou uma melhoria que dava pra fazer no trabalho, mas ninguém tinha pedido sua opinião. O que você fez?

Alternativas:

- a) Organizei a ideia, escolhi uma boa hora e apresentei como uma sugestão.  
  `zone: Z3`
- b) Guardei pra mim — achei que não era o meu lugar falar, e não quis me meter.  
  `zone: Z1`
- c) Apontei o problema sem rodeio — me incomoda ver algo errado e ninguém fazer nada, então alguém tinha que falar.  
  `zone: Z2`

### Q28 — situation

Competência: `protagonismo_profissional`

Enunciado:

Lembre da última vez que você sentiu que seu desenvolvimento no trabalho tinha estagnado. O que você fez?

Alternativas:

- a) Tentei mostrar meu valor pegando mais tarefa, assumindo mais do que devia pra aparecer mais.  
  `zone: Z2`
- b) Fiquei esperando que alguém percebesse, me desse uma chance ou me orientasse melhor.  
  `zone: Z1`
- c) Fui atrás de saber onde eu precisava melhorar e comecei a fazer alguma coisa concreta sobre isso.  
  `zone: Z3`

### Q29 — thought

Competência: `protagonismo_profissional`

Enunciado:

Quando o assunto é o seu crescimento, com que frequência passa pela sua cabeça cada pensamento?

Afirmações:

- 1) “Pra eu crescer, alguém precisa me notar ou me dar a oportunidade.”  
  `zone: Z1`
- 2) “Preciso provar o tempo todo que sou indispensável.”  
  `zone: Z2`

### Q30 — value

Competência: `protagonismo_profissional`

Enunciado:

Quando o assunto é o seu crescimento e espaço no trabalho, o que pesa mais forte? (UMA)

Alternativas:

- a) Ter reconhecimento pelo que eu faço.
  `mappedValue: Reconhecimento`
- b) Ter liberdade e autonomia pra agir.  
  `mappedValue: Autonomia`
- c) Crescer e aprender.  
  `mappedValue: Crescimento`
- d) Não parecer que estou me promovendo, manter boas relações.  
  `mappedValue: Pertencimento`
- e) Contribuir e entregar de verdade.  
  `mappedValue: Resultado`

---

## Para fechar — perguntas abertas

### Q31 — open

Enunciado:

Pensando no seu dia a dia de trabalho hoje, qual é a situação que mais se repete e que você gostaria de conseguir lidar de um jeito diferente? Descreva rapidamente o que costuma acontecer.

### Q32 — open

Enunciado:

Se, ao final deste laboratório, você pudesse mudar uma única coisa no seu jeito de agir no trabalho, o que faria a maior diferença pra você?

---

# 8. Validação obrigatória para implementação

Ao implementar `assessment.js`, validar:

- total de perguntas = 32
- situation = 18
- thought = 6
- value = 6
- open = 2
- números 1 a 32 sem duplicidade
- cada situation tem 3 opções
- cada opção situation tem zone Z1/Z2/Z3
- cada thought tem 2 statements
- cada statement thought tem zone Z1/Z2
- cada value tem mappedValue
- nenhum texto visível contém `(Z1)`, `(Z2)` ou `(Z3)`

---

# 9. Observação sobre relatório futuro

O relatório não é texto livre.

Na etapa futura, o sistema selecionará 1 entre 9 textos prontos por competência pela regra:

- Z3 = 3 → funcional puro
- Z3 = 2 → 1 erro: recuo ou excesso
- Z3 = 1 → 2 erros: recuo-dominante, excesso-dominante ou oscilante
- Z3 = 0 → 3 erros: recuo-dominante, excesso-dominante ou oscilante

Pensamento e valor não entram como eixos de seleção dos 9 perfis.

Nesta etapa, isso NÃO deve ser implementado na app do aluno.
