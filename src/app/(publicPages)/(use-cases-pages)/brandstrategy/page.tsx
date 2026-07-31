import FeatureCard from "@/app/components/FeatureCard";
import {
  BookOpenIcon,
  ChartLineIcon,
  MonitorIcon,
  SliderIcon,
  TargetIcon,
} from "../../../../../public/icons";
import BrandStrategySection from "../../../components/brandstrategysection";
import LightboxImage from "../../../components/lightboximage";

const SUMMIT_IMAGES = ["/SPR.jpg"];

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
      <div className="bg-[url('/brandstrategy/bsBanner.jpg')] bg-cover bg-center w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/70 md:bg-black/30"></div>

        <div className="py-8 md:py-16 px-4 md:px-12 mx-auto grid md:grid-cols-2 relative">
          <div className="flex flex-col gap-3 md:gap-8 max-w-140">
            <div className="flex items-center w-fit justify-center rounded-full bg-[#567791] px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl md:text-5xl uppercase font-bold text-white">
              Summit Point Roofing
            </h1>

            <h3 className="text-xl md:text-2xl font-bold text-white">
              Building a Unified Marketing Ecosystem Across <br /> Four
              Divisions
            </h3>

            <p className="text-base md:text-xl font-medium text-white max-w-140">
              Primary marketing and creative lead for a $30M roofing
              organization, directing brand, digital, campaign, sales
              enablement, and marketing operations across four divisions, three
              Michigan locations, and 10+ service lines. The work created a more
              unified brand presence, expanded digital reach, and better
              equipped teams across the organization.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-5 divide-y mb-6 md:mb-12 md:divide-x divide-white/40">
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