# Wafa — Under Construction

Temporary single-page landing page for the **Wafa (وفاء)** platform.

## Stack

- Static HTML, single page
- Tailwind CSS 3 (compiled locally — no CDN)
- Google Fonts: **Amiri** for the Arabic wordmark, **Noto Serif Bengali** for Bangla

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | The page markup |
| `styles.css` | Compiled, minified Tailwind output (deploy this) |
| `src/input.css` | Tailwind source + custom effects (grain, pattern, motion) |
| `tailwind.config.js` | Brand colors and font families |

## Develop

```bash
npm install
npm run dev
```

`npm run dev` watches `src/input.css` and rebuilds `styles.css`. Serve the folder with any static server, e.g.:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Build

```bash
npm run build
```

Deploy `index.html` and `styles.css` together. For a fully offline deployment, self-host the two Google Fonts instead of loading them from `fonts.googleapis.com`.

## Design

- Deep emerald `#0B4F3C`
- Ivory `#F8F5EF`
- Gold `#C9A227`
- Animated entrance, slow geometric medallion, and subtle grain; all motion is disabled under `prefers-reduced-motion`.
