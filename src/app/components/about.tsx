import Image from "next/image";

interface AboutSectionProps {
  badgeText: string;
  heading: string;
  description: string;
}
const logos = [
  { src: "/creative.png", alt: "Creative" },
  { src: "/DGart.png", alt: "DGart" },
  { src: "/pathpoint.png", alt: "Pathpoint" },
  { src: "/VIOI.png", alt: "VIOI" },
  { src: "/zurmarke.png", alt: "Zurmarke" },
];
const ITEM_WIDTH = 150;
const ITEM_GAP = 64;
const TOTAL_WIDTH = logos.length * (ITEM_WIDTH + ITEM_GAP);
export default function About({
  badgeText,
  heading,
  description,
}: AboutSectionProps) {
  return (
    <div className="bg-[#242424] relative h-auto pt-30 pb-16 md:pb-0  px-4 lg:px-0">
      <Image
        alt=""
        width={400}
        height={400}
        className="h-120 w-fit absolute right-0 "
        src={"/aboutUsIllu.svg"}
      />
      <div className="max-w-7xl mx-auto h-auto flex flex-col lg:flex-row gap-16 mb-15 md:mb-[86.5px]">
        <div className="">
          <div className="bg-[#B31F3C66] w-[134px] h-[36px] flex items-center justify-center rounded-full border border-primary mx-auto lg:mx-0 mb-[64px]">
            <p className="text-white text-[20px]">{badgeText}</p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[76px]">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-center sm:items-start w-full lg:w-auto justify-center">
              <div className="w-full sm:w-[288px] h-[304px] relative overflow-hidden rounded-sm">
                <Image
                  src="/absOne.png"
                  alt="Team member portrait short"
                  fill
                  //   sizes="288px"
                  //   className="object-cover object-center"
                  priority
                />
              </div>

              <div className="w-full sm:w-[388px] h-[361px] relative overflow-hidden rounded-sm">
                <Image
                  src="/absTwo.png"
                  alt="Team member portrait tall"
                  fill
                  //   sizes="288px"
                  //   className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  text-center lg:text-left px-0 lg:px-0">
          <h2 className="text-[28px] md:text-4xl text-white leading-[120%] font-sora mb-4">
            {heading}
          </h2>

          <h3 className="text-[16px] md:text-2xl text-white leading-[144%] font-light">
            {description}
          </h3>
        </div>
      </div>

      <div className="relative md:absolute left-0 right-0 flex items-center justify-center my-[40px] md:my-0 md:mb-[70px] px-0 md:px-0">
        <div className="h-[1px] w-full bg-[#FFFFFF1A] hidden md:block"></div>

        <div className="relative md:absolute bg-[#1F1F1F] font-sora text-white border border-[#FFFFFF1A] px-4 md:px-8 py-2 md:py-0 md:h-[46px] flex items-center justify-center rounded-full shadow-lg z-10 w-full md:w-auto">
          <p className="text-[14px] md:text-[18px] font-light tracking-wide text-center">
            We've Globally{" "}
            <span className="text-primary font-semibold">20K+</span> Customers
            in World-wide.
          </p>
        </div>
      </div>

      <div className="py-12 md:py-16 w-full overflow-hidden">
        <div
          className="flex"
          style={{ animation: `marquee 10s linear infinite` }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              height={36}
              width={150}
              style={{ marginLeft: "32px", marginRight: "32px", flexShrink: 0 }}
            />
          ))}
        </div>

        <style>{`
    @keyframes marquee {
      from { transform: translateX(0px); }
      to   { transform: translateX(-${TOTAL_WIDTH}px); }
    }
  `}</style>
      </div>
    </div>
  );
}
