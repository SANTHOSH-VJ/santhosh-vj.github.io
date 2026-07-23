"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "motion/react";
import svgPaths from "@/figma-imports/HowItWorks/svg-g7q7tpsqy5";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Book a call",
    desc: "Start with a quick call to talk through your goals, timeline, and whether we're a good fit.",
    icon: (
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1dd4d340} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M13.6239 1.8578V4.33486" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M6.19266 1.8578V4.33486" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M3.09633 6.81193H16.7202" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p33e5df00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </div>
    ),
  },
  {
    num: "02",
    title: "Project brief",
    desc: "Once we align, we'll move forward with a clear project brief and contract, managed smoothly through Contra.",
    icon: (
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2f8b2080} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p456b180} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M7.43119 10.5275H12.3853" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M7.43119 13.0046H12.3853" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </div>
    ),
  },
  {
    num: "03",
    title: "Develop",
    desc: "I design and build your website in Framer, keeping you updated and involved along the way.",
    icon: (
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1cbb0580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M11.7661 6.81193H14.2431" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M11.7661 9.90826H14.2431" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M11.7661 13.0046H14.2431" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p2292bb00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M5.57339 5.57339V14.2431" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M8.05046 5.57339H3.09633" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M8.05046 14.2431H3.09633" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </div>
    ),
  },
  {
    num: "04",
    title: "Deliver",
    desc: "You'll receive a fully polished, launch-ready website that's easy to use and easy to maintain.",
    icon: (
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.pfb89000} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p205ffb00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.pe4b16c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </div>
    ),
  },
  {
    num: "05",
    title: "Support",
    desc: "After launch, I'm available for handoff guidance, small updates, and ongoing support if needed.",
    icon: (
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p17815f80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p12969e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p384f7180} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p347a1800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </div>
    ),
  }
];

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Track scrolling of the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Calculate the dot's vertical position and the highlight bar's height.
  // Using percentage strings for dynamic relative positioning.
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Dot center adjustment to stay aligned with the progress bar bottom
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = Math.min(steps.length - 1, Math.floor(latest * steps.length));
    if (activeStep !== step) setActiveStep(step);
  });

  return (
    <section id="how-it-works" className="bg-white py-24 md:py-40" ref={containerRef}>
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-28">
          <h2 className="font-sans font-semibold text-[#111] text-3xl md:text-4xl tracking-[-1.5px] mb-4">
            How we'll work together.
          </h2>
          <p className="font-sans text-[#4b5563] text-sm max-w-[340px] leading-relaxed">
            A simple, transparent process designed to keep things clear, efficient, and stress-free from start to finish.
          </p>
        </div>

        {/* Timeline Area */}
        <div ref={timelineRef} className="relative flex flex-col md:flex-row max-w-5xl mx-auto">

          {/* Left Column: Sticky Number */}
          <div className="hidden md:flex w-1/2 justify-end pr-16 lg:pr-24 relative shrink-0">
            <div className="sticky top-1/2 -translate-y-1/2 h-[60px] flex items-center justify-end w-full">
              <div className="flex items-end gap-1">
                <div className="relative overflow-hidden h-[45px] w-[50px]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute bottom-0 right-0"
                    >
                      <span className="font-sans font-medium text-[40px] text-[#111] leading-none tracking-[-1px]">
                        {steps[activeStep].num}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="font-sans font-normal text-xs text-[#4b5563] mb-[6px]">
                  /05
                </span>
              </div>
            </div>
          </div>

          {/* Middle: The Line */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[1px] bg-[#ededed] md:-translate-x-1/2 overflow-visible">
            {/* The colored highlight line filling from the top */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#2563eb] rounded-full"
              style={{ height: progressHeight }}
            />
            {/* The glowing dot flowing down */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#2563eb] shadow-[0_0_8px_rgba(37,99,235,0.4)]"
              style={{ top: dotY, marginTop: "-5px" }}
            />
          </div>

          {/* Right Column: Scrolling Steps */}
          <div className="flex-1 md:w-1/2 pl-16 md:pl-16 lg:pl-24 flex flex-col pt-4">
            {steps.map((s, i) => (
              <StepItem
                key={i}
                step={s}
                index={i}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component to detect when it enters the viewport center
function StepItem({ 
  step, 
  index, 
  activeStep, 
  setActiveStep, 
  isLast 
}: { 
  step: Step, 
  index: number, 
  activeStep: number, 
  setActiveStep: (val: number) => void, 
  isLast: boolean 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = activeStep === index;

  return (
    <div ref={ref} className={`flex flex-col ${isLast ? 'pb-0' : 'pb-[30vh] lg:pb-[40vh]'}`}>
      <motion.div 
        className={`p-6 md:p-8 rounded-3xl transition-all duration-700 ease-out flex flex-col gap-4 max-w-[400px] ${
          isActive 
            ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 scale-100 opacity-100 translate-x-0' 
            : 'scale-[0.98] opacity-40 translate-x-4 border border-transparent'
        }`}
      >
        <div className="mb-2">
          {step.icon}
        </div>
        <h3 className={`font-sans font-medium text-xl tracking-[-0.5px] transition-colors duration-500 ${isActive ? 'text-[#111]' : 'text-[#4b5563]'}`}>
          {step.title}
        </h3>
        <p className="font-sans text-[#4b5563] text-sm leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    </div>
  );
}
