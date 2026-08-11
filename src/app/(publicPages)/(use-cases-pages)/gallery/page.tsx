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
    icon: <PalateIcon />,
    title: "BRAND IDENTITY & ICONOGRAPHY",
    description:
      "Logos, visual systems, illustration, and custom iconography developed for organizations across multiple industries.",
  },
  {
    icon: <BookOpenIcon />,
    title: "EDITORIAL & PRINT DESIGN",
    description:
      "Publications, catalogs, books, posters, brochures, and collateral designed across varied formats.",
  },
  {
    icon: <MegaPhoneIcon />,
    title: "CAMPAIGNS & ADVERTISING",
    description:
      "B2B, B2C, D2C, and nonprofit creative developed across print, promotional, and digital channels.",
  },
  {
    icon: <MonitorIcon />,
    title: "DIGITAL DESIGN",
    description:
      "Websites, ecommerce experiences, social content, and digital assets developed for diverse audiences.",
  },
  {
    icon: <ChartLineIcon />,
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
          className="object-cover object-[center_65%] md:hidden"
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

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid px-4 pb-10 pt-10 md:grid-cols-2 md:px-12 md:py-16">
          <div className="flex w-[60%] max-w-[260px] flex-col gap-4 md:w-auto md:max-w-[560px] md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-[#2F3334] px-5 py-2.5">
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
              Creative leadership spanning brand identity, campaigns,
              editorial, digital experiences, illustration, packaging, and
              print across more than 15 years.
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
            bgClassName="bg-[#4F6358]"
            hoverClassName="hover:bg-[#5D7166]"
            resultsBgClassName="bg-[#2F3334]"
            resultsHoverClassName="hover:bg-[#3A3F40]"
          />
        ))}
      </div>

      <main
        className="
          mx-auto mb-24 max-w-7xl overflow-hidden px-5 font-sora
          md:mb-32 md:mt-8 md:px-0

          max-md:[&_section]:mb-16
          max-md:[&_section]:mt-0
          max-md:[&_section]:pt-0
          max-md:[&_section]:pb-0

          max-md:[&_hr]:my-14

          max-md:[&_h2]:mb-5
          max-md:[&_h2]:mt-0
          max-md:[&_h2]:leading-[1.15]

          max-md:[&_h3]:mb-5
          max-md:[&_h3]:mt-0
          max-md:[&_h3]:leading-[1.15]

          max-md:[&_p]:mb-7
          max-md:[&_p]:mt-0

          max-md:[&_figure]:mx-auto
          max-md:[&_figure]:my-7
          max-md:[&_figure]:w-full
          max-md:[&_figure]:max-w-full

          max-md:[&_picture]:flex
          max-md:[&_picture]:w-full
          max-md:[&_picture]:justify-center

          max-md:[&_img]:mx-auto
          max-md:[&_img]:block
          max-md:[&_img]:h-auto
          max-md:[&_img]:max-h-[68svh]
          max-md:[&_img]:max-w-full
          max-md:[&_img]:object-contain

          max-md:[&_.grid]:gap-7
          max-md:[&_[class*='space-y-']>*+*]:mt-7
        "
      >
        <GallerySection />
      </main>
    </>
  );
}