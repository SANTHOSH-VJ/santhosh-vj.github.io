import { TechSkillTile } from "@/components/ui/tech-skill-tile";
import { images } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";

export function TechnologiesSection() {
  interface Skill {
    label: string;
    slug: string;
    localIcon?: string;
  }

  const programmingSkills: Skill[] = [
    { label: "Java", slug: "logos:java" },
    { label: "Python", slug: "logos:python" },
    { label: "SQL", slug: "logos:mysql" },
  ];

  const cloudSkills: Skill[] = [
    { label: "AWS", slug: "logos:aws" },
    { label: "Terraform", slug: "logos:terraform-icon" },
    { label: "Docker", slug: "logos:docker-icon" },
    { label: "Kubernetes", slug: "logos:kubernetes" },
    { label: "GitHub Action", slug: "logos:github-actions" },
    { label: "Linux", slug: "logos:linux-tux" },
  ];

  const toolsSkills: Skill[] = [
    { label: "VS Code", slug: "logos:visual-studio-code" },
    { label: "Git", slug: "logos:git-icon" },
    { label: "GitHub", slug: "logos:github-icon" },
    { label: "Postman", slug: "logos:postman-icon" },
    { label: "Supabase", slug: "logos:supabase-icon" },
  ];

  const aiSkills: Skill[] = [
    { label: "GitHub Copilot", slug: "logos:github-copilot" },
    { label: "Claude", slug: "claude", localIcon: images.iconClaude },
    { label: "Kiro", slug: "kiro", localIcon: images.iconKiro },
    { label: "Antigravity", slug: "antigravity", localIcon: images.iconAntigravity },
  ];

  const skillCategories = [
    { title: "Programming", desc: "Core languages for building robust software solutions.", skills: programmingSkills },
    { title: "Cloud & DevOps", desc: "Cloud infrastructure, automation, and deployment at scale.", skills: cloudSkills },
    { title: "Tools & Platform", desc: "Essential utilities and platforms for development.", skills: toolsSkills },
    { title: "AI Assisted Dev", desc: "Modern AI tools to accelerate product development.", skills: aiSkills },
  ];

  return (
    <section id="skills" className="bg-white py-16 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="bg-white border border-[#ededed] rounded-full px-5 py-2 inline-flex mb-4">
            <span className="font-sans font-medium text-[#111] text-sm">Technologies I work with</span>
          </div>
          <h2 className="font-sans font-semibold text-[#111] text-3xl md:text-4xl tracking-[-1.2px]">
            Technologies, tools with...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <FadeIn
              key={i}
              direction="up"
              delay={i * 0.1}
              className="bg-[#f7f7f7] rounded-[30px] overflow-hidden flex flex-col h-full"
            >
              {/* Skill grid */}
              <div className="p-8 flex flex-col gap-3 items-center justify-center flex-1">
                <div className="grid grid-cols-3 gap-3 place-items-center">
                  {cat.skills.map((s, j) => (
                    <TechSkillTile key={j} label={s.label} slug={s.slug} localIcon={s.localIcon} />
                  ))}
                </div>
              </div>
              {/* Label */}
              <div className="px-7 pb-7 mt-auto">
                <h3 className="font-sans font-medium text-[#111] text-lg tracking-[-0.36px]">
                  {cat.title}
                </h3>
                <p className="font-sans text-[#4b5563] text-xs tracking-[-0.24px] mt-1">
                  {cat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
