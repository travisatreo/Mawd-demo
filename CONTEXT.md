# MAWD Demo — Session Handoff

**Last updated:** 2026-03-18
**Branch:** main (15 commits, all pushed)
**Live at:** https://mawd.fanded.com
**Repo:** https://github.com/travisatreo/Mawd-demo

## What We Built

A fully interactive investor demo for MAWD (My AI Workforce Deployment) — Fanded's AI management team for talent. The demo uses real data from artist Travis Atreo and is designed for fundraising meetings.

### Architecture
- **Single-file React app** (`public/index.html`, ~1000 lines) — React via CDN, no build step
- **Vercel serverless function** (`api/chat.js`) — proxies to Claude API for live AI responses
- **Artist config file** (`public/artist-config.js`) — all artist data in one swappable file
- **PWA-enabled** — installable on phone home screens
- **Auto-deploys** — push to `main` → Vercel deploys in ~30 seconds

### Features Shipped
1. **Mobile-responsive layout** — bottom tab bar, swipe navigation, 768px breakpoint
2. **ChatGPT-style word streaming** — responses appear word-by-word with blinking cursor
3. **Real Claude API responses** — typed questions get live AI answers using Travis's real data
4. **Conversation history** — messages accumulate, not replaced
5. **Rich response cards** — sparklines, progress bars, metric highlights after responses
6. **Agent consultation roster** — visual display of 5 agents lighting up as they analyze
7. **Scroll-triggered dashboard animations** — charts/metrics animate on scroll
8. **Password-gated splash** — access code "mawd" required to enter
9. **Onboarding hints** — subtle "swipe or tap below →" after entering
10. **Share Demo button** — copies link + pitch to clipboard
11. **PWA install** — manifest + service worker for Add to Home Screen
12. **Reusable template** — artist-config.js makes spinning up new demos a 10-min job
13. **Claude iOS-sized text** — 16px body, 1.5 line height

### Key Files
```
public/
  index.html          # The entire app UI (~1000 lines)
  artist-config.js    # All artist-specific data (swap this for new demos)
  manifest.json       # PWA manifest
  sw.js               # Service worker
  icon-192.png        # App icon
api/
  chat.js             # Vercel serverless → Claude API with streaming
vercel.json           # Vercel config (API routes + static serving)
CLAUDE.md             # Project guide for AI assistants
CONTEXT.md            # This file
```

## Current State

### What's Working
- All 13 features above are live and QA'd (health score: 97/100)
- Claude API responses work (ANTHROPIC_API_KEY set in Vercel env vars)
- Model: claude-haiku-4 with 300 max_tokens (short, cheap responses)
- Presets use curated responses with rich cards; typed questions use live API
- Fallback: if API fails, degrades to keyword matching silently

### Known Issues
- **Low severity:** Bold `**` markers briefly visible during word streaming before closing `**` arrives (cosmetic)
- **Not tested:** Swipe navigation on real iOS Safari (tested via Chrome emulation only)
- **API cost:** Each typed question costs ~$0.001 with Haiku. System prompt is large (~2K tokens input) because it includes all artist data

### Environment
- No Node.js installed on this machine (no npm/bun)
- GitHub CLI (`gh`) installed at `/tmp/gh/gh_2.65.0_macOS_arm64/bin/gh`
- Authenticated as `travisatreo` on GitHub
- Vercel connected to GitHub — auto-deploys on push to main
- `ANTHROPIC_API_KEY` set in Vercel dashboard (Production env)

## Next Steps

### Highest Priority (for fundraise)
1. **Create 2-3 demos for other artists** — use the template system (copy artist-config.js + update api/chat.js system prompt). Target artists in Travis's network with meaningful catalogs. Each demo = a proof point for investors.
2. **Test on real iPhone Safari** — the swipe nav and PWA install haven't been tested on a physical device yet.
3. **Add OG meta tags** — when you text mawd.fanded.com to an investor, it should show a rich preview card, not a plain URL.

### Medium Priority
4. **Vercel Analytics** — add `<script defer src="/_vercel/insights/script.js"></script>` to track investor engagement (which pages, how long, mobile vs desktop).
5. **Conversation context** — currently each API call is stateless. Sending prior conversation as context would let MAWD reference earlier questions ("as I mentioned about your advance...").
6. **Demo for artist managers** — create a version that shows data for multiple artists, targeting management companies as enterprise customers.

### Deferred / Phase 2
7. **Real data integration** — connect to actual Spotify/YouTube/Fanded APIs instead of static data
8. **Multi-artist platform** — dashboard that manages a roster of artists
9. **Voice input** — especially compelling on mobile for live investor demos
10. **Rich cards from API** — have Claude return structured card data alongside text responses (currently cards are preset-only)

## How to Resume Work

```bash
cd "/Users/travis/Documents/Fanded M1/mawd-demo-vercel"
# Everything is on main, all pushed. Just start editing.

# To deploy: push to main
git add . && git commit -m "description" && git push origin main

# To create a new artist demo:
# 1. Fork the repo
# 2. Edit public/artist-config.js with new artist's data
# 3. Update the system prompt in api/chat.js
# 4. Deploy to new Vercel project + add ANTHROPIC_API_KEY

# To test locally: just open public/index.html in a browser
# (API calls won't work locally — they need Vercel serverless)
```

## CEO Plan Reference
Previous CEO review plans are stored at:
`~/.gstack/projects/travisatreo-mawd-demo/ceo-plans/2026-03-17-mobile-experience-v2.md`
