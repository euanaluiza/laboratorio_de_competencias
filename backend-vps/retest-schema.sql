BEGIN;

CREATE TABLE IF NOT EXISTS retest_submissions (
  id                      bigserial PRIMARY KEY,
  initial_submission_id   bigint NOT NULL REFERENCES assessment_submissions(id) ON DELETE CASCADE,
  participant_id          bigint NOT NULL REFERENCES assessment_participants(id) ON DELETE CASCADE,
  responses_by_competency jsonb NOT NULL,
  consent_accepted        boolean NOT NULL,
  consent_version         text NOT NULL,
  completed_at            timestamptz NOT NULL DEFAULT now(),
  created_at              timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT retest_submissions_responses_object_check
    CHECK (jsonb_typeof(responses_by_competency) = 'object'),
  CONSTRAINT retest_submissions_consent_check CHECK (consent_accepted)
);

CREATE INDEX IF NOT EXISTS retest_submissions_initial_submission_id_idx
  ON retest_submissions (initial_submission_id);
CREATE INDEX IF NOT EXISTS retest_submissions_participant_id_idx
  ON retest_submissions (participant_id);

COMMIT;
