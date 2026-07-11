# Ali Ebrahimpourlighvani — Personal Website

Live at **https://ali2025cu.github.io**

**No folders!** Every file sits at the top level, so updating the site is always the same move: select the files, drag them into GitHub's upload box, commit. Nothing can land in the wrong place.

## How to fix/update the live site

1. Go to your repo → **Add file → Upload files**
2. Select **all the files** in this folder (Ctrl/Cmd+A) and drag them in
3. Commit. The site refreshes in 1–2 minutes. Files with the same name are overwritten — that's what fixes the broken homepage.

## What each file is

| File | Purpose |
|---|---|
| `index.html` | Homepage (self-contained design — hero, bento grid, news timeline) |
| `academic.html`, `learning-apps.html`, `leadership.html`, `machine-learning.html`, `ai-models.html`, `agentic-ai.html` | The six category pages |
| `content.js` | **Content for the six category pages — the file you'll edit most** |
| `style.css` | Design for the category pages |
| `main.js` | Rendering logic (don't edit) |
| `flashcards-app.html` | Demo learning app (runs live in the browser) |
| `flashcards.zip` | Downloadable copy of the demo app |
| `profile.jpg` | Your photo — add this file yourself (portrait, ~800×1000px) |

## Your update checklist (in priority order)

1. **Photo:** upload a photo named exactly `profile.jpg`
2. **Links:** in `content.js`, replace the two `"#"` placeholders (Google Scholar, LinkedIn)
3. **Hero stats:** in `index.html`, the stats row shows `—` — put real numbers
4. **Homepage news:** in `index.html`, search for "Placeholder:" and replace those timeline entries
5. **Category content:** in `content.js`, replace every card marked "Placeholder:" with real papers/projects
6. **Security:** turn on two-factor authentication on GitHub

## How to add content over time

- **A paper/project:** in `content.js`, find the right section (`academic`, `apps`, `leadership`, `ml`, `aimodels`, `agentic`), copy an existing `{ ... }` card block, edit the text. You can edit directly on GitHub: click the file → pencil icon → commit.
- **A new app people can use:** create it as a single HTML file (e.g. `my-quiz.html`), upload it, then add a card in `content.js` with links: `{ label: "▶ Use the app", url: "my-quiz.html" }` and optionally a zip: `{ label: "⬇ Download", url: "my-quiz.zip", download: true }`
- **Homepage news:** edit `index.html`, search "Website launched" to find the timeline entries and copy the pattern.

## Security notes

- Static site: no server, no database, nothing to hack. HTTPS is automatic.
- The only key to protect is your GitHub login — use 2FA.
- The repo is public: don't upload private data (student data, unpublished sensitive results).
