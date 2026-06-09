import { profileTexts } from './profileTexts.js'

const DIRECTION_SET = new Set(['funcional', 'recuo', 'excesso', 'oscilante'])
const NON_FUNCTIONAL_DIRECTION_SET = new Set(['recuo', 'excesso', 'oscilante'])
const TWO_FUNCTIONAL_DIRECTION_SET = new Set(['recuo', 'excesso'])

function assertZ3Count(z3Count) {
  if (!Number.isInteger(z3Count) || z3Count < 0 || z3Count > 3) {
    throw new Error('z3Count deve ser um número inteiro entre 0 e 3.')
  }
}

function assertDirection(direction) {
  if (!DIRECTION_SET.has(direction)) {
    throw new Error(
      'direction deve ser funcional, recuo, excesso ou oscilante.',
    )
  }
}

export function getProfileKey({ z3Count, direction } = {}) {
  assertZ3Count(z3Count)
  assertDirection(direction)

  if (z3Count === 3) {
    if (direction !== 'funcional') {
      throw new Error('z3Count 3 exige direction funcional.')
    }

    return 'funcional_3'
  }

  if (direction === 'funcional') {
    throw new Error('direction funcional exige z3Count 3.')
  }

  if (z3Count === 2 && !TWO_FUNCTIONAL_DIRECTION_SET.has(direction)) {
    throw new Error('z3Count 2 aceita somente direction recuo ou excesso.')
  }

  if (z3Count <= 1 && !NON_FUNCTIONAL_DIRECTION_SET.has(direction)) {
    throw new Error(
      'z3Count 0 ou 1 aceita somente direction recuo, excesso ou oscilante.',
    )
  }

  return `${direction}_${z3Count}`
}

export function selectCompetencyProfile({
  competencyKey,
  z3Count,
  direction,
} = {}) {
  const profileKey = getProfileKey({ z3Count, direction })
  const profile = profileTexts[competencyKey]?.[profileKey]

  if (!profile) {
    return { competencyKey, profileKey, isPlaceholder: true }
  }

  return { competencyKey, profileKey, isPlaceholder: false, ...profile }
}
