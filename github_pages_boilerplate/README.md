# Backend Security Portfolio Site

A ready-to-publish static portfolio for backend security consulting.

The site highlights:
- API and auth hardening services
- Redacted security case studies
- Responsible disclosure posture
- Practical remediation and verification workflow

## Project Structure
- index.html
- case-studies.html
- security-findings.html
- styles.css
- script.js
- idor_redacted_case_template.md
- docs/case-studies/redacted-access-control-case.md
- docs/checklists/access-control-hardening.md
- docs/evidence/redacted/README.md

## Local Preview
From this folder:

```bash
python3 -m http.server 8080
```

Open:
- http://localhost:8080

## After You Ran git init
You already initialized Git for this project. Next steps:

```bash
git add .
git commit -m "Initial portfolio site with redacted security case studies"
```

Create a new GitHub repo, then connect and push:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on GitHub Pages

### Option A: User Site
1. Create a repository named <your-username>.github.io.
2. Push this project to that repository.
3. Open https://<your-username>.github.io.

### Option B: Project Site
1. Push this project to a normal repository (example: security-consulting-page).
2. Open repository Settings -> Pages.
3. Set source to Deploy from a branch.
4. Select main branch and /(root).
5. Save and wait for deployment.

## IDOR Case Study Package (Disclosure-Safe)
Use these files as your publish-safe package:
- docs/case-studies/redacted-access-control-case.md
- docs/checklists/access-control-hardening.md
- docs/evidence/redacted/README.md

What this package demonstrates:
- Authorization and scope discipline
- Reproducibility and reporting quality
- Impact framing and remediation depth
- Professional triage handling, including duplicate outcomes

## Public Disclosure Guardrails
Allowed in public repos:
- Redacted summaries and high-level risk framing
- Remediation patterns and engineering checklists
- Process quality signals (validation, triage, verification)

Not allowed in public repos (unless explicit written approval exists):
- Company or private program identifiers
- Endpoint names, parameters, object IDs, payloads
- Private report links or report IDs
- Raw request/response logs or exploit walkthroughs

## Replace Before Publishing
Update these placeholders:
- Contact email in index.html
- LinkedIn URL in index.html
- GitHub profile URL in index.html
- Proof section links in index.html

## Optional: Custom Domain
Add a file named CNAME in this folder with your domain value.
