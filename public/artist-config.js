// ═══════════════════════════════════════════════════════════════
// MAWD ARTIST CONFIG — Travis Atreo
// ═══════════════════════════════════════════════════════════════
// To create a new demo for a different artist:
// 1. Copy this file
// 2. Replace all the data below with the new artist's data
// 3. Update the system prompt in api/chat.js with the new data
// 4. Deploy to a new Vercel project
//
// Everything below is the ONLY thing you need to change.
// The rest of the app (index.html, api/chat.js) stays the same.
// ═══════════════════════════════════════════════════════════════

var ARTIST = {
  name: "Travis Atreo",
  firstName: "Travis",
  password: "mawd",
  splashSubtitle: "Live data from artist Travis Atreo",

  // Welcome briefing — what MAWD says when the chat first opens
  briefing: "Good morning, Travis. Here's your daily briefing.\n\n**Revenue:** $3,177 last month from streaming. $450 from Fanded memberships. Fanded is now 12% of your monthly income and growing.\n\n**Advance:** $105K remaining of $250K. On track to recoup by mid-2028.\n\n**Flag:** Your Asian streaming audience grew 8% this quarter \u2014 Vietnam and China are outpacing the US in growth rate. Worth exploring.",

  // Dashboard headline metrics
  metrics: {
    revenue: { target: 349, label: "Lifetime Revenue", unit: "K", prefix: "$", sub: "Soundrop + Ingrooves combined", subMobile: "Soundrop + Ingrooves", color: null },
    streams: { target: 420, label: "Total Streams", unit: "M", prefix: "", sub: "307M Spotify + 113M YouTube + more", subMobile: "Spotify + YouTube + more", color: null },
    advance: { target: 105, label: "Advance Left", unit: "K", prefix: "$", sub: "of $250K \u2014 recouping ~$3.4K/mo", subMobile: "of $250K advance", color: "danger" },
    fanded: { target: 15, label: "Fanded Revenue", unit: "K", prefix: "$", sub: "Direct-to-artist", subMobile: "Direct-to-artist", color: "success" }
  },

  // Monthly revenue trend (for bar chart)
  monthlyRevenue: [
    { month: "Oct 22", streaming: 6459, fanded: 0 }, { month: "Jan 23", streaming: 6653, fanded: 0 },
    { month: "Apr 23", streaming: 4034, fanded: 0 }, { month: "Jul 23", streaming: 4857, fanded: 0 },
    { month: "Oct 23", streaming: 3939, fanded: 50 }, { month: "Jan 24", streaming: 4205, fanded: 100 },
    { month: "Apr 24", streaming: 4973, fanded: 150 }, { month: "Jul 24", streaming: 4072, fanded: 200 },
    { month: "Oct 24", streaming: 3757, fanded: 250 }, { month: "Jan 25", streaming: 3491, fanded: 300 },
    { month: "Apr 25", streaming: 3447, fanded: 350 }, { month: "Jul 25", streaming: 3282, fanded: 400 },
    { month: "Oct 25", streaming: 3223, fanded: 420 }, { month: "Jan 26", streaming: 3177, fanded: 450 }
  ],

  // Revenue by platform (for donut chart)
  platformRevenue: [
    { name: "Spotify", value: 49272, color: "#1DB954", pct: 35 },
    { name: "YouTube", value: 28399, color: "#FF0000", pct: 20 },
    { name: "YT Premium", value: 16655, color: "#FF4444", pct: 12 },
    { name: "Apple Music", value: 12340, color: "#FC3C44", pct: 9 },
    { name: "Qishui", value: 7297, color: "#7B5CF6", pct: 5 },
    { name: "Netease", value: 6295, color: "#E11D48", pct: 4 },
    { name: "TikTok", value: 5695, color: "#60C0FF", pct: 4 },
    { name: "Others", value: 15349, color: "#6B7280", pct: 11 }
  ],
  platformTotal: "$141K",
  platformTotalLabel: "Ingrooves gross",

  // Top songs (for table)
  topSongs: [
    { name: "Clean", streams: "46.3M", revenue: 18420, trend: "+2.1%" },
    { name: "Should Have Been Us", streams: "38.2M", revenue: 15230, trend: "+1.8%" },
    { name: "Somehow", streams: "27.2M", revenue: 10840, trend: "+1.4%" },
    { name: "All I Ask", streams: "17.6M", revenue: 7020, trend: "+0.8%" },
    { name: "Bless the Broken Road", streams: "13.9M", revenue: 5560, trend: "+1.1%" }
  ],

  // Revenue by territory (for bar chart)
  territories: [
    { name: "United States", revenue: 52400 },
    { name: "Vietnam", revenue: 18200 },
    { name: "China", revenue: 14800 },
    { name: "Philippines", revenue: 8900 },
    { name: "United Kingdom", revenue: 6200 },
    { name: "Indonesia", revenue: 5100 },
    { name: "Canada", revenue: 4800 },
    { name: "Australia", revenue: 3900 }
  ],

  // Preset conversations (with optional rich cards)
  // Cards reference BRAND colors — use string keys: "primaryLight", "success", "danger"
  conversations: [
    {
      label: "How's my business?",
      messages: [
        { role: "user", text: "How is my business doing?" },
        { role: "mawd", text: "Here's your business snapshot, Travis.\n\n**Lifetime Streaming Revenue:** $349K across Soundrop + Virgin/Ingrooves\n**Total Streams:** 420M+ across Spotify (307M), YouTube (113M), and all platforms\n**Monthly Run Rate:** ~$3,400/mo from streaming\n**Advance Status:** $105K remaining of your $250K advance \u2014 on track to recoup by mid-2028\n**Fanded Revenue:** $400/mo from memberships \u2014 and growing\n\nHere's what jumps out: your Fanded memberships already generate more take-home cash than your entire streaming catalog. Streaming pays $3,400/mo gross, but 100% goes to recoupment right now. Fanded pays you directly.\n\nYour strongest growth signal is in Asia \u2014 Vietnam and China are your #2 and #3 territories and growing faster than US streams.",
          cards: [
            { type: "sparkline", label: "Monthly Revenue Trend", dataKey: "monthlyRevenue", color: "primaryLight" },
            { type: "progress", label: "Advance Recoupment", current: 145, total: 250, unit: "K", color: "success" },
            { type: "link", text: "See full dashboard \u2192", action: "dashboard" }
          ]
        }
      ]
    },
    {
      label: "Evaluate my deal",
      messages: [
        { role: "user", text: "Is my Ingrooves deal good?" },
        { role: "mawd", text: "I've analyzed your Virgin/Ingrooves contract against industry benchmarks.\n\n**Your Terms:**\n\u2022 82/18 revenue split (you keep 82%)\n\u2022 $250K advance across two payments\n\u2022 4-year term with auto-extension if unrecouped\n\u2022 75/25 sync split\n\n**Benchmark:** For an independent artist at your stream count, 80-85% is standard. Your rate is fair. The advance was strong \u2014 $250K for a catalog doing ~$50K/year gross means ~5x annual revenue.\n\n**The concern:** You're 42 months in with $105K remaining. At $3,400/mo recoupment, that's ~31 more months \u2014 pushing into 2028. The auto-extension clause means you won't own your release schedule until you recoup.\n\n**My recommendation:** New releases would accelerate recoupment significantly. One viral moment could clear the balance in months, not years.",
          cards: [
            { type: "metrics", items: [
              { label: "Your Split", value: "82%", sub: "vs 80-85% benchmark", color: "success" },
              { label: "Advance", value: "$250K", sub: "~5x annual revenue", color: "primaryLight" },
              { label: "Remaining", value: "$105K", sub: "~31 months to recoup", color: "danger" }
            ]}
          ]
        }
      ]
    },
    {
      label: "Where should I focus?",
      messages: [
        { role: "user", text: "What should I focus on to grow my income?" },
        { role: "mawd", text: "Three moves, ranked by impact:\n\n**1. Double down on Fanded** (highest ROI)\nYou have 316K YouTube subscribers but only 469 email subscribers \u2014 that's a 0.15% conversion rate vs. 2-5% industry average. If you converted just 1% of your YouTube audience, that's 3,160 members. At $5/mo average, that's $15,800/month in direct revenue. No distributor cut. No advance to recoup.\n\n**2. Release new music** (accelerates everything)\nYour catalog compounds \u2014 \"Clean\" is still earning 4+ years later. Each new release lifts the whole catalog. It also accelerates recoupment, getting you to $0 balance faster.\n\n**3. Cultivate the Asian audience** (untapped market)\nVietnam, China, and Philippines represent $41,900 in revenue and growing. You're organically building a fanbase in the fastest-growing music markets in the world. A targeted release or collaboration could 3-5x this.",
          cards: [
            { type: "metrics", items: [
              { label: "YT Subscribers", value: "316K", sub: "0.15% convert to Fanded", color: "#FF0000" },
              { label: "Potential", value: "$15.8K/mo", sub: "at 1% conversion", color: "success" },
              { label: "Asia Revenue", value: "$41.9K", sub: "and growing fast", color: "primaryLight" }
            ]}
          ]
        }
      ]
    },
    {
      label: "Tax prep summary",
      messages: [
        { role: "user", text: "I need a summary for my accountant for taxes" },
        { role: "mawd", text: "Here's your tax prep summary for your accountant:\n\n**TRAVIS ATREO PRODUCTIONS \u2014 2025 TAX YEAR**\n\n**Streaming Revenue (Ingrooves/Virgin):**\nGross: ~$40,800 | Distribution Fees: ~$7,344 | Net: ~$33,456\n(Note: Net proceeds applied to advance recoupment \u2014 no cash payout received)\n\n**Streaming Revenue (Soundrop):**\nTotal payouts received: $950.56\n(12 monthly payments, reported as 1099 income)\n\n**Fanded Membership Revenue:**\nEstimated: ~$4,800 ($400/mo \u00d7 12)\n\n**Key Notes for Accountant:**\n\u2022 Ingrooves advance was received in prior years \u2014 recoupment reduces the outstanding balance but is NOT current-year income\n\u2022 Soundrop payments ARE current-year income (1099)\n\u2022 Fanded revenue is pass-through from membership platform\n\nWant me to export this as a PDF you can send directly?" }
      ]
    }
  ],

  // Keyword-matched fallback responses (used when API is unavailable)
  typedResponses: [
    { keywords: ["revenue", "money", "earn", "income", "how much"], response: "Here's a quick snapshot: your lifetime streaming revenue is $349K across Soundrop and Virgin/Ingrooves, with 420M+ total streams. Your current monthly run rate is ~$3,400/mo from streaming, plus $400/mo from Fanded memberships. Try the preset questions for deeper analysis!" },
    { keywords: ["deal", "contract", "ingrooves", "virgin", "advance"], response: "Your Virgin/Ingrooves deal: 82/18 split, $250K advance, 4-year term. You've recouped ~$145K so far with ~$105K remaining. At current rates, you'll recoup by mid-2028. Use the **\"Evaluate my deal\"** preset for the full analysis." },
    { keywords: ["focus", "grow", "strategy", "what should", "next"], response: "Your three biggest opportunities: 1) Convert more of your 316K YouTube subscribers to Fanded members (currently only 0.15% conversion), 2) Release new music to accelerate catalog compounding and recoupment, 3) Double down on your growing Asian audience. Try **\"Where should I focus?\"** for the full breakdown." },
    { keywords: ["tax", "accountant", "1099", "deduct"], response: "I can prepare a full tax summary for your accountant. Try the **\"Tax prep summary\"** preset for the complete breakdown of your Ingrooves, Soundrop, and Fanded revenue streams." },
    { keywords: ["spotify", "stream", "song", "music", "clean"], response: "Your Spotify catalog has 307M+ total streams across 200 songs. Top performers: Clean (46.3M), Should Have Been Us (38.2M), Somehow (27.2M), All I Ask (17.6M), Bless the Broken Road (13.9M). Your catalog continues to compound \u2014 older songs are still growing." },
    { keywords: ["fanded", "member", "membership", "fan", "club"], response: "Fanded is generating ~$400/mo in direct-to-artist membership revenue \u2014 and here's the key insight: that $400/mo is more actual take-home cash than your entire streaming catalog right now, since 100% of streaming revenue goes to recoupment. Fanded is your highest-margin revenue stream." },
    { keywords: ["hello", "hi", "hey", "sup", "what's up"], response: "Hey Travis! I'm MAWD \u2014 your AI management team. I have all your streaming data, financial records, distribution contracts, and audience analytics loaded. Ask me anything about your business, or try the preset questions to see what I can do." }
  ]
};
