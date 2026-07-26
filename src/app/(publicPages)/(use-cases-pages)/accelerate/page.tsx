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
      <div className="bg-[url('/accelerate/a360Banner.png')] bg-cover w-full relative h-full min-h-[calc(100dvh-220px)]">
        <div className="absolute w-full h-full bg-black/50"></div>
        <div className=" py-8 md:py-16 px-12 mx-auto grid md:grid-cols-2 relative">
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
                <li>Barney Butte</li>
                <li>LifeToGo</li>
                <li>Swarovski</li>
                <li> and 40+ more</li>
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
      <div className="max-w-7xl mx-auto mb-32 md:mt-8 p-4 md:p-0 ">
        <div className="gap-7 flex flex-col mb-15">
          <div className="flex  items-center height-[36px]  gap-2.5">
            <div className=" bg-primary flex justify-center items-center  rounded-full py-2.5 px-5 ">
              <p className="text-white text-base whitespace-nowrap">
                Accelerate360
              </p>
            </div>
            <div className="w-44 h-0.5 bg-linear-to-r from-primary to-white opacity-100" />
          </div>
          <h2 className="text-[32px] md:text-6xl leading-18 font-sora font-semibold">
            National Consumer Brands • Integrated Marketing Campaigns • Creative
            Production.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" w-full ">
            <Image
              src="/banners2.jpg"
              alt="box"
              width={1512}
              height={2064}
              className="w-full h-full"
            />
          </div>
        </div>
        <AccelerateSection />
      </div>
    </>
  );
}
