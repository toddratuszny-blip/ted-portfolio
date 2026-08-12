import Image from "next/image";
import AccelerateSection from "../../../components/acceleratesection";
import FeatureCard from "@/app/components/FeatureCard";
import {
  ChartLineIcon,
  MegaPhoneIcon,
  NewpaperIcon,
  PencilIcon,
  ShoppingCartIcon,
} from "../../../../../public/icons";

const features = [
  {
    icon: <ShoppingCartIcon width={60} height={60} />,
    title: "ECOMMERCE & MERCHANDISING",
    description:
      "Shopify and TrueCommerce onboarding, product imagery, feature graphics, variants, merchandising, and launch QA.",
  },
  {
    icon: <MegaPhoneIcon width={60} height={60} />,
    title: "INTEGRATED CAMPAIGNS",
    description:
      "Digital advertising, email, social, promotional content, and marketplace campaigns supporting launches and online sales.",
  },
  {
    icon: <PencilIcon width={60} height={60} />,
    title: "CREATIVE PRODUCTION",
    description:
      "Marketplace creative, motion graphics, video, and multi-format assets produced with minimal creative oversight.",
  },
  {
    icon: <NewpaperIcon width={60} height={60} />,
    title: "PUBLISHER MEDIA",
    description:
      "Marketing assets created for Us Weekly, Men’s Journal, Life & Style, In Touch, Closer, and The Miami Herald.",
  },
  {
    icon: <ChartLineIcon width={60} height={60} />,
    title: "RESULTS & IMPACT",
    description:
      "Primary creative resource supporting 47 consumer brands across multiple ecommerce marketplaces, including LifeToGo.",
  },
];

export default function Accelerate() {
  return (
    <>
      <div className="relative min-h-[620px] w-full overflow-hidden md:min-h-[calc(100dvh-220px)]">
        {/* Mobile Hero */}
        <Image
          src="/accelerate/LTG Mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />

        {/* Desktop Hero */}
        <Image
          src="/accelerate/a360Banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 md:bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto grid px-4 pb-10 pt-10 md:grid-cols-2 md:px-12 md:py-16">
          <div className="flex max-w-[420px] flex-col gap-4 md:max-w-[520px] md:gap-8">
            <div className="flex w-fit items-center justify-center rounded-full bg-[#35A9E5] px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>

            <h1 className="text-3xl font-bold uppercase text-white md:text-5xl">
              ACCELERATE360
            </h1>

            <h2 className="text-xl font-bold text-white md:text-2xl">
              Launching Consumer Brands
            </h2>

            <p className="max-w-[340px] text-base font-medium leading-relaxed text-white md:max-w-[520px] md:text-xl">
              Creative marketing lead supporting 47 consumer brands across
              ecommerce, integrated campaigns, and publisher media.
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
            bgClassName="bg-[#41B883]"
            hoverClassName="hover:bg-[#369D6F]"
            resultsBgClassName="bg-[#35A9E5]"
            resultsHoverClassName="hover:bg-[#2597D2]"
          />
        ))}
      </div>

      <div className="mx-auto mb-32 max-w-7xl p-4 md:mt-8 md:p-0">
        <AccelerateSection />
      </div>
    </>
  );
}