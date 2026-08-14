// ─── Image Paths ─────────────────────────────────────────────────────────────
// Single source of truth for all image asset paths used across the site.

export const images = {
  santhoshPortraitSuit: "/assets/images/santhosh-portrait-suit-new.jpg",
  githubProfileBanner: "/assets/images/github-profile-banner.webp",
  projectAwsServerless: "/assets/images/project-aws-serverless.webp",
  projectKuttylinkDashboard: "/assets/images/project-kuttylink-dashboard.webp",
  projectCicdPipeline: "/assets/images/project-cicd-pipeline.webp",
  badgeAwsCloudPractitioner: "/assets/images/badge-aws-cloud-practitioner.webp",
  badgeServicenowSystemAdmin: "/assets/images/badge-servicenow-system-admin.webp",
  badgeCertifiedApplicationDeveloper: "/assets/images/certified-application-developer-cad.webp",
  badgeOciArchitectAssociate: "/assets/images/badge-oci-architect-associate.webp",
  cloudTextureMask: "/assets/images/cloud-texture-mask.webp",
  iconClaude: "/assets/images/icon-claude.webp",
  iconKiro: "/assets/images/icon-kiro.webp",
  iconAntigravity: "/assets/images/icon-antigravity.webp",
} as const;

// ─── Social Links ────────────────────────────────────────────────────────────

export const social = {
  github: "https://github.com/SANTHOSH-VJ",
  linkedin: "https://www.linkedin.com/in/vjsanthosh/",
  email: "vjsanthosh10@gmail.com",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
] as const;
