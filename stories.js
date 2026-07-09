// ============================================================
// THE POLITICAL RANT — STORY FEED
// ============================================================
// HOW TO EDIT ON YOUR PHONE:
//   Download the GitHub app → open repo → tap stories.js
//   → tap pencil icon → edit → Commit changes
//
// HOW TO ADD A STORY:
//   Copy one block, paste at the TOP of the STORIES array.
//   Write your own headline and blurb (don't copy the source's
//   exact words). Paste the direct article URL. Commit. Done.
//
// FIELDS:
//   headline - your own short punchy framing
//   blurb    - 1-2 sentences of context, your own words
//   source   - outlet name
//   url      - direct article link (not the homepage)
//   category - national / states / economy / courts / defence / world / opinion
//   lean     - left / right / center / state-run
//   date     - "YYYY-MM-DD"
// ============================================================

const STORIES = [

  // ── 10 JULY 2026 — TODAY ─────────────────────────────────

  {
    headline: "Modi and Albanese at the MCG today — India-Australia summit culminates at cricket's most iconic ground",
    blurb: "The third Australia-India Annual Leaders' Summit concludes in Melbourne on July 10 with a joint program at the Melbourne Cricket Ground. Bilateral trade has crossed $50 billion since the India-Australia Economic Cooperation and Trade Agreement was signed in 2022.",
    source: "PM Australia",
    url: "https://www.pm.gov.au/media/visit-australia-prime-minister-india",
    category: "world",
    lean: "state-run",
    date: "2026-07-10"
  },
  {
    headline: "Australia will supply uranium to India in the biggest clean energy deal of Modi's three-nation tour",
    blurb: "India and Australia signed a uranium supply agreement alongside the leaders' summit, giving India access to Australian reserves for its civil nuclear energy programme. The deal sits within the broader Comprehensive Strategic Partnership signed in 2020.",
    source: "India TV News",
    url: "https://www.indiatvnews.com/news/world/pm-modi-melbourne-community-event-australia-visit-anthony-albanese-live-updates-2026-07-09-1047672",
    category: "world",
    lean: "center",
    date: "2026-07-10"
  },

  // ── 9 JULY 2026 ──────────────────────────────────────────

  {
    headline: "30,000 at Marvel Stadium as Modi and Albanese address the Indian diaspora — Albanese calls Modi a 'living bridge'",
    blurb: "The Melbourne community event, sold out weeks in advance, drew one of the largest diaspora crowds ever assembled in Australia. Modi credited the Indian diaspora for building the bilateral relationship from the ground up, and said Melbourne's 'mini India' pockets now define its character.",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    lean: "center",
    date: "2026-07-09"
  },
  {
    headline: "Modi's Australia visit is strategic pragmatism, not just diaspora diplomacy — but using the community as a geopolitical instrument carries its own risks",
    blurb: "An analysis from the Australia India Institute argues the Modi-Albanese summit is driven by shared concern about China in the Indo-Pacific, but warns that reducing the million-strong Indian diaspora to an instrument of bilateral economic goals could weaken social cohesion in Australia.",
    source: "The Conversation",
    url: "https://theconversation.com/narendra-modis-visit-to-australia-will-be-a-display-of-strategic-pragmatism-286838",
    category: "opinion",
    lean: "center",
    date: "2026-07-09"
  },
  {
    headline: "India's Gaganyaan mission gets closer — CE20 engine successfully hot-tested at ISRO's Mahendragiri facility",
    blurb: "ISRO completed the flight acceptance hot test of the CE20 cryogenic engine on July 6, the first using a new propulsion system, at 22 tonnes thrust for 25 seconds. The engine will be assembled into the C32 flight stage for the LVM3-M7 uncrewed mission ahead of Gaganyaan.",
    source: "Indian Defence News",
    url: "https://www.indiandefensenews.in/",
    category: "defence",
    lean: "center",
    date: "2026-07-09"
  },

  // ── 8 JULY 2026 ──────────────────────────────────────────

  {
    headline: "Modi lands in Melbourne for his third Australia visit — the Indian diaspora is now the largest overseas-born migrant group on the continent",
    blurb: "PM Modi arrived to a guard of honour and diaspora welcome at Park Hyatt Melbourne. The visit marks his third to Australia as PM and his first trip to Melbourne in twelve years, following earlier visits in 2014 and 2023.",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    lean: "center",
    date: "2026-07-08"
  },
  {
    headline: "Record Rs 1.78 lakh crore in defence production in FY26 — exports reaching 80+ countries as Atmanirbhar Bharat takes hold",
    blurb: "India's annual defence production hit its highest ever figure in the financial year just ended, with private sector firms and DPSUs both contributing. Defence exports also hit a record Rs 38,424 crore — up 63% — though India remains the world's second-largest arms importer.",
    source: "India's World",
    url: "https://indiasworld.in/strategic-signals-july-2026/",
    category: "defence",
    lean: "center",
    date: "2026-07-08"
  },

  // ── 7 JULY 2026 ──────────────────────────────────────────

  {
    headline: "Monsoon Session July 20 to August 13 — 19 sittings, three major bills, and a privilege motion against Rajnath Singh waiting",
    blurb: "Parliament's Monsoon Session will have 19 sittings. The government wants to push through the 130th Constitution Amendment, the Delimitation Bill and One Nation One Election legislation. The opposition plans to open with privilege proceedings against the Defence Minister for allegedly lying about Operation Sindoor casualties.",
    source: "Business Today",
    url: "https://www.businesstoday.in/india/story/monsoon-session-2026-parliament-to-start-from-july-20-a-look-at-key-bills-opposition-agenda-541007-2026-07-04",
    category: "national",
    lean: "center",
    date: "2026-07-07"
  },
  {
    headline: "The 130th Amendment's most dangerous clause stays in — JPC to meet July 17 before Monsoon Session",
    blurb: "The Joint Parliamentary Committee examining the bill is expected to retain the provision that automatically removes a PM, Chief Minister or minister if they remain in judicial custody for 30 consecutive days. Critics say it is an instrument for political vendetta; the government says it is accountability. The JPC will finalise its report on July 17.",
    source: "Open The Magazine",
    url: "https://openthemagazine.com/india/parliament-monsoon-session-2026-to-begin-on-july-20-continue-till-august-13",
    category: "national",
    lean: "center",
    date: "2026-07-07"
  },
  {
    headline: "India's military gets a new top team — Vice Chief, Air Marshal, two Army Commanders all replaced in July 1 reshuffle",
    blurb: "Lt Gen Sandeep Jain took over as Vice Chief of the Army Staff on July 1. The overhaul also saw a new Vice Chief of Air Staff, Chief of Integrated Defence Staff, and multiple command-level appointments. Several of the new appointees have direct experience from Operation Sindoor.",
    source: "The Week",
    url: "https://www.theweek.in/news/defence/2026/07/02/indias-top-military-leadership-gets-a-major-overhaul-here-are-all-the-new-faces.amp.html",
    category: "defence",
    lean: "center",
    date: "2026-07-07"
  },

  // ── 6 JULY 2026 ──────────────────────────────────────────

  {
    headline: "India's current account swung to a $4.7 billion surplus in April — remittances surged to $16 billion as exports rose",
    blurb: "Reversing a $4.8 billion deficit a year earlier, April's current account surplus was driven by stronger services exports and a surge in NRI remittances to $16 billion — up from $9.4 billion. FDI more than doubled to $11.4 billion though FPI outflows also rose sharply.",
    source: "Banking Finance",
    url: "https://www.bankingfinance.in/rbi-news-for-july-2026.html",
    category: "economy",
    lean: "center",
    date: "2026-07-06"
  },
  {
    headline: "Zorawar light tank for the Himalayas, Tejas MK-1A nearing induction, BMD shield tested — India's defence modernisation is accelerating",
    blurb: "A roundup of India's June-July defence developments: DRDO's multi-layered Ballistic Missile Defence system successfully tested off Chandipur, the CE20 engine human-rated for Gaganyaan, and the indigenous Zorawar light tank reviewed by Modi at L&T's Hazira facility for high-altitude LAC operations.",
    source: "India's World",
    url: "https://indiasworld.in/strategic-signals-july-2026/",
    category: "defence",
    lean: "right",
    date: "2026-07-06"
  },
  {
    headline: "Opposition announces it will corner Congress over the 130th Amendment — the bill that could remove a PM for being arrested",
    blurb: "Congress has accused the government of designing the automatic removal clause to be used against opposition leaders facing politically motivated cases. The BJP says it's about public accountability. Both sides are preparing their arguments for July 20.",
    source: "Open The Magazine",
    url: "https://openthemagazine.com/india/parliament-monsoon-session-2026-to-begin-on-july-20-continue-till-august-13",
    category: "national",
    lean: "center",
    date: "2026-07-06"
  },

  // ── 5 JULY 2026 ──────────────────────────────────────────

  {
    headline: "India's inflation rose to 3.9% in May — food prices the culprit as Middle East war lifts fertiliser and energy costs",
    blurb: "Consumer prices rose to their highest in 16 months, driven by food inflation hitting 4.8%. West Asia tensions are pushing up global energy and fertiliser prices which are flowing through to Indian food production costs. The reading stays below the RBI's 4% medium-point threshold.",
    source: "Trading Economics",
    url: "https://tradingeconomics.com/india/inflation-cpi",
    category: "economy",
    lean: "center",
    date: "2026-07-05"
  },
  {
    headline: "Rajnath Singh accused of lying to Parliament over Operation Sindoor — Congress will push for privilege motion the day Monsoon Session opens",
    blurb: "Congress alleges the Defence Minister gave Parliament incorrect figures on Indian soldier casualties during Operation Sindoor. The party has made a privilege motion its opening move for July 20, framing it as a question of parliamentary integrity rather than just political point-scoring.",
    source: "Open The Magazine",
    url: "https://openthemagazine.com/india/parliament-monsoon-session-2026-to-begin-on-july-20-continue-till-august-13",
    category: "national",
    lean: "left",
    date: "2026-07-05"
  },
  {
    headline: "West Bengal's SIR process now begins — Supreme Court's Bihar verdict opened the door, and the Election Commission has walked through it",
    blurb: "Following the Supreme Court's May ruling upholding the Bihar electoral roll revision, the Election Commission has announced a Special Intensive Revision for West Bengal. Opposition parties say the same pattern of document requirements that raised fears in Bihar is being replicated.",
    source: "SC Observer",
    url: "https://www.scobserver.in/cases/challenge-to-the-ecis-revision-of-electoral-rolls-in-bihar-sir-association-for-democratic-reforms-v-election-commission-of-india/",
    category: "states",
    lean: "center",
    date: "2026-07-05"
  },

  // ── OPINION / EDITORIAL ───────────────────────────────────

  {
    headline: "Opinion — The ADR judgment is to our times what ADM Jabalpur was to the Emergency: Yogendra Yadav",
    blurb: "Political analyst and activist Yogendra Yadav argues the Supreme Court's Bihar SIR ruling is as significant as the 1976 Emergency-era ADM Jabalpur judgment, warning that the EC is now free to conduct voter roll revisions in any state without judicial constraint — and that citizens may now doubt whether the court will protect electoral rights.",
    source: "The Federal",
    url: "https://thefederal.com/category/news/yogendra-yadav-sir-adr-judgment-electoral-democracy-246520",
    category: "opinion",
    lean: "left",
    date: "2026-07-05"
  },
  {
    headline: "Opinion — The Supreme Court's Bihar voter roll ruling was correct. Electoral integrity requires periodic revision: Outlook India",
    blurb: "Outlook's analysis argues that the Supreme Court was right to uphold the Bihar SIR, noting that electoral rolls that haven't been intensively revised since 2003 are overdue for correction. The court found that asking voters to furnish documents does not negate the presumption of citizenship.",
    source: "Outlook India",
    url: "https://www.outlookindia.com/national/supreme-court-upholds-bihar-electoral-roll-revision-backs-ecs-power-to-conduct-sir",
    category: "opinion",
    lean: "center",
    date: "2026-07-05"
  },

  // ── COURTS ────────────────────────────────────────────────

  {
    headline: "Supreme Court upholds Bihar's Special Intensive Revision of electoral rolls — Election Commission free to conduct SIR in other states",
    blurb: "The Supreme Court in May unanimously ruled that the Bihar SIR was constitutional. Chief Justice Surya Kant held that accurate electoral rolls are fundamental to free and fair elections and that asking voters to furnish supporting documents during revision does not displace the presumption of citizenship.",
    source: "Outlook India",
    url: "https://www.outlookindia.com/national/supreme-court-upholds-bihar-electoral-roll-revision-backs-ecs-power-to-conduct-sir",
    category: "courts",
    lean: "center",
    date: "2026-05-27"
  },

  // ── ECONOMY ───────────────────────────────────────────────

  {
    headline: "RBI's e-Kuber 3.0 is coming — the central bank's 2026-27 agenda includes new banknotes, an alternative payments system, and a review of the RBI Act",
    blurb: "The RBI has published its agenda for the year: a next-generation core banking system, upgraded banknotes with anti-microbial treatments, and a comprehensive review of the Reserve Bank of India Act. Banknote circulation rose 11.9% to Rs 41.24 lakh crore in FY26.",
    source: "Banking Finance",
    url: "https://www.bankingfinance.in/rbi-news-for-july-2026.html",
    category: "economy",
    lean: "center",
    date: "2026-07-06"
  },
  {
    headline: "GDP growing at 8.2% year-on-year, RBI projecting 7.3% for the full year — Crisil says India is in a 'rare goldilocks period'",
    blurb: "India's economy grew at a six-quarter high of 8.2% year-on-year in Q2 FY26, driven by domestic consumption, GST rationalisation and benign inflation. The RBI cut rates to 5.25% and its Governor called current conditions a 'rare goldilocks period' of high growth and low inflation.",
    source: "DD News",
    url: "https://ddnews.gov.in/en/indias-gdp-to-grow-7-in-fy26-crisil-raises-growth-forecast/",
    category: "economy",
    lean: "state-run",
    date: "2026-07-04"
  }

];
