import Image from "next/image";
import ApproachCard from "./approachcard";
const processSteps = [
  {
    step: "Step 01",
    title: "Understand the Business",
    desc: "Clarify the challenge, audience, market position, and brand opportunity.",
  },
  {
    step: "Step 02",
    title: "Define the Strategy",
    desc: "Shape the messaging, positioning, creative direction, and marketing approach.",
  },
  {
    step: "Step 03",
    title: "Build the System",
    desc: "Shape the messaging, positioning, creative direction, and marketing approach.",
  },
  {
    step: "Step 04",
    title: "Support Growth",
    desc: "Develop assets and initiatives that help teams market, sell, and scale more effectively.",
  },
];
export default function Approach() {
  return (
    <>
      <div className="relative w-full  py-10 md:py-24 overflow-hidden bg-black px-4 xl:px-0">
        <Image
          src="/blackbg.jpg"
          alt="Case study presentation workspace feature showcase"
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
          priority
        />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-[48px]">
          <div className="relative z-10 h-full w-full lg:w-auto text-center lg:text-left">
            <div className="bg-[#B31F3C66] w-fit px-4 flex items-center justify-center rounded-full border border-primary mx-auto lg:mx-0">
              <p className="text-white text-[20px] font-light">Process</p>
            </div>
            <div>
              <div className="w-full  mt-4">
                <h2 className="text-white text-3xl md:text-[45px] font-sora font-light">
                  My Approach
                </h2>
              </div>
              <div className="w-full mt-2.5 md:mt-4">
                <h2 className="text-white text-lg md:text-2xl font-light">
                  I approach every project by first understanding the business
                  challenge, audience, market context, and brand goals.{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 w-full relative z-10">
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
    </>
  );
}
