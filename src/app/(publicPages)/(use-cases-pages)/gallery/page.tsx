import FeatureCard from "@/app/components/FeatureCard";
import GallerySection from "../../../components/gallerysection";
import LightboxImage from "../../../components/lightboximage";
import {
  BookOpenIcon,
  ChartLineIcon,
  MegaPhoneIcon,
  MonitorIcon,
  PalateIcon,
} from "../../../../../public/icons";

const CREATIVE_GALLERY_IMAGES = ["/Creative.jpg"];

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
      <div className="bg-[url('/gallery/galleryBanner.jpg')] bg-cover bg-center w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/70 md:bg-black/30"></div>
        <div className=" py-8 md:py-16 px-4 md:px-12 mx-auto grid md:grid-cols-2 relative">
          <div className="flex flex-col gap-4 md:gap-8 max-w-140">
            <div className="flex items-center w-fit justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>
            <h1 className="text-3xl md:text-5xl uppercase font-bold text-white">
              CREATIVE GALLERY
            </h1>
            <h3 className="text-xl md:text-2xl  font-bold text-white">
              Selected creative work spanning brands, industries, audiences, and
              disciplines.
            </h3>

            <p className="text-base md:text-xl font-medium text-white max-w-140">
              A selection of work spanning brand identity, advertising,
              editorial, digital experiences, nonprofit communications,
              illustration, and print—demonstrating the versatility developed
              through more than 15 years of in-house, agency, B2B, and
              consumer-focused creative leadership.
            </p>
            <div>
              <p className="text-base md:text-xl font-semibold text-white max-w-140">
                SELECTED AREAS OF EXPERIENCE
                <span className="block text-base">
                  (Not an exhaustive list of capabilities)
                </span>
              </p>
              <ul className="text-base md:text-lg list-disc font-medium text-white ps-5">
                <li>Brand Identity & Visual Systems</li>
                <li>Editorial & Publication Design</li>
                <li>Campaign Development & Advertising</li>
                <li>Digital Experiences & Web Design</li>
                <li>Illustration & Iconography</li>
                <li>Print, Packaging & Collateral</li>
              </ul>
            </div>
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
