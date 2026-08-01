import Business from "../Icons/business";
import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Target from "../Icons/target";
import LightboxImage from "./lightboximage";

const MARYANN_IMAGES = [
  "/maryannnew.png",
  "/maryann002.png",
  "/scope012.webp",
  "/scope2.jpg",
  "/scope3.jpg",
  "/scope042.png",
  "/scopenew.png",
  "/scope6B.png",
];
const ROLES = [
  "Brand Development",
  "Creative Direction",
  "Packaging Design",
  "Retail Experience",
  "Retail Marketing",
  "Catalog Design",
  "Print Production",
  "Vendor Coordination",
];

const STRATEGIC_PRIORITIES = [
  {
    title: "Strengthen Shelf Presence",
    description:
      "Create a recognizable visual system that could compete more effectively in retail environments.",
  },
  {
    title: "Unify Brand Touchpoints",
    description:
      "Connect packaging, displays, catalogs, signage, collateral, and promotional materials through one cohesive identity.",
  },
  {
    title: "Support Retail Growth",
    description:
      "Develop scalable tools that helped present the full product line to retailers, buyers, and consumers.",
  },
  {
    title: "Improve Product Navigation",
    description:
      "Organize complex assortments, packaging formats, colors, and product information so they were easier to understand.",
  },
];

const OUTCOMES = [
  {
    title: "Unified",
    label: "Brand Identity System",
  },
  {
    title: "Complete",
    label: "Retail Brand Experience",
  },
  {
    title: "Multi-Format",
    label: "Packaging System",
  },
  {
    title: "B2B + B2C",
    label: "Sales Support",
  },
];

function Divider() {
  return (
    <div className="my-20 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />
  );
}

function RolePill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-full bg-white px-4.5 py-2.5 shadow-[0_0_25px_0_rgba(0,0,0,0.12)]">
      <p className="whitespace-nowrap font-sora text-base md:text-lg">
        {label}
      </p>
    </div>
  );
}

function OutcomeCard({
  title,
  label,
  highlight,
}: {
  title: string;
  label: string;
  highlight: boolean;
}) {
  return (
    <div className="border border-neutral-300 bg-[#FAFAFA] p-6 md:p-7.5">
      <p
        className={`font-sora text-[28px] font-semibold leading-tight md:text-[36px] ${
          highlight ? "text-primary" : "text-neutral-900"
        }`}
      >
        {title}
      </p>

      <p className="mt-2 font-sora text-lg leading-snug text-[#404040] md:text-xl">
        {label}
      </p>
    </div>
  );
}

export default function MaryAnnOverViewSection() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Overview */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <OverView />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Overview.
          </h2>
        </div>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Mary Ann&apos;s Chocolates needed a cohesive consumer brand system
            that could support retail growth, strengthen shelf presence, and
            create consistency across packaging, merchandising, marketing, and
            the in-store customer experience.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            I led the development and execution of a coordinated brand program
            spanning product packaging, retail displays, storefront graphics,
            catalogs, promotional campaigns, signage, and supporting collateral
            across customer-facing touchpoints.
          </p>
        </div>
      </section>

      <Divider />

      {/* My Role */}
      <section className="space-y-10">
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            <Setting />

            <h2 className="font-sora text-3xl font-semibold md:text-5xl">
              My<span className="text-primary"> Role.</span>
            </h2>
          </div>

          <p className="font-sora text-xl leading-relaxed">
            Directed the visual development of the brand across identity,
            packaging, retail environments, merchandising, catalogs, promotional
            communications, print production, and vendor coordination. The role
            combined brand strategy with hands-on creative execution across
            nearly every customer touchpoint.
          </p>

          <div className="flex flex-wrap gap-4">
            {ROLES.map((role) => (
              <RolePill key={role} label={role} />
            ))}
          </div>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-6 md:gap-10.5">
          <div className="w-full md:col-span-4">
            <LightboxImage
              src="/maryannnew.png"
              alt="Mary Ann's Chocolates catalog spreads, product assortment, and retail display"
              width={4000}
              height={4000}
              gallery={MARYANN_IMAGES}
              index={0}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="flex w-full items-center justify-center md:col-span-2">
            <LightboxImage
              src="/maryann002.png"
              alt="Mary Ann's Chocolates freestanding retail display"
              width={4000}
              height={4000}
              gallery={MARYANN_IMAGES}
              index={1}
              className="block h-auto max-h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* Business Challenge */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5">
          <Business />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Business <span className="text-primary">Challenge.</span>
          </h2>
        </div>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            The product line included multiple chocolate assortments, packaging
            formats, colors, price points, and retail configurations. Existing
            materials needed stronger visual consistency and a clearer system
            for presenting the assortment to both buyers and consumers.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            The challenge was to preserve the brand&apos;s premium, handcrafted
            character while creating a scalable visual system that unified
            packaging, retail environments, storefront graphics, catalogs,
            promotional materials, and customer communications.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {STRATEGIC_PRIORITIES.map((priority) => (
            <article
              key={priority.title}
              className="border border-neutral-300 bg-[#FAFAFA] p-7"
            >
              <h3 className="font-sora text-2xl font-semibold">
                {priority.title}
              </h3>

              <p className="mt-3 font-sora text-lg leading-relaxed text-[#404040]">
                {priority.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* Brand Development and Packaging */}
      <section className="space-y-10">
        <div>
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Brand Development
            <span className="text-primary"> & Packaging.</span>
          </h2>

          <div className="mt-5 space-y-5">
            <p className="font-sora text-xl leading-relaxed">
              Developed a flexible visual system that connected the core brand,
              product packaging, gift assortments, stationery, product
              information, and supporting collateral.
            </p>

            <p className="font-sora text-xl leading-relaxed">
              The system used consistent typography, patterns, color,
              photography, and product presentation while allowing individual
              assortments and packaging formats to remain distinct.
            </p>
          </div>
        </div>

        <LightboxImage
          src="/scope012.webp"
          alt="Mary Ann's Chocolates coordinated brand identity, stationery, packaging, and product materials"
          width={1600}
          height={1120}
          gallery={MARYANN_IMAGES}
          index={2}
          className="block h-auto w-full object-contain"
        />

        <div className="grid items-center gap-10.5 md:grid-cols-2">
          <div className="flex min-h-[320px] items-center justify-center">
            <LightboxImage
              src="/scope2.jpg"
              alt="Mary Ann's Chocolates boxed chocolate packaging"
              width={640}
              height={448}
              gallery={MARYANN_IMAGES}
              index={3}
              className="block h-auto max-h-[520px] w-full object-contain"
            />
          </div>

          <div className="flex min-h-[320px] items-center justify-center">
            <LightboxImage
              src="/scope3.jpg"
              alt="Mary Ann's Chocolates open gift box packaging"
              width={640}
              height={448}
              gallery={MARYANN_IMAGES}
              index={4}
              className="block h-auto max-h-[520px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* Retail Brand Experience */}
      <section className="space-y-10">
        <div>
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Retail Brand
            <span className="text-primary"> Experience.</span>
          </h2>

          <div className="mt-5 space-y-5">
            <p className="font-sora text-xl leading-relaxed">
              Developed a complete retail brand experience spanning
              merchandising, environmental graphics, storefront signage, menu
              boards, promotional materials, catalogs, and customer
              communications. Every touchpoint reinforced the premium
              positioning of the brand while creating a consistent customer
              experience from storefront to point of purchase.
            </p>

            <p className="font-sora text-xl leading-relaxed">
              Work included storefront signage, retail displays, menu boards,
              product catalogs, sales collateral, promotional campaigns,
              stationery, gift cards, window graphics, and supporting materials
              for both retail and wholesale channels.
            </p>
          </div>
        </div>

        <LightboxImage
          src="/scope042.png"
          alt="Mary Ann's Chocolates catalog featuring retail displays and product information"
          width={1750}
          height={864}
          gallery={MARYANN_IMAGES}
          index={5}
          className="block h-auto w-full object-contain"
        />

        <div className="grid items-center gap-10.5 md:grid-cols-2">
          <LightboxImage
            src="/scopenew.png"
            alt="Mary Ann's Chocolates grand opening promotional advertisement"
            width={640}
            height={448}
            gallery={MARYANN_IMAGES}
            index={6}
            className="block h-auto w-full object-contain"
          />

          <LightboxImage
            src="/scope6B.png"
            alt="Mary Ann's Chocolates product catalog spread"
            width={640}
            height={448}
            gallery={MARYANN_IMAGES}
            index={7}
            className="block h-auto w-full object-contain"
          />
        </div>
      </section>

      <Divider />

      {/* Outcomes */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5">
          <Target />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Outcomes<span className="text-primary"> & Impact.</span>
          </h2>
        </div>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            The project established a unified consumer brand system that
            connected identity, packaging, merchandising, retail environments,
            catalogs, and promotional communications into a consistent customer
            experience.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            The resulting brand architecture strengthened shelf presence,
            improved product presentation, enhanced retail consistency, and
            created a scalable foundation supporting both wholesale and
            direct-to-consumer growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((item, index) => (
            <OutcomeCard
              key={item.label}
              title={item.title}
              label={item.label}
              highlight={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
