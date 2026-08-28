import type { ReactNode } from "react";
import Image from "next/image";
import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import LightboxImage from "./lightboximage";

const ACCELERATE_IMAGES = [
  "/accelerate/1000x1000 (1)B.jpg",
  "/accelerate/life5.png",
  "/accelerate/life7.png",
  "/accelerate/life16.png",
  "/accelerate/life17.png",
  "/accelerate/life19B.png",
  "/accelerate/life21.jpg",
  "/accelerate/life39.png",
  "/accelerate/life40.jpg",
  "/accelerate/life42.png",
  "/accelerate/Brand Banner.jpg",
  "/accelerate/life15.jpg",
  "/accelerate/life18B.jpg",
  "/accelerate/life31.jpg",
  "/accelerate/life25.jpg",
  "/accelerate/life26.png",
  "/accelerate/life27.png",
  "/accelerate/life3.png",
  "/accelerate/life33.png",
  "/accelerate/life35.png",
  "/accelerate/life43.jpg",
  "/accelerate/life44.jpg",
  "/accelerate/life23B.png",
];

function getImageIndex(src: string) {
  const index = ACCELERATE_IMAGES.indexOf(src);

  if (index === -1) {
    throw new Error(`Image is missing from ACCELERATE_IMAGES: ${src}`);
  }

  return index;
}

const ROLES = [
  "Creative Direction",
  "Integrated Campaigns",
  "Brand & Campaign Systems",
  "Product Launches",
  "Packaging & Product Creative",
  "Ecommerce & Marketplace Creative",
  "Publisher Partnerships",
  "Cross-Functional Collaboration",
];

function Divider() {
  return (
    <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-18" />
  );
}

function RolePill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-2.5 shadow-[0_0_25px_0_rgba(0,0,0,0.12)]">
      <p className="font-sora text-base md:text-lg">{label}</p>
    </div>
  );
}

function MobileDisclosure({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <details className="group md:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between border-y border-neutral-300 py-3 text-base font-semibold">
        <span>{label}</span>
        <span
          aria-hidden="true"
          className="text-xl leading-none transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="pt-4">{children}</div>
    </details>
  );
}

function MediaCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-0 w-full items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default function AccelerateSection() {
  return (
    <div className="mx-auto max-w-7xl font-sora">
      {/* Overview */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <OverView />
          <h1 className="text-3xl font-semibold md:text-5xl">Overview.</h1>
        </div>

        <div className="grid max-w-6xl gap-3.5">
          <p className="text-xl leading-relaxed">
            As the primary creative resource for the LifeToGo ecommerce
            division, I shaped brand and campaign execution as the marketplace
            grew from launch to $18.7M in revenue in under two years while
            supporting the launch and marketing of 47 consumer brands spanning
            wellness, fitness, food, fashion, technology, and lifestyle.
          </p>

          <p className="text-xl leading-relaxed">
            LifeToGo operated as both an owned consumer brand and a multi-brand
            ecommerce marketplace. I owned hands-on creative across packaging,
            integrated campaigns, ecommerce merchandising, product launches,
            marketplace creative, publisher promotions, email, digital
            advertising, and supporting launch systems for LifeToGo and partner
            brands.
          </p>
        </div>
      </section>

      <Divider />

      {/* My Role */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Setting />

          <h1 className="text-3xl font-semibold md:text-5xl">
            My<span className="text-primary"> Role.</span>
          </h1>
        </div>

        <MobileDisclosure label="View roles">
          <div className="flex flex-wrap gap-3">
            {ROLES.map((role) => (
              <RolePill key={role} label={role} />
            ))}
          </div>
        </MobileDisclosure>

        <div className="mt-2 hidden flex-wrap gap-3 md:flex md:gap-4">
          {ROLES.map((role) => (
            <RolePill key={role} label={role} />
          ))}
        </div>
      </section>

      <Divider />

      {/* LifeToGo Immunity Drink Mix */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            LifeToGo Immunity Drink Mix
            <span className="text-primary"> Product Launch.</span>
          </h1>
        </div>

        <div className="grid max-w-6xl gap-3.5">
          <p className="text-xl leading-relaxed">
            Led creative execution for the launch of LifeToGo Immunity Drink
            Mixes, a LifeToGo-owned product line. I developed the campaign
            system across packaging, product presentation, ecommerce
            merchandising, responsive digital advertising, publisher
            promotions, and launch creative.
          </p>

          <p className="text-xl leading-relaxed">
            I translated one product platform across multiple channels and
            formats, maintaining consistent messaging, visual hierarchy, and
            product recognition throughout the launch.
          </p>
        </div>

        {/* Mobile curated view */}
        <div className="mt-3 grid gap-6 md:hidden">
          <MediaCard>
            <LightboxImage
              src="/accelerate/1000x1000 (1)B.jpg"
              alt="LifeToGo Immunity Drink Mix campaign"
              width={1512}
              height={1512}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/1000x1000 (1)B.jpg")}
              className="mx-auto block h-auto w-full max-w-[520px] object-contain"
            />
          </MediaCard>

          <div className="overflow-hidden">
            <LightboxImage
              src="/accelerate/life21.jpg"
              alt="LifeToGo Immunity Drink Mix horizontal campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life21.jpg")}
              className="block h-auto w-full object-contain"
            />
          </div>

          <MobileDisclosure label="View more campaign work">
            <div className="grid gap-6">
              <MediaCard>
                <LightboxImage
                  src="/accelerate/life5.png"
                  alt="LifeToGo Immunity Drink Mix promotional creative"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life5.png")}
                  className="mx-auto block h-auto w-full max-w-[420px] object-contain"
                />
              </MediaCard>

              <MediaCard>
                <LightboxImage
                  src="/accelerate/life7.png"
                  alt="LifeToGo Immunity and Calm campaign creative"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life7.png")}
                  className="mx-auto block h-auto w-full max-w-[420px] object-contain"
                />
              </MediaCard>

              <MediaCard>
                <LightboxImage
                  src="/accelerate/life17.png"
                  alt="LifeToGo Immunity campaign extension"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life17.png")}
                  className="mx-auto block h-auto w-full max-w-[420px] object-contain"
                />
              </MediaCard>
            </div>
          </MobileDisclosure>

          <div className="mt-2 flex justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="block aspect-square h-auto w-full object-cover"
              >
                <source src="/accelerate/Immunity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Desktop view — unchanged */}
        <div className="mt-4 hidden gap-6 md:grid md:grid-cols-12">
          <MediaCard className="md:col-span-8 md:row-span-2">
            <LightboxImage
              src="/accelerate/1000x1000 (1)B.jpg"
              alt="LifeToGo Immunity Drink Mix campaign"
              width={1512}
              height={1512}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/1000x1000 (1)B.jpg")}
              className="mx-auto block h-full w-full max-h-[760px] object-contain"
            />
          </MediaCard>

          <MediaCard className="md:col-span-4">
            <LightboxImage
              src="/accelerate/life5.png"
              alt="LifeToGo Immunity Drink Mix promotional creative"
              width={1512}
              height={2064}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life5.png")}
              className="mx-auto block h-full w-full max-h-[360px] object-contain"
            />
          </MediaCard>

          <MediaCard className="md:col-span-4">
            <LightboxImage
              src="/accelerate/life7.png"
              alt="LifeToGo Immunity and Calm campaign creative"
              width={1512}
              height={2064}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life7.png")}
              className="mx-auto block h-full w-full max-h-[360px] object-contain"
            />
          </MediaCard>

          <div className="grid gap-6 md:col-span-12 md:grid-cols-3">
            <MediaCard className="md:min-h-[350px]">
              <LightboxImage
                src="/accelerate/life16.png"
                alt="LifeToGo Immunity campaign extension"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life16.png")}
                className="mx-auto block h-full w-full max-h-[430px] object-contain"
              />
            </MediaCard>

            <MediaCard className="md:min-h-[350px]">
              <LightboxImage
                src="/accelerate/life17.png"
                alt="LifeToGo Immunity campaign extension"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life17.png")}
                className="mx-auto block h-full w-full max-h-[430px] object-contain"
              />
            </MediaCard>

            <MediaCard className="md:min-h-[350px]">
              <LightboxImage
                src="/accelerate/life19B.png"
                alt="LifeToGo Immunity campaign extension"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life19B.png")}
                className="mx-auto block h-full w-full max-h-[430px] object-contain"
              />
            </MediaCard>
          </div>

          <div className="overflow-hidden md:col-span-12">
            <LightboxImage
              src="/accelerate/life21.jpg"
              alt="LifeToGo Immunity Drink Mix horizontal campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life21.jpg")}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="mt-6 flex justify-center md:col-span-12">
            <div className="w-full max-w-md overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="block aspect-square h-auto w-full object-cover"
              >
                <source src="/accelerate/Immunity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Performance Inspired */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Performance Inspired
            <span className="text-primary"> × Mark Wahlberg.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Led the LifeToGo creative execution for Performance Inspired
          products, including ecommerce merchandising, promotional assets, and
          campaign content featuring cofounder Mark Wahlberg. I adapted the
          established partner brand for the LifeToGo marketplace while
          preserving its visual identity and product positioning.
        </p>

        <div className="mt-3 grid gap-6 md:mt-4 md:grid-cols-12 md:gap-6">
          <div className="overflow-hidden md:col-span-12">
            <LightboxImage
              src="/accelerate/life39.png"
              alt="Performance Inspired campaign featuring Mark Wahlberg"
              width={1216}
              height={380}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life39.png")}
              className="block aspect-[16/5] w-full object-cover"
            />
          </div>

          <MediaCard className="hidden md:col-span-5 md:flex md:min-h-[520px]">
            <LightboxImage
              src="/accelerate/life40.jpg"
              alt="Performance Inspired vertical promotional creative"
              width={400}
              height={400}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life40.jpg")}
              className="mx-auto block h-auto w-full max-w-[440px] object-contain md:h-full md:max-h-[500px] md:max-w-none"
            />
          </MediaCard>

          <MediaCard className="md:col-span-7 md:min-h-[520px]">
            <LightboxImage
              src="/accelerate/life42.png"
              alt="Performance Inspired ecommerce promotional creative"
              width={1066}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life42.png")}
              className="mx-auto block h-auto w-full max-w-[440px] object-contain md:h-full md:max-h-[500px] md:max-w-none"
            />
          </MediaCard>
        </div>
      </section>

      <Divider />

      {/* Publisher Promotions */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Publisher Promotions
            <span className="text-primary"> & Brand Partnerships.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Developed and executed publisher promotions connecting LifeToGo
          offers with Accelerate360&apos;s portfolio of national media
          properties and consumer brands. I adapted campaign creative for
          distinct audiences and channels while maintaining consistent
          messaging and a cohesive LifeToGo brand experience.
        </p>

        <div className="mt-3 grid gap-8 md:mt-4 md:grid-cols-12">
          <div className="md:col-span-12">
            <LightboxImage
              src="/accelerate/Brand Banner.jpg"
              alt="Selected Accelerate360 publisher properties and consumer brand partnerships"
              width={1800}
              height={350}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/Brand Banner.jpg")}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="md:col-span-8">
            <LightboxImage
              src="/accelerate/life15.jpg"
              alt="The Telegraph LifeToGo promotional campaign"
              width={1216}
              height={686}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life15.jpg")}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="flex items-start justify-center md:col-span-4">
            <LightboxImage
              src="/accelerate/life18B.jpg"
              alt="Miami Herald LifeToGo promotion"
              width={200}
              height={400}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life18B.jpg")}
              className="block h-auto w-full max-w-[300px] object-contain"
            />
          </div>

          <div className="mt-2 overflow-hidden md:col-span-12">
            <LightboxImage
              src="/accelerate/life31.jpg"
              alt="LifeToGo wellness lifestyle banner"
              width={1216}
              height={244}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life31.jpg")}
              className="block aspect-[5/1] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* Ecommerce Campaigns */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Ecommerce Campaigns
            <span className="text-primary"> & Marketplace Marketing.</span>
          </h1>
        </div>

        <div className="grid max-w-6xl gap-3.5">
          <p className="text-xl leading-relaxed">
            Owned marketplace creative and ecommerce merchandising across
            technology, food, wellness, accessories, and lifestyle categories.
            I developed product-launch systems that included campaign banners,
            feature graphics, product imagery, marketplace assets, email
            creative, and digital advertising.
          </p>

          <p className="text-xl leading-relaxed">
            I onboarded and merchandised partner brands across
            LifeToGo-supported storefronts, developing promotional and campaign
            creative while preserving each brand&apos;s established identity,
            packaging, and product positioning.
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:mt-6">
          <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <Image
              src="/accelerate/usnow.com.png"
              alt="US Weekly ecommerce marketplace supported through LifeToGo"
              width={1096}
              height={2048}
              className="block h-auto w-full"
            />
          </div>

          <p className="mx-auto mt-2 w-full max-w-5xl text-base leading-relaxed text-neutral-600 md:mt-3 md:text-lg">
            <span className="font-semibold text-black">
              US Weekly Ecommerce Marketplace
            </span>{" "}
            — Supported brand onboarding, merchandising, campaign placement,
            promotional creative, and launch QA within the existing storefront.
          </p>
        </div>

        {/* Mobile curated view */}
        <div className="mt-3 grid gap-6 md:hidden">
          <div className="overflow-hidden">
            <LightboxImage
              src="/accelerate/life25.jpg"
              alt="LifeToGo consumer technology campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life25.jpg")}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MediaCard>
              <LightboxImage
                src="/accelerate/life26.png"
                alt="Anker portable charger ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life26.png")}
                className="mx-auto block h-auto w-full object-contain"
              />
            </MediaCard>

            <MediaCard>
              <LightboxImage
                src="/accelerate/life27.png"
                alt="Soundcore headphones ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life27.png")}
                className="mx-auto block h-auto w-full object-contain"
              />
            </MediaCard>
          </div>

          <MobileDisclosure label="View more marketplace work">
            <div className="grid grid-cols-2 gap-4">
              <MediaCard>
                <LightboxImage
                  src="/accelerate/life3.png"
                  alt="Strong Coffee ecommerce promotional creative"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life3.png")}
                  className="mx-auto block h-auto w-full object-contain"
                />
              </MediaCard>

              <MediaCard>
                <LightboxImage
                  src="/accelerate/life33.png"
                  alt="Shar Snacks ecommerce creative"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life33.png")}
                  className="mx-auto block h-auto w-full object-contain"
                />
              </MediaCard>

              <MediaCard>
                <LightboxImage
                  src="/accelerate/life35.png"
                  alt="Hope and Sesame ecommerce creative"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life35.png")}
                  className="mx-auto block h-auto w-full object-contain"
                />
              </MediaCard>

              <MediaCard>
                <LightboxImage
                  src="/accelerate/life43.jpg"
                  alt="Barney Butter product photography"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life43.jpg")}
                  className="mx-auto block h-auto w-full object-contain"
                />
              </MediaCard>

              <MediaCard>
                <LightboxImage
                  src="/accelerate/life44.jpg"
                  alt="Barney Butter lifestyle product photography"
                  width={1512}
                  height={2064}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life44.jpg")}
                  className="mx-auto block h-auto w-full object-contain"
                />
              </MediaCard>

              <MediaCard>
                <LightboxImage
                  src="/accelerate/life23B.png"
                  alt="Partner-brand marketplace campaign"
                  width={1512}
                  height={600}
                  gallery={ACCELERATE_IMAGES}
                  index={getImageIndex("/accelerate/life23B.png")}
                  className="mx-auto block h-auto w-full object-contain"
                />
              </MediaCard>
            </div>
          </MobileDisclosure>
        </div>

        {/* Desktop view — unchanged */}
        <div className="mt-4 hidden gap-6 md:grid md:grid-cols-12">
          <div className="overflow-hidden md:col-span-12">
            <LightboxImage
              src="/accelerate/life25.jpg"
              alt="LifeToGo consumer technology campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life25.jpg")}
              className="block h-auto w-full object-contain"
            />
          </div>

          <MediaCard className="md:col-span-6 md:min-h-[460px]">
            <LightboxImage
              src="/accelerate/life26.png"
              alt="Anker portable charger ecommerce creative"
              width={1512}
              height={2064}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life26.png")}
              className="mx-auto block h-full w-full max-h-[440px] object-contain"
            />
          </MediaCard>

          <MediaCard className="md:col-span-6 md:min-h-[460px]">
            <LightboxImage
              src="/accelerate/life27.png"
              alt="Soundcore headphones ecommerce creative"
              width={1512}
              height={2064}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life27.png")}
              className="mx-auto block h-full w-full max-h-[440px] object-contain"
            />
          </MediaCard>

          <MediaCard className="md:col-span-5 md:min-h-[500px]">
            <LightboxImage
              src="/accelerate/life3.png"
              alt="Strong Coffee ecommerce promotional creative"
              width={1512}
              height={2064}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life3.png")}
              className="mx-auto block h-full w-full max-h-[430px] object-contain"
            />
          </MediaCard>

          <div className="grid gap-5 md:col-span-7 md:grid-cols-2 md:gap-6">
            <MediaCard className="min-h-[240px]">
              <LightboxImage
                src="/accelerate/life33.png"
                alt="Shar Snacks ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life33.png")}
                className="mx-auto block h-full w-full max-h-[260px] object-contain"
              />
            </MediaCard>

            <MediaCard className="min-h-[240px]">
              <LightboxImage
                src="/accelerate/life35.png"
                alt="Hope and Sesame ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life35.png")}
                className="mx-auto block h-full w-full max-h-[260px] object-contain"
              />
            </MediaCard>

            <MediaCard className="min-h-[240px]">
              <LightboxImage
                src="/accelerate/life43.jpg"
                alt="Barney Butter product photography"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life43.jpg")}
                className="mx-auto block h-full w-full max-h-[240px] object-contain"
              />
            </MediaCard>

            <MediaCard className="min-h-[240px]">
              <LightboxImage
                src="/accelerate/life44.jpg"
                alt="Barney Butter lifestyle product photography"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex("/accelerate/life44.jpg")}
                className="mx-auto block h-full w-full max-h-[240px] object-contain"
              />
            </MediaCard>
          </div>

          <MediaCard className="md:col-span-12 md:min-h-[360px]">
            <LightboxImage
              src="/accelerate/life23B.png"
              alt="Partner-brand marketplace campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life23B.png")}
              className="mx-auto block h-full w-full max-h-[340px] object-contain"
            />
          </MediaCard>
        </div>
      </section>

      <Divider />

      {/* Results & Impact */}
      <section className="grid gap-8 md:mb-16">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Results <span className="text-primary">& Impact.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Supported the launch and marketing of nationally recognized consumer
          brands across ecommerce, integrated campaigns, publisher promotions,
          and creative production—combining hands-on creative ownership with
          the operational work required to bring products and campaigns to
          market.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <p className="text-2xl font-semibold text-primary md:text-3xl">
              $18.7M
            </p>
            <h3 className="mt-3 text-lg font-semibold">Marketplace Revenue</h3>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              LifeToGo grew from launch to $18.7M in revenue in under two years.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <p className="text-2xl font-semibold text-primary md:text-3xl">
              47
            </p>
            <h3 className="mt-3 text-lg font-semibold">Consumer Brands</h3>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              Supported across product launches, ecommerce, campaigns, and
              marketplace marketing.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <p className="text-2xl font-semibold text-primary md:text-3xl">
              National
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Publisher Partnerships
            </h3>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              Creative supporting Us Weekly, Men&apos;s Journal, Life &amp;
              Style, In Touch Weekly, Closer, and The Miami Herald.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <p className="whitespace-nowrap text-2xl font-semibold text-primary md:text-3xl">
              B2C + D2C
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Consumer Ecommerce
            </h3>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              Creative and merchandising across owned products, partner brands,
              and multi-brand ecommerce marketplaces.
            </p>
          </div>
        </div>

        <div className="grid gap-6 border-l-2 border-primary pl-5 md:grid-cols-2 md:gap-10 md:pl-6">
          <div>
            <h3 className="text-lg font-semibold">Creative & Campaign Scope</h3>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              Packaging, product launches, integrated campaigns, ecommerce
              experiences, email, display, social, motion, video, publisher
              promotions, product photography, and marketplace creative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Ecommerce & Launch Operations
            </h3>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              Product onboarding and merchandising, product imagery, feature
              graphics, product variants, vendor-asset coordination, and launch
              QA using Shopify and TrueCommerce.
            </p>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className="mt-10 grid gap-6 md:mt-0">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Takeaway<span className="text-primary">.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Accelerate360 demonstrates my ability to operate across creative
          direction, brand systems, integrated campaigns, ecommerce, and
          hands-on execution within a fast-moving consumer environment—bringing
          together multiple brands, channels, partners, and stakeholders into
          cohesive customer-facing experiences.
        </p>
      </section>
    </div>
  );
}