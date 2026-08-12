export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  featured: boolean;

  description: string;
  problem: string;
  solution: string;

  role: string;

  technologies: string[];

  impact: {
    value: string;
    label: string;
  }[];

  tags: string[];

  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
};

export const projects: Project[] = [
  {
    id: "enterprise-rpa-automation",
    title: "Enterprise RPA Automation Platform",
    shortTitle: "RPA Platform",
    category: "Enterprise Automation",
    year: "2026",
    featured: true,

    description:
      "A scalable enterprise automation ecosystem designed to streamline repetitive business processes, improve operational efficiency and provide reliable unattended automation.",

    problem:
      "Manual and repetitive business processes created operational overhead, inconsistent execution and unnecessary dependency on human intervention.",

    solution:
      "Designed and delivered automation workflows with structured exception handling, reusable components, monitoring considerations and enterprise deployment practices.",

    role: "Senior RPA Consultant & Solution Architect",

    technologies: [
      "RPA",
      "Process Automation",
      "Solution Architecture",
      "Enterprise Integration",
      "Workflow Automation",
    ],

    impact: [
      {
        value: "24/7",
        label: "Automation capability",
      },
      {
        value: "↓",
        label: "Manual effort",
      },
      {
        value: "↑",
        label: "Process consistency",
      },
    ],

    tags: [
      "RPA",
      "Enterprise",
      "Automation",
      "Architecture",
    ],
  },

  {
    id: "insurance-automation",
    title: "Insurance Operations Automation",
    shortTitle: "Insurance Automation",
    category: "Insurance",
    year: "2025",
    featured: true,

    description:
      "Enterprise automation solutions supporting insurance operations through process digitization, workflow automation and integration across business applications.",

    problem:
      "High-volume operational workflows required repetitive manual interaction across multiple enterprise systems.",

    solution:
      "Designed automation workflows that orchestrate business processes across applications while incorporating validation, exception handling and operational controls.",

    role: "Senior RPA Consultant",

    technologies: [
      "RPA",
      "Insurance Operations",
      "Process Automation",
      "Enterprise Applications",
      "Workflow Design",
    ],

    impact: [
      {
        value: "High",
        label: "Process volume",
      },
      {
        value: "Multi-system",
        label: "Automation",
      },
      {
        value: "24/7",
        label: "Execution potential",
      },
    ],

    tags: [
      "Insurance",
      "RPA",
      "Automation",
      "Digital Transformation",
    ],
  },

  {
    id: "telecom-rpa",
    title: "Telecom Enterprise RPA Solutions",
    shortTitle: "Telecom RPA",
    category: "Telecom",
    year: "2023",
    featured: true,

    description:
      "Enterprise RPA solutions developed for telecom operations, automating repetitive workflows and integrating processes across complex enterprise environments.",

    problem:
      "Operational teams relied on repetitive application-based workflows involving multiple systems and manual data movement.",

    solution:
      "Designed and developed automation workflows capable of handling structured business processes while improving consistency and reducing repetitive human interaction.",

    role: "Senior RPA Developer & Solution Architect",

    technologies: [
      "RPA",
      "Telecom",
      "Solution Architecture",
      "Process Automation",
      "Enterprise Systems",
    ],

    impact: [
      {
        value: "Enterprise",
        label: "Scale",
      },
      {
        value: "Multi-system",
        label: "Integration",
      },
      {
        value: "Automated",
        label: "Repetitive workflows",
      },
    ],

    tags: [
      "Telecom",
      "RPA",
      "Architecture",
      "Automation",
    ],
  },

  {
    id: "automation-framework",
    title: "Reusable RPA Automation Framework",
    shortTitle: "RPA Framework",
    category: "Engineering",
    year: "2023",
    featured: false,

    description:
      "A reusable automation architecture designed to standardize development patterns, improve maintainability and accelerate delivery of enterprise RPA solutions.",

    problem:
      "Automation projects developed independently can create inconsistent patterns, duplicated logic and increased maintenance effort.",

    solution:
      "Introduced reusable development patterns, standardized components, structured exception handling and clearer separation between business logic and automation infrastructure.",

    role: "RPA Developer & Solution Architect",

    technologies: [
      "RPA",
      "Software Architecture",
      "Reusable Components",
      "Exception Handling",
      "Automation Engineering",
    ],

    impact: [
      {
        value: "Reusable",
        label: "Architecture",
      },
      {
        value: "Faster",
        label: "Development",
      },
      {
        value: "Lower",
        label: "Maintenance effort",
      },
    ],

    tags: [
      "Engineering",
      "Framework",
      "RPA",
      "Architecture",
    ],
  },

  {
    id: "process-discovery",
    title: "Automation Opportunity Discovery",
    shortTitle: "Process Discovery",
    category: "Consulting",
    year: "2024",
    featured: false,

    description:
      "A structured approach for identifying, evaluating and prioritizing business processes suitable for automation.",

    problem:
      "Organizations often have many potential automation opportunities but limited visibility into which processes should be automated first.",

    solution:
      "Applied process analysis and automation assessment techniques to evaluate process characteristics, complexity, business value and automation feasibility.",

    role: "Senior RPA Consultant",

    technologies: [
      "Process Discovery",
      "RPA",
      "Business Analysis",
      "Automation Assessment",
      "Solution Design",
    ],

    impact: [
      {
        value: "Prioritized",
        label: "Automation pipeline",
      },
      {
        value: "Data-driven",
        label: "Assessment",
      },
      {
        value: "Higher",
        label: "Automation focus",
      },
    ],

    tags: [
      "Consulting",
      "Discovery",
      "RPA",
      "Strategy",
    ],
  },

  {
    id: "automation-monitoring",
    title: "Enterprise Automation Operations",
    shortTitle: "Automation Ops",
    category: "Operations",
    year: "2025",
    featured: false,

    description:
      "Operational practices and automation support mechanisms designed to improve reliability, observability and maintainability of production RPA solutions.",

    problem:
      "Production automation requires more than development; unattended processes need monitoring, exception management and operational discipline.",

    solution:
      "Established structured operational practices around automation execution, exception handling, issue analysis and continuous improvement.",

    role: "Senior RPA Consultant",

    technologies: [
      "RPA Operations",
      "Monitoring",
      "Exception Management",
      "Production Support",
      "Automation Governance",
    ],

    impact: [
      {
        value: "Improved",
        label: "Reliability",
      },
      {
        value: "Structured",
        label: "Operations",
      },
      {
        value: "Continuous",
        label: "Improvement",
      },
    ],

    tags: [
      "Operations",
      "RPA",
      "Monitoring",
      "Governance",
    ],
  },
];
