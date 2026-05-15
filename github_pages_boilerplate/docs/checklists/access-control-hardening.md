# Access-Control Hardening Checklist

Use this checklist after fixing object-level authorization weaknesses.

## Policy and Design
- [ ] Document ownership rules for each sensitive object type.
- [ ] Define which actions require owner-only enforcement.
- [ ] Map trust boundaries between client input and server authorization decisions.

## Backend Enforcement
- [ ] Apply server-side ownership checks for read and write actions.
- [ ] Never rely on client-supplied object identifiers without authorization validation.
- [ ] Centralize authorization logic to avoid route-by-route drift.

## Test Coverage
- [ ] Add negative tests for cross-account access attempts.
- [ ] Add regression tests for all state-changing object endpoints.
- [ ] Verify consistent denial behavior and status codes.

## Observability
- [ ] Log denied object-level actions with non-sensitive context.
- [ ] Monitor anomaly patterns for repeated cross-account attempts.
- [ ] Track post-fix verification in release notes.

## Verification
- [ ] Re-run reproduction sequence after patch.
- [ ] Confirm no bypass through alternate endpoints or methods.
- [ ] Obtain security and engineering sign-off.
