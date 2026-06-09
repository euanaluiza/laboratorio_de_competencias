import {
  ASSESSMENT_META,
  COMPETENCIES,
  CONSENT_TEXT,
  CONSENT_VERSION,
  INTERPRETATION_BANDS,
  QUESTIONS,
} from '../data/assessment.js'

const VALID_ZONES = new Set(['Z1', 'Z2', 'Z3'])

function findQuestionAnswer(question, answers) {
  return answers[question.questionNumber] || null
}

function normalizeSelectedOption(answer, fields) {
  const selectedOption = answer?.selectedOption

  if (!selectedOption) {
    return null
  }

  return fields.reduce((normalizedOption, field) => {
    return {
      ...normalizedOption,
      [field]: selectedOption[field],
    }
  }, {})
}

function normalizeSituationAnswer(question, answer) {
  return {
    questionNumber: question.questionNumber,
    questionType: question.questionType,
    competencyKey: question.competencyKey,
    selectedOption: normalizeSelectedOption(answer, ['value', 'label', 'zone']),
  }
}

function normalizeThoughtAnswer(question, answer) {
  return {
    questionNumber: question.questionNumber,
    questionType: question.questionType,
    competencyKey: question.competencyKey,
    statements: question.statements.map((statement) => {
      const statementAnswer = answer?.statements?.find((item) => item.id === statement.id)
      const frequency = statementAnswer?.frequency

      return {
        id: statementAnswer?.id || statement.id,
        text: statementAnswer?.text || statement.text,
        zone: statementAnswer?.zone || statement.zone,
        frequency: frequency
          ? {
              value: frequency.value,
              label: frequency.label,
            }
          : null,
      }
    }),
  }
}

function normalizeValueAnswer(question, answer) {
  return {
    questionNumber: question.questionNumber,
    questionType: question.questionType,
    competencyKey: question.competencyKey,
    selectedOption: normalizeSelectedOption(answer, ['value', 'label', 'mappedValue']),
  }
}

function normalizeOpenAnswer(question, answer) {
  return {
    questionNumber: question.questionNumber,
    questionType: question.questionType,
    answerText: typeof answer?.answerText === 'string' ? answer.answerText.trim() : '',
  }
}

function normalizeAnswer(question, answers) {
  const answer = findQuestionAnswer(question, answers)
  const normalizers = {
    situation: normalizeSituationAnswer,
    thought: normalizeThoughtAnswer,
    value: normalizeValueAnswer,
    open: normalizeOpenAnswer,
  }

  return normalizers[question.questionType](question, answer)
}

function calculateDirection(z1Count, z2Count, z3Count) {
  if (z3Count === 3) {
    return 'funcional'
  }

  // Oscilante = erros caíram pros dois lados; dominante = todos num lado só.
  if (z1Count >= 1 && z2Count >= 1) {
    return 'oscilante'
  }

  if (z2Count === 0) {
    return 'recuo'
  }

  return 'excesso'
}

function calculateCompetencyResult(competency, answers) {
  const situationQuestions = QUESTIONS.filter((question) => {
    return question.competencyKey === competency.key && question.questionType === 'situation'
  })

  const selectedZones = situationQuestions
    .map((question) => findQuestionAnswer(question, answers)?.selectedOption?.zone)
    .filter((zone) => VALID_ZONES.has(zone))

  const z1Count = selectedZones.filter((zone) => zone === 'Z1').length
  const z2Count = selectedZones.filter((zone) => zone === 'Z2').length
  const z3Count = selectedZones.filter((zone) => zone === 'Z3').length

  return {
    competencyKey: competency.key,
    level: z3Count * 2,
    z1Count,
    z2Count,
    z3Count,
    direction: calculateDirection(z1Count, z2Count, z3Count),
  }
}

function calculateCompetencyResults(answers) {
  return COMPETENCIES.reduce((byCompetency, competency) => {
    return {
      ...byCompetency,
      [competency.key]: calculateCompetencyResult(competency, answers),
    }
  }, {})
}

function normalizeParticipant(participant) {
  return {
    fullName: participant.fullName.trim(),
    email: participant.email.trim(),
  }
}

function createSubmissionPayload(participant, answers, byCompetency) {
  return {
    participant: normalizeParticipant(participant),
    assessment: ASSESSMENT_META,
    results: {
      byCompetency,
    },
    answers,
    consent: {
      accepted: participant.consentAccepted,
      consentText: CONSENT_TEXT,
      consentVersion: CONSENT_VERSION,
      privacyNoticeUrl: '',
    },
  }
}

/**
 * Builds the v2 competency results, normalized answers, and API payload.
 *
 * Example:
 * createAssessmentResult(participant, answers).payload
 */
export function createAssessmentResult(participant, answers) {
  const normalizedAnswers = QUESTIONS.map((question) => normalizeAnswer(question, answers))
  const byCompetency = calculateCompetencyResults(answers)

  return {
    results: {
      byCompetency,
    },
    answers: normalizedAnswers,
    payload: createSubmissionPayload(participant, normalizedAnswers, byCompetency),
  }
}

// Kept temporarily because the current result screen still imports this v1 helper.
export function getInterpretationBand(score) {
  return INTERPRETATION_BANDS.find((band) => {
    return score >= band.min && score <= band.max
  })
}
