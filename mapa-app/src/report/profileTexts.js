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

// Metadados por competência (não dependem do perfil): título, subtítulo e o
// "caminho" (protocolo + passos). Os passos detalhados existem só onde foram fornecidos.
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
    protocol: 'PERCEBE · NOMEIA · SEPARA · ESCOLHE',
    steps: [],
  },
  foco_resultado_produtividade: {
    title: 'Foco em Resultado e Produtividade',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: 'PARA · ELEGE · FAZ · FECHA',
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
// ondeVoceEsta, possiveisMotivos, note (virada do caminho), deXparaY.
// Em deXparaY, item sem `from` é uma dica direta (sem "Em vez de … →").
export const profileTexts = {
  comunicacao_assertiva: {
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
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações você se posiciona com clareza — mas em uma delas tendeu a recuar: engoliu, deixou pra depois ou deu seu jeito por conta própria pra não criar atrito. O padrão funcional é o seu chão; o recuo aparece num ponto específico, em geral onde a relação pesa mais.',
      possiveisMotivos:
        'É provável que ali tenha pesado o medo de estremecer a relação ou de parecer difícil — com algo como “melhor não falar agora pra não criar climão” passando pela cabeça. Não é fraqueza: é um valor bom (cuidar do vínculo) assumindo o volante numa hora em que a verdade também precisava aparecer. No fundo, mora ali um “se eu falar, posso ser mal visto(a)” — que quase nunca é tão verdade quanto parece na hora.',
      note: 'Seu ponto de virada está no DIZ: você já vê o ponto, só segura na hora de falar. Diz curto, antes do momento passar.',
      deXparaY: [
        {
          from: 'não falar na reunião e remoer',
          to: '“deixa eu colocar uma coisa rapidinho aqui…” e fala.',
        },
        {
          from: 'dar seu jeito por conta própria',
          to: '“ó, ficou pendente aquilo que a gente combinou — consegue fechar?”',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações você se posiciona com equilíbrio — mas em uma delas tendeu ao excesso: falou sem filtro, cobrou quente ou se impôs mais do que o momento pedia. O padrão funcional é o seu chão; o excesso aparece num ponto específico, em geral quando você sente a verdade ou o resultado em jogo.',
      possiveisMotivos:
        'É provável que ali tenha pesado querer ser sincero(a) de verdade ou resolver logo — com algo como “se eu não falar firme, passam por cima de mim” passando pela cabeça. A intenção é boa (honestidade, agilidade); o custo é que o jeito ofusca o ponto e a relação leva um arranhão à toa. No fundo, mora um “preciso de força pra ser levado(a) a sério” — quando, ali, a calma já bastaria.',
      note: 'Seu ponto de virada está na PAUSA (o segundo antes de disparar) e no SUSTENTA — posicionar uma vez já basta, não precisa vencer.',
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
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu a recuar: não falou na hora, aceitou o que não cabia, deixou pra lá pra não criar problema. Houve um momento em que você se posicionou — então a capacidade existe. O padrão hoje, porém, é o de engolir mais do que dizer.',
      possiveisMotivos:
        'É provável que o que mais pese em você seja não estremecer a relação ou não passar uma imagem difícil — e que, na hora, venha forte o “melhor não falar pra não desagradar”. Repara com honestidade: o que parece cuidado com o outro é, muitas vezes, proteção contra o desconforto de se expor. No fundo, um “minha voz vai incomodar” — e você some pra não arriscar. O custo chega depois: sobrecarga, ressentimento, a sensação de ser passado(a) pra trás. O que você economiza em atrito agora, paga com juros.',
      note: 'Comece pequeno no DIZ: uma frase, uma vez, numa situação. O músculo de falar se constrói assim — e o ALVO te lembra que você está mirando um resultado, não arriscando a relação.',
      deXparaY: [
        {
          from: 'aceitar calado(a) o que não cabe',
          to: '“consigo fazer isso aqui, mas o resto não vou dar conta no prazo — o que você prefere que saia primeiro?”',
        },
        {
          from: 'remoer em silêncio',
          to: '“deixa eu colocar uma coisa rapidinho…” e fala.',
        },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu ao excesso: falou na hora sem rodeio, cobrou quente, se impôs pra não passarem por cima. Houve um momento em que você dosou — então o equilíbrio é possível. O padrão hoje, porém, é o de atropelar mais do que conduzir.',
      possiveisMotivos:
        'É provável que o que mais pese em você seja a verdade ou o resultado — dizer o que pensa custe o que custar, resolver logo — e que venha forte o “se eu não falar firme, passam por cima de mim”. A intenção é legítima: não ser apagado(a). Mas no fundo mora um “minha voz, sozinha, não basta — preciso de volume”. O custo: você ganha discussões e perde relações; te acham difícil; e o seu ponto, que muitas vezes é certo, se perde no jeito.',
      note: 'Sua virada está na PAUSA (o automático em você é disparar — um segundo antes muda tudo) e no SUSTENTA (uma vez basta).',
      deXparaY: [
        {
          from: '“ser sincero(a) mesmo que soe duro(a)”',
          to: 'fala claro e curto; clareza não precisa de peso.',
        },
        {
          from: 'se impor pra não passarem por cima',
          to: 'diz uma vez e para: “eu penso diferente, e é por isso: ___.”',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas se dividiram entre os dois lados: em algumas situações você recuou, em outras foi ao excesso. Não é meio-termo — é instabilidade: o lado pra onde você vai depende do dia e do contexto, e isso costuma ser mais difícil de prever do que um padrão consistente.',
      possiveisMotivos:
        'É provável que dois motores convivam: às vezes pesa mais não estremecer a relação (e você recua), às vezes pesa mais a verdade ou o resultado (e você atropela). Os dois pensamentos passam — o “melhor não falar” e o “se eu não for firme, passam por cima” — e qual vence parece quase sorteio. No fundo, os dois defendem a mesma coisa: a dúvida se a sua voz basta. A virada aqui é menos escolher um lado e mais ganhar previsibilidade.',
      note: 'A PAUSA é o seu ponto-chave: é nela que você escolhe, em vez de ser levado(a) ora pra um lado, ora pro outro.',
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
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu a recuar: não falou na hora, aceitou o que não cabia, evitou cobrar pra não parecer drama. Hoje o seu padrão de comunicação é, de forma consistente, o de se guardar. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que pese muito forte manter a relação boa e não passar uma imagem difícil — com o “melhor não falar pra não desagradar” quase automático. Olha com honestidade: o que parece cuidado com o outro é, no fundo, proteção contra o desconforto de se expor. Embaixo mora um “minha voz não basta — melhor sumir”. E o preço é alto: você desaparece das próprias conversas, e a conta chega em cansaço e ressentimento.',
      note: 'Não tente mudar tudo. Foque no DIZ, no menor tamanho: uma frase, uma vez, numa situação. O músculo de falar se constrói assim.',
      deXparaY: [
        {
          from: 'dar seu jeito por conta própria porque cobrar parece drama',
          to: '“ó, ficou pendente aquilo que a gente combinou — consegue fechar?”',
        },
        {
          from: 'aceitar calado(a)',
          to: '“consigo isso aqui, mas o resto não vou dar conta no prazo — o que prefere que saia primeiro?”',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu ao excesso: falou sem filtro, cobrou na hora sem muito freio, se impôs pra deixar claro logo. Hoje o seu padrão de comunicação é, de forma consistente, o de avançar com força. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que pesem forte a verdade e o resultado — dizer o que pensa custe o que custar, resolver e seguir — com o “se eu não for firme, passam por cima de mim” quase automático. A intenção raramente é ferir; é não ser apagado(a). Mas vale a honestidade: a firmeza que te protege também afasta os outros. No fundo mora um “minha voz, sozinha, não basta — preciso de volume pra existir” — e é justamente isso que faz o seu ponto, mesmo certo, deixar de ser ouvido.',
      note: 'Sua virada inteira mora na PAUSA: o segundo que você não dá hoje. Comece por ela — um respiro antes de responder, numa situação por dia.',
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
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações você foi pros dois extremos: ora recuou e engoliu, ora foi ao excesso e atropelou — sem encontrar o eixo. Não é meio-termo; é instabilidade, e ela costuma cansar mais do que um padrão de um lado só, porque nem você sabe de antemão como vai reagir.',
      possiveisMotivos:
        'É provável que dois valores fortes disputem o volante: o de manter a relação (que faz recuar) e o de dizer a verdade ou resolver (que faz atropelar). Os dois pensamentos convivem, e qual vence depende do dia, da pessoa, do humor. Mas embaixo dos dois está a mesma ferida: a dúvida se a sua voz basta — às vezes resolve sumindo, às vezes gritando. A virada não é escolher um lado bom; é construir o terceiro jeito, que não depende de qual gatilho disparou primeiro.',
      note: 'A PAUSA é tudo pra você: o único ponto onde dá pra interromper o sorteio e escolher de propósito. Treine primeiro, antes do resto.',
      deXparaY: [
        {
          from: 'ser levado(a) ora pra um lado ora pro outro',
          to: 'na Pausa, “qual é o meu único ponto aqui?” — e diz só ele, curto.',
        },
        {
          from: 'só perceber o lado depois',
          to: 'anota diariamente “recuei ou me excedi?” até o padrão ficar visível.',
        },
      ],
    },
  },

  maturidade_emocional: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações, você demonstra um padrão de reconhecer a emoção, regular a reação e responder de forma proporcional. Recebe crítica sem se desmontar nem reagir no impulso, lida com frustração sem travar, e processa o que incomoda sem empurrar pra debaixo do tapete. Esse é o seu ponto forte, e aparece de forma consistente.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir de “eu posso sentir sem perder o governo” — você não precisa esconder nem despejar. O ponto de atenção: sob pressão muito forte, todo mundo tem um lado pra onde escorrega. Vale saber se você tende a recalcar (engolir e pagar depois) ou a reagir (disparar e se arrepender).',
      note: 'Use de propósito nas situações mais pesadas.',
      deXparaY: [
        {
          from: 'só manter o próprio governo',
          to: 'nomeie com leveza quando perceber alguém ao lado recalcando ou reagindo: “o que está acontecendo aqui, de verdade?”',
        },
        {
          from: 'assumir que a pressão nunca te pega',
          to: 'escolha uma situação-limite por mês pra testar onde o seu governo falha.',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações você mantém o governo — mas em uma delas a emoção tomou conta: travou, reagiu maior do que a situação pedia, ou perdeu a clareza. O padrão funcional é o seu chão; o deslize aparece onde a pressão ou a crítica pesa mais.',
      possiveisMotivos:
        'É provável que ali a emoção tenha chegado forte demais e o automático venceu — com algo como “não consigo evitar, a emoção vem e eu perco o controle”. Embaixo mora um medo de não dar conta do que sente. Não é fraqueza — é um ponto onde o governo precisa de reforço.',
      note: 'Seu ponto de virada está no NOMEIA: quando a emoção chega forte, dê nome antes de reagir. Nomear desativa o automático.',
      deXparaY: [
        { from: 'explodir na hora', to: '“preciso de um minuto antes de responder isso.”' },
        {
          from: 'levar pro pessoal',
          to: 'separa: “o que ele disse de fato? e o que eu estou lendo?”',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações você mantém o governo — mas em uma delas blindou: racionalizou, não demonstrou, endureceu ou apareceu afetado(a) depois em forma de cansaço ou irritação. O padrão funcional é o seu chão; a blindagem aparece onde mostrar emoção parece arriscado.',
      possiveisMotivos:
        'É provável que ali tenha pesado o medo de parecer fraco(a) ou perder o controle — com algo como “não posso deixar transparecer” na cabeça. A intenção é legítima (manter a postura); o custo é que a conexão se perde e ninguém sabe o que está acontecendo com você. No fundo, mora um “se eu sentir, vou parecer vulnerável” — e endurecer parece mais seguro.',
      note: 'Seu ponto de virada está no PERCEBE: antes de blindar, reconheça pra si que algo te afetou. Governo interno não é blindagem.',
      deXparaY: [
        { from: 'responder no impulso', to: 'perceba a emoção e nomeie antes de abrir a boca.' },
        {
          from: 'blindar e seguir como se nada tivesse acontecido',
          to: 'reconheça: “eu senti, e isso é informação, não fraqueza.”',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu a recalcar: engoliu, seguiu como se nada tivesse acontecido, ficou remoendo por dentro. Houve um momento em que regulou — então a capacidade existe. O padrão hoje é o de empurrar a emoção pra debaixo do tapete.',
      possiveisMotivos:
        'É provável que pese forte o medo de parecer frágil ou de perder o controle — com o “melhor nem mexer, é só seguir que passa” quase automático. O que parece força é na verdade defesa: você se protege do desconforto de sentir. O custo chega depois em cansaço, irritabilidade, explosões fora de hora ou distanciamento.',
      note: 'Comece só pelo PERCEBE e NOMEIA: “alguma coisa mexeu comigo. O que é?” Não precisa fazer nada com isso ainda — só reconhecer já muda.',
      deXparaY: [
        {
          from: 'concordar e remoer',
          to: 'diga: “isso me pegou, preciso de um tempo pra processar.”',
        },
        { from: 'travar diante de crítica', to: 'separe fato de interpretação.' },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu à falsa força: reagiu no impulso, cobrou quente, puxou tudo pra si, ou blindou endurecendo. Houve um momento em que dosou — então o equilíbrio é possível. O padrão hoje é o de despejar ou congelar.',
      possiveisMotivos:
        'É provável que pese forte não querer parecer fraco(a) ou perder o controle — com o “não posso deixar transparecer” quase automático. A intenção é legítima, mas no fundo mora um “minhas emoções são perigosas — preciso controlá-las ou elas me controlam.” O custo: você reage desproporcional ou endurece, e o ambiente ao redor se fecha.',
      note: 'Sua virada mora no PERCEBE: um segundo antes de reagir ou blindar. Perceber é o que transforma reação em resposta.',
      deXparaY: [
        { from: 'cobrar quente', to: 'perceba a emoção e nomeie: “isso é raiva? frustração?”' },
        {
          from: 'tratar emoção como fraqueza',
          to: 'reconheça: “eu senti, e isso não me faz mais fraco(a).”',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas se dividiram: em algumas situações você recalcou (engoliu, remoeu), em outras reagiu ou endureceu. Não é equilíbrio — é instabilidade: o lado pra onde você vai depende do dia, da pessoa, do gatilho.',
      possiveisMotivos:
        'É provável que dois motores convivam: às vezes pesa mais não parecer frágil (e você blinda), às vezes a emoção transborda antes de perceber (e você reage). No fundo, os dois partem do mesmo lugar: a crença de que a emoção é perigosa. A virada é menos escolher um lado e mais ganhar constância.',
      note: 'O PERCEBE é o seu ponto-chave: é onde você interrompe o sorteio.',
      deXparaY: [
        { from: 'ora engolir ora explodir', to: 'antes de qualquer coisa, perceba e nomeie.' },
        { to: 'No fim do dia: recalquei ou reagi? Anote.' },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu a recalcar: engoliu, ficou remoendo, seguiu como se nada tivesse acontecido enquanto por dentro martelava. Hoje o seu padrão é, de forma consistente, o de empurrar a emoção pra baixo. Isso não diz quem você é — diz o que tem se repetido.',
      possiveisMotivos:
        'É bem provável que pese forte o “melhor nem mexer, é só seguir que passa” — quase automático. Olha com honestidade: o que parece maturidade é, no fundo, esquiva. Você não está regulando — está escondendo. E a conta chega: cansaço crônico, irritabilidade sem motivo aparente, distanciamento, explosões fora de contexto.',
      note: 'Não tente mudar tudo. Comece só pelo PERCEBE: “alguma coisa mexeu comigo agora.” Dar-se o direito de perceber é o primeiro passo.',
      deXparaY: [
        {
          from: 'seguir normal por fora',
          to: 'diga pra si: “isso me incomodou, e tudo bem.”',
        },
        {
          from: 'engolir até explodir',
          to: 'diga na hora, curto: “preciso de um tempo pra processar.”',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu à falsa força: reagiu no impulso, cobrou quente, endureceu, ou blindou como se nada tivesse tocado. Hoje o seu padrão é, de forma consistente, o de disparar ou congelar. Isso não diz quem você é — diz o que tem se repetido.',
      possiveisMotivos:
        'É bem provável que pese forte o “não posso transparecer” — quase automático. A intenção raramente é ferir; é não ser visto(a) como fraco(a). Mas no fundo mora um “minhas emoções são perigosas — se eu abrir, perco o controle.” O custo: o ambiente se retrai ao seu redor, e ninguém fala de verdade — porque tem medo da reação.',
      note: 'Sua virada inteira mora no PERCEBE: o segundo antes de reagir. Comece por ele.',
      deXparaY: [
        { from: 'responder no impulso', to: 'perceba a emoção e nomeie antes de falar.' },
        {
          from: 'blindar e seguir como se nada tivesse acontecido',
          to: 'reconheça: “eu senti, e isso é informação, não fraqueza.”',
        },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações você foi pros dois extremos: ora recalcou, ora reagiu ou endureceu — sem encontrar o eixo. Não é equilíbrio; é instabilidade, e ela cansa mais do que um padrão de um lado só.',
      possiveisMotivos:
        'É provável que a mesma ferida alimente os dois lados: “minhas emoções são perigosas.” Às vezes resolve escondendo, às vezes despejando, às vezes congelando. A virada não é escolher um lado — é construir governo interno que não dependa do gatilho.',
      note: 'O PERCEBE é tudo: o único ponto onde dá pra interromper o sorteio.',
      deXparaY: [
        {
          from: 'ser levado(a) ora pra um lado ora pro outro',
          to: 'antes de tudo: perceba e nomeie.',
        },
        { to: 'No fim do dia: recalquei ou reagi? Anote até o padrão ficar visível.' },
      ],
    },
  },

  foco_resultado_produtividade: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações, você demonstra um padrão de priorizar, executar e fechar ciclo. Sabe o que importa, começa por aí, sustenta cadência sem depender de cobrança, e conclui. Esse é o seu ponto forte, e aparece de forma consistente.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir de “meu esforço basta quando está na direção certa” — você não precisa fazer tudo nem provar nada. O ponto de atenção: sob muita pressão, o automático pode ser acelerar (atropelar) ou dispersar (adiar).',
      note: 'Use de propósito nas semanas mais cheias.',
      deXparaY: [
        { from: 'só cuidar do seu foco', to: 'ajude alguém ao lado a priorizar.' },
        {
          from: 'assumir que sempre vai ser assim',
          to: 'teste: qual é a entrega mais difícil de fechar esse mês?',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações você prioriza e executa bem — mas em uma delas tendeu a adiar: empurrou o importante, fez o periférico primeiro, ou deixou a cobrança ser o motor. O funcional é o seu chão; o adiamento aparece onde a tarefa é menos clara ou menos urgente.',
      possiveisMotivos:
        'É provável que ali tenha pesado a falta de urgência externa ou a dificuldade de escolher (“e se eu priorizar errado?”). No fundo, mora um “depois eu resolvo, ainda dá tempo” — que quase sempre custa mais caro.',
      note: 'Seu ponto de virada está no ELEGE: transformar “depois” em “agora, isso.”',
      deXparaY: [
        {
          from: 'empurrar porque ninguém cobrou',
          to: 'marque uma data como se alguém fosse cobrar.',
        },
        { from: 'fazer o periférico primeiro', to: 'inverta: o importante abre o dia.' },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações você prioriza e executa bem — mas em uma delas tendeu ao atropelo: abraçou demais, acelerou, ou sacrificou processo pra entregar rápido. O funcional é o seu chão; o atropelo aparece quando a pressão aperta.',
      possiveisMotivos:
        'É provável que ali tenha pesado querer dar conta de tudo ou não parecer lento(a) — com algo como “eu preciso dar conta, se sobrar é falha” na cabeça. O custo: entregou rápido mas criou problema no caminho.',
      note: 'Seu ponto de virada está no PARA: o segundo antes de abraçar tudo.',
      deXparaY: [
        { from: 'abraçar tudo', to: '“o que aqui realmente move o resultado?”' },
        {
          from: 'ficar até mais tarde',
          to: 'feche quando o importante estiver feito, não quando a lista estiver vazia.',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu a adiar: fez o periférico, empurrou o importante, confundiu ocupação com produção. Houve um momento em que priorizou — então a capacidade existe. O padrão hoje é o de dispersar.',
      possiveisMotivos:
        'É provável que pese forte o “depois eu resolvo, ainda dá tempo” — quase automático. O que parece “estar fazendo bastante coisa” é, muitas vezes, ocupação sem direção. O custo: pontas soltas, prazos perdidos, frustração de trabalhar muito e avançar pouco.',
      note: 'Comece pequeno no ELEGE: uma coisa, uma vez, todo dia. O foco se constrói no hábito, não no esforço.',
      deXparaY: [
        {
          from: 'ir fazendo o que grita',
          to: '“qual é a coisa mais importante de hoje? Começo por ela.”',
        },
        { from: 'continuar do mesmo jeito', to: 'inverta a ordem amanhã.' },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações você tendeu ao atropelo: abraçou tudo, acelerou, tratou tudo como urgência, cobrou desproporcional. Houve um momento em que dosou — então o equilíbrio é possível. O padrão hoje é o de forçar.',
      possiveisMotivos:
        'É provável que pese forte o “eu preciso dar conta de tudo — se sobrar, é falha minha” — quase automático. A intenção é legítima: não deixar cair. Mas no fundo mora um “meu esforço não basta — preciso fazer mais.” O custo: entrega no curto prazo destruindo processo, qualidade e relações.',
      note: 'Sua virada mora no PARA: o segundo antes de abraçar mais uma coisa.',
      deXparaY: [
        {
          from: '“se eu não fizer, ninguém faz”',
          to: 'delegue ou adie o que não é a prioridade eleita.',
        },
        { from: 'tratar tudo como urgência', to: '“isso é urgente ou só apareceu agora?”' },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas se dividiram: em algumas situações você adiou, em outras atropelou. Não é equilíbrio — é instabilidade: ora dispersa, ora acelera, e o resultado fica refém do dia.',
      possiveisMotivos:
        'É provável que dois motores convivam: às vezes pesa mais o conforto de não escolher (e você adia), às vezes pesa mais o medo de não dar conta (e você atropela). No fundo, os dois partem do mesmo lugar: a dúvida se o seu esforço basta. A virada é menos fazer mais ou menos e mais fazer o certo.',
      note: 'O PARA é o seu ponto-chave: antes de dispersar ou acelerar, para e elege.',
      deXparaY: [
        { from: 'ora dispersar ora atropelar', to: 'PARA e ELEGE todo dia.' },
        { to: 'No fim do dia: adiei ou atropelei? Anote.' },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu a adiar: fez o periférico, empurrou o importante, dependeu de cobrança pra avançar. Hoje o seu padrão é, de forma consistente, o de dispersar. Isso não diz quem você é — diz o que tem se repetido.',
      possiveisMotivos:
        'É bem provável que pese forte o “depois eu resolvo, ainda dá tempo” — quase automático. Olha com honestidade: estar ocupado(a) não é estar produzindo. O esforço existe — a direção não. E o custo é alto: pontas soltas acumulam, e a frustração de “trabalho muito e avanço pouco” corrói a confiança.',
      note: 'Não tente mudar tudo. Comece pelo ELEGE: “qual é a coisa mais importante de hoje?” Uma coisa. Comece por ela.',
      deXparaY: [
        { from: 'fazer o que grita', to: 'inverta: o importante abre o dia.' },
        { from: 'empurrar', to: 'marque uma data pra si.' },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações você tendeu ao atropelo: abraçou tudo, acelerou, tratou tudo como urgência. Hoje o seu padrão é, de forma consistente, o de forçar. Isso não diz quem você é — diz o que tem se repetido.',
      possiveisMotivos:
        'É bem provável que pese forte o “preciso dar conta de tudo” — quase automático. A intenção raramente é causar problema; é provar que dá conta. Mas no fundo mora um “meu esforço não basta — preciso de volume pra valer.” O custo: o curto prazo sempre ganha do médio, a qualidade cai, e quem está ao redor sente o peso.',
      note: 'Sua virada inteira mora no PARA: parar de fazer pra pensar se o que está fazendo importa. Comece por ele.',
      deXparaY: [
        { from: 'tratar tudo como urgência', to: '“isso é urgente ou só apareceu agora?”' },
        { from: 'ficar até mais tarde', to: 'feche o dia quando o importante estiver feito.' },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações você foi pros dois extremos: ora adiou e dispersou, ora atropelou e forçou — sem encontrar a direção. Não é equilíbrio; é instabilidade.',
      possiveisMotivos:
        'É provável que a mesma ferida alimente os dois lados: “meu esforço não basta.” Às vezes resolve dispersando (faz muita coisa pra sentir que está fazendo algo), às vezes acelerando (faz tudo de uma vez pra provar que dá conta). A virada não é fazer mais ou menos — é fazer o certo.',
      note: 'O PARA é tudo: o ponto onde você interrompe o sorteio e escolhe de propósito.',
      deXparaY: [
        {
          from: 'ser levado(a)',
          to: 'PARA e ELEGE todo dia: a única coisa mais importante.',
        },
        { to: 'No fim do dia: adiei ou atropelei? Anote até o padrão ficar visível.' },
      ],
    },
  },

  visao_sistemica: {},
  direcao_futuro: {},
  protagonismo_profissional: {},
}
