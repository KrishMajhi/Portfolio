// ============================================================
//  data.js  —  ALL YOUR PERSONAL CONTENT LIVES HERE
//  Edit this file to customise your portfolio.
//  You should not need to touch any other file for content.
// ============================================================

// ─── PERSONAL INFO ──────────────────────────────────────────
export const PERSON = {
  // Your full name (used in Navbar logo, Hero, Footer)
  name: "Krish Majhi",

  // Short label shown above your name in the hero
  role: "Full Stack Developer",

  // One-line italic tagline below your name
  tagline: "Crafting seamless experiences, from pixel to API.",

  // 2–3 sentence bio shown in the hero section
  heroBio:
    "I build elegant, high-performance web applications using React on the frontend and FastAPI on the backend — with a focus on clean architecture and delightful user experiences.",

  // Status badge shown on the avatar card (set to null to hide)
  availabilityBadge: "Open to opportunities",

  // ── PROFILE PICTURE ──────────────────────────────────────
  // Option A – use a URL:
  //   avatarUrl: 'https://your-image-hosting.com/photo.jpg',
  // Option B – put your image in /src/assets/ and import it:
  //   import myPhoto from './assets/photo.jpg'   ← top of this file
  //   avatarUrl: myPhoto,
  // Option C – leave null to show initials instead
  avatarUrl: null,

  // Initials shown when avatarUrl is null
  initials: "KM",
};

// ─── NAVIGATION LINKS ───────────────────────────────────────
// Add / remove / reorder nav items here
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── ABOUT SECTION ──────────────────────────────────────────
export const ABOUT = {
  // Array of paragraphs — add or remove as needed
  paragraphs: [
    "Hi, I'm Krish — a passionate full-stack developer with a love for building products that solve real problems. I specialise in creating responsive, accessible frontends with React and robust, scalable backends with Python and FastAPI.",
    "When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or sketching out ideas for side projects. I believe that great software is both technically sound and a joy to use.",
    "Currently available for freelance work and full-time opportunities.",
  ],

  // Stats shown to the right of the bio
  stats: [
    { number: "15+", label: "Projects completed" },
    { number: "3+", label: "Years experience" },
    { number: "8+", label: "Happy clients" },
  ],
};

// ─── SKILLS SECTION ─────────────────────────────────────────
// Add groups or individual pills freely
export const SKILL_GROUPS = [
  {
    heading: "Frontend",
    pills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "HTML / CSS",
    ],
  },
  {
    heading: "Backend",
    pills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "JWT Auth",
    ],
  },
  {
    heading: "Tools & infra",
    pills: ["PostgreSQL", "Docker", "Git / GitHub", "AWS", "Figma", "Linux"],
  },
];

// ─── PROJECTS SECTION ───────────────────────────────────────
// Each project: tag, name, description, tech stack, links
export const PROJECTS = [
  {
    tag: "Web App",
    name: "TaskFlow",
    description:
      "A collaborative project management tool with real-time updates, role-based access control, and an intuitive drag-and-drop board interface.",
    stack: ["React", "FastAPI", "PostgreSQL", "WebSockets"],
    // ── SET YOUR LINKS HERE ──────────────────────────────────
    liveUrl: "#", // Replace '#' with your live demo URL
    githubUrl: "#", // Replace '#' with your GitHub repo URL
    // Set either to null to hide that link
    // liveUrl: null,
    // githubUrl: null,
  },
  {
    tag: "API + Dashboard",
    name: "DataPulse",
    description:
      "An analytics dashboard that ingests and visualises data from multiple sources, featuring customisable widgets and automated report generation.",
    stack: ["React", "Python", "FastAPI", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    tag: "E-Commerce",
    name: "ShopNest",
    description:
      "A full-featured e-commerce platform with product search, cart management, payment integration, and an admin panel for order fulfilment.",
    stack: ["Next.js", "FastAPI", "Stripe", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  // ── ADD MORE PROJECTS BELOW ──────────────────────────────
  // {
  //   tag: 'Mobile App',
  //   name: 'My New Project',
  //   description: 'Short description of what it does.',
  //   stack: ['React Native', 'Node.js'],
  //   liveUrl: 'https://myapp.com',
  //   githubUrl: 'https://github.com/you/myapp',
  // },
];

// ─── CONTACT SECTION ────────────────────────────────────────
export const CONTACT = {
  // Intro text above the links
  intro:
    "Have a project in mind or just want to say hello? I'd love to hear from you. Fill in the form or reach me directly via the links below.",

  // Social / contact links — set url to null to hide a link
  links: [
    {
      icon: "@",
      label: "krish@example.com", // ← replace with your email
      url: "mailto:krish@example.com", // ← replace with your email
    },
    {
      icon: "GH",
      label: "github.com/krishmajhi", // ← replace with your GitHub username
      url: "https://github.com/krishmajhi",
    },
    {
      icon: "in",
      label: "linkedin.com/in/krishmajhi", // ← replace with your LinkedIn
      url: "https://linkedin.com/in/232322",
    },
  ],
};
