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
    "cv.download": "Download CV",
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
    //maqqie
    "cv.work.maqqie.title": "Junior Software Engineer",
    "cv.work.maqqie.subtitle":
      "9 maanden · oktober 2025 tot heden · bij Maqqie",
    "cv.work.maqqie.description":
      "Als Junior Software Engineer bij Maqqie draag ik bij aan de ontwikkeling van een nieuwe backoffice applicatie waarmee intern het Maqqie platform kan geconfigureerd en beheerd worden. Daarbij werk ik samen met andere software engineers en verschillende afdelingen zoals legal, support, en customer success.\n\nIn deze rol ontwikkel ik mij tot fullstack software engineer. Ik ben zonder ervaring met Kotlin en Spring Boot begonnen en draag inmiddels dagelijks bij aan de back-end productie code binnen een grote codebase. Daarnaast werk ik met Vue.js en TypeScript aan de frontend.\n\nNaast mijn technische ontwikkeling verdiep ik mij in het domein van arbeidsrecht en de uitzendbranche. Door het volgen van de SEU Backoffice Professional training heb ik inzicht gekregen in de wet- en regelgeving achter de software die ik help bouwen.\n\nDeze ervaring leert mij om snel nieuwe technologieën op te pakken, complexe domeinkennis eigen te maken en continu te blijven leren om betere software te bouwen.",

    //elephant
    "cv.work.elephant.title": "Afstudeerstage Elephant/InDordrecht",
    "cv.work.elephant.subtitle":
      "4 maanden · februari 2025 tot juni 2025 · bij Elephant",
    "cv.work.elephant.description":
      "Bij Elephant heb ik onderzoek uitgevoerd naar de personalisatie van evenementen- en voorzieningsdata voor InDordrecht. Hierbij onderzocht ik hoe gepersonaliseerde content kon bijdragen aan een betere bezoekerservaring, meer bezoekers en een langere verblijfsduur.\n\nOp basis van het onderzoek ontwikkelde ik een technisch prototype waarin de onderzochte technologieën werden toegepast binnen een gebruiksvriendelijk ontwerp. De resultaten boden zowel Elephant als InDordrecht concrete handvatten voor de verdere ontwikkeling van een technische oplossing voor gepersonaliseerde bezoekersinformatie.\n\nDit project leverde inzicht op in de mogelijkheden van datagedreven personalisatie en de potentiële impact daarvan op bezoekersaantallen en de lokale economie van Dordrecht.",

    //studentaanhuis
    "cv.work.studentaanhuis.title": "Aan huis ICT hulp",
    "cv.work.studentaanhuis.subtitle":
      "1 jaar · februari 2024 tot februari 2025 · bij Student aan Huis",
    "cv.work.studentaanhuis.description":
      "Als medewerker bij student aan huis, bood ik eerste hulp bij IT/ICT problemen. Klanten plande afspraken met mij in waarna ik bij hun thuis hulp gaf en advies bood over alles m.b.t. ICT.",

    //radboud
    "cv.work.radboud.title": "Game tester/youth advisor",
    "cv.work.radboud.subtitle":
      "6 maanden · september 2023 tot februari 2024 · voor Radboud Universiteit",
    "cv.work.radboud.description":
      "Als gametester/youth advisor gaf ik  bruikbare feedback samen met onderbouwde adviezen, op een game dat als doel heeft om jongeren te helpen om van roken af te komen. Doordat ik onderdeel ben van de doelgroep van het project, en ik ervaring heb met stoppen, heb ik kunnen bijdragen aan het ontwikkel proces van de game. Ik heb dit wekelijkse gedaan tijdens engelstalige online meetings.",

    //rox
    "cv.work.rox.title": "Stage fullstack webdevelopment",
    "cv.work.rox.subtitle":
      "6 maanden · september 2023 tot februari 2024 · bij ROX",
    "cv.work.rox.description":
      "webdevelopment stage bij ROX voor 3de jaar CMGT",

    // Education entries
    "cv.edu.minor.title": "Minor Interface & User Experience Design",
    "cv.edu.minor.subtitle":
      "vanaf september 2024 tot februari 2025, Hogeschool Rotterdam, Rotterdam",
    "cv.edu.hbo.title": "HBO Creative media and game technologies",
    "cv.edu.hbo.subtitle":
      "Vanaf september 2020 tot juli 2025, Hogeschool Rotterdam, Rotterdam",
    "cv.edu.havo.title": "HAVO middelbare school",
    "cv.edu.havo.subtitle": "2014 tot 2019, Insula college, Dordrecht",
  },
  en: {
    // Sections
    "cv.download": "Download CV",
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
    "cv.work.maqqie.subtitle": "9 months · October 2025 to present · at Maqqie",
    "cv.work.maqqie.description":
      "As a Junior Software Engineer at Maqqie, I contribute to the development of a new back office application that lets the Maqqie platform be configured and managed internally. In doing so, I work together with other software engineers and various departments such as legal, support, and customer success.\n\nIn this role I'm growing into a full-stack software engineer. I started with no experience in Kotlin and Spring Boot, and I now contribute to the back-end production code within a large codebase on a daily basis. Alongside that, I work with Vue.js and TypeScript on the frontend.\n\nBeyond my technical development, I'm deepening my knowledge of the domain of labour law and the temporary staffing industry. Through the SEU Backoffice Professional training I gained insight into the laws and regulations behind the software I help build.\n\nThis experience is teaching me to quickly pick up new technologies, master complex domain knowledge, and keep learning continuously in order to build better software.",

    "cv.work.elephant.title": "Graduation internship Elephant/InDordrecht",
    "cv.work.elephant.subtitle":
      "4 months · February 2025 to June 2025 · at Elephant",
    "cv.work.elephant.description":
      "At Elephant I carried out research into the personalisation of event and amenity data for InDordrecht. I investigated how personalised content could contribute to a better visitor experience, more visitors, and a longer length of stay.\n\nBased on the research, I developed a technical prototype in which the researched technologies were applied within a user-friendly design. The results gave both Elephant and InDordrecht concrete guidance for the further development of a technical solution for personalised visitor information.\n\nThis project provided insight into the possibilities of data-driven personalisation and its potential impact on visitor numbers and the local economy of Dordrecht.",

    "cv.work.studentaanhuis.title": "In house IT support",
    "cv.work.studentaanhuis.subtitle":
      "1 year · February 2024 to February 2025 · at Student aan Huis",
    "cv.work.studentaanhuis.description":
      "As an employee at Student aan Huis, I provided first-line help with IT/ICT problems. Customers scheduled appointments with me, after which I visited them at home to offer help and advice on everything related to ICT.",

    "cv.work.radboud.title": "Game tester/youth advisor",
    "cv.work.radboud.subtitle":
      "6 months · September 2023 to February 2024 · for Radboud University",
    "cv.work.radboud.description":
      "As a game tester/youth advisor, I provided actionable feedback along with well-founded advice on a game designed to help young people quit smoking. Because I'm part of the project's target audience and have experience with quitting myself, I was able to contribute to the game's development process. I did this weekly during English-language online meetings.",

    "cv.work.rox.title": "Full-stack web development internship",
    "cv.work.rox.subtitle":
      "6 months · September 2023 to February 2024 · at ROX",
    "cv.work.rox.description":
      "Web development internship at ROX for the third year of CMGT.",

    // Education entries
    "cv.edu.minor.title": "Minor Interface & User Experience Design",
    "cv.edu.minor.subtitle":
      "September 2024 to February 2025, Rotterdam University of Applied Sciences, Rotterdam",
    "cv.edu.hbo.title": "BSc Creative Media and Game Technologies",
    "cv.edu.hbo.subtitle":
      "September 2020 to July 2025, Rotterdam University of Applied Sciences, Rotterdam",
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
    { key: "cv.edu.hbo", highlight: true },
    { key: "cv.edu.minor" },
    { key: "cv.edu.havo" },
  ],
} as const;
