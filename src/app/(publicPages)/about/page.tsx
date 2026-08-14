import Image from "next/image";
import About from "../../components/about";
import AboutUsHeader from "../../components/aboutusheader";
import Talk from "../../components/talk";

const capabilities = [
  {
    title: "Brand Strategy & Positioning",
    description:
      "Brand architecture, positioning, messaging, identity systems, rebrands, acquisition integration, and customer-facing implementation.",
  },
  {
    title: "Creative Direction",
    description:
      "Campaign concepts, visual systems, content development, production oversight, and direction of internal and external creative resources.",
  },
  {
    title: "Integrated Marketing",
    description:
      "Cross-channel campaigns spanning digital, email, social, print, retail, promotions, customer communications, and sales support.",
  },
  {
    title: "Digital & Ecommerce",
    description:
      "Website strategy, ecommerce experiences, merchandising, content systems, product presentation, and customer journeys.",
  },
  {
    title: "Product Marketing & Sales Enablement",
    description:
      "Product launches, packaging, positioning, technical content, catalogs, pitchbooks, educational materials, and sales tools.",
  },
  {
    title: "Marketing Leadership & Operations",
    description:
      "Team leadership, cross-functional collaboration, agency and vendor management, marketing systems, and coordination across creative, digital, sales, and business stakeholders.",
  },
];

export default function Aboutpage() {
  return (
    <div>
      <AboutUsHeader />

      <About
        imgSrcOne="/LTG Mask.png"
        badgeText="About Me"
        heading="Creative leadership grounded in practical execution."
        description={
          <>
            <p>
              My career began in design and art direction and expanded into
              broader marketing leadership, giving me a practical understanding
              of how creative decisions connect to positioning, customer
              experience, sales, and business objectives.
            </p>

            <p className="mt-6">
              That perspective helps me see both the creative problem and the
              larger business problem—then build work that is cohesive, useful,
              and executable.
            </p>
          </>
        }
      />

      {/* Capabilities */}
      <section className="bg-[#242424] px-4 pb-12 pt-3 md:pb-20 md:pt-8 lg:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-white/15 pt-10 md:pt-16">
            <div className="mb-8 max-w-4xl md:mb-10">
              <div className="mb-4 flex w-fit items-center justify-center rounded-full border border-primary bg-[#B31F3C66] px-3">
                <p className="text-[16px] text-white md:text-[18px]">
                  Capabilities
                </p>
              </div>

              <h2 className="mb-4 font-sora text-3xl font-semibold leading-[1.15] text-white md:text-4xl">
                Creative depth. Marketing breadth.
              </h2>

              {/* Mobile Intro */}
              <p className="text-base font-light leading-[1.55] text-white/80 md:hidden">
                Experience spanning brand strategy, creative direction,
                integrated marketing, digital and ecommerce, product marketing,
                and sales enablement across B2B, B2C, and D2C organizations.
              </p>

              {/* Tablet / Desktop Intro */}
              <p className="hidden text-base font-light leading-[1.6] text-white/80 md:block md:text-xl">
                My experience spans brand strategy, creative direction,
                integrated marketing, digital and ecommerce, product marketing,
                sales enablement, and marketing operations—giving me a broader
                understanding of how creative decisions connect across the
                customer experience and the business.
              </p>
            </div>

            {/* Mobile Accordions */}
            <div className="space-y-2 md:hidden">
              {capabilities.map((capability) => (
                <details
                  key={capability.title}
                  className="group rounded-lg border border-white/10 bg-white/[0.04]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="font-sora text-[17px] font-semibold leading-tight text-white">
                      {capability.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-xl font-light leading-none text-white/70 transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="px-4 pb-4">
                    <p className="border-t border-white/10 pt-3 text-[15px] font-light leading-[1.55] text-white/70">
                      {capability.description}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Tablet / Desktop Cards */}
            <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="mb-3 font-sora text-xl font-semibold leading-tight text-white">
                    {capability.title}
                  </h3>

                  <p className="text-base font-light leading-[1.55] text-white/70">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Career Breadth */}
            <div className="mt-8 max-w-5xl border-l-2 border-primary pl-5 md:mt-12 md:pl-6">
              {/* Mobile */}
              <p className="text-base font-light leading-[1.6] text-white/80 md:hidden">
                <span className="font-semibold text-white">15+ years</span> across
                agency and in-house environments, spanning B2B, B2C, and D2C
                organizations—from multi-brand portfolios and consumer ecommerce
                to marketing for a $30M multi-division organization.
              </p>

              {/* Tablet / Desktop */}
              <p className="hidden font-sora text-lg font-normal leading-[1.55] text-white md:block md:text-xl">
                15+ years across agency and in-house environments, spanning B2B,
                B2C, and D2C organizations—from multi-brand portfolios and
                consumer ecommerce to marketing for a $30M multi-division
                organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <Talk />

        <Image
          alt=""
          src="/letsTalkBg.png"
          width={2000}
          height={2000}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}