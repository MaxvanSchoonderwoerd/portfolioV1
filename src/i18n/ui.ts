import { cvUi } from "./cv";

export const languages = {
  nl: "Nederlands",
  en: "English",
} as const;

export const defaultLang = "nl";

export const ui = {
  nl: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projecten",
    "nav.cv": "CV",
    "nav.contact": "Contact",

    // Home
    "home.greeting": "Hallo 👋",
    "home.name": "Ik ben Max van Schoonderwoerd",
    "home.role": "Software engineer & UX designer",
    "home.tagline": "Programmeur en ontwerper van creatieve oplossingen",
    "home.cta.collaborate": "Laten we samenwerken!",
    "home.cta.message": "Stuur me een bericht",
    "home.recentProjects": "Recente projecten",
    "home.allProjects": "Alle projecten",

    // Projects
    "projects.title": "Projecten",
    "projects.heading": "Alle projecten",
    "projects.back": "Terug",
    "projects.empty.title": "Sorry!",
    "projects.empty.text":
      "Er zijn momenteel geen projecten om te tonen. Kom later terug!",
    "projects.newer": "Nieuwere projecten",
    "projects.older": "Oudere projecten",
    "post.techStack": "Tech Stack",
    "post.lastUpdated": "Laatst bijgewerkt op",
    "post.screenshots": "Screenshots",

    // 404
    "404.title": "Pagina niet gevonden",
    "404.text": "De pagina die je zoekt bestaat niet.",
    "404.back": "Terug naar home",

    // Language switcher
    "lang.switch": "EN",
    "lang.button": "Switch to",

    // CV (see cv.ts)
    ...cvUi.nl,
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.contact": "Contact",

    // Home
    "home.greeting": "Hey there 👋",
    "home.name": "I'm Max van Schoonderwoerd",
    "home.role": "Software engineer & UX designer",
    "home.tagline": "Developer and designer of creative solutions",
    "home.cta.collaborate": "Let's work together!",
    "home.cta.message": "Send me a message",
    "home.recentProjects": "Recent projects",
    "home.allProjects": "All projects",

    // Projects
    "projects.title": "Projects",
    "projects.heading": "All projects",
    "projects.back": "Back",
    "projects.empty.title": "Sorry!",
    "projects.empty.text":
      "There are no projects to show at the moment. Check back later!",
    "projects.newer": "Newer projects",
    "projects.older": "Older projects",
    "post.techStack": "Tech Stack",
    "post.lastUpdated": "Last updated on",
    "post.screenshots": "Screenshots",

    // 404
    "404.title": "Page not found",
    "404.text": "The page you're looking for doesn't exist.",
    "404.back": "Back to home",

    // Language switcher
    "lang.switch": "NL",
    "lang.button": "Verander naar",

    // CV (see cv.ts)
    ...cvUi.en,
  },
} as const;
