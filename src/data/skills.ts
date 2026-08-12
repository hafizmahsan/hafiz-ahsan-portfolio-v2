export type Skill = {
  id: string;
  name: string;
  category:
    | "Automation"
    | "Architecture"
    | "Integration"
    | "Engineering"
    | "Professional";
  level: "Core" | "Advanced" | "Working";
  description: string;
  keywords: string[];
  featured?: boolean;
};

export const skills: Skill[] = [
  {
    id: "rpa",
    name: "Robotic Process Automation",
    category: "Automation",
    level: "Core",
    description:
      "Designing, developing and supporting enterprise automation solutions that improve operational efficiency and process consistency.",
    keywords: [
      "RPA",
      "Automation",
      "Workflow",
      "Process Automation",
    ],
    featured: true,
  },

  {
    id: "solution-architecture",
    name: "Solution Architecture",
    category: "Architecture",
    level: "Core",
    description:
      "Translating business and technical requirements into scalable automation and integration solutions.",
    keywords: [
      "Architecture",
      "Technical Design",
      "Scalability",
      "Enterprise Systems",
    ],
    featured: true,
  },

  {
    id: "process-analysis",
    name: "Process Analysis",
    category: "Automation",
    level: "Advanced",
    description:
      "Analyzing business processes to identify automation opportunities, bottlenecks, exceptions and improvement areas.",
    keywords: [
      "Process Discovery",
      "Process Mapping",
      "Optimization",
      "Automation Assessment",
    ],
    featured: true,
  },

  {
    id: "api-integration",
    name: "API & System Integration",
    category: "Integration",
    level: "Advanced",
    description:
      "Connecting automation workflows with APIs, enterprise applications and supporting systems to create reliable end-to-end solutions.",
    keywords: [
      "REST APIs",
      "Integration",
      "Enterprise Applications",
      "Data Exchange",
    ],
    featured: true,
  },

  {
    id: "automation-engineering",
    name: "Automation Engineering",
    category: "Engineering",
    level: "Advanced",
    description:
      "Applying software engineering practices to automation development, maintainability, exception handling and production support.",
    keywords: [
      "Development",
      "Debugging",
      "Exception Handling",
      "Maintainability",
    ],
    featured: true,
  },

  {
    id: "enterprise-delivery",
    name: "Enterprise Delivery",
    category: "Professional",
    level: "Advanced",
    description:
      "Working across business and technology stakeholders to deliver automation solutions within enterprise environments.",
    keywords: [
      "Stakeholder Management",
      "Consulting",
      "Delivery",
      "Collaboration",
    ],
    featured: true,
  },

  {
    id: "technical-consulting",
    name: "Technical Consulting",
    category: "Professional",
    level: "Advanced",
    description:
      "Bridging business requirements and technical implementation through structured analysis, solution recommendations and technical communication.",
    keywords: [
      "Consulting",
      "Requirements",
      "Technical Analysis",
      "Advisory",
    ],
  },

  {
    id: "automation-strategy",
    name: "Automation Strategy",
    category: "Architecture",
    level: "Working",
    description:
      "Evaluating automation opportunities and helping organizations move from individual bots toward sustainable automation capabilities.",
    keywords: [
      "Automation Strategy",
      "Opportunity Assessment",
      "Governance",
      "Roadmaps",
    ],
  },

  {
    id: "modern-web",
    name: "Modern Web Development",
    category: "Engineering",
    level: "Working",
    description:
      "Building modern web experiences with component-based architectures, responsive interfaces and contemporary frontend technologies.",
    keywords: [
      "React",
      "Next.js",
      "TypeScript",
      "Modern CSS",
    ],
  },

  {
    id: "technical-research",
    name: "Technical Research & Prototyping",
    category: "Professional",
    level: "Working",
    description:
      "Exploring emerging technologies and rapidly validating ideas through prototypes and proof-of-concept implementations.",
    keywords: [
      "Prototyping",
      "POC",
      "Research",
      "Emerging Technology",
    ],
  },
];

export const skillCategories = [
  {
    id: "automation",
    label: "Automation",
    description:
      "Designing and delivering automation solutions around real business processes.",
  },
  {
    id: "architecture",
    label: "Architecture",
    description:
      "Turning requirements into scalable and maintainable technical solutions.",
  },
  {
    id: "integration",
    label: "Integration",
    description:
      "Connecting automation with APIs, applications and enterprise systems.",
  },
  {
    id: "engineering",
    label: "Engineering",
    description:
      "Applying software engineering principles to reliable automation and digital products.",
  },
  {
    id: "professional",
    label: "Consulting",
    description:
      "Working with stakeholders to understand problems and deliver practical technology solutions.",
  },
] as const;
