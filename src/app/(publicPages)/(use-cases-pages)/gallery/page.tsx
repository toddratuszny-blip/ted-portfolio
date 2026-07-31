import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard";
import GallerySection from "../../../components/gallerysection";
import {
  BookOpenIcon,
  ChartLineIcon,
  MegaPhoneIcon,
  MonitorIcon,
  PalateIcon,
} from "../../../../../public/icons";

const features = [
  {
    icon: <PalateIcon width={60} height={60} />,
    title: "BRAND IDENTITY & ICONOGRAPHY",
    description:
      "Logos, visual systems, illustration, and custom iconography developed for organizations across multiple industries.",
  },
  {
    icon: <BookOpenIcon width={60} height={60} />,
    title: "EDITORIAL & PRINT DESIGN",
    description:
      "Publications, catalogs, books, posters, brochures, and collateral designed across varied formats.",
  },
  {
    icon: <MegaPhoneIcon width={60} height={60} />,
    title: "CAMPAIGNS & ADVERTISING",
    description:
      "B2B, B2C, D2C, and nonprofit creative developed across print, promotional, and digital channels.",
  },
  {
    icon: <MonitorIcon width={60} height={60} />,
    title: "DIGITAL DESIGN",
    description:
      "Websites, ecommerce experiences, social content, and digital assets developed for diverse audiences.",
  },
  {
    icon: <ChartLineIcon width={60} height={60} />,
    title: "RESULTS & IMPACT",
    description:
      "Represents 15+ years across agency, in-house, B2B, B2C, D2C, ecommerce, manufacturing, publishing, and professional services.",
  },
];

export default function CreativeGallery() {
  return (
    <>
      <div className="relative min-h-[620px] w-full overflow-hidden md:min-h-[calc(100dvh-220px)]">
        {/* Mobile hero */}
        <Image
          src="/gallery/Creative Mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />

        {/* Desktop hero */}
        <Image
          src="/gallery/galleryBanner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 md:bg-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto grid px-4 pb-10 pt-16 md:grid-cols-2 md:px-12 md:py-16">
          <div className="flex w-[52%] max-w-[220px] flex-col gap-5 md:w-auto md:max-w-[560px] md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-[#B32045] px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl font-bold uppercase leading-[1.05] text-white md:text-5xl md:leading-tight">
              Creative Gallery
            </h1>

            <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
              Selected Creative Work
            </h2>

            <p className="text-base font-medium leading-relaxed text-white md:max-w-[560px] md:text-xl">
              Creative leadership spanning brand identity, campaigns, editorial,
              digital experiences, illustration, packaging, and print across
              more than 15 years.
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
            bgClassName="bg-[#5D5C5C]"
            hoverClassName="hover:bg-[#4D4D4D]"
            resultsBgClassName="bg-[#B32045]"
            resultsHoverClassName="hover:bg-[#951A39]"
          />
        ))}
      </div>

      <main className="mx-auto mb-32 max-w-7xl px-4 font-sora md:mt-8 md:px-0">
        <GallerySection />
      </main>
    </>
  );
}