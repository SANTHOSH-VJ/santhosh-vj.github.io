import React from "react";
import Image from "next/image";

const imgCloudTextureMask = "/assets/images/cloud-texture-mask.webp";

function Heading() {
  return (
    <div className="content-stretch drop-shadow-[0px_4px_1.5px_rgba(0,0,0,0.1),0px_10px_4px_rgba(0,0,0,0.04)] flex flex-col items-start w-fit relative z-10">
      <h1 className="[word-break:break-word] flex flex-col font-mono font-extrabold justify-center leading-[0] not-italic relative text-[32px] md:text-[40px] text-white tracking-[-1px] whitespace-normal w-fit">
        <span className="leading-tight md:leading-[46px] mb-0 block">Building The Future with Cloud,</span>
        <span className="leading-tight md:leading-[46px] mb-0 block">Automation, and Ambition</span>
      </h1>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-fit z-10">
      <div className="[word-break:break-word] flex flex-col font-mono font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.85)] tracking-[0.2px] w-fit">
        <p className="leading-[30px]">Dream, Build, Deploy.</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-wrap sm:flex-nowrap gap-[16px] items-center relative w-fit z-10 pt-[16px]">
      <a href="#projects" className="bg-gradient-to-r content-stretch flex flex-col from-[#2563eb] items-center justify-center px-[28px] py-[12px] relative rounded-[9999px] shrink-0 to-[#3b82f6] cursor-pointer hover:shadow-lg hover:brightness-110 transition-all duration-200">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(37,99,235,0.4),0px_4px_6px_-4px_rgba(37,99,235,0.4)]" />
        <div className="[word-break:break-word] flex flex-col font-mono font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[112.005px]">
          <p className="leading-[24px]">View My Work</p>
        </div>
      </a>
      <a href="/Santhosh_Resume.pdf" download="Santhosh_Resume.pdf" className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col items-center justify-center px-[28px] py-[12px] relative rounded-[9999px] shrink-0 hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="[word-break:break-word] flex flex-col font-mono font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.0313px] whitespace-nowrap">
          <p className="leading-[24px]">Download Resume</p>
        </div>
      </a>
    </div>
  );
}

function FloatingIcon({ icon, label, className, delayClass = "", iconSize = "size-[24px]" }: { icon: string, label?: string, className: string, delayClass?: string, iconSize?: string }) {
  return (
    <div className={`hidden lg:flex absolute items-center justify-center z-10 ${className} ${delayClass}`}>
      <div className="flex-none hover:scale-105 transition-transform duration-300">
        <div className="bg-[rgba(255,255,255,0.16)] backdrop-blur-sm content-stretch flex gap-[10px] h-[46px] items-center px-[18px] relative rounded-full">
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-full shadow-[0px_8px_24px_0px_rgba(13,26,51,0.18)]" />
          <div className={`relative shrink-0 flex items-center justify-center ${iconSize}`}>
             <img src={`https://api.iconify.design/${icon}.svg`} alt={label || "icon"} className="w-full h-full object-contain drop-shadow-sm" />
          </div>
          {label && (
            <div className="relative shrink-0 pt-[1px]">
              <span className="font-sans font-bold text-[15px] text-center text-white whitespace-nowrap tracking-wide">
                {label}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="select-none content-stretch flex flex-col items-start justify-center relative size-full overflow-hidden" style={{ backgroundImage: "linear-gradient(179.349deg, rgb(10, 23, 51) 1.2399%, rgb(41, 92, 184) 38.325%, rgb(96, 165, 250) 67.603%, rgb(229, 241, 252) 86.146%, rgb(239, 246, 255) 98.833%)" }}>
      
      {/* Reduced background blurs by using radial gradients instead of SVG filters */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[25vw] h-[25vw] bg-[#FFFAE5] opacity-20 rounded-full blur-[50px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[20vw] h-[20vw] bg-[#bfdbfe] opacity-30 rounded-full blur-[40px] pointer-events-none"></div>
      </div>

      {/* Cloud mask background - Left */}
      <div className="absolute inset-0 pointer-events-none z-0 translate-y-[35%] -translate-x-[20%] scale-[0.75] origin-bottom">
        <Image priority fetchPriority="high" loading="eager" alt="" className="object-cover size-full" src={imgCloudTextureMask} fill sizes="100vw" />
      </div>

      {/* Cloud mask background - Right */}
      <div className="absolute inset-0 pointer-events-none z-0 translate-y-[30%] translate-x-[25%] scale-[0.65] -rotate-6 origin-bottom">
        <Image priority fetchPriority="high" loading="eager" alt="" className="object-cover size-full -scale-x-100" src={imgCloudTextureMask} fill sizes="100vw" />
      </div>

      {/* Gradient to smooth the cut-off line into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />

      {/* Decorative Stars */}
      <div className="hidden md:block absolute bg-white left-[10%] opacity-60 rounded-full size-[4px] top-[10%]" />
      <div className="hidden md:block absolute bg-white left-[25%] opacity-40 rounded-full size-[6px] top-[17%]" />
      <div className="hidden md:block absolute bg-white left-[45%] opacity-50 rounded-full size-[4px] top-[6%]" />
      <div className="hidden md:block absolute bg-white left-[30%] opacity-30 rounded-full size-[8px] top-[25%]" />
      <div className="hidden md:block absolute bg-[#bfdbfe] left-[65%] opacity-70 rounded-full size-[4px] top-[12%]" />
      <div className="hidden md:block absolute bg-white left-[80%] opacity-50 rounded-full size-[6px] top-[5%]" />
      <div className="hidden md:block absolute bg-white left-[52%] opacity-40 rounded-full size-[4px] top-[20%]" />

      <div className="content-stretch flex flex-[1_0_0] gap-[86.1px] items-center min-h-px px-6 lg:px-[64px] relative w-full max-w-[1440px] mx-auto z-10">
        <div className="select-text content-stretch flex flex-col gap-[28px] items-start w-fit relative">
          <Heading />
          <SubHeading />
          <Buttons />
        </div>

        <FloatingIcon icon="logos:aws" label="" className="left-[55%] top-[18%] rotate-6 animate-float" iconSize="w-[44px] h-[26px]" />
        <FloatingIcon icon="logos:docker-icon" label="Docker" className="left-[68%] xl:left-[66%] top-[28%] -rotate-4 animate-float-delayed" iconSize="size-[26px]" />
        <FloatingIcon icon="logos:terraform-icon" label="Terraform" className="right-[8%] xl:right-[12%] top-[12%] rotate-3 animate-float-slow" iconSize="size-[22px]" />
        <FloatingIcon icon="devicon:githubactions" label="GitHub Actions" className="left-[56%] xl:left-[58%] top-[52%] -rotate-3 animate-float-delayed" iconSize="size-[24px]" />
        <FloatingIcon icon="logos:kubernetes" label="Kubernetes" className="right-[15%] xl:right-[18%] top-[65%] rotate-5 animate-float" iconSize="size-[24px]" />
        <FloatingIcon icon="logos:linux-tux" label="Linux" className="right-[5%] xl:right-[8%] top-[42%] -rotate-6 animate-float-slow" iconSize="size-[26px]" />
      </div>
    </div>
  );
}
