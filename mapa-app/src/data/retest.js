export const RETEST_CONSENT_VERSION = '1.0'
export const RETEST_CONSENT_TEXT =
  'Autorizo o uso das minhas respostas deste reteste para acompanhamento pedagógico e individual, nos mesmos termos (LGPD) que aceitei no questionário inicial.'

export const RETEST_COMPETENCY_KEYS = [
  'comunicacao_assertiva',
  'maturidade_emocional',
  'foco_resultado_produtividade',
  'visao_sistemica',
  'direcao_futuro',
  'protagonismo_profissional',
]

export const RETEST_CONSCIENCIA_SCALE = [
  { value: 1, label: 'Não percebo' },
  { value: 2, label: 'Percebo pouco' },
  { value: 3, label: 'Às vezes percebo' },
  { value: 4, label: 'Percebo na maioria das vezes' },
  { value: 5, label: 'Percebo quase sempre, no momento em que acontece' },
]

export const RETEST_PRONTIDAO_SCALE = [
  { value: 1, label: 'Nada preparado(a)' },
  { value: 2, label: 'Pouco preparado(a)' },
  { value: 3, label: 'Mais ou menos preparado(a)' },
  { value: 4, label: 'Preparado(a)' },
  { value: 5, label: 'Totalmente preparado(a)' },
]

export const RETEST_APLICACAO_ENUNCIADO =
  'Depois do laboratório, você chegou a usar o caminho dessa competência numa situação real?'

export const RETEST_APLICACAO_OPTIONS = [
  { value: 'aplicou_forte', label: 'Sim, mais de uma vez' },
  { value: 'aplicou', label: 'Sim, uma vez' },
  { value: 'tentou', label: 'Tentei, mas não consegui na hora' },
  { value: 'nao_viveu', label: 'Não tive uma situação dessas' },
  { value: 'nao_usou', label: 'Não usei' },
]

export const RETEST_STEPS = [
  {
    key: 'comunicacao_assertiva',
    title: 'Comunicação Assertiva',
    consciencia: 'Hoje, o quanto você percebe, no momento em que acontece, quando está recuando e engolindo o que precisava dizer, ou avançando demais e falando com mais força do que a conversa pedia?',
    prontidao: 'O quanto você se sente preparado(a) para usar o PAUSA · ALVO · DIZ · SUSTENTA quando a situação aparece?',
  },
  {
    key: 'maturidade_emocional',
    title: 'Maturidade Emocional',
    consciencia: 'Hoje, o quanto você percebe, no momento em que acontece, quando uma emoção está governando a sua reação, seja fazendo você engolir o que sente, seja fazendo você reagir no impulso?',
    prontidao: 'O quanto você se sente preparado(a) para usar o PERCEBE · NOMEIA · SEPARA · ESCOLHE quando a emoção chega?',
  },
  {
    key: 'foco_resultado_produtividade',
    title: 'Foco em Resultado',
    consciencia: 'Hoje, o quanto você percebe, no momento em que acontece, quando está dispersando a sua energia em muitas tarefas ao mesmo tempo, ou atropelando processos e pessoas para entregar rápido?',
    prontidao: 'O quanto você se sente preparado(a) para usar o PARA · ELEGE · FAZ · FECHA quando tudo parece urgente?',
  },
  {
    key: 'visao_sistemica',
    title: 'Visão Sistêmica',
    consciencia: 'Hoje, o quanto você percebe, no momento em que acontece, quando está se fechando só na sua parte e não olhando para o todo, ou querendo controlar e entrar no que é responsabilidade dos outros?',
    prontidao: 'O quanto você se sente preparado(a) para usar o AMPLIA · CONECTA · MEDE · AGE antes de agir?',
  },
  {
    key: 'direcao_futuro',
    title: 'Direção de Futuro',
    consciencia: 'Hoje, o quanto você percebe, no momento em que acontece, quando está estagnando sem decidir o seu próximo passo, ou mudando de direção por impulso, sem sustentar o que começou?',
    prontidao: 'O quanto você se sente preparado(a) para usar o OLHA · DECIDE · PLANEJA · MOVE diante de uma decisão?',
  },
  {
    key: 'protagonismo_profissional',
    title: 'Protagonismo',
    consciencia: 'Hoje, o quanto você percebe, no momento em que acontece, quando está esperando que alguém resolva ou te reconheça, ou se forçando e agindo além do que domina para provar o seu valor?',
    prontidao: 'O quanto você se sente preparado(a) para usar o ASSUME · PEDE · CRIA · SUSTENTA quando precisa se posicionar ou agir?',
  },
]
