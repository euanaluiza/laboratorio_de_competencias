export const ASSESSMENT_VERSION = '2.0'

export const ASSESSMENT_META = {
  slug: 'mapa-competencias-comportamentais',
  version: ASSESSMENT_VERSION,
}

export const CONSENT_VERSION = '2.0'

export const CONSENT_TEXT = `Autorizo a equipe da Ana Luiza Carvalho a coletar e tratar os dados que informo neste questionário — meu nome e e-mail — e as respostas que registro, com a finalidade de gerar meu mapa de competências, oferecer acompanhamento individual e pedagógico, analisar o desenvolvimento da turma e aprimorar as atividades do Laboratório de Competências.

Este tratamento se baseia no meu consentimento livre, informado e inequívoco (art. 7º, I, da Lei nº 13.709/2018 — Lei Geral de Proteção de Dados). Minha participação é voluntária e posso revogar este consentimento a qualquer momento, sem prejuízo, comunicando a equipe.

Entendo que meu mapa poderá ser enviado a mim de forma individual por mensagem, incluindo WhatsApp, no contato que forneci, e que meus dados não serão vendidos nem compartilhados com terceiros sem relação com esta atividade.

Compreendo que este mapa é uma atividade de autopercepção e desenvolvimento e não constitui avaliação psicológica, diagnóstico clínico, laudo, processo seletivo ou decisão tomada de forma automatizada.

Estou ciente de que posso, a qualquer momento, confirmar a existência do tratamento, acessar, corrigir, atualizar, solicitar a portabilidade ou a eliminação dos meus dados e revogar este consentimento, pelo canal de atendimento informado pela equipe. Meus dados serão mantidos apenas pelo tempo necessário às finalidades acima e eliminados quando deixarem de ser necessários ou mediante minha solicitação.`

export const COMPETENCIES = [
  {
    key: 'comunicacao_assertiva',
    label: 'Comunicação Assertiva',
    interpretation:
      'Observa como você expressa ideias, limites e necessidades mantendo respeito, clareza e abertura para escuta.',
  },
  {
    key: 'maturidade_emocional',
    label: 'Maturidade Emocional',
    interpretation:
      'Observa como você reconhece emoções, regula reações e toma decisões com mais consciência em situações de pressão.',
  },
  {
    key: 'foco_resultado_produtividade',
    label: 'Foco em Resultado e Produtividade',
    interpretation:
      'Observa como você organiza prioridades, sustenta ritmo de entrega e transforma intenção em ação concreta.',
  },
  {
    key: 'visao_sistemica',
    label: 'Visão Sistêmica',
    interpretation:
      'Observa como você percebe relações entre pessoas, processos e consequências antes de decidir ou agir.',
  },
  {
    key: 'direcao_futuro',
    label: 'Direção de Futuro',
    interpretation:
      'Observa como você constrói clareza sobre próximos passos e conecta escolhas atuais com objetivos de desenvolvimento.',
  },
  {
    key: 'protagonismo_profissional',
    label: 'Protagonismo Profissional',
    interpretation:
      'Observa como você assume responsabilidade pelo próprio crescimento e busca caminhos possíveis diante de desafios.',
  },
]

export const FREQUENCY_OPTIONS = [
  { value: 'quase_sempre', label: 'Quase sempre' },
  { value: 'as_vezes', label: 'Às vezes' },
  { value: 'raramente', label: 'Raramente' },
]

// Kept temporarily because the current result screen still imports this v1 export.
export const INTERPRETATION_BANDS = [
  {
    min: 0,
    max: 40,
    label: 'Competência em atenção',
    text: 'Este é um ponto de atenção no seu mapa inicial. Ele pode ser desenvolvido com prática orientada, repertório e novas escolhas em situações reais.',
  },
  {
    min: 41,
    max: 70,
    label: 'Competência em desenvolvimento',
    text: 'Esta competência já aparece em alguns comportamentos e ainda pode ganhar consistência. Observe os contextos em que você se aproxima do padrão desejado.',
  },
  {
    min: 71,
    max: 100,
    label: 'Competência fortalecida',
    text: 'Esta competência aparece como força atual. Use esse repertório para sustentar seu desenvolvimento e apoiar escolhas mais conscientes.',
  },
]

function defineQuestion(question) {
  return {
    ...question,
    questionNumber: question.number,
    questionType: question.type,
  }
}

export const ASSESSMENT_STEPS = [
  {
    id: 'comunicacao_assertiva',
    title: 'Comunicação Assertiva',
    competencyKey: 'comunicacao_assertiva',
    questions: [
      defineQuestion({
        number: 1,
        type: 'situation',
        competencyKey: 'comunicacao_assertiva',
        text: 'Lembre da última vez que você discordou de uma decisão numa reunião ou conversa de trabalho — e quem decidia tinha mais peso que você. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Não falei na hora — achei melhor não abrir discussão na frente de todo mundo, ainda mais com alguém acima de mim.',
            zone: 'Z1',
          },
          {
            value: 'b',
            label:
              'Falei na hora o que pensava, sem rodeio — se ninguém aponta, passa errado; prefiro ser sincera mesmo que soe dura.',
            zone: 'Z2',
          },
          {
            value: 'c',
            label:
              'Falei que enxergava diferente e expliquei o porquê em poucas palavras, sem brigar pra que fosse do meu jeito.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 2,
        type: 'situation',
        competencyKey: 'comunicacao_assertiva',
        text: 'Lembre da última vez que te pediram pra assumir algo — uma tarefa, um prazo, uma demanda a mais — que você sabia que ia te sobrecarregar. O que você fez?',
        options: [
          {
            value: 'a',
            label: 'Aceitei mesmo assim — preferi não criar problema; depois eu dava um jeito.',
            zone: 'Z1',
          },
          {
            value: 'b',
            label:
              'Falei o que dava pra assumir e o que não dava, e a gente acertou o que vinha primeiro.',
            zone: 'Z3',
          },
          {
            value: 'c',
            label:
              'Deixei claro, meio sem paciência, que eu já estava cheia e que aquilo não cabia — uma hora a gente tem que se impor.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 3,
        type: 'situation',
        competencyKey: 'comunicacao_assertiva',
        text: 'Lembre da última vez que alguém não cumpriu algo combinado com você, ou que você precisou cobrar ou pedir algo importante pra você. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Retomei o combinado direto com a pessoa — falei o que tinha ficado pra trás e o que eu precisava dali pra frente.',
            zone: 'Z3',
          },
          {
            value: 'b',
            label:
              'Deixei pra lá e dei meu jeito sozinha — cobrar ia parecer que eu estava reclamando ou fazendo drama.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Cobrei na hora, sem muito filtro — quando deixo passar vira costume, prefiro deixar claro logo.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 4,
        type: 'thought',
        competencyKey: 'comunicacao_assertiva',
        text: 'Quando você precisa se posicionar, dizer não ou cobrar alguém, com que frequência passa pela sua cabeça cada pensamento?',
        statements: [
          {
            id: 'q4_z1',
            zone: 'Z1',
            text: '“Melhor não falar agora, pra não criar climão ou desagradar alguém.”',
          },
          {
            id: 'q4_z2',
            zone: 'Z2',
            text: '“Se eu não falar firme, acabam passando por cima de mim.”',
          },
        ],
        frequencyOptions: FREQUENCY_OPTIONS,
      }),
      defineQuestion({
        number: 5,
        type: 'value',
        competencyKey: 'comunicacao_assertiva',
        text: 'Quando você precisa dizer algo difícil e não dá pra agradar todo mundo, o que pesa mais forte em você na hora? (UMA)',
        options: [
          {
            value: 'a',
            label: 'Não estremecer a relação, manter o clima bom.',
            mappedValue: 'Pertencimento',
          },
          {
            value: 'b',
            label: 'Dizer o que eu penso de verdade, mesmo que incomode.',
            mappedValue: 'Verdade',
          },
          {
            value: 'c',
            label: 'Que a coisa seja justa, que cada um assuma o que é seu.',
            mappedValue: 'Justiça',
          },
          {
            value: 'd',
            label: 'Não passar uma imagem ruim, não parecer difícil.',
            mappedValue: 'Reconhecimento',
          },
          {
            value: 'e',
            label: 'Resolver logo e seguir em frente.',
            mappedValue: 'Resultado',
          },
        ],
      }),
    ],
  },
  {
    id: 'maturidade_emocional',
    title: 'Maturidade Emocional',
    competencyKey: 'maturidade_emocional',
    questions: [
      defineQuestion({
        number: 6,
        type: 'situation',
        competencyKey: 'maturidade_emocional',
        text: 'Lembre da última vez que você recebeu uma crítica dura, ou um feedback que te pegou de surpresa. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Expliquei o meu lado na hora — parte daquilo vinha de quem não tinha visto tudo, e eu não ia deixar ficar uma impressão errada de mim.',
            zone: 'Z2',
          },
          {
            value: 'b',
            label:
              'Concordei e agradeci ali, de boa — mas depois fiquei dias remoendo, pensando no que tinham achado de mim.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Segurei a vontade de responder na hora, deixei a poeira baixar, e depois pensei com calma no que tinha ali de verdade pra eu aproveitar.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 7,
        type: 'situation',
        competencyKey: 'maturidade_emocional',
        text: 'Lembre da última vez que algo importante desandou de um jeito que você não esperava — um plano que furou, um problema que caiu no seu colo. Nas horas seguintes, o que aconteceu com você?',
        options: [
          {
            value: 'a',
            label:
              'Fiquei chateada, mas respirei, separei o que ainda dava pra resolver do que não dava mais, e fui cuidar do que estava na minha mão.',
            zone: 'Z3',
          },
          {
            value: 'b',
            label:
              'Travei — fiquei nervosa, sem saber por onde começar, e demorei um tempão pra conseguir reagir.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Já fui resolvendo no impulso — puxei tudo pra mim, cobrei quem estava do lado, e só fui sentir o baque depois.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 8,
        type: 'situation',
        competencyKey: 'maturidade_emocional',
        text: 'Lembre da última vez que algo te abalou de verdade no trabalho — uma situação injusta, uma conversa pesada, um erro seu exposto na frente dos outros. Pensando em como você ficou nos dias seguintes:',
        options: [
          {
            value: 'a',
            label:
              'Por fora segui normal, como se não tivesse mexido comigo — mas por dentro ficou martelando, ou apareceu depois em forma de cansaço, irritação, sono ruim.',
            zone: 'Z1',
          },
          {
            value: 'b',
            label:
              'Não me deixei ficar mal — engoli, mantive a postura e o foco no trabalho; ficar abalada ali não ia ajudar em nada.',
            zone: 'Z2',
          },
          {
            value: 'c',
            label:
              'Deixei vir o que tinha que vir, tirei um tempo pra digerir, e aí consegui virar a página de verdade — sem ficar remoendo nem fingir que não tinha doído.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 9,
        type: 'thought',
        competencyKey: 'maturidade_emocional',
        text: 'Quando algo mexe com você emocionalmente no trabalho, com que frequência passa pela sua cabeça cada pensamento?',
        statements: [
          {
            id: 'q9_z2',
            zone: 'Z2',
            text: '“Não posso deixar transparecer o que estou sentindo, senão vão me achar frágil.”',
          },
          {
            id: 'q9_z1',
            zone: 'Z1',
            text: '“Melhor nem mexer no que me incomodou — é só seguir que passa.”',
          },
        ],
        frequencyOptions: FREQUENCY_OPTIONS,
      }),
      defineQuestion({
        number: 10,
        type: 'value',
        competencyKey: 'maturidade_emocional',
        text: 'Quando algo te abala emocionalmente no trabalho, o que pesa mais forte em você na hora? (UMA)',
        options: [
          {
            value: 'a',
            label: 'Não deixar isso virar briga ou desgaste com os outros.',
            mappedValue: 'Pertencimento',
          },
          {
            value: 'b',
            label: 'Manter o controle, não me sentir perdida.',
            mappedValue: 'Segurança',
          },
          {
            value: 'c',
            label: 'Não passar imagem de frágil ou descontrolada.',
            mappedValue: 'Reconhecimento',
          },
          {
            value: 'd',
            label: 'Que tivessem sido justos comigo.',
            mappedValue: 'Justiça',
          },
          {
            value: 'e',
            label: 'Não travar — conseguir seguir e resolver.',
            mappedValue: 'Resultado',
          },
        ],
      }),
    ],
  },
  {
    id: 'foco_resultado_produtividade',
    title: 'Foco em Resultado e Produtividade',
    competencyKey: 'foco_resultado_produtividade',
    questions: [
      defineQuestion({
        number: 11,
        type: 'situation',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Lembre da última semana realmente cheia que você teve — muita demanda e tarefa ao mesmo tempo. Na prática, como você tocou aquilo?',
        options: [
          {
            value: 'a',
            label:
              'Abracei tudo de uma vez e fui tocando no impulso — parar pra organizar ia ser perda de um tempo que eu não tinha.',
            zone: 'Z2',
          },
          {
            value: 'b',
            label:
              'Parei um instante pra ver o que era mais importante, comecei por aí, e deixei o resto pra depois.',
            zone: 'Z3',
          },
          {
            value: 'c',
            label:
              'Fui fazendo primeiro o que era mais rápido e o que gritava mais alto, pra ir tirando da frente — o importante mesmo ficou pro fim.',
            zone: 'Z1',
          },
        ],
      }),
      defineQuestion({
        number: 12,
        type: 'situation',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Lembre da última vez que você teve uma entrega importante que dependia só de você, sem ninguém cobrando prazo. Como foi?',
        options: [
          {
            value: 'a',
            label:
              'Como ninguém estava cobrando, fui empurrando com a barriga — sempre tinha algo mais urgente na frente.',
            zone: 'Z1',
          },
          {
            value: 'b',
            label:
              'Fui aceitando outras coisas que apareciam, e ela acabou disputando espaço com todo o resto.',
            zone: 'Z2',
          },
          {
            value: 'c',
            label:
              'Marquei uma data pra mim e reservei um tempo no meio da semana, como se alguém fosse cobrar.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 13,
        type: 'situation',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Lembre da última vez que você terminou o dia exausta, tendo feito mil coisas pequenas, mas deixando de lado as atividades que eram de fato mais relevantes. Depois disso, o que você fez?',
        options: [
          {
            value: 'a',
            label:
              'No dia seguinte inverti a ordem: comecei pelo que era mais importante e deixei o resto pra depois.',
            zone: 'Z3',
          },
          {
            value: 'b',
            label:
              'Fiquei até mais tarde e puxei ainda mais coisa pra mim, pra conseguir dar conta de tudo.',
            zone: 'Z2',
          },
          {
            value: 'c',
            label:
              'Fiquei frustrada, mas não tomei nenhuma decisão pra mudar — no dia seguinte continuei do mesmo jeito.',
            zone: 'Z1',
          },
        ],
      }),
      defineQuestion({
        number: 14,
        type: 'thought',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Quando o trabalho aperta, com que frequência passa pela sua cabeça cada pensamento?',
        statements: [
          {
            id: 'q14_z2',
            zone: 'Z2',
            text: '“Eu preciso dar conta de tudo — se sobra coisa, é falha minha.”',
          },
          {
            id: 'q14_z1',
            zone: 'Z1',
            text: '“Isso eu resolvo depois, ainda dá tempo.”',
          },
        ],
        frequencyOptions: FREQUENCY_OPTIONS,
      }),
      defineQuestion({
        number: 15,
        type: 'value',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Quando o trabalho acumula e você não vai dar conta de tudo bem, o que pesa mais forte? (UMA)',
        options: [
          {
            value: 'a',
            label: 'Entregar e fazer andar, custe o que custar.',
            mappedValue: 'Resultado',
          },
          {
            value: 'b',
            label: 'Fazer bem feito, mesmo que demore mais.',
            mappedValue: 'Excelência',
          },
          {
            value: 'c',
            label: 'Não passar a imagem de quem não dá conta.',
            mappedValue: 'Reconhecimento',
          },
          {
            value: 'd',
            label: 'Manter tudo organizado e sob controle.',
            mappedValue: 'Segurança',
          },
          {
            value: 'e',
            label: 'Não deixar ninguém na mão.',
            mappedValue: 'Pertencimento',
          },
        ],
      }),
    ],
  },
  {
    id: 'visao_sistemica',
    title: 'Visão Sistêmica',
    competencyKey: 'visao_sistemica',
    questions: [
      defineQuestion({
        number: 16,
        type: 'situation',
        competencyKey: 'visao_sistemica',
        text: 'Lembre da última vez que te passaram uma tarefa sem muito contexto — só “faz isso”. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Fiz do jeito que pediram e pronto, sem ficar perguntando muito — não queria atrasar nem parecer enrolada.',
            zone: 'Z1',
          },
          {
            value: 'b',
            label:
              'Antes de começar, perguntei rapidinho pra que era aquilo e quem ia usar, pra não fazer no escuro — e aí toquei.',
            zone: 'Z3',
          },
          {
            value: 'c',
            label:
              'Quis entender tudo nos mínimos detalhes e levantei um monte de perguntas — só ia tocar com a certeza de que nada sairia errado.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 17,
        type: 'situation',
        competencyKey: 'visao_sistemica',
        text: 'Lembre da última vez que você percebeu um problema que se repetia, mas que não era exatamente da sua responsabilidade. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Entrei e fui resolver eu mesma — alguém tinha que resolver e ninguém estava fazendo nada.',
            zone: 'Z2',
          },
          {
            value: 'b',
            label:
              'Reparei, mas não me meti — não era minha função, e não queria pisar no que era dos outros.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Avisei quem podia resolver, mostrei onde aquilo estava atrapalhando, e ajudei no que dava do meu lado.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 18,
        type: 'situation',
        competencyKey: 'visao_sistemica',
        text: 'Lembre da última vez que você terminou a sua parte de algo, mas dava pra ver que quem ia pegar dali podia ter dificuldade. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Antes de passar adiante, expliquei o que era importante e o que podia complicar, pra facilitar pra quem ia pegar.',
            zone: 'Z3',
          },
          {
            value: 'b',
            label:
              'Considerei a minha parte feita — cada um cuida do que é seu, e a minha eu já tinha entregado.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Acabei entrando também na parte do outro pra garantir que saísse do jeito certo.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 19,
        type: 'thought',
        competencyKey: 'visao_sistemica',
        text: 'Em coisas que envolvem várias pessoas, com que frequência passa pela sua cabeça cada pensamento?',
        statements: [
          {
            id: 'q19_z1',
            zone: 'Z1',
            text: '“Fiz a minha parte; o que vem depois não é problema meu.”',
          },
          {
            id: 'q19_z2',
            zone: 'Z2',
            text: '“Se eu não ficar de olho em tudo, alguma coisa vai sair errada.”',
          },
        ],
        frequencyOptions: FREQUENCY_OPTIONS,
      }),
      defineQuestion({
        number: 20,
        type: 'value',
        competencyKey: 'visao_sistemica',
        text: 'Quando uma entrega envolve várias pessoas e etapas, o que pesa mais forte em você? (UMA)',
        options: [
          {
            value: 'a',
            label: 'Que o resultado final saia.',
            mappedValue: 'Resultado',
          },
          {
            value: 'b',
            label: 'Que nada dê errado no caminho.',
            mappedValue: 'Segurança',
          },
          {
            value: 'c',
            label: 'Que as pessoas trabalhem bem juntas.',
            mappedValue: 'Pertencimento',
          },
          {
            value: 'd',
            label: 'Cuidar bem do que é meu, sem invadir o dos outros.',
            mappedValue: 'Autonomia',
          },
          {
            value: 'e',
            label: 'Que a entrega inteira fique bem feita.',
            mappedValue: 'Excelência',
          },
        ],
      }),
    ],
  },
  {
    id: 'direcao_futuro',
    title: 'Direção de Futuro',
    competencyKey: 'direcao_futuro',
    questions: [
      defineQuestion({
        number: 21,
        type: 'situation',
        competencyKey: 'direcao_futuro',
        text: 'Pense nos últimos meses. Quando apareceu uma chance de crescer que exigia se expor, se esforçar mais ou sair da zona de conforto, o que você costumou fazer?',
        options: [
          {
            value: 'a',
            label:
              'Acabei adiando ou deixando passar — senti que ainda não estava preparada, que faltava alguma coisa.',
            zone: 'Z1',
          },
          {
            value: 'b',
            label:
              'Pensei se aquilo me levava pra onde eu quero chegar, e quando levava, encarei mesmo com o frio na barriga.',
            zone: 'Z3',
          },
          {
            value: 'c',
            label:
              'Agarrei na hora, antes de pensar direito — morro de medo de perder oportunidade e ficar pra trás.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 22,
        type: 'situation',
        competencyKey: 'direcao_futuro',
        text: 'Pense em algo que você diz que quer pra sua vida ou carreira, mas que a sua rotina de hoje não sustenta. Nos últimos tempos, diante dessa diferença, o que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Escolhi uma mudança pequena e comecei a mexer numa parte da rotina — pouca coisa, mas de verdade.',
            zone: 'Z3',
          },
          {
            value: 'b',
            label:
              'Fiquei incomodada e pensando muito naquilo, mas na prática não saí muito do lugar.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Me cobrei demais e tentei mudar tudo de uma vez — o que não durou nem um pouco.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 23,
        type: 'situation',
        competencyKey: 'direcao_futuro',
        text: 'Pense nas decisões mais importantes que você tomou nos últimos tempos. Na hora de escolher, o que mais pesou?',
        options: [
          {
            value: 'a',
            label:
              'O que parecia mais ousado ou que me fazia avançar mais rápido, mesmo sem eu ter clareza do que ia custar.',
            zone: 'Z2',
          },
          {
            value: 'b',
            label:
              'O que me dava menos dor de cabeça na hora ou evitava um atrito imediato.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'O que combinava mais com aquilo que eu acredito e com a direção que eu quero seguir, mesmo custando mais agora.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 24,
        type: 'thought',
        competencyKey: 'direcao_futuro',
        text: 'Quando você pensa no seu futuro, com que frequência passa pela sua cabeça cada pensamento?',
        statements: [
          {
            id: 'q24_z1',
            zone: 'Z1',
            text: '“Eu queria crescer, mas não sei nem por onde começar.”',
          },
          {
            id: 'q24_z2',
            zone: 'Z2',
            text: '“Preciso correr — sinto que estou ficando pra trás em relação aos outros.”',
          },
        ],
        frequencyOptions: FREQUENCY_OPTIONS,
      }),
      defineQuestion({
        number: 25,
        type: 'value',
        competencyKey: 'direcao_futuro',
        text: 'Quando você decide algo sobre seu futuro ou sua carreira, o que pesa mais forte? (UMA)',
        options: [
          {
            value: 'a',
            label: 'Crescer, aprender, evoluir.',
            mappedValue: 'Crescimento',
          },
          {
            value: 'b',
            label: 'Não arriscar o que eu já tenho, manter o chão firme.',
            mappedValue: 'Segurança',
          },
          {
            value: 'c',
            label: 'Construir uma reputação, ser reconhecida pelo caminho.',
            mappedValue: 'Reconhecimento',
          },
          {
            value: 'd',
            label: 'Ter liberdade pra decidir do meu jeito.',
            mappedValue: 'Autonomia',
          },
          {
            value: 'e',
            label: 'Avançar de verdade, ver resultado concreto.',
            mappedValue: 'Resultado',
          },
        ],
      }),
    ],
  },
  {
    id: 'protagonismo_profissional',
    title: 'Protagonismo Profissional',
    competencyKey: 'protagonismo_profissional',
    questions: [
      defineQuestion({
        number: 26,
        type: 'situation',
        competencyKey: 'protagonismo_profissional',
        text: 'Lembre da última vez que você fez uma boa entrega que passou batida — ninguém viu nem deu o crédito. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Fiquei chateada, mas não falei nada — ia parecer que eu estava querendo aparecer.',
            zone: 'Z1',
          },
          {
            value: 'b',
            label:
              'Fiz questão de deixar bem claro que tinha sido eu — não ia deixar meu trabalho passar como se fosse de outra pessoa.',
            zone: 'Z2',
          },
          {
            value: 'c',
            label:
              'Num momento tranquilo, dei um jeito de mostrar o que eu tinha feito e de acertar isso melhor dali pra frente.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 27,
        type: 'situation',
        competencyKey: 'protagonismo_profissional',
        text: 'Lembre da última vez que você enxergou uma melhoria que dava pra fazer no trabalho, mas ninguém tinha pedido sua opinião. O que você fez?',
        options: [
          {
            value: 'a',
            label: 'Organizei a ideia, escolhi uma boa hora e apresentei como uma sugestão.',
            zone: 'Z3',
          },
          {
            value: 'b',
            label:
              'Guardei pra mim — achei que não era o meu lugar falar, e não quis me meter.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Apontei o problema sem rodeio — me incomoda ver algo errado e ninguém fazer nada, então alguém tinha que falar.',
            zone: 'Z2',
          },
        ],
      }),
      defineQuestion({
        number: 28,
        type: 'situation',
        competencyKey: 'protagonismo_profissional',
        text: 'Lembre da última vez que você sentiu que estava estagnada ou pouco desenvolvida no trabalho. O que você fez?',
        options: [
          {
            value: 'a',
            label:
              'Tentei mostrar meu valor pegando mais tarefa, assumindo mais do que devia pra aparecer mais.',
            zone: 'Z2',
          },
          {
            value: 'b',
            label:
              'Fiquei esperando que alguém percebesse, me desse uma chance ou me orientasse melhor.',
            zone: 'Z1',
          },
          {
            value: 'c',
            label:
              'Fui atrás de saber onde eu precisava melhorar e comecei a fazer alguma coisa concreta sobre isso.',
            zone: 'Z3',
          },
        ],
      }),
      defineQuestion({
        number: 29,
        type: 'thought',
        competencyKey: 'protagonismo_profissional',
        text: 'Quando o assunto é o seu crescimento, com que frequência passa pela sua cabeça cada pensamento?',
        statements: [
          {
            id: 'q29_z1',
            zone: 'Z1',
            text: '“Pra eu crescer, alguém precisa me notar ou me dar a oportunidade.”',
          },
          {
            id: 'q29_z2',
            zone: 'Z2',
            text: '“Preciso provar o tempo todo que sou indispensável.”',
          },
        ],
        frequencyOptions: FREQUENCY_OPTIONS,
      }),
      defineQuestion({
        number: 30,
        type: 'value',
        competencyKey: 'protagonismo_profissional',
        text: 'Quando o assunto é o seu crescimento e espaço no trabalho, o que pesa mais forte? (UMA)',
        options: [
          {
            value: 'a',
            label: 'Ser vista e reconhecida pelo que faço.',
            mappedValue: 'Reconhecimento',
          },
          {
            value: 'b',
            label: 'Ter liberdade e autonomia pra agir.',
            mappedValue: 'Autonomia',
          },
          {
            value: 'c',
            label: 'Crescer e aprender.',
            mappedValue: 'Crescimento',
          },
          {
            value: 'd',
            label: 'Não parecer que estou me promovendo, manter boas relações.',
            mappedValue: 'Pertencimento',
          },
          {
            value: 'e',
            label: 'Contribuir e entregar de verdade.',
            mappedValue: 'Resultado',
          },
        ],
      }),
    ],
  },
  {
    id: 'open_questions',
    title: 'Perguntas finais',
    competencyKey: null,
    questions: [
      defineQuestion({
        number: 31,
        type: 'open',
        competencyKey: null,
        text: 'Pensando no seu dia a dia de trabalho hoje, qual é a situação que mais se repete e que você gostaria de conseguir lidar de um jeito diferente? Descreva rapidamente o que costuma acontecer.',
      }),
      defineQuestion({
        number: 32,
        type: 'open',
        competencyKey: null,
        text: 'Se, ao final deste laboratório, você pudesse mudar uma única coisa no seu jeito de agir no trabalho, o que faria a maior diferença pra você?',
      }),
    ],
  },
]

export const QUESTIONS = ASSESSMENT_STEPS.flatMap((step) => step.questions)
