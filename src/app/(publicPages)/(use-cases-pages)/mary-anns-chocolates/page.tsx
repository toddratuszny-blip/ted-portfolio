import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard";
import MaryAnnOverViewSection from "../../../components/maryannoverviewsection";
import {
  BookOpenIcon,
  ChartLineIcon,
  PackageIcon,
  PalateIcon,
  StoreFrontIcon,
} from "../../../../../public/icons";

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
      <div className="relative w-full min-h-[620px] md:min-h-[calc(100dvh-220px)] overflow-hidden">
        {/* Mobile hero */}
        <Image
          src="/MA Mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />

        {/* Desktop hero */}
        <Image
          src="/chocBanner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/60" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid px-4 pb-10 pt-10 md:grid-cols-2 md:px-12 md:py-16">
          <div className="flex w-[62%] max-w-[270px] flex-col gap-4 md:w-auto md:max-w-[560px] md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-[#F5EBDD] px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-[#4A2A1F]">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl font-bold uppercase leading-[1.05] text-white md:text-5xl md:leading-tight">
              Mary Ann&apos;s Chocolates
            </h1>

            <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
              Building a Cohesive Consumer Brand
            </h2>

            <p className="text-base font-medium leading-relaxed text-white md:max-w-[560px] md:text-xl">
              Creative lead developing a unified premium brand across packaging,
              retail displays, catalogs, promotions, and customer-facing
              collateral.
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
            bgClassName="bg-[#381E15]"
            hoverClassName="hover:bg-[#4A2A1F]"
            resultsBgClassName="bg-[#F5EBDD]"
            resultsHoverClassName="hover:bg-[#E9DDCD]"
            resultsTextClassName="text-[#4A2A1F]"
          />
        ))}
      </div>

      <main className="mx-auto mb-32 max-w-7xl px-4 md:mt-8 md:px-0">
        <MaryAnnOverViewSection />
      </main>
    </>
  );
}