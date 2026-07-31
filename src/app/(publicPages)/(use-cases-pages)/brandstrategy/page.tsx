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
    icon: <TargetIcon width={60} height={60} />,
    title: "BRAND STRATEGY & GOVERNANCE",
    description:
      "Positioning, messaging, standards, and implementation processes unified the brand across four business divisions.",
  },
  {
    icon: <MonitorIcon width={60} height={60} />,
    title: "DIGITAL EXPERIENCE & CONTENT",
    description:
      "Website strategy and 50+ SEO pages expanded service, content, and geographic search coverage.",
  },
  {
    icon: <BookOpenIcon width={60} height={60} />,
    title: "SALES ENABLEMENT & CAMPAIGNS",
    description:
      "Pitchbooks, proposals, referral programs, brochures, educational content, and campaigns supported teams and customers.",
  },
  {
    icon: <SliderIcon width={60} height={60} />,
    title: "MARKETING OPERATIONS",
    description:
      "Directed three agencies and 40+ vendors while auditing thousands of CRM, call-tracking, and advertising records.",
  },
  {
    icon: <ChartLineIcon width={60} height={60} />,
    title: "RESULTS & IMPACT",
    description:
      "Built a unified marketing ecosystem for a $30M organization spanning four divisions, three locations, and 10+ services.",
  },
];

export default function BrandStrategy() {
  return (
    <div>
      <div className="relative min-h-[620px] w-full overflow-hidden md:min-h-[calc(100dvh-220px)]">
        {/* Mobile hero */}
        <Image
          src="/brandstrategy/SPR Mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />

        {/* Desktop hero */}
        <Image
          src="/brandstrategy/bsBanner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 md:bg-black/30" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid px-4 pb-10 pt-16 md:grid-cols-2 md:px-12 md:py-16">
          <div className="flex w-[56%] max-w-[240px] flex-col gap-5 md:w-auto md:max-w-[560px] md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-[#567791] px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl font-bold uppercase leading-[1.05] text-white md:text-5xl md:leading-tight">
              Summit Point Roofing
            </h1>

            <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
              Building a Unified Marketing Ecosystem
            </h2>

            <p className="text-base font-medium leading-relaxed text-white md:max-w-[560px] md:text-xl">
              Marketing and creative lead for a $30M roofing organization
              spanning four divisions, three locations, and 10+ service lines.
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