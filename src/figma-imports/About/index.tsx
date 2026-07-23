import React from "react";
import Image from "next/image";
import svgPaths from "./svg-sqycjev8l6";
const imgAbstractGreenWaves = "/assets/images/abstract-green-waves.webp";
const imgYewTreeBranches = "/assets/images/yew-tree-branches.webp";
import { imgBlur } from "./svg-3dold";

function PFramerText() {
  return (
    <p className="text-[#333] text-xs sm:text-sm lg:text-base text-center tracking-tight font-['DM_Sans:Regular',sans-serif] leading-relaxed">
      I design and develop cloud-native applications, scalable backend systems, and DevOps solutions.
    </p>
  );
}

function MarkFramerText() {
  return (
    <p className="bg-[#bdee63] text-[#111] text-[10px] sm:text-xs lg:text-sm text-center tracking-tight px-3 md:px-4 py-1.5 rounded font-['DM_Sans:Regular',sans-serif] leading-snug">
      My goal is simple: build reliable software, automate repetitive tasks, and create cloud solutions that solve real-world problems.
    </p>
  );
}

function PFramerText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[7.08px] pr-[3.13px] py-[0.8px] relative size-full">
          <MarkFramerText />
        </div>
      </div>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Text Wrapper">
      <PFramerText />
      <PFramerText1 />
    </div>
  );
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[22.4px]">About me</p>
      </div>
    </div>
  );
}

function DivFramerMb4S() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73px]" data-name="div.framer-mb4s8">
      <PFramerText2 />
    </div>
  );
}

function Secondary() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[100px]" data-name="Secondary">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
          <DivFramerMb4S />
          <div className="absolute inset-0 rounded-[100px]" data-name="::after">
            <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramerEpqwlrContainer() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0" data-name="div.framer-epqwlr-container">
      <Secondary />
    </div>
  );
}

function Text() {
  return (
    <div className="flex flex-col gap-3 lg:gap-5 items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[440px] mx-auto px-2" data-name="Text">
      <DivFramerEpqwlrContainer />
      <div className="flex flex-col gap-2 md:gap-3 items-center w-full">
        <PFramerText />
        <MarkFramerText />
      </div>
    </div>
  );
}

function Blur() {
  return <div className="absolute backdrop-blur-[5px] bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[300px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_300px] right-0 to-white via-[65%] via-[rgba(255,255,255,0.91)]" style={{ maskImage: `url("${imgBlur}")` }} data-name="Blur" />;
}

function BlurMaskGroup() {
  return (
    <div className="absolute bottom-0 h-[300px] left-0 right-0" data-name="Blur:mask-group">
      <Blur />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[1200px] items-center justify-center max-w-[1360px] px-[280px] relative shrink-0 w-[680px]" data-name="Container">
      <Text />
      <BlurMaskGroup />
    </div>
  );
}

function ZW3PqL25FoAtqmJbw9KUieAwWebp() {
  return (
    <div className="h-[100.007px] overflow-clip relative rounded-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(31.2645deg, rgb(77, 39, 168) 6.7328%, rgb(161, 102, 255) 95.814%)" }} data-name="zW3PqL25FoAtqmJBW9kUIEAw.webp">
      <div className="absolute flex inset-[18.18%_10.11%_12.1%_8.15%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(0.314837cqw,73.7684cqh)] rotate-[-0.24deg] w-[hypot(69.9796cqw,-0.291694cqh)]">
          <div className="relative size-full" data-name="Amazon-API-Gateway_Icon_16_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.1039 69.4441">
              <path clipRule="evenodd" d={svgPaths.p41ec000} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-API-Gateway_Icon_16_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer15Rt1Pk() {
  return (
    <div className="aspect-[79.9987564086914/99.99951171875] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="div.framer-15rt1pk">
      <ZW3PqL25FoAtqmJbw9KUieAwWebp />
    </div>
  );
}

function ZW3PqL25FoAtqmJbw9KUieAwWebp1() {
  return (
    <div className="h-[99.997px] overflow-clip relative rounded-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(32.5664deg, rgb(161, 102, 255) 5.0777%, rgb(77, 39, 168) 99.559%)" }} data-name="zW3PqL25FoAtqmJBW9kUIEAw.webp">
      <div className="absolute flex inset-[17.09%_9.63%_13.18%_9%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-0.314837cqw,-73.7684cqh)] rotate-[179.76deg] w-[hypot(-69.9796cqw,0.291694cqh)]">
          <div className="relative size-full" data-name="Amazon-API-Gateway_Icon_16_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.1039 69.4441">
              <path clipRule="evenodd" d={svgPaths.p3a8ad000} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-API-Gateway_Icon_16_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer11Gqvbk() {
  return (
    <div className="aspect-[80.38262939453125/100.00285339355469] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="div.framer-11gqvbk">
      <ZW3PqL25FoAtqmJbw9KUieAwWebp1 />
    </div>
  );
}

function Arm() {
  return (
    <div className="absolute flex inset-[5.91%_17.64%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-87.2499cqw,-93.5952cqh)] rotate-[145.62deg] w-[hypot(-12.7501cqw,6.40477cqh)]">
        <div className="content-stretch flex flex-col gap-[599.953px] items-end overflow-clip pb-[0.045px] relative size-full" data-name="Arm 1">
          <DivFramer15Rt1Pk />
          <DivFramer11Gqvbk />
        </div>
      </div>
    </div>
  );
}

function TQdwhtn9LGybkJqfYbMHnNvi14Webp() {
  return (
    <div className="bg-[#dd344c] h-[99.994px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="tQdwhtn9LGybkJqfYbMHnNvi14.webp">
      <div className="absolute inset-[19.65%_9.05%_19.98%_9.7%]" data-name="Amazon-Cognito_Icon_64_Squid">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.0005 60.3576">
          <path clipRule="evenodd" d={svgPaths.p38360780} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Cognito_Icon_64_Squid" />
        </svg>
      </div>
    </div>
  );
}

function DivFramerXvt7Dd() {
  return (
    <div className="aspect-[79.9998550415039/99.99397277832031] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="div.framer-xvt7dd">
      <TQdwhtn9LGybkJqfYbMHnNvi14Webp />
    </div>
  );
}

function TQdwhtn9LGybkJqfYbMHnNvi14Webp1() {
  return (
    <div className="bg-[#dd344c] h-[100px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="tQdwhtn9LGybkJqfYbMHnNvi14.webp">
      <div className="absolute flex inset-[19.05%_9.55%_20.59%_9.65%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[72.7013cqh] rotate-180 w-[76.3774cqw]">
          <div className="relative size-full" data-name="Amazon-Cognito_Icon_64_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.0005 60.3576">
              <path clipRule="evenodd" d={svgPaths.p38360780} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Cognito_Icon_64_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer1D0B88U() {
  return (
    <div className="aspect-[80.44611358642578/100.00189971923828] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="div.framer-1d0b88u">
      <TQdwhtn9LGybkJqfYbMHnNvi14Webp1 />
    </div>
  );
}

function Arm1() {
  return (
    <div className="absolute flex inset-[3.02%_23.21%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(83.2963cqw,-95.2502cqh)] rotate-[-153.5deg] w-[hypot(-16.7037cqw,-4.74983cqh)]">
        <div className="content-stretch flex flex-col gap-[599.938px] items-end overflow-clip pb-[0.066px] relative size-full" data-name="Arm 2">
          <DivFramerXvt7Dd />
          <DivFramer1D0B88U />
        </div>
      </div>
    </div>
  );
}

function Component8YwE3Uksz0Wly1NdcQRzZGfitUWebp() {
  return (
    <div className="bg-[#ed7100] h-[100px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="8ywE3Uksz0Wly1NdcQRzZGfitU.webp">
      <div className="absolute inset-[15.21%_10.48%_19.38%_8.01%]" data-name="Amazon-EC2_Icon_64_Squid">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.2121 65.4124">
          <path clipRule="evenodd" d={svgPaths.p37570c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-EC2_Icon_64_Squid" />
        </svg>
      </div>
    </div>
  );
}

function DivFramer1Ysgw() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%+0.58px)] overflow-clip rounded-[12px] top-[-0.07px] w-[80.003px]" data-name="div.framer-1ysgw47">
      <Component8YwE3Uksz0Wly1NdcQRzZGfitUWebp />
    </div>
  );
}

function Component8YwE3Uksz0Wly1NdcQRzZGfitUWebp1() {
  return (
    <div className="bg-[#ed7100] h-[100.001px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="8ywE3Uksz0Wly1NdcQRzZGfitU.webp">
      <div className="absolute inset-[15.16%_10.46%_19.43%_8.02%]" data-name="Amazon-EC2_Icon_64_Squid">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.2121 65.4124">
          <path clipRule="evenodd" d={svgPaths.p37570c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-EC2_Icon_64_Squid" />
        </svg>
      </div>
    </div>
  );
}

function DivFramer1Q46X0M() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%-0.88px)] overflow-clip rounded-[12px] top-[699.88px] w-[79.993px]" data-name="div.framer-1q46x0m">
      <Component8YwE3Uksz0Wly1NdcQRzZGfitUWebp1 />
    </div>
  );
}

function Arm2() {
  return (
    <div className="absolute flex inset-[24.2%_2.62%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-95.5105cqw,82.4578cqh)] rotate-[64.82deg] w-[hypot(4.4895cqw,17.5422cqh)]">
        <div className="overflow-clip relative size-full" data-name="Arm 3">
          <DivFramer1Ysgw />
          <DivFramer1Q46X0M />
        </div>
      </div>
    </div>
  );
}

function Component2PZihxu6KJkHzZ9U6V8XpBphV4WWebp() {
  return (
    <div className="bg-[#c4c4c4] h-[99.997px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="2pZihxu6KJkHzZ9u6V8XpBphV4w.webp">
      <div className="absolute flex items-center justify-center left-[-8.92px] size-[97.861px] top-[1.54px]">
        <div className="flex-none rotate-[-0.11deg]">
          <div className="content-stretch flex flex-col items-start relative size-[97.676px]" data-name="Amazon Kinesis">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[27px] items-center min-h-px relative w-full" data-name="Template">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="AWS - Analytics [PS_THUMBNAIL]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.6762 97.6762">
                  <g id="Icon-Architecture/64/Arch_Amazon-Kinesis_64">
                    <g id="Icon-Architecture-BG/64/Analytics">
                      <path d={svgPaths.p15f1f600} fill="var(--fill-0, #8C4FFF)" id="Rectangle" />
                    </g>
                    <path clipRule="evenodd" d={svgPaths.p3a65c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Kinesis_Icon_64_Squid" />
                  </g>
                </svg>
              </div>
              <p className="[word-break:break-word] absolute bottom-[-5px] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[-28px] not-italic right-[-28px] text-[16px] text-black text-center translate-y-full">Amazon Kinesis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer91Qhvx() {
  return (
    <div className="aspect-[79.99820709228516/99.9963150024414] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="div.framer-91qhvx">
      <Component2PZihxu6KJkHzZ9U6V8XpBphV4WWebp />
    </div>
  );
}

function Component2PZihxu6KJkHzZ9U6V8XpBphV4WWebp2() {
  return (
    <div className="bg-[#c4c4c4] h-[102.895px] overflow-clip relative rounded-[12.348px] shrink-0 w-full" data-name="2pZihxu6KJkHzZ9u6V8XpBphV4w.webp">
      <div className="absolute flex items-center justify-center left-[-9.18px] size-[100.698px] top-[1.59px]">
        <div className="flex-none rotate-[-0.11deg]">
          <div className="content-stretch flex flex-col items-start relative size-[100.507px]" data-name="Amazon Kinesis">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[27.783px] items-center min-h-px relative w-full" data-name="Template">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="AWS - Analytics [PS_THUMBNAIL]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.507 100.507">
                  <g id="Icon-Architecture/64/Arch_Amazon-Kinesis_64">
                    <g id="Icon-Architecture-BG/64/Analytics">
                      <path d={svgPaths.p3a62140} fill="var(--fill-0, #8C4FFF)" id="Rectangle" />
                    </g>
                    <path clipRule="evenodd" d={svgPaths.p2cfb9700} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Kinesis_Icon_64_Squid" />
                  </g>
                </svg>
              </div>
              <p className="[word-break:break-word] absolute bottom-[-5.14px] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[-28.81px] not-italic right-[-28.81px] text-[16.46px] text-black text-center translate-y-full">Amazon Kinesis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer91Qhvx1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[-0.44px] overflow-clip rounded-[12.348px] top-[-1.49px] w-[82.317px]" data-name="div.framer-91qhvx">
      <Component2PZihxu6KJkHzZ9U6V8XpBphV4WWebp2 />
    </div>
  );
}

function Component2PZihxu6KJkHzZ9U6V8XpBphV4WWebp1() {
  return (
    <div className="bg-[#c4c4c4] h-[100px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="2pZihxu6KJkHzZ9u6V8XpBphV4w.webp">
      <DivFramer91Qhvx1 />
    </div>
  );
}

function DivFramer1Unag4O() {
  return (
    <div className="content-stretch flex flex-col h-[100px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0 w-[80.432px]" data-name="div.framer-1unag4o">
      <Component2PZihxu6KJkHzZ9U6V8XpBphV4WWebp1 />
    </div>
  );
}

function Arm3() {
  return (
    <div className="absolute flex inset-[16.92%_6.37%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-93.3512cqw,-87.6884cqh)] rotate-[125.46deg] w-[hypot(-6.64884cqw,12.3116cqh)]">
        <div className="content-stretch flex flex-col items-end justify-between overflow-clip pb-[0.058px] relative size-full" data-name="Arm 4">
          <DivFramer91Qhvx />
          <DivFramer1Unag4O />
        </div>
      </div>
    </div>
  );
}

function IG6FeSy229YyY8JGnMxlgKfwQ5SWebp() {
  return (
    <div className="bg-[#dd344c] h-[99.999px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="iG6feSy229yyY8jGNMxlgKfwQ5s.webp">
      <div className="absolute inset-[12.3%_8.08%_5.2%_5.66%]" data-name="Alexa-For-Business_Icon_64_Squid">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 82.5">
          <path clipRule="evenodd" d={svgPaths.p3aaf4880} fill="var(--fill-0, white)" fillRule="evenodd" id="Alexa-For-Business_Icon_64_Squid" />
        </svg>
      </div>
    </div>
  );
}

function DivFramer1B9D2Vb() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#dd344c] content-stretch flex flex-col items-start justify-center left-[calc(50%+0.59px)] overflow-clip rounded-[12px] top-[-0.05px] w-[79.992px]" data-name="div.framer-1b9d2vb">
      <IG6FeSy229YyY8JGnMxlgKfwQ5SWebp />
    </div>
  );
}

function IG6FeSy229YyY8JGnMxlgKfwQ5SWebp1() {
  return (
    <div className="bg-[#dd344c] h-[99.996px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="iG6feSy229yyY8jGNMxlgKfwQ5s.webp">
      <div className="absolute flex inset-[11.46%_7.35%_6.03%_6.79%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[77.2713cqh] rotate-180 w-[64.2595cqw]">
          <div className="relative size-full" data-name="Alexa-For-Business_Icon_64_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 82.5">
              <path clipRule="evenodd" d={svgPaths.p3aaf4880} fill="var(--fill-0, white)" fillRule="evenodd" id="Alexa-For-Business_Icon_64_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramerI3Vpug() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%-1.13px)] overflow-clip rounded-[12px] top-[699.88px] w-[80.373px]" data-name="div.framer-i3vpug">
      <IG6FeSy229YyY8JGnMxlgKfwQ5SWebp1 />
    </div>
  );
}

function Arm4() {
  return (
    <div className="absolute flex inset-[12.14%_10.11%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(91.4232cqw,-90.3674cqh)] rotate-[-133.17deg] w-[hypot(-8.57681cqw,-9.63258cqh)]">
        <div className="overflow-clip relative size-full" data-name="Arm 5">
          <DivFramer1B9D2Vb />
          <DivFramerI3Vpug />
        </div>
      </div>
    </div>
  );
}

function Ikyf3UBmUnvZ8WuaIbiGqYqj8AWebp() {
  return (
    <div className="h-[100px] relative shrink-0 w-[80.008px]" data-name="ikyf3uBmUnvZ8wuaIBIGqYQJ8A.webp">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.0079 100">
        <g id="ikyf3uBmUnvZ8wuaIBIGqYQJ8A.webp">
          <path d={svgPaths.p3e72f280} fill="var(--fill-0, #01A88D)" />
          <path clipRule="evenodd" d={svgPaths.p2f403100} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-7" />
        </g>
      </svg>
    </div>
  );
}

function DivFramerBgc7C() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 overflow-clip pl-[0.58px] rounded-[12px] top-0 w-[79.993px]" data-name="div.framer-bgc7c1">
      <Ikyf3UBmUnvZ8WuaIbiGqYqj8AWebp />
    </div>
  );
}

function Ikyf3UBmUnvZ8WuaIbiGqYqj8AWebp1() {
  return (
    <div className="bg-[#01a88d] h-[100.004px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="ikyf3uBmUnvZ8wuaIBIGqYQJ8A.webp">
      <div className="absolute flex inset-[14.61%_5.92%_14.36%_5.27%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-0.324977cqw,-81.6643cqh)] rotate-[179.77deg] w-[hypot(-81.6667cqw,0.324979cqh)]">
          <div className="relative size-full" data-name="Fill-7">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.7563 70.755">
              <path clipRule="evenodd" d={svgPaths.p6c6c470} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer4Th1Pw() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%-1.26px)] overflow-clip rounded-[12px] top-[699.83px] w-[79.992px]" data-name="div.framer-4th1pw">
      <Ikyf3UBmUnvZ8WuaIbiGqYqj8AWebp1 />
    </div>
  );
}

function Arm5() {
  return (
    <div className="absolute flex inset-[256.47px_0.44%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-97.3535cqw,-73.107cqh)] rotate-[105.21deg] w-[hypot(-2.6465cqw,26.893cqh)]">
        <div className="overflow-clip relative size-full" data-name="Arm 6">
          <DivFramerBgc7C />
          <DivFramer4Th1Pw />
        </div>
      </div>
    </div>
  );
}

function Component2VGu3ScbKle1SdebJLbX1K4YgoWebp() {
  return (
    <div className="h-[100.003px] relative shrink-0 w-[79.996px]" data-name="2vGu3scbKle1SdebJLbX1k4Ygo.webp">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.9956 100.003">
        <g id="2vGu3scbKle1SdebJLbX1k4Ygo.webp">
          <path d={svgPaths.p3e07a700} fill="var(--fill-0, #7AA116)" />
          <path clipRule="evenodd" d={svgPaths.p6edb580} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Simple-Storage-Service-Icon_64_Squid" />
        </g>
      </svg>
    </div>
  );
}

function DivFramer44L1At() {
  return (
    <div className="aspect-[79.9921875/100.00569152832031] content-stretch flex flex-col items-start justify-center overflow-clip pl-[0.587px] relative rounded-[12px] shrink-0" data-name="div.framer-44l1at">
      <Component2VGu3ScbKle1SdebJLbX1K4YgoWebp />
    </div>
  );
}

function Component2VGu3ScbKle1SdebJLbX1K4YgoWebp1() {
  return (
    <div className="bg-[#7aa116] h-[99.998px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="2vGu3scbKle1SdebJLbX1k4Ygo.webp">
      <div className="absolute flex inset-[20%_8.82%_11.94%_9.87%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(-0.366cqw,-95.482cqh)] rotate-[179.77deg] w-[hypot(88.7379cqw,-0.363574cqh)]">
          <div className="relative size-full" data-name="Amazon-Simple-Storage-Service-Icon_64_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.1494 67.8049">
              <path clipRule="evenodd" d={svgPaths.p3462fbf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-Simple-Storage-Service-Icon_64_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer13Kamcs() {
  return (
    <div className="aspect-[80.44398498535156/99.99149322509766] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="div.framer-13kamcs">
      <Component2VGu3ScbKle1SdebJLbX1K4YgoWebp1 />
    </div>
  );
}

function Arm6() {
  return (
    <div className="absolute flex inset-[325.57px_-0.24%_325.56px_-0.25%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-99.1396cqw,46.4626cqh)] rotate-[85.04deg] w-[hypot(0.860385cqw,53.5374cqh)]">
        <div className="content-stretch flex flex-col items-end justify-between overflow-clip pb-[0.061px] relative size-full" data-name="Arm 7">
          <DivFramer44L1At />
          <DivFramer13Kamcs />
        </div>
      </div>
    </div>
  );
}

function GRufuRrPsKhXiw8Rc4UuwKbiIoUWebp() {
  return (
    <div className="h-[99.997px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="gRUFURrPSKhXiw8rc4UUWKbiIoU.webp">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <Image alt="" className="absolute inset-0 size-full object-cover" src={imgAbstractGreenWaves} fill sizes="100vw" />
        </div>
        <div className="absolute bg-[#c925d1] inset-0 rounded-[12px]" />
      </div>
      <div className="absolute flex inset-[18.81%_6.6%_9.59%_13.93%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(1.04026cqw,83.9441cqh)] rotate-[-0.66deg] w-[hypot(79.8201cqw,-0.857875cqh)]">
          <div className="relative size-full" data-name="Amazon-DynamoDB_Icon_64_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.761 70.8741">
              <path clipRule="evenodd" d={svgPaths.p2e07e8c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-DynamoDB_Icon_64_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer1Fsey() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%+0.58px)] overflow-clip rounded-[12px] top-[-0.06px] w-[79.998px]" data-name="div.framer-1fsey01">
      <GRufuRrPsKhXiw8Rc4UuwKbiIoUWebp />
    </div>
  );
}

function GRufuRrPsKhXiw8Rc4UuwKbiIoUWebp1() {
  return (
    <div className="h-[100.006px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="gRUFURrPSKhXiw8rc4UUWKbiIoU.webp">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <Image alt="" className="absolute inset-0 size-full object-cover" src={imgAbstractGreenWaves} fill sizes="100vw" />
        </div>
        <div className="absolute bg-[#c925d1] inset-0 rounded-[12px]" />
      </div>
      <div className="absolute flex inset-[16.97%_15.12%_11.45%_5.85%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-1.04026cqw,-83.9441cqh)] rotate-[179.34deg] w-[hypot(-79.8201cqw,0.857875cqh)]">
          <div className="relative size-full" data-name="Amazon-DynamoDB_Icon_64_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.761 70.8741">
              <path clipRule="evenodd" d={svgPaths.p2e07e8c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Amazon-DynamoDB_Icon_64_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer1Qvnb6P() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%-1.1px)] overflow-clip rounded-[12px] top-[699.88px] w-[80.436px]" data-name="div.framer-1qvnb6p">
      <GRufuRrPsKhXiw8Rc4UuwKbiIoUWebp1 />
    </div>
  );
}

function Arm7() {
  return (
    <div className="absolute flex inset-[2.17px_33.08%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-71.3188cqw,-97.5737cqh)] rotate-[166.04deg] w-[hypot(-28.6812cqw,2.42627cqh)]">
        <div className="overflow-clip relative size-full" data-name="Arm 8">
          <DivFramer1Fsey />
          <DivFramer1Qvnb6P />
        </div>
      </div>
    </div>
  );
}

function W14MEvxhiFsxPXqsaySvrmOl63WWebp() {
  return (
    <div className="h-[99.998px] overflow-clip relative rounded-[12px] shrink-0 w-[79.997px]" data-name="W14MEvxhiFsxPXqsaySVRMOl63w.webp">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <Image alt="" className="absolute inset-0 size-full object-cover" src={imgYewTreeBranches} fill sizes="100vw" />
        </div>
        <div className="absolute bg-[#e7157b] inset-0 rounded-[12px]" />
      </div>
      <div className="absolute flex inset-[16.71%_6.8%_19.66%_5.78%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-1.09742cqw,88.5686cqh)] rotate-[0.77deg] w-[hypot(90.5024cqw,1.30412cqh)]">
          <div className="relative size-full" data-name="AWS-CloudFormation_Icon_64_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.1032 62.7097">
              <path clipRule="evenodd" d={svgPaths.p3f726a00} fill="var(--fill-0, white)" fillRule="evenodd" id="AWS-CloudFormation_Icon_64_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer4Atntp() {
  return (
    <div className="aspect-[80.00743865966797/100.00040435791016] content-stretch flex flex-col items-start justify-center overflow-clip pl-[0.592px] relative rounded-[12px] shrink-0" data-name="div.framer-4atntp">
      <W14MEvxhiFsxPXqsaySvrmOl63WWebp />
    </div>
  );
}

function W14MEvxhiFsxPXqsaySvrmOl63WWebp1() {
  return (
    <div className="h-[100.004px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="W14MEvxhiFsxPXqsaySVRMOl63w.webp">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <Image alt="" className="absolute inset-0 size-full object-cover" src={imgYewTreeBranches} fill sizes="100vw" />
        </div>
        <div className="absolute bg-[#e7157b] inset-0 rounded-[12px]" />
      </div>
      <div className="absolute flex inset-[17.57%_5.69%_18.8%_7.44%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(1.09742cqw,-88.5686cqh)] rotate-[-179.23deg] w-[hypot(-90.5024cqw,-1.30412cqh)]">
          <div className="relative size-full" data-name="AWS-CloudFormation_Icon_64_Squid">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.1032 62.7097">
              <path clipRule="evenodd" d={svgPaths.p3f726a00} fill="var(--fill-0, white)" fillRule="evenodd" id="AWS-CloudFormation_Icon_64_Squid" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFramer1Ax47Xd() {
  return (
    <div className="aspect-[80.50172424316406/100.00502014160156] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="div.framer-1ax47xd">
      <W14MEvxhiFsxPXqsaySvrmOl63WWebp1 />
    </div>
  );
}

function Arm8() {
  return (
    <div className="absolute flex inset-[-1.97px_39.49%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(52.7076cqw,-98.8976cqh)] rotate-[-173.64deg] w-[hypot(-47.2924cqw,-1.10243cqh)]">
        <div className="content-stretch flex flex-col items-end justify-between overflow-clip pb-[0.056px] relative size-full" data-name="Arm 9">
          <DivFramer4Atntp />
          <DivFramer1Ax47Xd />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.6%_0.55%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.996 108.235">
        <g id="Group">
          <path d={svgPaths.p24147080} fill="var(--fill-0, #252F3E)" id="Vector" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p38d96900} fill="var(--fill-0, #FF9900)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p3a939d00} fill="var(--fill-0, #FF9900)" fillRule="evenodd" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AmazonWebServicesLogo() {
  return (
    <div className="w-[120px] md:w-[150px] xl:w-[183px] aspect-[183/109.559] relative z-10" data-name="Amazon_Web_Services_Logo 2">
      <Group />
    </div>
  );
}

function Circle() {
  return (
    <div className="relative size-[800px] overflow-visible" data-name="Circle">
      <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
        <Arm />
        <Arm1 />
        <Arm2 />
        <Arm3 />
        <Arm4 />
        <Arm5 />
        <Arm6 />
        <Arm7 />
        <Arm8 />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[600px] py-16 px-6 overflow-hidden bg-white relative">
      <div className="relative flex flex-col md:block items-center justify-center w-full max-w-[800px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
        {/* Scaled Orbit */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-full md:absolute md:top-0 md:left-0 pointer-events-none mb-6 md:mb-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.35] sm:scale-[0.5] md:scale-[0.7] lg:scale-[0.8] xl:scale-[0.9] pointer-events-none">
            <Circle />
          </div>
          
          {/* Logo - Centered in Orbit on Mobile ONLY */}
          <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <AmazonWebServicesLogo />
          </div>
        </div>

        {/* Native Text & Desktop Logo */}
        <div className="relative md:absolute md:inset-0 flex flex-col items-center justify-center pointer-events-none w-full">
          <div className="pointer-events-auto flex flex-col items-center justify-center gap-4 xl:gap-6 md:mt-8">
            <div className="hidden md:block">
              <AmazonWebServicesLogo />
            </div>
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}