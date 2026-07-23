import { social, navLinks } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1228] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h3 className="font-sans font-bold text-2xl tracking-tight">
              Santhosh V.
            </h3>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-sm">
              Cloud Engineer & DevOps Practitioner building reliable infrastructure and scalable applications. Always learning, always building.
            </p>
            <div className="flex gap-4">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all duration-300 text-white/70"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all duration-300 text-white/70"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${social.email}`}
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all duration-300 text-white/70"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-sans font-semibold text-lg text-white mb-2">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="font-sans font-semibold text-lg text-white mb-2">
              Get in Touch
            </h4>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-2">
              Looking for a technical partner or have a project in mind? Let's discuss how we can work together.
            </p>
            <a
              href={`mailto:${social.email}`}
              className="font-sans font-medium text-[#2563eb] hover:text-blue-400 transition-colors w-fit flex items-center gap-2"
            >
              <Mail size={16} />
              {social.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/40 text-xs text-center md:text-left">
            &copy; {currentYear} Santhosh V. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="font-sans text-white/40 text-xs hover:text-white transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
