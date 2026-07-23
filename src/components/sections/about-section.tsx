import { images } from "@/lib/constants";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white min-h-[100vh] py-8 md:py-10 relative overflow-hidden flex items-center"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f8fafc] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f0f9ff] rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="relative max-w-[1360px] w-full mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left Column */}
          <FadeIn
            direction="left"
            className="lg:w-5/12 w-full flex flex-col gap-10 lg:pt-4"
          >
            <div className="flex flex-col items-start gap-6">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] shadow-sm rounded-full px-5 py-1.5 inline-flex">
                <span className="font-sans font-bold text-[#475569] text-[11px] tracking-widest uppercase">About me</span>
              </div>
              <h2 className="font-sans font-bold text-[#111] text-3xl md:text-4xl tracking-[-0.03em] leading-[1.15]">
                Building systems that last.
              </h2>
            </div>

            <div className="bg-white rounded-[28px] p-6 border border-[#eaeaea] shadow-lg shadow-black/[0.03] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-[#eff6ff] to-[#f8fafc]"></div>

              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="size-20 rounded-full overflow-hidden border-4 border-white shadow-xl relative group-hover:scale-105 transition-transform duration-500 bg-[#e5e5e5]">
                  <Image
                    src={images.santhoshPortraitSuit}
                    alt="Santhosh V - Cloud & DevOps Engineer Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-sans font-bold text-[#111] text-lg">SANTHOSH V</h3>
                  <p className="font-sans text-[#555] font-medium text-sm">Computer Science Engineering Student</p>
                  <p className="font-sans text-[#888] text-xs">R.M.D. Engineering College</p>

                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] text-xs font-semibold px-3 py-1 rounded-full">Cloud Computing</span>
                    <span className="bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0] text-xs font-semibold px-3 py-1 rounded-full">DevOps</span>
                  </div>

                  <a
                    href="/Santhosh_Resume.pdf"
                    download="Santhosh_Resume.pdf"
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-[#111] text-white hover:bg-[#222] transition-colors py-2.5 rounded-xl font-sans font-medium text-sm shadow-md group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-[2px] transition-transform duration-200"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column */}
          <FadeIn
            direction="right"
            delay={0.2}
            className="lg:w-7/12 w-full flex flex-col justify-center lg:pt-16"
          >
            <div className="font-sans text-[#4b5563] text-[13px] md:text-sm lg:text-base leading-[1.6] md:leading-[1.7]">
              <p className="text-base md:text-lg lg:text-xl text-[#111] font-medium leading-[1.4] tracking-[-0.01em] mb-4 lg:mb-5">
                I'm Santhosh V, a Computer Science Engineering student specializing in Cloud Computing at R.M.D. Engineering College. I enjoy building scalable cloud applications, automating infrastructure with DevOps practices, and developing reliable backend systems using AWS and modern web technologies.
              </p>

              <p className="mb-3 lg:mb-4">
                My foundation was built through Java, backend development, and competitive problem solving. As I explored cloud technologies, I found myself drawn toward the engineering behind modern applications—<span className="text-[#111] font-semibold">serverless architectures, CI/CD pipelines, containerization, and infrastructure automation</span>. That's where I discovered the kind of problems I enjoy solving.
              </p>

              <p className="mb-3 lg:mb-4">
                Today I focus on building reliable cloud-native applications using AWS, Docker, GitHub Actions, and modern backend technologies. I believe good engineering is more than clean code—it's about creating systems that remain secure, scalable, and maintainable as they grow.
              </p>

              <p>
                Beyond development, I continuously challenge myself through coding practice, personal projects, and professional certifications. Every project is an opportunity to become a better engineer, and every problem is another step toward building software that people can trust.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}