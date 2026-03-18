# Krish Majhi — Portfolio

A clean, black & white React portfolio with a particle network animation in the hero section.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build
```

---

## Customising Your Portfolio

**All your personal content lives in one file:**

```
src/data.js
```

Open it and you'll find clearly labelled sections for:

| What to change          | Where in data.js        |
|-------------------------|-------------------------|
| Name, role, tagline     | `PERSON`                |
| Profile photo           | `PERSON.avatarUrl`      |
| Availability badge      | `PERSON.availabilityBadge` |
| About / bio paragraphs  | `ABOUT.paragraphs`      |
| Stats (projects, years) | `ABOUT.stats`           |
| Skills & tech stack     | `SKILL_GROUPS`          |
| Projects + links        | `PROJECTS`              |
| Contact links           | `CONTACT.links`         |

### Adding your profile photo

**Option A – Local file:**
1. Put your photo in `src/assets/photo.jpg`
2. In `src/data.js`, at the top add:
   ```js
   import myPhoto from './assets/photo.jpg'
   ```
3. Set `avatarUrl: myPhoto`

**Option B – Remote URL:**
```js
avatarUrl: 'https://your-cdn.com/photo.jpg'
```

### Adding / editing projects

In `src/data.js`, find the `PROJECTS` array and add an entry:
```js
{
  tag: 'Web App',
  name: 'My Project',
  description: 'What it does in one sentence.',
  stack: ['React', 'FastAPI'],
  liveUrl: 'https://myproject.com',   // or null to hide
  githubUrl: 'https://github.com/you/repo', // or null to hide
},
```

### Wiring up the contact form

In `src/components/Contact.jsx`, find the `handleSubmit` function.
Uncomment and configure one of:
- **EmailJS** (easiest, no backend needed)
- **Formspree** (free tier available)
- **Your own FastAPI endpoint**

### Tweaking the particle animation

In `src/components/Hero.jsx`, at the top you'll find:
```js
const PARTICLE_COUNT = 90   // number of dots
const MAX_DIST       = 130  // line-draw distance
const MOUSE_DIST     = 160  // mouse interaction range
const PARTICLE_SPEED = 0.5  // drift speed
```

---

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css          ← global styles & CSS variables
    ├── data.js             ← ALL your personal content
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css     ← particle animation lives here
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Projects.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

---

## Deployment

**Vercel (recommended):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# drag & drop the dist/ folder to netlify.com
```
