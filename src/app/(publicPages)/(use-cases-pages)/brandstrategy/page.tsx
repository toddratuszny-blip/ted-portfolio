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
      <div className="bg-[url('/brandstrategy/bsBanner.png')] bg-cover bg-center w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/70 md:bg-black/30"></div>
        <div className=" py-8 md:py-16 px-4 md:px-12 mx-auto grid md:grid-cols-2 relative">
          <div className="flex flex-col gap-3 md:gap-8 max-w-140">
            <div className="flex items-center w-fit justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>
            <h1 className="text-3xl md:text-5xl uppercase font-bold text-white">
              Summit Point Roofing
            </h1>
            <h3 className="text-xl md:text-2xl  font-bold text-white">
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
          />
        ))}
      </div>
      <main className="mx-auto mb-32 max-w-7xl px-4 md:mt-8 md:px-0">
        <section className="mb-14">
          <div className="mb-10 flex flex-col gap-7">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center rounded-full bg-primary px-5 py-2.5">
                <p className="whitespace-nowrap text-base text-white">
                  Summit Point Roofing
                </p>
              </div>

              <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
            </div>

            <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
              Brand Strategy • Creative Direction • Integrated Marketing
            </h1>

            <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
              Brand strategy, digital experience, sales enablement, integrated
              campaigns, and marketing operations for a multi-division roofing
              organization.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <LightboxImage
              src="/SPR3.jpg"
              alt="Summit Point Roofing case study featuring website strategy, commercial sales materials, referral marketing, brand assets, and marketing operations"
              width={2048}
              height={1179}
              gallery={SUMMIT_IMAGES}
              index={0}
              className="block h-auto w-full object-contain"
            />
          </div>
        </section>

        <BrandStrategySection />
      </main>
    </div>
  );
}
