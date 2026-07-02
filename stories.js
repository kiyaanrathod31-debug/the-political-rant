// ============================================================
// THE POLITICAL RANT — STORY FEED
// ============================================================
// HOW TO ADD A NEW STORY:
// Copy one block below, paste it at the TOP of the STORIES array
// (newest first), and fill in your own details. That's it —
// save this file, refresh the site, done. No build step needed.
//
// FIELDS:
//   headline   - your own short, punchy framing (1 line). Do NOT
//                copy-paste the source's exact headline text —
//                write your own take on what happened.
//   blurb      - 1-2 sentences of context, in your own words.
//   source     - name of the outlet you're linking to
//   url        - the actual article URL on the source's site
//   category   - one of: "national", "states", "economy",
//                "courts", "defence", "world", "opinion"
//   lean       - the outlet's general leaning, just so readers
//                can calibrate: "left", "right", "center", "state-run"
//   date       - "YYYY-MM-DD"
// ============================================================

const STORIES = [
  {
    headline: "JPC likely to retain clause on removal of Ministers after 30 days in custody",
    blurb: "Draft report on 130th Constitution Amendment Bill expected by July 10; panel to finalise recommendations before Monsoon Session.",
    source: "The Hindu",
    url: "https://www.thehindu.com/news/national/jpc-likely-to-retain-clause-on-removal-of-ministers-after-30-days-in-custody/article71170428.ece",
    category: "national",
    lean: "center",
    date: "2026-07-01"
  },
 {
    headline: "Parliament logjam continues as opposition pushes for floor debate",
    blurb: "Both Houses adjourned again amid sloganeering, with the ruling party and opposition trading blame over who's blocking proceedings.",
    source: "The Hindu",
    url: "https://www.thehindu.com",
    category: "national",
    lean: "center",
    date: "2026-06-29"
  },
  {
    headline: "State poll dates announced — five-phase election to begin next month",
    blurb: "The Election Commission laid out the schedule; model code of conduct kicks in immediately across the state.",
    source: "Indian Express",
    url: "https://indianexpress.com",
    category: "states",
    lean: "center",
    date: "2026-06-29"
  },
  {
    headline: "Rupee slides further against the dollar, RBI stays quiet",
    blurb: "Currency hit a fresh low this week. No official statement yet on intervention.",
    source: "Mint",
    url: "https://www.livemint.com",
    category: "economy",
    lean: "center",
    date: "2026-06-28"
  },
  {
    headline: "Supreme Court reserves verdict on contested state law",
    blurb: "A three-judge bench heard final arguments; ruling expected in the coming weeks.",
    source: "LiveLaw",
    url: "https://www.livelaw.in",
    category: "courts",
    lean: "center",
    date: "2026-06-28"
  },
  {
    headline: "Government defends new bill as opposition calls it 'undemocratic'",
    blurb: "Sharp exchanges in the Lok Sabha as the bill clears its first reading despite walkouts.",
    source: "OpIndia",
    url: "https://www.opindia.com",
    category: "national",
    lean: "right",
    date: "2026-06-27"
  },
  {
    headline: "Ground report: what the bill actually means for affected districts",
    blurb: "Field reporting from communities likely to be impacted, beyond the Delhi press conferences.",
    source: "The Wire",
    url: "https://thewire.in",
    category: "national",
    lean: "left",
    date: "2026-06-27"
  }
];
