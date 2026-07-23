import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import dynamic from 'next/dynamic';

const OrbitSection = dynamic(() => import('@/components/sections/orbit-section').then(mod => mod.OrbitSection));
const CertificationsSection = dynamic(() => import('@/components/sections/certifications-section').then(mod => mod.CertificationsSection));
const ProjectsHero = dynamic(() => import('@/components/sections/projects-hero').then(mod => mod.ProjectsHero));
const AboutSection = dynamic(() => import('@/components/sections/about-section').then(mod => mod.AboutSection));
const TechnologiesSection = dynamic(() => import('@/components/sections/technologies-section').then(mod => mod.TechnologiesSection));
const ProjectsSection = dynamic(() => import('@/components/sections/projects-section').then(mod => mod.ProjectsSection));
const ExperienceSection = dynamic(() => import('@/components/sections/experience-section').then(mod => mod.ExperienceSection));
const HowItWorksSection = dynamic(() => import('@/components/sections/how-it-works-section').then(mod => mod.HowItWorksSection));
const ContactSection = dynamic(() => import('@/components/sections/contact-section').then(mod => mod.ContactSection));

export default function Home() {
  return (
    <div className="bg-[#030213] min-h-screen font-sans selection:bg-[#2563eb] selection:text-white relative">
      <script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://santhosh-vj.github.io/#person",
              "name": "Santhosh V",
              "givenName": "Santhosh",
              "jobTitle": ["Cloud Engineer", "DevOps Engineer", "Software Engineer"],
              "url": "https://santhosh-vj.github.io",
              "image": "https://santhosh-vj.github.io/assets/images/santhosh-portrait-casual.png",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "R.M.D Engineering College"
              },
              "knowsAbout": [
                "Cloud Computing",
                "AWS",
                "DevOps",
                "Software Engineering",
                "Docker",
                "Kubernetes",
                "CI/CD"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "AWS Certified Cloud Practitioner"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "ServiceNow Certified System Administrator"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Oracle Cloud Infrastructure Architect Associate"
                }
              ],
              "sameAs": [
                "https://github.com/SANTHOSH-VJ",
                "https://www.linkedin.com/in/vjsanthosh/"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://santhosh-vj.github.io/#website",
              "url": "https://santhosh-vj.github.io",
              "name": "Santhosh V Portfolio",
              "publisher": {
                "@id": "https://santhosh-vj.github.io/#person"
              }
            }
          ]
        })
      }} />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <OrbitSection />
        <TechnologiesSection />
        <CertificationsSection />
        <div id="projects" className="relative">
          <ProjectsHero />
          <ProjectsSection />
        </div>
        <ExperienceSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
    </div>
  );
}
