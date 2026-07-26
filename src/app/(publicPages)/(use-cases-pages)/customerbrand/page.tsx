import FeatureCard from "@/app/components/FeatureCard";
import LightboxImage from "../../../components/lightboximage";
import MaryAnnOverViewSection from "../../../components/maryannoverviewsection";
import {
  BookOpenIcon,
  ChartLineIcon,
  PackageIcon,
  PalateIcon,
  StoreFrontIcon,
} from "../../../../../public/icons";

const CUSTOMER_BRAND_IMAGES = ["/Mary-Anns.jpg"];

const features = [
  {
    icon: <PalateIcon width={60} height={60} />,
    title: "BRAND STRATEGY & IDENTITY",
    description:
      "Positioning, visual identity, color, typography, and standards established a cohesive premium consumer brand.",
  },
  {
    icon: <PackageIcon width={60} height={60} />,
    title: "PRODUCT PACKAGING",
    description:
      "A coordinated packaging system strengthened shelf presence and communicated quality across the product line.",
  },
  {
    icon: <StoreFrontIcon width={60} height={60} />,
    title: "RETAIL MARKETING",
    description:
      "Merchandising, displays, point-of-sale materials, and promotions supported product visibility and customer engagement.",
  },
  {
    icon: <BookOpenIcon width={60} height={60} />,
    title: "CATALOGS & COLLATERAL",
    description:
      "Wholesale catalogs, stationery, gift cards, and customer-facing materials supported retailers and brand consistency.",
  },
  {
    icon: <ChartLineIcon width={60} height={60} />,
    title: "RESULTS & IMPACT",
    description:
      "Unified packaging, retail, catalogs, promotions, and collateral into one consistent consumer brand experience.",
  },
];

export default function CustomerBrand() {
  return (
    <>
      <div className="bg-[url('/brandstrategy/bsBanner.png')] bg-cover bg-center w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/70 md:bg-black/30"></div>
         <div className=" py-8 md:py-16 px-4 md:px-12 mx-auto grid md:grid-cols-2 relative">
          <div className="flex flex-col gap-4 md:gap-8 max-w-140">
            <div className="flex items-center w-fit justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>
            <h1 className="text-3xl md:text-5xl uppercase font-bold text-white">
              MARY ANN&apos;S CHOCOLATES
            </h1>
            <h3 className="text-xl md:text-2xl  font-bold text-white">
              Building a Cohesive Consumer Brand Across Packaging, Retail &
              Print
            </h3>

            <p className="text-base md:text-xl font-medium text-white max-w-140">
              Developed a comprehensive consumer brand system for Mary Ann’s
              Chocolates, creating a cohesive identity that extended across
              packaging, retail displays, catalogs, promotional campaigns, and
              branded collateral. Every touchpoint was designed to strengthen
              shelf presence, reinforce brand recognition, and deliver a premium
              customer experience.
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
                  Mary Ann&apos;s Chocolates
                </p>
              </div>

              <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
            </div>

            <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
              Consumer Branding • Packaging • Retail Marketing
            </h1>

            <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
              Consumer branding, packaging, retail merchandising, and sales
              materials for a premium chocolate brand.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <LightboxImage
              src="/Mary-Anns3.jpg"
              alt="Mary Ann's Chocolates case study featuring consumer branding, product packaging, retail displays, catalogs, collateral, and promotional marketing"
              width={2048}
              height={1179}
              gallery={CUSTOMER_BRAND_IMAGES}
              index={0}
              className="block h-auto w-full object-contain"
            />
          </div>
        </section>

        <MaryAnnOverViewSection />
      </main>
    </>
  );
}
