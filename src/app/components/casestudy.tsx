import CaseStudyWork from "./casestudywork";

export default function CaseStudy() {
  return (
    <div
      id="case-studies"
      className="w-full scroll-mt-24 bg-[#FAFAFA] px-4 py-10 md:py-24"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center py-4 md:py-8">
        <div className="relative h-auto w-fit px-4 text-center">
          <h1 className="font-sora text-3xl font-black leading-none tracking-tight text-[#171717] md:text-[100px]">
            Selected Case Studies
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto">
          <h3 className="text-lg md:text-2xl">
            Strategic branding, integrated marketing, ecommerce, and digital
            experiences from concept through execution.
          </h3>
        </div>
      </div>

      <CaseStudyWork />
    </div>
  );
}