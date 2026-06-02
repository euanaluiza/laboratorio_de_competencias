import {
  ASSESSMENT_META,
  COMPETENCIES,
  CONSENT_TEXT,
  CONSENT_VERSION,
  INTERPRETATION_BANDS,
  QUESTIONS,
} from '../data/assessment.js'

function findQuestionAnswer(question, answers) {
  const answer = answers[question.questionNumber]

  if (question.questionType === 'multi') {
    return Array.isArray(answer) ? answer : []
  }

  return typeof answer === 'string' ? answer.trim() : ''
}

function createSingleAnswerPayload(question, answer) {
  const isMatureAnswer = answer === question.matureOption

  return {
    selectedOptions: answer ? [answer] : [],
    answerText: null,
    behavioralClassification: isMatureAnswer ? 'maduro' : 'em_desenvolvimento',
    isMatureAnswer,
  }
}

function createMultiAnswerPayload(answer) {
  return {
    selectedOptions: answer,
    answerText: null,
    behavioralClassification: 'qualitativo',
    isMatureAnswer: false,
  }
}

function createOpenAnswerPayload(answer) {
  return {
    selectedOptions: [],
    answerText: answer,
    behavioralClassification: 'reflexao',
    isMatureAnswer: false,
  }
}

function createAnswerPayload(question, answers) {
  const answer = findQuestionAnswer(question, answers)
  const answerPayloadByType = {
    single: () => createSingleAnswerPayload(question, answer),
    multi: () => createMultiAnswerPayload(answer),
    open: () => createOpenAnswerPayload(answer),
  }

  return {
    questionNumber: question.questionNumber,
    questionType: question.questionType,
    competencyKey: question.competencyKey,
    ...answerPayloadByType[question.questionType](),
  }
}

function calculateCompetencyScore(competency, answers) {
  const scoredQuestions = QUESTIONS.filter((question) => {
    return question.competencyKey === competency.key && question.questionType === 'single'
  })

  const matureAnswers = scoredQuestions.filter((question) => {
    return findQuestionAnswer(question, answers) === question.matureOption
  })

  return Math.round((matureAnswers.length / scoredQuestions.length) * 100)
}

function calculateScores(answers) {
  return COMPETENCIES.reduce((scores, competency) => {
    return {
      ...scores,
      [competency.key]: calculateCompetencyScore(competency, answers),
    }
  }, {})
}

function findStrongestCompetency(scores) {
  return COMPETENCIES.reduce((strongest, competency) => {
    return scores[competency.key] > scores[strongest.key] ? competency : strongest
  }, COMPETENCIES[0])
}

function findDevelopmentCompetency(scores) {
  return COMPETENCIES.reduce((development, competency) => {
    return scores[competency.key] < scores[development.key] ? competency : development
  }, COMPETENCIES[0])
}

function createOpenAnswers(answers) {
  return {
    behaviorToChange: findQuestionAnswer({ questionNumber: 31 }, answers),
    difficultSituations: findQuestionAnswer({ questionNumber: 32 }, answers),
  }
}

function createSubmissionPayload(participant, scores, strongest, development, answers) {
  return {
    participant: {
      fullName: participant.fullName.trim(),
      email: participant.email.trim(),
      className: participant.className.trim(),
    },
    consent: {
      accepted: participant.consentAccepted,
      consentVersion: CONSENT_VERSION,
      consentText: CONSENT_TEXT,
      privacyNoticeUrl: '',
    },
    assessment: ASSESSMENT_META,
    scores,
    strongestCompetency: strongest.key,
    developmentCompetency: development.key,
    openAnswers: createOpenAnswers(answers),
    answers: QUESTIONS.map((question) => createAnswerPayload(question, answers)),
  }
}

/**
 * Builds scores, labels, interpretation data, and API payload from current answers.
 *
 * Example:
 * createAssessmentResult(participant, answers).payload
 */
export function createAssessmentResult(participant, answers) {
  const scores = calculateScores(answers)
  const strongestCompetency = findStrongestCompetency(scores)
  const developmentCompetency = findDevelopmentCompetency(scores)

  return {
    scores,
    strongestCompetency,
    developmentCompetency,
    openAnswers: createOpenAnswers(answers),
    answers: QUESTIONS.map((question) => createAnswerPayload(question, answers)),
    payload: createSubmissionPayload(
      participant,
      scores,
      strongestCompetency,
      developmentCompetency,
      answers,
    ),
  }
}

/**
 * Returns the developmental interpretation band for a percentage score.
 *
 * Example:
 * getInterpretationBand(75).label
 */
export function getInterpretationBand(score) {
  return INTERPRETATION_BANDS.find((band) => {
    return score >= band.min && score <= band.max
  })
}
