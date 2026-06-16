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
    protocol: 'AMPLIA · CONECTA · MEDE · AGE',
    steps: [],
  },
  direcao_futuro: {
    title: 'Direção de Futuro',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: 'OLHA · DECIDE · PLANEJA · MOVE',
    steps: [],
  },
  protagonismo_profissional: {
    title: 'Protagonismo Profissional',
    subtitle: 'Leia antes do nosso bloco de hoje.',
    protocol: 'ASSUME · PEDE · CRIA · SUSTENTA',
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

  visao_sistemica: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações do mapa, você demonstra um padrão de olhar além da sua própria parte: pergunta antes de executar, conecta as peças e age considerando o impacto no todo — sem precisar controlar tudo nem entrar no espaço dos outros. Esse é o seu ponto forte, e aparece na maior parte do tempo.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir da crença de que você pode olhar pro todo sem perder o foco no que é seu — curiosidade sem ansiedade de controle. O ponto de atenção: sob muita pressão, o automático pode ser se fechar na sua parte (e perder o contexto) ou querer abraçar o que não é seu (e gerar ruído com outras áreas).',
      note: 'Mantenha o protocolo afiado. Use de propósito nas situações onde áreas ou pessoas diferentes precisam se conectar.',
      naPratica: [
        {
          when: 'Quando perceber alguém ao seu lado fechado(a) na própria tarefa ou tentando controlar demais:',
          text: 'em vez de só cuidar da sua própria visão, ajude essa pessoa a ampliar com uma pergunta: “você já pensou em quem mais essa decisão impacta?”',
        },
        {
          when: 'Quando uma situação complexa aparecer (várias áreas envolvidas, vários impactos cruzados):',
          text: 'em vez de assumir que sempre vai conseguir conectar, escolha a situação mais complexa do mês pra praticar o protocolo de propósito.',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você conecta bem — mas em uma delas você se fechou na sua própria parte: fez o que precisava ser feito sem olhar pro contexto ao redor ou sem cruzar com o que acontecia em outras áreas. O padrão funcional é o seu chão; o fechamento aparece num ponto específico, geralmente onde a tarefa parece isolada ou o tempo aperta.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o pensamento “fiz o meu, entreguei” — com a urgência fechando a visão pra fora. Por trás desse sentimento, pode morar uma crença de que “se eu ficar no que é meu, pelo menos não erro fora da raia.” O risco é sutil: às vezes a sua parte funciona perfeitamente isolada, e mesmo assim atrapalha o todo — porque ninguém cruzou os processos.',
      note: 'Seu ponto de virada está no AMPLIA: antes de executar, “quem mais é afetado por isso?”',
      naPratica: [
        {
          when: 'Quando você recebe uma tarefa e vai direto executar:',
          text: 'em vez de executar no automático, pare e pergunte antes: “pra que isso vai ser usado? quem depende do que eu vou entregar?”',
        },
        {
          when: 'Quando você termina uma entrega e passa pra próxima sem checar o que vem depois:',
          text: 'em vez de “entreguei o meu”, pergunte: “como o que eu fiz impacta o próximo passo da cadeia?”',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você conecta bem — mas em uma delas você quis controlar demais ou entrou na parte do outro: não delegou, supervisionou em excesso, ou opinou em algo que não estava sob sua responsabilidade. O padrão funcional é o seu chão; isso aparece num ponto específico, geralmente quando a qualidade ou o resultado parecem em risco.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o medo de algo sair mal feito — com algo como “se eu não ficar de olho, não sai direito” na cabeça. A intenção é boa (cuidar da entrega). O custo é virar gargalo, deixar a equipe dependente, ou romper fronteiras que existem por boas razões. Por trás desse sentimento, pode morar uma crença de que “se eu soltar, vai dar errado.”',
      note: 'Seu ponto de virada está no MEDE: “o meu controle aqui está ajudando ou travando? Isso é meu pra resolver, ou meu pra trazer pra quem é dono(a)?”',
      naPratica: [
        {
          when: 'Quando você se pega entrando em várias frentes ao mesmo tempo:',
          text: 'em vez de entrar em tudo, escolha o que realmente precisa de você e delegue o resto com instrução clara e resultado esperado definido.',
        },
        {
          when: 'Quando você se pega supervisionando cada passo do trabalho de alguém:',
          text: 'em vez de supervisionar cada detalhe, combine o resultado esperado e dê espaço pra pessoa chegar lá pelo caminho dela.',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você se fechou na sua própria parte: fez o que precisava ser feito, não perguntou o contexto, não olhou pro impacto ao redor. Houve um momento em que você conectou — então a capacidade existe. O padrão hoje, porém, é o de executar sem ampliar — e às vezes construir um processo, uma rotina ou uma meta que funciona perfeitamente isolada, mas não conversa com o que outras áreas estão fazendo.',
      possiveisMotivos:
        'É provável que, neste momento, pese muito forte o pensamento “minha parte é minha parte” — quase automático. O que parece foco é, muitas vezes, uma forma de proteção: ficar onde você domina, pra não arriscar fora. Por trás desse sentimento, pode morar uma crença de que “se eu sair da minha parte, vou me perder.” O custo: você entrega, mas perde relevância — porque ninguém percebe que você enxerga além da tarefa. E o que você constrói pode estar atrapalhando o sistema sem que você saiba.',
      note: 'Comece pelo AMPLIA: “quem mais é afetado por isso?” Uma pergunta, uma vez, antes de começar uma tarefa.',
      naPratica: [
        {
          when: 'Quando você recebe uma tarefa e vai direto executar:',
          text: 'em vez de fazer no automático, pergunte antes: “pra que isso vai ser usado? quem depende do que eu vou entregar?”',
        },
        {
          when: 'Quando você precisa criar um novo processo, rotina ou regra:',
          text: 'em vez de fechar sem cruzar com as outras áreas, pergunte: “isso aqui pode esbarrar em algum processo ou prazo de outra área?”',
        },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você centralizou ou entrou na parte dos outros: assumiu tarefas além do que era seu, não delegou, concentrou decisões, ou opinou em áreas que não eram da sua responsabilidade direta. Houve um momento em que você soltou — então o equilíbrio é possível. O padrão hoje, porém, é o de controlar demais ou expandir além do seu território.',
      possiveisMotivos:
        'É provável que, neste momento, pese muito forte o pensamento “se eu não ficar de olho, não sai direito” — quase automático. Por trás desse sentimento, pode morar uma crença de que se você soltar, vai dar errado. Em alguns casos, pode morar também o desejo de ser visto(a) como alguém que enxerga mais que os outros — uma forma de se posicionar. O custo: você vira gargalo, a equipe não cresce, a informação não circula. Ou os colegas se retraem porque sentem a invasão.',
      note: 'Sua virada mora no MEDE: “o meu controle está ajudando ou travando? Isso é meu pra resolver, ou meu pra trazer pra quem é dono(a)?”',
      naPratica: [
        {
          when: 'Quando você se pega assumindo o trabalho dos outros porque “ninguém faz como eu”:',
          text: 'em vez de assumir, delegue com instrução clara e resultado esperado definido. Confiar é parte do processo.',
        },
        {
          when: 'Quando você vê um problema na área de outra pessoa e tem o impulso de levar pra cima da liderança dela:',
          text: 'em vez de pular quem é dono(a) do problema, primeiro vá pra pessoa que pode resolver. A ordem com que você leva a informação revela a sua intenção real.',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas no mapa se dividiram: em algumas situações você se fechou na própria parte, em outras quis controlar ou entrou na parte dos outros. Ora não olha pro todo, ora tenta abranger demais. Isso não é equilíbrio — é instabilidade.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que “se eu sair da minha parte, vou me perder.” Às vezes você resolve ficando dentro do seu, às vezes tentando controlar tudo. A virada é ganhar constância — olhar pro todo sem precisar dominar tudo.',
      note: 'O AMPLIA é o seu ponto: antes de qualquer coisa, “quem mais é afetado?”',
      naPratica: [
        {
          when: 'Quando você se pega oscilando entre se fechar e querer controlar:',
          text: 'em vez de oscilar, faça o AMPLIA todo dia antes de começar uma tarefa: “quem mais é afetado por isso?”',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois da situação:',
          text: 'em vez de só perceber depois, anote no fim do dia: “hoje eu me fechei ou tentei controlar/invadir demais?” Em duas semanas o padrão fica visível.',
        },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você se fechou na sua própria parte: executou sem perguntar o contexto, sem olhar pro impacto, sem conectar com o que acontecia ao redor. Hoje o seu padrão é, na maior parte do tempo, o de se manter dentro da própria caixa. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “fiz o meu, entreguei o que pediram” — quase automático. Por trás desse sentimento, pode morar um desconforto com sair da zona onde você domina — porque dentro dela, o risco de errar é menor. O custo é alto: você pode ser excelente tecnicamente e não ser percebido(a) como alguém que enxerga o jogo maior. E o que você constrói pode estar gerando conflito em outras áreas sem que você saiba — porque ninguém cruzou os processos.',
      note: 'Comece pelo AMPLIA: uma pergunta antes de executar. “Pra que isso serve? Quem depende?”',
      naPratica: [
        {
          when: 'Quando você recebe uma tarefa e vai direto executar:',
          text: 'em vez de executar no automático, pergunte antes: “pra que isso vai ser usado? quem depende disso?”',
        },
        {
          when: 'Quando algo aparece numa conversa e você pensa “não é da minha área”:',
          text: 'em vez de se retirar mentalmente da conversa, contribua com uma pergunta sobre o todo — não precisa ser uma opinião, basta uma curiosidade legítima.',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você centralizou ou entrou na parte dos outros: assumiu tarefas além do que era seu, controlou de perto, ou opinou em áreas que não eram suas. Hoje o seu padrão é, na maior parte do tempo, o de controlar ou expandir além do território. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “se eu não controlar, ninguém controla” — quase automático. Por trás desse sentimento, pode morar uma crença de que sem a sua supervisão direta, as coisas não saem direito. Em alguns casos, pode morar também um desejo de ser visto(a) como alguém que enxerga mais que os outros. O custo: você vira gargalo, ninguém cresce ao seu redor, a própria saúde cobra. Ou os colegas se afastam porque sentem a invasão — e a confiança entre áreas se corrói.',
      note: 'Sua virada mora no MEDE: “o meu controle está ajudando ou travando? Isso é meu pra resolver, ou meu pra trazer pra quem é dono(a)?”',
      naPratica: [
        {
          when: 'Quando você se pega assumindo o trabalho dos outros:',
          text: 'em vez de assumir, escolha uma coisa pra delegar essa semana com resultado esperado claro — e respeite o espaço da pessoa pra chegar lá.',
        },
        {
          when: 'Quando você vê um problema em outra área e tem o impulso de levar pra liderança acima:',
          text: 'em vez de pular quem é dono(a) do problema, primeiro vai pra pessoa que pode resolver. A ordem com que você leva a informação mostra a sua intenção.',
        },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você foi pros dois extremos: ora se fechou na própria parte, ora centralizou ou entrou no espaço dos outros. Não é equilíbrio — é instabilidade.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que “se eu sair da minha parte, vou me perder.” Às vezes você resolve ficando dentro do seu, às vezes tentando abranger tudo. A virada não é escolher um lado — é o AMPLIA como hábito constante: olhar pro todo sem precisar dominar tudo.',
      note: 'O AMPLIA é tudo.',
      naPratica: [
        {
          when: 'Quando você se pega oscilando entre se fechar e querer abraçar tudo:',
          text: 'em vez de oscilar, faça uma pergunta antes de cada tarefa: “quem mais é afetado por isso?”',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois:',
          text: 'em vez de só perceber depois, anote no fim do dia: “hoje me fechei ou centralizei demais?”',
        },
      ],
    },
  },
  direcao_futuro: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações do mapa, você demonstra um padrão de saber pra onde está indo, planejar e mover na direção escolhida. Decide sem precisar de certeza total e sustenta a direção ao longo do tempo. Esse é o seu ponto forte, e aparece na maior parte do tempo.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir da crença de que você pode decidir sem ter certeza absoluta — e ajustar a rota conforme o caminho vai mostrando. O ponto de atenção: sob muita pressão, o automático pode ser travar (e estagnar) ou mudar de rumo rápido demais (e perder a constância).',
      note: 'Mantenha o protocolo afiado.',
      naPratica: [
        {
          when: 'Quando perceber alguém ao seu lado travado(a) sem decidir ou pulando de uma coisa pra outra:',
          text: 'em vez de só cuidar da sua própria direção, ajude essa pessoa a olhar pra frente com uma pergunta: “se você soubesse que não ia falhar, o que você escolheria?”',
        },
        {
          when: 'Quando você sentir que está confortável demais na direção atual:',
          text: 'em vez de assumir que tudo continua bem, teste: “qual é a próxima decisão de carreira que eu estou adiando?”',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você tem direção clara — mas em uma delas você estagnou: não decidiu, não planejou, ficou esperando. O padrão funcional é o seu chão; a estagnação aparece num ponto específico, geralmente onde a incerteza é maior.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o pensamento “e se eu escolher errado?” Em alguns casos, pode morar também uma dificuldade de se enxergar num lugar diferente do atual — como se crescer significasse deixar de ser quem você é hoje. Quase nunca a decisão é tão arriscada quanto parece no momento.',
      note: 'Seu ponto de virada está no DECIDE: use os 4 filtros — o que te dá energia, onde você já tem competência natural, o que não tolera mais, e o que escolheria se não fosse falhar.',
      naPratica: [
        {
          when: 'Quando você fica esperando o cenário ficar mais claro pra decidir:',
          text: 'em vez de esperar, pergunte: “o que eu já sei é suficiente pra dar o primeiro passo?”',
        },
        {
          when: 'Quando algo importante fica empurrado porque “depois eu vejo”:',
          text: 'em vez de “depois eu vejo”, marque uma data pra decidir pelo menos a direção — não precisa ser a decisão final, só o rumo.',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você tem direção clara — mas em uma delas você agiu por impulso: mudou de rumo rápido, começou algo sem sustentar, ou seguiu uma empolgação sem checar se fazia sentido pra você. O padrão funcional é o seu chão; a impulsividade aparece num ponto específico, geralmente quando a ansiedade aperta ou quando algo novo aparece com força.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o pensamento “preciso correr antes que seja tarde” — ou o brilho de algo novo que pareceu mais interessante. O custo: você se moveu, mas não necessariamente pra frente. Direção precisa de constância — não só de empolgação.',
      note: 'Seu ponto de virada está no PLANEJA: antes de mudar de rumo, pergunte: “isso está na direção que eu escolhi, ou é só uma distração bonita?”',
      naPratica: [
        {
          when: 'Quando você se pega querendo trocar de rumo logo depois de ter começado:',
          text: 'em vez de pular pra próxima novidade, fique tempo suficiente no caminho atual pra ele dar fruto. Resultado precisa de tempo.',
        },
        {
          when: 'Quando aparece algo novo e interessante e o seu impulso é mudar a direção:',
          text: 'em vez de decidir rápido, passe pelos 4 filtros antes de trocar de rota.',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você estagnou: não decidiu, não planejou, não moveu. Houve um momento em que você escolheu — então a capacidade existe. O padrão hoje, porém, é o de esperar — seja por indecisão, por medo de errar, ou por não se enxergar num lugar diferente de onde está hoje.',
      possiveisMotivos:
        'É provável que, neste momento, pese muito forte o pensamento “eu não sei o suficiente pra decidir” — quase automático. Pode ser medo de escolher errado. Pode ser conforto no que já é conhecido. Ou pode ser algo mais profundo: uma identidade tão ligada à sua função atual que crescer parece deixar de ser quem você é. O custo: enquanto você espera a hora certa, o tempo passa e a sua carreira é decidida por omissão — quem não escolhe, escolhe por padrão.',
      note: 'Comece pelo DECIDE com os 4 filtros: você não precisa de certeza, precisa de direção. E pergunte com honestidade: “quem disse que isso lá na frente não é pra mim? Eu testei, ou estou assumindo?”',
      naPratica: [
        {
          when: 'Quando você fica esperando o cenário ficar mais claro:',
          text: 'em vez de esperar, pergunte: “o que eu já sei é suficiente pro primeiro passo?”',
        },
        {
          when: 'Quando você se pega “indo levando” sem direção definida:',
          text: 'em vez de ir levando, marque uma data: “até [coloque uma data] eu vou ter decidido pelo menos a direção.”',
        },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você agiu por impulso: decidiu rápido, mudou de rumo, começou algo sem sustentar. Houve um momento em que você planejou — então o equilíbrio é possível. O padrão hoje, porém, é o de muita movimentação sem necessariamente avançar — seja por ansiedade de ficar parado(a), seja por ser movido(a) pela excitação de cada novidade.',
      possiveisMotivos:
        'É provável que, neste momento, pese muito forte o pensamento “preciso correr antes que seja tarde” — ou a busca constante por algo novo. Se for ansiedade: o motor é o medo de ficar parado(a). Se for excitação: o motor é falta de referência interna — você nunca se perguntou com calma o que quer de verdade, e por isso qualquer coisa nova parece direção, até perder o brilho. O custo nos dois casos: muita movimentação, pouco avanço real. Muita iniciativa, pouca acabativa.',
      note: 'Sua virada mora no PLANEJA e no DECIDE: antes de mudar de rumo, “isso é direção que eu escolhi, ou é só excitação do momento?”',
      naPratica: [
        {
          when: 'Quando aparece algo novo e o seu impulso é mudar a direção:',
          text: 'em vez de mudar a cada nova oportunidade, pergunte: “isso está na minha direção, ou é distração?”',
        },
        {
          when: 'Quando você se pega começando muita coisa e sustentando pouca:',
          text: 'em vez de começar mais uma, fique no caminho atual tempo suficiente pra ele dar fruto.',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas no mapa se dividiram: em algumas situações você estagnou, em outras agiu por impulso. Ora não decide, ora decide demais sem pensar. Isso não é equilíbrio — é instabilidade.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que “eu não sei o suficiente.” Às vezes você resolve não decidindo, às vezes decidindo tudo de uma vez. A virada é os 4 filtros como hábito — construir o critério interno que parece estar faltando.',
      note: 'O DECIDE com os filtros é o seu ponto.',
      naPratica: [
        {
          when: 'Quando você precisa tomar uma decisão de carreira:',
          text: 'em vez de oscilar entre travar e decidir rápido, passe pelos 4 filtros antes — eles te dão critério.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois:',
          text: 'em vez de só perceber depois, anote no fim da semana: “essa semana eu estagnei ou fui impulsivo(a)?”',
        },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você estagnou. Hoje o padrão é, na maior parte do tempo, o de esperar. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “ainda não sei o suficiente pra decidir” — quase automático. Olhe com honestidade: na maioria das vezes, não é falta de informação. É excesso de medo. Ou é uma autoimagem que não inclui você num lugar diferente de onde está hoje. Enquanto você espera a hora certa, a sua vida profissional vai sendo decidida por omissão — e a distância entre onde você está e onde poderia estar cresce em silêncio.',
      note: 'Comece pelo DECIDE: responda os 4 filtros hoje. A pergunta mais importante deles: “se eu soubesse que não ia falhar, o que eu escolheria?”',
      naPratica: [
        {
          when: 'Quando você fica esperando o cenário ficar mais claro:',
          text: 'em vez de esperar a hora certa, dê o primeiro passo essa semana. Qualquer um.',
        },
        {
          when: 'Quando você pensa “isso lá na frente não é pra mim”:',
          text: 'em vez de assumir, pergunte: “quem disse? Eu testei, ou estou supondo?”',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você agiu por impulso. Hoje o padrão é, na maior parte do tempo, o de muita movimentação sem avanço real. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pese muito forte o pensamento “preciso correr” — ou a busca constante por algo novo, quase automática. A coragem que te move é real. Mas sem direção definida, ela vira agitação. E se o motor for excitação em vez de direção, o padrão vai se repetir em tudo: muda de emprego, de projeto, de plano — e nada fica plantado fundo o suficiente pra dar fruto.',
      note: 'Sua virada mora no PLANEJA: antes de mudar de rumo, pergunte: “estou fugindo ou avançando? Isso é direção, ou é excitação?”',
      naPratica: [
        {
          when: 'Quando o seu impulso é trocar de rota:',
          text: 'em vez de trocar, pergunte: “isso está na direção que eu escolhi pra mim?”',
        },
        {
          when: 'Quando você se pega começando algo novo antes de fechar o que estava no ar:',
          text: 'em vez de começar outra coisa, fique e sustente uma. Resultado precisa de tempo no mesmo solo.',
        },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você foi pros dois extremos. Não é equilíbrio — é instabilidade.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que “eu não sei o suficiente.” A agitação e a paralisia são respostas diferentes pra mesma incerteza. A virada é os 4 filtros como hábito — construir um critério interno que hoje parece estar faltando.',
      note: 'O DECIDE com os filtros é tudo.',
      naPratica: [
        {
          when: 'Quando você precisa tomar qualquer decisão de carreira:',
          text: 'em vez de oscilar, passe pelos 4 filtros antes — eles funcionam como critério interno.',
        },
        {
          when: 'Quando você só percebe o padrão depois da semana passar:',
          text: 'em vez de só perceber depois, anote no fim da semana: “essa semana eu estagnei ou fui impulsivo(a)?”',
        },
      ],
    },
  },
  protagonismo_profissional: {
    funcional_3: {
      ondeVoceEsta:
        'Nas três situações do mapa, você demonstra um padrão de assumir a responsabilidade — pela sua trajetória profissional e pelo espaço onde você atua. Busca, propõe, pede, cria e sustenta sem depender de validação externa. Diante de problemas, age em vez de esperar instrução. Esse é o seu ponto forte, e aparece na maior parte do tempo.',
      possiveisMotivos:
        'O que tende a te sustentar é agir a partir da crença de que você pode construir sem precisar de permissão dos outros — e sem precisar provar valor o tempo todo. O ponto de atenção: sob pressão, o automático pode ser recuar (e esperar) ou se expor demais (e forçar), ou ainda agir além do que você domina.',
      note: 'Mantenha o protocolo afiado.',
      naPratica: [
        {
          when: 'Quando perceber alguém ao seu lado esperando demais ou se forçando demais:',
          text: 'em vez de só protagonizar o seu, inspire essa pessoa a assumir o próprio espaço — com uma pergunta ou um exemplo concreto.',
        },
        {
          when: 'Quando você sentir que está confortável demais na atuação atual:',
          text: 'em vez de seguir como está, teste: “qual é o pedido que eu estou evitando fazer? Qual problema eu vi e fingi que não vi?”',
        },
      ],
    },
    recuo_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você protagoniza — mas em uma delas você esperou: não pediu, não buscou, não agiu sobre algo que poderia ter resolvido. O padrão funcional é o seu chão; a espera aparece num ponto específico, geralmente onde a exposição ou o risco parecem maiores.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi o medo de parecer inconveniente ou de se expor — com algo como “se eu for bom(boa), vão notar” ou “não me pediram pra fazer” na cabeça. Por trás desse sentimento, pode morar uma crença de que se você pedir e ouvir não, não vai aguentar.',
      note: 'Seu ponto de virada está no PEDE (pra trajetória) ou no CRIA (pra atuação).',
      naPratica: [
        {
          when: 'Quando você quer crescer mas espera ser notado(a) em vez de pedir:',
          text: 'em vez de esperar ser notado(a), peça uma conversa de carreira com quem decide: “quero entender o que preciso desenvolver pra chegar em [diga onde quer chegar].”',
        },
        {
          when: 'Quando você vê um problema e pensa “não me pediram pra resolver”:',
          text: 'em vez de cruzar os braços, pergunte: “o que eu posso fazer sobre isso agora, mesmo sem ninguém ter pedido?”',
        },
      ],
    },
    excesso_2: {
      ondeVoceEsta:
        'Na maioria das situações do mapa, você protagoniza — mas em uma delas você se forçou: se expôs demais, buscou validação, fez demais pra provar valor, ou agiu além do que dominava. O padrão funcional é o seu chão; isso aparece num ponto específico, geralmente quando a insegurança ou a urgência apertam.',
      possiveisMotivos:
        'É provável que, naquela situação, o que pesou mais para você foi querer provar que merece, ou resolver algo que não era pra você resolver sozinho(a). Por trás desse sentimento, pode morar uma crença de que sem aplauso o seu trabalho não vale — ou que pedir ajuda é sinal de fraqueza. Protagonismo que depende de validação externa não se sustenta. E iniciativa sem autoconsciência costuma criar mais problema do que resolve.',
      note: 'Seu ponto de virada está no SUSTENTA (fazer porque acredita, não pra ouvir elogio) ou no PEDE (pedir ajuda quando passa do seu limite — porque pedir ajuda também é protagonismo).',
      naPratica: [
        {
          when: 'Quando você se oferece pra mais coisas do que cabem na sua agenda:',
          text: 'em vez de se oferecer pra tudo, escolha o que está alinhado com a sua direção e diga não com clareza ao resto.',
        },
        {
          when: 'Quando você se pega tentando resolver algo que não domina pra não parecer limitado(a):',
          text: 'em vez de resolver sozinho(a), pergunte com honestidade: “eu tenho competência suficiente pra isso, ou preciso de apoio de alguém com mais conhecimento?”',
        },
      ],
    },
    recuo_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você esperou: não pediu, não buscou, não agiu quando poderia ter agido. Houve um momento em que você protagonizou — então a capacidade existe. O padrão hoje, porém, é o de aguardar — tanto na carreira quanto diante de problemas que aparecem no dia a dia.',
      possiveisMotivos:
        'É provável que, neste momento, pesem muito forte os pensamentos “pra eu crescer, alguém precisa me notar” e “não me pediram pra fazer” — quase automáticos. O que parece humildade ou respeito ao limite da sua função é, muitas vezes, medo de rejeição ou de se expor. Por trás desse sentimento, pode morar uma crença de que se você se expuser e der errado, você não vai aguentar. O custo: a sua carreira está sendo construída por omissão, problemas que você viu passam sem solução, e a frustração de “não sou reconhecido(a)” cresce — sem que você tenha pedido nada ou agido sobre nada.',
      note: 'Comece pelo PEDE (peça uma coisa essa semana) ou pelo CRIA (aja sobre um problema que você viu e fingiu que não viu).',
      naPratica: [
        {
          when: 'Quando você quer crescer mas espera ser notado(a):',
          text: 'em vez de esperar, peça uma conversa de carreira com quem decide.',
        },
        {
          when: 'Quando o cenário muda e o seu impulso é cruzar os braços e esperar instrução:',
          text: 'em vez de cruzar os braços, pergunte: “o que eu posso fazer sobre isso agora, mesmo sem ninguém ter pedido?”',
        },
      ],
    },
    excesso_1: {
      ondeVoceEsta:
        'Na maior parte das situações do mapa, você se forçou: se expôs demais, quis provar valor, dependeu de validação externa, ou agiu além do que dominava. Houve um momento em que você dosou — então o equilíbrio é possível. O padrão hoje, porém, é o de provar ou de agir sem medir.',
      possiveisMotivos:
        'É provável que, neste momento, pesem muito forte os pensamentos “preciso provar o tempo todo que mereço” ou “se eu não fizer, ninguém faz” — quase automáticos. Se for por validação: o motor é a insegurança, e a sensação de que nunca é o suficiente. Se for por imprudência: o motor é a ação sem consciência dos limites — parece coragem, mas é risco. O custo: exaustão, retrabalho, ou protagonismo que precisa de aplauso pra continuar existindo.',
      note: 'Sua virada mora no SUSTENTA (fazer porque acredita, sem aplauso) e no PEDE (reconhecer limite e buscar apoio — porque protagonismo maduro inclui saber quando algo não é pra fazer sozinho(a)).',
      naPratica: [
        {
          when: 'Quando você se oferece pra tudo e fica exausto(a):',
          text: 'em vez de se oferecer pra tudo, entregue o que importa de verdade — e sustente sem precisar de elogio.',
        },
        {
          when: 'Quando você se pega resolvendo algo que não domina:',
          text: 'em vez de agir além do que sabe, pergunte: “eu domino isso o suficiente pra resolver sem criar risco — ou preciso de apoio?”',
        },
      ],
    },
    oscilante_1: {
      ondeVoceEsta:
        'Suas respostas no mapa se dividiram: em algumas situações você esperou, em outras você se forçou. Ora não se expõe, ora se expõe demais. Ora cruza os braços, ora age além do que deveria. Não é equilíbrio — é instabilidade.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que se você se expuser, vai ser rejeitado(a). Às vezes você resolve não se expondo, às vezes compensando com ação em excesso. A virada é constância — protagonismo calibrado.',
      note: 'O ASSUME é o seu ponto: “a responsabilidade é minha” como postura diária — sem esperar e sem forçar.',
      naPratica: [
        {
          when: 'Quando você se pega oscilando entre esperar e se forçar:',
          text: 'em vez de oscilar, use o ASSUME como postura diária: “a responsabilidade pelo que acontece aqui é minha.”',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois da semana:',
          text: 'em vez de só perceber depois, anote no fim da semana: “essa semana eu esperei ou me forcei?”',
        },
      ],
    },
    recuo_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você esperou: não pediu, não buscou, não agiu. Hoje o padrão é, na maior parte do tempo, o de aguardar. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pesem muito forte os pensamentos “se eu for bom(boa), vão notar” e “não me pediram” — quase automáticos. Olhe com honestidade: trabalho silencioso não construiu carreira de ninguém. E cruzar os braços diante de um problema que você viu não é respeito a limites — é omissão. O custo: a frustração cresce, a carreira fica estagnada, e os problemas que você poderia ter resolvido passam por você.',
      note: 'Comece pelo PEDE: peça uma coisa essa semana. Qualquer coisa. Ou pelo CRIA: aja sobre uma coisa que você viu e fingiu que não viu.',
      naPratica: [
        {
          when: 'Quando você quer crescer mas espera ser notado(a):',
          text: 'em vez de esperar, peça feedback essa semana — pra alguém que você respeita.',
        },
        {
          when: 'Quando você vê um problema e pensa “não me pediram pra resolver”:',
          text: 'em vez de cruzar os braços, pergunte: “o que eu posso fazer sobre isso agora?”',
        },
      ],
    },
    excesso_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você se forçou: se expôs demais, quis provar valor, ou agiu além do que dominava. Hoje o padrão é, na maior parte do tempo, o de provar ou de agir sem medir. Isso não diz quem você é — diz o que tem se repetido, e o que se repete pode mudar.',
      possiveisMotivos:
        'É bem provável que, neste momento, pesem muito forte os pensamentos “preciso provar valor o tempo todo” ou “se eu não fizer, ninguém faz” — quase automáticos. O custo: exaustão, sensação de que nunca é suficiente, protagonismo que precisa de aplauso pra continuar. A iniciativa é real — mas sem calibragem, ela vira um problema em vez de ser a solução.',
      note: 'Sua virada mora no SUSTENTA (fazer porque acredita, sem aplauso) e no PEDE (pedir ajuda é a forma madura da iniciativa).',
      naPratica: [
        {
          when: 'Quando você se oferece pra tudo e fica exausto(a):',
          text: 'em vez de se oferecer pra tudo, escolha o que importa e diga não com clareza ao resto.',
        },
        {
          when: 'Quando você se pega pensando “preciso provar”:',
          text: 'em vez de provar, diga pra si: “eu fiz o que acredito ser certo — e isso basta.”',
        },
      ],
    },
    oscilante_0: {
      ondeVoceEsta:
        'Nas três situações do mapa, você foi pros dois extremos: ora esperou, ora se forçou. Não é equilíbrio — é instabilidade.',
      possiveisMotivos:
        'É provável que, neste momento, a mesma crença alimente os dois lados: a de que se você se expuser, vai ser rejeitado(a) ou vai falhar. A virada: o ASSUME como postura constante, com clareza sobre onde você precisa de apoio.',
      note: 'O ASSUME é tudo.',
      naPratica: [
        {
          when: 'Quando você se pega oscilando entre esperar e se forçar:',
          text: 'em vez de oscilar, use “a responsabilidade pelo que acontece é minha” como postura — mas com clareza de onde você precisa de apoio.',
        },
        {
          when: 'Quando você só percebe pra qual lado foi depois:',
          text: 'em vez de só perceber depois, anote no fim da semana: “essa semana eu esperei ou me forcei?”',
        },
      ],
    },
  },
}
