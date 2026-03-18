# MAWD Demo — Project Guide

## What is this?
Investor demo for MAWD (My AI Workforce Deployment) — the first agentic management team for talent. Built by Fanded Inc. Live at https://mawd.fanded.com

## Architecture
- **Single-file React app** — everything is in `public/index.html` (~1000 lines)
- No build step, no bundler. React loaded via CDN (unpkg)
- All components use `React.createElement()` (no JSX, no Babel)
- Served as static HTML via Vercel
- No backend, no API, no database, no auth
- PWA-enabled (manifest.json + service worker for Add to Home Screen)

## File Structure
```
public/
  index.html       # The entire app
  manifest.json    # PWA manifest
  sw.js            # Minimal service worker
  icon-192.png     # App icon (192x192)
  icon-192.svg     # App icon (SVG)
vercel.json        # Vercel config (serves public/ directory)
package.json       # Minimal, no scripts
CLAUDE.md          # This file
```

## Key Conventions
- `var e = React.createElement` — all components use `e()` shorthand
- `BRAND` object holds all colors/theme values
- `TIMING` object holds all animation/interaction timing constants
- `isMobile` — responsive breakpoint at 768px, detected via `useIsMobile()` hook
- Data is static constants (MONTHLY_REVENUE, PLATFORM_REVENUE, etc.)
- Chat responses are keyword-matched (TYPED_RESPONSES array) or preset (DEMO_CONVERSATIONS)

## Features
- Auto-transitioning splash screen (no click required)
- Chat with ChatGPT-style word streaming
- Conversation history (messages accumulate, not replaced)
- Rich response cards (sparklines, progress bars, metric highlights)
- Interrupt behavior (new question stops current stream)
- Bottom tab bar on mobile (Chat / Dashboard / Agents)
- Swipe navigation between views on mobile
- Scroll-triggered animations on dashboard
- Share Demo button (copies link to clipboard)
- PWA installable (Add to Home Screen)

## Deploy
Push to `main` → Vercel auto-deploys to mawd.fanded.com in ~30 seconds.
Rollback: `git revert HEAD && git push`

## Data
All data is real, from artist Travis Atreo's actual streaming/distribution records.
- Streaming: 420M+ total streams, $349K lifetime revenue
- Top song: "Clean" (46.3M streams)
- Advance: $250K from Virgin/Ingrooves, $105K remaining
- Fanded: ~$400/mo in direct-to-artist membership revenue
