export type SkillGroup = {
  id: string;
  category: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Working";
    years?: string;
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "rpa-automation",
    category: "01",
    title: "RPA & Automation",
    description:
      "Designing, developing and delivering enterprise automation solutions across complex business processes.",

    skills: [
      {
        name: "RPA Development",
        level: "Expert",
        years: "6+ years",
      },
      {
        name: "Process Automation",
        level: "Expert",
      },
      {
        name: "Workflow Automation",
        level: "Expert",
      },
      {
        name: "Exception Handling",
        level: "Advanced",
      },
      {
        name: "Automation Optimization",
        level: "Advanced",
      },
    ],
  },

  {
    id: "architecture",
    category: "02",
    title: "Solution Architecture",
    description:
      "Translating business requirements into scalable, maintainable and production-ready automation architectures.",

    skills: [
      {
        name: "Solution Architecture",
        level: "Advanced",
      },
      {
        name: "Technical Design",
        level: "Advanced",
      },
      {
        name: "Enterprise Automation Architecture",
        level: "Advanced",
      },
      {
        name: "Integration Design",
        level: "Advanced",
      },
      {
        name: "Reusable Architecture",
        level: "Advanced",
      },
    ],
  },

  {
    id: "enterprise-integration",
    category: "03",
    title: "Enterprise Integration",
    description:
      "Connecting automation workflows with enterprise applications, systems and business processes.",

    skills: [
      {
        name: "Enterprise Applications",
        level: "Advanced",
      },
      {
        name: "System Integration",
        level: "Advanced",
      },
      {
        name: "API Integration",
        level: "Working",
      },
      {
        name: "Data Processing",
        level: "Advanced",
      },
      {
        name: "Cross-System Automation",
        level: "Advanced",
      },
    ],
  },

  {
    id: "consulting",
    category: "04",
    title: "Consulting & Delivery",
    description:
      "Working with business and technical stakeholders to discover opportunities, design solutions and deliver measurable outcomes.",

    skills: [
      {
        name: "Process Discovery",
        level: "Advanced",
      },
      {
        name: "Business Analysis",
        level: "Advanced",
      },
      {
        name: "Technical Consulting",
        level: "Advanced",
      },
      {
        name: "Stakeholder Management",
        level: "Advanced",
      },
      {
        name: "Solution Estimation",
        level: "Working",
      },
    ],
  },

  {
    id: "engineering",
    category: "05",
    title: "Engineering Practices",
    description:
      "Applying software engineering principles to make automation solutions reliable, maintainable and scalable.",

    skills: [
      {
        name: "Software Development",
        level: "Advanced",
      },
      {
        name: "Reusable Components",
        level: "Advanced",
      },
      {
        name: "Version Control",
        level: "Advanced",
      },
      {
        name: "Debugging & Troubleshooting",
        level: "Advanced",
      },
      {
        name: "Production Support",
        level: "Advanced",
      },
    ],
  },

  {
    id: "professional",
    category: "06",
    title: "Professional Capabilities",
    description:
      "The consulting and communication capabilities required to work effectively across enterprise technology environments.",

    skills: [
      {
        name: "Client Communication",
        level: "Advanced",
      },
      {
        name: "Technical Documentation",
        level: "Advanced",
      },
      {
        name: "Problem Solving",
        level: "Expert",
      },
      {
        name: "Technical Leadership",
        level: "Advanced",
      },
      {
        name: "Cross-functional Collaboration",
        level: "Advanced",
      },
    ],
  },
];

export const technologyStack = [
  "RPA",
  "Automation",
  "Solution Architecture",
  "Enterprise Integration",
  "Workflow Automation",
  "Process Discovery",
  "API Integration",
  "Software Engineering",
  "Version Control",
  "Production Support",
];
