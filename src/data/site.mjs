// TODO: Set the final public origin before deployment (https://your-domain).
// Empty values intentionally omit canonical URLs and sitemap entries.
export const siteUrl = "";

export const person = {
  name: "Navin",
  role: ".NET Full-Stack Software Engineer",
  experience: "2+ years of professional experience",
  // TODO: Supply verified contact and social details. Never use example links.
  email: "navinkumaryadav@navyik.com",
  github: "",
  linkedin: "",
};

export const meta = {
  title: "Navin — .NET Full-Stack Software Engineer",
  description:
    "Production web applications, ASP.NET Core APIs, and integrations. Explore Navin’s engineering work and public products, or discuss a small .NET project.",
};

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

export const intro = {
  title: "Production software.",
  emphasis: "Thoughtfully engineered.",
  description:
    "I’m Navin, a .NET full-stack engineer. I help teams build APIs, connect services, and investigate production issues across ASP.NET Core, React, and relational databases.",
  stack: "ASP.NET Core / React / TypeScript / PostgreSQL",
  note: "For small projects, focused integrations, and existing applications that need a thoughtful pair of hands.",
};

export const projects = [
  {
    slug: "backend-development",
    name: "AI-powered document workspace",
    summary:
      "Built end to end as the sole developer: a SaaS workspace for creating and editing PDFs, presentations, and spreadsheets, with integrated AI for document generation.",
    context:
      "The platform brings PDF, presentation, and spreadsheet editing into one web application. Users can work on documents through dedicated editors and use AI-powered functionality to generate document content.",
    contribution:
      "I built the application end to end as the sole developer, covering the frontend, .NET backend services and APIs, database-backed functionality, and AI integration for document generation. I also handled deployment and production debugging. This was professional work on an employer-owned product.",
    technologies: ["ASP.NET Core", "EF Core", "PostgreSQL"],
    topics: [
      "PDF, presentation & spreadsheet editing",
      "AI-powered document generation",
      ".NET APIs & application services",
    ],
    challenges: [
      {
        title: "Multiple document formats in one product",
        text: "I built a workspace that brings PDF, presentation, and spreadsheet editing together, connecting the user-facing experience with the supporting application services.",
      },
      {
        title: "AI integrated into document creation",
        text: "I integrated AI-powered document generation into the application, so users can generate content as part of working with documents.",
      },
      {
        title: "Supporting a production application",
        text: "My work extended from building features to deployment, backend processing, and production debugging. Internal architecture, provider configuration, and implementation details remain private.",
      },
    ],
    lesson:
      "Document tools need both a useful editing experience and dependable application services behind it.",
  },
  {
    slug: "full-stack-development",
    name: "Multi-organization business platform",
    summary:
      "A shared business application used by multiple organizations to manage users, access, and everyday workflows. I completed approximately 80% of its development, working across the frontend and backend.",
    context:
      "Multiple organizations use the same application for their business workflows. Each organization has its own users and access requirements, making organization-aware behavior an important part of the product.",
    contribution:
      "I completed approximately 80% of the platform’s development. My work covered frontend functionality, backend APIs, and database-backed business workflows, including users, roles, and permissions.",
    technologies: [
      "Backend APIs",
      "Frontend development",
      "Database-backed workflows",
    ],
    topics: ["Organization-aware features", "Users, roles & permissions"],
    challenges: [
      {
        title: "Supporting multiple organizations",
        text: "The product serves different organizations through one application. Features need to work within the appropriate organization context.",
      },
      {
        title: "User access and business workflows",
        text: "Users, roles, and permissions support how people use the application. My work spanned the frontend and backend functionality involved in these workflows, without sharing the internal access-control design.",
      },
    ],
    lesson:
      "Full-stack features need to fit both the business workflow and the people who are allowed to use them.",
  },
  {
    slug: "application-integration",
    name: "Data collection & workflow platform",
    summary:
      "A platform where users create custom forms with a drag-and-drop editor, collect submissions, and trigger workflows. I worked on both the frontend and backend, from the visual editor to submission processing.",
    context:
      "Users define the information they want to collect through a visual editor. Other users complete the resulting forms, and their submissions can trigger follow-up workflows.",
    contribution:
      "My work covered both frontend and backend development: the visual editor and dynamic form experience, user submissions, and the backend processing that connects submissions to workflows.",
    technologies: [
      "Interactive web editor",
      "Dynamic forms",
      "Backend processing",
    ],
    topics: ["Drag-and-drop editing", "Submissions & workflow automation"],
    challenges: [
      {
        title: "User-defined data collection",
        text: "The visual editor lets users create their own form structures rather than relying only on fixed application screens. I contributed to the editor functionality and dynamic form experience.",
      },
      {
        title: "From submission to workflow",
        text: "Collecting a response is one part of the product. Submitted data can also trigger workflows, connecting the user-facing form to backend processing.",
      },
    ],
    lesson:
      "The editor, the submission experience, and the resulting workflow need to work together as one product.",
  },
];

export const products = [
  {
    name: "SeeMyUI",
    label: "Independent product",
    tagline: "See your brand before you build.",
    description:
      "A branding and design-system preview tool. Explore colors, typography, spacing, surfaces, radius, and shadows across device sizes and light or dark themes.",
    details: "Undo, redo, reset. Export your choices as CSS or JSON.",
    stack: "Next.js · React · TypeScript · Tailwind CSS",
    url: "https://seemyui.com/",
  },
  {
    name: "Navyik",
    label: "In development",
    tagline: "CSV Validator & Cleaner",
    description:
      "A tool under my long-term product brand. Current work validates CSV structure: parser errors, malformed rows, column mismatches, and missing or duplicate headers.",
    details:
      "Worker-based processing and tests. Cleaning functionality is still in development.",
    stack: "Astro · React islands · Tailwind · Web Workers",
    // TODO: Add a public URL when ready.
    url: "",
  },
];

export const services = [
  {
    title: "Build or improve an API",
    text: "ASP.NET Core endpoints, database-backed features, and authentication or authorization for a new or existing application.",
  },
  {
    title: "Connect your systems",
    text: "Third-party APIs and webhooks, signature validation, integration debugging, and idempotent processing.",
  },
  {
    title: "Understand a production issue",
    text: "Investigation and diagnosis of authentication failures, concurrency problems, and database or API issues—with implementation where appropriate.",
  },
  {
    title: "Get closer to production",
    text: "Environment configuration, deployment troubleshooting, production-readiness checks, and basic CI/CD setup.",
  },
];

export const approach = {
  title: "Making it work is the beginning.",
  paragraphs: [
    "Production work has taught me to look past the successful response. What happens when two requests arrive together? When a webhook fails? When a user crosses an access boundary?",
    "I care about understanding those questions, debugging the real cause, and keeping the resulting code maintainable. Alongside professional work, I build my own products and continue strengthening my C# and computer-science fundamentals.",
  ],
};

export const technologies = [
  { title: "Backend", items: "C# · ASP.NET Core · .NET · EF Core · REST APIs" },
  { title: "Frontend", items: "React · TypeScript · JavaScript" },
  { title: "Data", items: "PostgreSQL · SQL Server · MongoDB" },
  {
    title: "Systems & integrations",
    items: "Hangfire · SignalR · Webhooks · JWT · API keys",
  },
];

export const contact = {
  title: "A small project.\nA tricky integration.\nA good place to start.",
  description:
    "Have a .NET/API problem or a web application that needs attention? Share what you’re building, where you’re stuck, and the scope you have in mind.",
  unavailable: "Contact details will be added soon.",
  subject: "Let’s discuss a .NET project",
};
