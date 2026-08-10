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

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setMenuOpen(false);
    
    const target = targetId.replace("#", "");
    const lenis = (window as any).lenis;
    const el = document.getElementById(target);
    
    if (lenis && el) {
      lenis.scrollTo(el, { duration: 0.6, offset: -56 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;

      const scrollPos = currentScrollY + window.innerHeight / 3;
      let current = "Home";
      for (const link of navLinks) {
        const element = document.getElementById(link.toLowerCase());
        if (element && element.offsetTop <= scrollPos) {
          current = link;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      {/* Desktop Dynamic Island (Notch) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.nav
          layout
          transition={{ layout: { type: "spring", stiffness: 35, damping: 25 } }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`pointer-events-auto relative flex items-center h-14 rounded-b-[24px] bg-[#000000]`}
        >
          {/* SVG Inverted Corners */}
          <svg className="absolute top-0 -left-[16px] w-[16px] h-[16px] pointer-events-none" viewBox="0 0 16 16" fill="#000000">
            <path d="M16 0H0C8.83656 0 16 7.16344 16 16V0Z" />
          </svg>
          <svg className="absolute top-0 -right-[16px] w-[16px] h-[16px] pointer-events-none" viewBox="0 0 16 16" fill="#000000">
            <path d="M0 0H16C7.16344 0 0 7.16344 0 16V0Z" />
          </svg>
          <div className="flex items-center px-3 h-full">
            {/* Avatar - Always visible */}
            <motion.div layout className="flex items-center gap-3">
              <div className="relative size-9 rounded-full overflow-hidden bg-[#e5e5e5] shrink-0 border border-white/10">
                <Image
                  src={images.santhoshPortraitSuit}
                  alt="Santhosh V"
                  fill
                  sizes="36px"
                  className="object-cover object-top"
                />
              </div>

              {/* Name & Role - Visible when NOT hovered */}
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden whitespace-nowrap flex flex-col justify-center"
                  >
                    <div className="flex flex-col pr-4">
                      <span className="font-sans font-semibold text-white text-[13px] leading-tight">
                        Santhosh V
                      </span>
                      <span className="font-sans text-white/50 text-[11px] leading-tight">
                        Cloud Engineer
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>


            {/* Nav Links - Visible when hovered */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <div className="flex items-center gap-6 pl-4 pr-1">
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
                    
                    {/* Socials & CTA */}
                    <div className="flex items-center gap-4 border-l border-white/20 pl-4">
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
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[rgba(10,18,40,0.85)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 h-14 flex items-center justify-between">
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

          {/* Hamburger */}
          <button
            className="text-white"
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
              className="bg-[rgba(10,18,40,0.97)] backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4"
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
                className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
