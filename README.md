# Money Personality Quiz — Africa's Moneypreneur

A 15-question quiz that sorts a person into one of five money personalities:
**Swipe Queen, Piggy Baddie, Stacker Princess, Alpha Cowgirl,** or **Swipe & Pray Girlie**.
Scores are tallied by letter (A–E) and the result shows a blended breakdown
(e.g. "70% Stacker Princess + 30% Alpha Cowgirl") rather than a single rigid type.

It's a static site (HTML/CSS/vanilla JS) wrapped in a tiny Express server so it
can run as a Render **Web Service**. No database, no build step, no framework.

## Project structure

```
.
├── public/
│   ├── index.html      # the three screens: intro, quiz, results
│   ├── style.css        # visual design
│   ├── data.js          # all 15 questions + the 5 result types — edit copy here
│   └── script.js        # quiz logic (scoring, navigation, rendering)
├── server.js             # Express static server (reads PORT from env)
├── package.json
├── render.yaml            # optional infra-as-code config for Render
└── .gitignore
```

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Money personality quiz"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to Render

**Option A — Blueprint (uses the included `render.yaml`)**
1. Push this repo to GitHub (above).
2. In the Render dashboard, click **New > Blueprint**, and select the repo.
3. Render reads `render.yaml` and creates the web service automatically.
4. Click **Apply** — it builds with `npm install` and starts with `npm start`.

**Option B — Manual web service**
1. In the Render dashboard, click **New > Web Service** and connect the repo.
2. Set:
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. Click **Create Web Service**. Render assigns a URL like
   `https://moneypreneur-money-quiz.onrender.com`.

No environment variables are required — the app has no external dependencies
or secrets.

### Alternative: Render Static Site
Since this app has no server-side logic beyond serving files, you can skip
Express entirely and deploy `public/` as a Render **Static Site** instead
(Build Command: none, Publish Directory: `public`). The `server.js` /
`package.json` files are only needed if you want it as a Web Service.

## Editing the quiz content

All questions and result copy live in `public/data.js`:
- `QUESTIONS` — array of 15 questions, each with 5 options tagged `A`–`E`.
- `RESULTS` — the five personality write-ups, keyed by dominant letter.

Change the wording there; `script.js` (scoring/navigation) and `style.css`
(visual design) don't need to change for content edits.

## How scoring works

Each answer maps to a letter A–E. At the end, the app counts how many times
each letter was chosen and shows:
- The **top letter** as the headline result.
- A **blend line** (e.g. "60% Stacker Princess + 27% Alpha Cowgirl") using the
  top two letters, so close results feel accurate instead of forced into one
  box.
- A full **breakdown bar** for all five types, most-picked first.
