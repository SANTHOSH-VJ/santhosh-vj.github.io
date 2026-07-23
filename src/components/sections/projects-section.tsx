"use client";

import Image from "next/image";
import { images } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    img: images.projectAwsServerless,
    title: "Serverless Personal Cloud Storage Platform (AWS)",
    desc: "A secure, fully serverless file storage platform with authentication, signed uploads, and per-user buckets. Built end-to-end on AWS.",
    tags: ["AWS Cognito", "S3", "Lambda", "API Gateway", "Amplify", "Pre-Signed URLs"],
    features: [
      "JWT-based authentication via Cognito",
      "Direct-to-S3 uploads with pre-signed URLs",
      "Lambda functions behind API Gateway",
      "CI/CD with AWS Amplify"
    ],
    buttonText: "View AWS Serverless Storage Project",
    link: "https://github.com/SANTHOSH-VJ/aws-serverless-cloud-storage.git"
  },
  {
    img: images.projectKuttylinkDashboard,
    title: "URL Shortener SaaS",
    desc: "A production-grade link shortener with auth, expiration, analytics, and click tracking dashboards.",
    tags: ["Flask", "MySQL", "Cloud Deploy", "Analytics", "Auth"],
    features: [
      "Custom short codes with expiry",
      "Real-time click tracking",
      "User accounts and dashboards",
      "Cloud-deployed with monitoring"
    ],
    buttonText: "View URL Shortener SaaS Project",
    link: "https://github.com/SANTHOSH-VJ/url-saas.git"
  },
  {
    img: images.projectCicdPipeline,
    title: "CI/CD Pipeline with GitHub Actions, Docker, and AWS",
    desc: "Next project in the pipeline — exploring CI/CD pipelines for event-driven architectures on AWS.",
    tags: ["AWS", "GitHub Actions", "Docker"],
    features: [
      "Continuous integration and deployment",
      "Automated testing",
      "Containerization with Docker"
    ],
    buttonText: "View CI/CD Pipeline Project",
    link: "https://github.com/SANTHOSH-VJ/ziffity_Intern.git"
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="relative w-full z-10 pb-32 pt-20">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col gap-6 md:gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#ededed]"
          >
            <div className="flex flex-col lg:flex-row w-full min-h-[400px] lg:min-h-[500px] p-3 gap-3">
              
              {/* Left: Text Content */}
              <div className="flex flex-col justify-center p-6 lg:pl-12 lg:pr-8 lg:py-12 lg:w-[60%] xl:w-[65%]">
                <h3 
                  className="font-['DM_Sans',sans-serif] font-bold text-[#111] text-3xl lg:text-4xl tracking-[-0.6px] leading-tight mb-4"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {p.title}
                </h3>
                
                <p 
                  className="font-['DM_Sans',sans-serif] text-[#6c7179] text-sm lg:text-base tracking-[-0.24px] leading-relaxed mb-6 max-w-lg"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#f7f7f7] text-[#333] border border-[#e5e5e5] text-[10.5px] lg:text-xs px-3 py-1 rounded-full w-fit font-['DM_Sans',sans-serif]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mb-8 p-6 bg-[#f8fafc] rounded-2xl border border-[#f1f5f9]">
                  <h4 className="font-['DM_Sans',sans-serif] text-[11px] tracking-[0.15em] text-[#0f766e] uppercase font-bold mb-4">
                    Features
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="font-['DM_Sans',sans-serif] text-[#555] text-sm flex items-start gap-3 leading-snug">
                        <svg className="w-4 h-4 mt-0.5 text-[#0f766e] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-[#2563eb] to-[#3b82f6] text-white font-['DM_Sans',sans-serif] font-medium text-xs lg:text-sm px-5 py-2.5 rounded-full w-fit flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {p.buttonText} <ArrowRight size={12} />
                </a>
              </div>

              {/* Right: Project Image */}
              <div className="lg:w-[40%] xl:w-[35%] relative bg-gray-50 flex items-center justify-center overflow-hidden rounded-[28px] min-h-[300px]">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill
                  className="object-cover" 
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
