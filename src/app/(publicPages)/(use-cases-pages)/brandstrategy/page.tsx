import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard";
import {
  BookOpenIcon,
  ChartLineIcon,
  MonitorIcon,
  SliderIcon,
  TargetIcon,
} from "../../../../../public/icons";
import BrandStrategySection from "../../../components/brandstrategysection";

const features = [
  {
    icon: <TargetIcon />,
    title: "CREATIVE DIRECTION & BRAND STRATEGY",
    description:
      "Creative direction, positioning, messaging, brand standards, and implementation systems unified the customer experience across four business divisions.",
  },
  {
    icon: <MonitorIcon />,
    title: "WEBSITE & CONTENT STRATEGY",
    description:
      "Website strategy and 50+ service, landing, location, and educational pages expanded geographic and service-line coverage.",
  },
  {
    icon: <BookOpenIcon />,
    title: "INTEGRATED CAMPAIGNS & SALES ENABLEMENT",
    description:
      "Pitchbooks, proposals, referral programs, brochures, educational content, direct mail, and customer communications supported a nine-person sales team.",
  },
  {
    icon: <SliderIcon />,
    title: "CREATIVE OPERATIONS",
    description:
      "Oversaw three external agencies and 40+ vendors while establishing creative standards, workflows, brand governance, and cross-functional execution.",
  },
  {
    icon: <ChartLineIcon />,
    title: "SCALE & IMPACT",
    description:
      "Supported significant company expansion across four divisions, three locations, 10+ service lines, a new Detroit location, and the launch of a new division.",
  },
];

export default function BrandStrategy() {
  return (
    <div>
      <div className="relative w-full min-h-[620px] overflow-hidden md:min-h-[calc(100dvh-220px)]">
        <Image
          src="/brandstrategy/SPR MobileB.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.06] md:hidden"
        />

        <Image
          src="/brandstrategy/bsBanner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />

        <div className="absolute inset-0 bg-black/65 md:bg-black/30" />

        <div className="relative z-10 mx-auto grid px-4 pb-10 pt-10 md:grid-cols-2 md:px-12 md:py-16">
          <div className="flex w-[62%] max-w-[270px] flex-col gap-4 md:w-auto md:max-w-[560px] md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-[#567791] px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl font-bold uppercase leading-[1.05] text-white md:text-5xl md:leading-tight">
              Summit Point Roofing
            </h1>

            <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
              Building a Unified Brand & Marketing Ecosystem
            </h2>

            <p className="text-base font-medium leading-relaxed text-white md:max-w-[560px] md:text-xl">
              Creative and brand marketing lead supporting significant company
              expansion across four divisions, three locations, and 10+ service
              lines.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 grid divide-y divide-white/40 md:mb-12 md:grid-cols-5 md:divide-x">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgClassName="bg-[#233444]"
            hoverClassName="hover:bg-[#1B2A38]"
            resultsBgClassName="bg-[#567791]"
            resultsHoverClassName="hover:bg-[#45667F]"
          />
        ))}
      </div>

      <main className="mx-auto mb-32 max-w-7xl px-4 md:mt-8 md:px-0">
        <BrandStrategySection />
      </main>
    </div>
  );
}