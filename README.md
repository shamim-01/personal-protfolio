# Shamim Alam — Portfolio

Personal portfolio of **Shamim Alam**, Associate UI Engineer, MERN developer and junior data analyst based in Dhaka, Bangladesh.

Built with **React, Tailwind CSS, Framer Motion and Three.js**.

🔗 **Live:** https://shamim-alam.vercel.app  

---

## ✨ Features

- **Animated hero** — letter-by-letter title reveal, typing effect, magnetic buttons, parallax glow
- **3D scenes** — an interactive "data network" sphere in the hero and a wireframe torus knot in the contact section (Three.js)
- **Scroll animations** — staggered reveals, animated section headings, count-up stats, scroll progress bar
- **Interactive cards** — 3D tilt and cursor spotlight on hover
- **Project showcase** — expandable Problem / Solution overview, cursor-following screenshot preview
- **Learning journey** — animated timeline of how I learned and grew
- **Smart navbar** — scrollspy with a sliding underline, responsive mobile menu
- **Performance-minded** — 3D code is lazy-loaded, scenes pause when off-screen, and 3D is disabled on small screens and for users who prefer reduced motion
- **Accessible** — keyboard focus styles and `prefers-reduced-motion` support

## 🛠️ Tech Stack

| Area | Tools |
|---|---|
| Framework | React 19, Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| 3D | Three.js, @react-three/fiber |

## 🚀 Getting Started

**Requirements:** Node.js 18 or newer (20+ recommended)

```bash
# 1. Clone the repository
git clone https://github.com/shamim-01/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
├── index.html               # Meta tags, fonts, favicon
├── public/
│   ├── images/
│   │   ├── profile.jpg      # Profile photo
│   │   └── projects/        # Project screenshots
│   └── shamim_Alam.pdf      # CV (download button)
└── src/
    ├── data.js              # ✏️ All content lives here
    ├── hooks.js             # Typing, clock, scrollspy, count-up hooks
    ├── App.jsx
    ├── main.jsx
    ├── index.css            # Tailwind theme (colors, fonts, keyframes)
    └── components/
        ├── ui.jsx           # Card, Chip, Reveal, SectionHead, Magnetic…
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Sections.jsx     # Snapshot, About, Journey, Skills, Experience, Contact, Footer
        ├── Projects.jsx
        ├── ContactHeading.jsx
        └── Scene.jsx        # Three.js scenes (lazy-loaded)
```

## ✏️ Customizing

### Content
Almost everything (intro, skills, certifications, journey, work, education, projects) is stored in **`src/data.js`**. Edit the data and the components update automatically.

**Add a project** — add an object to the `projects` array:

```js
{
  group: 'mern stack',          // groups projects under a label
  name: 'My Project',
  desc: 'Short description.',
  tags: ['React', 'Node'],
  repo: 'https://github.com/...',
  live: 'https://...',          // optional → shows a "Live ↗" button
  shot: '/images/projects/my-project.jpg',
  problem: '...',
  solution: '...',
}
```

### Images & CV
- Profile photo → `public/images/profile.jpg`
- Project screenshots → `public/images/projects/`
- CV → `public/shamim_Alam.pdf`

### Colors
Theme colors are defined in `src/index.css` under `@theme` (`--color-lime` is the main accent). The accent hex (`#73F527`) is also used in `src/components/Scene.jsx`, `src/components/ContactHeading.jsx` and the favicon in `index.html`, so update those too when changing the accent.

### Social preview
After deploying, set the full URL of your preview image in `index.html`:

```html
<meta property="og:image" content="https://your-site.vercel.app/images/og.jpg" />
```

## 🌐 Deployment

The project is a standard Vite app and deploys easily on **Vercel** or **Netlify**:

1. Push the repository to GitHub
2. Import it on [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
3. Use these settings (usually auto-detected):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`

## 📬 Contact

- **Email:** shamimalam4949@gmail.com
- **GitHub:** [github.com/shamim-01](https://github.com/shamim-01)
- **LinkedIn:** [linkedin.com/in/shamimalam786](https://www.linkedin.com/in/shamimalam786/)

---

© 2026 Shamim Alam
