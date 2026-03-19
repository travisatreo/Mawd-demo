# SESSION CONTEXT — Fanded M1

Last updated: 2026-03-18 (end of session)
Session: Full-day build session covering MAWD demo + Fanded landing page redesign

---

## What We Built Today

### 1. MAWD Demo (mawd.fanded.com)
**Repo:** `travisatreo/Mawd-demo` → auto-deploys to Vercel
**Local path:** `/Users/travis/Documents/Fanded M1/mawd-demo-vercel/`
**Stack:** Single-file React app (no build step, CDN React, React.createElement)

**Features shipped (17 total):**
- Mobile-responsive redesign with bottom tab bar (768px breakpoint)
- Auto-transitioning splash screen with password gate (password: "mawd")
- ChatGPT-style word streaming for all responses
- Conversation history (messages accumulate, not replaced)
- Rich response cards (sparklines, progress bars, metric highlights)
- Real Claude API responses for typed questions (Vercel serverless at `/api/chat`)
- Prominent agent consultation roster during "thinking" phase
- Swipe navigation between views on mobile
- Scroll-triggered animations on dashboard
- Share Demo button (copies link to clipboard)
- PWA installable (manifest.json + service worker)
- Reusable demo template system (artist-config.js)
- Onboarding hints for mobile navigation
- Claude iOS app-matched text sizing (16px)
- Agent roles updated (Agent, Manager, Analyst, Fan Moderator)
- Shorter API responses for cost savings (haiku model)
- QA'd and bug-fixed (2 issues resolved)

**Reusable Demo System:**
- `public/artist-config.js` — ALL artist data lives here. Swap this file = new demo.
- `templates/artist-config-template.js` — blank template with every field commented
- `SETUP-GUIDE.md` — step-by-step guide to spin up a new demo in 10 minutes
- Not yet tested end-to-end with a second artist

**Key files:**
| File | Purpose |
|------|---------|
| `public/index.html` | The entire app (~1050 lines) |
| `public/artist-config.js` | All artist data (the ONLY file to edit per artist) |
| `api/chat.js` | Claude API proxy (update system prompt per artist) |
| `templates/artist-config-template.js` | Blank config template |
| `SETUP-GUIDE.md` | How to create a new demo |
| `CLAUDE.md` | Project conventions |

**Environment variable:** `ANTHROPIC_API_KEY` set in Vercel project settings
**Deploy:** Push to `main` → Vercel → mawd.fanded.com (~30s)
**Rollback:** `git revert HEAD && git push`

---

### 2. Fanded Landing Page (fanded-landing.vercel.app → fanded.com)
**Repo:** `devfanded/landing` → auto-deploys to Vercel (`fanded-landing` project)
**Local path:** `/Users/travis/Documents/Fanded M1/fanded-landing-deploy/`
**Stack:** Static HTML, CSS, vanilla JS. No framework, no build step.

**Design direction (FINAL — editorial, typography-led):**
- Playfair Display serif headlines + DM Sans body (light weight 300)
- Cream on black palette (#F5F1EA on #07070F)
- Square corners (2px radius), thin horizontal rules between sections
- Left-aligned editorial layout
- Fanded logo blue accent (#3BADE4)
- Subtle purple ambient gradient orbs
- No emojis, no rounded pills, no SaaS patterns
- Inspired by mockup in `~/Downloads/fanded_mockup.html`

**Page structure (Hero → Villain → MAWD → Clubs → Traction → CTA):**
1. **Hero** — three sentences fade in sequentially: "You didn't start making art to feed an algorithm. / You started because something moved you so deeply you had to respond. / Your fans feel the same way about you."
2. **Villain** — "You spent years building an audience... The platforms just forgot to tell you the fan belonged to them — not you."
3. **MAWD** — "You didn't become an artist to answer emails..." + 5 agent cards (text only, no emojis)
4. **Fanded Clubs** — "Your fans already chose you..." + 3 value props (numbered)
5. **Traction** — 4 photo-forward cards: Travis Atreo (20%), Manny Jacinto (27% WoW), Anna Akana (<30min), AAGC (40x, Forbes badge)
6. **Closing** — "You did the hardest part — you made someone care. We'll help you keep them."
7. **Footer** — fanded wordmark + links

**Copy philosophy (from v5 brief):**
- Written by someone with 20 years in the industry
- Every line should make an artist feel seen before they feel sold to
- AI is infrastructure, never identity. The artist is the hero.
- No "leverage," "utilize," "ecosystem," "AI-powered"
- Nike energy, not startup hype

**OG image:** `public/og.png` — dark card with "Your fans. Your business. Your way."
**Contact email:** hello@fanded.com
**Page title:** "Fanded — Your fans. Your business. Your way."

**DNS status:** Records set in Vercel. Kevin needs to update DNS at the domain registrar:
- A record: `@` → `216.150.1.1`
- CNAME: `www` → `c1de614c433e7e8e.vercel-dns-016.com.`

**Deploy:** Push to `main` on `devfanded/landing` → Vercel auto-deploys
**Note:** Commits must use GitHub-associated email or Vercel blocks the deploy. Git config set locally: `travisatreo@users.noreply.github.com`

---

## Briefs & Design Files

All design briefs are in Travis's Downloads:
- `~/Downloads/fanded_website_redesign_brief.md` (v1)
- `~/Downloads/fanded_website_redesign_brief_v2.md`
- `~/Downloads/fanded_website_redesign_brief_v3.md`
- `~/Downloads/fanded_website_redesign_brief_v4.md`
- `~/Downloads/fanded_website_redesign_brief_v5.md` (current)
- `~/Downloads/fanded_mockup.html` (editorial design reference)

---

## What's NOT Done

### MAWD Demo
- [ ] Test reusable template with a second artist (Manny Jacinto suggested)
- [ ] Bold `**` markers briefly visible during word streaming (cosmetic)
- [ ] Vercel Analytics not enabled
- [ ] OG meta image for mawd.fanded.com not set up
- [ ] Dashboard donut chart legend — verify colors match on mobile

### Fanded Landing
- [ ] DNS pointing to new Vercel project (Kevin handling)
- [ ] Terms and Privacy links go to `#` (placeholder)
- [ ] No analytics
- [ ] Mobile hamburger menu added but not tested on real device
- [ ] Photos could be higher quality / editorial-treated

### Strategic
- [ ] Build MAWD demos for other artists (Thomas Ng, Manny Jacinto, etc.)
- [ ] Use demos as proof points for fundraising
- [ ] Vercel Analytics on both sites to track investor engagement
- [ ] Connect MAWD demo to fanded.com (embed or link)

---

## GitHub Access

- `travisatreo` — Owner of `devfanded` org, personal account has `Mawd-demo`
- Local git for devfanded repos: `travisatreo@users.noreply.github.com`
- Vercel: `fanded-landing` project connected to `devfanded/landing`
- Vercel: MAWD project connected to `travisatreo/Mawd-demo`

---

## Design System Reference

### MAWD (mawd.fanded.com)
- Dark techy: #080818 background
- Purple primary: #4A4AE6 / #6B6BFF
- Gradients: #60C0FF → #7B5CF6
- Font: Inter (system)
- Bloomberg terminal energy — data-dense, AI-forward

### Fanded (fanded.com)
- Dark editorial: #07070F background, #F5F1EA cream text
- Accent: #3BADE4 (Fanded logo blue)
- Fonts: Playfair Display (display serif), DM Sans (body), Bricolage Grotesque (wordmark)
- Square corners, thin rules, generous whitespace
- Editorial, typography-led — dignified, confident, restrained
