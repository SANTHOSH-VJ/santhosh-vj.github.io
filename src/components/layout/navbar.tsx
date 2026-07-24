"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { images, social, navLinks } from "@/lib/constants";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setMenuOpen(false);
    
    const target = targetId.replace("#", "");
    const lenis = (window as any).lenis;
    
    if (lenis) {
      const order = [
        "home", 
        "about", 
        "orbit", 
        "skills", 
        "certifications", 
        "projects", 
        "experience", 
        "how-it-works", 
        "contact"
      ];
      
      const targetIndex = order.indexOf(target);

      if (targetIndex !== -1) {
        const currentScroll = window.scrollY + window.innerHeight / 3;
        let currentIndex = 0;
        
        for (let i = 0; i < order.length; i++) {
          const el = document.getElementById(order[i]);
          if (el && el.offsetTop <= currentScroll) {
            currentIndex = i;
          }
        }

        if (targetIndex !== currentIndex) {
          const dir = targetIndex > currentIndex ? 1 : -1;
          
          for (let i = currentIndex + dir; dir > 0 ? i <= targetIndex : i >= targetIndex; i += dir) {
            const section = document.getElementById(order[i]);
            if (!section) continue;
            
            const targetPos = section.offsetTop - 56;
            lenis.scrollTo(section, { duration: 0.3, offset: -56 });
            
            await new Promise<void>((resolve) => {
              let attempts = 0;
              const checkScroll = () => {
                attempts++;
                if (Math.abs(lenis.scroll - targetPos) < 10 || attempts > 50) {
                  resolve();
                } else {
                  requestAnimationFrame(checkScroll);
                }
              };
              requestAnimationFrame(checkScroll);
            });
            
            if (i !== targetIndex) await wait(50);
          }
        }
      } else {
        const el = document.getElementById(target);
        if (el) lenis.scrollTo(el, { duration: 1.2, offset: -56 });
      }
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "Home";
      for (const link of navLinks) {
        const element = document.getElementById(link.toLowerCase());
        if (element && element.offsetTop <= scrollPos) {
          current = link;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,18,40,0.85)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative size-8 rounded-full overflow-hidden bg-[#e5e5e5]">
            <Image
              src={images.santhoshPortraitSuit}
              alt="Santhosh V"
              fill
              sizes="32px"
              className="object-cover object-top"
            />
          </div>
          <span className="font-sans font-semibold text-white text-sm">
            SANTHOSH V
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, `#${link.toLowerCase()}`)}
              className={`font-sans text-sm transition-colors duration-200 ${
                activeSection === link
                  ? "text-white font-bold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA & Socials */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white text-sm font-mono font-semibold px-5 py-2 rounded-full shadow-[0_10px_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.7)] transition-all duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[rgba(10,18,40,0.97)] backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-sans text-base py-1 ${
                  activeSection === link
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
                onClick={(e) => handleNavClick(e, `#${link.toLowerCase()}`)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
