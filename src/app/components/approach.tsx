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
    desc: "Shape the strategy, messaging, and creative direction that connect business goals with customer needs.",
  },
  {
    step: "03",
    title: "Create",
    desc: "Build cohesive brand systems, campaigns, digital experiences, and marketing assets that work together across every touchpoint.",
  },
  {
    step: "04",
    title: "Refine",
    desc: "Use feedback, performance insights, and evolving business needs to strengthen the work and improve the experience over time.",
  },
];

export default function Approach() {
  return (
    <div className="relative w-full overflow-hidden bg-black px-4 py-10 md:py-24 xl:px-0">
      <Image
        src="/blackbg.jpg"
        alt="Creative strategy workspace"
        fill
        sizes="100vw"
        className="z-0 object-cover object-center"
        priority
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">
        <div className="w-full text-center lg:max-w-xl lg:text-left">
          <div className="inline-flex items-center justify-center rounded-full border border-primary bg-[#B31F3C66] px-4 py-1">
            <p className="text-sm uppercase tracking-[0.15em] text-white md:text-base">
              How I Work
            </p>
          </div>

          <h2 className="mt-5 font-sora text-3xl font-light leading-tight text-white md:text-[52px]">
            Strategy Informed.
            <br />
            Purposefully Built.
          </h2>

          <p className="mt-6 text-lg font-light leading-relaxed text-neutral-200 md:text-2xl">
            I start by understanding the business and defining a clear
            direction, then turn that thinking into work that connects the
            brand, message, and customer experience across touchpoints.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6">
          {processSteps.map((item) => (
            <ApproachCard
              key={item.step}
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