/**
 * All CV-related i18n: the translatable strings (profile, section headings,
 * skill labels, and the work/education entry titles & subtitles) plus the
 * language-agnostic entry layout.
 *
 * `cvUi` is merged into the main `ui` object in ui.ts so it resolves through
 * the shared t() helper like any other key.
 */
export const cvUi = {
  nl: {
    // Sections
    "cv.profile": "Profiel",
    "cv.profileText":
      "Hey! Ik ben Max van Schoonderwoerd, software engineer met een passie voor UX-design. Ik krijg energie van het bouwen van digitale producten die niet alleen technisch sterk zijn, maar ook prettig en intuïtief in gebruik. Ik ben altijd nieuwsgierig naar hoe dingen werken, leer snel nieuwe vaardigheden en vind het leuk om oplossingen te bouwen die echt waarde toevoegen voor gebruikers.",
    "cv.workExperience": "Werkervaringen",
    "cv.education": "Educatie",
    "cv.skills": "Vaardigheden",
    "cv.skills.frontend": "Front-end",
    "cv.skills.backend": "Back-end",
    "cv.skills.design": "Design",
    "cv.skills.other": "Overig",

    // Work experience entries
    "cv.work.maqqie.title": "Junior Software Engineer",
    "cv.work.maqqie.subtitle": "1 jaar · oktober 2025 tot oktober 2026 · bij Maqqie",
    "cv.work.elephant.title": "Afstudeerstage Elephant/InDordrecht",
    "cv.work.elephant.subtitle": "4 maanden · februari 2025 tot juni 2025 · bij Elephant",
    "cv.work.studentaanhuis.title": "Huis aan huis ICT hulp",
    "cv.work.studentaanhuis.subtitle": "1 jaar · februari 2024 tot februari 2025 · bij Student aan Huis",
    "cv.work.radboud.title": "Game tester/youth advisor",
    "cv.work.radboud.subtitle": "6 maanden · september 2023 tot februari 2024 · voor Radboud Universiteit",
    "cv.work.rox.title": "Stage fullstack webdevelopment",
    "cv.work.rox.subtitle": "6 maanden · september 2023 tot februari 2024 · bij ROX",

    // Education entries
    "cv.edu.minor.title": "Minor Interface & User Experience Design",
    "cv.edu.minor.subtitle": "vanaf september 2024 tot februari 2025, Hogeschool Rotterdam, Rotterdam",
    "cv.edu.hbo.title": "HBO Creative media and game technologies",
    "cv.edu.hbo.subtitle": "Vanaf september 2020 tot juli 2025, Hogeschool Rotterdam, Rotterdam",
    "cv.edu.havo.title": "HAVO middelbare school",
    "cv.edu.havo.subtitle": "2014 tot 2019, Insula college, Dordrecht",
  },
  en: {
    // Sections
    "cv.profile": "Profile",
    "cv.profileText":
      "Hey! I'm Max van Schoonderwoerd, a software engineer with a passion for UX design. I get energy from building digital products that are not only technically solid, but also pleasant and intuitive to use. I'm always curious about how things work, learn new skills quickly, and love building solutions that add real value for users.",
    "cv.workExperience": "Work experience",
    "cv.education": "Education",
    "cv.skills": "Skills",
    "cv.skills.frontend": "Front-end",
    "cv.skills.backend": "Back-end",
    "cv.skills.design": "Design",
    "cv.skills.other": "Other",

    // Work experience entries
    "cv.work.maqqie.title": "Junior Software Engineer",
    "cv.work.maqqie.subtitle": "1 year · October 2025 to October 2026 · at Maqqie",
    "cv.work.elephant.title": "Graduation internship Elephant/InDordrecht",
    "cv.work.elephant.subtitle": "4 months · February 2025 to June 2025 · at Elephant",
    "cv.work.studentaanhuis.title": "Door-to-door IT support",
    "cv.work.studentaanhuis.subtitle": "1 year · February 2024 to February 2025 · at Student aan Huis",
    "cv.work.radboud.title": "Game tester/youth advisor",
    "cv.work.radboud.subtitle": "6 months · September 2023 to February 2024 · for Radboud University",
    "cv.work.rox.title": "Full-stack web development internship",
    "cv.work.rox.subtitle": "6 months · September 2023 to February 2024 · at ROX",

    // Education entries
    "cv.edu.minor.title": "Minor Interface & User Experience Design",
    "cv.edu.minor.subtitle": "September 2024 to February 2025, Rotterdam University of Applied Sciences, Rotterdam",
    "cv.edu.hbo.title": "BSc Creative Media and Game Technologies",
    "cv.edu.hbo.subtitle": "September 2020 to July 2025, Rotterdam University of Applied Sciences, Rotterdam",
    "cv.edu.havo.title": "HAVO secondary school",
    "cv.edu.havo.subtitle": "2014 to 2019, Insula College, Dordrecht",
  },
} as const;

/**
 * CV entry layout — defined ONCE, language-agnostic. Each entry references its
 * translation keys; `highlight` lives here so it's edited in a single place.
 */
export const cvLayout = {
  work: [
    { key: "cv.work.maqqie", highlight: true },
    { key: "cv.work.elephant" },
    { key: "cv.work.studentaanhuis" },
    { key: "cv.work.radboud" },
    { key: "cv.work.rox" },
  ],
  education: [
    { key: "cv.edu.minor" },
    { key: "cv.edu.hbo", highlight: true },
    { key: "cv.edu.havo" },
  ],
} as const;
