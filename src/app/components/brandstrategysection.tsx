import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Target from "../Icons/target";
import Laptop from "../Icons/laptop";
import Sales from "../Icons/sales";
import Mic from "../Icons/mic";
import Sparcles from "../Icons/sparkles";
import LightboxImage from "./lightboximage";

const BRAND_STRATEGY_IMAGES = [
  "/brandstrategy/SPR-Web.jpg",
  "/brandstrategy/image (1) copy.jpg",
  "/brandstrategy/image (2).jpg",
  "/brandstrategy/image (3).jpg",
  "/brandstrategy/image (4).jpg",
  "/brandstrategy/image (5).jpg",
  "/brandstrategy/image (6).jpg",
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
  "Creative Direction",
  "Brand Strategy",
  "Integrated Campaigns",
  "Creative Operations",
  "Sales Enablement",
  "Website & Content Strategy",
  "Agency & Vendor Leadership",
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
      {/* Overview */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <OverView />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Overview.
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Led creative direction, brand strategy, and integrated marketing for
          Summit Point Roofing during a period of significant company expansion.
          The work modernized the brand, website, marketing materials, and
          customer communications while creating a more cohesive system across
          four divisions, three locations, and 10+ service lines.
        </p>
      </section>

      <div className="my-12 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-14" />

      {/* My Role */}
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

      {/* Website & Content Strategy */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Laptop />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Website<span className="text-primary"> & Content Strategy.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Reshaped and expanded the company&apos;s digital presence through a
          modern website and broader content system. The work included
          responsive design, service-line architecture, photography integration,
          lead-generation pathways, and 50+ service, landing, location, and
          educational pages supporting geographic and service-line growth.
        </p>

        {/* Mobile curated view */}
        <div className="grid gap-5 md:hidden">
          <div className="w-full overflow-hidden border border-[#CFCFCF] bg-white">
            <LightboxImage
              src="/brandstrategy/SPR-Web.jpg"
              alt="Summit Point Roofing website homepage and digital experience"
              width={1200}
              height={600}
              gallery={BRAND_STRATEGY_IMAGES}
              index={0}
              className="block h-auto w-full object-contain"
            />
          </div>

          <LightboxImage
            src="/brandstrategy/image (1) copy.jpg"
            alt="Summit Point Roofing website content and service pages"
            width={1512}
            height={2064}
            gallery={BRAND_STRATEGY_IMAGES}
            index={1}
            className="block h-auto w-full border border-[#CFCFCF] object-contain"
          />

          <MobileDisclosure label="View more website work">
            <div className="grid gap-5">
              <LightboxImage
                src="/brandstrategy/image (2).jpg"
                alt="Summit Point Roofing website project and service content"
                width={1512}
                height={2064}
                gallery={BRAND_STRATEGY_IMAGES}
                index={2}
                className="block h-auto w-full border border-[#CFCFCF] object-contain"
              />

              <div className="grid grid-cols-2 gap-4">
                <LightboxImage
                  src="/brandstrategy/image (3).jpg"
                  alt="Summit Point Roofing digital content example"
                  width={1512}
                  height={2064}
                  gallery={BRAND_STRATEGY_IMAGES}
                  index={3}
                  className="block h-auto w-full border border-[#CFCFCF] object-contain"
                />

                <LightboxImage
                  src="/brandstrategy/image (4).jpg"
                  alt="Summit Point Roofing digital content example"
                  width={1512}
                  height={2064}
                  gallery={BRAND_STRATEGY_IMAGES}
                  index={4}
                  className="block h-auto w-full border border-[#CFCFCF] object-contain"
                />
              </div>

              <LightboxImage
                src="/brandstrategy/image (5).jpg"
                alt="Summit Point Roofing digital content example"
                width={1512}
                height={2064}
                gallery={BRAND_STRATEGY_IMAGES}
                index={5}
                className="block h-auto w-full border border-[#CFCFCF] object-contain"
              />

              <LightboxImage
                src="/brandstrategy/image (6).jpg"
                alt="Summit Point Roofing blog and content marketing experience"
                width={1512}
                height={600}
                gallery={BRAND_STRATEGY_IMAGES}
                index={6}
                className="block h-auto w-full border border-[#CFCFCF] object-contain"
              />
            </div>
          </MobileDisclosure>
        </div>

        {/* Desktop view — unchanged */}
        <div className="hidden gap-4 md:grid md:gap-10.5">
          <div className="w-full overflow-hidden border border-[#CFCFCF] bg-white">
            <LightboxImage
              src="/brandstrategy/SPR-Web.jpg"
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

          <div className="grid gap-4 md:grid-cols-3 md:gap-8.5">
            <LightboxImage
              src="/brandstrategy/image (3).jpg"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={3}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (4).jpg"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={4}
              className="block h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (5).jpg"
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
              src="/brandstrategy/image (6).jpg"
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

      {/* Sales Enablement */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5 font-sora">
          <Sales />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Sales<span className="text-primary"> Enablement.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Developed practical sales tools for a nine-person sales team,
          translating brand positioning and service expertise into consistent
          customer-facing communications. The work included pitchbooks,
          proposals, inspection reports, leave-behinds, presentations,
          educational materials, referral programs, and supporting collateral.
        </p>

        {/* Mobile curated view */}
        <div className="grid gap-5 md:hidden">
          <LightboxImage
            src="/brandstrategy/image (8)B..png"
            alt="Summit Point Roofing sales proposal and inspection materials"
            width={651}
            height={842}
            gallery={BRAND_STRATEGY_IMAGES}
            index={7}
            className="block h-auto w-full border border-[#CFCFCF] object-contain"
          />

          <MobileDisclosure label="View more sales materials">
            <div className="grid gap-5">
              <LightboxImage
                src="/brandstrategy/image (7)B.png"
                alt="Summit Point Roofing commercial roofing sales collateral"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={8}
                className="block h-auto w-full border border-[#CFCFCF] object-contain"
              />

              <LightboxImage
                src="/brandstrategy/image (9)B.png"
                alt="Summit Point Roofing customer education and sales material"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={9}
                className="block h-auto w-full border border-[#CFCFCF] object-contain"
              />
            </div>
          </MobileDisclosure>
        </div>

        {/* Desktop view — unchanged */}
        <div className="hidden items-stretch gap-4 md:grid md:grid-cols-3 md:gap-8">
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

      {/* Integrated Campaigns */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5 font-sora">
          <Mic />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Integrated
            <span className="text-primary"> Campaigns.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Developed coordinated creative across direct mail, email, customer
          education, seasonal promotions, recruitment, referral programs, sales
          communications, and ongoing brand-awareness initiatives. The work
          connected campaign execution with the broader brand system rather than
          treating individual channels in isolation.
        </p>

        {/* Primary campaign visual */}
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

        {/* Featured video — visible everywhere */}
        <div className="my-8 bg-[#F5F7F8] px-4 py-8 md:my-16 md:px-10 md:py-14">
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

        {/* Mobile secondary campaigns */}
        <div className="md:hidden">
          <MobileDisclosure label="View more campaign work">
            <div className="grid gap-5">
              <div className="grid grid-cols-2 gap-4">
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
              </div>

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

              <div className="grid grid-cols-2 gap-4">
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
          </MobileDisclosure>
        </div>

        {/* Desktop secondary campaigns — unchanged */}
        <div className="hidden space-y-8 md:block">
          <div className="grid gap-8 md:grid-cols-2">
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

          <div className="grid gap-8 md:grid-cols-2">
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

      {/* Brand Systems & Creative Assets */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5 font-sora">
          <Sparcles />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Brand Systems
            <span className="text-primary"> & Creative Assets.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          Built and maintained a cohesive visual system across stationery,
          presentations, signage, print collateral, customer communications,
          and supporting brand assets—creating consistency across physical and
          digital touchpoints.
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

      {/* Outcomes & Impact */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Target />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Outcomes<span className="text-primary"> & Impact.</span>
          </h2>
        </div>

        <p className="font-sora text-xl leading-relaxed">
          The work established a scalable creative and marketing foundation
          during a period of significant company expansion, strengthened brand
          consistency across four divisions, expanded the company&apos;s digital
          footprint, and equipped sales teams with a more cohesive system of
          customer-facing tools.
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-8">
          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold text-primary md:text-[40px]">
              50+
            </p>

            <p className="text-sm text-[#404040] md:text-[24px]">
              Website Pages
            </p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold md:text-[40px]">04</p>

            <p className="text-sm text-[#404040] md:text-[24px]">
              Divisions
            </p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold text-primary md:text-[40px]">
              03
            </p>

            <p className="text-sm text-[#404040] md:text-[24px]">
              Locations
            </p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-4 md:p-7.5">
            <p className="text-2xl font-semibold md:text-[40px]">10+</p>

            <p className="text-sm text-[#404040] md:text-[24px]">
              Service Lines
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}