import Business from "../Icons/business";
import Idea from "../Icons/idea";
import OverView from "../Icons/overview";
import Product from "../Icons/product";
import Setting from "../Icons/setting";
import Target from "../Icons/target";
import LightboxImage from "./lightboximage";

const INDUSTRIAL_GALLERY = [
  "/LVA BRANDS.jpg",
  "/Elite Letterhead_Final_1.jpg",
  "/Elite_Business Card_Finals-2.jpg",
  "/LVA Business Card2.png",
  "/eliteB.png",
  "/global3B.png",
  "/itc.png",
  "/Elite IMG_20190607_082339134.png",
  "/Elite bB.png",
  "/Elite Label 4.5_FD_CG_T27_SD.png",
  "/Elite -24-web banner.jpg",
  "/Elite -web banner.jpg",
  "/LVA All 2018 LVA -web banner.jpg",
  "/elite coverB.png",
  "/Elite catlog spread2B.png",
  "/Elite line cardB.png",
  "/Global vortex4 coverB.png",
  "/LVA insert 3.png",
  "/conical build ass.jpg",
  "/Elite Sales-Promotion.jpg",
  "/Elite trade.png",
  "/LVA_Email_Selection_082715_Offline_03.jpg",
];

const ROLES = [
  "Brand Strategy",
  "Creative Direction",
  "Brand Development",
  "Product Marketing",
  "Ecommerce",
  "Acquisition Integration",
  "Sales Enablement",
  "Team Leadership",
];

const BUSINESS_CHALLENGES = [
  {
    title: "Distinct Markets",
    description:
      "Each company served different industrial audiences, product categories, and buying environments.",
  },
  {
    title: "Overlapping Operations",
    description:
      "Brands shared products, distributors, customers, vendors, and internal resources across the portfolio.",
  },
  {
    title: "Inconsistent Marketing",
    description:
      "Legacy identities and disconnected materials made it difficult to maintain a consistent customer experience.",
  },
  {
    title: "Scalable Growth",
    description:
      "The organization needed systems capable of supporting acquisitions, ecommerce, launches, and sales teams.",
  },
];

const STRATEGIC_PILLARS = [
  {
    title: "Build Distinct Brands",
    description:
      "Develop clear positioning, messaging, and visual identities appropriate to each company and market.",
  },
  {
    title: "Create Shared Systems",
    description:
      "Establish repeatable processes for creative production, content, websites, ecommerce, and campaigns.",
  },
  {
    title: "Support Product Sales",
    description:
      "Improve how complex products were explained, compared, promoted, and presented throughout the buying process.",
  },
  {
    title: "Integrate Acquisitions",
    description:
      "Align acquired companies with broader business goals while preserving relevant customer and brand equity.",
  },
];

const OUTCOMES = [
  { metric: "08", label: "Companies Supported" },
  { metric: "03", label: "Acquisitions Integrated" },
  { metric: "07", label: "Ecommerce Platforms" },
  { metric: "$3M+", label: "Annual Ecommerce Revenue" },
  { metric: "10K", label: "Products and SKUs" },
  { metric: "276", label: "Page Product Catalog" },
  { metric: "50K+", label: "Email Subscribers" },
  { metric: "36.4%", label: "Highest Email Open Rate" },
];

function Divider() {
  return (
    <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />
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

function MetricCard({
  metric,
  label,
  highlight,
}: {
  metric: string;
  label: string;
  highlight: boolean;
}) {
  return (
    <div className="border border-neutral-300 bg-[#FAFAFA] p-6 md:p-7.5">
      <p
        className={`font-sora text-[32px] font-semibold md:text-[40px] ${
          highlight ? "text-primary" : "text-neutral-900"
        }`}
      >
        {metric}
      </p>

      <p className="mt-1 font-sora text-lg leading-snug text-[#404040] md:text-xl">
        {label}
      </p>
    </div>
  );
}

function SectionHeading({
  icon,
  children,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <h2 className="font-sora text-3xl font-semibold md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export default function OverViewSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="space-y-6">
        <SectionHeading icon={<OverView />}>Overview.</SectionHeading>

        <p className="font-sora text-xl leading-relaxed">
          Over eight years, I partnered directly with executive leadership to
          build and grow an ecosystem of eight manufacturing, distribution, and
          ecommerce companies.
        </p>
      </section>

      <Divider />

      <section className="grid gap-6">
        <SectionHeading icon={<Setting />}>
          My<span className="text-primary"> Role.</span>
        </SectionHeading>

        <p className="font-sora text-xl leading-relaxed">
          Led brand strategy, creative direction, ecommerce, product marketing,
          acquisition integration, and customer-facing communications across the
          portfolio.
        </p>

        <div className="flex flex-wrap gap-4">
          {ROLES.map((role) => (
            <RolePill key={role} label={role} />
          ))}
        </div>
      </section>

      <Divider />

      <section className="space-y-8">
        <SectionHeading icon={<Setting />}>
          Brand Strategy <span className="text-primary">& Identity.</span>
        </SectionHeading>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Created and evolved corporate and product brands across the
            portfolio, balancing distinct market positioning with shared
            standards that made the broader organization easier to manage and
            scale.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            The work included naming, messaging, identity development, brand
            standards, stationery systems, acquisition integration, and
            customer-facing implementation across established and newly built
            brands.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <LightboxImage
            src="/LVA BRANDS.jpg"
            alt="Lehigh Valley Abrasives brand standards and identity system"
            width={1530}
            height={990}
            gallery={INDUSTRIAL_GALLERY}
            index={0}
            className="mx-auto block max-h-[560px] w-auto max-w-full object-contain"
          />

          <LightboxImage
            src="/Elite Letterhead_Final_1.jpg"
            alt="Elite Abrasives letterhead and corporate identity system"
            width={2550}
            height={3300}
            gallery={INDUSTRIAL_GALLERY}
            index={1}
            className="mx-auto block max-h-[560px] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mx-auto grid max-w-3xl items-center gap-8 sm:grid-cols-2">
          <LightboxImage
            src="/Elite_Business Card_Finals-2.jpg"
            alt="Elite Abrasives business card identity application"
            width={1050}
            height={600}
            gallery={INDUSTRIAL_GALLERY}
            index={2}
            className="mx-auto block max-h-[190px] w-auto max-w-full object-contain"
          />

          <LightboxImage
            src="/LVA Business Card2.png"
            alt="Lehigh Valley Abrasives business card identity application"
            width={1050}
            height={600}
            gallery={INDUSTRIAL_GALLERY}
            index={3}
            className="mx-auto block max-h-[190px] w-auto max-w-full object-contain"
          />
        </div>
      </section>

      <Divider />

      <section className="space-y-8">
        <SectionHeading icon={<Business />}>
          Business <span className="text-primary">Challenge.</span>
        </SectionHeading>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            The portfolio included distinct manufacturing, distribution, and
            ecommerce companies serving different industrial audiences. Many
            shared overlapping products, distributors, customers, vendors, and
            operational resources, but each required its own positioning,
            customer experience, and market identity.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            The challenge was to strengthen individual brands while building
            scalable systems capable of supporting acquisitions, product
            marketing, ecommerce growth, sales teams, and customer
            communications across the broader organization.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {BUSINESS_CHALLENGES.map((challenge) => (
            <article
              key={challenge.title}
              className="border border-neutral-300 bg-[#FAFAFA] p-7"
            >
              <h3 className="font-sora text-2xl font-semibold">
                {challenge.title}
              </h3>
              <p className="mt-3 font-sora text-lg leading-relaxed text-[#404040]">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      <section className="space-y-8">
        <SectionHeading icon={<Target />}>
          Strategic <span className="text-primary">Approach.</span>
        </SectionHeading>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Developed a scalable marketing framework across the portfolio by
            aligning business priorities, brand positioning, digital
            experiences, product marketing, sales enablement, and creative
            production.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            Built two flagship corporate brands, created multiple product
            brands, and led the rebranding of three established organizations,
            including a 75-year-old company. The work included naming,
            positioning, messaging, identity systems, launch planning, and
            customer-facing implementation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {STRATEGIC_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="border border-neutral-300 bg-white p-7 shadow-[0_0_25px_0_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-sora text-2xl font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-3 font-sora text-lg leading-relaxed text-[#404040]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      <section className="space-y-8">
        <SectionHeading icon={<Idea />}>
          Digital Experience <span className="text-primary">& Ecommerce.</span>
        </SectionHeading>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Launched and managed seven ecommerce platforms supporting more than
            $3 million in annual ecommerce revenue and approximately 10,000
            products across multiple brands.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            Directed website strategy, responsive design, product discovery,
            merchandising, content development, product information, and ongoing
            ecommerce operations across business-to-business and
            direct-to-consumer environments.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <LightboxImage
            src="/eliteB.png"
            alt="Elite Abrasives responsive ecommerce website"
            width={1500}
            height={1311}
            gallery={INDUSTRIAL_GALLERY}
            index={4}
            className="block h-auto w-full object-contain"
          />

          <LightboxImage
            src="/global3B.png"
            alt="Global Cutting Tools responsive ecommerce website"
            width={1500}
            height={1311}
            gallery={INDUSTRIAL_GALLERY}
            index={5}
            className="block h-auto w-full object-contain"
          />
        </div>

        <LightboxImage
          src="/itc.png"
          alt="Industrial Tool Crib responsive ecommerce website"
          width={1500}
          height={1311}
          gallery={INDUSTRIAL_GALLERY}
          index={6}
          className="mx-auto block h-auto w-full max-w-3xl object-contain"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard metric="07" label="Ecommerce Platforms" highlight />
          <MetricCard
            metric="$3M+"
            label="Annual Ecommerce Revenue"
            highlight={false}
          />
          <MetricCard metric="10K" label="Products and SKUs" highlight />
          <MetricCard
            metric="50K+"
            label="Email Subscribers"
            highlight={false}
          />
        </div>
      </section>

      <Divider />

      <section className="space-y-8">
        <SectionHeading icon={<Product />}>
          Product <span className="text-primary">Marketing.</span>
        </SectionHeading>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Positioned, launched, merchandised, and promoted complex industrial
            products across distributor, ecommerce, and direct-to-consumer
            channels.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            Product marketing connected messaging, packaging, labels,
            photography, competitive differentiation, campaign creative, and
            promotional content into a consistent customer-facing system.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-7 md:grid-cols-[1.15fr_0.85fr]">
          <LightboxImage
            src="/Elite bB.png"
            alt="Elite Abrasives product packaging"
            width={1613}
            height={1421}
            gallery={INDUSTRIAL_GALLERY}
            index={8}
            className="mx-auto block max-h-[620px] w-auto max-w-full object-contain"
          />

          <div className="grid items-center gap-7 sm:grid-cols-2 md:grid-cols-1">
            <LightboxImage
              src="/Elite IMG_20190607_082339134.png"
              alt="Elite Abrasives packaged industrial product"
              width={1062}
              height={1107}
              gallery={INDUSTRIAL_GALLERY}
              index={7}
              className="mx-auto block max-h-[285px] w-auto max-w-full object-contain"
            />

            <LightboxImage
              src="/Elite Label 4.5_FD_CG_T27_SD.png"
              alt="Elite Abrasives product label system"
              width={1199}
              height={1193}
              gallery={INDUSTRIAL_GALLERY}
              index={9}
              className="mx-auto block max-h-[285px] w-auto max-w-full object-contain"
            />
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <LightboxImage
            src="/Elite -24-web banner.jpg"
            alt="Elite Abrasives product marketing campaign banner"
            width={1600}
            height={323}
            gallery={INDUSTRIAL_GALLERY}
            index={10}
            className="block h-auto w-full object-contain"
          />

          <LightboxImage
            src="/Elite -web banner.jpg"
            alt="Elite Abrasives product promotion banner"
            width={1600}
            height={323}
            gallery={INDUSTRIAL_GALLERY}
            index={11}
            className="block h-auto w-full object-contain"
          />
        </div>

        <LightboxImage
          src="/LVA All 2018 LVA -web banner.jpg"
          alt="Lehigh Valley Abrasives integrated product campaign graphics"
          width={2000}
          height={667}
          gallery={INDUSTRIAL_GALLERY}
          index={12}
          className="mx-auto block h-auto w-full max-w-5xl object-contain"
        />
      </section>

      <Divider />

      <section className="space-y-8">
        <SectionHeading icon={<Business />}>
          Sales <span className="text-primary">Enablement.</span>
        </SectionHeading>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Developed tools that helped sales teams, distributors, and customers
            understand product options, compare technical information, and move
            through complex industrial purchasing decisions.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            Major initiatives included leading the development of a 276-page
            catalog supported by line cards, inserts, product literature,
            promotional sheets, and technical build documentation.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <LightboxImage
            src="/elite coverB.png"
            alt="Elite Abrasives 276-page product catalog cover"
            width={1500}
            height={971}
            gallery={INDUSTRIAL_GALLERY}
            index={13}
            className="block h-auto w-full object-contain"
          />

          <LightboxImage
            src="/Elite catlog spread2B.png"
            alt="Elite Abrasives product catalog spread"
            width={1500}
            height={971}
            gallery={INDUSTRIAL_GALLERY}
            index={14}
            className="block h-auto w-full object-contain"
          />
        </div>

        <div className="grid items-center gap-7 md:grid-cols-[1fr_1fr_1.15fr]">
          <LightboxImage
            src="/Elite line cardB.png"
            alt="Elite Abrasives product line card"
            width={1500}
            height={971}
            gallery={INDUSTRIAL_GALLERY}
            index={15}
            className="mx-auto block max-h-[260px] w-auto max-w-full object-contain"
          />

          <LightboxImage
            src="/Global vortex4 coverB.png"
            alt="Global Cutting Tools Vortex4 product literature"
            width={1500}
            height={971}
            gallery={INDUSTRIAL_GALLERY}
            index={16}
            className="mx-auto block max-h-[260px] w-auto max-w-full object-contain"
          />

          <LightboxImage
            src="/LVA insert 3.png"
            alt="Lehigh Valley Abrasives product insert"
            width={1558}
            height={803}
            gallery={INDUSTRIAL_GALLERY}
            index={17}
            className="mx-auto block max-h-[260px] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <LightboxImage
            src="/conical build ass.jpg"
            alt="Conical Cutting Tools technical build assembly documentation"
            width={1275}
            height={1650}
            gallery={INDUSTRIAL_GALLERY}
            index={18}
            className="mx-auto block h-auto max-h-[560px] w-full object-contain md:h-[520px]"
          />

          <LightboxImage
            src="/Elite Sales-Promotion.jpg"
            alt="Elite Abrasives sales promotion sheet"
            width={1500}
            height={1500}
            gallery={INDUSTRIAL_GALLERY}
            index={19}
            className="mx-auto block h-auto max-h-[560px] w-full object-contain md:h-[520px]"
          />
        </div>
      </section>

      <Divider />

      <section className="space-y-8">
        <SectionHeading icon={<Idea />}>
          Integrated Marketing <span className="text-primary">Execution.</span>
        </SectionHeading>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Extended brand and product strategies across digital and physical
            customer touchpoints, including email, trade shows, campaign assets,
            environmental graphics, and distributor communications.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            Directed designers, developers, freelancers, agencies,
            photographers, printers, and domestic and international vendors to
            deliver consistent work across multiple companies, channels, and
            business units.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex min-h-[520px] items-center justify-center">
            <LightboxImage
              src="/Elite trade.png"
              alt="Elite Abrasives trade show and environmental brand execution"
              width={1440}
              height={880}
              gallery={INDUSTRIAL_GALLERY}
              index={20}
              className="block h-auto w-full max-w-[700px] object-contain"
            />
          </div>

          <div className="flex min-h-[520px] items-center justify-center">
            <LightboxImage
              src="/LVA_Email_Selection_082715_Offline_03.jpg"
              alt="Lehigh Valley Abrasives email marketing campaign"
              width={620}
              height={753}
              gallery={INDUSTRIAL_GALLERY}
              index={21}
              className="block h-auto max-h-[520px] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

      <section className="space-y-8 font-sora">
        <SectionHeading icon={<Target />}>
          Outcomes<span className="text-primary"> & Impact.</span>
        </SectionHeading>

        <p className="font-sora text-xl leading-relaxed">
          Built a scalable brand and marketing foundation across a complex
          portfolio of industrial businesses. The work supported company growth,
          acquisition integration, ecommerce revenue, product marketing,
          customer communications, and the ongoing needs of executive leadership
          and sales teams.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((item, index) => (
            <MetricCard
              key={item.label}
              metric={item.metric}
              label={item.label}
              highlight={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}