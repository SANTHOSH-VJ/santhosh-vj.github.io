"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { social } from "@/lib/constants";

export function ContactSection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!message.trim()) return;
      setStep(2);
      return;
    }

    if (!email.trim()) return;
    setStatus("submitting");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8c164f20-8090-4134-b64a-8c690bf8c754",
          email,
          message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setMessage("");
        setEmail("");
        setStep(1);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-24 md:pt-32 pb-4 overflow-hidden bg-[#f8fafc] flex flex-col items-center"
    >
      {/* Top Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] h-[150px] bg-[#2563eb] opacity-[0.08] blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center text-center w-full z-10">

        <span className="font-sans text-[#2563eb] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6">
          Get in Touch
        </span>

        <h2 className="font-sans font-black text-[#111] text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[1.1] mb-8 max-w-4xl">
          Let's Build <br className="hidden md:block" />
          <span className="text-[#2563eb]">Something.</span>
        </h2>

        <p className="font-sans text-[#475569] text-sm md:text-base max-w-xl leading-relaxed mb-16">
          I'm currently open to internships, collaborations, and interesting projects. If you have something worth building, I want to hear about it.
        </p>

        <div className="w-full max-w-xl flex flex-col items-center gap-4">
          <span className="font-sans text-[#4b5563] text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase mb-2">
            Start the conversation
          </span>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="w-full relative group">
              <input
                type={step === 1 ? "text" : "email"}
                placeholder={step === 1 ? "Drop your message here..." : "What's your email address?"}
                value={step === 1 ? message : email}
                onChange={(e) => step === 1 ? setMessage(e.target.value) : setEmail(e.target.value)}
                disabled={status === "submitting" || status === "success"}
                className="w-full bg-white border border-[#e2e8f0] shadow-sm rounded-full pl-6 pr-14 py-4 md:py-5 text-sm md:text-base text-[#111] placeholder:text-[#4b5563] outline-none focus:border-[#2563eb]/50 focus:ring-4 focus:ring-[#2563eb]/10 transition-all duration-300 disabled:opacity-50"
                required
              />
              <button 
                type="submit"
                aria-label="Submit email"
                disabled={status === "submitting" || status === "success"}
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 size-8 md:size-10 bg-[#f1f5f9] group-focus-within:bg-[#2563eb] group-focus-within:text-white rounded-full flex items-center justify-center text-[#4b5563] group-focus-within:shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 disabled:opacity-50"
              >
                {status === "submitting" ? (
                   <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>
            </div>

            <span className={`font-sans text-[10px] md:text-xs tracking-wider font-mono mt-3 mb-8 min-h-[20px] ${status === 'success' ? 'text-green-600 font-bold' : status === 'error' ? 'text-red-500' : 'text-[#4b5563]'}`}>
              {status === "success" 
                ? "Message sent successfully! I'll get back to you soon."
                : status === "error"
                ? "Something went wrong. Please try emailing me directly."
                : step === 1 
                ? "Press Enter or click ↵ - we'll ask for your email next"
                : "Press Enter or click ↵ to send your message"}
            </span>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                aria-label="Submit email"
                className="bg-[#2563eb] text-white font-mono font-semibold text-sm px-6 py-3 rounded-[8px] md:rounded-[12px] hover:bg-[#1d4ed8] transition-all duration-200 shadow-[0_4px_14px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 1 ? "Next Step" : status === "submitting" ? "Sending..." : "Send Message"}
              </button>
              <a
                href="/Santhosh_Resume.pdf"
                download="Santhosh_Resume.pdf"
                className="bg-white border border-[#e2e8f0] text-[#475569] font-mono font-medium text-sm px-6 py-3 rounded-[8px] md:rounded-[12px] hover:bg-[#f8fafc] hover:text-[#111] hover:border-[#cbd5e1] shadow-sm transition-all duration-200"
              >
                Download Resume
              </a>
            </div>
          </form>

          <div className="mt-12 flex items-center justify-center gap-6 text-[#4b5563] font-sans text-xs">
            <a href={`mailto:${social.email}`} className="flex items-center gap-2 hover:text-[#2563eb] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              {social.email}
            </a>
            <a href={social.github} target="_blank" rel="noreferrer" className="flex items-center hover:text-[#2563eb] transition-colors" aria-label="GitHub Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="flex items-center hover:text-[#2563eb] transition-colors" aria-label="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center mt-20 md:mt-24 pb-4 pt-6 border-t border-[#e2e8f0] relative z-10">
        <p className="font-sans text-[#4b5563] text-[11px] md:text-xs">
          © 2026 Santhosh V. All rights reserved.
        </p>
      </div>
    </section>
  );
}
