export type ProjectStatus =
  | "Delivered"
  | "In Progress"
  | "Concept"
  | "Confidential"
  | "Independent Case Study"
  | "Research & Strategy";

export interface HomeProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  role?: string;
  period?: string;
  team?: string;
  problem?: string;
  approach?: string[]; // stages used
  whatIWorkedOn?: string[];
  whatItEnabled?: { label: string; body: string };
  whatILearned?: string;
  confidential?: boolean;
}

export interface HomeField {
  id: string;
  title: string;
  intro?: string;
  projects: HomeProject[];
}

const stagesAll = [
  "Discovery",
  "Scope",
  "Workflow",
  "Requirements",
  "Product Logic",
  "UX/UI",
  "Validation",
  "Delivery Support",
];

export const fields: HomeField[] = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    intro:
      "The largest and most detailed part of my work. Population health, care coordination, pharmacy, sleep health, and public health experience design.",
    projects: [
      {
        slug: "yamamah-life-sciences",
        title: "Yamamah Life Sciences — Pharmacy Platform",
        summary:
          "A pharmacy platform where I worked end-to-end across product management, business analysis, workflow design, requirements, business rules, UX/UI, Figma, stakeholder alignment, and delivery-ready documentation.",
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
        status: "Confidential",
        role: "Product Manager / Business Analyst / UX",
        period: "2024 — 2026",
        team: "Cross-functional product, clinical, engineering",
        problem:
          "Pharmacy operations involved disconnected request paths, unclear governance, and limited delivery-ready documentation. Teams needed a coherent platform — not another ad-hoc tool.",
        approach: stagesAll,
        whatIWorkedOn: [
          "End-to-end product ownership across pharmacy workflows",
          "Business analysis, BRDs, user stories, acceptance criteria",
          "Workflow design and business rules",
          "UX/UI in Figma and stakeholder walkthroughs",
          "Delivery support with engineering and QA",
        ],
        whatItEnabled: {
          label: "Product Capability Created",
          body: "A pharmacy platform with governed workflows, defined business rules, and delivery-ready product documentation.",
        },
        whatILearned:
          "Pharmacy is operational, regulatory, and clinical at once. A workflow only works if it survives all three at the same time.",
        confidential: true,
      },
      {
        slug: "yamamah-population-health",
        title: "Yamamah Population Health & Care Coordination",
        summary:
          "A population-health and care-coordination product supporting the journey from patient segmentation and cohort identification to care pathways, tasks, engagement, monitoring, and measurable action.",
        tags: [
          "Business Analysis",
          "Product Strategy",
          "Workflow Design",
          "UX/UI",
          "Care Coordination",
          "Population Health",
          "Requirements",
          "Delivery Support",
        ],
        status: "Confidential",
        role: "Product Strategy & Business Analysis",
        period: "2024 — 2026",
        team: "Product, clinical, data, engineering",
        problem:
          "Healthcare teams worked with fragmented data, unclear population visibility, and disconnected workflows — making it hard to move from insight to coordinated action.",
        approach: stagesAll,
        whatIWorkedOn: [
          "Translating population-health concepts into usable product flows",
          "Cohort, pathway, task, and intervention design",
          "Care coordinator UX and operational dashboards",
          "Business rules, role logic, and governance",
        ],
        whatItEnabled: {
          label: "Product Capability Created",
          body: "Cohort-level pathway assignment, task templates, operational visibility, and care-gap closure logic.",
        },
        confidential: true,
      },
      {
        slug: "yamamah-portfolio",
        title: "Yamamah Population Health Portfolio",
        summary:
          "A portfolio document created to explain Yamamah Population Health clearly, communicate the platform's value, and support outreach to global clients.",
        tags: [
          "Product Storytelling",
          "Presentation Design",
          "Product Strategy",
          "Population Health",
          "Visual Communication",
        ],
        status: "Delivered",
        role: "Product Storytelling & Presentation Design",
        whatItEnabled: {
          label: "Stakeholder Validation",
          body: "A clear narrative for external audiences explaining the platform, its journey, and its value.",
        },
      },
      {
        slug: "sleep-health-strategy",
        title: "Sleep Health File & Strategy",
        summary:
          "Strategic work focused on sleep health, service gaps, health facilities, population-health priorities, prevention opportunities, and future initiatives.",
        tags: [
          "Strategy",
          "Population Health",
          "Research",
          "Service Mapping",
          "Healthcare",
          "Executive Storytelling",
        ],
        status: "Research & Strategy",
        role: "Strategy & Public Health Roadmap",
      },
      {
        slug: "population-health-observatory",
        title: "Population Health Observatory",
        summary:
          "A population-health observatory initiative focused on turning health information into strategic insight, service priorities, and decision-support outputs.",
        tags: [
          "Strategy",
          "Business Analysis",
          "Data Thinking",
          "Service Design",
          "Population Health",
        ],
        status: "Research & Strategy",
      },
      {
        slug: "facilities-strategy",
        title: "Healthcare Facilities Strategy & Experience Design",
        summary:
          "Healthcare strategy and experience-design work focused on service touchpoints, operational workflows, facility experience, and user needs.",
        tags: [
          "Service Design",
          "Strategy",
          "Operational Workflows",
          "Experience Design",
        ],
        status: "Delivered",
      },
      {
        slug: "between-dream-and-wakefulness",
        title: "Between Dream & Wakefulness",
        summary:
          "A public-health experience platform using art, education, workshops, partnerships, and sleep-health storytelling to make invisible health struggles more understandable.",
        tags: [
          "Project Owner",
          "Public Health Strategy",
          "Experience Design",
          "Creative Direction",
          "Partnership Strategy",
          "Community Engagement",
          "Workshop Design",
          "Event Operations",
        ],
        status: "Delivered",
        role: "Project Owner & Director",
        period: "2024",
        team: "Partners, sponsors, artists, sleep specialists",
        problem:
          "Sleep disorders are often invisible, misunderstood, or treated as private struggles. Awareness materials explain facts but rarely create emotional understanding or participation.",
        whatIWorkedOn: [
          "Public health experience strategy and creative direction",
          "Partnership and sponsorship coordination",
          "Workshop design and event operations",
          "Bilingual children's sleep-awareness storytelling",
        ],
        whatItEnabled: {
          label: "Delivered Outcome",
          body: "2,000+ visitors in two days, 45+ original artworks, 6 interactive workshops, 10+ partners and sponsors.",
        },
      },
    ],
  },
  {
    id: "ai-product-strategy",
    title: "AI Product Strategy",
    intro:
      "I work on AI products before development starts. I define the problem, user needs, product scope, AI behaviour, user flows, outputs, guardrails, edge cases, UX/UI, and the documentation needed for teams to build with clarity.",
    projects: [
      {
        slug: "yamamah-ai-chatbot",
        title: "Yamamah AI Chatbot",
        summary:
          "An AI chatbot concept where I defined the scope, user behaviour, conversation logic, experience requirements, outputs, UX/UI, and product documentation needed to make it build-ready.",
        tags: [
          "AI Product Strategy",
          "Conversation Design",
          "Requirements",
          "UX/UI",
          "Product Documentation",
        ],
        status: "Concept",
      },
      {
        slug: "sleep-report-ai",
        title: "Sleep Report AI",
        summary:
          "An AI-assisted sleep-reporting concept focused on reducing reporting burden while preserving clinical review, trust, and workflow fit.",
        tags: [
          "AI Product Strategy",
          "Clinical Workflow",
          "Trust & Guardrails",
          "Report Design",
          "UX/UI",
        ],
        status: "Concept",
      },
      {
        slug: "confidential-ai-initiatives",
        title: "Confidential AI Product Strategy Initiatives",
        summary:
          "Confidential AI product work where I defined use cases, scope, workflows, AI behaviour, requirements, interaction patterns, outputs, and delivery-ready product documentation.",
        tags: [
          "AI Product Strategy",
          "Workflow Design",
          "Requirements",
          "Interaction Patterns",
          "Documentation",
        ],
        status: "Confidential",
        confidential: true,
      },
      {
        slug: "shor",
        title: "Shor — AI Legal Guidance Product",
        summary:
          "Making labour-law information easier to understand and act on through clear, AI-supported guidance.",
        tags: [
          "Product Strategy",
          "AI Experience Design",
          "UX/UI",
          "Brand System",
        ],
        status: "Independent Case Study",
      },
      {
        slug: "masmoa-sign-translate",
        title: "Masmoa / Sign Translate",
        summary:
          "AI-supported sign-language communication concepts focused on accessibility, dataset thinking, and inclusive product design.",
        tags: [
          "Accessibility",
          "AI Concept",
          "UX/UI",
          "Service Design",
        ],
        status: "Concept",
      },
    ],
  },
  {
    id: "fintech",
    title: "Fintech & Digital Trust",
    projects: [
      {
        slug: "mirsad",
        title: "Mirsad — AI-Powered Fraud Prevention",
        summary:
          "A trust layer that assesses risk before a user completes a transfer, then communicates that risk clearly without unnecessarily blocking user choice.",
        tags: [
          "Product Strategy",
          "UX/UI",
          "Fraud-Warning UX",
          "AI Concept Design",
          "Mobile Experience",
        ],
        status: "Independent Case Study",
      },
      {
        slug: "barq",
        title: "Barq — Digital Wallet UX Case Study",
        summary:
          "Improving the clarity and usability of everyday digital-wallet journeys.",
        tags: [
          "UX Research",
          "UX/UI",
          "Journey Mapping",
          "Information Architecture",
        ],
        status: "Independent Case Study",
      },
    ],
  },
  {
    id: "environment",
    title: "Environmental Intelligence",
    projects: [
      {
        slug: "greenshift",
        title: "GreenShift — Agricultural Intelligence",
        summary:
          "Turning satellite and environmental data into clearer decisions for farming.",
        tags: [
          "Product Strategy",
          "AI Product Design",
          "UX/UI",
          "Map Experience",
          "Decision Support",
        ],
        status: "Independent Case Study",
      },
      {
        slug: "murjan",
        title: "Murjan — Coral Reef Monitoring Platform",
        summary:
          "Making marine risk visible through operational monitoring and actionable alerts.",
        tags: [
          "Business Analysis",
          "Product Strategy",
          "UX/UI",
          "Dashboard Design",
          "Operational Monitoring",
        ],
        status: "Independent Case Study",
      },
    ],
  },
  {
    id: "brand",
    title: "Brand, Public Experience & Design",
    projects: [
      {
        slug: "between-dream-brand",
        title: "Between Dream & Wakefulness",
        summary:
          "Creative direction, identity, and experience design for a public health platform.",
        tags: ["Creative Direction", "Identity", "Experience Design"],
        status: "Delivered",
      },
      {
        slug: "blue-spoon",
        title: "Blue Spoon",
        summary: "Brand and visual system work.",
        tags: ["Brand System", "Visual Design"],
        status: "Delivered",
      },
      {
        slug: "healthcare-learning",
        title: "Healthcare Learning Materials & Course Rebrand",
        summary:
          "Transforming clinical and educational material into clearer learning experiences, visual systems, and branded assets.",
        tags: ["Learning Design", "Rebrand", "Visual System"],
        status: "Delivered",
      },
      {
        slug: "freelance-brand",
        title: "Freelance Brand Work",
        summary: "Identity and brand systems for independent clients.",
        tags: ["Brand", "Identity"],
        status: "Delivered",
      },
      {
        slug: "presentation-systems",
        title: "Presentation Systems",
        summary:
          "Executive presentation systems for clarity, narrative, and visual consistency.",
        tags: ["Presentation Design", "Executive Storytelling"],
        status: "Delivered",
      },
      {
        slug: "public-health-campaigns",
        title: "Public Health Campaigns",
        summary: "Health communication campaigns and visual storytelling.",
        tags: ["Health Communication", "Campaign Design"],
        status: "Delivered",
      },
      {
        slug: "exhibition-branding",
        title: "Exhibition Branding",
        summary: "Identity and wayfinding for public exhibitions.",
        tags: ["Exhibition", "Identity", "Wayfinding"],
        status: "Delivered",
      },
    ],
  },
];

export const achievements: {
  title: string;
  organisation: string;
  year: string;
  blurb: string;
}[] = [
  {
    title: "NASA Space Apps Challenge — Riyadh Winner",
    organisation: "NASA Space Apps",
    year: "—",
    blurb: "Local winner at the Riyadh edition of the global NASA challenge.",
  },
  {
    title: "Best Technical Project — Third Cohort",
    organisation: "Cohort Recognition",
    year: "—",
    blurb: "Recognised for the strongest technical project of the cohort.",
  },
  {
    title: "Best Pitch Deck — Third Cohort",
    organisation: "Cohort Recognition",
    year: "—",
    blurb: "Recognised for clarity, storytelling, and product narrative.",
  },
  {
    title: "Holberton School / Academy Recognition",
    organisation: "Holberton",
    year: "—",
    blurb: "Programme recognition during intensive engineering training.",
  },
  {
    title: "Harvard International Academy Recognition",
    organisation: "Harvard International Academy",
    year: "—",
    blurb: "Recognition during international academic programme participation.",
  },
  {
    title: "Sustainable Earth Research Recognition",
    organisation: "Research Programme",
    year: "—",
    blurb: "Recognition for sustainability and earth-systems research work.",
  },
];

export const skillsStrip = [
  "Product Management",
  "Business Analysis",
  "UX/UI",
  "AI Product Strategy",
  "Workflow Design",
  "Requirements",
  "Product Documentation",
  "Figma",
  "Stakeholder Alignment",
  "Jira",
  "Research",
  "Presentation Design",
];

export const roles = [
  "Product Management",
  "Business Analysis",
  "UX/UI Design",
  "AI Product Strategy",
];

export const getProjectBySlug = (slug: string) => {
  for (const f of fields) {
    const p = f.projects.find((x) => x.slug === slug);
    if (p) return { project: p, field: f };
  }
  return null;
};
