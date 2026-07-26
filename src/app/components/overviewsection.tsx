import Business from "../Icons/business";
import Idea from "../Icons/idea";
import OverView from "../Icons/overview";
import Product from "../Icons/product";
import Setting from "../Icons/setting";
import Target from "../Icons/target";
import LightboxImage from "./lightboximage";

const INDUSTRIAL_OVERVIEW_IMAGES = [
  "/product.jpg",
  "/idea.jpg",
  "/business.jpg",
  "/strategy.jpg",
  "/arbasilver.png",
  "/sales.png",
];

const ROLES = [
  "Brand Strategy",
  "Creative Direction",
  "Brand Development",
  "Product Marketing",
  "Ecommerce",
  "Digital Marketing",
  "Acquisition Integration",
  "Sales Enablement",
  "Content Development",
  "Team Leadership",
  "Marketing Operations",
  "Vendor Management",
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
  {
    metric: "08",
    label: "Companies Supported",
  },
  {
    metric: "03",
    label: "Acquisitions Integrated",
  },
  {
    metric: "07",
    label: "Ecommerce Platforms",
  },
  {
    metric: "$3M+",
    label: "Annual Ecommerce Revenue",
  },
  {
    metric: "10K",
    label: "Products and SKUs",
  },
  {
    metric: "276",
    label: "Page Product Catalog",
  },
  {
    metric: "50K+",
    label: "Email Subscribers",
  },
  {
    metric: "36.4%",
    label: "Highest Email Open Rate",
  },
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

export default function OverViewSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <Divider />

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
            Over eight years, I partnered directly with executive leadership to
            build and grow an ecosystem of eight manufacturing, distribution,
            and ecommerce companies.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            My work focused on developing distinct corporate and product brands,
            modernizing established organizations, integrating acquisitions,
            and creating scalable marketing systems that supported both
            business-to-business and direct-to-consumer growth.
          </p>
        </div>
      </section>

      <Divider />

      {/* My Role */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Setting />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            My<span className="text-primary"> Role.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Served as the primary marketing and creative resource for executive
          leadership while directing brand strategy, creative services,
          ecommerce, product marketing, content, acquisition integration, and
          customer-facing communications across multiple businesses.
        </p>

        <div className="flex flex-wrap gap-4">
          {ROLES.map((role) => (
            <RolePill key={role} label={role} />
          ))}
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

      {/* Strategic Approach */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5">
          <Target />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Strategic <span className="text-primary">Approach.</span>
          </h2>
        </div>

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

      {/* Digital and Ecommerce */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Idea />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Digital <span className="text-primary">& Ecommerce.</span>
          </h2>
        </div>

        <div className="space-y-10">
          <div className="space-y-5">
            <p className="font-sora text-xl leading-relaxed">
              Launched and managed seven ecommerce platforms supporting more
              than $3 million in annual ecommerce revenue and approximately
              10,000 products across multiple brands.
            </p>

            <p className="font-sora text-xl leading-relaxed">
              Directed website strategy, responsive design, product
              merchandising, content development, email marketing, digital
              campaigns, product information, and ongoing ecommerce support.
            </p>
          </div>

          <LightboxImage
            src="/product.jpg"
            alt="Responsive industrial websites and ecommerce experiences"
            width={1232}
            height={600}
            gallery={INDUSTRIAL_OVERVIEW_IMAGES}
            index={0}
            className="block h-auto w-full object-contain"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              metric="07"
              label="Ecommerce Platforms"
              highlight
            />

            <MetricCard
              metric="$3M+"
              label="Annual Ecommerce Revenue"
              highlight={false}
            />

            <MetricCard
              metric="10K"
              label="Products and SKUs"
              highlight
            />

            <MetricCard
              metric="50K+"
              label="Email Subscribers"
              highlight={false}
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* Product Marketing */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5">
          <Product />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Product Marketing
            <span className="text-primary"> Campaigns.</span>
          </h2>
        </div>

        <div className="space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            Created integrated campaigns supporting product launches,
            positioning, customer education, promotions, competitive
            differentiation, and ongoing demand across industrial and
            direct-to-consumer brands.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            Work included product messaging, advertising, email campaigns,
            landing pages, packaging, photography, video, social media, and
            promotional content tailored to different audiences and buying
            environments.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <LightboxImage
            src="/idea.jpg"
            alt="Industrial flap-disc product marketing campaign"
            width={1232}
            height={600}
            gallery={INDUSTRIAL_OVERVIEW_IMAGES}
            index={1}
            className="block h-auto w-full object-contain"
          />

          <LightboxImage
            src="/business.jpg"
            alt="Competitive industrial abrasive product campaign"
            width={1232}
            height={600}
            gallery={INDUSTRIAL_OVERVIEW_IMAGES}
            index={2}
            className="block h-auto w-full object-contain"
          />
        </div>
      </section>

      <Divider />

      {/* Sales Enablement */}
      <section className="space-y-8 font-sora">
        <div>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Sales <span className="text-primary">Enablement.</span>
          </h2>

          <div className="mt-5 space-y-5">
            <p className="text-xl leading-relaxed">
              Developed catalogs, line cards, product guides, technical
              literature, presentations, and customer-facing tools supporting
              distributors, sales teams, and buyers throughout the purchasing
              process.
            </p>

            <p className="text-xl leading-relaxed">
              Major initiatives included leading the development of a 276-page
              product catalog designed to improve product discovery, customer
              education, and sales support across a large industrial product
              portfolio.
            </p>
          </div>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <LightboxImage
            src="/strategy.jpg"
            alt="Industrial product catalog and sales literature"
            width={1232}
            height={600}
            gallery={INDUSTRIAL_OVERVIEW_IMAGES}
            index={3}
            className="block h-auto w-full object-contain"
          />

          <LightboxImage
            src="/arbasilver.png"
            alt="Industrial sales enablement and customer-facing materials"
            width={1232}
            height={600}
            gallery={INDUSTRIAL_OVERVIEW_IMAGES}
            index={4}
            className="block h-auto w-full object-contain"
          />
        </div>
      </section>

      <Divider />

      {/* Brand Systems */}
      <section className="grid items-center gap-12 font-sora md:grid-cols-2">
        <LightboxImage
          src="/sales.png"
          alt="Industrial brand systems, packaging, labels, and marketing assets"
          width={1232}
          height={600}
          gallery={INDUSTRIAL_OVERVIEW_IMAGES}
          index={5}
          className="block h-auto w-full object-contain"
        />

        <div className="space-y-5">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Brand <span className="text-primary">Systems.</span>
          </h2>

          <p className="text-xl leading-relaxed">
            Created identity systems, packaging, labels, stationery,
            advertising, trade show materials, environmental graphics, and
            supporting brand assets that established a more consistent
            customer experience.
          </p>

          <p className="text-xl leading-relaxed">
            Managed designers, developers, freelancers, agencies,
            photographers, printers, and domestic and international vendors
            supporting multiple companies and business units.
          </p>
        </div>
      </section>

      <Divider />

      {/* Outcomes */}
      <section className="space-y-8 font-sora">
        <div className="flex items-center gap-2.5">
          <Target />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Outcomes<span className="text-primary"> & Impact.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Built a scalable brand and marketing foundation across a complex
          portfolio of industrial businesses. The work supported company
          growth, acquisition integration, ecommerce revenue, product
          marketing, customer communications, and the ongoing needs of
          executive leadership and sales teams.
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