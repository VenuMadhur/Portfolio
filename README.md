# CHOLLETI VENU MADHUR — Developer Portfolio

A bespoke, recruiter-focused portfolio engineered for **CHOLLETI VENU MADHUR** (Software Developer | AI & Machine Learning Enthusiast, Class of 2026). Built using modern React 19, Tailwind CSS v4, Motion for React, and Lucide React with the **Official Brand Palette** (40% Primary Black `#0b0b0c`, 40% Pure White `#ffffff`, 20% Electric Lime Green `#c6f432`) inspired by high-end editorial websites and modern creative developer portfolios.

---

## 🚀 Live Demo & Deployment Ready

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 with custom dark & light theme tokens
- **Animations:** Motion for React (`motion/react`)
- **Typography:** Space Grotesk (Headings) & Inter (Body)
- **Deployment Platform:** Vercel / GitHub Pages ready

---

## 📁 Source Code Architecture

```text
Portfolio/
├── public/
│   ├── Cholletti-Venu-Madhur-Resume.pdf  # Local resume download asset
│   ├── favicon.svg                       # Bespoke 'VM' monogram SVG favicon
│   └── og-image.png                      # Social share graph image
├── src/
│   ├── components/
│   │   ├── BrandIcons.jsx                # Verified SVG brand icons (LinkedIn, GitHub)
│   │   ├── Footer.jsx                    # Sticky back-to-top & recruiter direct access
│   │   ├── Navbar.jsx                    # Blur on scroll, scroll-spy indicator, mobile drawer
│   │   ├── ProjectCard.jsx               # Cards with tech badges, code & demo triggers
│   │   ├── ProjectMockup.jsx             # Tailored UI mockups (Healthcare AI, Code Editor, etc.)
│   │   ├── ResumeButtons.jsx             # View Resume & Download PDF modal controls
│   │   ├── SectionHeading.jsx            # Standardized section headings with animated badges
│   │   ├── SocialLinks.jsx               # Safe accessible social media links
│   │   └── TechIcon.jsx                  # Authentic SVG icons for 20+ technologies
│   ├── data/
│   │   ├── personal.js                   # Central configuration for name, bio, links, and contact
│   │   ├── education.js                  # Vertical education timeline entries
│   │   ├── skills.js                     # Categorized skill catalog with verified logos
│   │   └── projects.js                   # Project entries, descriptions, and repo/demo links
│   ├── hooks/
│   │   └── useScrollSpy.js               # Dynamic active section tracker for smooth navigation
│   ├── sections/
│   │   ├── Hero.jsx                      # Premium dark hero, role text rotator, engineering avatar
│   │   ├── About.jsx                     # Editorial narrative, academic highlights, timeline
│   │   ├── Skills.jsx                    # Interactive categorized toolkit grid with filters
│   │   ├── Projects.jsx                  # Featured projects with initial 3 cards + View All
│   │   ├── GitHub.jsx                    # Real-time GitHub API stats card & contribution chart
│   │   └── Contact.jsx                   # Contact cards + accessible form with `:user-invalid`
│   ├── App.jsx                           # Primary layout composer
│   ├── index.css                         # Tailwind v4 import, theme tokens, and modern form styles
│   └── main.jsx                          # React 19 root bootstrap
├── index.html                            # SEO meta tags, Open Graph, and Google Fonts
├── package.json                          # Dependencies & scripts
└── vite.config.js                        # Vite React & Tailwind CSS plugin configuration
```

---

## ⚡ Quick Start & Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (Tested on v22.17)
- **npm**: v9.0.0 or later

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/cholletivenumadhur/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
```bash
npm run build
```
Build output is generated into the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Personalize & Update Data

All content is centralized in the `src/data/` folder so you can update your details without modifying UI code:

### 1. Update Personal Info & Links (`src/data/personal.js`)
- `fullName`: Your full legal name
- `roles`: Titles rotating in the hero (e.g. Full Stack Developer, AI Engineer)
- `email`: Your active contact email
- `phone`: Your contact phone number
- `linkedinUrl`: Your actual LinkedIn profile URL (e.g. `https://linkedin.com/in/...`)
- `githubUrl`: Your GitHub profile link
- `githubUsername`: Your GitHub handle (used for real-time stats and contribution chart)
- `viewResumeUrl`: Your shareable Google Drive PDF link

### 2. Update Profile Photo
- Place your photo inside `public/images/profile.jpg`.
- Set `profilePhoto: "/images/profile.jpg"` in `src/data/personal.js`.
- If left empty, the site automatically renders the interactive geometric engineering avatar composition.

### 3. Update Resume PDF
- Replace `public/Cholletti-Venu-Madhur-Resume.pdf` with your updated resume PDF. Keep the filename the same, or update `downloadResumePath` in `src/data/personal.js`.

### 4. Update Projects (`src/data/projects.js`)
- Add or revise projects, descriptions, and technology stacks.
- Paste your actual repository URLs in `githubUrl` and deployed demo links in `demoUrl`.
- Empty strings (`""`) automatically display an honest "Repo Pending" or "Demo Pending" state to prevent broken links.

---

## 🌐 Deployment Instructions (Vercel)

### Option A: Deploy via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Cholleti Venu Madhur portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your site will be live with free global HTTPS.

### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📋 29-Point Recruiter Quality Checklist

| # | Requirement | Status | Notes |
|---|---|:---:|---|
| 1 | Website works on a public URL | 🟡 Pending | Ready to deploy to Vercel/Netlify |
| 2 | Professional portfolio URL containing candidate's name | 🟡 Pending | Configure domain during Vercel setup (e.g., `venumadhur.dev` or `cholletivenumadhur.vercel.app`) |
| 3 | Responsive on phone, tablet, and laptop | ✅ Completed | Tested across 375px, 768px, 1024px, 1280px+ viewports |
| 4 | At least 3 consistent colors & 1 font system used across sections | ✅ Completed | Primary Black (`#0b0b0c` - 40%), Pure White (`#ffffff` - 40%), Electric Lime Green (`#c6f432` - 20%); Space Grotesk + Inter |
| 5 | Home, About Me, Skills, Projects, Contact, and Resume links in Navbar | ✅ Completed | All 6 section targets + Resume trigger implemented |
| 6 | Responsive navigation | ✅ Completed | Desktop menu + animated mobile drawer |
| 7 | Sticky or fixed navbar | ✅ Completed | Fixed navbar with scroll-triggered backdrop blur |
| 8 | Full name, one professional photo, and formal 2-3 line introduction | ✅ Completed | Hero features full name, bio, and engineering avatar with photo slot |
| 9 | Education history timeline, newest first | ✅ Completed | B.Tech CSE (2026) followed by Senior Secondary |
| 10 | Home and About sections responsive | ✅ Completed | Flex/grid layouts tested on mobile & desktop |
| 11 | Four to five strong projects | ✅ Completed | 4 featured projects covering AI, Full Stack, and Privacy FL |
| 12 | First 3 project cards visible, remaining behind View More | ✅ Completed | Exactly 3 cards shown initially; "View All Projects (4)" toggles rest |
| 13 | Each project has cover image/mockup, title, and description | ✅ Completed | Custom interactive SVG mockups for all 4 domains |
| 14 | Technology stack highlighted | ✅ Completed | Badges for Python, React, FastAPI, PyTorch, Flower, etc. |
| 15 | GitHub and Deployment or Video actions on every project | ✅ Completed | Action buttons on every card |
| 16 | Card details visible without clicking | ✅ Completed | Title, summary, impact, and tech visible immediately |
| 17 | Responsive project cards | ✅ Completed | 3 columns on wide desktop, 2 on tablet, 1 on mobile |
| 18 | Correct GitHub link for every project | 🟡 Pending Info | Placeholders in `projects.js`; safe pending state rendered |
| 19 | Correct deployment or video link for every project | 🟡 Pending Info | Placeholders in `projects.js`; safe pending state rendered |
| 20 | GitHub statistics shown | ✅ Completed | Real-time GitHub REST API integration for repos, followers, gists |
| 21 | GitHub contribution calendar shown | ✅ Completed | Dynamic contribution graph with fallback state |
| 22 | Technical skills displayed with logos | ✅ Completed | 20+ authentic technology SVG logos |
| 23 | Tools displayed with logos | ✅ Completed | Git, GitHub, VS Code, Postman, Vercel |
| 24 | Responsive skills and tools section | ✅ Completed | Filterable category grid with hover feedback |
| 25 | Social links including LinkedIn and GitHub | ✅ Completed | Linked in Hero, Contact, and Footer |
| 26 | Phone number and email displayed | ✅ Completed | Displayed in Contact section and Footer |
| 27 | Contact form with name, email, and message | ✅ Completed | Accessible form with `:user-invalid` validation |
| 28 | View Resume and Download Resume buttons in Home section | ✅ Completed | Both actions prominent in Hero |
| 29 | Download downloads PDF; View opens Google Drive in new tab | ✅ Completed | Real PDF download configured; Drive preview configured |

---

## 🔒 Modern Web Guidance & Accessibility
- Synchronized `:user-invalid` pseudo-class for form validation to prevent premature error states while typing.
- Accessibility landmark regions (`<header>`, `<main>`, `<article>`, `<footer>`).
- Full keyboard focus indicators and `prefers-reduced-motion` media query compliance.
