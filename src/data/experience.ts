export type Experience = {
  id: string;
  period: string;
  startDate: string;
  endDate: string;
  company: string;
  companyType: "Employer" | "Client" | "Engagement";
  role: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
};

export const experience: Experience[] = [
  {
    id: "tawuniya-muroon-2026",
    period: "Jul 2026 — Present",
    startDate: "2026-07",
    endDate: "Present",
    company: "Teejan Al Khaleej (Muroon)",
    companyType: "Employer",
    role: "Senior RPA Consultant",
    location: "Saudi Arabia",
    description:
      "Continuing the Tawuniya engagement through Teejan Al Khaleej (Muroon), focusing on enterprise RPA consulting, automation delivery and solution-oriented problem solving.",
    highlights: [
      "Enterprise RPA consulting and solution delivery",
      "Automation architecture and technical direction",
      "Process analysis and optimization",
      "Collaboration with business and technology stakeholders",
    ],
    technologies: [
      "RPA",
      "Automation",
      "Solution Architecture",
      "Enterprise Systems",
    ],
    featured: true,
  },

  {
    id: "tawuniya-mobcoder-2025",
    period: "May 2025 — Jun 2026",
    startDate: "2025-05",
    endDate: "2026-06",
    company: "Mob Coder",
    companyType: "Employer",
    role: "Senior RPA Consultant",
    location: "Saudi Arabia",
    description:
      "Continued the Tawuniya engagement as a senior RPA resource, contributing to enterprise automation initiatives and supporting the evolution of automation solutions.",
    highlights: [
      "Senior-level RPA consulting",
      "Automation solution development and support",
      "Technical collaboration with enterprise stakeholders",
      "Process improvement and automation assessment",
    ],
    technologies: [
      "RPA",
      "Process Automation",
      "Solution Design",
      "Enterprise Integration",
    ],
    featured: true,
  },

  {
    id: "tawuniya-xocialve-2024",
    period: "Feb 2024 — Apr 2025",
    startDate: "2024-02",
    endDate: "2025-04",
    company: "Xocialve",
    companyType: "Employer",
    role: "Senior RPA Consultant",
    location: "Saudi Arabia",
    description:
      "Joined the Tawuniya engagement as a Senior RPA Consultant, working on enterprise automation initiatives and helping translate operational requirements into reliable automation solutions.",
    highlights: [
      "Enterprise RPA consulting",
      "Automation development and delivery",
      "Business process analysis",
      "Solution design and technical collaboration",
    ],
    technologies: [
      "RPA",
      "Automation",
      "Process Analysis",
      "Solution Design",
    ],
    featured: true,
  },

  {
    id: "techvista-etisalat",
    period: "2021 — 2024",
    startDate: "2021",
    endDate: "2024",
    company: "TechVista Systems",
    companyType: "Employer",
    role: "Senior RPA Developer & Solution Architect",
    location: "Pakistan / Enterprise Client Engagement",
    description:
      "Worked through TechVista Systems as an outsourced technology resource for an Etisalat engagement, progressing into senior RPA development and solution architecture responsibilities.",
    highlights: [
      "Senior RPA development",
      "Solution architecture and technical design",
      "Enterprise automation delivery",
      "Client-facing technical collaboration",
      "Automation lifecycle and production support",
    ],
    technologies: [
      "RPA",
      "Solution Architecture",
      "Enterprise Automation",
      "System Integration",
    ],
    featured: true,
  },

  {
    id: "visionet-consultant",
    period: "2021 — 2024",
    startDate: "2021",
    endDate: "2024",
    company: "Visionet Systems",
    companyType: "Employer",
    role: "Associate Consultant → Junior Consultant",
    location: "Pakistan",
    description:
      "Progressed through consulting responsibilities within Visionet Systems, working on RPA and automation initiatives for enterprise clients.",
    highlights: [
      "RPA development and implementation",
      "Automation requirement analysis",
      "Client and stakeholder collaboration",
      "Progression from Associate Consultant to Junior Consultant",
    ],
    technologies: [
      "RPA",
      "Automation",
      "Consulting",
      "Process Analysis",
    ],
  },

  {
    id: "systems-limited-2020",
    period: "2020 — 2021",
    startDate: "2020",
    endDate: "2021",
    company: "Systems Limited",
    companyType: "Employer",
    role: "IT Professional / RPA Career Foundation",
    location: "Lahore, Pakistan",
    description:
      "Started my professional IT career at Systems Limited in Lahore in 2020, establishing the foundation for a career focused on enterprise technology and automation.",
    highlights: [
      "Started professional IT career in 2020",
      "Built foundations in enterprise technology",
      "Developed practical automation and technical skills",
      "Transitioned toward RPA consulting and delivery",
    ],
    technologies: [
      "IT",
      "Automation",
      "Enterprise Technology",
    ],
  },
] as const;
