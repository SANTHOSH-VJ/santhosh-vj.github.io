import { FadeIn } from "@/components/ui/fade-in";

const experiences = [
  {
    role: "AI Intern",
    company: "Shell",
    date: "June 2025 – July 2025",
    description: [
      "Worked on basic machine learning algorithms for model training and deployment. Performed dataset preprocessing model training and evaluation to assess model performance."
    ],
  },
  {
    role: "Software Intern",
    company: "Ziffity Solutions Inc.",
    date: "June 2026 – July 2026",
    description: [
      "Specializing in cloud-native architectures and distributed systems.",
      "Hands-on with AWS, Docker, and Linux."
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-16 md:py-28 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="bg-white border border-[#ededed] rounded-full px-5 py-2 inline-flex mb-4">
            <span className="font-['DM_Sans',sans-serif] font-medium text-[#111] text-sm">Experience</span>
          </div>
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[#111] text-3xl md:text-4xl tracking-[-1.2px] mb-4">
            Where I've worked
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#4b5563] text-base max-w-sm leading-relaxed tracking-[-0.32px]">
            Hands-on roles where I've shipped real impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-[9px] top-[24px] bottom-0 w-px bg-gradient-to-b from-[#2563eb] to-transparent" />

          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, i) => (
              <FadeIn 
                key={i}
                direction="left"
                delay={i * 0.1}
                className="relative pl-10 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-1px] md:left-[1px] top-[24px] md:top-[28px] w-[17px] h-[17px] md:w-[17px] md:h-[17px] rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.4)] z-10" />

                {/* Card */}
                <div className="bg-[#f7f7f7] border border-transparent rounded-[30px] p-6 md:p-8 hover:border-[#ededed] transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-[#111] text-xl md:text-2xl font-bold font-['DM_Sans',sans-serif] tracking-tight">
                        {exp.role} <span className="text-[#4b5563] font-medium">· {exp.company}</span>
                      </h3>
                    </div>
                    <div className="font-mono text-xs md:text-sm text-[#4b5563]">
                      {exp.date}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {exp.description.map((desc, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <svg className="w-[12px] h-[12px] text-[#2563eb] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <p className="text-[#333] text-[15px] leading-relaxed font-['DM_Sans',sans-serif]">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
