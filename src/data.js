// ============================================================
//  data.js  —  ALL YOUR PERSONAL CONTENT LIVES HERE
//  Edit this file to customise your portfolio.
//  You should not need to touch any other file for content.
// ============================================================

// import myPhoto from './assets/code_cat.png'
import myPhoto from "./assets/pfp2.png";

// ─── PERSONAL INFO ──────────────────────────────────────────
export const PERSON = {
  // Your full name (used in Navbar logo, Hero, Footer)
  name: "Krish Majhi",

  // Short label shown above your name in the hero
  role: "Full Stack Developer",

  // One-line italic tagline below your name
  tagline: "Building scalable web apps with clean architecture and real-world impact.",

  // 2–3 sentence bio shown in the hero section
  heroBio:
    "I build modern, high-performance web applications using React on the frontend and FastAPI on the backend. I focus on writing clean, maintainable code and creating seamless user experiences. Passionate about solving real-world problems through scalable and efficient solutions.",

  // Status badge shown on the avatar card (set to null to hide)
  availabilityBadge: "Open to opportunities",

  // ── PROFILE PICTURE ──────────────────────────────────────
  avatarUrl: myPhoto,

  // Initials shown when avatarUrl is null
  initials: "KM",
};

// ─── NAVIGATION LINKS ───────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── ABOUT SECTION ──────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "Hi, I'm Krish — a passionate full-stack developer focused on building scalable and user-friendly applications. I specialise in creating responsive frontends with React and developing efficient backend systems using FastAPI.",

    "I enjoy working on real-world projects that challenge my problem-solving skills and help me grow as a developer. My approach combines clean architecture, performance optimisation, and intuitive design.",

    "Currently, I’m actively looking for freelance and full-time opportunities where I can contribute, learn, and build impactful products.",
  ],

  stats: [
    { number: "2+", label: "Major projects" },
    { number: "3+", label: "Years learning & building" },
    { number: "100%", label: "Focus on growth" },
  ],
};

// ─── SKILLS SECTION ─────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    heading: "Frontend",
    pills: [
      "React.js",
      "React Router",
      "Redux Toolkit",
      "Context API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    heading: "Backend & Database",
    pills: [
      "Python",
      "FastAPI",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    heading: "Tools",
    pills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],
  },
];

// ─── PROJECTS SECTION ───────────────────────────────────────
export const PROJECTS = [
  {
    tag: "E-COMMERCE",
    name: "Clothzy",
    description:
      "A full-stack e-commerce platform featuring a dynamic React frontend with global cart state management using Context API. Includes product browsing, detailed views, and an in-progress FastAPI backend with role-based access control for sellers and customers.",

    stack: ["React.js", "React Router", "Context API", "FastAPI", "MySQL"],

    liveUrl: "https://clothzy-one.vercel.app/",
    githubUrl:
      "https://github.com/KrishMajhi/Clothzy-E-commerce-Platform-.git",
  },
  {
    tag: "FOOD ORDERING APP",
    name: "EatEase",
    description:
      "A responsive multi-page food ordering application with restaurant listings, search, filtering, and real-time cart management using Redux Toolkit. Integrated external APIs for dynamic data fetching and implemented location-based search functionality.",

    stack: ["React.js", "Redux Toolkit", "React Router DOM", "REST APIs"],

    liveUrl: "#",
    githubUrl: "#",
  },
];

// ─── CONTACT SECTION ────────────────────────────────────────
export const CONTACT = {
  intro:
    "Have a project in mind or just want to connect? Feel free to reach out — I'm always open to discussing new opportunities and ideas.",

  links: [
    {
      icon: "@",
      label: "krishmajhi9003@gmail.com",
      url: "mailto:krishmajhi9003@gmail.com",
    },
    {
      icon: "GH",
      label: "github.com/KrishMajhi",
      url: "https://github.com/KrishMajhi",
    },
    {
      icon: "in",
      label: "linkedin.com/in/krish-majhi",
      url: "https://linkedin.com/in/krish-majhi",
    },
  ],
};
