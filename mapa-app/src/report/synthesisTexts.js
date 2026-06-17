// Textos-template da Síntese do Relatório Final (Spec v3).
// A lógica de seleção vive em reportTemplate.js (buildSynthesis).

// BLOCO 1 — Retrato geral (por faixa de total_funcional, 0–18)
export const SINTESE_RETRATO = [
  {
    min: 15,
    max: 18,
    text: 'O seu mapa mostra um padrão estável na maior parte das competências: na maioria das situações, você reconhece o que cada momento pede e age de forma proporcional ao que aconteceu. Isso não significa que não existam pontos cegos — significa que o chão está firme, e o trabalho daqui pra frente é de refinamento, não de reconstrução.',
  },
  {
    min: 10,
    max: 14,
    text: 'O seu mapa mostra um padrão misto: em algumas competências você age de forma funcional na maior parte do tempo, em outras o desvio ainda aparece com frequência. Isso é comum — e é exatamente o tipo de retrato que permite priorizar. Você não precisa trabalhar tudo ao mesmo tempo; precisa saber onde o custo é maior pra você hoje.',
  },
  {
    min: 5,
    max: 9,
    text: 'O seu mapa mostra que, na maior parte das situações, o padrão de desvio aparece com mais frequência do que o padrão funcional. Isso não é um veredito sobre você — é um retrato do momento. E o que esse retrato diz é que existe espaço real pra mover comportamentos importantes na sua vida profissional. Quando esses comportamentos começarem a mudar, os resultados na sua rotina, nas suas relações e nas suas entregas vão ser sentidos com clareza — porque hoje há espaço significativo pra crescer em cada um deles.',
  },
  {
    min: 0,
    max: 4,
    text: 'O seu mapa mostra um padrão consistente de desvio na maior parte das competências. O padrão funcional aparece pouco ou não aparece. Antes de qualquer julgamento: isso não diz quem você é. Diz o que tem se repetido — e o que se repete pode mudar. O ponto de partida importa menos do que a direção que você escolhe agora. Comece escolhendo, dentro de cada competência mais frágil, um posicionamento diferente do que você costuma adotar — mesmo que pequeno, mesmo que desconfortável. É na prática que o padrão se desfaz.',
  },
]

// BLOCO 2 — frases de força / fragilidade por competência
export const SINTESE_FORCA = {
  comunicacao_assertiva:
    'Você tende a dizer o que precisa, na hora certa, sem se omitir nem se exaltar.',
  maturidade_emocional:
    'Você tende a reconhecer a emoção que sentiu e escolher a sua resposta — em vez de ser levado(a) por ela.',
  foco_resultado_produtividade:
    'Você tende a direcionar a sua energia pro que importa, sem dispersar e sem atropelar.',
  visao_sistemica:
    'Você tende a enxergar além da sua própria parte e agir considerando o contexto ao redor.',
  direcao_futuro:
    'Você tende a saber pra onde está indo e mover na direção, sem travar nem perder a constância.',
  protagonismo_profissional:
    'Você tende a assumir a responsabilidade pela sua trajetória e atuação — sem esperar e sem forçar.',
}

export const SINTESE_FRAGILIDADE = {
  comunicacao_assertiva:
    'É onde a sua voz mais sai do equilíbrio — seja engolindo o que precisava ser dito, seja avançando com mais força do que aquele momento pedia. Nos dois casos, o custo nas relações é alto.',
  maturidade_emocional:
    'É onde a emoção mais governa o seu comportamento — seja escondendo o que sente, seja despejando nos outros.',
  foco_resultado_produtividade:
    'É onde o seu esforço mais se perde — seja por se dispersar muito ao longo do caminho, seja por abraçar demais e atropelar pessoas, processos ou qualidade.',
  visao_sistemica:
    'É onde a sua leitura do contexto mais falha — seja por se fechar na sua própria parte e não olhar pro todo, seja por tentar controlar ou entrar no que não é seu.',
  direcao_futuro:
    'É onde a sua carreira mais fica parada — seja por travar diante das decisões importantes, seja por mudar de rumo rápido demais e não sustentar.',
  protagonismo_profissional:
    'É onde você mais terceiriza a responsabilidade — seja esperando que alguém te note ou te diga o que fazer, seja se forçando demais pra provar valor o tempo todo.',
}

export const SINTESE_MESMO_NIVEL =
  'As suas 6 competências aparecem no mesmo nível funcional — nenhuma se destaca claramente acima ou abaixo das outras. O trabalho aqui é transversal: não há uma competência específica pra priorizar, mas o padrão de direção — pra onde você tende a ir quando sai do funcional, seja para a subexpressão (recuo) ou para a falsa força (excesso) — diz muito sobre por onde começar.'

// BLOCO 3A — tendência geral
export const SINTESE_TENDENCIA = {
  sub: 'Quando você sai do padrão funcional, a tendência dominante é a subexpressão: recuar, engolir o que sente, não se posicionar, adiar, ficar fechado(a) na sua parte, esperar. O motivo de fundo costuma ser o de se proteger — do conflito, do erro, da exposição. O custo é que você desaparece justamente das situações que mais precisam de você. A boa notícia: quem tende à subexpressão geralmente tem a capacidade dentro — só não está usando.',
  ff: 'Quando você sai do padrão funcional, a tendência dominante é a falsa força: forçar, reagir no impulso, atropelar, centralizar, se impor pra garantir o resultado. O motivo de fundo costuma ser o de compensar uma insegurança interna — provar valor, controlar o ambiente, garantir que nada saia errado. O custo é que você até entrega, mas o caminho machuca você e quem está ao seu redor. A boa notícia: quem tende à falsa força já tem a energia do movimento. O trabalho é calibrar essa energia, não criar do zero.',
  mista: 'O seu padrão não pende claramente pra um lado. Em algumas competências você tende à subexpressão, em outras à falsa força. Isso pode significar que o gatilho muda conforme o contexto — e que a virada não é escolher um lado, mas construir consistência no seu próprio jeito de reagir.',
  func: 'O seu padrão geral é funcional. Quando você sai, os desvios são pontuais e não chegam a configurar uma tendência dominante. O trabalho aqui é de manutenção e refinamento — identificar os poucos pontos onde o automático ainda vence.',
}

// BLOCO 3B — cruzamentos especiais (máx. 3, na ordem). test(ctx) -> bool, text(ctx) -> string.
// ctx: { contagem_sub, contagem_ff, contagem_osc, contagem_nivel0, contagem_nivel3, nivel{key} }
export const SINTESE_CRUZAMENTOS = [
  {
    id: 1,
    test: (x) => x.contagem_sub >= 4,
    text: (x) =>
      `Repare: a subexpressão aparece em ${x.contagem_sub} das 6 competências. Isso sugere que o padrão não é pontual — é uma postura geral de recuo. Você provavelmente se reconhece como alguém que “evita criar problema”. O custo se espalha: não fala (Comunicação), engole o que sente (Maturidade), dispersa a energia (Foco), se fecha na própria parte (Visão), não decide (Direção), espera ser notado(a) (Protagonismo). A raiz pode ser uma só: o medo de se expor. Se trabalhar esse medo, o movimento aparece em várias competências ao mesmo tempo.`,
  },
  {
    id: 2,
    test: (x) => x.contagem_ff >= 4,
    text: (x) =>
      `A falsa força aparece em ${x.contagem_ff} das 6 competências. Isso sugere que o padrão não é pontual — é uma postura geral de compensação, de compensar uma insegurança ou um medo de não ser suficiente. Você provavelmente se reconhece como alguém que “resolve custe o que custar”. O custo se espalha: atropela na fala (Comunicação), reage no impulso (Maturidade), abraça tudo (Foco), centraliza ou invade (Visão), age por impulso (Direção), se força pra provar valor (Protagonismo). A raiz pode ser uma só: a crença de que se você não fizer com força, ninguém faz. Se trabalhar essa crença, a calibragem aparece em várias competências ao mesmo tempo.`,
  },
  {
    id: 3,
    test: (x) => x.contagem_osc >= 3,
    text: (x) =>
      `Você oscila em ${x.contagem_osc} competências — ora pra um lado, ora pro outro. Esse tipo de padrão costuma cansar mais do que um padrão de um lado só, porque nem você sabe de antemão como vai reagir. O trabalho mais importante pra você não é escolher entre recuar ou forçar — é construir constância. Os protocolos ajudam nisso: cada um tem um primeiro passo (PAUSA, PERCEBE, PARA, AMPLIA, OLHA, ASSUME) que interrompe o automático. Treine esse primeiro passo até ele virar hábito.`,
  },
  {
    id: 4,
    test: (x) => x.nivel.comunicacao_assertiva <= 1 && x.nivel.maturidade_emocional <= 1,
    text: () =>
      'Comunicação Assertiva e Maturidade Emocional aparecem as duas com desvio forte. Isso geralmente anda junto: quem não regula bem a emoção tem dificuldade de se comunicar com clareza — ou engole o que precisava dizer (porque o desconforto emocional trava), ou fala demais (porque a emoção governa a fala). Se trabalhar a maturidade emocional primeiro (PERCEBE · NOMEIA), a comunicação tende a melhorar como consequência — porque quando a emoção não governa, a fala fica mais proporcional ao que precisava ser dito.',
  },
  {
    id: 5,
    test: (x) => x.nivel.foco_resultado_produtividade <= 1 && x.nivel.direcao_futuro <= 1,
    text: () =>
      'Foco em Resultado e Direção de Futuro aparecem as duas com desvio forte. Isso também anda junto: quem não sabe pra onde está indo (Direção) tem dificuldade de priorizar (Foco) — porque sem direção definida, tudo parece igualmente importante ou igualmente indiferente. Se trabalhar a direção primeiro (OLHA · DECIDE), o foco tende a ganhar critério como consequência — porque quando você sabe pra onde vai, fica mais fácil separar o que importa do que distrai.',
  },
  {
    id: 6,
    test: (x) => x.nivel.visao_sistemica <= 1 && x.nivel.protagonismo_profissional <= 1,
    text: () =>
      'Visão Sistêmica e Protagonismo aparecem as duas com desvio forte. Isso se conecta: quem não enxerga o todo (Visão) tende a não agir sobre ele (Protagonismo) — e quem não age (Protagonismo) tende a não olhar pra fora (Visão). Se trabalhar a visão primeiro (AMPLIA — “quem mais é afetado por isso?”), o protagonismo tende a vir junto: quando você enxerga o problema, fica mais difícil fingir que não viu.',
  },
  {
    id: 7,
    test: (x) => x.contagem_nivel3 >= 5,
    text: (x) =>
      `Você aparece funcional em ${x.contagem_nivel3} das 6 competências. Isso é raro e significativo — não como elogio, mas como responsabilidade. Pessoas com esse padrão tendem a virar referência silenciosa nos times onde estão. O desafio aqui não é se desenvolver — é sustentar o nível sob pressão crescente e multiplicar: usar o que já funciona em você pra ajudar quem está ao lado a ampliar o próprio mapa.`,
  },
  {
    id: 8,
    test: (x) => x.contagem_nivel0 >= 4,
    text: (x) =>
      `O desvio consistente aparece em ${x.contagem_nivel0} competências. É um retrato que pode assustar — mas é também o tipo de retrato que mais muda quando a pessoa decide se mover. Não tente trabalhar tudo ao mesmo tempo. Escolha uma competência — a que mais custa caro pra você no dia a dia — e pratique só o primeiro passo do protocolo dela por 21 dias. Quando essa competência mover, as outras vêm junto.`,
  },
]

// BLOCO 4 — direção de trabalho
export const SINTESE_FRASE_POR_ONDE = {
  sub: 'É onde a subexpressão mais custa caro pra você — e onde o movimento vai ser mais sentido.',
  ff: 'É onde a falsa força mais custa caro — e onde a calibragem vai fazer mais diferença.',
  mista: 'É onde o desvio mais custa caro hoje, independente do lado pra onde você vai.',
  func: 'É onde ainda há espaço pra refinar — mesmo num mapa que já é forte.',
}

export const SINTESE_PROTOCOLO = {
  comunicacao_assertiva: {
    protocolo: 'PAUSA · ALVO · DIZ · SUSTENTA',
    primeiroPasso: 'PAUSA (percebe o pensamento antes de reagir)',
  },
  maturidade_emocional: {
    protocolo: 'PERCEBE · NOMEIA · SEPARA · ESCOLHE',
    primeiroPasso: 'PERCEBE (percebe que a emoção chegou)',
  },
  foco_resultado_produtividade: {
    protocolo: 'PARA · ELEGE · FAZ · FECHA',
    primeiroPasso: 'PARA (para o automático de fazer mais)',
  },
  visao_sistemica: {
    protocolo: 'AMPLIA · CONECTA · MEDE · AGE',
    primeiroPasso: 'AMPLIA (“quem mais é afetado por isso?”)',
  },
  direcao_futuro: {
    protocolo: 'OLHA · DECIDE · PLANEJA · MOVE',
    primeiroPasso: 'OLHA (levanta a cabeça do status atual)',
  },
  protagonismo_profissional: {
    protocolo: 'ASSUME · PEDE · CRIA · SUSTENTA',
    primeiroPasso: 'ASSUME (para de esperar)',
  },
}

// Caso especial: funcional puro (total == 18)
export const SINTESE_FUNCIONAL_PURO =
  'O seu mapa mostra padrão funcional nas 6 competências. Isso é raro. O desafio aqui não é se desenvolver — é sustentar o nível e ajudar a multiplicar.'
