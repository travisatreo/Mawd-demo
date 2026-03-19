// ═══════════════════════════════════════════════════════════════
// MAWD ARTIST CONFIG — [ARTIST NAME]
// ═══════════════════════════════════════════════════════════════
// Fill in everything below with the artist's real data.
// Then follow the setup guide in SETUP-GUIDE.md to deploy.
// ═══════════════════════════════════════════════════════════════

var ARTIST = {
  // ─── BASICS ───
  name: "Artist Name",            // Full name shown in header
  firstName: "First",             // Used in chat responses
  password: "mawd",               // Password to enter the demo
  splashSubtitle: "Live data from artist [Name]",  // Shown on splash screen

  // ─── WELCOME BRIEFING ───
  // This is the first message MAWD shows when the chat opens.
  // Use **bold** for emphasis. Use \n\n for paragraph breaks.
  briefing: "Good morning, [Name]. Here's your daily briefing.\n\n**Revenue:** [Monthly revenue summary]\n\n**Key Metric:** [Most important thing to flag]\n\n**Opportunity:** [Something worth exploring]",

  // ─── DASHBOARD METRICS (4 cards at the top of the dashboard) ───
  metrics: {
    revenue: {
      target: 100,              // The number that counts up (e.g., 349 = $349K)
      label: "Lifetime Revenue",
      unit: "K",                // Appended after number (K, M, etc.)
      prefix: "$",              // Prepended before number
      sub: "Description of revenue sources",
      subMobile: "Shorter mobile description",
      color: null               // null = default purple. Options: "danger" (red), "success" (green)
    },
    streams: {
      target: 0,
      label: "Total Streams",
      unit: "M",
      prefix: "",
      sub: "Platform breakdown",
      subMobile: "Short version",
      color: null
    },
    advance: {
      target: 0,
      label: "Advance Remaining",  // Change label to fit your artist
      unit: "K",
      prefix: "$",
      sub: "Details about advance or other key metric",
      subMobile: "Short version",
      color: "danger"           // Red = something to watch
    },
    fanded: {
      target: 0,
      label: "Fanded Revenue",
      unit: "K",
      prefix: "$",
      sub: "Direct-to-artist",
      subMobile: "Direct-to-artist",
      color: "success"          // Green = growing
    }
  },

  // ─── MONTHLY REVENUE TREND (bar chart) ───
  // Each entry is one bar. "streaming" = main revenue, "fanded" = Fanded revenue (green overlay)
  monthlyRevenue: [
    { month: "Jan 24", streaming: 1000, fanded: 0 },
    { month: "Apr 24", streaming: 1200, fanded: 50 },
    { month: "Jul 24", streaming: 1100, fanded: 100 },
    { month: "Oct 24", streaming: 1300, fanded: 150 },
    { month: "Jan 25", streaming: 1250, fanded: 200 },
    { month: "Apr 25", streaming: 1400, fanded: 250 },
    { month: "Jul 25", streaming: 1350, fanded: 300 },
    { month: "Oct 25", streaming: 1500, fanded: 350 }
  ],

  // ─── REVENUE BY PLATFORM (donut chart) ───
  // pct values should roughly add to 100
  platformRevenue: [
    { name: "Spotify", value: 5000, color: "#1DB954", pct: 40 },
    { name: "YouTube", value: 3000, color: "#FF0000", pct: 24 },
    { name: "Apple Music", value: 2000, color: "#FC3C44", pct: 16 },
    { name: "TikTok", value: 1500, color: "#60C0FF", pct: 12 },
    { name: "Others", value: 1000, color: "#6B7280", pct: 8 }
  ],
  platformTotal: "$12.5K",        // Center of donut chart
  platformTotalLabel: "Total gross",  // Below the number

  // ─── TOP SONGS/CONTENT (table) ───
  topSongs: [
    { name: "Song Name 1", streams: "10M", revenue: 4000, trend: "+2.1%" },
    { name: "Song Name 2", streams: "8M", revenue: 3200, trend: "+1.5%" },
    { name: "Song Name 3", streams: "5M", revenue: 2000, trend: "+1.2%" },
    { name: "Song Name 4", streams: "3M", revenue: 1200, trend: "+0.8%" },
    { name: "Song Name 5", streams: "2M", revenue: 800, trend: "+0.5%" }
  ],

  // ─── REVENUE BY TERRITORY (horizontal bar chart) ───
  territories: [
    { name: "United States", revenue: 5000 },
    { name: "United Kingdom", revenue: 2000 },
    { name: "Canada", revenue: 1500 },
    { name: "Australia", revenue: 1000 },
    { name: "Germany", revenue: 800 }
  ],

  // ─── PRESET CONVERSATIONS ───
  // These are the clickable buttons in the chat. Each has a question and MAWD's response.
  // Use **bold** for emphasis, \n\n for paragraphs, \u2022 for bullet points.
  //
  // Optional: add "cards" to a response for inline visualizations:
  //   { type: "sparkline", label: "Label", dataKey: "monthlyRevenue", color: "primaryLight" }
  //   { type: "progress", label: "Label", current: 50, total: 100, unit: "K", color: "success" }
  //   { type: "metrics", items: [{ label: "Label", value: "Value", sub: "Detail", color: "primaryLight" }] }
  //   { type: "link", text: "Link text →", action: "dashboard" }
  //
  conversations: [
    {
      label: "How's my business?",
      messages: [
        { role: "user", text: "How is my business doing?" },
        { role: "mawd", text: "Here's your business snapshot, [Name].\n\n**[Key metric 1]**\n**[Key metric 2]**\n**[Key metric 3]**\n\n[Insight about what stands out]",
          cards: [
            { type: "sparkline", label: "Monthly Revenue Trend", dataKey: "monthlyRevenue", color: "primaryLight" },
            { type: "link", text: "See full dashboard \u2192", action: "dashboard" }
          ]
        }
      ]
    },
    {
      label: "Where should I focus?",
      messages: [
        { role: "user", text: "What should I focus on to grow?" },
        { role: "mawd", text: "Three moves, ranked by impact:\n\n**1. [Top opportunity]**\n[Why and how]\n\n**2. [Second opportunity]**\n[Why and how]\n\n**3. [Third opportunity]**\n[Why and how]" }
      ]
    },
    {
      label: "Analyze my audience",
      messages: [
        { role: "user", text: "Tell me about my audience" },
        { role: "mawd", text: "[Audience analysis with real data]" }
      ]
    },
    {
      label: "Revenue breakdown",
      messages: [
        { role: "user", text: "Break down my revenue" },
        { role: "mawd", text: "[Revenue breakdown with real data]" }
      ]
    }
  ],

  // ─── KEYWORD FALLBACK RESPONSES ───
  // When the Claude API is unavailable, MAWD matches these keywords to respond.
  // Each entry: keywords (array of strings to match), response (the text MAWD says)
  typedResponses: [
    { keywords: ["revenue", "money", "earn", "income"], response: "[Quick revenue summary]" },
    { keywords: ["focus", "grow", "strategy"], response: "[Quick growth advice]" },
    { keywords: ["hello", "hi", "hey"], response: "Hey [Name]! I'm MAWD \u2014 your AI management team. Ask me anything about your business, or try the preset questions to see what I can do." }
  ]
};
