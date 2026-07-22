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
