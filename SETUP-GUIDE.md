# MAWD Demo — Setup Guide for New Artists

Create a personalized MAWD demo for any artist in ~10 minutes.

## What You Need

1. The artist's streaming/revenue data (any amount — even rough numbers work)
2. A Vercel account (free tier works)
3. A GitHub account

## Steps

### 1. Copy the template

```bash
# Copy the entire mawd-demo-vercel folder
cp -r mawd-demo-vercel [artist-name]-mawd
cd [artist-name]-mawd
```

### 2. Fill in the artist config

Open `templates/artist-config-template.js` — it has every field with comments explaining what to put.

Copy it over the existing config:
```bash
cp templates/artist-config-template.js public/artist-config.js
```

Then edit `public/artist-config.js` with the artist's real data:

| Field | What to put |
|-------|-------------|
| `name` | Full name (e.g., "Manny Jacinto") |
| `firstName` | First name only |
| `password` | Access code for the demo (e.g., "mawd") |
| `briefing` | The welcome message MAWD shows on first load |
| `metrics` | 4 dashboard cards (revenue, streams, etc.) |
| `monthlyRevenue` | Monthly revenue data for the bar chart |
| `platformRevenue` | Revenue by platform for the donut chart |
| `topSongs` | Top 5 songs/content for the table |
| `territories` | Top territories for the horizontal bar chart |
| `conversations` | 3-4 preset Q&A pairs |
| `typedResponses` | Keyword-matched fallback responses |

**Tip:** You don't need perfect data. Rough numbers still make a compelling demo. The point is showing what MAWD *does*, not auditing the numbers.

### 3. Update the API system prompt

Edit `api/chat.js` — find the `systemPrompt` variable near the top. Replace Travis's data summary with the new artist's data. This is what Claude uses to answer free-form questions.

### 4. Update the manifest

Edit `public/manifest.json` — change the `name` and `short_name` to the artist's name.

### 5. Deploy

**Option A: Vercel (recommended)**
```bash
# Initialize git
git init
git add -A
git commit -m "MAWD demo for [Artist Name]"

# Create GitHub repo and push
gh repo create [artist-name]-mawd --private --push

# Deploy on Vercel
# Go to vercel.com → New Project → Import the repo
# Set the Output Directory to "public"
# Add environment variable: ANTHROPIC_API_KEY = your key
```

**Option B: Quick share (no deploy)**
Just open `public/index.html` locally in a browser. The preset conversations work offline. Only the free-form chat needs the API.

### 6. Set the password

The password is in `artist-config.js` under `password`. Default is "mawd". Change it to anything.

### 7. Share

Send the artist the Vercel URL + password. That's it.

## File Structure

```
public/
  index.html          # The app (DON'T EDIT — reads from config)
  artist-config.js    # ← THE ONLY FILE YOU EDIT
  manifest.json       # PWA manifest (update name)
  sw.js               # Service worker (don't touch)
  icon-192.png        # App icon
api/
  chat.js             # Claude API proxy (update system prompt)
templates/
  artist-config-template.js  # Blank template with comments
vercel.json           # Vercel config (don't touch)
SETUP-GUIDE.md        # This file
```

## Example: Creating a Demo for Manny Jacinto

1. Copy folder: `cp -r mawd-demo-vercel manny-mawd`
2. Copy template: `cp templates/artist-config-template.js public/artist-config.js`
3. Edit config:
   - `name: "Manny Jacinto"`
   - `firstName: "Manny"`
   - `password: "acolyte"`
   - Fill in Fanded club metrics, growth data
   - Write 3-4 preset conversations about his club's performance
4. Update `api/chat.js` system prompt with Manny's data
5. Push to GitHub → Deploy on Vercel
6. Send Manny the URL + password "acolyte"

Total time: ~10 minutes if you have the data ready.
