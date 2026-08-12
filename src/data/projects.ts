export type Project = {
  title: string;
  category: string;
  client?: string;
  description: string;
  technologies: string[];
  impact?: string;
  highlights: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Enterprise RPA Automation",
    category: "RPA · Enterprise Automation",
    client: "Tawuniya",
    description:
      "Designed and delivered automation solutions for enterprise business processes, combining process analysis, RPA development, exception handling and production-oriented delivery.",
    technologies: [
      "UiPath",
      "RPA",
      "Process Automation",
      "API Integration",
    ],
    impact:
      "Reduced manual intervention across repeatable business processes and established more consistent digital workflows.",
    highlights: [
      "Process discovery and automation assessment",
      "RPA solution design and development",
      "Exception handling and validation",
      "Business and technical stakeholder collaboration",
    ],
  },

  {
    title: "Intelligent Process Automation",
    category: "Automation · Process Engineering",
    client: "Enterprise Client",
    description:
      "Transformed manual, rule-driven workflows into structured automation pipelines by combining process analysis, reusable automation components and controlled exception management.",
    technologies: [
      "UiPath",
      "Process Mining",
      "Workflow Automation",
      "SQL",
    ],
    impact:
      "Created a more reliable and scalable execution model for repetitive operational work.",
    highlights: [
      "Process analysis and opportunity identification",
      "Reusable automation components",
      "Business-rule implementation",
      "Operational monitoring and support",
    ],
  },

  {
    title: "API & System Integration",
    category: "Integration · Automation",
    client: "Enterprise Environment",
    description:
      "Integrated automation workflows with enterprise applications and services to connect systems, exchange information and reduce manual handoffs between business processes.",
    technologies: [
      "REST APIs",
      "JSON",
      "RPA",
      "Enterprise Applications",
    ],
    impact:
      "Connected previously fragmented workflow steps into a more consistent end-to-end automation flow.",
    highlights: [
      "API-based system integration",
      "Data transformation and validation",
      "Authentication and request handling",
      "Exception and retry strategies",
    ],
  },

  {
    title: "Automation Architecture & Frameworks",
    category: "Architecture · Engineering",
    description:
      "Developed reusable automation patterns and framework-oriented approaches to improve maintainability, reliability and consistency across enterprise RPA solutions.",
    technologies: [
      "RPA Architecture",
      "Reusable Components",
      "Logging",
      "Exception Handling",
    ],
    impact:
      "Improved the foundation for building and maintaining automation solutions at enterprise scale.",
    highlights: [
      "Reusable automation architecture",
      "Standardized development patterns",
      "Logging and exception strategies",
      "Maintainability-focused design",
    ],
  },
];
