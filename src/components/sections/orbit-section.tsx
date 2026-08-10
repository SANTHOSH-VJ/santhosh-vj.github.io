import AboutImport from "@/figma-imports/About/index";
import { FadeIn } from "@/components/ui/fade-in";

export function OrbitSection() {
  return (
    <div id="orbit" className="bg-white overflow-hidden w-full pt-16">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <FadeIn direction="up" delay={0.2} className="w-full overflow-hidden">
          <AboutImport />
        </FadeIn>
      </div>
    </div>
  );
}
