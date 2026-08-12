export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  type: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  relationship?: string;
};

export const experience: Experience[] = [
  {
    id: "teejan-al-khaleej",
    company: "Teejan Al Khaleej (Muroon)",
    role: "Senior RPA Consultant",
    period: "Jul 2026 — Present",
    startDate: "2026-07",
    endDate: "Present",
    type: "Technology Subsidiary",
    location: "Saudi Arabia",
    relationship: "Tawuniya Technology Subsidiary",

    description:
      "Continuing enterprise automation and RPA consulting work within Tawuniya through its technology subsidiary, focusing on scalable automation solutions, technical delivery and solution architecture.",

    achievements: [
      "Continuing enterprise RPA delivery and consulting responsibilities",
      "Supporting automation architecture and technical solution design",
      "Working with business and technology stakeholders to identify automation opportunities",
      "Contributing to scalable and maintainable automation practices",
    ],

    technologies: [
      "RPA",
      "Solution Architecture",
      "Process Automation",
      "Enterprise Integration",
    ],
  },

  {
    id: "mob-coder",
    company: "Mob Coder",
    role: "Senior RPA Consultant",
    period: "May 2025 — Jun 2026",
    startDate: "2025-05",
    endDate: "2026-06",
    type: "Technology Vendor",
    location: "Saudi Arabia",
    relationship: "Tawuniya Engagement",

    description:
      "Worked as an outsourced RPA consulting resource supporting Tawuniya's automation initiatives, with responsibilities spanning RPA development, solution design and technical consulting.",

    achievements: [
      "Delivered and supported enterprise RPA automation solutions",
      "Worked closely with client stakeholders and technology teams",
      "Contributed to solution architecture and automation design",
      "Supported production automation and continuous improvement",
    ],

    technologies: [
      "RPA",
      "Automation Architecture",
      "Process Automation",
      "Enterprise Systems",
    ],
  },

  {
    id: "xocialve",
    company: "Xocialve",
    role: "Senior RPA Consultant",
    period: "Feb 2024 — Apr 2025",
    startDate: "2024-02",
    endDate: "2025-04",
    type: "Technology Vendor",
    location: "Saudi Arabia",
    relationship: "Tawuniya Engagement",

    description:
      "Joined the Tawuniya engagement as an outsourced RPA consultant, contributing to enterprise automation initiatives and supporting the design, development and delivery of automation solutions.",

    achievements: [
      "Developed enterprise RPA automations",
      "Participated in automation solution design",
      "Worked with business and technical stakeholders",
      "Supported automation deployment and production operations",
    ],

    technologies: [
      "RPA",
      "Process Automation",
      "Solution Design",
      "Enterprise Applications",
    ],
  },

  {
    id: "techvista",
    company: "TechVista Systems",
    role: "Senior RPA Developer & Solution Architect",
    period: "2021 — Jan 2024",
    startDate: "2021-01",
    endDate: "2024-01",
    type: "Technology Subsidiary",
    location: "Pakistan / Client Engagement",

    relationship: "Etisalat Outsourced Resource",

    description:
      "Worked as a senior RPA developer and solution architect through TechVista Systems, supporting an Etisalat client engagement and contributing to enterprise automation delivery.",

    achievements: [
      "Designed and developed enterprise RPA solutions",
      "Worked as an outsourced technical resource for Etisalat",
      "Contributed to automation architecture and solution design",
      "Collaborated with client stakeholders on automation initiatives",
      "Supported development, deployment and production lifecycle activities",
    ],

    technologies: [
      "RPA",
      "Solution Architecture",
      "Process Automation",
      "Enterprise Integration",
      "Automation Development",
    ],
  },

  {
    id: "visionet",
    company: "Visionet Systems",
    role: "Junior Consultant",
    period: "2021",
    startDate: "2021-01",
    endDate: "2021-12",
    type: "Technology Subsidiary",
    location: "Lahore, Pakistan",

    relationship: "Systems Limited Subsidiary",

    description:
      "Progressed into a consulting role within Visionet Systems, working on client-focused technology and automation initiatives.",

    achievements: [
      "Worked directly on client-oriented technology initiatives",
      "Expanded RPA and automation development capabilities",
      "Participated in solution delivery and technical analysis",
      "Developed stronger consulting and stakeholder-management skills",
    ],

    technologies: [
      "RPA",
      "Process Automation",
      "Consulting",
      "Solution Development",
    ],
  },

  {
    id: "systems-associate-consultant",
    company: "Systems Limited",
    role: "Associate Consultant — RPA",
    period: "2021",
    startDate: "2021-01",
    endDate: "2021-12",
    type: "Professional Role",
    location: "Lahore, Pakistan",

    description:
      "Worked as an Associate Consultant specializing in Robotic Process Automation, building foundational expertise in enterprise automation and consulting.",

    achievements: [
      "Developed RPA automation solutions",
      "Worked on process analysis and automation opportunities",
      "Built experience with enterprise automation delivery",
      "Developed consulting and technical problem-solving capabilities",
    ],

    technologies: [
      "RPA",
      "Process Analysis",
      "Automation Development",
      "Enterprise IT",
    ],
  },

  {
    id: "systems-start",
    company: "Systems Limited",
    role: "IT Professional",
    period: "2020 — 2021",
    startDate: "2020-01",
    endDate: "2021-01",
    type: "Professional Role",
    location: "Lahore, Pakistan",

    description:
      "Started professional IT career at Systems Limited, building a foundation in enterprise technology and progressing toward specialization in RPA and automation.",

    achievements: [
      "Started professional IT career in an enterprise technology environment",
      "Built foundational technical and professional skills",
      "Transitioned toward RPA and automation specialization",
      "Developed experience working within structured enterprise delivery teams",
    ],

    technologies: [
      "Enterprise IT",
      "Automation",
      "Systems Integration",
      "Technical Support",
    ],
  },
];
