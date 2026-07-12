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

  // ── 12 JULY 2026 — TODAY ─────────────────────────────────

  {
    headline: "Opinion — Is the Ram Mandir back on track? A three-member committee, a new CEO search, and accountability finally being fixed",
    blurb: "India TV News editor Rajat Sharma argues the temple is moving toward structural reform after the donation scandal, with a retired judge heading a committee to shortlist a CEO and formal responsibilities now being assigned to every trustee. He says the crisis, though embarrassing, has forced accountability that was always missing.",
    source: "India TV News",
    url: "https://www.indiatvnews.com/news/india/opinion-is-ram-mandir-back-on-track-aaj-ki-baat-with-rajat-sharma-latest-episode-2026-07-11-1047913",
    category: "opinion",
    lean: "center",
    date: "2026-07-12"
  },

  // ── 11 JULY 2026 ─────────────────────────────────────────

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
    headline: "POCSO accused out on bail kills six — the teenage complainant, her mother, grandmother, his wife, and his two young sons",
    blurb: "A 28-year-old man in Telangana's Ranga Reddy district allegedly murdered six people Friday night after being released on bail in a POCSO sexual assault case. He called his father to confess before absconding; police launched a manhunt. Critics are questioning how the accused secured bail in such a serious case.",
    source: "Siasat Daily",
    url: "https://www.siasat.com/man-kills-six-family-members-in-ranga-reddy-village-3505386/",
    category: "national",
    lean: "center",
    date: "2026-07-11"
  },

  // ── 10 JULY 2026 ─────────────────────────────────────────

  {
    headline: "Supreme Court to hear three petitions seeking independent probe into Ram Mandir donation theft on July 13",
    blurb: "A three-judge bench headed by Chief Justice Surya Kant will take up petitions demanding a court-monitored inquiry into the alleged embezzlement of hundreds of crores from the Ayodhya temple's donation boxes. The SIT's preliminary findings already flagged 70 suspicious incidents on CCTV in just five weeks.",
    source: "Rozana Spokesman",
    url: "https://www.rozanaspokesman.com/news/uttar-pradesh/100726/sc-to-hear-pleas-for-independent-probe-into-ram-temple-trust-finances.html",
    category: "courts",
    lean: "center",
    date: "2026-07-10"
  },
  {
    headline: "30,000 at Marvel Stadium as Modi and Albanese close India-Australia summit in Melbourne — uranium deal and defence upgrades signed",
    blurb: "The third Australia-India Annual Leaders' Summit wrapped up with a uranium supply agreement, enhanced maritime security cooperation, and a joint program at the Melbourne Cricket Ground. Albanese called Modi a 'living bridge' at the sold-out community event.",
    source: "South Asian Herald",
    url: "https://southasianherald.com/modis-melbourne-visit-puts-india-australia-ties-in-focus/",
    category: "world",
    lean: "center",
    date: "2026-07-10"
  },

  // ── 9 JULY 2026 ──────────────────────────────────────────

  {
    headline: "Three former TMC Rajya Sabha MPs join BJP in Kolkata, get candidate tickets for July 24 bypolls within hours",
    blurb: "Sushmita Dev, Sukhendu Sekhar Roy and Prakash Chik Baraik formally joined the BJP and were immediately fielded for the three Rajya Sabha seats they vacated by resigning from the TMC. The BJP's numbers in the West Bengal assembly guarantee all three will win without a contest.",
    source: "Outlook India",
    url: "https://www.outlookindia.com/national/bjp-fields-ex-tmc-mps-sushmita-dev-sukhendu-sekhar-ray-prakash-chik-baraik-for-bengal-rajya-sabha-bypolls",
    category: "states",
    lean: "center",
    date: "2026-07-09"
  },
  {
    headline: "NIA names Hafiz Saeed as the mastermind of the Pahalgam attack — supplementary chargesheet lays out Pakistan's cross-border conspiracy",
    blurb: "The NIA filed a supplementary chargesheet before the Special Court in Jammu naming LeT chief Hafiz Saeed as the principal conspirator who planned, directed and monitored the April 22, 2025 attack from Pakistan. The original chargesheet was 1,597 pages; the new filing expands the forensic and digital evidence.",
    source: "India TV News",
    url: "https://www.indiatvnews.com/news/india/let-chief-hafiz-saeed-named-as-accused-in-nia-supplementary-chargesheet-in-pahalgam-terror-attack-case-latest-updates-2026-07-06-1047296",
    category: "courts",
    lean: "center",
    date: "2026-07-09"
  },
  {
    headline: "Modi's Australia visit is strategic pragmatism — but treating the diaspora as a geopolitical instrument has its own risks",
    blurb: "The Australia India Institute argues the Modi-Albanese summit is driven by shared concern about China, but warns that reducing the Indian diaspora to a vehicle for economic or geopolitical objectives could weaken social cohesion in Australia and undermine the community's own long-term interests.",
    source: "The Conversation",
    url: "https://theconversation.com/narendra-modis-visit-to-australia-will-be-a-display-of-strategic-pragmatism-286838",
    category: "opinion",
    lean: "center",
    date: "2026-07-09"
  },

  // ── 8 JULY 2026 ──────────────────────────────────────────

  {
    headline: "Champat Rai dismisses embezzlement allegations as baseless — says he will respond point by point only after the SIT files its final report",
    blurb: "In a handwritten letter to 'Ram devotees', the former Ram Janmabhoomi Trust general secretary broke his silence for the first time since resigning, saying the claims against him are false but he will not speak fully until the investigation concludes. His driver Tinnu Yadav has already been arrested.",
    source: "The Week",
    url: "https://www.theweek.in/news/india/2026/07/07/full-truth-will-come-out-champat-rai-responds-to-ram-mandir-embezzlement-claims-for-first-timefull-truth-will-come-out-champat-rai-responds-to-ram-mandir-embezzlement-claims-for-first-time.html",
    category: "national",
    lean: "center",
    date: "2026-07-08"
  },

  // ── 7 JULY 2026 ──────────────────────────────────────────

  {
    headline: "Monsoon Session July 20-August 13: three major bills, a privilege motion against Rajnath Singh, and an opposition in disarray",
    blurb: "The 25-day session with 19 sittings follows BJP wins in West Bengal, Assam and Puducherry. The government wants to push the Delimitation Bill, One Nation One Election, and the 130th Amendment through with its strengthened numbers. The opposition plans to open with a privilege motion over alleged lies about Operation Sindoor casualties.",
    source: "Daily Pioneer",
    url: "https://dailypioneer.com/news/parliament-monsoon-session-to-begin-july-20",
    category: "national",
    lean: "center",
    date: "2026-07-07"
  },
  {
    headline: "NIA names Hafiz Saeed in the Pahalgam chargesheet — here is what the RSS-linked Organiser says it means for Pakistan accountability",
    blurb: "Organiser frames the supplementary chargesheet as a landmark in India's effort to hold Pakistan legally accountable for state-sponsored terrorism, noting it is the first time a sitting head of a Pakistan-based terror organisation has been formally charged in an Indian court for a specific attack.",
    source: "Organiser",
    url: "https://organiser.org/2026/07/07/368715/bharat/pahalgam-terror-attack-nia-names-hafiz-saeed-in-fresh-chargesheet-details-pakistans-cross-border-conspiracy/",
    category: "national",
    lean: "right",
    date: "2026-07-07"
  },

  // ── OPINION — RAM MANDIR SCANDAL ─────────────────────────

  {
    headline: "Opinion — The SIT report on the Ram Mandir is damning: 70 thefts on CCTV, frisking rules deliberately relaxed, auditors ignored for four years",
    blurb: "OpIndia's analysis of the SIT's preliminary findings describes how temple staff stole cash by stuffing it into socks, underclothing and attached bathrooms, how frisking rules were formally weakened in a February 2026 SOP, and how internal audit warnings about CCTV backup and security lapses went unheeded from 2022 to 2026.",
    source: "OpIndia",
    url: "https://www.opindia.com/2026/07/ayodhya-donation-theft-sit-report-lack-of-accountability-gross-mismanagement-ignored-warnings/",
    category: "opinion",
    lean: "right",
    date: "2026-07-08"
  },
  {
    headline: "Ram Mandir trust accepts Champat Rai's resignation — VHP's Bajrang Bagra frontrunner to succeed him as General Secretary",
    blurb: "The Shri Ram Janmabhoomi Teerth Kshetra Trust has formally accepted Champat Rai's resignation following the donation theft row. Bajrang Bagra, the VHP's International General Secretary and a chartered accountant with PSU NALCO experience, is the leading candidate to take over. Eight people have so far been arrested.",
    source: "APN Live",
    url: "https://apnlive.com/india-news/champat-rai-resignation-accepted-ram-temple-trust-donation-theft-row/",
    category: "national",
    lean: "center",
    date: "2026-07-08"
  },

  // ── ECONOMY ──────────────────────────────────────────────

  {
    headline: "Petrol gets Rs 5 cheaper, diesel Rs 3 cheaper from July 1 — Nayara Energy rolls back March price hike as crude eases",
    blurb: "Nayara Energy reversed its March 2026 fuel price increase after global crude prices fell from their Middle East conflict peaks. Government oil companies had also raised prices cumulatively by around Rs 7.50 per litre earlier in the year; those increases remain in place.",
    source: "News24",
    url: "https://news24online.com/india/petrol-diesel-price-cut-big-relief-on-july-1-as-nayara-energy-cuts-petrol-price-by-rs-5-diesel-by-rs-3/874599/",
    category: "economy",
    lean: "center",
    date: "2026-07-01"
  },
  {
    headline: "150 Japanese companies announce Rs 1.18 lakh crore investment in India at Modi-Takaichi summit — semiconductors and manufacturing the focus",
    blurb: "The India-Japan Annual Leaders' Summit in Tokyo produced commitments from over 150 Japanese firms to invest in Indian semiconductor fabs, electronics manufacturing and supply chain infrastructure. Both sides also finalised a bilateral currency swap arrangement and agreed on a joint critical minerals strategy.",
    source: "Hindustan Times",
    url: "https://www.hindustantimes.com/india-news/india-japan-summit-2026",
    category: "economy",
    lean: "center",
    date: "2026-07-02"
  },

  // ── OPINION — MONSOON SESSION & DEMOCRACY ────────────────

  {
    headline: "Opinion — The Monsoon Session will test whether India still has a real opposition or just a rump that legitimises BJP's supermajority",
    blurb: "With the TMC split, DMK-Congress alliance ended, and UBT fragmenting, the opposition entering the Monsoon Session is smaller, more fragmented and more demoralised than at any point since 2014. Whether the remaining bloc can mount a genuine legislative fight on the Delimitation Bill and the arrest-removal clause will define the session.",
    source: "Kashmir Vision",
    url: "https://kashmirvision.in/2026/07/05/parliaments-monsoon-session-from-jul-20/",
    category: "opinion",
    lean: "center",
    date: "2026-07-05"
  },
  {
    headline: "Opinion — The 130th Amendment is accountability legislation, not vendetta politics — Swarajya on why the automatic removal clause is justified",
    blurb: "Swarajya argues that requiring a PM or CM to vacate office after 30 days in judicial custody is a reasonable accountability norm in a democracy where powerful politicians have used their position to delay trials indefinitely. The author says the opposition's objections are self-serving given who is most likely to face such a situation.",
    source: "Swarajya",
    url: "https://swarajyamag.com/topic/india",
    category: "opinion",
    lean: "right",
    date: "2026-07-06"
  },
  {
    headline: "Opinion — The 130th Amendment is a constitutional weapon. Who gets to pull the trigger matters more than the principle it claims to uphold",
    blurb: "A counter-argument published in The Federal warns that a provision removing elected leaders based on 30 days of judicial custody — at a time when bail for politically inconvenient leaders has become harder to obtain — gives the party controlling the prosecution an unprecedented tool to decapitate rival governments without a trial.",
    source: "The Federal",
    url: "https://thefederal.com/category/states/east/west-bengal/samik-bhattacharya-defends-three-former-tmc-mps-joining-bjp-says-clean-leaders-are-welcome-249614",
    category: "opinion",
    lean: "left",
    date: "2026-07-05"
  },

  // ── DEFENCE ──────────────────────────────────────────────

  {
    headline: "India's military gets a new top team — Army Vice Chief, Air Force Vice Chief, two Commands overhauled in July 1 reshuffle",
    blurb: "Lt Gen Sandeep Jain took over as Vice Chief of Army Staff in a wide-ranging leadership overhaul that also brought a new Chief of Integrated Defence Staff and new commanders at Southern and South Western Commands. Several incoming officers led formations during Operation Sindoor.",
    source: "The Week",
    url: "https://www.theweek.in/news/defence/2026/07/02/indias-top-military-leadership-gets-a-major-overhaul-here-are-all-the-new-faces.amp.html",
    category: "defence",
    lean: "center",
    date: "2026-07-07"
  },
  {
    headline: "Record Rs 1.78 lakh crore in defence production and Rs 38,424 crore in exports — defence industrialisation numbers are real, but import dependency remains",
    blurb: "India's defence production and export figures hit all-time highs in FY25-26, with BrahMos leading exports to 80+ countries. The figures are genuine gains from Atmanirbhar Bharat policy, but India remains the world's second-largest arms importer — the dependency on foreign platforms for major systems has not fundamentally changed.",
    source: "India's World",
    url: "https://indiasworld.in/strategic-signals-july-2026/",
    category: "defence",
    lean: "center",
    date: "2026-07-06"
  },

  // ── COURTS ───────────────────────────────────────────────

  {
    headline: "Adani US case: federal judge rejects DOJ's explanation — the Indian orders cited as justification never examined the bribery claims",
    blurb: "Forced by a federal judge to explain why it dropped charges against Gautam Adani, the US DOJ pointed to three Indian legal decisions as evidence of local scrutiny. The Wire's investigation shows none of the three documents addressed whether government officials actually received illegal payments.",
    source: "The Wire",
    url: "https://m.thewire.in/topic/law/forced-to-explain-adani-u-turn-doj-cites-indian-orders-that-never-examined-bribery-allegations",
    category: "courts",
    lean: "left",
    date: "2026-07-06"
  }

];
