// Textos fixos do relatório do reteste (verbatim da spec v3). Coordenador-facing.
// O literal [competência] em COMECOU é substituído pelo título da competência.

// BLOCO 1 — "Onde você começou" (por direcao_inicial).
export const COMECOU = {
  sub: 'No diagnóstico inicial, o seu padrão em [competência] tendia à subexpressão, ou seja, ao lado de recuar, engolir e não se posicionar.',
  ff: 'No diagnóstico inicial, o seu padrão em [competência] tendia à falsa força, ou seja, ao lado de forçar, reagir e se impor.',
  osc: 'No diagnóstico inicial, o seu padrão em [competência] oscilava entre recuar e forçar, sem um eixo estável.',
  func: 'No diagnóstico inicial, [competência] já era um ponto funcional seu. Você tendia a agir de forma proporcional ao que cada situação pedia.',
}

// BLOCO 2 — frase 1 (estado), por partiu_de + faixa_cp.
export const AGORA_ESTADO = {
  desvio: {
    alta: 'Hoje, depois do laboratório, você percebe esse padrão na maioria das vezes em que ele aparece, e se sente preparado(a) para agir sobre ele.',
    media: 'Hoje, depois do laboratório, você já percebe esse padrão em parte das situações, e a sua preparação para agir sobre ele está se formando.',
    baixa: 'Hoje, depois do laboratório, esse padrão ainda é difícil de perceber no momento em que acontece, e a preparação para agir sobre ele ainda está no começo. Isso é esperado, porque perceber um automático antigo é justamente o que leva mais tempo.',
  },
  funcional: {
    alta: 'Hoje, depois do laboratório, além de agir bem nessa competência, você também percebe com clareza o que está fazendo e por quê. Você tem, ao mesmo tempo, o comportamento e a consciência dele.',
    media: 'Hoje, depois do laboratório, você percebe esse padrão em parte das situações. Como essa competência já era funcional em você desde o início, é comum que ela aconteça de forma parcialmente automática, sem que você precise pensar muito nela.',
    baixa: 'Hoje, depois do laboratório, você relata perceber pouco esse padrão no momento em que ele acontece. Isso não significa que você piorou. Como essa competência já era funcional em você desde o início, é provável que você aja bem nela de forma automática, sem precisar pensar.',
  },
}

// BLOCO 2 — frase 2 (aplicação), por partiu_de + aplicacao.
export const AGORA_APLICACAO = {
  desvio: {
    aplicou_forte: 'E mais importante que isso: você já usou o caminho funcional mais de uma vez numa situação real. Repetir a ação é o que transforma o novo comportamento em hábito.',
    aplicou: 'E você já usou o caminho funcional uma vez numa situação real. Esse primeiro uso é o que mostra, na prática, que o caminho funciona para você.',
    tentou: 'Você tentou usar o caminho e não conseguiu na hora, mas isso não é falha, e sim parte do processo. Mesmo percebendo só depois que a situação passou, você já está treinando o seu olhar. Com a repetição, esse perceber vai chegando cada vez mais cedo, até acontecer no próprio momento da situação.',
    nao_usou: 'Você ainda não usou o caminho numa situação real. Esse é o seu próximo passo: transformar o que você já percebe em ação concreta.',
    nao_viveu: 'Você não passou por situações dessa natureza recentemente, o que é normal. Quando elas aparecerem, o caminho já está disponível para você.',
  },
  funcional: {
    aplicou_forte: 'E você usou o caminho funcional mais de uma vez de forma consciente, ou seja, sabendo o que estava fazendo. Isso é diferente de acertar no automático, porque você passa a poder repetir o acerto quando a situação ficar difícil.',
    aplicou: 'E você usou o caminho funcional uma vez de forma consciente. Usar de propósito o que antes você fazia naturalmente é o que garante o acerto mesmo sob pressão.',
    tentou: 'Você tentou usar o caminho de forma consciente e não conseguiu na hora. Isso é comum em competências que já são naturais, porque o automático age antes de você pensar.',
    nao_usou: 'Você ainda não usou o caminho de forma consciente. Como essa competência já é funcional em você, o ganho aqui não é aprender a agir, mas passar a escolher a ação de propósito, especialmente quando a pressão aumentar.',
    nao_viveu: 'Você não passou por situações dessa natureza recentemente, o que é normal. Quando elas aparecerem, o caminho já está disponível para você.',
  },
}

// BLOCO 3 — "Leitura do movimento". Matriz completa (sem lacunas).
// NV = nao_viveu (prioridade). R1..R10 cruzam partiu_de × faixa_cp × usou.
export const MOVIMENTO = {
  NV: 'Como você não passou por situações dessa natureza recentemente, não é possível ler movimento aqui, e isso é normal. Nem toda semana traz todos os tipos de situação. Mantenha o caminho disponível, porque ele vai ser útil quando a situação aparecer.',
  R1: 'Repare no percurso: você partiu de um padrão automático, hoje já percebe esse padrão na hora em que ele acontece, e além disso já agiu de forma diferente numa situação real. Você percorreu, em pouco tempo, as duas etapas que mais importam. Primeiro a pessoa passa a enxergar o padrão, e só depois consegue mudar o comportamento. Você já fez as duas.',
  R2: 'Repare no percurso: você partiu de um padrão automático e hoje já consegue enxergá-lo enquanto ele acontece. Essa é a mudança que mais importa, porque ninguém muda um comportamento que não percebe estar tendo. O que falta agora é uma coisa só: usar o caminho numa situação real. A consciência já está firme, e é ela que sustenta a ação.',
  R3: 'Repare no percurso: você partiu de um padrão automático, já percebe esse padrão em parte das situações, e mesmo assim já agiu de forma diferente numa situação real. Isso é significativo, porque você não esperou a percepção ficar perfeita para começar a agir. Continuar usando o caminho é o que vai aumentar a sua percepção, e não o contrário.',
  R4: 'Repare no percurso: você partiu de um padrão automático e já começou a enxergá-lo em parte das situações. O movimento está acontecendo, mesmo que ainda não tenha chegado na ação. O próximo passo é escolher uma situação concreta e usar o caminho nela, mesmo sem se sentir totalmente preparado(a). A prontidão costuma vir depois do primeiro uso, e não antes.',
  R5: 'Aqui há um contraste interessante. Você ainda percebe pouco esse padrão no momento em que ele acontece, mas mesmo assim já usou o caminho numa situação real. Isso sugere que a ação está vindo antes da percepção, o que também funciona. Continue usando o caminho de propósito, porque cada uso vai tornando o padrão mais visível para você.',
  R6: 'O movimento aqui ainda está no começo, e isso é honesto, não é fracasso. Essa competência provavelmente é a que mais te custa, e as que mais custam levam mais tempo. Recomendação concreta: escolha esta competência como o seu único foco nos próximos dias. Trabalhar uma competência de cada vez traz mais resultado do que tentar melhorar as seis ao mesmo tempo.',
  R7: 'Essa competência já era uma força sua no início, e agora ela deixou de ser apenas um acerto natural. Você percebe o que faz, sabe por que faz, e já usou o caminho de forma consciente. Essa é a diferença entre acertar por hábito e acertar por escolha. Quem acerta por escolha continua acertando quando a situação fica difícil, porque não depende de o automático funcionar.',
  R8: 'Essa competência já era uma força sua no início, e hoje você também tem clareza sobre ela: percebe o padrão e se sente preparado(a). O que ainda não aconteceu foi usar o caminho de propósito numa situação real. Vale procurar essa oportunidade, porque é o uso consciente que garante o acerto quando a pressão aumenta e o automático deixa de dar conta.',
  R9: 'Essa competência já era funcional em você desde o diagnóstico inicial, e é provável que ela funcione, em boa parte do tempo, de forma automática. Você acerta sem precisar pensar muito. Isso é uma vantagem real, mas tem um risco: quem age no automático costuma não perceber o momento em que sai do eixo. E é justamente sob pressão forte que esse momento chega. Trazer essa competência para a consciência, mesmo já sendo bom(boa) nela, é o que protege você nos dias difíceis.',
  R10: 'Atenção a esta leitura, porque ela é diferente das outras. Essa competência já era funcional em você desde o diagnóstico inicial, e hoje você relata perceber pouco esse padrão. Isso não significa que você piorou, porque a sua percepção nunca foi medida antes, e não há queda a ser afirmada. O que os dados sugerem é outra coisa: você provavelmente age bem nessa competência de forma automática, sem precisar pensar nela. Competência automática é confortável, mas é cega. Quando a pressão aumenta e o automático falha, quem não percebe o próprio padrão não consegue corrigir o rumo. O trabalho aqui não é aprender a agir, porque você já sabe. É passar a observar de propósito o que você faz naturalmente.',
}

// SÍNTESE — abertura fixa + um texto variável + adendo condicional + fechamento fixo.
export const SINTESE = {
  ABERTURA: 'Todo comportamento que você repete sem perceber governa você. Todo comportamento que você percebe passa a poder ser escolhido. É isso que este reteste mede: não o quanto você é bom ou ruim em cada competência, mas o quanto você já consegue enxergar o que faz, no momento em que faz, e decidir de propósito qual resultado quer produzir.',
  A: 'Você já levou o método para a prática em várias competências diferentes, e isso costuma acontecer mais devagar do que aconteceu com você. A distância entre entender um conceito e usá-lo numa situação real é onde a maioria das pessoas para. Você atravessou essa distância mais de uma vez. O trabalho agora não é aprender mais, e sim continuar escolhendo de propósito, especialmente nos dias em que o automático quiser voltar. Isso não termina, porque não somos máquinas. É um cuidado que se mantém.',
  B: 'Em várias competências, você já percebe os seus padrões enquanto eles acontecem. Esse é o ponto de virada de qualquer mudança de comportamento, porque ninguém escolhe diferente sem antes enxergar o que está fazendo. O passo que falta é o mais simples e o mais difícil ao mesmo tempo: agir. Escolha uma situação concreta e use o caminho, mesmo sem se sentir totalmente pronto(a). A prontidão costuma chegar depois do primeiro uso, e raramente antes dele.',
  C: 'O movimento começou. Em algumas competências, você já percebe o padrão com mais clareza do que antes, e isso é o que importa neste momento. Mudança não acontece nas seis competências ao mesmo tempo, e tentar isso costuma dispersar a atenção. Escolha a competência que mais te custa hoje e concentre o seu esforço nela. Quando ela avançar, repita o mesmo processo com a próxima.',
  D: 'O movimento ainda está no início, e isso não é fracasso. A mudança de um padrão de comportamento começa devagar, primeiro pela consciência do que se faz, e só depois pela mudança da ação. Escolha uma única competência, concentre a sua atenção apenas nela, e refaça esta medição depois. Quando o foco se estreita, o avanço aparece.',
  ADENDO_NAO_VIVEU: 'Observação: em várias competências, você não passou por situações que ativassem aquele padrão recentemente. Isso reduz o que dá para medir agora, mas não muda o que você aprendeu. O caminho continua disponível para quando essas situações aparecerem.',
  FECHAMENTO: 'Nada aqui descreve quem você é. Descreve o que você tem repetido. E o que se repete, quando é trazido à consciência, passa a poder ser escolhido.',
}

// Rodapé do relatório do reteste (o laboratório já terminou).
export const RODAPE = 'Isto descreve um padrão de comportamento, não quem você é. Padrões mudam com consciência e prática constante.'

// BLOCO 4 — "O caminho": quadro fixo por competência (4 passos do protocolo).
// Aparece sempre, em todos os blocos do relatório. NÃO aparece no questionário.
export const CAMINHO = {
  comunicacao_assertiva: {
    protocolo: 'PAUSA · ALVO · DIZ · SUSTENTA',
    passos: [
      { nome: 'PAUSA', texto: 'Percebe o que passou na sua cabeça e corta o automático.' },
      { nome: 'ALVO', texto: 'Pergunta o que você quer que aconteça ali, afinal a sua comunicação precisa estar alinhada com o objetivo final, e não com o que você está sentindo no momento.' },
      { nome: 'DIZ', texto: 'Fala direto e curto, para a pessoa certa: como você vê e o que você pensa ou precisa.' },
      { nome: 'SUSTENTA', texto: 'Sustenta o que você disse. Não recua se a pessoa reagir mal, e não repete até convencer. Dizer uma vez, com calma, é suficiente.' },
    ],
  },
  maturidade_emocional: {
    protocolo: 'PERCEBE · NOMEIA · SEPARA · ESCOLHE',
    passos: [
      { nome: 'PERCEBE', texto: 'Reconhece que a emoção chegou. Não nega, não engole, não dispara.' },
      { nome: 'NOMEIA', texto: 'Dá nome ao que está sentindo. É medo, raiva, vergonha? Nomear desativa o automático.' },
      { nome: 'SEPARA', texto: 'Separa o que aconteceu do que você interpretou. Fato e interpretação não são a mesma coisa.' },
      { nome: 'ESCOLHE', texto: 'Responde com intenção, proporcional ao fato, e não à emoção.' },
    ],
  },
  foco_resultado_produtividade: {
    protocolo: 'PARA · ELEGE · FAZ · FECHA',
    passos: [
      { nome: 'PARA', texto: 'Interrompe o automático de fazer mais. Sai do piloto da ocupação.' },
      { nome: 'ELEGE', texto: 'Pergunta o que realmente move o resultado ali. Escolhe uma coisa.' },
      { nome: 'FAZ', texto: 'Executa o que elegeu, sem desviar, sem encontrar uma nova prioridade a cada hora.' },
      { nome: 'FECHA', texto: 'Conclui e fecha o ciclo, porque o resultado só existe quando chega ao fim.' },
    ],
  },
  visao_sistemica: {
    protocolo: 'AMPLIA · CONECTA · MEDE · AGE',
    passos: [
      { nome: 'AMPLIA', texto: 'Sai da própria caixa e pergunta quem mais é afetado por isso.' },
      { nome: 'CONECTA', texto: 'Liga as peças: como o que eu faço aqui impacta ali?' },
      { nome: 'MEDE', texto: 'Antes de agir, mede a consequência, e pergunta se aquilo é seu para resolver ou seu para trazer a quem é dono.' },
      { nome: 'AGE', texto: 'Age considerando o todo, e não só a sua parte. Quando o problema não é seu, mostra o que você viu a quem é dono dele e devolve a decisão. Agir ou não sobre aquilo é escolha dessa pessoa, não sua.' },
    ],
  },
  direcao_futuro: {
    protocolo: 'OLHA · DECIDE · PLANEJA · MOVE',
    passos: [
      { nome: 'OLHA', texto: 'Levanta a cabeça do seu status atual. O lugar onde você está hoje é ponto de partida, e não o limite de onde você pode chegar.' },
      { nome: 'DECIDE', texto: 'Escolhe uma direção. Ela não precisa ser perfeita, precisa ser uma. Se tiver dificuldade, use os quatro filtros: o que te dá energia, onde você já tem competência natural, o que você não quer mais, e o que escolheria se soubesse que não ia falhar.' },
      { nome: 'PLANEJA', texto: 'Transforma a decisão em um próximo passo claro e concreto.' },
      { nome: 'MOVE', texto: 'Dá o primeiro passo. Não quando estiver pronto, e sim agora. É possível ficar pronto enquanto percorre o caminho.' },
    ],
  },
  protagonismo_profissional: {
    protocolo: 'ASSUME · PEDE · CRIA · SUSTENTA',
    passos: [
      { nome: 'ASSUME', texto: 'Para de esperar que alguém perceba, ofereça ou resolva. A responsabilidade pela sua carreira e pelo espaço onde você atua é sua.' },
      { nome: 'PEDE', texto: 'Pede o que precisa, porque pedir não é se humilhar. Pedir mais detalhes quando não entendeu tudo não te faz menor. E pedir ajuda quando não sabe também é protagonismo.' },
      { nome: 'CRIA', texto: 'Cria a situação que você quer e propõe solução, dentro do que você domina. Quando passar do seu limite, busca apoio.' },
      { nome: 'SUSTENTA', texto: 'Mantém no tempo, sem depender de aplauso para continuar. Você e os seus próprios objetivos precisam ser os seus maiores motivadores.' },
    ],
  },
}
