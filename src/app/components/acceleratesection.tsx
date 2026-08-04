import type { ReactNode } from "react";
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
  "Integrated Campaigns",
  "Creative Direction",
  "LifeToGo Brand Marketing",
  "Packaging Design",
  "Product Launches",
  "Ecommerce Merchandising",
  "Marketplace Creative",
  "Email Marketing",
  "Display Advertising",
  "Publisher Promotions",
  "Product Photography",
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
      <p className="text-base font-sora md:text-lg">{label}</p>
    </div>
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
      className={`flex w-full min-h-0 items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default function AccelerateSection() {
  return (
    <div className="mx-auto max-w-7xl font-sora">
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <OverView />
          <h1 className="text-3xl font-semibold md:text-5xl">Overview.</h1>
        </div>

        <div className="grid max-w-6xl gap-3.5">
          <p className="text-xl leading-relaxed">
            As the primary creative resource for the LifeToGo ecommerce
            division, I led creative execution for the launch and marketing of
            47 consumer brands spanning wellness, fitness, food, fashion,
            technology, and lifestyle products.
          </p>

          <p className="text-xl leading-relaxed">
            LifeToGo operated as both an owned consumer brand and a multi-brand
            ecommerce marketplace. I owned hands-on creative across packaging,
            integrated campaigns, ecommerce merchandising, product launches,
            marketplace creative, publisher promotions, email marketing, and
            digital advertising for LifeToGo and its partner brands.
          </p>
        </div>
      </section>

      <Divider />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Setting />
          <h1 className="text-3xl font-semibold md:text-5xl">
            My<span className="text-primary"> Role.</span>
          </h1>
        </div>

        <div className="mt-2 flex flex-wrap gap-3 md:gap-4">
          {ROLES.map((role) => (
            <RolePill key={role} label={role} />
          ))}
        </div>
      </section>

      <Divider />

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
            Mixes, a LifeToGo-owned product line. I developed the campaign system
            across packaging, product presentation, ecommerce merchandising,
            responsive digital advertising, publisher promotions, and launch
            creative.
          </p>

          <p className="text-xl leading-relaxed">
            I translated one product platform across multiple channels and
            formats, maintaining consistent messaging, visual hierarchy, and
            product recognition throughout the launch.
          </p>
        </div>

        <div className="mt-3 grid gap-6 md:mt-4 md:grid-cols-12 md:gap-6">
          <MediaCard className="md:col-span-8 md:row-span-2">
            <LightboxImage
              src="/accelerate/1000x1000 (1)B.jpg"
              alt="LifeToGo Immunity Drink Mix campaign"
              width={1512}
              height={1512}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/1000x1000 (1)B.jpg")}
              className="mx-auto block h-auto w-full max-w-[520px] object-contain md:h-full md:max-h-[760px] md:max-w-none"
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
              className="mx-auto block h-auto w-full max-w-[420px] object-contain md:h-full md:max-h-[360px] md:max-w-none"
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
              className="mx-auto block h-auto w-full max-w-[420px] object-contain md:h-full md:max-h-[360px] md:max-w-none"
            />
          </MediaCard>

          {[
            "/accelerate/life16.png",
            "/accelerate/life17.png",
            "/accelerate/life19B.png",
          ].map((src) => (
            <MediaCard key={src} className="md:col-span-4 md:min-h-[350px]">
              <LightboxImage
                src={src}
                alt="LifeToGo Immunity campaign extension"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={getImageIndex(src)}
                className="mx-auto block h-auto w-full max-w-[420px] object-contain md:h-full md:max-h-[430px] md:max-w-none"
              />
            </MediaCard>
          ))}

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

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Performance Inspired
            <span className="text-primary"> × Mark Wahlberg.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Led the LifeToGo creative execution for Performance Inspired products,
          including ecommerce merchandising, promotional assets, and campaign
          content featuring cofounder Mark Wahlberg. I adapted the established
          partner brand for the LifeToGo marketplace while preserving its visual
          identity and product positioning.
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

          <MediaCard className="md:col-span-5 md:min-h-[520px]">
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

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Publisher Promotions
            <span className="text-primary"> & Brand Partnerships.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Developed and executed publisher promotions connecting LifeToGo offers
          with Accelerate360's portfolio of national media properties and consumer
          brands. I adapted campaign creative for distinct audiences and channels
          while maintaining consistent messaging and a cohesive LifeToGo brand
          experience.
        </p>

        <div className="mt-3 grid gap-6 md:mt-4 md:grid-cols-12 md:gap-6">
          <MediaCard className="md:col-span-12">
            <LightboxImage
              src="/accelerate/Brand Banner.jpg"
              alt="Selected Accelerate360 publisher properties and consumer brand partnerships"
              width={1800}
              height={350}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/Brand Banner.jpg")}
              className="block h-auto w-full object-contain"
            />
          </MediaCard>

          <MediaCard className="md:col-span-7 md:min-h-[560px]">
            <LightboxImage
              src="/accelerate/life15.jpg"
              alt="The Telegraph LifeToGo promotional campaign"
              width={1216}
              height={686}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life15.jpg")}
              className="mx-auto block h-auto w-full max-w-[520px] object-contain md:h-full md:max-h-[520px] md:max-w-none"
            />
          </MediaCard>

          <MediaCard className="md:col-span-5 md:min-h-[760px]">
            <LightboxImage
              src="/accelerate/life18B.jpg"
              alt="Miami Herald LifeToGo promotion"
              width={200}
              height={400}
              gallery={ACCELERATE_IMAGES}
              index={getImageIndex("/accelerate/life18B.jpg")}
              className="mx-auto block h-auto w-full max-w-[400px] object-contain md:h-full md:max-h-[740px] md:max-w-none"
            />
          </MediaCard>

          <div className="overflow-hidden md:col-span-12">
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
            technology, food, wellness, accessories, and lifestyle categories. I
            developed product-launch systems that included campaign banners,
            feature graphics, product imagery, marketplace assets, email creative,
            and digital advertising.
          </p>

          <p className="text-xl leading-relaxed">
            Partner brands retained their established identities and packaging.
            I translated their products into clear, cohesive LifeToGo storefront,
            promotional, and campaign experiences while preserving each brand's
            established identity and product positioning.
          </p>
        </div>

        <div className="mt-3 grid gap-6 md:mt-4 md:grid-cols-12 md:gap-6">
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
              className="mx-auto block h-auto w-full max-w-[420px] object-contain md:h-full md:max-h-[440px] md:max-w-none"
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
              className="mx-auto block h-auto w-full max-w-[420px] object-contain md:h-full md:max-h-[440px] md:max-w-none"
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
              className="mx-auto block h-auto w-full max-w-[320px] object-contain md:h-full md:max-h-[430px] md:max-w-none"
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
                className="mx-auto block h-auto w-full max-w-[340px] object-contain md:h-full md:max-h-[260px] md:max-w-none"
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
                className="mx-auto block h-auto w-full max-w-[340px] object-contain md:h-full md:max-h-[260px] md:max-w-none"
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
                className="mx-auto block h-auto w-full max-w-[340px] object-contain md:h-full md:max-h-[240px] md:max-w-none"
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
                className="mx-auto block h-auto w-full max-w-[340px] object-contain md:h-full md:max-h-[240px] md:max-w-none"
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
              className="mx-auto block h-auto w-full max-w-[520px] object-contain md:h-full md:max-h-[340px] md:max-w-none"
            />
          </MediaCard>
        </div>
      </section>

      <Divider />

      <section className="grid gap-6 md:mb-16">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Results <span className="text-primary">& Impact.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Led creative execution for the launch and marketing of 47 consumer
          brands through the LifeToGo ecommerce division. I developed LifeToGo
          packaging and integrated campaign assets while owning partner-brand
          marketplace creative, product imagery, ecommerce merchandising,
          publisher promotions, email marketing, and digital advertising across
          multiple consumer categories.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:mt-0">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Takeaway<span className="text-primary">.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Accelerate360 demonstrates my ability to serve as the primary creative
          resource for an ecommerce division, lead integrated campaign execution,
          and translate established partner brands across marketplace, publisher,
          email, and digital advertising channels. The work combined packaging,
          product launches, ecommerce merchandising, product marketing, and
          high-volume hands-on creative execution.
        </p>
      </section>
    </div>
  );
}