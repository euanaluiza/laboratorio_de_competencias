export const ASSESSMENT_META = {
  slug: 'mapa-competencias-comportamentais',
  version: '1.0',
}

export const CONSENT_VERSION = '1.0'

export const CONSENT_TEXT = `Declaro que li e concordo que minhas respostas serão coletadas e utilizadas pela equipe da Ana Luiza Carvalho para fins pedagógicos, acompanhamento individual, análise da turma e melhoria das atividades do Laboratório de Competências.

Entendo que este mapa não é avaliação psicológica, diagnóstico clínico, laudo, processo seletivo ou instrumento de decisão automatizada. É uma atividade de autopercepção e desenvolvimento.

Também entendo que posso solicitar acesso, correção ou exclusão dos meus dados pelo canal informado pela equipe.`

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

export const MATURE_OPTION_BY_QUESTION = {
  1: 'B', 2: 'C', 3: 'A', 4: 'B', 6: 'C', 7: 'A', 8: 'B', 9: 'C',
  11: 'B', 12: 'A', 13: 'C', 14: 'B', 16: 'A', 17: 'C', 18: 'B', 19: 'A',
  21: 'C', 22: 'B', 23: 'A', 24: 'C', 26: 'B', 27: 'A', 28: 'C', 29: 'B',
}

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

export const ASSESSMENT_STEPS = [
  {
    id: 'comunicacao-assertiva',
    title: 'Comunicação Assertiva',
    questions: [
      {
        questionNumber: 1,
        questionType: 'single',
        competencyKey: 'comunicacao_assertiva',
        text: 'Quando preciso discordar de alguém, eu normalmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[1],
        options: [
          { value: 'A', label: 'Evito falar para não gerar desconforto.' },
          { value: 'B', label: 'Explico meu ponto com respeito e escuto a outra pessoa.' },
          { value: 'C', label: 'Falo de forma direta, mesmo que a pessoa se sinta atacada.' },
        ],
      },
      {
        questionNumber: 2,
        questionType: 'single',
        competencyKey: 'comunicacao_assertiva',
        text: 'Ao receber uma orientação pouco clara, minha tendência é:',
        matureOption: MATURE_OPTION_BY_QUESTION[2],
        options: [
          { value: 'A', label: 'Tentar adivinhar o que esperam de mim.' },
          { value: 'B', label: 'Esperar que alguém perceba minha dúvida.' },
          { value: 'C', label: 'Fazer perguntas objetivas para alinhar expectativas.' },
        ],
      },
      {
        questionNumber: 3,
        questionType: 'single',
        competencyKey: 'comunicacao_assertiva',
        text: 'Quando preciso dizer não a um pedido, eu costumo:',
        matureOption: MATURE_OPTION_BY_QUESTION[3],
        options: [
          { value: 'A', label: 'Explicar meu limite com clareza e propor alternativa se possível.' },
          { value: 'B', label: 'Aceitar mesmo sem conseguir cumprir bem.' },
          { value: 'C', label: 'Responder de forma seca para encerrar o assunto.' },
        ],
      },
      {
        questionNumber: 4,
        questionType: 'single',
        competencyKey: 'comunicacao_assertiva',
        text: 'Em conversas difíceis, eu geralmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[4],
        options: [
          { value: 'A', label: 'Fico em silêncio e guardo o incômodo.' },
          { value: 'B', label: 'Organizo meu pensamento antes de falar e busco um tom respeitoso.' },
          { value: 'C', label: 'Reajo no momento para não perder a oportunidade.' },
        ],
      },
      {
        questionNumber: 5,
        questionType: 'multi',
        competencyKey: 'comunicacao_assertiva',
        text: 'Quais situações mais desafiam sua comunicação hoje? Escolha até 2.',
        options: [
          { value: 'A', label: 'Dar feedback.' },
          { value: 'B', label: 'Pedir ajuda.' },
          { value: 'C', label: 'Defender uma ideia.' },
          { value: 'D', label: 'Dizer não.' },
        ],
      },
    ],
  },
  {
    id: 'maturidade-emocional',
    title: 'Maturidade Emocional',
    questions: [
      {
        questionNumber: 6,
        questionType: 'single',
        competencyKey: 'maturidade_emocional',
        text: 'Quando recebo uma crítica, minha primeira atitude costuma ser:',
        matureOption: MATURE_OPTION_BY_QUESTION[6],
        options: [
          { value: 'A', label: 'Me defender rapidamente.' },
          { value: 'B', label: 'Me fechar e evitar novas conversas.' },
          { value: 'C', label: 'Escutar, filtrar o que faz sentido e decidir o próximo passo.' },
        ],
      },
      {
        questionNumber: 7,
        questionType: 'single',
        competencyKey: 'maturidade_emocional',
        text: 'Quando estou sob pressão, eu tendo a:',
        matureOption: MATURE_OPTION_BY_QUESTION[7],
        options: [
          { value: 'A', label: 'Respirar, priorizar e agir por etapas.' },
          { value: 'B', label: 'Tentar resolver tudo ao mesmo tempo.' },
          { value: 'C', label: 'Paralisar até a pressão diminuir.' },
        ],
      },
      {
        questionNumber: 8,
        questionType: 'single',
        competencyKey: 'maturidade_emocional',
        text: 'Quando erro em uma atividade importante, eu normalmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[8],
        options: [
          { value: 'A', label: 'Evito pensar no assunto.' },
          { value: 'B', label: 'Reconheço o erro, aprendo e ajusto minha rota.' },
          { value: 'C', label: 'Procuro uma justificativa externa.' },
        ],
      },
      {
        questionNumber: 9,
        questionType: 'single',
        competencyKey: 'maturidade_emocional',
        text: 'Diante de uma emoção intensa, minha tendência é:',
        matureOption: MATURE_OPTION_BY_QUESTION[9],
        options: [
          { value: 'A', label: 'Agir antes de entender o que estou sentindo.' },
          { value: 'B', label: 'Ignorar a emoção para parecer forte.' },
          { value: 'C', label: 'Nomear o que sinto e escolher uma resposta mais adequada.' },
        ],
      },
      {
        questionNumber: 10,
        questionType: 'multi',
        competencyKey: 'maturidade_emocional',
        text: 'Quais situações mais testam sua maturidade emocional? Escolha até 2.',
        options: [
          { value: 'A', label: 'Pressão por prazo.' },
          { value: 'B', label: 'Críticas inesperadas.' },
          { value: 'C', label: 'Conflitos com colegas.' },
          { value: 'D', label: 'Mudanças de planos.' },
        ],
      },
    ],
  },
  {
    id: 'foco-resultado-produtividade',
    title: 'Foco em Resultado e Produtividade',
    questions: [
      {
        questionNumber: 11,
        questionType: 'single',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Quando começo uma tarefa, eu geralmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[11],
        options: [
          { value: 'A', label: 'Inicio pelo que parece mais fácil no momento.' },
          { value: 'B', label: 'Entendo o objetivo e organizo os próximos passos.' },
          { value: 'C', label: 'Espero ter vontade para começar.' },
        ],
      },
      {
        questionNumber: 12,
        questionType: 'single',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Ao perceber muitas demandas ao mesmo tempo, eu costumo:',
        matureOption: MATURE_OPTION_BY_QUESTION[12],
        options: [
          { value: 'A', label: 'Priorizar pelo impacto e pelo prazo.' },
          { value: 'B', label: 'Alternar entre tarefas sem concluir.' },
          { value: 'C', label: 'Focar no que outras pessoas cobram primeiro.' },
        ],
      },
      {
        questionNumber: 13,
        questionType: 'single',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Quando uma tarefa fica cansativa, minha tendência é:',
        matureOption: MATURE_OPTION_BY_QUESTION[13],
        options: [
          { value: 'A', label: 'Procurar distrações para aliviar.' },
          { value: 'B', label: 'Abandonar e voltar depois sem planejamento.' },
          { value: 'C', label: 'Dividir em partes menores e manter avanço possível.' },
        ],
      },
      {
        questionNumber: 14,
        questionType: 'single',
        competencyKey: 'foco_resultado_produtividade',
        text: 'Para acompanhar meu progresso, eu normalmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[14],
        options: [
          { value: 'A', label: 'Confio na memória.' },
          { value: 'B', label: 'Uso alguma forma de registro, lista ou revisão.' },
          { value: 'C', label: 'Só verifico quando alguém pergunta.' },
        ],
      },
      {
        questionNumber: 15,
        questionType: 'multi',
        competencyKey: 'foco_resultado_produtividade',
        text: 'O que mais atrapalha sua produtividade hoje? Escolha até 2.',
        options: [
          { value: 'A', label: 'Distrações digitais.' },
          { value: 'B', label: 'Dificuldade de priorizar.' },
          { value: 'C', label: 'Falta de planejamento.' },
          { value: 'D', label: 'Excesso de demandas.' },
        ],
      },
    ],
  },
  {
    id: 'visao-sistemica',
    title: 'Visão Sistêmica',
    questions: [
      {
        questionNumber: 16,
        questionType: 'single',
        competencyKey: 'visao_sistemica',
        text: 'Antes de tomar uma decisão que afeta outras pessoas, eu costumo:',
        matureOption: MATURE_OPTION_BY_QUESTION[16],
        options: [
          { value: 'A', label: 'Considerar impactos, envolvidos e consequências.' },
          { value: 'B', label: 'Focar apenas no meu resultado imediato.' },
          { value: 'C', label: 'Decidir rápido para evitar demora.' },
        ],
      },
      {
        questionNumber: 17,
        questionType: 'single',
        competencyKey: 'visao_sistemica',
        text: 'Quando um problema se repete, minha tendência é:',
        matureOption: MATURE_OPTION_BY_QUESTION[17],
        options: [
          { value: 'A', label: 'Resolver só o sintoma mais urgente.' },
          { value: 'B', label: 'Esperar que outra pessoa investigue.' },
          { value: 'C', label: 'Buscar causas, padrões e pontos de melhoria.' },
        ],
      },
      {
        questionNumber: 18,
        questionType: 'single',
        competencyKey: 'visao_sistemica',
        text: 'Ao trabalhar em grupo, eu geralmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[18],
        options: [
          { value: 'A', label: 'Faço minha parte sem olhar o todo.' },
          { value: 'B', label: 'Entendo como minha entrega se conecta às demais.' },
          { value: 'C', label: 'Aguardo alguém coordenar tudo.' },
        ],
      },
      {
        questionNumber: 19,
        questionType: 'single',
        competencyKey: 'visao_sistemica',
        text: 'Quando uma solução parece boa para mim, eu:',
        matureOption: MATURE_OPTION_BY_QUESTION[19],
        options: [
          { value: 'A', label: 'Verifico se ela também funciona para o contexto maior.' },
          { value: 'B', label: 'Sigo em frente sem consultar outras perspectivas.' },
          { value: 'C', label: 'Deixo a decisão para quem tem mais autoridade.' },
        ],
      },
      {
        questionNumber: 20,
        questionType: 'multi',
        competencyKey: 'visao_sistemica',
        text: 'O que mais dificulta sua visão do todo? Escolha até 2.',
        options: [
          { value: 'A', label: 'Urgência do dia a dia.' },
          { value: 'B', label: 'Pouca troca com outras áreas ou pessoas.' },
          { value: 'C', label: 'Falta de clareza sobre objetivos.' },
          { value: 'D', label: 'Medo de perguntar demais.' },
        ],
      },
    ],
  },
  {
    id: 'direcao-futuro',
    title: 'Direção de Futuro',
    questions: [
      {
        questionNumber: 21,
        questionType: 'single',
        competencyKey: 'direcao_futuro',
        text: 'Quando penso no meu desenvolvimento, eu normalmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[21],
        options: [
          { value: 'A', label: 'Espero oportunidades aparecerem.' },
          { value: 'B', label: 'Tenho vontade de crescer, mas pouca clareza.' },
          { value: 'C', label: 'Defino objetivos e observo próximos passos possíveis.' },
        ],
      },
      {
        questionNumber: 22,
        questionType: 'single',
        competencyKey: 'direcao_futuro',
        text: 'Ao escolher uma atividade, eu costumo considerar:',
        matureOption: MATURE_OPTION_BY_QUESTION[22],
        options: [
          { value: 'A', label: 'Somente o que é mais confortável agora.' },
          { value: 'B', label: 'Como ela pode contribuir para meu caminho futuro.' },
          { value: 'C', label: 'A opinião das pessoas antes da minha intenção.' },
        ],
      },
      {
        questionNumber: 23,
        questionType: 'single',
        competencyKey: 'direcao_futuro',
        text: 'Quando não sei o próximo passo, eu tendo a:',
        matureOption: MATURE_OPTION_BY_QUESTION[23],
        options: [
          { value: 'A', label: 'Buscar informações, referências e conversas orientadoras.' },
          { value: 'B', label: 'Adiar a decisão indefinidamente.' },
          { value: 'C', label: 'Escolher qualquer caminho para sair da dúvida.' },
        ],
      },
      {
        questionNumber: 24,
        questionType: 'single',
        competencyKey: 'direcao_futuro',
        text: 'Sobre metas pessoais e profissionais, eu:',
        matureOption: MATURE_OPTION_BY_QUESTION[24],
        options: [
          { value: 'A', label: 'Penso nelas apenas quando alguém pergunta.' },
          { value: 'B', label: 'Tenho muitas ideias, mas não transformo em plano.' },
          { value: 'C', label: 'Reviso prioridades e ajusto ações quando necessário.' },
        ],
      },
      {
        questionNumber: 25,
        questionType: 'multi',
        competencyKey: 'direcao_futuro',
        text: 'O que mais dificulta sua direção de futuro hoje? Escolha até 2.',
        options: [
          { value: 'A', label: 'Falta de clareza sobre interesses.' },
          { value: 'B', label: 'Medo de escolher errado.' },
          { value: 'C', label: 'Pouca informação sobre possibilidades.' },
          { value: 'D', label: 'Dificuldade de manter planos.' },
        ],
      },
    ],
  },
  {
    id: 'protagonismo-profissional',
    title: 'Protagonismo Profissional',
    questions: [
      {
        questionNumber: 26,
        questionType: 'single',
        competencyKey: 'protagonismo_profissional',
        text: 'Quando encontro uma dificuldade, eu geralmente:',
        matureOption: MATURE_OPTION_BY_QUESTION[26],
        options: [
          { value: 'A', label: 'Espero alguém resolver ou orientar tudo.' },
          { value: 'B', label: 'Busco alternativas e peço apoio quando necessário.' },
          { value: 'C', label: 'Desisto se não vejo solução rápida.' },
        ],
      },
      {
        questionNumber: 27,
        questionType: 'single',
        competencyKey: 'protagonismo_profissional',
        text: 'Sobre meu aprendizado, eu costumo:',
        matureOption: MATURE_OPTION_BY_QUESTION[27],
        options: [
          { value: 'A', label: 'Assumir responsabilidade e procurar formas de evoluir.' },
          { value: 'B', label: 'Depender apenas do que é oferecido em aula.' },
          { value: 'C', label: 'Me comparar com outras pessoas e perder ritmo.' },
        ],
      },
      {
        questionNumber: 28,
        questionType: 'single',
        competencyKey: 'protagonismo_profissional',
        text: 'Quando percebo uma oportunidade de melhoria, eu:',
        matureOption: MATURE_OPTION_BY_QUESTION[28],
        options: [
          { value: 'A', label: 'Guardo a ideia para evitar exposição.' },
          { value: 'B', label: 'Espero alguém pedir minha opinião.' },
          { value: 'C', label: 'Apresento a ideia com responsabilidade e abertura.' },
        ],
      },
      {
        questionNumber: 29,
        questionType: 'single',
        competencyKey: 'protagonismo_profissional',
        text: 'Quando recebo uma tarefa nova, eu tendo a:',
        matureOption: MATURE_OPTION_BY_QUESTION[29],
        options: [
          { value: 'A', label: 'Focar no risco de não conseguir.' },
          { value: 'B', label: 'Entender o desafio e agir com iniciativa responsável.' },
          { value: 'C', label: 'Esperar instruções detalhadas para cada etapa.' },
        ],
      },
      {
        questionNumber: 30,
        questionType: 'multi',
        competencyKey: 'protagonismo_profissional',
        text: 'O que mais limita seu protagonismo hoje? Escolha até 2.',
        options: [
          { value: 'A', label: 'Medo de errar.' },
          { value: 'B', label: 'Dificuldade de pedir apoio.' },
          { value: 'C', label: 'Baixa clareza sobre responsabilidades.' },
          { value: 'D', label: 'Receio de se posicionar.' },
        ],
      },
    ],
  },
  {
    id: 'reflexao-final',
    title: 'Reflexão final',
    questions: [
      {
        questionNumber: 31,
        questionType: 'open',
        competencyKey: null,
        text: 'Qual comportamento você mais gostaria de mudar hoje?',
      },
      {
        questionNumber: 32,
        questionType: 'open',
        competencyKey: null,
        text: 'Em quais situações você sente que não consegue agir como gostaria?',
      },
    ],
  },
]

export const QUESTIONS = ASSESSMENT_STEPS.flatMap((step) => step.questions)
