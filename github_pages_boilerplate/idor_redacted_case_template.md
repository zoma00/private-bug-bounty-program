# Redacted Access-Control Case Template

Use this template for portfolio proof when disclosure rules prevent public technical details.

## 1) Authorization and Scope
- Testing authorization: [Authorized / In Scope]
- Program type: [Private Bug Bounty / Internal Security Review]
- Scope boundaries followed: [Yes]
- Testing window: [Month YYYY]

## 2) Finding Summary (High Level)
- Class: Access-control weakness (object ownership validation)
- Surface: [Generic feature area, no endpoint names]
- Short description:
  - During authorized testing, an access-control gap allowed cross-account action on an object that should be owner-restricted.

## 3) Impact Framing
- Potential impact:
  - Unauthorized state change on another user-owned object
  - Privacy and trust risk
- Severity rationale:
  - [Low/Medium/High based on exploitability and affected object sensitivity]

## 4) Validation Quality
- Validation approach:
  - Controlled test accounts only
  - Reproducible request sequence
  - Confirmation and retest to avoid false positives
- Evidence quality:
  - Clear timeline
  - Sanitized proof notes
  - Reproducibility checklist completed

## 5) Remediation Guidance
- Enforce server-side ownership checks before state change
- Verify user-to-object relationship on every sensitive action
- Add negative authorization tests to CI
- Add audit logs for sensitive object-level mutations

## 6) Outcome
- Submission status: [Submitted]
- Triage result: [Duplicate / Accepted / Informational]
- Notes:
  - The value demonstrated is process quality, reproducibility, and remediation support.

## 7) What Is Intentionally Redacted
- Program/company identifiers
- Endpoint names and parameters
- Object identifiers and payload details
- Report IDs and private links
- Raw request/response screenshots

## 8) Engineering Hardening Checklist
- [ ] Ownership policy documented for sensitive objects
- [ ] Authorization middleware and policy checks reviewed
- [ ] Regression tests added for cross-account access attempts
- [ ] Logging/alerting added for denied object-level actions
- [ ] Post-fix verification completed
