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
      <div className="bg-[url('/chocBanner.jpg')] bg-cover bg-center w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/30 md:bg-black/60"></div>
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
        <MaryAnnOverViewSection />
      </main>
    </>
  );
}
