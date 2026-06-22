import type { SectorKey } from "./sectors";

export type ProjectStatus =
  | "Delivered"
  | "In Progress"
  | "Concept"
  | "Independent Case Study"
  | "Confidential Enterprise Project"
  | "Research and Strategy Initiative";

export interface Project {
  slug: string;
  sector: SectorKey;
  title: string;
  subtitle: string;
  shift: string;
  role: string;
  status: ProjectStatus;
  contributions: string[];
  flagship?: boolean;
  context?: string;
  challenge?: string;
  opportunity?: string;
  worked?: string[];
  journey?: string[];
  principles?: string[];
  metrics?: string[];
  whyItMatters?: string;
  framework?: { label: string; body: string }[];
}

export const projects: Project[] = [
  {
    slug: "yamamah",
    sector: "healthcare",
    title: "Yamamah — Population Health Intelligence Platform",
    subtitle: "From fragmented health data to targeted population action.",
    shift: "From fragmented population data to targeted, coordinated health action.",
    role: "Product Strategy, Business Analysis, UX/UI, Workflow Design, Delivery Support",
    status: "Confidential Enterprise Project",
    flagship: true,
    context:
      "Yamamah is a population-health intelligence platform designed to help healthcare teams move beyond fragmented data and reactive reporting. Its core journey connects population definition, health assessment, segmentation, risk stratification, cohort finding, intervention design, and impact monitoring.",
    challenge:
      "Healthcare teams often work with fragmented data, unclear population visibility, disconnected workflows, and limited ways to turn insights into action. The challenge was not only to display population health data — it was to help users identify the right population, understand health burden, prioritise risk, create cohorts, design interventions, and measure outcomes through a coherent workflow.",
    contributions: [
      "Product Strategy", "Business Analysis", "Requirements Definition", "BRD Writing",
      "User Stories", "Acceptance Criteria", "Workflow Design", "Care Coordination Logic",
      "UX/UI", "Figma", "Business Rules", "Governance", "Stakeholder Alignment",
      "Jira Delivery", "Product Storytelling",
    ],
    worked: [
      "Translating population-health concepts into usable product flows",
      "Structuring requirements and business rules",
      "Designing cohort, pathway, care-coordination, and operational-monitoring workflows",
      "Clarifying terminology such as cohort, care gap, pathway, task, intervention, engagement, and assignment",
      "Designing user journeys and UX direction for care coordination",
      "Supporting role, approval, visibility, and governance logic",
      "Creating delivery-ready artefacts for technical and stakeholder teams",
      "Supporting product walkthroughs, reviews, and alignment across clinical, business, design, and technical stakeholders",
    ],
    journey: [
      "Health Data Sources", "Population Definition", "Health Assessment",
      "Segmentation & Risk Stratification", "High-Risk Prediction",
      "Cohort Finding", "Intervention Design", "Impact Monitoring",
    ],
    framework: [
      { label: "Adoption Risk", body: "A workflow may succeed with a clinical champion but fail for high-volume operational users if it creates manual workload or unclear ownership." },
      { label: "Domain Ambiguity", body: "Population-health terms must have one shared definition across clinical, operations, product, design, data, and engineering teams." },
      { label: "Workflow Friction", body: "Manual patient-by-patient assignment does not scale for cohort-based care coordination." },
      { label: "Product Response", body: "Cohort-level pathway assignment, eligibility logic, task templates, operational visibility, activity tracking, and exception handling." },
      { label: "Validation Plan", body: "Measure assignment time, coordinator workload, task completion, workflow abandonment, care-gap closure, and workaround behaviour." },
    ],
  },
  {
    slug: "care-coordination",
    sector: "healthcare",
    title: "Care Coordination & Pathway Design",
    subtitle: "Turning population insights into coordinated patient action.",
    shift: "From manual patient-by-patient work to cohort-level pathway assignment.",
    role: "Workflow Design, UX, Business Rules",
    status: "Confidential Enterprise Project",
    contributions: [
      "Cohort-to-pathway workflow design", "Care-gap logic",
      "Task and task-list assignment concepts", "Operational dashboards and KPIs",
      "Coordinator-focused UX", "Activity visibility", "Role-based workflow design",
      "Business rules and acceptance criteria",
    ],
    whyItMatters:
      "The product must support coordinators at scale, not force them into manual patient-by-patient work.",
  },
  {
    slug: "life-sciences",
    sector: "healthcare",
    title: "Yamamah Life Sciences Engagement Platform",
    subtitle: "Connecting medical and commercial requests through governed, visible workflows.",
    shift: "From scattered request forms to a governed engagement platform.",
    role: "Business Analysis, UX/UI, Governance Design",
    status: "Confidential Enterprise Project",
    challenge:
      "Life-sciences workflows require more than a request form. They need distinct commercial and medical processes, approval logic, organisation governance, report visibility, role management, and clear handoffs.",
    contributions: [
      "Commercial and medical request flow design", "Approval and governance logic",
      "Organisation and user management requirements", "Report visibility rules",
      "Role and permission definition", "User journeys", "UI/UX requirements",
      "BRD structure", "User stories and acceptance criteria", "Stakeholder alignment",
    ],
    whyItMatters:
      "Separate workflows where the business rules differ, but maintain a coherent platform experience and governance model.",
  },
  {
    slug: "sleep-report-ai",
    sector: "healthcare",
    title: "Sleep Report AI",
    subtitle: "Reducing clinical reporting burden through AI-assisted sleep-study reporting.",
    shift: "From repetitive specialist reporting to a trusted AI-assisted clinical workflow.",
    role: "Product Strategy, AI Experience Design",
    status: "Concept",
    challenge:
      "Sleep-study reporting can be complex, time-intensive, and dependent on specialist interpretation. The opportunity was to reduce repetitive work while preserving clinical safety, oversight, and trust.",
    contributions: [
      "Product strategy", "Clinical workflow mapping", "Automation opportunity framing",
      "AI experience design", "Report structure and information hierarchy",
      "Patient-friendly communication design", "Human-review and trust logic",
      "Success-metric definition", "Product roadmap thinking",
    ],
    whyItMatters:
      "The product is not only an AI-generated report. It is a trusted clinical workflow that includes source data, quality assurance, specialist review, explainability, and adoption support.",
  },
  {
    slug: "sleep-observatory",
    sector: "healthcare",
    title: "National Sleep Health Observatory",
    subtitle: "Turning sleep health into a population-health and policy agenda.",
    shift: "From individual sleep complaints to a national health-intelligence agenda.",
    role: "Strategy, Public Health Roadmap",
    status: "Research and Strategy Initiative",
    contributions: [
      "Strategic problem framing", "Population-health thinking", "Service-gap analysis",
      "Stakeholder ecosystem mapping", "Data-source planning", "Initiative prioritisation",
      "Public-health roadmap development", "Product and reporting concepts", "Executive storytelling",
    ],
  },
  {
    slug: "between-dream-and-wakefulness",
    sector: "healthcare",
    title: "Between Dream & Wakefulness",
    subtitle: "From sleep clinic to community: building a public-health experience platform.",
    shift: "From silent sleep struggles to a public experience people could see, feel, and discuss.",
    role: "Project Owner & Director — Public Health Experience Strategy",
    status: "Delivered",
    flagship: true,
    challenge:
      "Sleep disorders are often invisible, misunderstood, normalised, or treated as private struggles. Traditional awareness materials can explain facts, but they do not always create emotional understanding, participation, or a reason for people to seek support.",
    opportunity:
      "Use art, storytelling, workshops, expert interaction, children's learning materials, and partnerships to make sleep health visible, understandable, and discussable.",
    contributions: [
      "Public Health Strategy", "Experience Design", "Creative Direction",
      "Health Communication", "Partnership Strategy", "Stakeholder Management",
      "Sponsorship Coordination", "Workshop Design", "Community Engagement",
      "Event Operations", "Program Design", "Roadmap Design", "AI Experience Concept",
    ],
    metrics: [
      "2,000+ visitors in two days",
      "45+ original artworks",
      "6 interactive workshops",
      "10+ partners and sponsors",
      "QR-linked educational content",
      "Public interaction with sleep-health experts",
      "Bilingual children's sleep-awareness storytelling",
    ],
    whyItMatters:
      "Not every health problem needs another dashboard or awareness brochure. Some problems need a new way for people to emotionally understand, discuss, and act on their health.",
  },
  {
    slug: "fragmented-work",
    sector: "healthcare",
    title: "Making Fragmented Work Visible",
    subtitle: "Process Intelligence and AI-Assisted Operational Coordination.",
    shift: "From scattered emails and meetings to a visible, AI-routed client workflow.",
    role: "Process Intelligence Trainee — Lusinova",
    status: "Concept",
    challenge:
      "Client requests arrived through multiple channels. Updates and decisions were scattered across emails and meetings, creating limited workflow visibility, duplicated effort, coordination delays, and rework.",
    journey: [
      "Structured Request Form", "AI Classification & Key Detail Extraction",
      "Client and Process Routing", "Dedicated Client Workspace",
      "Automated Confirmation & Progress Visibility",
    ],
    contributions: [
      "Process Intelligence", "Process Mapping", "Operational Analysis",
      "AI Automation Concept", "Workflow Design", "Client Communication",
      "Presentation Design", "Stakeholder Documentation", "Platform UX Audit",
    ],
    whyItMatters:
      "This is a trainee-led workflow and automation concept based on observed operational challenges — not a deployed client implementation.",
  },
  {
    slug: "mirsad",
    sector: "fintech",
    title: "Mirsad — AI-Powered Fraud Prevention",
    subtitle: "Helping people make safer decisions before digital payments become irreversible.",
    shift: "From transaction anxiety to clearer digital trust.",
    role: "Product Strategy, UX/UI, AI Concept Design",
    status: "Independent Case Study",
    flagship: true,
    challenge:
      "Users can be exposed to suspicious transfers, scam accounts, malicious payment links, and social-engineering risks without receiving clear or timely signals before a transaction is completed.",
    opportunity:
      "Create a trust layer that assesses risk before a user completes a transfer or proceeds to a payment website, then communicates that risk clearly without unnecessarily blocking user choice.",
    contributions: [
      "Product Strategy", "UX/UI", "Fraud-Warning UX", "AI Concept Design",
      "User Journey Design", "Feature Definition", "Mobile Experience Design", "Accessibility Thinking",
    ],
    journey: [
      "Transaction or Payment Link", "Risk Signals", "AI & Graph Analysis",
      "Risk Decision", "Warning, Report, Exit, or Informed Continuation",
    ],
    principles: [
      "Show risk before irreversible action",
      "Explain why a warning appears",
      "Preserve user agency",
      "Reduce fear without creating false confidence",
      "Make reporting simple",
      "Design for users with different levels of financial and digital literacy",
    ],
    metrics: [
      "High-risk transfer abandonment or review rate",
      "Fraud-report completion rate",
      "False-positive rate",
      "Time from risk detection to warning",
      "User trust score",
      "Adoption by financial institutions or payment providers",
    ],
  },
  {
    slug: "barq",
    sector: "fintech",
    title: "Barq — Digital Wallet UX Case Study",
    subtitle: "Improving the clarity and usability of everyday digital-wallet journeys.",
    shift: "From cluttered wallet journeys to clearer, more trustworthy daily flows.",
    role: "UX Research, UX/UI",
    status: "Independent Case Study",
    contributions: [
      "UX Research", "Persona Development", "Journey Mapping",
      "Information Architecture", "UX/UI", "Interaction Design", "Usability Thinking",
    ],
    worked: [
      "User interviews and survey insights",
      "Persona and empathy mapping",
      "Wallet journey analysis",
      "Navigation and usability issues",
      "User-centred redesign decisions",
      "Financial-product UX and trust considerations",
    ],
    whyItMatters: "A financial experience should reduce uncertainty, not add it.",
  },
  {
    slug: "greenshift",
    sector: "environment",
    title: "GreenShift — Agricultural Intelligence",
    subtitle: "Turning satellite and environmental data into clearer decisions for farming.",
    shift: "From satellite data overload to actionable agricultural insight.",
    role: "Product Strategy, AI Product Design, UX/UI",
    status: "Independent Case Study",
    flagship: true,
    challenge:
      "Farmers and agricultural stakeholders may have access to environmental data, but not always to clear, timely, actionable interpretation.",
    opportunity:
      "Use Earth-observation data, AI-supported prediction, map-based insights, and accessible decision support to help users understand farm conditions, water use, crop risks, and next actions.",
    contributions: [
      "Product Strategy", "AI Product Design", "Data Product Thinking",
      "UX/UI", "Map Experience Design", "Decision Support", "Product Storytelling",
    ],
    journey: [
      "Environmental Data", "Farm & Crop Signals", "AI-Supported Analysis",
      "Risk or Opportunity Insight", "Actionable Recommendation",
    ],
    metrics: [
      "Recommendation adoption", "Water-use optimisation", "Alert response",
      "Prediction accuracy", "Recurring farm engagement", "Decision confidence",
    ],
  },
  {
    slug: "murjan",
    sector: "environment",
    title: "Murjan — Coral Reef Monitoring Platform",
    subtitle: "Making marine risk visible through operational monitoring and actionable alerts.",
    shift: "From invisible reef stress to operational environmental visibility.",
    role: "Business Analysis, UX/UI, Product Strategy",
    status: "Independent Case Study",
    flagship: true,
    challenge:
      "Coral-reef monitoring can rely on fragmented, delayed, or difficult-to-interpret environmental information.",
    opportunity:
      "Create a digital monitoring platform that uses virtual nodes, environmental data, alert logic, operational dashboards, and role-based experiences to make reef conditions easier to observe and respond to.",
    contributions: [
      "Business Analysis", "Product Strategy", "UX/UI", "Dashboard Design",
      "Role-Based Workflow Design", "Operational Monitoring", "Data Product Thinking",
    ],
    journey: [
      "Environmental Data", "Virtual Node Monitoring", "Alert Level Detection",
      "Dashboard Visibility", "Operational Review", "Action and Follow-Up",
    ],
    whyItMatters:
      "The platform should not only display environmental data. It should help users understand what requires attention and what action to take next.",
  },
  {
    slug: "masmoa",
    sector: "ai-inclusion",
    title: "Masmoa — AI-Powered Saudi Sign Language Communication",
    subtitle: "Supporting more accessible communication through sign-language recognition and translation.",
    shift: "From silent barriers to two-way sign language communication.",
    role: "Product Strategy, AI Concept, UX/UI",
    status: "Concept",
    contributions: [
      "Product Strategy", "Accessibility", "AI Concept Design", "UX/UI",
      "User Journey Design", "Dataset Thinking", "Product Storytelling",
    ],
  },
  {
    slug: "sign-translate",
    sector: "ai-inclusion",
    title: "Sign Translate",
    subtitle: "Real-time communication support between spoken language and Saudi Sign Language.",
    shift: "From inaccessible everyday conversation to inclusive real-time translation.",
    role: "Accessibility Strategy, AI Product Thinking, UX/UI",
    status: "Concept",
    contributions: [
      "Accessibility Strategy", "AI Product Thinking", "UX/UI",
      "Service Design", "User Journey Design",
    ],
  },
  {
    slug: "shor",
    sector: "ai-inclusion",
    title: "Shor — AI Legal Guidance Product",
    subtitle: "Making Saudi labour-law information easier to understand and act on.",
    shift: "From inaccessible legal text to clear, Arabic-first guidance.",
    role: "Product Strategy, AI Experience Design, Brand System",
    status: "Independent Case Study",
    challenge:
      "Employees and small businesses may struggle to understand rights, obligations, and applicable labour-law provisions.",
    opportunity:
      "Provide clear, Arabic-first, AI-supported guidance that connects everyday questions to understandable explanations and relevant legal sources.",
    contributions: [
      "Product Strategy", "UX/UI", "AI Experience Design",
      "Arabic-First Product Design", "Brand System", "User Journey Design",
    ],
    journey: [
      "Ask a Question", "Identify Legal Topic and Context",
      "Simplified AI Guidance", "Relevant Legal Article", "Suggested Next Step",
    ],
    whyItMatters:
      "Trust is part of the interface. The product must clearly distinguish general guidance from formal legal advice.",
  },
  {
    slug: "blue-spoon",
    sector: "brand",
    title: "Blue Spoon — Brand & Digital Experience",
    subtitle: "A brand system designed to create a clear, memorable, and consistent customer experience.",
    shift: "From a generic offering to a recognisable brand world.",
    role: "Brand System, Visual Identity",
    status: "Delivered",
    contributions: [
      "Brand challenge", "Audience & positioning", "Moodboard & visual direction",
      "Logo and identity system", "Typography and colour system",
      "Packaging, social, website, or product applications",
    ],
  },
  {
    slug: "healthcare-learning-rebrand",
    sector: "brand",
    title: "Healthcare Learning & Course Rebrand",
    subtitle: "Making clinical and educational material easier to understand, use, and remember.",
    shift: "From dense clinical material to clear, branded learning experiences.",
    role: "Learning Experience Design, Visual Systems",
    status: "Delivered",
    contributions: [
      "Learning Experience Design", "Visual Systems", "Educational Content",
      "Presentation Design", "Clinical Communication", "Branding",
      "Rebranding", "Information Design",
    ],
  },
];

export const flagshipProjects = projects.filter((p) => p.flagship);
export const projectsBySector = (key: SectorKey) =>
  projects.filter((p) => p.sector === key);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
