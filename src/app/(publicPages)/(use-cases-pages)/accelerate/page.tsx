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
      "Primary creative resource supporting the launch of 47 consumer brands across multiple ecommerce marketplaces, including LifeToGo.",
  },
];

export default function Accelerate() {
  return (
    <>
      <div className="bg-[url('/accelerate/a360Banner.jpg')] bg-cover bg-center w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/70 md:bg-black/50"></div>
        <div className=" py-8 md:py-16 px-4 md:px-12 mx-auto grid md:grid-cols-2 relative">
          <div className="flex flex-col gap-4 md:gap-8 max-w-140">
            <div className="flex items-center w-fit justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Case Study
              </p>
            </div>
            <h1 className="text-3xl md:text-5xl uppercase font-bold text-white">
              ACCELERATE360
            </h1>
            <h3 className="text-xl md:text-2xl  font-bold text-white">
              Launching Consumer Brands Through Ecommerce & Integrated Creative
            </h3>

            <p className="text-base md:text-xl font-medium text-white max-w-140">
              At Accelerate360, I supported creative and marketing execution for
              47 national consumer brands. This featured work for LifeToGo
              spanned integrated campaigns, ecommerce, digital advertising,
              email, publisher media, and owned channels.
            </p>

            <div>
              <p className="text-base md:text-xl font-semibold text-white max-w-140">
                Brands Supported:
              </p>
              <ul className="text-base md:text-lg list-disc font-medium text-white ps-5">
                <li>Anker</li>
                <li>Aura</li>
                <li>Soundcore</li>
                <li>Performance Inspired</li>
                <li>Barney Butter</li>
                <li>LifeToGo</li>
                <li>Swarovski</li>
                <li> and 40+ more</li>
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
  bgClassName="bg-[#41B883]"
  hoverClassName="hover:bg-[#369D6F]"
  resultsBgClassName="bg-[#35A9E5]"
  resultsHoverClassName="hover:bg-[#2597D2]"
/>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mb-32 md:mt-8 p-4 md:p-0 ">
        <AccelerateSection />
      </div>
    </>
  );
}
