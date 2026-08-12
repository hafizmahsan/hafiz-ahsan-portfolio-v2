export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Senior RPA Consultant",
    company: "Tawuniya",
    period: "Feb 2024 — Present",
    location: "Saudi Arabia",
    description:
      "Working within an enterprise insurance environment to deliver RPA and automation initiatives, with increasing responsibility across solution design, technical delivery, stakeholder engagement and automation architecture.",
    highlights: [
      "Enterprise RPA solution design and delivery",
      "Business process analysis and automation opportunities",
      "Technical consulting and stakeholder collaboration",
      "Automation architecture and reusable solution patterns",
      "Delivery across multiple implementation partners",
    ],
  },

  {
    title: "Senior RPA Developer / Solution Architect",
    company: "TechVista Systems",
    period: "2022 — 2024",
    location: "Saudi Arabia",
    description:
      "Progressed into senior automation responsibilities, combining hands-on RPA development with solution design, technical problem solving and client-facing delivery.",
    highlights: [
      "RPA development and solution architecture",
      "Enterprise process automation",
      "Technical design and implementation",
      "Client-facing consulting",
    ],
  },

  {
    title: "RPA Consultant",
    company: "Visionet Systems",
    period: "2021 — 2022",
    location: "Saudi Arabia",
    description:
      "Delivered automation solutions while developing stronger consulting, process-analysis and client-engagement capabilities.",
    highlights: [
      "Process discovery and automation assessment",
      "RPA development and testing",
      "Client requirements analysis",
      "Production automation support",
    ],
  },

  {
    title: "Associate Consultant — RPA",
    company: "Systems Limited",
    period: "2020 — 2021",
    location: "Pakistan",
    description:
      "Built the foundation of an RPA career through hands-on automation development, process understanding and delivery of business-focused automation solutions.",
    highlights: [
      "RPA development",
      "Process automation",
      "Solution testing and debugging",
      "Enterprise delivery practices",
    ],
  },
];
