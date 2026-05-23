# Jom Membaca Interaktif

A production-ready bilingual reading web app for Malaysian primary school students aged 7-12. Built with React, Vite, Tailwind CSS, Framer Motion, React Router, Local Storage, Lucide Icons, React Confetti, Howler-ready sound support, and a Canvas-based hidden object mini game.

## Features

- 6 primary school year levels: Tahun 1 to Tahun 6
- Bahasa Melayu and English learning paths
- 60 generated reading materials
- 10-question gamified quiz for every reading
- Crossword puzzle for every reading
- Canvas hidden object mini game for every reading
- XP, stars, badges, stickers, level progression, and trophy cabinet
- Local Storage progress persistence
- Mobile-first interface with bottom navigation
- GitHub Pages deployment through `gh-pages`

## Folder Structure

```text
jom-membaca-interaktif/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Create a new GitHub repository named `jom-membaca-interaktif`.
2. Update the `homepage` field in `package.json`:

```json
"homepage": "https://YOUR_USERNAME.github.io/jom-membaca-interaktif"
```

3. Push the project:

```bash
git init
git add .
git commit -m "Initial Jom Membaca Interaktif app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jom-membaca-interaktif.git
git push -u origin main
```

4. Deploy:

```bash
npm run deploy
```

5. In GitHub, open the repository settings, go to **Pages**, and select the `gh-pages` branch as the source.

## GitHub Pages Notes

- `vite.config.js` sets the production base path to `/jom-membaca-interaktif/`.
- The app uses `HashRouter`, so every screen works directly from the deployed URL.
- All student data is stored locally in the browser. No backend is required.
Deployment retry
