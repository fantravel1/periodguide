# PeriodGuide.com — Megasite
**A privacy-first, day-by-day period companion that blends modern medical research with multiple traditional/ancestral viewpoints—without woo, fear, or thin “period tracker blog” fluff.**

PeriodGuide.com is designed to fill the market gap between:
- **Trackers** (log dates, weak guidance + insights, often poor privacy),
- **Medical sites** (credible but not intimate, not day-by-day, not personalized),
- **Traditional remedy / ancestral medicine blogs** (valuable culturally, inconsistent evidence + safety guardrails).

We aim to be the first place that feels like:
1) **a daily companion** (day-by-day coaching),
2) **a clinical translator** (evidence-graded guidance),
3) **a culturally respectful library** (multiple traditions, responsibly presented),
4) **privacy-first by design** (anonymous-first, export/delete, no ad trackers).

---

## Core Promise
Your cycle is not “a few days of bleeding.” It’s a **monthly rhythm that influences your body, mood, energy, pain, and performance all month long**—across puberty, adulthood, pregnancy/postpartum, and perimenopause/menopause.

**PeriodGuide.com supports you every day of that rhythm, for every stage of life.**  
Not just when you’re on your period.

---

## Core Experience (Home Page)
The home page is not a blog index. It’s a **tool-first dashboard** that immediately provides:

### 1) “Where am I in my cycle?” (Daily Cycle Day Finder)
A frictionless entry point for real humans.

Users can:
- select the **day they believe they’re on** (Day 1–Day 35+)
- choose their best guess of phase (optional)
- enter symptoms (optional)

The site then delivers:
- **Today’s Guide** (dynamic daily plan)
- the **top 3 actions for today**
- safety prompts + red-flag guardrails
- a “Track this” button to save the day (optional)

This is designed for:
- irregular cycles
- teens still learning
- postpartum
- perimenopause
- anyone who doesn’t want to “set up an app” before getting value

### 2) Today’s Guide (dynamic)
- Adapts by:
  - cycle day / estimated phase
  - symptoms (pain, bleeding, mood, GI, sleep, migraine, etc.)
  - life stage (teen, postpartum, perimenopause, menopause)
  - contraception mode (optional)
- Includes:
  - “**Simple** vs **Deep Science**” toggle
  - micro-coaching actions: *what to do today* (heat, hydration, movement, nutrition cues, rest cues, pacing)
  - safety prompts + **red-flag guardrails** (non-diagnostic)

### 3) Tracking (fast, daily)
- Minimal daily check-in with optional deep fields.
- Tracking is not the product. **Guidance is the product.**
- Tracking exists to personalize guidance and generate insights over time.

### 4) Insights (non-diagnostic)
- Cycle overlays and trend visuals
- Pattern flags + “what to try next cycle” suggestions
- Correlations (sleep/stress/movement/food notes ↔ symptoms)

### 5) Evidence & Viewpoints cards
- Every suggestion shows:
  - **Evidence strength**: Strong / Moderate / Emerging / Traditional-use
  - **Who it’s for** + **who should avoid**
  - “**What to track** to see if it helps”
- “Compare viewpoints” panel:
  - Western clinical (med timing, common options)
  - Pelvic floor/physio lens
  - Mind-body pain science lens
  - Selected traditional frameworks (Ayurveda/TCM/Indigenous) presented as **viewpoints**, not cures

### 6) Privacy Center quick access
- Anonymous mode status
- Export / Delete controls
- Clear “no ad trackers on health pages” promise

---

## Must-Have Pages (MVP+)
- **/today** — Today’s Guide (dynamic plan)
- **/cycle-day** — “Where am I in my cycle?” (day selector + symptom input)
- **/track** — Symptom tracker (daily entry)
- **/insights** — Trends, cycle overlay, pattern flags
- **/toolkits/cramps** — Cramps Toolkit (evidence-graded interventions + “when to seek care”)
- **/toolkits/pms-pmdd** — PMS/PMDD Companion (aligned to clinical guidance)
- **/traditions** — Traditions Library (safety-first; context + contraindications + interactions)
- **/clinic-pack** — Doctor Visit Pack (exportable summary + questions to ask)
- **/privacy** — Privacy Center (anonymous, export/delete, local-only mode)
- **/accessibility** — Accessibility statement and settings
- **/about** — Mission, principles, editorial/evidence process

---

## Product Principles
1) **Non-diagnostic**: We guide, we do not diagnose.
2) **Guardrails everywhere**: red flags, contraindications, interactions, escalation paths.
3) **Evidence-graded suggestions**: trust is earned.
4) **Traditional knowledge with integrity**: context + safety + humility.
5) **Anonymous-first**: privacy isn’t a feature; it’s architecture.
6) **Accessible by default**: mobile-first, inclusive language, global considerations.
7) **Guidance-first UX**: users get value before tracking.

---

## Tech Stack
### Frontend
- **HTML5** (semantic, accessible)
- **CSS3** (responsive, reduced motion support)
- **Vanilla JavaScript** (modular, no framework required)

### Backend (Vercel)
- **Vercel Serverless Functions** (`/api/*`)
- Storage (recommended):
  - **Vercel Postgres** for time-series tracking + insights
  - **Vercel KV** (optional) for caching, rate limiting, short-lived tokens
  - **Vercel Blob** (optional) for user exports or downloadable packs

---

## Architecture Overview
```txt
Browser (HTML/CSS/JS)
  ├─ Local optional storage (Local-only mode)
  ├─ API calls (fetch)
  v
Vercel Serverless API (/api/*)
  ├─ Auth mode: anonymous-first (hashed user keys)
  ├─ Rate limiting (KV optional)
  ├─ Validation + safety gating
  v
Vercel Postgres (durable time-series)
  ├─ entries
  ├─ cycles (optional)
  ├─ profiles (optional minimal)
  └─ exports/events/audit (optional, privacy-preserving)
```

---

## Repo Structure
```txt
/
├─ public/
│  ├─ index.html                 # Home: Cycle Day Finder + Today + Track + Insights widgets
│  ├─ today.html                 # Today’s Guide
│  ├─ cycle-day.html             # “Where am I in my cycle?” selector
│  ├─ track.html                 # Tracker
│  ├─ insights.html              # Insights dashboard
│  ├─ privacy.html               # Privacy Center
│  ├─ styles/
│  │  ├─ base.css
│  │  ├─ components.css
│  │  └─ themes.css
│  ├─ js/
│  │  ├─ app.js                  # boot + routing helpers
│  │  ├─ api.js                  # fetch wrappers + error handling
│  │  ├─ identity.js             # anonymous id, local-only mode
│  │  ├─ cycle-day.js            # day selector + “get today’s plan”
│  │  ├─ tracking.js             # entry capture + validation
│  │  ├─ insights.js             # charts + computed outputs
│  │  ├─ guidance.js             # Today’s Guide engine (rules + content mapping)
│  │  ├─ evidence.js             # evidence tags, viewpoint rendering
│  │  └─ accessibility.js        # reduced motion, contrast toggles, keyboard helpers
│  └─ assets/
│
├─ api/
│  ├─ health.js                  # GET service status
│  ├─ identity.js                # POST create/rotate anonymous identity token (optional)
│  ├─ guide.js                   # GET “today’s guide” from day/phase/symptoms
│  ├─ track.js                   # POST create entry; GET list entries
│  ├─ insights.js                # GET computed insight summaries
│  ├─ export.js                  # POST generate export (JSON/CSV)
│  ├─ delete.js                  # POST delete/anonymize user data
│  └─ rate-limit.js              # helpers (optional KV)
│
├─ sql/
│  ├─ schema.sql
│  ├─ indexes.sql
│  └─ seed.sql                   # optional
│
├─ docs/
│  ├─ CONTENT_SYSTEM.md          # IA + templates + tone + inclusive language rules
│  ├─ EVIDENCE_GRADING.md        # Strong/Moderate/Emerging/Traditional-use rubric
│  ├─ SAFETY_GUARDRAILS.md       # red flags, contraindications, escalation flows
│  ├─ TRADITIONS_POLICY.md       # how we present ancestral medicine responsibly
│  ├─ PRIVACY_MODEL.md           # anonymous-first, retention, export/delete, no trackers
│  └─ ACCESSIBILITY.md
│
├─ LICENSE
└─ README.md
```

---

## Data Model (Recommended)
### Minimal profile (optional)
- `user_key` (hashed, not personally identifying)
- `created_at`
- `settings` (JSON): language, accessibility toggles, local-only mode, etc.

### Tracking entry (time-series)
- `user_key`
- `timestamp`
- `cycle_day` (nullable)
- `phase_estimate` (nullable)
- `pain_score` (0–10)
- `bleeding_level` (none/light/medium/heavy)
- `mood_score` (0–10)
- `sleep_hours` (0–24)
- `stress_score` (0–10)
- `gi_symptoms` (JSON)
- `migraine` (boolean)
- `meds` (JSON)
- `notes` (text, optional)
- `life_stage` (optional)
- `contraception_mode` (optional)

### Computed insights (generated on request or cached)
We prefer **compute-on-read** (and cache) to reduce stored derived data. If caching:
- `user_key`
- `range_start`, `range_end`
- `insight_payload` (JSON)
- `created_at`

---

## API Endpoints (V1)
### Health
- `GET /api/health`

### Guidance
- `GET /api/guide?user_key=...&cycle_day=...&phase=...`
Returns:
- today’s plan (top actions)
- safety prompts
- evidence/viewpoint cards
- recommended tracking prompts for today

### Tracking
- `POST /api/track`
  - body: `{ user_key, timestamp, cycle_day, ...metrics }`
- `GET /api/track?user_key=...&days=90`

### Insights
- `GET /api/insights?user_key=...&days=180`
Returns:
- cycle overlays
- trend lines
- non-diagnostic pattern flags
- “try next cycle” suggestions (with evidence tags)

### Export / Delete
- `POST /api/export` (JSON/CSV)
- `POST /api/delete` (delete or anonymize all data for a user_key)

---

## Identity + Privacy (Anonymous-First)
### Modes
1) **Anonymous Cloud Sync (default)**  
   - user_key is generated client-side and stored locally
   - server stores only hashed identifiers (no email required)

2) **Local-Only Mode (maximum privacy)**  
   - no network calls
   - everything stored locally in the browser
   - export still available locally

3) **Account Mode (optional later)**  
   - only if we want cross-device convenience
   - must remain compatible with anonymous-first principles

### Non-negotiables
- **No ad trackers on health pages**
- **Export + Delete are core features**
- Minimal data retention; user controls their data lifecycle
- Clear policy: **“We do not sell intimate data. Period.”**

---

## Safety Guardrails (Non-Diagnostic)
PeriodGuide.com does not diagnose. It supports self-understanding and care decisions.

We implement:
- **Red-flag banners** (sudden severe pain, fainting, heavy bleeding, fever, etc.)
- “When to seek care” prompts woven into relevant tools
- Contraindications and interaction warnings for:
  - medications
  - supplements/herbs
  - pregnancy possibility
  - bleeding risk
  - existing conditions

All safety logic lives in:
- `docs/SAFETY_GUARDRAILS.md`
- `public/js/guidance.js` (client rendering) + server validation checks in `/api/track`

---

## Evidence & Viewpoints System
Every recommendation is presented with:
- **Evidence strength**: Strong / Moderate / Emerging / Traditional-use
- **Source notes** (kept short on UI; deeper in “Deep Science” mode)
- **Who it’s for / avoid if**
- **What to track to evaluate**

“Traditional-use” means:
- historically used within a culture/tradition
- presented with cultural context and safety warnings
- not framed as a guaranteed cure
- clearly separated from clinically validated claims

---

## Accessibility Requirements
- semantic HTML, ARIA only when needed
- keyboard navigation for all interactive components
- color contrast compliant
- reduced motion support
- charts require text summaries
- language: inclusive, non-shaming, global

---

## Local Development
### Prereqs
- Node.js (for Vercel CLI)
- Vercel account + project

### Run locally
```bash
npm i -g vercel
vercel dev
```

This serves:
- static site from `/public`
- serverless functions from `/api`

---

## Deployment (Vercel)
### Deploy
```bash
vercel
```

### Environment Variables (examples)
Postgres:
- `POSTGRES_URL`

Optional KV (rate limiting / caching):
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

Security:
- `APP_SALT` (hashing user keys)
- `CORS_ORIGIN` (optional, if needed)

Never commit secrets.

---

## Content Operations (Editorial System)
We ship content through templates (not freeform posts).

Every major page includes:
- **Plain-language** explanation
- **Deep Science** section
- **Suggested actions** (micro-coaching)
- **Evidence tags**
- **Safety notes**
- **Clinician-visit support** (questions to ask / what to document)

---

## Roadmap (Suggested)
### Phase 1 — MVP (Tool-first)
- Home dashboard (Cycle Day Finder + Today + Track + Insights starter)
- Anonymous-first identity
- Guidance API (`/api/guide`)
- Tracking storage + basic insights
- Privacy center + export/delete
- Cramps Toolkit MVP

### Phase 2 — Day-by-Day Engine
- Today’s Guide rules engine v1
- Simple/Deep toggle everywhere
- Clinician-visit pack export

### Phase 3 — Traditions Library (Safety-First)
- traditions pages with context + contraindications + interaction warnings
- “Try it safely” checklists

### Phase 4 — Advanced Insights
- cycle overlays by symptom category
- correlations + confidence indicators (non-diagnostic)
- personalized “what to try next cycle” packs

### Phase 5 — Community (Moderated)
- story library
- moderation + misinformation controls
- expert Q&A sessions (optional)

---

## Definition of Done (Quality Bar)
A feature is “done” only when it meets:
- privacy requirements (anonymous-first, export/delete supported)
- safety guardrails (red flags, contraindications where relevant)
- accessibility checks
- evidence/viewpoints labeling
- mobile usability and performance
- clear user value (actionable output, not just data capture)

---

## License
TBD (choose based on whether we want ecosystem contributions or tight control).

---

## Contact / Ownership
PeriodGuide.com is built as a long-term trust product. Trust is the brand.
If you are contributing: read `docs/PRIVACY_MODEL.md` and `docs/SAFETY_GUARDRAILS.md` first.
