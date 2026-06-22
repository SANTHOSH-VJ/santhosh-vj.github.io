export const PROFILE = {
  name: "Santhosh V",
  role: "Software Developer · Cloud Enthusiast",
  email: "santhosh@example.com",
  phone: "+91 00000 00000",
  location: "India",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resumeUrl: "/resume.pdf",
  bio: "Cloud Computing student and software developer focused on building reliable, scalable systems on AWS. I love clean architecture, automation, and shipping polished products.",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const;

export const TYPING_ROLES = [
  "Software Developer",
  "Cloud Enthusiast",
  "Java Developer",
  "AWS Learner",
  "ServiceNow Certified",
];

export const FLOATING_TECH = [
  "AWS", "Docker", "Git", "Java", "Python", "Linux", "GitHub",
];

export const SKILLS = [
  {
    category: "Programming",
    items: [
      { name: "Java", level: 88 },
      { name: "Python", level: 82 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS", level: 85 },
      { name: "OCI", level: 70 },
      { name: "Linux", level: 78 },
      { name: "Docker", level: 72 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    category: "AI-Assisted Dev",
    items: [
      { name: "GitHub Copilot", level: 85 },
      { name: "Claude", level: 90 },
      { name: "Kiro", level: 75 },
    ],
  },
];

export const CERTIFICATIONS = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2025" },
  { name: "ServiceNow Certified System Administrator", issuer: "ServiceNow", year: "2025" },
  { name: "Oracle OCI Architect Associate", issuer: "Oracle", year: "2025" },
  { name: "Linux Foundation Certified", issuer: "The Linux Foundation", year: "2024" },
];

export const PROJECTS = [
  {
    title: "Serverless Personal Cloud Storage Platform",
    description:
      "A secure, fully serverless file storage platform with authentication, signed uploads, and per-user buckets. Built end-to-end on AWS.",
    tech: ["AWS Cognito", "S3", "Lambda", "API Gateway", "Amplify", "Pre-Signed URLs"],
    features: [
      "JWT-based authentication via Cognito",
      "Direct-to-S3 uploads with pre-signed URLs",
      "Lambda functions behind API Gateway",
      "CI/CD with AWS Amplify",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "URL Shortener SaaS",
    description:
      "A production-grade link shortener with auth, expiration, analytics, and click tracking dashboards.",
    tech: ["Flask", "MySQL", "Cloud Deploy", "Analytics", "Auth"],
    features: [
      "Custom short codes with expiry",
      "Real-time click tracking",
      "User accounts and dashboards",
      "Cloud-deployed with monitoring",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Coming Soon",
    description: "Next project in the pipeline — exploring event-driven architectures on AWS.",
    tech: ["AWS", "EventBridge", "DynamoDB"],
    features: ["TBA"],
    github: "#",
    demo: "#",
  },
];

export const EXPERIENCE = [
  {
    role: "AI Intern",
    company: "Shell",
    period: "2025 — Present",
    points: [
      "Working on AI-assisted tooling for internal engineering workflows.",
      "Contributing to data pipelines and model evaluation.",
    ],
  },
  {
    role: "Cloud Computing Student",
    company: "University",
    period: "Ongoing",
    points: [
      "Specializing in cloud-native architectures and distributed systems.",
      "Hands-on with AWS, OCI, Docker, and Linux administration.",
    ],
  },
];

export const ACHIEVEMENTS = [
  { title: "Grand Prix of Code — Winner", detail: "1st place, competitive coding event" },
  { title: "1100+ Problems Solved", detail: "Across Java, Python and SQL platforms" },
  { title: "SQL Competition Finalist", detail: "Top performer in inter-college SQL contest" },
  { title: "Smart India Hackathon", detail: "Selected team for national-level hackathon" },
];

export const STATS = [
  { value: 1100, suffix: "+", label: "Problems Solved" },
  { value: 4, suffix: "", label: "Certifications" },
  { value: 12, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "", label: "Cloud Platforms" },
];
