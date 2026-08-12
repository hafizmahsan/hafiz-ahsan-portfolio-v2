export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "RPA & Automation",
    items: [
      "UiPath",
      "Microsoft Power Automate",
      "Blue Prism",
      "Automation Anywhere",
      "Process Automation",
    ],
  },

  {
    category: "Solution Architecture",
    items: [
      "Automation Architecture",
      "Solution Design",
      "Process Engineering",
      "Technical Documentation",
      "Reusable Frameworks",
    ],
  },

  {
    category: "Integration",
    items: [
      "REST APIs",
      "JSON",
      "Web Services",
      "System Integration",
      "Data Transformation",
    ],
  },

  {
    category: "Development",
    items: [
      "Python",
      "C#",
      "JavaScript",
      "SQL",
      "Git",
    ],
  },

  {
    category: "Enterprise Technology",
    items: [
      "Microsoft 365",
      "Azure",
      "Databases",
      "Enterprise Applications",
      "Authentication",
    ],
  },

  {
    category: "Delivery & Consulting",
    items: [
      "Process Discovery",
      "Requirements Analysis",
      "Stakeholder Management",
      "Solution Consulting",
      "Production Support",
    ],
  },

  {
    category: "Engineering Practices",
    items: [
      "Exception Handling",
      "Logging",
      "Testing",
      "Version Control",
      "Maintainability",
    ],
  },
];
