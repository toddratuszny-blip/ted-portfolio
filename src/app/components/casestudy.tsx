import CaseStudyWork from "./casestudywork";

export default function CaseStudy() {
  return (
    <div className="w-full bg-[#FAFAFA] px-4 py-10 md:py-24">
      <div className="max-w-7xl mx-auto flex items-center justify-center py-4 md:py-8">
        <div className="relative h-auto w-fit px-4 text-center">
          <h1 className="text-3xl md:text-[100px] font-black font-sora text-[#171717] tracking-tight leading-none">
            Selected Case Studies
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mx-auto">
          <h3 className="text-lg md:text-2xl">
            Strategic branding, integrated marketing, ecommerce, and digital experiences from concept through execution.
          </h3>
        </div>
      </div>

      <CaseStudyWork />
    </div>
  );
}