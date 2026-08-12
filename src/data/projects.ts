export type Project = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  year: string;
  status: "Production" | "Concept" | "Prototype" | "Confidential";
  featured: boolean;
  technologies: string[];
  capabilities: string[];
  outcomes: string[];
  visual: {
    accent: "cyan" | "violet" | "emerald" | "amber";
    pattern: "network" | "grid" | "orbital" | "flow";
  };
  links?: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    id: "enterprise-rpa-automation",
    title: "Enterprise RPA Automation",
    category: "Enterprise Automation",
    shortDescription:
      "Automation solutions designed to reduce repetitive operational work and improve process consistency across enterprise environments.",
    description:
      "A representative enterprise automation initiative covering process discovery, automation design, development, testing and production support. The final portfolio version will replace this description with the specific publicly shareable project information.",
    year: "2024 — Present",
    status: "Confidential",
    featured: true,
    technologies: [
      "RPA",
      "Process Automation",
      "Enterprise Systems",
      "API Integration",
    ],
    capabilities: [
      "Process Discovery",
      "Automation Design",
      "Development",
      "Production Support",
    ],
    outcomes: [
      "Reduced manual intervention",
      "Improved process consistency",
      "Standardized automation delivery",
    ],
    visual: {
      accent: "cyan",
      pattern: "network",
    },
  },

  {
    id: "automation-solution-architecture",
    title: "Automation Solution Architecture",
    category: "Solution Architecture",
    shortDescription:
      "Architecture-led approach to designing scalable automation solutions around enterprise processes, applications and integrations.",
    description:
      "A solution architecture concept representing the transition from individual automation workflows toward structured, maintainable enterprise automation capabilities.",
    year: "2023 — Present",
    status: "Production",
    featured: true,
    technologies: [
      "Solution Architecture",
      "RPA",
      "APIs",
      "System Integration",
    ],
    capabilities: [
      "Technical Design",
      "Integration Architecture",
      "Process Analysis",
      "Scalability Planning",
    ],
    outcomes: [
      "More maintainable automation",
      "Clearer technical ownership",
      "Improved integration strategy",
    ],
    visual: {
      accent: "violet",
      pattern: "orbital",
    },
  },

  {
    id: "etisalat-automation-engagement",
    title: "Enterprise Client Automation Engagement",
    category: "RPA Development",
    shortDescription:
      "Enterprise automation work delivered through an outsourced technology engagement, combining RPA development with solution-oriented technical responsibilities.",
    description:
      "A portfolio representation of the enterprise client engagement handled through TechVista Systems. Specific client processes and implementation details should only be published where they are publicly shareable.",
    year: "2021 — 2024",
    status: "Confidential",
    featured: true,
    technologies: [
      "RPA",
      "Automation Development",
      "Solution Design",
      "Enterprise Integration",
    ],
    capabilities: [
      "RPA Development",
      "Technical Design",
      "Client Collaboration",
      "Automation Support",
    ],
    outcomes: [
      "Enterprise process automation",
      "Improved operational workflows",
      "Technical solution delivery",
    ],
    visual: {
      accent: "emerald",
      pattern: "flow",
    },
  },

  {
    id: "process-optimization",
    title: "Process Optimization Framework",
    category: "Process Engineering",
    shortDescription:
      "A structured approach to identifying automation opportunities and turning inefficient manual processes into measurable improvement opportunities.",
    description:
      "A conceptual framework for evaluating processes based on repeatability, volume, complexity, business impact and automation suitability.",
    year: "2022 — Present",
    status: "Concept",
    featured: false,
    technologies: [
      "Process Analysis",
      "RPA",
      "Business Analysis",
      "Automation Strategy",
    ],
    capabilities: [
      "Process Assessment",
      "Opportunity Identification",
      "Automation Feasibility",
      "Continuous Improvement",
    ],
    outcomes: [
      "Better automation prioritization",
      "Improved discovery process",
      "Clearer business-to-technology alignment",
    ],
    visual: {
      accent: "amber",
      pattern: "grid",
    },
  },

  {
    id: "integration-automation-platform",
    title: "Integration-Driven Automation",
    category: "Integration",
    shortDescription:
      "An architecture concept connecting automation workflows with APIs, enterprise applications and human decision points.",
    description:
      "A conceptual platform demonstrating how RPA can work alongside APIs and enterprise applications rather than operating as isolated desktop automation.",
    year: "2023 — Present",
    status: "Prototype",
    featured: false,
    technologies: [
      "APIs",
      "RPA",
      "System Integration",
      "Workflow Automation",
    ],
    capabilities: [
      "API Integration",
      "Workflow Design",
      "Exception Handling",
      "Architecture",
    ],
    outcomes: [
      "Reduced point-to-point dependencies",
      "Improved integration flexibility",
      "Better automation orchestration",
    ],
    visual: {
      accent: "cyan",
      pattern: "network",
    },
  },

  {
    id: "automation-portfolio-lab",
    title: "Automation Architecture Lab",
    category: "Experimental",
    shortDescription:
      "An experimental space for exploring modern automation patterns, architecture concepts and emerging technologies.",
    description:
      "A continuously evolving collection of technical experiments and proof-of-concept ideas exploring how enterprise automation can be combined with modern software engineering practices.",
    year: "Ongoing",
    status: "Prototype",
    featured: false,
    technologies: [
      "Automation",
      "Architecture",
      "APIs",
      "Modern Web",
    ],
    capabilities: [
      "Prototyping",
      "Technical Research",
      "Architecture Experiments",
      "Proof of Concept",
    ],
    outcomes: [
      "Technology exploration",
      "Reusable architecture patterns",
      "Continuous learning",
    ],
    visual: {
      accent: "violet",
      pattern: "orbital",
    },
  },
];
