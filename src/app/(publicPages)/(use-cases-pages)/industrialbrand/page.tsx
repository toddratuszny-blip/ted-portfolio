import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard";
import OverViewSection from "../../../components/overviewsection";
import {
  ChartLineIcon,
  MegaPhoneIcon,
  MonitorIcon,
  TargetIcon,
  UsersIcon,
} from "../../../../../public/icons";

const features = [
  {
    icon: <TargetIcon width={60} height={60} />,
    title: "BRAND STRATEGY & INTEGRATION",
    description:
      "Built two flagship brands, created product brands, rebranded three organizations, and integrated three acquisitions.",
  },
  {
    icon: <MonitorIcon width={60} height={60} />,
    title: "DIGITAL & ECOMMERCE",
    description:
      "Websites, seven ecommerce platforms, and email programs reaching 50,000+ subscribers supported digital growth.",
  },
  {
    icon: <MegaPhoneIcon width={60} height={60} />,
    title: "PRODUCT MARKETING & SALES ENABLEMENT",
    description:
      "Product launches, packaging, campaigns, technical content, and a 276-page catalog supported sales and distribution.",
  },
  {
    icon: <UsersIcon width={60} height={60} />,
    title: "CREATIVE & MARKETING LEADERSHIP",
    description:
      "Directed five designers, four developers, agencies, freelancers, photographers, printers, and international vendors.",
  },
  {
    icon: <ChartLineIcon width={60} height={60} />,
    title: "RESULTS & IMPACT",
    description:
      "Led an eight-company ecosystem supporting approximately 10,000 SKUs and $3M+ in annual ecommerce revenue.",
  },
];

export default function IndustrialBrand() {
  return (
    <>
      <div className="relative min-h-[620px] w-full overflow-hidden md:min-h-[calc(100dvh-220px)]">
        {/* Mobile hero */}
        <Image
          src="/Industrial-Mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />

        {/* Desktop hero */}
        <Image
          src="/indBanner2.png"
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
          <div className="flex max-w-[420px] flex-col gap-5 md:max-w-[560px] md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-[#B12A2F] px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl font-bold uppercase text-white md:text-5xl">
              Industrial Brand Ecosystem
            </h1>

            <h2 className="text-xl font-bold text-white md:text-2xl">
              Unifying Industrial Brands
            </h2>

            <p className="max-w-[340px] text-base font-medium leading-relaxed text-white md:max-w-[560px] md:text-xl">
              Marketing and creative leader for an eight-company ecosystem
              supporting seven ecommerce platforms, approximately 10,000 SKUs,
              and $3M+ in annual ecommerce revenue.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 grid divide-y divide-white/40 md:mb-12 md:grid-cols-5 md:divide-x md:divide-y-0">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgClassName="bg-[#0F1314]"
            hoverClassName="hover:bg-[#1D2325]"
            resultsBgClassName="bg-[#B12A2F]"
            resultsHoverClassName="hover:bg-[#982127]"
          />
        ))}
      </div>

      <main className="mx-auto mb-32 max-w-7xl px-4 md:mt-8 md:px-0">
        <OverViewSection />
      </main>
    </>
  );
}