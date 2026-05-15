# Redacted Case Study: Private Program Access-Control Finding (Duplicate)

## Snapshot
- Engagement type: Private bug bounty program
- Authorization: In-scope and authorized testing only
- Finding class: Object-level access-control weakness
- Status: Submitted and triaged as duplicate

## Executive Summary
During authorized testing, I validated account-level authorization boundaries and identified a cross-account state-change condition on an object expected to be owner-restricted. I reported the issue with reproducible steps and remediation guidance. The report was triaged as duplicate, but the process quality and evidence discipline were strong.

## What I Tested
- Ownership enforcement on account-linked objects
- State-changing actions that should require strict owner checks
- Cross-account behavior using controlled test identities

## Validation Method
1. Set up controlled test accounts within approved scope.
2. Established baseline owner-only behavior for object actions.
3. Performed controlled cross-account request variations.
4. Confirmed reproducibility across repeated runs.
5. Logged sanitized evidence and prepared a concise report.

## Impact Framing
- Unauthorized changes to another user-owned object were possible under specific conditions.
- Business risk centered on user trust and integrity of account-scoped settings.
- The class of issue indicates a need for stronger server-side ownership validation.

## Remediation Guidance Submitted
- Enforce server-side owner checks on every sensitive object action.
- Validate user-to-object relationship before applying state changes.
- Add negative authorization tests for cross-account attempts.
- Add audit logging for denied object-level mutations.

## Triage Outcome
- Program result: Duplicate.
- Professional signal: Reproducibility quality, clear impact framing, and remediation-first reporting.

## Disclosure and Redaction Notice
This case study intentionally excludes program identifiers, endpoint details, payloads, report links, and raw request/response artifacts to comply with disclosure policy boundaries.

## Reusable Lessons
- Access-control testing should prioritize object ownership paths, not only role checks.
- Reproducibility and clean reporting are core differentiators even for duplicate outcomes.
- Remediation guidance should be implementation-ready for engineering teams.
