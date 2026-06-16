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
// ondeVoceEsta, possiveisMotivos, note (virada do caminho), naPratica.
// Em naPratica, cada item tem `when` (gatilho "Quando…") e `text` (a instrução).
export const profileTexts = {
  comunicacao_assertiva: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações do mapa, você costuma se posicionar com clareza: diz o que precisa, cobra o que é seu e expressa o que pensa — sem se omitir e sem se exaltar. Demonstra um padrão de transitar bem entre cuidar da relação e dizer a verdade: fala o que precisa ser dito sem criar desconforto desnecessário e sem precisar vencer ninguém. Esse é o seu ponto forte, e aparece na maior parte do tempo.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir da crença de que o conteúdo da sua fala é suficiente — você não precisa se omitir nem se exaltar pra ser ouvido(a). O ponto de atenção: sob muita pressão, todo mundo tem um lado pra onde escorrega. Vale identificar qual é o seu, pra reconhecer cedo: você tende mais a se calar (pra proteger a relação) ou a endurecer (pra garantir o ponto)?',
      note: 'Mantenha o protocolo afiado. Já é quase automático em você — o valor agora é usá-lo de propósito nas conversas mais difíceis, não só nas que fluem fácil.',
      naPratica: [
        {
          when: 'Quando perceber alguém ao seu lado se omitindo ou se exaltando numa conversa:',
          text: 'em vez de só cuidar da sua própria fala, nomeie com leveza o que está acontecendo — algo como “percebo que essa conversa tá esquentando” ou “parece que esse tema tá difícil de trazer”.',
        },
        {
          when: 'Quando uma conversa difícil aparecer no horizonte:',
          text: 'em vez de esperar a situação amadurecer sozinha, escolha uma conversa por mês pra testar o seu limite — uma onde você precise se posicionar mesmo sabendo que vai gerar atrito.',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você se posiciona com clareza — mas em uma delas tendeu ao recuo: engoliu o que sentia, deixou pra depois, ou deu seu jeito por conta própria pra evitar o atrito. O padrão funcional é o seu chão; o recuo aparece num ponto específico, geralmente onde o vínculo com a outra pessoa pesa mais.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o medo de gerar desconforto na relação ou de ser visto(a) como alguém difícil — com algo como “se eu falar agora, vou criar um clima ruim” passando pela cabeça. Não é fraqueza: é um valor importante (cuidar da relação) assumindo o volante numa hora em que a verdade também precisava aparecer. Por trás desse sentimento, pode morar uma crença de que se você se posicionar, vai ser mal visto(a) — o que quase nunca é tão verdade quanto parece no momento.',
      note: 'Seu ponto de virada está no DIZ: você já enxerga o que precisa ser dito — só segura na hora de falar. Diga curto, antes do momento passar.',
      naPratica: [
        {
          when: 'Quando você quer trazer um ponto numa reunião mas fica em silêncio e depois fica remoendo:',
          text: 'em vez de não falar e ficar pensando depois “eu deveria ter dito”, interrompa o fluxo com uma frase de entrada — algo como “deixa eu colocar uma coisa rapidamente aqui...” — e fale.',
        },
        {
          when: 'Quando algo combinado com alguém ficou pendente e você acaba assumindo no seu colo pra não ter que cobrar:',
          text: 'em vez de dar seu jeito por conta própria, faça a cobrança de forma simples e direta: “ei, ficou pendente aquilo que a gente combinou — você consegue fechar?”',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você se posiciona com equilíbrio — mas em uma delas tendeu ao excesso: falou sem pensar nas consequências, cobrou no calor da emoção, ou se impôs mais do que aquele momento pedia. O padrão funcional é o seu chão; o excesso aparece num ponto específico, geralmente quando você sente que a verdade ou o resultado estão em jogo.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o desejo de ser sincero(a) de verdade ou de resolver logo — com algo como “se eu não falar firme, vão passar por cima de mim” passando pela cabeça. A intenção é boa (honestidade, agilidade). O custo é que o tom usado fez o seu argumento, mesmo correto, deixar de ser ouvido — e a relação com a outra pessoa levou um arranhão sem necessidade. Por trás desse sentimento, pode morar uma crença de que você precisa de força pra ser levado(a) a sério — quando, ali, a calma já bastaria.',
      note: 'Seu ponto de virada está em dois passos: na PAUSA (o segundo antes de responder, que evita disparar no automático) e no SUSTENTA (posicionar uma vez já basta — você não precisa vencer a discussão).',
      naPratica: [
        {
          when: 'Quando algo combinado ficou pendente e você precisa cobrar:',
          text: 'em vez de cobrar no calor da emoção, espere as emoções se acalmarem e diga: “ei, ficou pendente aquilo que a gente combinou — consegue fechar até amanhã?”',
        },
        {
          when: 'Quando precisa apontar um problema numa entrega ou no comportamento de alguém:',
          text: 'em vez de falar sem pensar nas consequências e atacar a pessoa, fale sobre o fato — algo como “isso aqui tá me preocupando por causa de [diga o motivo concreto].” Sobre o que aconteceu, não sobre quem fez.',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você tendeu ao recuo: não falou na hora, aceitou o que não cabia, deixou pra lá pra não criar problema. Houve um momento em que você se posicionou — então a capacidade existe. O padrão hoje, porém, é o de engolir mais do que dizer.',
      possiveisMotivos:
        'É provável que, neste momento, o que pese mais para você seja não gerar desconforto na relação ou não passar uma imagem de pessoa difícil — e que, na hora, venha forte o pensamento “melhor não falar pra não desagradar.” Olhe com honestidade: o que parece cuidado com o outro é, muitas vezes, proteção contra o desconforto de se expor. Por trás desse sentimento, pode morar uma crença de que a sua voz vai incomodar — e você some pra não arriscar. O custo chega depois: sobrecarga, ressentimento, e a sensação de ser passado(a) pra trás. O que você economiza em atrito agora, paga com juros.',
      note: 'Comece pequeno no DIZ: uma frase, uma vez, numa situação. O músculo de falar se constrói assim — e o ALVO te ajuda a lembrar que você está mirando um resultado concreto, não arriscando a relação.',
      naPratica: [
        {
          when: 'Quando recebe uma demanda que você sabe que não vai dar conta no prazo, mas aceita em silêncio:',
          text: 'em vez de aceitar calado(a) e depois ficar sobrecarregado(a), faça uma escolha clara na hora: “consigo fazer isso aqui, mas o resto não vou dar conta no prazo — o que você prefere que seja entregue primeiro?”',
        },
        {
          when: 'Quando algo te incomoda numa conversa mas você não fala e fica remoendo depois:',
          text: 'em vez de remoer em silêncio, interrompa o fluxo na hora: “deixa eu colocar uma coisa rapidamente aqui...” — e fale. Mesmo curto, mesmo simples. O importante é não deixar passar.',
        },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você tendeu ao excesso: falou na hora sem suavizar, cobrou no calor da emoção, ou se impôs pra evitar que passassem por cima. Houve um momento em que você dosou — então o equilíbrio é possível. O padrão hoje, porém, é o de passar por cima mais do que conduzir a conversa.',
      possiveisMotivos:
        'É provável que, neste momento, pesem mais para você valores como a verdade ou o resultado — dizer o que pensa custe o que custar, resolver logo — e que venha forte o pensamento “se eu não falar firme, vão passar por cima de mim.” A intenção é legítima: não ser apagado(a). Por trás desse sentimento, pode morar uma crença de que a sua voz, sozinha, não basta — que você precisa de volume pra ser ouvido(a). O custo: você ganha discussões e perde relações; te acham difícil; e o seu ponto, que muitas vezes é certo, deixa de ser ouvido por causa do tom usado.',
      note: 'Sua virada está em dois passos: na PAUSA (o seu automático é disparar — um segundo antes muda tudo) e no SUSTENTA (dizer uma vez já basta — você não precisa repetir até vencer).',
      naPratica: [
        {
          when: 'Quando precisa dar uma resposta direta e o seu impulso é falar de um jeito duro:',
          text: 'em vez de achar que “ser sincero(a)” exige soar duro(a), fale com clareza e curto. Clareza não precisa de peso pra ser ouvida.',
        },
        {
          when: 'Quando alguém discorda de você e você sente que precisa repetir até convencer:',
          text: 'em vez de se impor pra ninguém passar por cima, diga uma vez e pare: “eu penso diferente, e é por isso: [diga o motivo concreto].” Posicionar uma vez é suficiente.',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas no mapa se dividiram entre os dois lados: em algumas situações você recuou, em outras foi ao excesso. Isso não é meio-termo — é instabilidade: o lado pra onde você vai depende do dia e do contexto. Esse tipo de padrão costuma ser mais difícil de prever, inclusive pra você, do que um padrão de um lado só.',
      possiveisMotivos:
        'É provável que dois motores convivam dentro de você: às vezes pesa mais não gerar desconforto na relação (e você recua), às vezes pesa mais defender a verdade ou o resultado (e você atropela). Os dois pensamentos passam — o “melhor não falar” e o “se eu não for firme, passam por cima” — e qual vence parece quase sorteio. Por trás de ambos, pode morar a mesma dúvida: a de que a sua voz é suficiente. A virada aqui é menos escolher um lado e mais ganhar previsibilidade no seu próprio padrão.',
      note: 'A PAUSA é o seu ponto-chave: é nela que você escolhe de propósito, em vez de ser levado(a) ora pra um lado, ora pro outro.',
      naPratica: [
        {
          when: 'Quando você se pega oscilando entre engolir e explodir na mesma semana:',
          text: 'em vez de alternar entre os dois lados, use a PAUSA pra se perguntar: “qual é o meu único ponto aqui?” — e diga só ele, curto. Uma frase resolve mais do que cinco emocionadas.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois que a situação passou:',
          text: 'em vez de só perceber depois, anote no fim do dia: “hoje eu recuei ou me excedi?” Em uma ou duas semanas, o padrão fica visível — e isso já te dá controle.',
        },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você tendeu ao recuo: não falou na hora, aceitou o que não cabia, evitou cobrar pra não parecer dramático(a). Hoje o seu padrão de comunicação é, na maior parte do tempo, o de se resguardar. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, o que pese mais para você seja manter uma boa relação e não passar uma imagem de pessoa difícil — com o pensamento “melhor não falar pra não desagradar” quase automático. Olhe com honestidade: o que parece cuidado com o outro é, no fundo, proteção contra o desconforto de se expor. Por trás desse sentimento, pode morar uma crença de que a sua voz sozinha não é suficiente — e a saída que você encontrou foi sumir. O preço é alto: você desaparece das próprias conversas, e a conta chega depois em cansaço e ressentimento.',
      note: 'Não tente mudar tudo de uma vez. Foque no DIZ, no menor tamanho possível: uma frase, uma vez, em uma situação. O músculo de falar se constrói assim.',
      naPratica: [
        {
          when: 'Quando algo combinado ficou pendente com alguém e você acaba fazendo no lugar pra não precisar cobrar:',
          text: 'em vez de dar seu jeito por conta própria porque cobrar parece dramático demais, faça a cobrança simples: “ei, ficou pendente aquilo que a gente combinou — você consegue fechar?”',
        },
        {
          when: 'Quando recebe mais demanda do que dá pra entregar e aceita em silêncio:',
          text: 'em vez de aceitar calado(a) e depois se sobrecarregar, diga na hora: “consigo isso aqui, mas o resto não vou dar conta no prazo — o que prefere que seja entregue primeiro?”',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você tendeu ao excesso: falou sem pensar nas consequências, cobrou na hora sem muito filtro, se impôs pra deixar claro logo o que pensava. Hoje o seu padrão de comunicação é, na maior parte do tempo, o de avançar com força. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pesem mais para você valores como a verdade e o resultado — dizer o que pensa custe o que custar, resolver e seguir — com o pensamento “se eu não for firme, passam por cima de mim” quase automático. A intenção raramente é ferir; é não ser apagado(a). Mas vale a honestidade: a firmeza que te protege também afasta os outros. Por trás desse sentimento, pode morar uma crença de que a sua voz, sozinha, não basta — que você precisa de volume pra existir nas conversas. E é justamente isso que faz o seu ponto, mesmo certo, deixar de ser ouvido.',
      note: 'Sua virada inteira mora na PAUSA: o segundo que você não dá hoje. Comece por ela — um respiro antes de responder, em uma situação por dia.',
      naPratica: [
        {
          when: 'Quando algo combinado ficou pendente e você quer cobrar de imediato:',
          text: 'em vez de cobrar no calor da emoção, espere as emoções se acalmarem e diga: “ei, ficou pendente aquilo que a gente combinou — consegue fechar até amanhã?”',
        },
        {
          when: 'Quando precisa apontar um problema e o seu impulso é direcionar pra pessoa que causou:',
          text: 'em vez de falar sobre a pessoa, fale sobre o fato: “isso aqui tá me preocupando por causa de [diga o motivo concreto].” Fala do problema, não de quem fez.',
        },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você foi pros dois extremos: ora recuou e engoliu, ora foi ao excesso e atropelou — sem encontrar o eixo. Não é meio-termo; é instabilidade. E ela costuma cansar mais do que um padrão de um lado só, porque nem você mesmo(a) sabe de antemão como vai reagir na próxima conversa.',
      possiveisMotivos:
        'É provável que, neste momento, dois valores importantes disputem o volante: o de manter a relação (que faz recuar) e o de dizer a verdade ou resolver (que faz atropelar). Os dois pensamentos convivem, e qual vence depende do dia, da pessoa, do humor. Por trás de ambos, pode morar a mesma dúvida: a de que sua voz é suficiente — às vezes você resolve sumindo, às vezes resolve gritando. A virada não é escolher um lado bom; é construir um terceiro jeito, que não depende de qual gatilho disparou primeiro.',
      note: 'A PAUSA é tudo pra você: o único ponto onde dá pra interromper o automático e escolher de propósito. Treine ela primeiro, antes do resto.',
      naPratica: [
        {
          when: 'Quando você se pega levado(a) ora pra um lado, ora pra outro, sem prever:',
          text: 'em vez de ser levado(a) pelo gatilho do momento, use a PAUSA pra se perguntar: “qual é o meu único ponto aqui?” — e diga só ele, curto.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois que a situação passou:',
          text: 'em vez de só perceber o lado depois, anote diariamente: “hoje eu recuei ou me excedi?” Em duas semanas, o padrão fica visível.',
        },
      ],
    },
  },

  maturidade_emocional: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações do mapa, você demonstra um padrão de reconhecer a emoção, regular a reação e responder de forma proporcional ao que aconteceu. Recebe crítica sem se desmontar e sem reagir no impulso, lida com frustração sem travar, e processa o que te incomoda em vez de empurrar pra debaixo do tapete. Esse é o seu ponto forte, e aparece na maior parte do tempo.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir da crença de que você pode sentir uma emoção sem perder o controle do seu comportamento — não precisa esconder o que sente nem despejar nos outros. O ponto de atenção: sob pressão muito forte, todo mundo tem um lado pra onde escorrega. Vale identificar qual é o seu: você tende mais a engolir (e pagar a conta depois) ou a reagir (e se arrepender depois)?',
      note: 'Mantenha o protocolo afiado. Use de propósito nas situações mais pesadas — não só nas leves.',
      naPratica: [
        {
          when: 'Quando perceber alguém ao seu lado engolindo um incômodo ou reagindo no impulso:',
          text: 'em vez de só manter o seu próprio equilíbrio, nomeie com leveza o que está acontecendo — algo como “parece que isso te pegou, quer dar uma pausa antes de responder?”',
        },
        {
          when: 'Quando uma situação realmente difícil aparecer:',
          text: 'em vez de assumir que a pressão nunca vai te pegar, escolha uma situação-limite por mês pra testar onde o seu equilíbrio começa a falhar — e use o protocolo de propósito ali.',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você mantém o equilíbrio — mas em uma delas a emoção tomou conta: você travou, reagiu maior do que a situação pedia, ou perdeu a clareza por um momento. O padrão funcional é o seu chão; o deslize aparece num ponto específico, geralmente onde a pressão ou a crítica pesa mais.',
      possiveisMotivos:
        'É provável que, naquela situação, a emoção tenha chegado forte demais e o automático venceu — com algo como “não consigo evitar, a emoção vem e eu perco o controle” passando pela cabeça. Por trás desse sentimento, pode morar um medo de não dar conta do que sente. Não é fraqueza — é um ponto onde o seu equilíbrio interno precisa de reforço.',
      note: 'Seu ponto de virada está no NOMEIA: quando a emoção chega forte, dê nome a ela antes de reagir. Nomear o que se sente é o que desativa o automático.',
      naPratica: [
        {
          when: 'Quando algo te tira do sério e o seu impulso é responder na hora:',
          text: 'em vez de responder imediatamente, peça um tempo curto: “preciso de um minuto antes de responder isso.” Esse minuto basta pra a emoção sair do volante.',
        },
        {
          when: 'Quando você recebe uma crítica e sente que ela atinge quem você é:',
          text: 'em vez de levar pro pessoal, separe duas coisas: “o que essa pessoa disse de fato? e o que eu estou interpretando do que ela disse?”',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você mantém o equilíbrio — mas em uma delas você se blindou: racionalizou tudo, não demonstrou o que sentia, endureceu pra não parecer afetado(a), ou apareceu cansado(a) e irritado(a) depois. O padrão funcional é o seu chão; a blindagem aparece num ponto específico, geralmente onde mostrar emoção parece arriscado.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o medo de parecer fraco(a) ou de perder o controle — com algo como “não posso deixar transparecer o que estou sentindo” na cabeça. A intenção é legítima (manter a postura). O custo é que a conexão com as outras pessoas se perde, e ninguém sabe o que está acontecendo com você. Por trás desse sentimento, pode morar uma crença de que se você sentir, vai parecer vulnerável — e endurecer parece mais seguro.',
      note: 'Seu ponto de virada está no PERCEBE: antes de blindar, reconheça pra si mesmo(a) que algo te afetou. Manter o equilíbrio interno não é o mesmo que se blindar.',
      naPratica: [
        {
          when: 'Quando algo te toca e o seu impulso é fingir que não te tocou:',
          text: 'em vez de responder no automático “tudo bem”, perceba a emoção e dê nome a ela antes de abrir a boca: “isso me afetou — preciso reconhecer isso comigo antes de seguir.”',
        },
        {
          when: 'Quando você passa pela situação aparentemente intacto(a) mas depois sente o efeito (cansaço, irritação, sono ruim):',
          text: 'em vez de seguir como se nada tivesse acontecido, reconheça: “eu senti — e isso é informação importante, não fraqueza.”',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você tendeu a engolir o que sentia: seguiu como se nada tivesse acontecido por fora, mas ficou remoendo por dentro. Houve um momento em que você regulou — então a capacidade existe. O padrão hoje, porém, é o de empurrar a emoção pra debaixo do tapete.',
      possiveisMotivos:
        'É provável que, neste momento, o que pese mais para você seja o medo de parecer frágil ou de perder o controle — com o pensamento “melhor nem mexer nisso, é só seguir que passa” quase automático. O que parece força é, no fundo, uma forma de defesa: você se protege do desconforto de sentir. Por trás desse sentimento, pode morar uma crença de que você não vai dar conta do que sente — e por isso é mais seguro esconder. O custo chega depois: cansaço acumulado, irritabilidade sem motivo aparente, explosões fora de hora, distanciamento das relações.',
      note: 'Comece pequeno, só pelos dois primeiros passos: “alguma coisa mexeu comigo agora. O que foi?” Não precisa fazer nada com isso ainda — só reconhecer já muda o padrão.',
      naPratica: [
        {
          when: 'Quando alguém faz ou diz algo que te incomoda e você concorda na hora pra evitar o atrito:',
          text: 'em vez de concordar e remoer por dias, diga: “isso me pegou, preciso de um tempo pra processar antes de responder.”',
        },
        {
          when: 'Quando recebe uma crítica e trava ou se desmonta por dentro:',
          text: 'em vez de travar e levar pro pessoal, separe duas coisas: “o que essa pessoa disse de fato? e o que eu estou interpretando do que ela disse?”',
        },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você tendeu à reação no impulso: cobrou no calor da emoção, puxou tudo pra si, ou se blindou endurecendo. Houve um momento em que você dosou — então o equilíbrio é possível. O padrão hoje, porém, é o de despejar a emoção nos outros ou de congelar.',
      possiveisMotivos:
        'É provável que, neste momento, o que pese mais para você seja não querer parecer fraco(a) ou perder o controle — com o pensamento “não posso deixar transparecer” quase automático. A intenção é legítima. Por trás desse sentimento, pode morar uma crença de que suas emoções são perigosas — e que você precisa controlá-las ou elas vão te controlar. O custo: você reage de forma desproporcional ou endurece, e o ambiente ao seu redor se fecha — as pessoas param de te dizer o que realmente pensam, por medo da reação.',
      note: 'Sua virada mora no PERCEBE: o segundo antes de reagir ou de se blindar. Perceber é o que transforma reação em resposta escolhida.',
      naPratica: [
        {
          when: 'Quando algo te frustra e o seu impulso é cobrar de imediato:',
          text: 'em vez de cobrar no calor da emoção, perceba a emoção primeiro e dê nome a ela: “isso é raiva? frustração? medo de perder o controle da situação?”',
        },
        {
          when: 'Quando você se pega tratando emoção como fraqueza e se blindando:',
          text: 'em vez de tratar o que sentiu como fraqueza, reconheça: “eu senti — e isso não me faz mais fraco(a) nem menos competente.”',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas no mapa se dividiram: em algumas situações você engoliu (e ficou remoendo), em outras reagiu no impulso ou endureceu. Isso não é equilíbrio — é instabilidade: o lado pra onde você vai depende do dia, da pessoa, do gatilho.',
      possiveisMotivos:
        'É provável que, neste momento, dois motores convivam dentro de você: às vezes pesa mais não parecer frágil (e você se blinda), às vezes a emoção transborda antes de você perceber (e você reage). Por trás de ambos, pode morar a mesma crença: a de que a emoção é perigosa. A virada não é escolher entre um lado ou outro — é ganhar constância no seu próprio padrão.',
      note: 'O PERCEBE é o seu ponto-chave: é onde você interrompe o automático antes que ele te leve pra qualquer um dos dois extremos.',
      naPratica: [
        {
          when: 'Quando você se pega ora engolindo, ora explodindo, sem conseguir prever:',
          text: 'em vez de ser levado(a) pelo gatilho do momento, faça antes os dois primeiros passos: perceba o que sentiu e dê nome a essa emoção.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois que a situação passou:',
          text: 'em vez de só perceber depois, anote no fim do dia: “hoje a emoção me governou? Foi engolindo ou reagindo?” Em duas semanas o padrão fica visível.',
        },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você tendeu a engolir o que sentia: seguiu como se nada tivesse acontecido por fora, enquanto por dentro a emoção continuava. Hoje o seu padrão é, na maior parte do tempo, o de empurrar a emoção pra baixo. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “melhor nem mexer nisso, é só seguir que passa” — quase automático. Olhe com honestidade: o que parece maturidade é, no fundo, uma forma de fugir. Você não está regulando a emoção — está escondendo dela. Por trás desse sentimento, pode morar uma crença de que se você sentir, vai perder o controle. E o custo é alto: cansaço crônico, irritabilidade sem motivo aparente, distanciamento das relações, explosões em momentos que não combinam com o contexto.',
      note: 'Não tente mudar tudo de uma vez. Comece só pelo PERCEBE: “alguma coisa mexeu comigo agora.” Dar-se o direito de perceber é o primeiro passo.',
      naPratica: [
        {
          when: 'Quando algo te incomoda durante o dia e você segue como se nada tivesse acontecido:',
          text: 'em vez de seguir normal por fora, diga pra si mesmo(a): “isso me incomodou, e tudo bem ter me incomodado.”',
        },
        {
          when: 'Quando você sente que está engolindo e que vai explodir depois:',
          text: 'em vez de engolir até explodir, diga na hora, curto: “preciso de um tempo pra processar isso antes de responder.”',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você tendeu à reação no impulso: cobrou no calor da emoção, endureceu, ou se blindou como se nada tivesse te tocado. Hoje o seu padrão é, na maior parte do tempo, o de disparar ou congelar. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “não posso transparecer o que sinto” — quase automático. A intenção raramente é ferir; é não ser visto(a) como fraco(a). Por trás desse sentimento, pode morar uma crença de que suas emoções são perigosas — que se você abrir, vai perder o controle de tudo. O custo: o ambiente ao seu redor se retrai, e ninguém te diz o que realmente pensa — porque tem medo da sua reação.',
      note: 'Sua virada inteira mora no PERCEBE: o segundo antes de reagir. Comece por ele.',
      naPratica: [
        {
          when: 'Quando algo te frustra e o seu impulso é responder na hora:',
          text: 'em vez de responder no impulso, perceba a emoção e dê nome a ela antes de falar: “isso é raiva? frustração? o que eu estou sentindo agora?”',
        },
        {
          when: 'Quando você se pega se blindando e seguindo como se nada tivesse acontecido:',
          text: 'em vez de se blindar, reconheça: “eu senti — e isso é informação importante sobre mim, não fraqueza.”',
        },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você foi pros dois extremos: ora engoliu o que sentia, ora reagiu no impulso ou endureceu — sem encontrar o eixo. Não é equilíbrio; é instabilidade. E ela costuma cansar mais do que um padrão de um lado só.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que suas emoções são perigosas. Às vezes você resolve escondendo, às vezes despejando, às vezes congelando. A virada não é escolher um lado — é construir um equilíbrio interno que não dependa do gatilho do momento.',
      note: 'O PERCEBE é tudo: o único ponto onde dá pra interromper o automático e escolher de propósito.',
      naPratica: [
        {
          when: 'Quando você se pega levado(a) ora pra um lado, ora pro outro, sem prever:',
          text: 'em vez de ser levado(a) pelo gatilho do momento, faça antes os dois primeiros passos: perceba o que sentiu e dê nome a essa emoção.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois que a situação passou:',
          text: 'em vez de só perceber depois, anote no fim do dia: “hoje eu engoli ou reagi?” Até o padrão ficar visível.',
        },
      ],
    },
  },

  foco_resultado_produtividade: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações do mapa, você demonstra um padrão de saber priorizar, executar e fechar o que começou. Sabe o que importa, começa por aí, sustenta o ritmo sem depender de cobrança externa, e conclui. Esse é o seu ponto forte, e aparece na maior parte do tempo.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir da crença de que seu esforço é suficiente quando está direcionado pro lugar certo — você não precisa fazer tudo nem provar nada. O ponto de atenção: sob muita pressão, o automático pode ser acelerar (e atropelar os processos) ou dispersar (e adiar o que importa).',
      note: 'Mantenha o protocolo afiado. Use de propósito nas semanas mais cheias.',
      naPratica: [
        {
          when: 'Quando perceber alguém ao seu lado se dispersando ou se afobando demais:',
          text: 'em vez de só cuidar do seu próprio foco, ajude essa pessoa a priorizar com uma pergunta: “qual é a única coisa que realmente precisa avançar hoje?”',
        },
        {
          when: 'Quando uma entrega especialmente difícil aparecer:',
          text: 'em vez de assumir que sempre vai dar certo, escolha a entrega mais difícil do mês pra praticar o protocolo de propósito — especialmente o passo FECHA.',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você prioriza e executa bem — mas em uma delas tendeu a adiar: empurrou o que era importante, fez o periférico primeiro, ou deixou a cobrança externa virar o motor da execução. O padrão funcional é o seu chão; o adiamento aparece num ponto específico, geralmente onde a tarefa é menos clara ou menos urgente.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi a falta de urgência externa ou a dificuldade de escolher por qual coisa começar (“e se eu priorizar a errada?”). Por trás desse sentimento, pode morar uma crença de que “depois eu resolvo, ainda dá tempo” — que quase sempre custa mais caro do que parece.',
      note: 'Seu ponto de virada está no ELEGE: transformar “depois eu vejo” em “agora, isso aqui.”',
      naPratica: [
        {
          when: 'Quando algo importante não tem prazo externo e fica empurrado:',
          text: 'em vez de empurrar porque ninguém está cobrando, marque uma data pra você mesmo(a) — como se alguém realmente fosse cobrar nesse dia.',
        },
        {
          when: 'Quando você abre o dia fazendo o que grita mais alto e o importante fica pra depois:',
          text: 'em vez de começar pelo periférico, inverta a ordem: o que mais importa abre o dia, não fecha.',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você prioriza e executa bem — mas em uma delas tendeu ao atropelo: abraçou tarefas demais, acelerou em excesso, ou sacrificou o processo (qualidade, alinhamento com pessoas) pra entregar rápido. O padrão funcional é o seu chão; o atropelo aparece num ponto específico, geralmente quando a pressão aperta.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi querer dar conta de tudo ou não parecer lento(a) — com algo como “eu preciso dar conta de tudo, se sobrar é falha minha” na cabeça. O custo: você entregou rápido, mas criou problema no caminho — seja na qualidade, seja na relação com quem trabalhou junto.',
      note: 'Seu ponto de virada está no PARA: o segundo antes de abraçar mais uma coisa.',
      naPratica: [
        {
          when: 'Quando aparecem várias demandas e o seu impulso é assumir todas:',
          text: 'em vez de abraçar tudo, pare e pergunte: “o que aqui realmente move o resultado e o que pode esperar?”',
        },
        {
          when: 'Quando você se pega ficando até mais tarde pra dar conta da lista inteira:',
          text: 'em vez de fechar o dia quando a lista esvazia, feche quando o que era importante estiver feito — o resto pode entrar no plano de amanhã.',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você tendeu a adiar: fez o que era periférico, empurrou o importante, confundiu estar ocupado(a) com estar produzindo. Houve um momento em que você priorizou — então a capacidade existe. O padrão hoje, porém, é o de dispersar a energia.',
      possiveisMotivos:
        'É provável que, neste momento, pese muito forte o pensamento “depois eu resolvo, ainda dá tempo” — quase automático. O que parece “estar fazendo bastante coisa” é, muitas vezes, ocupação sem direção clara. Por trás desse sentimento, pode morar uma dificuldade de escolher por qual coisa começar — porque escolher também significa abrir mão das outras. O custo: pontas soltas se acumulam, prazos se perdem, e cresce a frustração de trabalhar muito e avançar pouco.',
      note: 'Comece pequeno no ELEGE: uma coisa, uma vez, todo dia. O foco se constrói no hábito, não na força de vontade.',
      naPratica: [
        {
          when: 'Quando você abre o dia fazendo o que grita mais alto:',
          text: 'em vez de ir fazendo o que aparece, comece o dia perguntando: “qual é a única coisa mais importante de hoje? Começo por ela.”',
        },
        {
          when: 'Quando algo importante fica empurrado porque não tem prazo externo:',
          text: 'em vez de empurrar até alguém cobrar, marque uma data pra você mesmo(a) — e respeite como se fosse de outra pessoa.',
        },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você tendeu ao atropelo: abraçou tudo, acelerou, tratou tudo como urgência, cobrou de forma desproporcional. Houve um momento em que você dosou — então o equilíbrio é possível. O padrão hoje, porém, é o de forçar a entrega.',
      possiveisMotivos:
        'É provável que, neste momento, pese muito forte o pensamento “eu preciso dar conta de tudo — se sobrar, é falha minha” — quase automático. A intenção é legítima: não deixar nada cair. Por trás desse sentimento, pode morar uma crença de que seu esforço, sozinho, não basta — que você precisa fazer mais e mais rápido pra ser suficiente. O custo: entrega no curto prazo destruindo processo, qualidade e relação com as outras pessoas no médio prazo.',
      note: 'Sua virada mora no PARA: o segundo antes de assumir mais uma coisa.',
      naPratica: [
        {
          when: 'Quando você se pega pensando “se eu não fizer, ninguém faz”:',
          text: 'em vez de assumir tudo, delegue ou adie o que não é a prioridade que você elegeu pra hoje.',
        },
        {
          when: 'Quando tudo parece urgente ao mesmo tempo:',
          text: 'em vez de tratar tudo como urgência, separe: “isso é urgente porque tem consequência real hoje, ou só apareceu agora?”',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas no mapa se dividiram: em algumas situações você adiou, em outras atropelou. Isso não é equilíbrio — é instabilidade: o resultado fica refém do dia, do humor, do contexto.',
      possiveisMotivos:
        'É provável que, neste momento, dois motores convivam dentro de você: às vezes pesa mais o conforto de não escolher (e você adia), às vezes pesa mais o medo de não dar conta (e você atropela). Por trás de ambos, pode morar a mesma dúvida: a de que o seu esforço é suficiente. A virada é menos fazer mais ou menos — e mais fazer o que importa.',
      note: 'O PARA é o seu ponto-chave: antes de dispersar ou acelerar, pare e eleja.',
      naPratica: [
        {
          when: 'Quando você se pega oscilando entre dispersar e atropelar:',
          text: 'em vez de oscilar, abra todo dia perguntando: “qual é a única coisa mais importante de hoje?” — e comece por ela.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois que a semana passou:',
          text: 'em vez de só perceber depois, anote no fim do dia: “hoje eu adiei ou atropelei?” Em duas semanas o padrão fica visível.',
        },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você tendeu a adiar: fez o periférico, empurrou o importante, dependeu de cobrança externa pra avançar. Hoje o seu padrão é, na maior parte do tempo, o de dispersar. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “depois eu resolvo, ainda dá tempo” — quase automático. Olhe com honestidade: estar ocupado(a) não é a mesma coisa que estar produzindo. O esforço existe — a direção não. Por trás desse sentimento, pode morar uma dificuldade de escolher por qual coisa começar — e o “depois” vira escudo contra essa escolha. O custo é alto: pontas soltas acumulam, e a frustração de “trabalho muito e avanço pouco” corrói a confiança.',
      note: 'Não tente mudar tudo de uma vez. Comece pelo ELEGE: “qual é a coisa mais importante de hoje?” Uma só. Começa por ela.',
      naPratica: [
        {
          when: 'Quando você abre o dia fazendo o que grita mais alto:',
          text: 'em vez de ir fazendo o que aparece, inverta: o que é importante abre o dia, não fecha.',
        },
        {
          when: 'Quando algo importante fica empurrado porque ninguém está cobrando:',
          text: 'em vez de empurrar, marque uma data pra você mesmo(a) — e respeite como se fosse de outra pessoa.',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você tendeu ao atropelo: abraçou tudo, acelerou, tratou tudo como urgência. Hoje o seu padrão é, na maior parte do tempo, o de forçar a entrega. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “preciso dar conta de tudo” — quase automático. A intenção raramente é criar problema; é provar que dá conta. Por trás desse sentimento, pode morar uma crença de que seu esforço, sozinho, não basta — que você precisa de volume pra que ele valha alguma coisa. O custo: o curto prazo sempre ganha do médio, a qualidade cai, e quem está ao redor sente o peso.',
      note: 'Sua virada inteira mora no PARA: parar de executar pra pensar se o que está executando realmente importa. Comece por ele.',
      naPratica: [
        {
          when: 'Quando tudo parece urgente ao mesmo tempo:',
          text: 'em vez de tratar tudo como urgência, separe: “isso é urgente porque tem consequência real hoje, ou só apareceu agora?”',
        },
        {
          when: 'Quando você se pega ficando até mais tarde pra esvaziar a lista:',
          text: 'em vez de fechar o dia quando a lista zera, feche quando o que era importante estiver feito. O resto entra amanhã.',
        },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você foi pros dois extremos: ora adiou e dispersou, ora atropelou e forçou — sem encontrar a direção. Não é equilíbrio; é instabilidade.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que o seu esforço, sozinho, não basta. Às vezes você resolve dispersando (faz muita coisa pra sentir que está fazendo algo), às vezes acelerando (faz tudo de uma vez pra provar que dá conta). A virada não é fazer mais ou menos — é fazer o que é certo.',
      note: 'O PARA é tudo: o ponto onde você interrompe o automático e escolhe de propósito.',
      naPratica: [
        {
          when: 'Quando você se pega levado(a) ora pra um lado, ora pro outro:',
          text: 'em vez de ser levado(a) pelo dia, pare e eleja todo dia: a única coisa mais importante.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois que a semana passou:',
          text: 'em vez de só perceber depois, anote no fim do dia: “hoje eu adiei ou atropelei?” Até o padrão ficar visível.',
        },
      ],
    },
  },

  visao_sistemica: {},
  direcao_futuro: {},
  protagonismo_profissional: {},
}
