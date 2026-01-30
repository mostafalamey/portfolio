# Copilot Instructions for Architecture Portfolio

## Project Overview

A React 19 + Vite portfolio website for an architecture studio with heavy GSAP animations, a custom carousel hero, and Tailwind CSS v4 theming. Deployed on Vercel.

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 7** for builds and HMR
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (uses `@theme` directive, not `tailwind.config.js`)
- **GSAP 3** with `@gsap/react` for scroll-triggered and interactive animations
- **react-use** for utility hooks (e.g., `useWindowScroll`)
- **react-icons** for iconography

## Project Structure

```
src/
├── App.jsx          # Page composition - single-page layout with sections
├── main.jsx         # React entry point
├── index.css        # Global styles + Tailwind theme + carousel CSS
└── components/      # Section components (NavBar, NewHero, About, etc.)
public/
├── img/             # Static images (.webp, .png)
├── videos/          # Feature videos (.mp4)
└── audio/           # Background music
```

## Key Architecture Patterns

### Component Structure

- Components are section-based (NewHero, About, Features, Story, Contact, Footer)
- Each section has its own scroll-triggered animations via `useGSAP`
- `NewHero.jsx` uses a CSS-based carousel with auto-play functionality

### Animation Pattern (GSAP + ScrollTrigger)

```jsx
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#element",
      start: "center center",
      end: "+=800 center",
      scrub: 0.5,
      pin: true,
    },
  });
  tl.to(".target", {
    /* animation props */
  });
});
```

### Tailwind v4 Custom Theme (in `index.css`)

Theme uses `@theme` directive with custom color palettes:

- **sage-100 to sage-900** - green accent colors
- **stone-100 to stone-1000** - neutral grays/browns
- **cream-100 to cream-1000** - warm backgrounds
- **blue-gray-100 to blue-gray-900** - cool neutrals

Custom fonts defined:

- `--font-display` / `--font-accent`: Poppins (headings)
- `--font-body`: Inter (body text)

### Utility Classes (defined in `index.css`)

- `display-font` - applies display font with weight 600
- `nav-hover-btn` - animated underline nav links
- `floating-nav` - blurred floating navigation style
- `flex-center`, `absolute-center` - centering utilities
- `hero-heading`, `about-subtext`, `bento-title` - typography presets
- `text-shadow-soft`, `text-shadow-hard` - text shadow utilities

## Component Conventions

### Button Component

```jsx
<Button
  id="unique-id"
  title="Button Text"
  rightIcon={<IconComponent />}
  containerClass="additional-classes"
  onClick={handler}
/>
```

### AnimatedTitle Component

Uses `<br />` for line breaks, `<b>` for letter emphasis:

```jsx
<AnimatedTitle
  title="Craf<b>t</b>ing Spaces that <br /> Insp<b>i</b>re"
  containerClass="text-center"
/>
```

### Card Component (for Features bento grid)

```jsx
<Card
  src="/videos/feature-1.mp4"
  title={
    <>
      residen<b>t</b>ial
    </>
  } // JSX with bold letters
  description="Card description"
  isComingSoon={false}
/>
```

## Development Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build to dist/
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## File Naming & Assets

- Static assets in `public/` - referenced as `/img/name.webp`, `/videos/name.mp4`
- Prefer `.webp` for images, `.mp4` for videos
- Gallery images follow pattern: `gallery-{n}.png` or `gallery-{n}.webp`

## Deployment

- **Current**: Vercel (temporary for client review)
- **Production**: Will migrate to client's GoDaddy hosting after final approval
- Build output: `dist/` folder (standard Vite build)
- No environment variables required currently

## Git Workflow

- **main**: Stable, production-ready code
- **design-v2**: Alternative design exploration branch
- Use feature branches for new components: `feature/component-name`
- Commit messages: Use conventional commits (`feat:`, `fix:`, `style:`, `refactor:`)
- Test build before merging: `npm run build && npm run preview`

## Future Integrations (Planned)

- **Contact Form**: Will add form submission backend (consider Formspree, Netlify Forms, or custom API)
- **Admin CMS**: Client dashboard to manage projects (add/edit/remove) - keep component structure flexible for dynamic data

## Important Notes

- No TypeScript - all files are `.jsx`
- GSAP plugins must be registered: `gsap.registerPlugin(ScrollTrigger)`
- Section IDs for navigation: `#about`, `#projects`, `#services`, `#contact`
- Carousel animations use CSS keyframes (see `index.css` carousel section)
- Keep project data structure ready for CMS migration (currently hardcoded in components)
