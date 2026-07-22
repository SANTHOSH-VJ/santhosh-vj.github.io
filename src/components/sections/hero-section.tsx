import Section2 from "@/figma-imports/Section-2";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "680px" }}
    >
      <h1 className="sr-only">Santhosh V — Cloud & DevOps Engineer</h1>
      {/* Section-2 fills the full section exactly as designed */}
      <div className="absolute inset-0">
        <Section2 />
      </div>
    </section>
  );
}
