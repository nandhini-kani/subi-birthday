# A day for Subi

A small birthday surprise site built with Next.js App Router.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — welcome page and links to the surprise
- `/birthday` — birthday letter
- `/memories` — favorite moments
- `/dreams` — wishes for the year ahead
- `/surprise` — final birthday greeting

The site opens with a welcome screen. Click **Open your surprise** to continue.

## Add your own photos and music

Place your photos and audio at these paths to replace the built-in visual
placeholders and enable the music button:

- `public/images/subi/subi-main.jpg` — home page portrait
- `public/images/subi/subi-dream.jpg` — dreams page image
- `public/images/subi/memory-1.jpg`, `memory-2.jpg`, `memory-3.jpg` — memory cards
- `public/music/birthday-song.mp3` — looping music player track

The photo cards and music control remain usable if those files have not been
added yet.
