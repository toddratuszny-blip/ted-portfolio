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
      <div className="relative h-full min-h-[calc(100dvh-220px)] w-full bg-[url('/indBanner2.png')] bg-cover bg-center">
        <div className="absolute h-full w-full bg-black/70 md:bg-black/30" />

        <div className="relative mx-auto grid px-4 py-8 md:grid-cols-2 md:px-12 md:py-16">
          <div className="flex max-w-140 flex-col gap-4 md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl font-bold uppercase text-white md:text-5xl">
              INDUSTRIAL BRAND ECOSYSTEM
            </h1>

            <h3 className="text-xl font-bold text-white md:text-2xl">
              Unifying Industrial Brands Across B2B, B2C & D2C Markets
            </h3>

            <p className="max-w-140 text-base font-medium text-white md:text-xl">
              A unified ecosystem of industrial brands built around a shared
              strategy, distinct market positioning, and a cohesive customer
              experience that drives engagement, strengthens sales enablement,
              and supports long-term business growth.
            </p>

            <div>
              <p className="max-w-140 text-base font-semibold text-white md:text-xl">
                BRANDS INCLUDED
              </p>

              <ul className="list-disc ps-5 text-base font-medium text-white md:text-lg">
                <li>Elite Abrasives</li>
                <li>Conical Cutting Tools</li>
                <li>Global Cutting Tools</li>
                <li>Lehigh Valley Abrasives</li>
                <li>Industrial Tool Crib</li>
              </ul>
            </div>
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
