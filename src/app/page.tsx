import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { OrbitSection } from "@/components/sections/orbit-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ProjectsHero } from "@/components/sections/projects-hero";
import { AboutSection } from "@/components/sections/about-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="bg-[#030213] min-h-screen font-['DM_Sans',sans-serif] selection:bg-[#2563eb] selection:text-white relative">
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
