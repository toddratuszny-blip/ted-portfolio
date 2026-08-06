import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Target from "../Icons/target";
import Laptop from "../Icons/laptop";
import Sales from "../Icons/sales";
import Mic from "../Icons/mic";
import Sparcles from "../Icons/sparkles";
import LightboxImage from "./lightboximage";

const BRAND_STRATEGY_IMAGES = [
  "/brandstrategy/SPR-Web.png",
  "/brandstrategy/image (1) copy.jpg",
  "/brandstrategy/image (2).jpg",
  "/brandstrategy/image (3).png",
  "/brandstrategy/image (4).png",
  "/brandstrategy/image (5).png",
  "/brandstrategy/image (6).png",
  "/brandstrategy/image (8)B..png",
  "/brandstrategy/image (7)B.png",
  "/brandstrategy/image (9)B.png",
  "/brandstrategy/image (10).png",
  "/brandstrategy/SPR_Campaign_CommercialTrifold_01.png",
  "/brandstrategy/SPR_Campaign_CommercialTrifold_02.png",
  "/brandstrategy/image (13)B.png",
  "/brandstrategy/image (14)B.png",
  "/brandstrategy/image (15)B.png",
  "/brandstrategy/image (16)B.png",
  "/brandstrategy/image (17).png",
];

const ROLES = [
  "Brand Strategy",
  "Creative Direction",
  "Digital Marketing",
  "Sales Enablement",
  "Website Development",
  "Content Development",
  "Vendor Management",
];

function RolePill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-2.5 shadow-[0_0_25px_0_rgba(0,0,0,0.12)] md:px-4.5">
      <p className="font-sora text-base md:text-lg">{label}</p>
    </div>
  );
}

function MobileDisclosure({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group md:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between border-y border-neutral-300 py-3 font-sora text-base font-semibold">
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

export default function BrandStrategySection() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" /> */}

      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <OverView />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Overview.
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Led brand strategy, creative direction, and digital marketing for
          Summit Point Roofing, overseeing a comprehensive modernization of the
          company&apos;s brand, website, marketing materials, and customer
          communications. The work unified four divisions under a cohesive
          visual system while supporting lead generation, sales enablement,
          recruitment, and long-term brand growth.
        </p>
      </section>

      <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Setting />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            My<span className="text-primary"> Role.</span>
          </h2>
        </div>

        <MobileDisclosure label="View roles">
          <div className="flex flex-wrap gap-3">
            {ROLES.map((role) => (
              <RolePill key={role} label={role} />
            ))}
          </div>
        </MobileDisclosure>

        <div className="hidden flex-wrap gap-3 md:flex md:gap-4">
          {ROLES.map((role) => (
            <RolePill key={role} label={role} />
          ))}
        </div>
      </section>

      <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" />

      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Laptop />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Digital<span className="text-primary"> Experience.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Redesigned and expanded the company&apos;s digital presence through a
          modern, conversion-focused website experience. The work included
          responsive design, service-line architecture, content development,
          photography integration, lead-generation pathways, and ongoing support
          for digital marketing initiatives.
        </p>

        <div className="grid gap-4 md:gap-10.5">
          <div className="w-full overflow-hidden border border-[#CFCFCF] bg-white">
            <LightboxImage
              src="/brandstrategy/SPR-Web.png"
              alt="Summit Point Roofing website homepage and digital experience"
              width={1200}
              height={600}
              gallery={BRAND_STRATEGY_IMAGES}
              index={0}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-10.5">
            <LightboxImage
              src="/brandstrategy/image (1) copy.jpg"
              alt="Summit Point Roofing website content and service pages"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={1}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (2).jpg"
              alt="Summit Point Roofing website project and service content"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={2}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-3 md:gap-8.5">
            <LightboxImage
              src="/brandstrategy/image (3).png"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={3}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (4).png"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={4}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (5).png"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={5}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />
          </div>

          <div className="w-full">
            <LightboxImage
              src="/brandstrategy/image (6).png"
              alt="Summit Point Roofing blog and content marketing experience"
              width={1512}
              height={600}
              gallery={BRAND_STRATEGY_IMAGES}
              index={6}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5 font-sora">
          <Sales />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Sales<span className="text-primary"> Enablement.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Developed practical sales tools that helped representatives
          communicate value more effectively throughout the customer journey.
          The work included proposals, inspection reports, leave-behinds,
          presentations, educational materials, and customer-facing
          documentation.
        </p>

        <div className="grid items-stretch gap-4 md:grid-cols-3 md:gap-8">
          <LightboxImage
            src="/brandstrategy/image (8)B..png"
            alt="Summit Point Roofing sales proposal and inspection materials"
            width={651}
            height={842}
            gallery={BRAND_STRATEGY_IMAGES}
            index={7}
            className="block h-auto w-full border border-[#CFCFCF] object-contain"
          />

          <LightboxImage
            src="/brandstrategy/image (7)B.png"
            alt="Summit Point Roofing commercial roofing sales collateral"
            width={651}
            height={400}
            gallery={BRAND_STRATEGY_IMAGES}
            index={8}
            className="block h-auto w-full border border-[#CFCFCF] object-contain md:h-full md:object-cover"
          />

          <LightboxImage
            src="/brandstrategy/image (9)B.png"
            alt="Summit Point Roofing customer education and sales material"
            width={651}
            height={400}
            gallery={BRAND_STRATEGY_IMAGES}
            index={9}
            className="block h-auto w-full border border-[#CFCFCF] object-contain md:h-full md:object-cover"
          />
        </div>
      </section>

      <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5 font-sora">
          <Mic />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Integrated
            <span className="text-primary"> Marketing Campaigns.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Planned and executed coordinated marketing campaigns spanning social
          media, email, direct mail, seasonal promotions, customer education,
          recruitment, referral marketing, and ongoing brand-awareness
          initiatives.
        </p>

        <div className="space-y-4 md:space-y-8">
          <div className="w-full">
            <LightboxImage
              src="/brandstrategy/image (10).png"
              alt="Summit Point Roofing integrated brand campaign"
              width={651}
              height={842}
              gallery={BRAND_STRATEGY_IMAGES}
              index={10}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="my-12 bg-[#F5F7F8] px-4 py-10 md:my-16 md:px-10 md:py-14">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-sora text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Featured Brand Video
              </p>

              <h3 className="mt-3 font-sora text-2xl font-semibold md:text-3xl">
                Bringing the Summit Point story to life.
              </h3>

              <p className="mx-auto mt-3 max-w-2xl font-sora text-base leading-relaxed text-neutral-600 md:text-lg">
                A company story video developed to strengthen brand credibility,
                showcase the team, and support commercial marketing efforts.
              </p>
            </div>

            <div className="mx-auto mt-8 w-full max-w-3xl">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/hbRHX3w_hxM"
                  title="Summit Point Roofing promotional video"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            <LightboxImage
              src="/brandstrategy/SPR_Campaign_CommercialTrifold_01.png"
              alt="Summit Point Roofing print and digital marketing campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={11}
              className="block h-auto w-full object-contain"
            />

            <LightboxImage
              src="/brandstrategy/SPR_Campaign_CommercialTrifold_02.png"
              alt="Summit Point Roofing social media campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={12}
              className="block h-auto w-full object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (13)B.png"
              alt="Summit Point Roofing customer marketing campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={13}
              className="block h-auto w-full border border-[#CFCFCF] bg-white object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (14)B.png"
              alt="Summit Point Roofing referral and promotional campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={14}
              className="block h-auto w-full border border-[#CFCFCF] bg-white object-contain"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            <LightboxImage
              src="/brandstrategy/image (15)B.png"
              alt="Summit Point Roofing recruitment campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={15}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (16)B.png"
              alt="Summit Point Roofing customer acquisition campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={16}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5 font-sora">
          <Sparcles />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Brand Systems
            <span className="text-primary"> & Marketing Assets.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Produced branded stationery, presentation materials, signage, print
          collateral, and supporting assets that reinforced a consistent
          customer experience across physical and digital touchpoints.
        </p>

        <div className="w-full">
          <LightboxImage
            src="/brandstrategy/image (17).png"
            alt="Summit Point Roofing stationery, signage, and branded marketing assets"
            width={651}
            height={842}
            gallery={BRAND_STRATEGY_IMAGES}
            index={17}
            className="block h-auto w-full border border-[#CFCFCF] object-contain"
          />
        </div>
      </section>

      <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Target />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Outcomes<span className="text-primary"> & Impact.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          The work established a scalable marketing foundation for a growing
          organization, improved consistency across four operating divisions,
          and strengthened customer communications, digital lead generation, and
          internal sales support.
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-8">
          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold text-primary md:text-[40px]">
              $30M
            </p>
            <p className="text-sm text-[#404040] md:text-[24px]">Organization</p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold md:text-[40px]">04</p>
            <p className="text-sm text-[#404040] md:text-[24px]">Divisions</p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold text-primary md:text-[40px]">
              03
            </p>
            <p className="text-sm text-[#404040] md:text-[24px]">Locations</p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold md:text-[40px]">10+</p>
            <p className="text-sm text-[#404040] md:text-[24px]">Service Lines</p>
          </div>
        </div>
      </section>
    </div>
  );
}