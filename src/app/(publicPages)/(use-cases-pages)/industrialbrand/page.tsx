import FeatureCard from "@/app/components/FeatureCard";
import LightboxImage from "../../../components/lightboximage";
import OverViewSection from "../../../components/overviewsection";
import {
  ChartLineIcon,
  MegaPhoneIcon,
  MonitorIcon,
  TargetIcon,
  UsersIcon,
} from "../../../../../public/icons";

const INDUSTRIAL_IMAGES = ["/industrial-hero.jpg"];

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
      "Websites, four ecommerce platforms, and email programs reaching 50,000+ subscribers supported digital growth.",
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
      <div className="bg-[url('/ibBanner.png')] bg-cover w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/30"></div>
        <div className=" py-8 md:py-16 px-12 mx-auto grid md:grid-cols-2 relative">
          <div className="flex flex-col gap-4 md:gap-8 max-w-140">
            <div className="flex items-center w-fit justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>
            <h1 className="text-3xl md:text-5xl uppercase font-bold text-white">
              INDUSTRIAL BRAND ECOSYSTEM
            </h1>
            <h3 className="text-xl md:text-2xl  font-bold text-white">
              Unifying Industrial Brands Across B2B, B2C & D2C Markets
            </h3>

            <p className="text-base md:text-xl font-medium text-white max-w-140">
              A unified ecosystem of industrial brands built around a shared
              strategy, distinct market positioning, and a cohesive customer
              experience that drives engagement, strengthens sales enablement,
              and supports long-term business growth.
            </p>

            <div>
              <p className="text-base md:text-xl font-semibold text-white max-w-140">
                BRANDS INCLUDED
              </p>
              <ul className="text-base md:text-lg list-disc font-medium text-white ps-5">
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
      <div className="grid grid-cols-5 divide-x divide-white/40">
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
                  Industrial Brand Ecosystem
                </p>
              </div>

              <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
            </div>

            <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
              Brand Strategy • Creative Direction • Multi-Brand Marketing
            </h1>

            <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
              Brand development, product marketing, ecommerce, digital
              marketing, and acquisition integration across a portfolio of
              manufacturing and distribution companies.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <LightboxImage
              src="/industrial-hero3.jpg"
              alt="Industrial brand ecosystem featuring websites, ecommerce platforms, catalogs, packaging, trade show materials, and product marketing"
              width={2048}
              height={1179}
              gallery={INDUSTRIAL_IMAGES}
              index={0}
              className="block h-auto w-full object-contain"
            />
          </div>
        </section>

        <OverViewSection />
      </main>
    </>
  );
}
