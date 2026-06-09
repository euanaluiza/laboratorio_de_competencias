// As nove combinações possíveis de perfil por competência (z3Count + direção).
export const PROFILE_KEYS = [
  'funcional_3',
  'recuo_2',
  'excesso_2',
  'recuo_1',
  'excesso_1',
  'oscilante_1',
  'recuo_0',
  'excesso_0',
  'oscilante_0',
]

// Texto fixo do card (rodapé), compartilhado por todas as competências.
export const REPORT_DISCLAIMER =
  'Isto descreve um padrão de comportamento, não quem você é. Padrão a gente muda — é o que vamos fazer.'

export const REPORT_BRAND = 'Growth Academy · Laboratório de Competências · seu mapa de apoio'

// Metadados por competência (não dependem do perfil):
// título, subtítulo, e o "caminho" (protocolo + passos) — o método da competência.
export const competencyMeta = {
  comunicacao_assertiva: {
    title: 'Comunicação Assertiva',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: 'PAUSA · ALVO · DIZ · SUSTENTA',
    steps: [
      { label: 'Pausa', text: 'percebe o que passou na sua cabeça. Corta o automático.' },
      {
        label: 'Alvo',
        text: 'o que eu quero que aconteça aqui? (não é arriscar a relação, é mirar um resultado)',
      },
      { label: 'Diz', text: 'curto, pra pessoa certa: o que vejo + o que preciso.' },
      { label: 'Sustenta', text: 'uma vez já basta. Não precisa vencer.' },
    ],
  },
  maturidade_emocional: {
    title: 'Maturidade Emocional',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: null,
    steps: [],
  },
  foco_resultado_produtividade: {
    title: 'Foco em Resultado e Produtividade',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: null,
    steps: [],
  },
  visao_sistemica: {
    title: 'Visão Sistêmica',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: null,
    steps: [],
  },
  direcao_futuro: {
    title: 'Direção de Futuro',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: null,
    steps: [],
  },
  protagonismo_profissional: {
    title: 'Protagonismo Profissional',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: null,
    steps: [],
  },
}

// Conteúdo interpretativo por perfil (varia conforme z3Count + direção):
// ondeVoceEsta, possiveisMotivos, note (dica final do caminho), deXparaY.
// Apenas textos oficiais. Perfis ausentes caem em placeholder técnico controlado.
export const profileTexts = {
  comunicacao_assertiva: {
    // P1 — Nível 3, Funcional puro
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações, você costuma se posicionar, dizer o que precisa e cobrar o que é seu — sem engolir e sem atropelar. Demonstra um padrão de transitar bem entre a relação e a verdade: fala o que pensa sem estremecer o clima nem precisar vencer ninguém. Esse é o seu ponto forte, e aparece de forma consistente.',
      possiveisMotivos:
        'O que tende a te sustentar aqui é agir a partir de “minha voz basta” — você não precisa nem sumir nem gritar pra se fazer ouvir. O ponto de atenção: sob muita pressão, todo mundo tem um lado pra onde escorrega. Vale saber qual é o seu — pra reconhecer cedo, quando a corda apertar, se você tende a se calar pra proteger a relação ou a endurecer pra garantir o ponto.',
      note: 'Já é quase automático em você — o valor agora é usar o caminho de propósito nas conversas mais difíceis, não só nas fáceis.',
      deXparaY: [
        {
          from: 'só cuidar da sua fala',
          to: 'nomeie com leveza, em voz alta, quando alguém ao seu lado recua ou se excede.',
        },
        {
          from: 'assumir que sempre vai ser assim',
          to: 'escolha uma conversa difícil por mês pra testar o seu limite, não só a sua média.',
        },
      ],
    },
    // P2 — Nível 2, Deslize de recuo
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações você se posiciona com clareza — mas em uma delas tendeu a recuar: engoliu, deixou pra depois ou deu seu jeito sozinha pra não criar atrito. O padrão funcional é o seu chão; o recuo aparece num ponto específico, em geral onde a relação pesa mais.',
      possiveisMotivos:
        'É provável que ali tenha pesado o medo de estremecer a relação ou de parecer difícil — com algo como “melhor não falar agora pra não criar climão” passando pela cabeça. Não é fraqueza: é um valor bom (cuidar do vínculo) assumindo o volante numa hora em que a verdade também precisava aparecer. No fundo, mora ali um “se eu falar, posso ser mal vista” — que quase nunca é tão verdade quanto parece na hora.',
      note: 'Seu ponto de virada está no Diz: você já vê o ponto, só segura na hora de falar. Diz curto, antes do momento passar.',
      deXparaY: [
        {
          from: 'não falar na reunião e remoer',
          to: '“deixa eu colocar uma coisa rapidinho aqui…” e fala.',
        },
        {
          from: 'dar seu jeito sozinha',
          to: '“ó, ficou pendente aquilo que a gente combinou — consegue fechar?”',
        },
      ],
    },
    // P3 — Nível 2, Deslize de excesso
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações você se posiciona com equilíbrio — mas em uma delas tendeu ao excesso: falou sem filtro, cobrou quente ou se impôs mais do que o momento pedia. O padrão funcional é o seu chão; o excesso aparece num ponto específico, em geral quando você sente a verdade ou o resultado em jogo.',
      possiveisMotivos:
        'É provável que ali tenha pesado querer ser sincera de verdade ou resolver logo — com algo como “se eu não falar firme, passam por cima de mim” passando pela cabeça. A intenção é boa (honestidade, agilidade); o custo é que o jeito ofusca o ponto e a relação leva um arranhão à toa. No fundo, mora um “preciso de força pra ser levada a sério” — quando, ali, a calma já bastaria.',
      note: 'Seu ponto de virada está na Pausa (o segundo antes de disparar) e no Sustenta — posicionar uma vez já basta, não precisa vencer.',
      deXparaY: [
        {
          from: 'cobrar quente',
          to: 'espera baixar: “ei, ficou pendente aquilo que a gente combinou — consegue fechar até amanhã?”',
        },
        {
          from: 'falar sem filtro',
          to: 'fala sobre o fato, não sobre a pessoa: “isso aqui tá me preocupando por causa de X.”',
        },
      ],
    },
    // P4 — Nível 1, Recuo dominante
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu a recuar: não falou na hora, aceitou o que não cabia, deixou pra lá pra não criar problema. Houve um momento em que você se posicionou — então a capacidade existe. O padrão hoje, porém, é o de engolir mais do que dizer.',
      possiveisMotivos:
        'É provável que o que mais pese em você seja não estremecer a relação ou não passar uma imagem difícil — e que, na hora, venha forte o “melhor não falar pra não desagradar”. Repara com honestidade: o que parece cuidado com o outro é, muitas vezes, proteção contra o desconforto de se expor. No fundo, um “minha voz vai incomodar” — e você some pra não arriscar. O custo chega depois: sobrecarga, ressentimento, a sensação de ser passada pra trás. O que você economiza em atrito agora, paga com juros.',
      note: 'Comece pequeno no Diz: uma frase, uma vez, numa situação. O músculo de falar se constrói assim — e o Alvo te lembra que você está mirando um resultado, não arriscando a relação.',
      deXparaY: [
        {
          from: 'aceitar calada o que não cabe',
          to: '“consigo fazer isso aqui, mas o resto não vou dar conta no prazo — o que você prefere que saia primeiro?”',
        },
        {
          from: 'remoer calada',
          to: '“deixa eu colocar uma coisa rapidinho…” e fala.',
        },
      ],
    },
    // P5 — Nível 1, Excesso dominante
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu ao excesso: falou na hora sem rodeio, cobrou quente, se impôs pra não passarem por cima. Houve um momento em que você dosou — então o equilíbrio é possível. O padrão hoje, porém, é o de atropelar mais do que conduzir.',
      possiveisMotivos:
        'É provável que o que mais pese em você seja a verdade ou o resultado — dizer o que pensa custe o que custar, resolver logo — e que venha forte o “se eu não falar firme, passam por cima de mim”. A intenção é legítima: não ser apagada. Mas no fundo mora um “minha voz, sozinha, não basta — preciso de volume”. O custo: você ganha discussões e perde relações; te acham difícil; e o seu ponto, que muitas vezes é certo, se perde no jeito.',
      note: 'Sua virada está na Pausa (o automático em você é disparar — um segundo antes muda tudo) e no Sustenta (uma vez basta).',
      deXparaY: [
        {
          from: '“ser sincera mesmo que soe dura”',
          to: 'fala claro e curto; clareza não precisa de peso.',
        },
        {
          from: 'se impor pra não passarem por cima',
          to: 'diz uma vez e para: “eu penso diferente, e é por isso: ___.”',
        },
      ],
    },
    // P6 — Nível 1, Oscilante
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas se dividiram entre os dois lados: em algumas situações você recuou, em outras foi ao excesso. Não é meio-termo — é instabilidade: o lado pra onde você vai depende do dia e do contexto, e isso costuma ser mais difícil de prever do que um padrão consistente.',
      possiveisMotivos:
        'É provável que dois motores convivam: às vezes pesa mais não estremecer a relação (e você recua), às vezes pesa mais a verdade ou o resultado (e você atropela). Os dois pensamentos passam — o “melhor não falar” e o “se eu não for firme, passam por cima” — e qual vence parece quase sorteio. No fundo, os dois defendem a mesma coisa: a dúvida se a sua voz basta. A virada aqui é menos escolher um lado e mais ganhar previsibilidade.',
      note: 'A Pausa é o seu ponto-chave: é nela que você escolhe, em vez de ser levada ora pra um lado, ora pro outro.',
      deXparaY: [
        {
          from: 'alternar entre engolir e explodir',
          to: 'na Pausa, “qual é o meu único ponto aqui?” — e fala só ele, curto.',
        },
        {
          from: 'só perceber depois',
          to: 'anota no fim do dia: “recuei ou me excedi?”',
        },
      ],
    },
    // P7 — Nível 0, Recuo dominante
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu a recuar: não falou na hora, aceitou o que não cabia, evitou cobrar pra não parecer drama. Hoje o seu padrão de comunicação é, de forma consistente, o de se guardar. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que pese muito forte manter a relação boa e não passar uma imagem difícil — com o “melhor não falar pra não desagradar” quase automático. Olha com honestidade: o que parece cuidado com o outro é, no fundo, proteção contra o desconforto de se expor. Embaixo mora um “minha voz não basta — melhor sumir”. E o preço é alto: você desaparece das próprias conversas, e a conta chega em cansaço e ressentimento.',
      note: 'Não tente mudar tudo. Foque no Diz, no menor tamanho: uma frase, uma vez, numa situação. O músculo de falar se constrói assim.',
      deXparaY: [
        {
          from: 'dar seu jeito sozinha porque cobrar parece drama',
          to: '“ó, ficou pendente aquilo que a gente combinou — consegue fechar?”',
        },
        {
          from: 'aceitar calada',
          to: '“consigo isso aqui, mas o resto não vou dar conta no prazo — o que prefere que saia primeiro?”',
        },
      ],
    },
    // P8 — Nível 0, Excesso dominante
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu ao excesso: falou sem filtro, cobrou na hora sem muito freio, se impôs pra deixar claro logo. Hoje o seu padrão de comunicação é, de forma consistente, o de avançar com força. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que pesem forte a verdade e o resultado — dizer o que pensa custe o que custar, resolver e seguir — com o “se eu não for firme, passam por cima de mim” quase automático. A intenção raramente é ferir; é não ser apagada. Mas vale a honestidade: a firmeza que te protege também afasta os outros. No fundo mora um “minha voz, sozinha, não basta — preciso de volume pra existir” — e é justamente isso que faz o seu ponto, mesmo certo, deixar de ser ouvido.',
      note: 'Sua virada inteira mora na Pausa: o segundo que você não dá hoje. Comece por ela — um respiro antes de responder, numa situação por dia.',
      deXparaY: [
        {
          from: 'cobrar quente',
          to: 'espera baixar: “ei, ficou pendente aquilo que a gente combinou — consegue fechar até amanhã?”',
        },
        {
          from: 'falar sobre a pessoa',
          to: 'fala sobre o fato: “isso aqui tá me preocupando por causa de X.”',
        },
      ],
    },
    // P9 — Nível 0, Oscilante
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações você foi pros dois extremos: ora recuou e engoliu, ora foi ao excesso e atropelou — sem encontrar o eixo. Não é meio-termo; é instabilidade, e ela costuma cansar mais do que um padrão de um lado só, porque nem você sabe de antemão como vai reagir.',
      possiveisMotivos:
        'É provável que dois valores fortes disputem o volante: o de manter a relação (que te faz recuar) e o de dizer a verdade ou resolver (que te faz atropelar). Os dois pensamentos convivem, e qual vence depende do dia, da pessoa, do humor. Mas embaixo dos dois está a mesma ferida: a dúvida se a sua voz basta — às vezes você resolve sumindo, às vezes gritando. A virada não é escolher um lado bom; é construir o terceiro jeito, que não depende de qual gatilho disparou primeiro.',
      note: 'A Pausa é tudo pra você: o único ponto onde dá pra interromper o sorteio e escolher de propósito. Treine ela primeiro, sozinha, antes do resto.',
      deXparaY: [
        {
          from: 'ser levada ora pra um lado ora pro outro',
          to: 'na Pausa, “qual é o meu único ponto aqui?” — e diz só ele, curto.',
        },
        {
          from: 'só perceber o lado depois',
          to: 'anota diariamente “recuei ou me excedi?” até o padrão ficar visível.',
        },
      ],
    },
  },
  maturidade_emocional: {},
  foco_resultado_produtividade: {},
  visao_sistemica: {},
  direcao_futuro: {},
  protagonismo_profissional: {},
}
