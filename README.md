# The Political Rant — README

Two files run this whole site:
- `index.html` — the page itself (design, layout, filtering logic)
- `stories.js` — your content. This is the ONLY file you need to touch day-to-day.

## Adding a new story (takes ~1 minute)

1. Open `stories.js` in any text editor (Notepad, VS Code, even your phone's text editor).
2. Copy one of the existing `{ ... }` blocks inside the `STORIES` array.
3. Paste it at the top of the array.
4. Edit the fields:
   - `headline` — write your OWN short framing of the story. Don't copy-paste the source's exact headline (copyright + it loses the "rant" voice).
   - `blurb` — 1-2 sentences, your own words.
   - `source` — outlet name, e.g. "The Hindu"
   - `url` — the actual article link
   - `category` — pick one: national, states, economy, courts, defence, world, opinion
   - `lean` — left / right / center / state-run
   - `date` — "YYYY-MM-DD"
5. Save the file. Refresh the page (or redeploy, see below). Done — no build step.

To remove a story, just delete its `{ ... }` block.

## Deploying for free

Pick one (all free, no credit card):

### Option A — Netlify Drop (easiest, no account needed to start)
1. Go to https://app.netlify.com/drop
2. Drag the `political-rant` folder onto the page.
3. You get a live URL instantly (e.g. `random-name.netlify.app`).
4. To update later: drag the folder again, or connect it to a GitHub repo for one-click redeploys.

### Option B — GitHub Pages (best if you want version history)
1. Create a free GitHub account and a new repository (e.g. `political-rant`).
2. Upload `index.html` and `stories.js` to it.
3. In the repo, go to Settings → Pages → set source to "main branch / root".
4. Your site goes live at `yourusername.github.io/political-rant`.
5. Editing `stories.js` directly on GitHub's website (click the file → pencil icon → edit → commit) updates the live site automatically.

### Option C — Vercel
Same idea as Netlify — connect a GitHub repo at vercel.com and it auto-deploys on every commit.

## Custom domain later

Once you're ready to spend the ~₹700-1000/year, buy a `.in` or `.com` domain (Namecheap, GoDaddy, or Indian registrars like BigRock) and point it at whichever host you chose above — all three support free custom domain connection.

## A note on sourcing for "unfiltered"

The site is only as unfiltered as the spread of outlets you pull from. Make a habit of adding stories from across the spectrum on the same topics — e.g. how OpIndia covers a bill vs. how The Wire covers it — so readers see the framing differences, not just one version of events.
