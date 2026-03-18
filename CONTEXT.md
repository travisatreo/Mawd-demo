# SESSION CONTEXT — Fanded M1

Last updated: 2026-03-18
Session: Full-day build session covering MAWD demo + Fanded landing page

---

## What We Built Today

### 1. MAWD Demo (mawd.fanded.com)
**Repo:** `travisatreo/Mawd-demo` → auto-deploys to Vercel
**Local path:** `/Users/travis/Documents/Fanded M1/mawd-demo-vercel/`
**Stack:** Single-file React app (no build step, CDN React, React.createElement)

**Features shipped:**
- Mobile-responsive redesign with bottom tab bar (768px breakpoint)
- Auto-transitioning splash screen with password gate (password: "mawd")
- ChatGPT-style word streaming for all responses
- Conversation history (messages accumulate, not replaced)
- Rich response cards (sparklines, progress bars, metric highlights)
- Real Claude API responses for typed questions (Vercel edge function at `/api/chat`)
- Prominent agent consultation roster during "thinking" phase
- Swipe navigation between views on mobile
- Scroll-triggered animations on dashboard
- Share Demo button (copies link to clipboard)
- PWA installable (manifest.json + service worker)
- Reusable demo template system (artist-config.js)
- Onboarding hints for mobile navigation
- Claude iOS app-matched text sizing (16px)

**Key files:**
- `public/index.html` — the entire app (~950 lines)
- `public/artist-config.js` — all artist data (swap this file for a new demo)
- `api/chat.js` — Vercel serverless function proxying to Claude API
- `CLAUDE.md` — project guide
- `CONTEXT.md` — reusable demo template documentation

**Environment variable:** `ANTHROPIC_API_KEY` set in Vercel project settings

**Deploy pipeline:** Push to `main` → Vercel auto-deploys in ~30s
**Rollback:** `git revert HEAD && git push`

---

### 2. Fanded Landing Page (fanded-landing.vercel.app)
**Repo:** `devfanded/landing` → auto-deploys to Vercel (`fanded-landing` project)
**Local path:** `/Users/travis/Documents/Fanded M1/fanded-landing-deploy/`
**Stack:** Static HTML, CSS, vanilla JS. No framework, no build step.

**What it is:**
Corporate landing page for Fanded Inc. Restructured per redesign brief v2:
- MAWD leads as FLAGSHIP PRODUCT, Fan Clubs (now "Fanded Clubs") follow
- Hero with animated word swap: "Every [creative/artist/athlete/actor/director/creator] is fan-funded."
- Photo-forward traction cards with real talent: Travis Atreo, Manny Jacinto, Anna Akana, Asian American Girl Club
- AAGC card has gold "Featured in Forbes" badge
- Investor section with real traction data
- Dark, refined aesthetic with warm sunset gradient orbs that drift on scroll
- Fonts: Instrument Serif (display) + Onest (body)
- Gold accent (#E8C547) used sparingly

**Key files:**
- `public/index.html` — the entire landing page
- `public/photos/` — talent photos (travis.jpg, manny.png, anna.png, aagc.png)
- `vercel.json` — Vercel config

**DNS status:** `fanded.com` and `www.fanded.com` domains added to Vercel project but DNS records need to be updated by Kevin. Required records:
- A record: `@` → `216.150.1.1`
- CNAME: `www` → `c1de614c433e7e8e.vercel-dns-016.com.`

Currently accessible at: `fanded-landing.vercel.app`

**Deploy pipeline:** Push to `main` on `devfanded/landing` → Vercel auto-deploys
**Note:** Commits must use GitHub-associated email (travisatreo@users.noreply.github.com) or Vercel blocks the deploy.

---

## What's NOT Done Yet

### MAWD Demo
- [ ] Reusable demo template system exists but hasn't been used for another artist yet
- [ ] Bold `**` markers briefly visible during word streaming (cosmetic)
- [ ] Vercel Analytics not yet enabled
- [ ] OG meta image not created (text-only OG tags are set)

### Fanded Landing
- [ ] DNS not yet pointed to new Vercel project (Kevin handling)
- [ ] Mobile hamburger menu not implemented (nav links hidden on mobile)
- [ ] No analytics
- [ ] Terms and Privacy links go to `#` (placeholder)

### Strategic Next Steps
- [ ] Build demos for other artists (Thomas Ng, Gabby Then, or anyone in Travis's network)
- [ ] Wire up real LLM for the landing page's MAWD section (interactive demo embed?)
- [ ] Fanded app (app.fanded.com) — separate Next.js codebase at `devfanded/fanded`

---

## GitHub Access Notes
- `travisatreo` is a Member of the `devfanded` GitHub org (recently made Owner)
- Local git uses `travisatreo@users.noreply.github.com` for devfanded repos
- The `travisatreo/Mawd-demo` repo is on Travis's personal account (public)
- The `devfanded/landing` repo is on the org (private)

---

## Design System Reference

### MAWD (mawd.fanded.com)
- Dark techy aesthetic: #080818 background
- Purple primary: #4A4AE6 / #6B6BFF
- Gradients: #60C0FF → #7B5CF6
- Font: Inter (system)
- Bloomberg terminal energy — data-dense, AI-forward

### Fanded (fanded.com)
- Dark refined aesthetic: #0A0A1A background
- Same purple primary: #4A4AE6
- Gold accent: #E8C547 (used sparingly — warmth)
- Warm sunset gradient orbs in background
- Fonts: Instrument Serif (display), Onest (body)
- Editorial, talent-facing — dignified, inviting
- Same brand DNA as MAWD but warmer energy
