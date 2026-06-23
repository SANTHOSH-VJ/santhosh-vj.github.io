export const PROFILE = {
  name: "SANTHOSH V",
  role: "Software Developer · Cloud Enthusiast",
  email: "vjsanthosh10@gmail.com",
  phone: "+91 9500041161",
  location: "India",
  github: "https://github.com/SANTHOSH-VJ",
  linkedin: "https://www.linkedin.com/in/santhosh-v-146b58293/",
  resumeUrl: "https://drive.google.com/file/d/1rEKi2FwyseXhPayQs4p0W15QSN4TeuBx/view?usp=sharing",
  bio: "Passionate in Cloud Computing and software developer focused on building reliable, scalable systems on AWS.",
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
  "AWS Learner",
  "AWS Certified",
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
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 85 },
      { name: "OCI", level: 70 },
      { name: "Linux", level: 78 },
      { name: "Docker", level: 72 },
    ],
  },
  {
    category: "Tools & Platform",
    items: [
      { name: "VS Code", level: 85 },
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
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    credentialUrl: "https://www.credly.com/badges/01b91852-a3aa-45d5-8ebc-9dbd5d0c8899/public_url",
    badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122512/aws-certified-cloud-practitioner_1_qpdvun.png",
  },
  {
    name: "ServiceNow Certified System Administrator",
    issuer: "ServiceNow",
    year: "2026",
    credentialUrl: "https://www.credly.com/badges/7e6b6436-21b4-4fd5-919b-177245eda1b8/public_url",
    badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782123027/servicenow-certified-system-administrator-csa_kmagdm.png",
  },
  {
    name: "ServiceNow Certified Application Developer",
    issuer: "ServiceNow",
    year: "2026",
    credentialUrl: "https://www.credly.com/badges/74573025-c8c5-41f1-bf5f-cdc26022ec23/public_url",
    badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122846/certified-application-developer-cad_1_wphuz2.png",
  },
  {
    name: "Oracle OCI Architect Associate",
    issuer: "Oracle",
    year: "2025",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D8BBD375C3F6B930A80D6C0B768584956B9D45155EC9CA37F753E7C490CE8958",
    badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122715/OCI25CAA_s1zpar.jpg",
  },
  {
    name: "Linux Foundation Certified",
    issuer: "The Linux Foundation",
    year: "2025",
    credentialUrl: "https://www.credly.com/badges/11068a56-376b-4375-9b0e-cc4b5e378711/public_url",
    badgeUrl: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782122575/lfs101-introduction-to-linux_sfmsgf.png",
  },
];

export const PROJECTS = [
  {
    title: "Serverless Personal Cloud Storage Platform",
    description:
      "A secure, fully serverless file storage platform with authentication, signed uploads, and per-user buckets. Built end-to-end on AWS.",
    tech: ["AWS Cognito", "S3", "Lambda", "API Gateway", "Amplify", "Pre-Signed URLs"],
    image: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782117651/03b5f0cb-209a-4db6-821a-8c1d75fe38af_wmcet6.png",
    features: [
      "JWT-based authentication via Cognito",
      "Direct-to-S3 uploads with pre-signed URLs",
      "Lambda functions behind API Gateway",
      "CI/CD with AWS Amplify",
    ],
    github: "https://github.com/SANTHOSH-VJ/aws-serverless-cloud-storage.git",
    demo: "#",
  },
  {
    title: "URL Shortener SaaS",
    description:
      "A production-grade link shortener with auth, expiration, analytics, and click tracking dashboards.",
    tech: ["Flask", "MySQL", "Cloud Deploy", "Analytics", "Auth"],
    image: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782117887/b886c996-de51-4c93-acd4-6229f45ad248_zbtshj.png",

    features: [
      "Custom short codes with expiry",
      "Real-time click tracking",
      "User accounts and dashboards",
      "Cloud-deployed with monitoring",
    ],
    github: "https://github.com/SANTHOSH-VJ/url-saas.git",
    demo: "https://kuttylink.onrender.com/",
  },
  {
    title: "CI/CD Pipeline with GitHub Actions, Docker, and AWS",
    description: "Next project in the pipeline — exploring CI/CD pipelines for event-driven architectures on AWS.",
    tech: ["AWS", "GitHub Actions", "Docker"],
    image: "https://res.cloudinary.com/dw42jvqwu/image/upload/v1782118015/9cedda0c-bc03-482d-b60a-a200c6dfd66c_o1gpxy.png",
    features: ["Continuous integration and deployment", "Automated testing", "Containerization with Docker"],
    github: "https://github.com/SANTHOSH-VJ/ziffity_Intern.git",
    demo: "#",
  },
];

export const EXPERIENCE = [
  {
    role: "AI Intern",
    company: "Shell",
    period: "June 2025 — July 2025",
    points: [
      "Worked on basic machine learning algorithms for model training and deployment. Performed dataset preprocessing model training and evaluation to assess model performance.",
    ],
  },
  {
    role: "Software Intern",
    company: "Ziffity Solutions Inc.",
    period: "Ongoing",
    points: [
      "Specializing in cloud-native architectures and distributed systems.",
      "Hands-on with AWS, Docker, and Linux.",
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
  { value: 5, suffix: "", label: "Certifications" },
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "", label: "Cloud Platforms" },
];
