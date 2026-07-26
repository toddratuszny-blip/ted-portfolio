import Image from "next/image";
import ApproachCard from "./approachcard";

const processSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "Learn the business, audience, competitive landscape, and the challenge before proposing solutions.",
  },
  {
    step: "02",
    title: "Define",
    desc: "Develop the strategy, messaging, creative direction, and roadmap that align business goals with customer needs.",
  },
  {
    step: "03",
    title: "Create",
    desc: "Build cohesive brand systems, campaigns, digital experiences, and marketing assets that work together across every touchpoint.",
  },
  {
    step: "04",
    title: "Optimize",
    desc: "Measure results, refine execution, and continuously improve the experience as the business grows.",
  },
];

export default function Approach() {
  return (
    <div className="relative w-full py-10 md:py-24 overflow-hidden bg-black px-4 xl:px-0">
      <Image
        src="/blackbg.jpg"
        alt="Creative strategy workspace"
        fill
        sizes="100vw"
        className="object-cover object-center z-0"
        priority
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center justify-center rounded-full border border-primary bg-[#B31F3C66] px-4 py-1">
            <p className="text-white text-sm md:text-base uppercase tracking-[0.15em]">
              How I Work
            </p>
          </div>

          <h2 className="mt-5 text-white text-3xl md:text-[52px] font-sora font-light leading-tight">
            Strategy First.
            <br />
            Execution Always.
          </h2>

          <p className="mt-6 text-lg md:text-2xl font-light text-neutral-200 leading-relaxed">
            Every engagement begins with understanding the business, defining a
            clear direction, and building creative solutions that are both
            strategically sound and practical to implement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full">
          {processSteps.map((item, index) => (
            <ApproachCard
              key={index}
              stepNumber={item.step}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}