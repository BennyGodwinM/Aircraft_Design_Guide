# Redesign — Deployment Instructions

Three files to copy into your repo. That's it.

---

## Files

```
redesign/
├── _static/
│   ├── custom.css   →  copy to  _static/custom.css   (replace existing)
│   └── custom.js    →  copy to  _static/custom.js    (replace existing)
└── intro.md         →  copy to  intro.md             (replace existing)
```

---

## Step-by-step

### 1. Copy the static files

In your local clone of `Aircraft_Design_Guide`, replace:

- `_static/custom.css`  with the one from `redesign/_static/custom.css`
- `_static/custom.js`   with the one from `redesign/_static/custom.js`

Both files are already referenced in your `_config.yml` under `html.extra_css`
and `html.extra_js`, so no config changes are needed.

### 2. Replace intro.md

Copy `redesign/intro.md` to the root of your repo, replacing the existing one.

### 3. Fix chapter card URLs (important)

The chapter grid cards in `intro.md` use URLs like:

```
01_Overview/overview.html
```

These need to match the actual HTML filenames Jupyter Book generates for your
notebooks. The filename is whatever your notebook is called inside each folder.

Open a few of your chapter folders and check — for example, if the notebook in
`01_Overview/` is called `01_overview.ipynb`, the URL would be:

```
01_Overview/01_overview.html
```

Update each `href` in the `.ag-grid` section of `intro.md` to match your actual
filenames. If you're unsure, build the book locally first (`jupyter-book build .`)
and look at what filenames appear in `_build/html/`.

### 4. Build and push

```bash
# Build locally to check it looks right
jupyter-book build .

# Preview
open _build/html/index.html

# Commit and push — GitHub Actions will deploy automatically
git add _static/custom.css _static/custom.js intro.md
git commit -m "redesign: dark aerospace theme + hero landing page"
git push
```

---

## What changed and why

| File | What changed |
|---|---|
| `_static/custom.css` | Full theme override — colors, typography, navbar, sidebar, code cells, admonitions, hero components, cards, responsive layout. All scoped to `html[data-theme="dark"]` so light mode is unaffected if you ever toggle it. |
| `_static/custom.js` | Scroll-aware navbar, smooth anchors, copy button polish, sidebar auto-scroll to active item. Vanilla JS, no dependencies. |
| `intro.md` | Hero section with headline, CTA buttons, and stats. Chapter grid (27 cards). Reference list. Author card with links. All content preserved, restructured for visual hierarchy. |

## What was NOT changed

- `_config.yml` — no edits needed; it already references the CSS/JS files and has dark mode set
- `_toc.yml` — untouched; all routing is preserved
- Every chapter notebook — untouched
- `preface.md` and all other pages — untouched (the CSS applies globally)

---

## Notes on the chapter card URLs

If you want the easy path: after running `jupyter-book build .`, check
`_build/html/` and copy the actual filenames from there into `intro.md`.

Alternatively, look at your `_toc.yml` — each `file:` entry maps directly to
a `.html` file in the built site. For example:

```yaml
- file: 01_Overview/overview
```

...becomes `01_Overview/overview.html` in the built output.
