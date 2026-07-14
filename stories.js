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
  // ── 14 JULY 2026 — TODAY ─────────────────────────────────

  {
    headline: "JPC softens the 130th Amendment — automatic removal of PM or CM replaced with temporary suspension",
    blurb: "The Joint Parliamentary Committee has recommended replacing the provision that automatically removed a PM, CM or minister after 30 days in judicial custody with a milder temporary suspension clause. Critics say the core principle of executive removal for being in custody remains constitutionally problematic.",
    source: "Barristery",
    url: "https://www.barristery.in/2026/07/current-affairs-daily-india-13-july-2026.html",
    category: "national",
    lean: "center",
    date: "2026-07-14"
  },

  // ── 13 JULY 2026 ─────────────────────────────────────────

  {
    headline: "Supreme Court: citizenship cannot be stripped without a fair hearing — 27 Assam foreigner declarations set aside",
    blurb: "A bench of Justices Vikram Nath and Sandeep Mehta set aside Gauhati High Court judgments upholding the declaration of 27 Assam residents as foreigners, ruling that citizenship carries profound constitutional significance and must be determined through a fair, lawful and reasonable process. All 27 cases remanded for fresh hearings.",
    source: "LiveLaw",
    url: "https://www.livelaw.in/supreme-court/citizenship-status-through-fair-process-supreme-court-sets-aside-foreigner-declarations-by-assam-tribunals-540909",
    category: "courts",
    lean: "center",
    date: "2026-07-13"
  },
  {
    headline: "SC restores citizenship of Assam Muslim man declared Bangladeshi 12 years ago — says state gave no basis for suspicion",
    blurb: "The Supreme Court declared Md Rahim Ali an Indian citizen after setting aside a 2012 Foreigners Tribunal declaration, noting the police never explained how they received the tip he came from Bangladesh and that minor document discrepancies were insufficient grounds to disbelieve him.",
    source: "Tribune India",
    url: "https://www.tribuneindia.com/news/india/sc-restores-citizenship-of-muslim-man-from-assam-after-12-years-639578",
    category: "courts",
    lean: "center",
    date: "2026-07-13"
  },
  {
    headline: "Govt issues notice to Meta over child sexual abuse ads on Instagram — now examining Meta's reply",
    blurb: "MeitY ordered Instagram to disable all ads promoting child sexual abuse material after a BBC Eye investigation exposed the problem. Meta submitted its explanation by Saturday's deadline and the IT Secretary confirmed it is being examined with action to follow.",
    source: "Business Standard",
    url: "https://www.business-standard.com/india-news/govt-examining-meta-s-reply-over-child-abuse-ads-on-instagram-it-secy-126071300462_1.html",
    category: "national",
    lean: "center",
    date: "2026-07-13"
  },
  {
    headline: "INS Mahendragiri commissioned — the 100th warship designed and delivered by the Indian Navy's own design bureau",
    blurb: "Defence Minister Rajnath Singh presided over the commissioning of the sixth and final Nilgiri-class stealth frigate at Visakhapatnam on July 11. The ship carries over 75% indigenous content and marks a major milestone in India's naval self-reliance programme.",
    source: "Legacy IAS",
    url: "https://www.legacyias.com/current-affairs-13-july-2026/",
    category: "defence",
    lean: "center",
    date: "2026-07-13"
  },
  {
    headline: "Kanhaiya Kumar gets bail in seven-year-old model code of conduct case in Bihar's Begusarai",
    blurb: "The Congress leader was granted bail by a magistrate court in connection with an MCC violation case from the 2019 general election. The case had been moving slowly through the courts for seven years.",
    source: "News9Live",
    url: "https://www.news9live.com/india/breaking-news-headlines-today-13-07-2026-live-updates-in-english-india-world-politics-crime-2988728",
    category: "courts",
    lean: "center",
    date: "2026-07-13"
  },
  {
    headline: "Opinion — Thousands still fighting foreigner labels from flawed ex-parte hearings — the Assam citizenship rulings show what the NRC left behind",
    blurb: "The Federal argues Monday's Supreme Court rulings reveal a systemic problem: Foreigners Tribunals issued ex-parte verdicts when people didn't appear, sometimes never having been properly notified, and courts have spent years undoing decisions that stripped Indian citizens of citizenship through processes that fell far short of basic fairness.",
    source: "The Federal",
    url: "https://thefederal.com/category/news/sc-says-citizenship-must-be-determined-fairly-sets-aside-assam-foreigner-tribunal-orders-249941",
    category: "opinion",
    lean: "left",
    date: "2026-07-13"
  },

  // ── 13 JULY 2026 — TODAY ─────────────────────────────────

  {
    headline: "Supreme Court hears Ram Mandir donation probe petitions today — CBI inquiry, CAG audit and forensic review of all trust finances sought",
    blurb: "A three-judge bench headed by Chief Justice Surya Kant is hearing three petitions demanding an independent probe into the alleged embezzlement of devotee donations at Ayodhya. One petition seeks a CBI investigation; another wants a CAG audit; a third filed by RJD MP Sudhakar Singh asks for a complete forensic review of every financial transaction since the trust's formation.",
    source: "The Federal",
    url: "https://thefederal.com/category/news/supreme-court-ayodhya-ram-temple-donation-probe-petitions-july-13-249657",
    category: "courts",
    lean: "left",
    date: "2026-07-13"
  },
  {
    headline: "Congress delegation heads to Meerut today to meet Lalita Gautam's family — plans to file FIR against Meerut SSP for beating a protester in custody",
    blurb: "All six Congress Lok Sabha MPs from Uttar Pradesh will join the visit led by state in-charge Rajendra Pal Gautam. The party plans to file a complaint demanding the Meerut SP's resignation and registration of an FIR for the viral incident in which SSP Avinash Pandey was caught on camera slapping a person already inside a police van.",
    source: "Asianet Newsable",
    url: "https://newsable.asianetnews.com/india/up-politics-heats-up-over-dalit-student-lalita-gautams-alleged-murder-articleshow-iguoh83",
    category: "states",
    lean: "center",
    date: "2026-07-13"
  },

  // ── 12 JULY 2026 — YESTERDAY ─────────────────────────────

  {
    headline: "Sharad Pawar meets Eknath Shinde inside his official chamber — 15-minute meeting sends Maharashtra's opposition into crisis",
    blurb: "NCP (SP) chief Sharad Pawar visited Maharashtra Assembly for a border dispute meeting and then walked into Deputy CM Eknath Shinde's chamber for a 15-minute private meeting. What was discussed was not disclosed. Shiv Sena (UBT)'s Sanjay Raut called it a betrayal; NCP (SP) said it was a routine courtesy call. Congress says it was pre-planned.",
    source: "Outlook India",
    url: "https://www.outlookindia.com/national/sharad-pawars-meeting-in-shindes-office-sparks-tension",
    category: "states",
    lean: "center",
    date: "2026-07-12"
  },
  {
    headline: "Is Sharad Pawar keeping his options open for 2027 — or is Maharashtra's MVA already over in everything but name?",
    blurb: "Pawar has friends in every party and has always played the long game. But meeting Shinde in his official chamber, not at a neutral venue, and then holding an NCP (SP) MLA meeting in the same room immediately after, has raised questions about whether the 85-year-old patriarch is positioning for a post-election alignment rather than a pre-election one.",
    source: "NewsX",
    url: "https://www.newsx.com/regionals/after-eknath-shinde-meets-sharad-pawar-triggering-merger-buzz-maharashtra-deputy-cm-responds-246990/",
    category: "opinion",
    lean: "center",
    date: "2026-07-12"
  },
  {
    headline: "UP police SSP caught on camera slapping a protester already in custody during Lalita Gautam demonstrations — video goes viral",
    blurb: "A 30-second clip showing Meerut SSP Avinash Pandey walking up to sloganeering protesters, slapping several, then opening a police van and beating a person already inside has triggered national outrage. Congress chief Mallikarjun Kharge called it proof of the BJP government's anti-Dalit face. The SSP claimed the protesters had criminal histories.",
    source: "OpIndia",
    url: "https://www.opindia.com/2026/07/viral-video-meerut-ssp-avinash-pandey-slapping-protestor-dalit-lalita-murder-case-politicised-in-up/",
    category: "states",
    lean: "right",
    date: "2026-07-12"
  },
  {
    headline: "Dalit student Lalita Gautam was murdered in a sugarcane field — her case has become UP's biggest political flashpoint since Hathras",
    blurb: "Lalita Gautam, 20, went missing from Meerut on May 15 while heading to sit an exam. Her body was found the next day in a sugarcane field. The main accused has been arrested. But the case exploded politically when police were filmed stopping opposition leaders from reaching the family and a viral video showed an SSP beating protesters.",
    source: "ANI",
    url: "https://aninews.in/news/national/politics/dalit-students-brutal-murder-in-up-exposed-anti-woman-anti-dalit-face-of-double-engine-government-kharge-slams-bjp-for-house-arrest-of-protesting-cong-leaders20260710180643/",
    category: "national",
    lean: "center",
    date: "2026-07-12"
  },
  {
    headline: "Akhilesh Yadav meets Lalita Gautam's family in Meerut — Mayawati stays home and issues a statement instead",
    blurb: "SP chief Akhilesh Yadav visited the family personally. Bhim Army's Chandrashekhar Azad also met them at a toll plaza after police initially blocked him. BSP's Mayawati, by contrast, issued a written statement from home criticising Azad — drawing sharp criticism that the BSP leader is losing touch with Dalit voters on the ground.",
    source: "Dynamite News",
    url: "https://www.dynamitenews.com/uttar-pradesh/sp-chief-akhilesh-yadav-meets-lalita-gautams-family-assures-full-support-in-fight-for-justice",
    category: "states",
    lean: "center",
    date: "2026-07-12"
  },
  {
    headline: "Opinion — The Lalita Gautam case is being politicised. Focus on the accused, not the SSP's manner: OpIndia",
    blurb: "OpIndia argues that the opposition's outrage has shifted attention from the actual murder and the arrested accused to a video of a police officer, and that framing the case as purely a Dalit issue ignores the individual crime and turns a justice demand into an electoral tool ahead of 2027 UP assembly elections.",
    source: "OpIndia",
    url: "https://www.opindia.com/2026/07/viral-video-meerut-ssp-avinash-pandey-slapping-protestor-dalit-lalita-murder-case-politicised-in-up/",
    category: "opinion",
    lean: "right",
    date: "2026-07-12"
  },
  {
    headline: "Opinion — Every 2 hours a Dalit woman is raped in India. Lalita Gautam is not a political opportunity — she is a pattern: Kharge",
    blurb: "Congress president Mallikarjun Kharge's statement frames the Meerut case within NCRB data showing 12 Dalit women are raped daily in India, and accuses the BJP government of suppressing victims' voices in UP the same way it did in Hathras and Unnao — and of arresting those demanding justice instead of delivering it.",
    source: "ANI",
    url: "https://aninews.in/news/national/politics/dalit-students-brutal-murder-in-up-exposed-anti-woman-anti-dalit-face-of-double-engine-government-kharge-slams-bjp-for-house-arrest-of-protesting-cong-leaders20260710180643/",
    category: "opinion",
    lean: "left",
    date: "2026-07-12"
  },

  // ── 11-12 JULY 2026 ──────────────────────────────────────

  {
    headline: "Modi ends three-nation tour with 18 outcomes from New Zealand — Strategic Partnership signed, trade target NZD 7 billion by 2030",
    blurb: "India and New Zealand elevated ties to a Strategic Partnership on the final stop of Modi's Indo-Pacific tour, with agreements on maritime security, counter-terrorism, agri-tech and a Joint Working Group on Kiwifruit. It was the first Indian PM visit to New Zealand in four decades.",
    source: "ANI",
    url: "https://aninews.in/news/world/asia/great-year-for-the-india-new-zealand-partnership-pm-modis-new-zealand-visit-bears-18-outcomes20260711100939/",
    category: "world",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "BJP riot in its own backyard — Narottam Mishra supporters block NH-44 for 11 hours, 8 cops injured after ticket denial in Datia",
    blurb: "Thousands of supporters of former MP Home Minister Narottam Mishra clashed with police in Datia after the BJP nominated RSS organiser Ashutosh Tiwari instead of him for the July 30 bypoll. Tear gas was fired, vehicles overturned, the SP himself was among those injured. Mishra conspicuously stayed silent.",
    source: "Tribune India",
    url: "https://www.tribuneindia.com/news/madhya-pradesh/mp-bypoll-violence-protest-over-bjp-ticket-denial-turns-violent-8-cops-hurt-nh-44-blocked-for-11-hours/",
    category: "states",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "POCSO accused out on bail kills six — the teenage complainant, her mother, grandmother, his wife and two young sons",
    blurb: "A 28-year-old man in Telangana's Ranga Reddy district allegedly murdered six people after being released on bail in a POCSO sexual assault case. He called his father to confess before absconding; police launched a manhunt. Critics are questioning how the accused secured bail in such a serious case.",
    source: "Siasat Daily",
    url: "https://www.siasat.com/man-kills-six-family-members-in-ranga-reddy-village-3505386/",
    category: "national",
    lean: "center",
    date: "2026-07-11"
  },
  {
    headline: "Three former TMC Rajya Sabha MPs join BJP in Kolkata, get candidate tickets for July 24 bypolls within hours",
    blurb: "Sushmita Dev, Sukhendu Sekhar Roy and Prakash Chik Baraik formally joined the BJP and were immediately fielded for the three Rajya Sabha seats they had vacated by resigning from the TMC. The BJP's numbers in the West Bengal assembly guarantee all three will win without a contest.",
    source: "Outlook India",
    url: "https://www.outlookindia.com/national/bjp-fields-ex-tmc-mps-sushmita-dev-sukhendu-sekhar-ray-prakash-chik-baraik-for-bengal-rajya-sabha-bypolls",
    category: "states",
    lean: "center",
    date: "2026-07-09"
  },

  // ── 7-10 JULY 2026 ───────────────────────────────────────

  {
    headline: "Monsoon Session July 20-August 13: three major bills, a privilege motion against Rajnath Singh, and an opposition in disarray",
    blurb: "The 25-day Monsoon Session with 19 sittings follows BJP wins in West Bengal, Assam and Puducherry. The government wants to advance the Delimitation Bill, One Nation One Election and the 130th Amendment. The opposition plans to open with a privilege motion over alleged lies about Operation Sindoor casualties.",
    source: "Business Today",
    url: "https://www.businesstoday.in/india/story/monsoon-session-2026-parliament-to-start-from-july-20-a-look-at-key-bills-opposition-agenda-541007-2026-07-04",
    category: "national",
    lean: "center",
    date: "2026-07-07"
  },
  {
    headline: "Ram Mandir trust accepts Champat Rai's resignation — VHP's Bajrang Bagra frontrunner as new General Secretary",
    blurb: "The trust has formally accepted the resignation amid the donation theft scandal. Eight people have been arrested so far. Bajrang Bagra, a chartered accountant with PSU experience, is the leading candidate to replace Rai. Trust restructuring including a new deed and CEO appointment are on the agenda for the July 22 meeting.",
    source: "APN Live",
    url: "https://apnlive.com/india-news/champat-rai-resignation-accepted-ram-temple-trust-donation-theft-row/",
    category: "national",
    lean: "center",
    date: "2026-07-08"
  },
  {
    headline: "Opinion — The SIT found 70 donation thefts on CCTV in five weeks. The Ram Mandir management problem was structural, not just criminal",
    blurb: "OpIndia's analysis of the SIT's preliminary findings describes how frisking rules were formally weakened, how internal audit warnings about CCTV backup lapses went unheeded from 2022 to 2026, and how cash was hidden in socks and underclothing. The piece argues the scandal reveals a total absence of financial governance in the trust.",
    source: "OpIndia",
    url: "https://www.opindia.com/2026/07/ayodhya-donation-theft-sit-report-lack-of-accountability-gross-mismanagement-ignored-warnings/",
    category: "opinion",
    lean: "right",
    date: "2026-07-08"
  },
  {
    headline: "NIA names Hafiz Saeed as Pahalgam mastermind — supplementary chargesheet lays out Pakistan's cross-border conspiracy in detail",
    blurb: "The NIA filed a supplementary chargesheet naming LeT chief Hafiz Saeed as the principal conspirator who planned, directed and monitored the April 22, 2025 Pahalgam attack from Pakistan. It is the first time a sitting head of a Pakistan-based terror organisation has been formally charged in an Indian court for a specific attack.",
    source: "Organiser",
    url: "https://organiser.org/2026/07/07/368715/bharat/pahalgam-terror-attack-nia-names-hafiz-saeed-in-fresh-chargesheet-details-pakistans-cross-border-conspiracy/",
    category: "courts",
    lean: "right",
    date: "2026-07-07"
  },
  {
    headline: "US judge forces DOJ to explain Adani case U-turn — the Indian orders cited as justification never examined the bribery allegations",
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
    headline: "IT Act Section 69A is being used to silently take down political satire and opposition posts — no public record, no stated reason",
    blurb: "The Wire's investigation documents a growing pattern of social media takedown orders under the IT Act targeting content critical of the government. Because orders are issued under confidentiality provisions there is no public record, no stated justification, and no easy path to challenge them.",
    source: "The Wire",
    url: "https://m.thewire.in/article/government/online-censorship-it-act-narendra-modi",
    category: "national",
    lean: "left",
    date: "2026-07-05"
  },
  {
    headline: "Opinion — The Monsoon Session will test whether India still has a real opposition or just a rump that legitimises BJP's supermajority",
    blurb: "With the TMC split, DMK-Congress alliance fraying, and UBT fragmenting, the opposition entering the Monsoon Session is smaller and more demoralised than at any point since 2014. Whether the remaining bloc can mount a genuine legislative fight on the Delimitation Bill and the arrest-removal clause will define the session.",
    source: "Kashmir Vision",
    url: "https://kashmirvision.in/2026/07/05/parliaments-monsoon-session-from-jul-20/",
    category: "opinion",
    lean: "center",
    date: "2026-07-05"
  },
  {
    headline: "GDP at 8.2%, inflation at 3.9%, rates at 5.25% — the RBI Governor calls it a rare goldilocks period for India",
    blurb: "India's economy grew at a six-quarter high in Q2 FY26, driven by domestic consumption and GST rationalisation. With food inflation rising on Middle East-linked fertiliser costs but still below the 4% RBI threshold, the central bank has held its accommodative stance.",
    source: "DD News",
    url: "https://ddnews.gov.in/en/indias-gdp-to-grow-7-in-fy26-crisil-raises-growth-forecast/",
    category: "economy",
    lean: "state-run",
    date: "2026-07-04"
  }

];
