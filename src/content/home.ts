export type ProjectStatus =
  | "Delivered"
  | "In Progress"
  | "Concept"
  | "Confidential"
  | "Independent Case Study"
  | "Research & Strategy"
  | "Proof of Concept";

export interface EvidenceItem {
  label: string;
  access?: "Public" | "Available on Request" | "Confidential";
}

export interface HomeProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  categories: string[]; // category ids this project belongs to
  role?: string;
  period?: string;
  team?: string;
  problem?: string;
  approach?: string[];
  whatIWorkedOn?: string[];
  evidence?: EvidenceItem[];
  whatItEnabled?: { label: string; body: string };
  whatILearned?: string;
  confidential?: boolean;
  achievement?: string;
  important?: string; // owner note rendered as quiet caption
}

export interface HomeCategory {
  id: string;
  title: string;
  intro?: string;
}

export const categories: HomeCategory[] = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    intro:
      "My healthcare work combines product management, business analysis, UX/UI, workflow design, population health, AI, and public-health communication. I work on products where clinical reality, operational needs, data, governance, and user experience all need to make sense together.",
  },
  {
    id: "ai",
    title: "AI Product Strategy",
    intro:
      "I work on AI products before development starts. I define the problem, users, scope, behaviour, workflows, outputs, guardrails, edge cases, UX/UI, and the documentation teams need to build with clarity.",
  },
  { id: "process", title: "Process Intelligence" },
  { id: "fintech", title: "Fintech & Digital Trust" },
  { id: "environment", title: "Environmental Intelligence" },
  { id: "inclusive", title: "Inclusive Technology" },
  { id: "brand", title: "Brand, Public Experience & Design" },
];

const stagesAll = [
  "Discovery",
  "Problem Framing",
  "Scope Definition",
  "Workflow Mapping",
  "Requirements",
  "Business Rules",
  "Product Logic",
  "UX/UI",
  "Stakeholder Alignment",
  "Delivery Support",
];

export const projects: HomeProject[] = [
  // --------- HEALTHCARE ---------
  {
    slug: "yamamah-pharmacy",
    title: "Yamamah Life Sciences — Pharmacy Platform",
    summary:
      "A pharmacy platform where I worked end-to-end across product management, business analysis, workflow design, requirements, business rules, UX/UI, stakeholder alignment, and delivery-ready documentation.",
    tags: [
      "Product Management",
      "Business Analysis",
      "UX/UI Design",
      "Workflow Design",
      "Requirements",
      "Business Rules",
      "Figma",
      "Stakeholder Alignment",
      "Delivery Support",
    ],
    status: "In Progress",
    categories: ["healthcare"],
    role: "Product Management · Business Analysis · UX/UI",
    problem:
      "The platform needed to bring complex pharmacy and life-sciences workflows into one clearer product experience, while supporting different user roles, approvals, requests, reporting needs, and governance rules.",
    approach: stagesAll,
    whatIWorkedOn: [
      "Gathered and structured stakeholder requirements",
      "Defined product scope and functional requirements",
      "Mapped workflows and user journeys",
      "Clarified business rules and role-based logic",
      "Created UX/UI designs and Figma flows",
      "Wrote BRDs, user stories, and acceptance criteria",
      "Supported alignment between business, product, design, and engineering",
      "Prepared delivery-ready documentation and walkthroughs",
    ],
    evidence: [
      { label: "Product Overview" },
      { label: "Pharmacy Workflow" },
      { label: "User Journey" },
      { label: "UX/UI Screens" },
      { label: "BRD Excerpt", access: "Available on Request" },
      { label: "Product Presentation" },
      { label: "Figma Prototype" },
      { label: "Functional Requirements", access: "Available on Request" },
    ],
    whatItEnabled: {
      label: "Product Capability Created",
      body: "An end-to-end pharmacy product experience with governed workflows, defined business rules, and delivery-ready documentation.",
    },
  },
  {
    slug: "yamamah-population-health",
    title: "Yamamah Population Health & Care Coordination",
    summary:
      "A population-health and care-coordination product supporting the journey from patient segmentation and cohort identification to care pathways, tasks, engagement, monitoring, and measurable action.",
    tags: [
      "Population Health",
      "Cohort Logic",
      "Care Coordination",
      "Care Pathways",
      "Workflow Design",
      "Functional Requirements",
      "Business Rules",
      "UX/UI",
      "Figma",
      "BRDs",
      "User Stories",
      "Jira Delivery Support",
    ],
    status: "In Progress",
    categories: ["healthcare"],
    role: "Business Analysis · Product Strategy · Workflow Design · UX/UI · Delivery Support",
    problem:
      "Population-health insights are only useful when teams can move from identifying a population to taking coordinated action. The product needed to support cohorts, pathways, care gaps, assignments, monitoring, and governance in a way that could work at scale.",
    approach: stagesAll,
    whatIWorkedOn: [
      "Defined cohort and pathway terminology",
      "Mapped the cohort-to-care-coordination journey",
      "Designed care-gap, pathway, task, and assignment logic",
      "Structured role-based and governance requirements",
      "Created operational workflows for coordinators and care teams",
      "Designed UX/UI concepts and Figma flows",
      "Prepared product requirements, business rules, user stories, and acceptance criteria",
      "Supported technical and stakeholder clarification during delivery",
    ],
    evidence: [
      { label: "Population Health Product Portfolio" },
      { label: "Care Coordination Flow" },
      { label: "Cohort-to-Pathway Logic" },
      { label: "Care Gap Workflow" },
      { label: "Role and Governance Model" },
      { label: "UX/UI Screens" },
      { label: "BRD Excerpt", access: "Available on Request" },
      { label: "Strategy Presentation" },
      { label: "Figma Prototype" },
    ],
  },
  {
    slug: "yamamah-portfolio",
    title: "Yamamah Population Health Portfolio",
    summary:
      "A product portfolio document created to explain Yamamah Population Health clearly, communicate the platform's capabilities, and support outreach to global clients.",
    tags: [
      "Product Storytelling",
      "Presentation Design",
      "Product Strategy",
      "Population Health",
      "Visual Communication",
    ],
    status: "Delivered",
    categories: ["healthcare", "brand"],
    role: "Product Storytelling · Presentation Design",
    problem:
      "The platform had complex capabilities across population definition, segmentation, risk stratification, cohort finding, intervention design, and data-driven decision support. It needed a clearer story for external audiences.",
    whatIWorkedOn: [
      "Structured the platform story into a clear journey",
      "Turned complex population-health capabilities into understandable sections",
      "Created visual explanations for product modules and workflows",
      "Designed the document to support client-facing conversations and global outreach",
    ],
    evidence: [
      { label: "View Portfolio Document" },
      { label: "Download Population Health Portfolio" },
      { label: "View Selected Product Visuals" },
    ],
  },
  {
    slug: "sleep-health-file",
    title: "Sleep Health File — Population Health Observatory",
    summary:
      "Strategic work focused on sleep health, service gaps, health facilities, prevention opportunities, population-health priorities, data needs, and future initiatives.",
    tags: [
      "Sleep Health Strategy",
      "Population Health Analysis",
      "Health Facilities",
      "Service Mapping",
      "Stakeholder Mapping",
      "Gap Analysis",
      "Initiative Prioritisation",
      "Executive Presentation Design",
    ],
    status: "Research & Strategy",
    categories: ["healthcare"],
    role: "Strategy · Population Health · Research · Service Mapping · Executive Storytelling",
    problem:
      "Sleep health is connected to prevention, chronic disease, mental health, workforce productivity, patient access, and healthcare capacity. The work needed to turn a broad topic into a structured health strategy with clear priorities.",
    whatIWorkedOn: [
      "Explored sleep-health needs and service gaps",
      "Mapped relevant stakeholders and healthcare touchpoints",
      "Defined strategic questions and priority areas",
      "Structured potential initiatives, outputs, and measures",
      "Developed presentations and strategic material to support decision-making",
    ],
    evidence: [
      { label: "View Sleep Health Strategy" },
      { label: "View Service Map" },
      { label: "View Health Facilities Analysis" },
      { label: "Download Strategy Deck" },
      { label: "Read Research Summary" },
    ],
  },
  {
    slug: "facilities-strategy",
    title: "Healthcare Facilities Strategy & Experience Design",
    summary:
      "Healthcare strategy and experience-design work focused on service touchpoints, operational workflows, facility experience, and user needs.",
    tags: [
      "Business Analysis",
      "Service Design",
      "Healthcare Strategy",
      "UX/UI",
      "Workflow Design",
    ],
    status: "Research & Strategy",
    categories: ["healthcare"],
    role: "Business Analysis · Service Design · Healthcare Strategy · UX/UI · Workflow Design",
    important:
      "Editable placeholder — final project name and artefacts will be added by Alanoud.",
    evidence: [
      { label: "Add Project Overview" },
      { label: "Add Service Blueprint" },
      { label: "Add Facility Journey" },
      { label: "Add UX/UI Work" },
      { label: "Add Presentation" },
      { label: "Add Strategy Files" },
    ],
  },
  {
    slug: "sleep-report-ai",
    title: "Sleep Report AI",
    summary:
      "A web-based AI-assisted tool designed to turn long technical sleep-study reports into clean, patient-friendly summaries while keeping clinical workflow, accuracy, and review needs in mind.",
    tags: [
      "AI Product Strategy",
      "Healthcare Product Design",
      "Business Analysis",
      "UX/UI",
      "Workflow Design",
      "Human Review Logic",
      "Validation Planning",
    ],
    status: "Concept",
    categories: ["healthcare", "ai"],
    role: "AI Product Strategy · Healthcare Product Design · Business Analysis · UX/UI",
    problem:
      "Sleep-study reports can be detailed and difficult for patients to understand. The opportunity was to reduce reporting burden and make results more understandable without losing clinical context.",
    whatIWorkedOn: [
      "AI scope and clinical workflow mapping",
      "Report structure and patient-friendly content design",
      "Product requirements and human review logic",
      "UX/UI and validation planning",
    ],
    evidence: [
      { label: "View Product Concept" },
      { label: "View Report Design" },
      { label: "View Workflow" },
      { label: "View UX/UI Screens" },
      { label: "Download Product Presentation" },
      { label: "Read Validation Plan" },
    ],
  },
  {
    slug: "between-dream-and-wakefulness",
    title: "Between Dream & Wakefulness",
    summary:
      "A public-health experience using art, education, workshops, partnerships, and sleep-health storytelling to make invisible sleep struggles easier to understand and discuss.",
    tags: [
      "Public Health Strategy",
      "Experience Design",
      "Creative Direction",
      "Health Communication",
      "Partnership Strategy",
      "Sponsorship Coordination",
      "Workshop Design",
      "Community Engagement",
      "Event Operations",
      "Educational Content",
      "Project Leadership",
    ],
    status: "Delivered",
    categories: ["healthcare", "brand"],
    role: "Project Owner & Director",
    problem:
      "Sleep disorders are often misunderstood, normalised, or experienced privately. Traditional awareness materials can explain facts, but they do not always create emotional understanding or public conversation.",
    evidence: [
      { label: "View Exhibition Gallery" },
      { label: "View Visitor Experience" },
      { label: "View Workshop Photos" },
      { label: "View Partnership Proposal" },
      { label: "Download Exhibition Proposal" },
      { label: "View Children's Book" },
      { label: "View Sponsor and Partner Ecosystem" },
    ],
    whatItEnabled: {
      label: "Pilot Evidence",
      body: "More than 2,000 visitors in two days · 45+ original artworks · 6 interactive workshops · 10+ partners and sponsors.",
    },
    important:
      "Future concepts such as 'Invisible Landscapes' are roadmap concepts, not delivered results.",
  },
  {
    slug: "polysomnography-rebrand",
    title: "Polysomnography Course & Workshop Rebrand",
    summary:
      "A rebrand and digital redesign of training materials for a polysomnography course and workshop, making complex clinical content clearer, more consistent, and easier to use.",
    tags: [
      "Learning Experience Design",
      "Healthcare Communication",
      "Branding",
      "Presentation Design",
      "Content Structure",
    ],
    status: "Delivered",
    categories: ["healthcare", "brand"],
    role: "Learning Experience Design · Healthcare Communication · Branding · Presentation Design",
    evidence: [
      { label: "View Before and After" },
      { label: "View Course Materials" },
      { label: "View Branding System" },
      { label: "Download Selected Materials" },
    ],
  },

  // --------- AI ---------
  {
    slug: "yamamah-ai-chatbot",
    title: "Yamamah AI Chatbot",
    summary:
      "An AI chatbot concept for Yamamah where I defined the scope, user behaviour, conversation logic, experience requirements, output structure, UX/UI, and product documentation needed to make the concept build-ready.",
    tags: [
      "AI Use Case Definition",
      "Product Scope",
      "Conversation Logic",
      "Prompt and Response Structure",
      "User Behaviour",
      "Edge Cases",
      "Output Design",
      "UX/UI",
      "Requirements",
      "Validation Approach",
    ],
    status: "Proof of Concept",
    categories: ["ai", "healthcare"],
    role: "AI Product Strategy · Conversation Design · Business Analysis · UX/UI",
    important:
      "Alanoud led the product definition, behaviour design, user experience, and validation approach for the AI chatbot concept.",
    evidence: [
      { label: "View Chatbot Flow" },
      { label: "View Conversation Behaviour Map" },
      { label: "View UX/UI Screens" },
      { label: "View Product Requirements" },
      { label: "View AI Scope" },
      { label: "View Prototype" },
    ],
  },
  {
    slug: "confidential-ai",
    title: "Confidential AI Product Strategy Initiatives",
    summary:
      "Confidential AI product work where I defined use cases, scope, workflows, AI behaviour, requirements, interaction patterns, outputs, and delivery-ready product documentation.",
    tags: [
      "AI Use Cases",
      "Scope Definition",
      "Workflow Logic",
      "User Roles",
      "AI Behaviour",
      "Input and Output Requirements",
      "Guardrails",
      "Edge Cases",
      "UX/UI",
      "Business Requirements",
      "Delivery Documentation",
    ],
    status: "Confidential",
    categories: ["ai"],
    confidential: true,
    role: "AI Product Strategy · Product Definition · Business Analysis · UX/UI · Workflow Design",
    evidence: [
      { label: "View Sanitised Case Study", access: "Confidential" },
      { label: "View Anonymised AI Workflow", access: "Confidential" },
      { label: "View Product Definition Framework", access: "Available on Request" },
      { label: "Selected Artefacts Available on Request", access: "Available on Request" },
    ],
  },
  {
    slug: "shor",
    title: "Shor — AI Legal Guidance Product",
    summary:
      "An AI-powered legal guidance product designed to make Saudi labour-law information easier to understand through simple language, structured answers, and a clear user experience.",
    tags: [
      "Product Strategy",
      "UX/UI",
      "AI Experience Design",
      "Arabic Product Research",
      "Brand System",
      "User Journey Design",
    ],
    status: "Concept",
    categories: ["ai"],
    role: "Product Strategy · UX/UI · AI Experience Design",
    evidence: [
      { label: "View Product Screens" },
      { label: "View User Journey" },
      { label: "View Brand System" },
      { label: "View AI Flow" },
      { label: "View Product Presentation" },
    ],
  },
  {
    slug: "masmoa",
    title: "Smart Ring Technology / Masmoa",
    summary:
      "An AI-enabled smart-ring concept for gesture recognition and real-time communication, designed to support deaf and mute users.",
    tags: [
      "Product Strategy",
      "Accessibility",
      "AI Concept Design",
      "UX/UI",
      "User Journey Design",
    ],
    status: "Delivered",
    categories: ["ai", "inclusive"],
    role: "Product Strategy · Accessibility · AI Concept Design · UX/UI",
    achievement:
      "Winner — Innovation Track, AI Enableathon Hackathon 2024",
    evidence: [
      { label: "View Product Concept" },
      { label: "View Prototype" },
      { label: "View User Journey" },
      { label: "View Presentation" },
      { label: "View Award Recognition" },
    ],
  },
  {
    slug: "sign-translate",
    title: "Sign Translate",
    summary:
      "A real-time Saudi Sign Language translation project designed to support two-way communication between spoken language and sign language.",
    tags: [
      "Project Lead — Partnerships",
      "Product Strategy",
      "Accessibility",
      "AI Product Thinking",
      "User Journey Design",
    ],
    status: "In Progress",
    categories: ["ai", "inclusive"],
    role: "Project Lead — Partnerships and Outreach · Product Strategy · Accessibility",
    evidence: [
      { label: "View Project Overview" },
      { label: "View Communication Flow" },
      { label: "View Partnership Work" },
      { label: "View Presentation" },
    ],
  },

  // --------- PROCESS ---------
  {
    slug: "lusinova",
    title: "Lusinova — Process Intelligence & Optimisation",
    summary:
      "Process-intelligence work focused on process mining, business analytics, operational bottlenecks, compliance gaps, and data-driven process improvement.",
    tags: [
      "Process Discovery",
      "As-Is vs To-Be Analysis",
      "Event Log Validation",
      "Conformance Checking",
      "Root Cause Analysis",
      "5 Whys",
      "Fishbone Analysis",
      "Process KPIs",
      "Celonis",
      "Business Recommendations",
    ],
    status: "Delivered",
    categories: ["process"],
    role: "Process Intelligence Consultant — Trainee",
    important:
      "Contributed to real-world process-intelligence work through analysis, process discovery, and data-driven recommendations.",
    evidence: [
      { label: "View Process Map" },
      { label: "View KPI Framework" },
      { label: "View Root Cause Analysis" },
      { label: "View Sanitised Case Study" },
      { label: "Read Process Intelligence Summary" },
    ],
  },

  // --------- FINTECH ---------
  {
    slug: "mirsad",
    title: "Mirsad — AI-Powered Fraud Prevention",
    summary:
      "A fintech product concept designed to help users identify suspicious transactions and payment risks before completing a potentially harmful action.",
    tags: [
      "Fraud Warning UX",
      "Transaction Risk Flow",
      "Suspicious Link Detection Concept",
      "User Reporting Flow",
      "Risk Decision Design",
      "Mobile Experience Design",
    ],
    status: "Concept",
    categories: ["fintech", "ai"],
    role: "Product Strategy · UX/UI · AI Concept Design · Risk Communication",
    evidence: [
      { label: "View Product Screens" },
      { label: "View Risk Flow" },
      { label: "View User Journey" },
      { label: "View Product Presentation" },
      { label: "View Figma Prototype" },
    ],
  },
  {
    slug: "barq",
    title: "Barq — Digital Wallet UX Case Study",
    summary:
      "A UX case study focused on improving digital-wallet navigation and simplifying financial transactions.",
    tags: [
      "UX Research",
      "User Journey Design",
      "Information Architecture",
      "UX/UI",
      "Interaction Design",
    ],
    status: "Independent Case Study",
    categories: ["fintech"],
    role: "UX Research · User Journey · IA · UX/UI",
    evidence: [
      { label: "View Research Summary" },
      { label: "View Persona" },
      { label: "View User Journey" },
      { label: "View UX/UI Screens" },
      { label: "View Design System" },
    ],
  },

  // --------- ENVIRONMENT ---------
  {
    slug: "greenshift",
    title: "GreenShift — Agricultural Intelligence",
    summary:
      "An AI-powered agricultural intelligence app using real-time space and environmental data to help farmers understand conditions, manage resources, and make better decisions.",
    tags: [
      "Product Strategy",
      "AI Product Design",
      "Data Product Thinking",
      "UX/UI",
      "Product Storytelling",
    ],
    status: "Delivered",
    categories: ["environment", "ai"],
    role: "Product Strategy · AI Product Design · UX/UI · Storytelling",
    achievement:
      "First Place — NASA International Space Apps Challenge 2024 · Global Finalist",
    evidence: [
      { label: "View Product Overview" },
      { label: "View Data and AI Logic" },
      { label: "View UX/UI Screens" },
      { label: "View Product Presentation" },
      { label: "View Award Recognition" },
    ],
  },
  {
    slug: "murjan",
    title: "Murjan — Coral Reef Monitoring Platform",
    summary:
      "A coral-reef monitoring platform designed to make marine environmental data, bleaching risk, node monitoring, and operational alerts easier to understand and act on.",
    tags: [
      "Product Requirements",
      "Operational Workflows",
      "Role-Based Experience",
      "Node Management",
      "Monitoring Logic",
      "Alert Experience",
      "UX/UI",
      "Developer Support",
    ],
    status: "Delivered",
    categories: ["environment"],
    role: "Business Analysis · UX/UI · Product Strategy · Dashboard Design · Workflow Design",
    achievement:
      "Best Project — Third Batch, Holberton School / Tuwaiq · Best Pitch Deck — Third Batch, Holberton School / Tuwaiq",
    evidence: [
      { label: "View Product Screens" },
      { label: "View User Flows" },
      { label: "View Node Monitoring Logic" },
      { label: "View Product Presentation" },
      { label: "View Pitch Deck" },
      { label: "View Award Recognition" },
    ],
  },

  // --------- INCLUSIVE ---------
  {
    slug: "muqla",
    title: "Muqla",
    summary:
      "An AI-powered platform designed to help visually impaired users collaboratively write and develop stories through voice control.",
    tags: ["Product Strategy", "Accessibility", "AI Concept Design", "UX/UI"],
    status: "Concept",
    categories: ["inclusive", "ai"],
    role: "Product Strategy · Accessibility · AI Concept Design · UX/UI",
    evidence: [
      { label: "View Product Concept" },
      { label: "View User Journey" },
      { label: "View Accessibility Design" },
      { label: "View Presentation" },
    ],
  },
  {
    slug: "no-hero-game",
    title: "The NO Hero Game",
    summary:
      "An interactive app designed to help children recognise unsafe situations, practise appropriate responses, and identify trusted people.",
    tags: ["Product Design", "UX/UI", "Educational Experience Design"],
    status: "Concept",
    categories: ["inclusive"],
    role: "Product Design · UX/UI · Educational Experience Design",
    evidence: [
      { label: "View Product Screens" },
      { label: "View Learning Flow" },
      { label: "View Product Concept" },
    ],
  },

  // --------- BRAND ---------
  {
    slug: "blue-spoon",
    title: "Blue Spoon",
    summary:
      "A brand and experience-design project. Final business context, brand strategy, visual identity, and design assets will be added once uploaded.",
    tags: [
      "Brand Strategy",
      "Visual Identity",
      "Digital Experience",
      "Presentation Design",
    ],
    status: "Delivered",
    categories: ["brand"],
    role: "Brand Strategy · Visual Identity · Digital Experience · Presentation Design",
    important: "Editable placeholder — final assets to be added.",
    evidence: [
      { label: "Add Brand Overview" },
      { label: "Add Moodboard" },
      { label: "Add Brand Identity" },
      { label: "Add Digital Screens" },
      { label: "Add Final Assets" },
    ],
  },
  {
    slug: "healthcare-learning",
    title: "Healthcare Learning Materials & Course Design",
    summary:
      "Visual and educational design work that turns complex healthcare content into clearer, more usable learning materials, presentations, and communication assets.",
    tags: [
      "Information Design",
      "Healthcare Communication",
      "Presentation Design",
      "Learning Experience Design",
      "Branding",
    ],
    status: "Delivered",
    categories: ["brand", "healthcare"],
    role: "Information Design · Healthcare Communication · Learning Experience Design",
    evidence: [
      { label: "View Learning Materials" },
      { label: "View Presentation System" },
      { label: "View Before and After" },
      { label: "Download Selected Files" },
    ],
  },
];

export const achievements: {
  title: string;
  organisation: string;
  blurb: string;
}[] = [
  {
    title: "First Place — NASA International Space Apps Challenge 2024",
    organisation: "NASA International Space Apps Challenge",
    blurb:
      "Won first place in Riyadh with GreenShift, an AI-powered agricultural intelligence project using real-time space and environmental data. The project was also selected as a global finalist.",
  },
  {
    title: "Winner — Innovation Track, AI Enableathon Hackathon 2024",
    organisation: "Almaarefa University & King Salman Center for Disability Research",
    blurb:
      "Recognised for Smart Ring Technology, an AI-enabled gesture-recognition concept supporting real-time communication for deaf and mute users.",
  },
  {
    title: "Best Project — Third Batch",
    organisation: "Holberton School / Tuwaiq",
    blurb: "Murjan was selected as the best project of the third batch.",
  },
  {
    title: "Best Pitch Deck — Third Batch",
    organisation: "Holberton School / Tuwaiq",
    blurb: "Murjan was recognised for the best pitch deck in the third batch.",
  },
  {
    title: "Third Place — Top Research Proposal, Sustainable Earth Program",
    organisation: "Riyadh Geoscience Society & Falak Investment Hub",
    blurb:
      "Recognised for research and innovation work related to sustainability and environmental impact.",
  },
  {
    title: "First Place — Best Research Proposal, Scientific Research Day",
    organisation: "Almaarefa University",
    blurb: "Received first place for a scientific research proposal.",
  },
  {
    title: "Full Scholarship — Software Engineering Fellow",
    organisation: "Holberton School / Tuwaiq",
    blurb:
      "Received a full scholarship for an intensive software engineering programme covering C, Python, SQL, JavaScript, APIs, full-stack development, Git, agile workflows, Node.js, TypeScript, and Docker.",
  },
  {
    title: "Apple Developer Academy — Second Year Program Certificate",
    organisation: "Apple Developer Academy / Tuwaiq",
    blurb: "Completed the Apple Developer Academy Second Year Program.",
  },
  {
    title: "Apple Developer Membership",
    organisation: "Apple",
    blurb: "Active Apple Developer Membership.",
  },
];

export const skillsStrip = [
  "Product Management",
  "Business Analysis",
  "UX/UI Design",
  "AI Product Strategy",
  "Workflow Design",
  "Process Mapping",
  "Requirements Gathering",
  "BRD / FRD Writing",
  "User Stories",
  "Acceptance Criteria",
  "Business Rules",
  "Stakeholder Workshops",
  "Figma",
  "Jira",
  "Process Intelligence",
  "Celonis",
  "AI Integration",
  "Python",
  "SQL",
  "SwiftUI",
  "Product Presentations",
  "Executive Storytelling",
];

export const roles = [
  "Product Management",
  "Business Analysis",
  "UX/UI Design",
  "AI Product Strategy",
];

export const getProjectBySlug = (slug: string) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;
  const cat = categories.find((c) => c.id === project.categories[0]);
  return { project, field: cat ?? categories[0] };
};

// Backward compat: legacy callers expect grouped fields
export const fields = categories.map((c) => ({
  id: c.id,
  title: c.title,
  intro: c.intro,
  projects: projects.filter((p) => p.categories.includes(c.id)),
}));
