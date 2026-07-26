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
      <div className="bg-[url('/gallery/galleryBanner.png')] bg-cover w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/30"></div>
        <div className=" py-8 md:py-16 px-12 mx-auto grid md:grid-cols-2 relative">
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
      <main className="mx-auto mb-32 max-w-7xl px-4 font-sora md:mt-8 md:px-0">
        <section className="mb-14">
          <div className="mb-10 flex flex-col gap-7">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center rounded-full bg-primary px-5 py-2.5">
                <p className="whitespace-nowrap text-base text-white">
                  Creative Gallery
                </p>
              </div>

              <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
            </div>

            <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
              Selected Creative Work Across Brand, Print & Digital
            </h1>

            <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
              A cross-section of brand identity, editorial design, advertising,
              digital experiences, illustration, and cause-based creative
              developed across diverse industries and audiences.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <LightboxImage
              src="/Creative3.jpg"
              alt="Creative gallery featuring brand identity, editorial design, advertising, digital work, illustration, and nonprofit campaigns"
              width={2048}
              height={1179}
              gallery={CREATIVE_GALLERY_IMAGES}
              index={0}
              className="block h-auto w-full object-contain"
            />
          </div>
        </section>

        <GallerySection />
      </main>
    </>
  );
}
