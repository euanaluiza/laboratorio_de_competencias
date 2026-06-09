BEGIN;

-- RECRIAÇÃO DAS TABELAS DO ASSESSMENT

DROP TABLE IF EXISTS assessment_consents CASCADE;
DROP TABLE IF EXISTS assessment_answers CASCADE;
DROP TABLE IF EXISTS assessment_submissions CASCADE;
DROP TABLE IF EXISTS assessment_participants CASCADE;

CREATE TABLE assessment_participants (
  id bigserial PRIMARY KEY,
  full_name text NOT NULL CHECK (btrim(full_name) <> ''),
  email text NOT NULL CHECK (btrim(email) <> ''),
  class_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE assessment_submissions (
  id bigserial PRIMARY KEY,
  participant_id bigint NOT NULL
    REFERENCES assessment_participants(id)
    ON DELETE CASCADE,
  assessment_slug text NOT NULL CHECK (btrim(assessment_slug) <> ''),
  assessment_version text NOT NULL DEFAULT '2.0',
  results_by_competency jsonb NOT NULL,
  completed_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT assessment_submissions_version_v2_check
    CHECK (assessment_version = '2.0'),
  CONSTRAINT assessment_submissions_results_object_check
    CHECK (jsonb_typeof(results_by_competency) = 'object')
);

CREATE TABLE assessment_answers (
  id bigserial PRIMARY KEY,
  submission_id bigint NOT NULL
    REFERENCES assessment_submissions(id)
    ON DELETE CASCADE,
  question_number integer NOT NULL,
  question_type text NOT NULL,
  competency_key text,
  selected_option jsonb,
  statements jsonb,
  answer_text text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT assessment_answers_question_number_check
    CHECK (question_number BETWEEN 1 AND 32),
  CONSTRAINT assessment_answers_question_type_check
    CHECK (question_type IN ('situation', 'thought', 'value', 'open')),
  CONSTRAINT assessment_answers_competency_key_check
    CHECK (
      competency_key IS NULL
      OR competency_key IN (
        'comunicacao_assertiva',
        'maturidade_emocional',
        'foco_resultado_produtividade',
        'visao_sistemica',
        'direcao_futuro',
        'protagonismo_profissional'
      )
    ),
  CONSTRAINT assessment_answers_payload_by_type_check
    CHECK (
      (
        question_type IN ('situation', 'value')
        AND competency_key IS NOT NULL
        AND selected_option IS NOT NULL
        AND jsonb_typeof(selected_option) = 'object'
        AND statements IS NULL
        AND answer_text IS NULL
      )
      OR (
        question_type = 'thought'
        AND competency_key IS NOT NULL
        AND selected_option IS NULL
        AND statements IS NOT NULL
        AND jsonb_typeof(statements) = 'array'
        AND jsonb_array_length(statements) = 2
        AND answer_text IS NULL
      )
      OR (
        question_type = 'open'
        AND competency_key IS NULL
        AND selected_option IS NULL
        AND statements IS NULL
        AND answer_text IS NOT NULL
        AND btrim(answer_text) <> ''
      )
    ),
  CONSTRAINT assessment_answers_submission_question_unique
    UNIQUE (submission_id, question_number)
);

CREATE TABLE assessment_consents (
  id bigserial PRIMARY KEY,
  submission_id bigint NOT NULL
    REFERENCES assessment_submissions(id)
    ON DELETE CASCADE,
  consent_text text NOT NULL CHECK (btrim(consent_text) <> ''),
  consent_version text NOT NULL CHECK (btrim(consent_version) <> ''),
  accepted boolean NOT NULL,
  accepted_at timestamptz NOT NULL DEFAULT now(),
  privacy_notice_url text,
  ip_address inet,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT assessment_consents_accepted_check
    CHECK (accepted),
  CONSTRAINT assessment_consents_submission_unique
    UNIQUE (submission_id)
);

CREATE INDEX assessment_participants_email_lower_idx
  ON assessment_participants (lower(email));

CREATE INDEX assessment_participants_class_name_idx
  ON assessment_participants (class_name);

CREATE INDEX assessment_submissions_participant_id_idx
  ON assessment_submissions (participant_id);

CREATE INDEX assessment_submissions_completed_at_idx
  ON assessment_submissions (completed_at);

CREATE INDEX assessment_answers_submission_id_idx
  ON assessment_answers (submission_id);

CREATE INDEX assessment_answers_competency_key_idx
  ON assessment_answers (competency_key);

CREATE INDEX assessment_answers_question_type_idx
  ON assessment_answers (question_type);

CREATE INDEX assessment_consents_submission_id_idx
  ON assessment_consents (submission_id);

COMMIT;
