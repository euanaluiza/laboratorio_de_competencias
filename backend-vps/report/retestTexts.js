// Textos fixos do relatório do reteste (verbatim da spec). Coordenador-facing.
// O literal [competência] em COMECOU é substituído pelo título da competência.

export const COMECOU = {
  sub: 'No diagnóstico inicial, o seu padrão em [competência] tendia à subexpressão — o lado de recuar, engolir, não se posicionar.',
  ff: 'No diagnóstico inicial, o seu padrão em [competência] tendia à falsa força — o lado de forçar, reagir, se impor.',
  osc: 'No diagnóstico inicial, o seu padrão em [competência] oscilava entre recuar e forçar, sem um eixo estável.',
  func: 'No diagnóstico inicial, [competência] já era um ponto funcional seu — você tendia a agir de forma proporcional.',
}

// 1ª frase de "Onde você está agora", por faixa de cp_media (inclusive nos limites).
export const AGORA_CP = [
  { min: 4.0, max: 5.0, text: 'Três semanas depois, você relata uma consciência alta desse padrão e se sente preparado(a) pra agir sobre ele.' },
  { min: 3.0, max: 3.9, text: 'Três semanas depois, a sua consciência desse padrão cresceu e a sua prontidão pra agir está se formando.' },
  { min: 2.0, max: 2.9, text: 'Três semanas depois, você começou a perceber esse padrão, ainda que a prontidão pra agir esteja no início.' },
  { min: 1.0, max: 1.9, text: 'Três semanas depois, esse padrão ainda é difícil de perceber no momento em que acontece — e tudo bem, é o que leva mais tempo.' },
]

export const AGORA_APLICACAO = {
  aplicou_forte: 'E o mais importante: você já usou o caminho funcional mais de uma vez numa situação real. Isso é o que fixa a mudança.',
  aplicou: 'E você já usou o caminho funcional uma vez numa situação real — o primeiro uso é o que prova pra você mesmo(a) que funciona.',
  tentou: 'Você tentou usar o caminho e não conseguiu na hora — isso não é falha, é parte do processo. Mesmo percebendo só depois que a situação passou, você já está treinando o seu olhar. Com a repetição, esse perceber vai chegando cada vez mais cedo, até acontecer no próprio momento da situação.',
  nao_usou: 'Você ainda não usou o caminho numa situação real. O próximo passo é esse: transformar consciência em ação.',
  nao_viveu: 'Você não relatou situações dessa natureza nas últimas semanas — o que é normal. Quando aparecer, o caminho está pronto.',
}

export const MOVIMENTO = {
  M1: 'Repare no movimento: você saiu de um padrão automático e, em três semanas, passou a enxergá-lo enquanto ele acontece. Essa é a mudança que mais importa — porque ninguém muda um comportamento que não percebe estar tendo. Primeiro a pessoa passa a perceber o padrão; depois disso, com a prática, consegue mudar o comportamento. Você já deu esse primeiro passo, e a sua percepção está firme.',
  M2: 'Você não só passou a perceber o padrão — já agiu de forma diferente numa situação real. Isso é raro em três semanas. A maioria das pessoas leva mais tempo pra passar de perceber o padrão para agir de forma diferente. Você já fez essa passagem pelo menos uma vez.',
  M3: 'O movimento aqui ainda é inicial — e isso é honesto, não é fracasso. Essa competência provavelmente é a que mais te custa, e as que mais custam levam mais tempo. Recomendação concreta: escolha ESTA competência como o seu único foco nos próximos 21 dias. Trabalhar uma competência de cada vez traz mais resultado do que tentar melhorar as seis ao mesmo tempo.',
  M4: 'Essa já era uma força sua no início, e o reteste confirma: você mantém consciência e prontidão altas. O trabalho aqui não é desenvolver — é sustentar sob pressão e usar essa força pra puxar as competências que ainda estão se formando.',
  M5: 'Essa era uma força sua no diagnóstico inicial, mas no reteste a sua percepção dela aparece mais baixa. Pode ser que, por essa competência já vir naturalmente pra você, você tenha parado de prestar atenção nela. Vale voltar a observar esse comportamento de forma consciente.',
  M6: 'Sem situações dessa natureza nas últimas semanas, não dá pra medir movimento aqui — e isso é normal. Mantenha o caminho no radar pra quando a situação aparecer.',
  // FALLBACK: combinações que a spec não cobre (desvio 2.5<=cp<3.5 sem aplicação; func 3.0<=cp<3.5).
  // Texto provisório — CONFIRMAR com a Ana antes do fim.
  FALLBACK: 'O movimento aqui está em curso: você já percebe esse padrão em parte das situações e começa a se preparar pra agir sobre ele. O próximo passo é levar essa percepção para o momento em que a situação acontece e transformá-la em ação — e isso vem com a prática dos próximos 21 dias.',
}

export const SINTESE = {
  A: 'Em três semanas, você já usou o método na prática em várias competências diferentes. Isso é mais rápido do que a maioria das pessoas consegue — normalmente leva mais tempo pra passar do que se aprendeu para o que se faz no dia a dia. O trabalho agora é continuar usando com frequência, pra não perder o que já conquistou.',
  B: 'O reteste mostra um avanço claro de consciência em várias competências. Você está na fase mais importante da mudança: já percebe os padrões enquanto eles acontecem. O próximo passo é transformar esse perceber em agir de forma diferente — e isso vem com a prática dos próximos 21 dias.',
  C: 'O reteste mostra que o movimento começou — em algumas competências você já percebe o padrão com mais clareza. Mudança não acontece nas seis ao mesmo tempo, e tudo bem. Escolha a competência que mais te custa hoje e foque só nela nos próximos 21 dias. Depois que ela avançar, você repete o mesmo processo com a próxima.',
  D: 'O reteste sugere que o movimento ainda está no início. Isso não é fracasso — três semanas é pouco tempo, e a mudança real começa devagar, primeiro pela consciência do padrão e só depois pela mudança do comportamento. Escolha UMA competência, aplique o plano de 21 dias focando só nela, e refaça esta medição depois. Quando você concentra a atenção numa competência de cada vez, o avanço aparece.',
  NOTA_NAO_VIVEU: 'Obs: em várias competências, você não passou por situações que ativassem aquele padrão nessas semanas. Isso reduz o que dá pra medir agora, mas não muda o que você aprendeu — o caminho continua disponível pra quando essas situações aparecerem.',
}
