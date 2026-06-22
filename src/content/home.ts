// Portfolio content — image-led, four fields only.
import barqCover from "@/assets/barq-cover.png.asset.json";
import barqAbTest from "@/assets/barq-ab-test.png.asset.json";
import barqIntro from "@/assets/barqintro.pdf.asset.json";
import mirsadCover from "@/assets/mirsad-cover.png.asset.json";
import mirsadPdf from "@/assets/mirsad.pdf.asset.json";
import yamamahScreening from "@/assets/yamamah-screening.png.asset.json";
import yamamahDemographics from "@/assets/yamamah-demographics.png.asset.json";


export interface ProjectBlock {
  slug: string;
  title: string;
  summary: string;
  role: string;
  ledBullets: string[];
  readMore: string;
  factsLine?: string;
  mainImage?: string;
  secondaryImage?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  blurImages?: boolean;
}

export interface MethodologyStep {
  title: string;
  line: string;
}

export interface Field {
  slug: string;
  title: string;
  hero: string;
  methodology?: MethodologyStep[];
  projects: ProjectBlock[];
}

export const fields: Field[] = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    hero:
      "I work on healthcare products where the challenge is never only the interface. It is making data, clinical logic, operational workflows, governance, and real user needs work together.",
    methodology: [
      {
        title: "Data-Driven Decisions",
        line: "Turning population data, risk signals, service gaps, dashboards, and KPIs into action.",
      },
      {
        title: "Clear Domain Logic",
        line: "Defining shared language, business rules, roles, and product boundaries.",
      },
      {
        title: "Real Workflow Design",
        line: "Understanding handoffs, bottlenecks, manual workarounds, and what happens before redesign.",
      },
      {
        title: "Adoption at Scale",
        line: "Designing for nurses, coordinators, operations, and everyday users — not only pilot champions.",
      },
    ],
    projects: [
      {
        slug: "yamamah-population-health",
        title: "Yamamah Population Health",
        summary:
          "End-to-end product work for Yamamah Population Health, covering product strategy, roadmap thinking, population-health workflows, dashboard guidelines, care coordination, AI chatbot definition, UX/UI, product documentation, and client-facing product storytelling.",
        role:
          "Product Strategy · Business Analysis · UX/UI Design · AI Product Strategy · Dashboard Design · Product Roadmap",
        ledBullets: [
          "Product direction, roadmap thinking, and population-health workflows",
          "Cohort, segmentation, risk, care-gap, and care-coordination logic",
          "Dashboard and data-experience guidelines for product and data teams",
          "AI chatbot scope, behaviour, user flows, outputs, UX/UI, and requirements",
          "BRDs, user stories, acceptance criteria, business rules, and Figma prototypes",
          "A client-facing Yamamah Population Health portfolio that helped attract five international clients",
        ],
        readMore:
          "I worked across Yamamah Population Health as one connected product, not separate features. My work moved from strategy and product logic into workflows, dashboards, care coordination, AI behaviour, UX/UI, and the portfolio used to communicate the product to global clients.",
      },
      {
        slug: "yamamah-pharmacy",
        title: "Yamamah Life Sciences — Pharmacy Platform",
        summary:
          "A pharmacy platform where I worked end-to-end across product management, business analysis, workflow design, requirements, business rules, UX/UI, stakeholder alignment, and delivery-ready documentation.",
        role: "Product Management · Business Analysis · UX/UI Design",
        ledBullets: [
          "Product scope and stakeholder requirements",
          "Pharmacy user journeys and workflows",
          "Commercial and medical process logic",
          "Role-based access, governance, approvals, and business rules",
          "BRDs, FRDs, user stories, acceptance criteria, and Figma designs",
          "Stakeholder walkthroughs and delivery support",
        ],
        readMore:
          "This was not only a UI project. I worked from stakeholder needs through product scope, pharmacy workflows, business rules, user experience, and build-ready documentation.",
      },
      {
        slug: "care-coordination",
        title: "Care Coordination for HHC",
        summary:
          "Care-coordination work focused on turning population-health insights into clear pathways, tasks, monitoring, and operational action.",
        role:
          "Business Analysis · Product Strategy · Workflow Design · UX/UI",
        ledBullets: [
          "Cohort-to-pathway journey",
          "Care-gap and task logic",
          "Task assignment and activity monitoring",
          "Coordinator workflows and operational KPIs",
          "Role and governance requirements",
          "UX/UI flows, business rules, and acceptance criteria",
        ],
        readMore:
          "The focus was making care coordination practical at scale: less manual work, clearer ownership, and better visibility over tasks, open gaps, and follow-up.",
      },
      {
        slug: "sleep-health-file",
        title: "Sleep Health File, Observatory & Health Facilities Work",
        summary:
          "Strategic healthcare work focused on sleep health, population-health priorities, health facilities, service gaps, prevention opportunities, data needs, and decision-support outputs.",
        role:
          "Strategy · Population Health · Service Mapping · Presentation Design · Branding",
        ledBullets: [
          "Sleep-health strategic story and future priorities",
          "Health-facility and service-gap analysis",
          "Stakeholder and service mapping",
          "Decision-support and observatory concepts",
          "Strategic presentations, visual direction, and branding",
          "Communication of complex public-health topics for decision-makers",
        ],
        readMore:
          "This work focused on turning sleep health from a broad topic into a clear strategic story with practical priorities, service insights, and a stronger visual language.",
      },
      {
        slug: "healthcare-ai",
        title: "Healthcare AI Product Work",
        summary:
          "Selected AI healthcare product work where I defined the scope, workflows, user behaviour, requirements, outputs, UX/UI, and delivery-ready documentation.",
        role:
          "AI Product Strategy · Business Analysis · UX/UI Design · Workflow Design",
        ledBullets: [
          "AI use cases and product scope",
          "User needs, workflows, and interaction patterns",
          "Input, output, edge-case, and guardrail definition",
          "UX/UI requirements and user behaviour",
          "Product documentation and technical-team alignment",
        ],
        readMore:
          "I led the product definition and experience design of AI healthcare solutions, including what the AI should do, how users should interact with it, and what technical teams needed to build it clearly.",
      },
      {
        slug: "sleep-report-ai",
        title: "Sleep Report AI",
        summary:
          "A web-based AI-assisted tool designed to turn long technical sleep-study reports into clean, patient-friendly summaries while keeping clinical workflow, accuracy, and review needs in mind.",
        role:
          "AI Product Strategy · Healthcare Product Design · UX/UI",
        ledBullets: [
          "Product scope and sleep-lab workflow mapping",
          "AI behaviour and human-review logic",
          "Report structure and patient-friendly output design",
          "UX/UI, product flow, and validation considerations",
        ],
        readMore:
          "The product was designed around a simple goal: reduce reporting burden while making sleep-study results easier for patients to understand without losing clinical context.",
      },
      {
        slug: "sleep-experience",
        title: "Sleep Health Experience, Learning & Rebranding",
        summary:
          "Sleep-health communication work using design, branding, workshops, learning materials, and public experiences to make complex clinical topics easier to understand.",
        role:
          "Project Owner & Director · Public Health Strategy · Experience Design · Branding · Learning Experience Design",
        ledBullets: [
          "Between Dream & Wakefulness public-health art exhibition",
          "Public experience, creative direction, workshops, partner communication, and education material",
          "Polysomnography Course and Workshop rebrand",
          "Digital learning materials for healthcare professionals",
          "Patient education materials and sleep-health visual communication",
        ],
        factsLine:
          "2,000+ visitors · 45+ artworks · 6 workshops · 10+ partners and sponsors",
        readMore:
          "This work used visual storytelling and experience design to make sleep disorders more understandable for patients, students, healthcare professionals, and the public.",
      },
    ],
  },
  {
    slug: "fintech",
    title: "Fintech & Digital Trust",
    hero:
      "My fintech work focuses on making financial products easier to understand, safer to use, and more practical in everyday decisions.",
    projects: [
      {
        slug: "barq",
        title: "Barq — Digital Wallet UX Case Study",
        summary:
          "A UX case study focused on improving digital-wallet navigation and simplifying everyday financial transactions.",
        role: "UX Research · User Journey · IA · UX/UI",
        ledBullets: [
          "UX research and user interviews",
          "User journeys for core wallet flows",
          "Navigation and information architecture",
          "Simplifying financial transactions",
          "UX/UI screens and interaction design",
        ],
        readMore:
          "Barq explored how a digital wallet could feel calmer and more confident in daily use — reducing friction in navigation, transactions, and account management.",
        mainImage: barqCover.url,
        secondaryImage: barqAbTest.url,
        downloadUrl: barqIntro.url,
        downloadLabel: "Download Case Study (PDF)",
      },
      {
        slug: "mirsad",
        title: "Mirsad — AI-Powered Fraud Prevention",
        summary:
          "A fintech product concept designed to help users identify suspicious transactions and payment risks before completing a potentially harmful action.",
        role:
          "Product Strategy · UX/UI · AI Concept Design · Risk Communication",
        ledBullets: [
          "Product strategy and AI concept framing",
          "Fraud-warning UX and risk communication",
          "Transaction risk flow and decision points",
          "User reporting journey",
          "UX/UI screens and prototype",
        ],
        readMore:
          "Mirsad framed fraud prevention as a calm, informative moment in the user's journey — designed to slow risky decisions without blocking trusted ones.",
        mainImage: mirsadCover.url,
        downloadUrl: mirsadPdf.url,
        downloadLabel: "Download Case Study (PDF)",
      },
    ],
  },
  {
    slug: "environment",
    title: "Environmental Intelligence",
    hero:
      "My environmental work turns complex data, monitoring signals, and ecosystem risks into products that are easier to understand and act on.",
    projects: [
      {
        slug: "greenshift",
        title: "GreenShift — Agricultural Intelligence",
        summary:
          "An AI-powered agricultural intelligence app using real-time space and environmental data to help farmers understand conditions, manage resources, and make better decisions.",
        role:
          "Product Strategy · AI Product Design · UX/UI · Product Storytelling",
        ledBullets: [
          "AI and Earth-observation data product framing",
          "Agricultural decision support flows",
          "Resource management logic",
          "UX/UI screens and product storytelling",
        ],
        readMore:
          "GreenShift translated complex Earth-observation data into clear daily decisions for farmers — what to do, when, and why it matters.",
      },
      {
        slug: "murjan",
        title: "Murjan — Coral Reef Monitoring Platform",
        summary:
          "A coral-reef monitoring platform designed to make marine environmental data, bleaching risk, node monitoring, and operational alerts easier to understand and act on.",
        role:
          "Business Analysis · UX/UI · Product Strategy · Dashboard Design · Workflow Design",
        ledBullets: [
          "Product strategy and business analysis",
          "Node monitoring and alert logic",
          "Dashboard and operational workflows",
          "UX/UI for technical and field users",
          "Pitch and product narrative",
        ],
        readMore:
          "Murjan focused on giving marine teams a clear operational picture of the reef — node health, environmental signals, and the alerts that need a response.",
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Solutions",
    hero:
      "My accessibility work focuses on communication, inclusion, and creating technology that helps people participate more independently.",
    projects: [
      {
        slug: "masmoa",
        title: "Masmoa",
        summary:
          "An AI-enabled product concept supporting communication for deaf and mute users through gesture recognition and real-time output.",
        role: "Product Strategy · Accessibility · AI Concept Design · UX/UI",
        ledBullets: [
          "Inclusion problem framing",
          "Product concept and user journey",
          "AI behaviour and interaction model",
          "UX/UI screens",
        ],
        readMore:
          "Masmoa explored how gesture and AI together could lower the barrier to everyday communication for deaf and mute users.",
      },
      {
        slug: "smart-ring",
        title: "Smart Ring Technology",
        summary:
          "An AI-enabled smart-ring concept for gesture recognition, designed to support real-time communication for deaf and mute users.",
        role:
          "Product Strategy · Accessibility · AI Concept Design · UX/UI",
        ledBullets: [
          "Wearable product concept",
          "Gesture-to-communication logic",
          "User journey and interaction design",
          "Pitch and product storytelling",
        ],
        readMore:
          "The smart-ring concept reframed assistive technology as something quiet, wearable, and integrated into daily life rather than a visible device.",
      },
      {
        slug: "sign-translate",
        title: "Sign Translate",
        summary:
          "A real-time Saudi Sign Language translation project designed to support two-way communication between spoken language and sign language.",
        role:
          "Project Lead — Partnerships and Outreach · Product Strategy · Accessibility",
        ledBullets: [
          "Partnership and outreach leadership",
          "Product strategy and accessibility framing",
          "Communication flow between spoken and sign language",
          "User journey design",
        ],
        readMore:
          "Sign Translate explored how AI could support two-way conversation between sign and spoken language, with a focus on Saudi Sign Language and real-world use.",
      },
      {
        slug: "muqla",
        title: "Muqla",
        summary:
          "An AI-powered platform designed to help visually impaired users collaboratively write and develop stories through voice control.",
        role: "Product Strategy · Accessibility · AI Concept Design · UX/UI",
        ledBullets: [
          "Inclusion problem framing",
          "Voice-first product concept",
          "Accessible user journey design",
          "UX/UI for assistive interaction",
        ],
        readMore:
          "Muqla used voice as the primary interface, letting visually impaired users shape stories together without depending on visual UI.",
      },
    ],
  },
];

export const getField = (slug: string) => fields.find((f) => f.slug === slug);

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
    organisation: "AI Enableathon",
    blurb:
      "Recognised for Smart Ring Technology, an AI-enabled gesture-recognition concept supporting real-time communication for deaf and mute users.",
  },
  {
    title: "Murjan — Best Project and Best Pitch Deck, Third Batch (2026)",
    organisation: "Holberton School / Tuwaiq",
    blurb:
      "Murjan was selected as the best project of the third batch and recognised for the best pitch deck at Holberton School / Tuwaiq.",
  },
  {
    title: "Third Place — Sleep Assistance, Tuwaiqthon Hackathon 2026",
    organisation: "Tuwaiqthon",
    blurb:
      "Placed third out of more than 300 teams and 1,500 participants.",
  },
  {
    title: "Third Place — Top Research Proposal, Sustainable Earth Program (2025)",
    organisation: "Sustainable Earth Program",
    blurb:
      "Recognised for sustainability and environmental innovation work.",
  },
  {
    title: "First Place — Best Research Proposal, Scientific Research Day (2019)",
    organisation: "Almaarefa University",
    blurb:
      "Received first place for a scientific research proposal at Almaarefa University.",
  },
];

export const skillsStrip = [
  "Product Management",
  "Business Analysis",
  "UX/UI Design",
  "AI Product Strategy",
  "Product Strategy",
  "Roadmaps",
  "Workflow Design",
  "Process Mapping",
  "BRD / FRD Writing",
  "User Stories",
  "Acceptance Criteria",
  "Business Rules",
  "Figma",
  "Jira",
  "Dashboard Design",
  "Data Experience",
  "Celonis",
  "Presentation Design",
];

export const roles = [
  "Product Management",
  "Business Analysis",
  "UX/UI Design",
  "AI Product Strategy",
];
