// ============================================================
// THE POLITICAL RANT — STORY FEED
// ============================================================
// HOW TO EDIT ON YOUR PHONE:
//   Download the GitHub app → open repo → tap stories.js
//   → tap pencil icon → edit → Commit changes
//
// HOW TO ADD A STORY:
//   Copy one block, paste at the TOP of the STORIES array.
//   Write your own headline and blurb. Paste the direct article
//   URL. Commit. Site updates in ~30 seconds.
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

  // ── 11 JULY 2026 — TODAY ─────────────────────────────────

  {
    headline: "Modi ends three-nation tour with 18 outcomes in New Zealand — trade target set at NZD 7 billion by 2030",
    blurb: "India and New Zealand elevated ties to a Strategic Partnership on Friday, with agreements covering maritime security, counter-terrorism, agri-tech and culture. The first Indian PM visit to New Zealand in four decades also produced a Joint Working Group on Counter-Terrorism and a Kiwifruit Action Plan.",
    source: "ANI",
    url: "https://aninews.in/news/world/asia/great-year-for-the-india-new-zealand-partnership-pm-modis-new-zealand-visit-bears-18-outcomes20260711100939/",
    category: "world",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "BJP riot in its own backyard — Narottam Mishra supporters block NH-44 for 11 hours, injure 8 cops after ticket denial",
    blurb: "Thousands of supporters of former Madhya Pradesh Home Minister Narottam Mishra clashed with police in Datia after the BJP passed him over for the July 30 assembly bypoll, nominating RSS organiser Ashutosh Tiwari instead. Tear gas was fired, vehicles overturned, and the SP himself was among those injured.",
    source: "Tribune India",
    url: "https://www.tribuneindia.com/news/madhya-pradesh/mp-bypoll-violence-protest-over-bjp-ticket-denial-turns-violent-8-cops-hurt-nh-44-blocked-for-11-hours/",
    category: "states",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "Is Narottam Mishra deliberately staying silent while his supporters riot — and what does that say about BJP's grip on its veterans?",
    blurb: "An analysis argues that Mishra's conspicuous public silence after the Datia violence — rather than strongly condemning it — signals a deeper tension between the BJP's centralised candidate selection and the ground-level power of its veteran leaders.",
    source: "News Drum",
    url: "https://www.newsdrum.in/analysis/is-narottam-mishras-silence-fuelling-the-datia-revolt-against-bjp-12153310",
    category: "opinion",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "POCSO accused out on bail kills six — the teenage complainant, her mother, grandmother, his wife and two young sons",
    blurb: "A 28-year-old man in Telangana's Ranga Reddy district allegedly murdered six people on Friday night in a revenge attack after being released on bail in a POCSO sexual assault case. He called his father to confess and said he would end his own life; he remains absconding. Police launched a manhunt.",
    source: "Siasat Daily",
    url: "https://www.siasat.com/man-kills-six-family-members-in-ranga-reddy-village-3505386/",
    category: "national",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "A POCSO bail given in haste and six are dead — the Telangana case puts anticipatory bail norms back in the spotlight",
    blurb: "The accused had been granted bail on a personal bond in June, months after the POCSO case was filed in May. Critics and legal observers are asking how a case of this severity resulted in release on a personal bond, and whether courts need tighter bail norms for POCSO accused.",
    source: "India TV News",
    url: "https://www.indiatvnews.com/telangana/hyderabad-angered-by-pocso-case-allegedly-filed-against-him-man-kills-six-people-in-telangana-case-filed-2026-07-11-1047886",
    category: "courts",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "Suvendu Adhikari warns West Bengal representatives against anti-party statements — first major test of BJP's new state government",
    blurb: "West Bengal's new Chief Minister warned public representatives on Friday against making statements that conflict with the party line, signalling he intends to run a tight ship after TMC's defeat. Several local leaders have already made comments that complicated the party's post-election messaging.",
    source: "Free Press Journal",
    url: "https://www.freepressjournal.in/india",
    category: "states",
    lean: "center",
    date: "2026-07-11"
  },

  // ── 10 JULY 2026 ─────────────────────────────────────────

  {
    headline: "Modi and Albanese at the MCG: the summit that signals India is done waiting for others to shape the Indo-Pacific",
    blurb: "The third Australia-India Annual Leaders' Summit concluded in Melbourne with a uranium supply deal, enhanced defence cooperation and a joint commitment to maritime security. The symbolism of hosting it at cricket's most iconic ground was deliberate on both sides.",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    lean: "center",
    date: "2026-07-10"
  },
  {
    headline: "Datia bypoll chaos exposes BJP's ticket selection problem — three state-level leaders resign from party posts in protest",
    blurb: "Beyond the street violence, the Datia bypoll row has produced formal resignations from the BJP's district president and several local office-bearers. The party is now scrambling to contain damage before the July 30 poll while insisting it stands by its choice of candidate.",
    source: "Bombay Samachar",
    url: "https://english.bombaysamachar.com/india-news/datia-erupts-after-bjp-denies-ticket-to-narottam-mishra-supporters-clash-with-police/",
    category: "states",
    lean: "center",
    date: "2026-07-10"
  },

  // ── 9 JULY 2026 ──────────────────────────────────────────

  {
    headline: "Three former TMC Rajya Sabha MPs join BJP, get candidate tickets for July 24 bypolls within hours of defecting",
    blurb: "Sushmita Dev, Sukhendu Sekhar Roy, and Prakash Chik Baraik formally joined the BJP at its West Bengal headquarters in Kolkata on Thursday, and were named as candidates for the three Rajya Sabha seats they had vacated by resigning from the TMC. The BJP has the assembly numbers to win all three without a contest.",
    source: "Outlook India",
    url: "https://www.outlookindia.com/national/bjp-fields-ex-tmc-mps-sushmita-dev-sukhendu-sekhar-ray-prakash-chik-baraik-for-bengal-rajya-sabha-bypolls",
    category: "states",
    lean: "center",
    date: "2026-07-09"
  },
  {
    headline: "TMC veterans defecting on cue — is this choreographed consolidation or genuine dissent with Mamata's legacy?",
    blurb: "The Federal's analysis notes that the BJP had until now deliberately avoided directly inducting TMC leaders, routing defectors through a proxy party instead. The direct induction of three experienced Rajya Sabha MPs suggests a strategic shift — and raises questions about whether the defections are organic or coordinated.",
    source: "The Federal",
    url: "https://thefederal.com/category/states/east/west-bengal/samik-bhattacharya-defends-three-former-tmc-mps-joining-bjp-says-clean-leaders-are-welcome-249614",
    category: "opinion",
    lean: "left",
    date: "2026-07-09"
  },
  {
    headline: "30,000 at Marvel Stadium — Modi and Albanese address Melbourne diaspora event in front of the largest Indian-Australian crowd ever assembled",
    blurb: "An estimated 300 million people watched live as the two prime ministers spoke at a sold-out Marvel Stadium event. Albanese called Modi a 'living bridge'; Modi credited the million-strong Indian diaspora in Australia as the foundation of the bilateral relationship.",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    lean: "center",
    date: "2026-07-09"
  },
  {
    headline: "Modi's Australia visit is strategic pragmatism — but using the diaspora as a geopolitical instrument carries its own risks",
    blurb: "The Australia India Institute argues the Modi-Albanese summit is driven by shared concern about China in the Indo-Pacific, but warns that reducing the Indian diaspora to a vehicle for economic or geopolitical objectives could weaken social cohesion in Australia and undermine the community's own interests.",
    source: "The Conversation",
    url: "https://theconversation.com/narendra-modis-visit-to-australia-will-be-a-display-of-strategic-pragmatism-286838",
    category: "opinion",
    lean: "center",
    date: "2026-07-09"
  },

  // ── 7-8 JULY 2026 ────────────────────────────────────────

  {
    headline: "Monsoon Session July 20 to August 13 — 19 sittings, the 130th Amendment, Delimitation and One Nation One Election all on the agenda",
    blurb: "Parliament's Monsoon Session will have 19 sittings over 25 days. The government wants to advance three major constitutional bills; the opposition plans to open with a privilege motion against Defence Minister Rajnath Singh for allegedly misleading Parliament over Operation Sindoor casualty figures.",
    source: "Business Today",
    url: "https://www.businesstoday.in/india/story/monsoon-session-2026-parliament-to-start-from-july-20-a-look-at-key-bills-opposition-agenda-541007-2026-07-04",
    category: "national",
    lean: "center",
    date: "2026-07-07"
  },
  {
    headline: "130th Amendment's arrest-removal clause stays in — JPC meets July 17 to finalise report before Monsoon Session opens",
    blurb: "The Joint Parliamentary Committee will retain the provision that automatically removes a PM, Chief Minister or minister if they stay in judicial custody for 30 consecutive days. The government says it is about accountability; the opposition says it is a tool for political vendetta.",
    source: "Open The Magazine",
    url: "https://openthemagazine.com/india/parliament-monsoon-session-2026-to-begin-on-july-20-continue-till-august-13",
    category: "national",
    lean: "center",
    date: "2026-07-07"
  },
  {
    headline: "India's military gets a new top team — Army and Air Force leadership overhauled in July 1 reshuffle with Operation Sindoor veterans in key posts",
    blurb: "Lt Gen Sandeep Jain took over as Vice Chief of Army Staff on July 1 as part of a sweeping reshuffle that also brought new appointments at Southern and South Western Commands and a new Chief of Integrated Defence Staff. Several of the incoming commanders led formations during Operation Sindoor.",
    source: "The Week",
    url: "https://www.theweek.in/news/defence/2026/07/02/indias-top-military-leadership-gets-a-major-overhaul-here-are-all-the-new-faces.amp.html",
    category: "defence",
    lean: "center",
    date: "2026-07-07"
  },

  // ── 5-6 JULY 2026 ────────────────────────────────────────

  {
    headline: "US judge forces DOJ to explain Adani case U-turn — the Indian orders cited as justification never actually examined the bribery allegations",
    blurb: "A federal judge rejected the US Department of Justice's explanation for dropping charges against Gautam Adani. The Wire's investigation shows the three Indian decisions the DOJ pointed to as evidence of local scrutiny never addressed whether public officials actually received bribes.",
    source: "The Wire",
    url: "https://m.thewire.in/topic/law/forced-to-explain-adani-u-turn-doj-cites-indian-orders-that-never-examined-bribery-allegations",
    category: "courts",
    lean: "left",
    date: "2026-07-06"
  },
  {
    headline: "India's current account flips to a $4.7 billion surplus in April — remittances surged to $16 billion as services exports strengthened",
    blurb: "Reversing a $4.8 billion deficit a year earlier, India's April current account was boosted by strong IT and services exports and a surge in NRI remittances. FDI more than doubled to $11.4 billion though foreign portfolio investment outflows also rose sharply, reflecting global risk-off sentiment.",
    source: "Banking Finance",
    url: "https://www.bankingfinance.in/rbi-news-for-july-2026.html",
    category: "economy",
    lean: "center",
    date: "2026-07-06"
  },
  {
    headline: "Record Rs 1.78 lakh crore in defence production and Rs 38,424 crore in exports — Atmanirbhar Bharat is producing real numbers",
    blurb: "India's defence production and export figures for FY25-26 are the highest ever recorded. The export jump of 63% sees Indian weapons and systems now reaching more than 80 countries, with BrahMos leading the way in Southeast Asia. India remains the world's second-largest arms importer despite the gains.",
    source: "India's World",
    url: "https://indiasworld.in/strategic-signals-july-2026/",
    category: "defence",
    lean: "right",
    date: "2026-07-06"
  },
  {
    headline: "IT Act Section 69A is being used to silently take down political satire and opposition posts — no public record, no stated reason",
    blurb: "The Wire's investigation documents a growing pattern of social media takedown orders under the IT Act targeting content critical of the government. Because orders are issued under confidentiality provisions there is no public record, no stated justification, and no easy path to challenge them.",
    source: "The Wire",
    url: "https://m.thewire.in/article/government/online-censorship-it-act-narendra-modi",
    category: "national",
    lean: "left",
    date: "2026-07-05"
  },

  // ── OPINION ──────────────────────────────────────────────

  {
    headline: "Opinion — The ADR judgment is to our times what ADM Jabalpur was to the Emergency: Yogendra Yadav",
    blurb: "Political analyst Yogendra Yadav argues the Supreme Court's Bihar SIR ruling hands the Election Commission unlimited power to conduct voter roll revisions in any state without judicial oversight, drawing a parallel with the 1976 Emergency-era judgment that stripped citizens of habeas corpus protections.",
    source: "The Federal",
    url: "https://thefederal.com/category/news/yogendra-yadav-sir-adr-judgment-electoral-democracy-246520",
    category: "opinion",
    lean: "left",
    date: "2026-07-05"
  },
  {
    headline: "Opinion — The Supreme Court was right to uphold the Bihar electoral roll revision. Rolls not updated since 2003 needed a clean-up",
    blurb: "Outlook argues that the ADR ruling was a correct reading of election law — the court found that asking voters to provide supporting documents during a revision exercise does not negate citizenship, and that the EC had valid reasons to conduct the first intensive Bihar roll revision in over two decades.",
    source: "Outlook India",
    url: "https://www.outlookindia.com/national/supreme-court-upholds-bihar-electoral-roll-revision-backs-ecs-power-to-conduct-sir",
    category: "opinion",
    lean: "center",
    date: "2026-07-05"
  },

  // ── ECONOMY / COURTS ─────────────────────────────────────

  {
    headline: "GDP at 8.2%, inflation at 3.9%, rates at 5.25% — the RBI Governor calls it a 'rare goldilocks period' for India",
    blurb: "India's economy grew at a six-quarter high in Q2 FY26, driven by domestic consumption and GST rationalisation. With food inflation rising on Middle East-linked fertiliser costs but still below the 4% RBI threshold, the central bank has held its accommodative stance after cutting rates to 5.25% earlier this year.",
    source: "DD News",
    url: "https://ddnews.gov.in/en/indias-gdp-to-grow-7-in-fy26-crisil-raises-growth-forecast/",
    category: "economy",
    lean: "state-run",
    date: "2026-07-04"
  },
  {
    headline: "Supreme Court upheld Bihar's voter roll revision in May — and the Election Commission has already moved to replicate it in West Bengal",
    blurb: "The Supreme Court unanimously ruled in May that the Bihar SIR was constitutional, holding that accurate electoral rolls are fundamental to democracy. Within weeks, the EC announced a similar exercise for West Bengal. Opposition parties say the same documentary requirements that raised fears in Bihar are now being applied nationwide.",
    source: "SC Observer",
    url: "https://www.scobserver.in/cases/challenge-to-the-ecis-revision-of-electoral-rolls-in-bihar-sir-association-for-democratic-reforms-v-election-commission-of-india/",
    category: "courts",
    lean: "center",
    date: "2026-06-01"
  }

];
