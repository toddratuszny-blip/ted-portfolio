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
  "/brandstrategy/image (1).png",
  "/brandstrategy/image (2).png",
  "/brandstrategy/image (3).png",
  "/brandstrategy/image (4).png",
  "/brandstrategy/image (5).png",
  "/brandstrategy/image (6).png",
  "/brandstrategy/image (7).png",
  "/brandstrategy/image (8).png",
  "/brandstrategy/image (9).png",
  "/brandstrategy/image (10).png",
  "/brandstrategy/image (11).png",
  "/brandstrategy/image (12).png",
  "/brandstrategy/image (13).png",
  "/brandstrategy/image (14).png",
  "/brandstrategy/image (15).png",
  "/brandstrategy/image (16).png",
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
    <div className="flex items-center justify-center whitespace-nowrap rounded-full bg-white px-4.5 py-2.5 shadow-[0_0_25px_0_rgba(0,0,0,0.12)]">
      <p className="font-sora text-lg">{label}</p>
    </div>
  );
}

export default function BrandStrategySection() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" /> */}

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

      <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Setting />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            My<span className="text-primary"> Role.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {ROLES.map((role) => (
            <RolePill key={role} label={role} />
          ))}
        </div>
      </section>

      <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />

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

        <div className="grid gap-10.5">
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

          <div className="grid gap-10.5 md:grid-cols-2">
            <LightboxImage
              src="/brandstrategy/image (1).png"
              alt="Summit Point Roofing website content and service pages"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={1}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (2).png"
              alt="Summit Point Roofing website project and service content"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={2}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
            />
          </div>

          <div className="grid gap-8.5 md:grid-cols-3">
            <LightboxImage
              src="/brandstrategy/image (3).png"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={3}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (4).png"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={4}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (5).png"
              alt="Summit Point Roofing digital content example"
              width={1512}
              height={2064}
              gallery={BRAND_STRATEGY_IMAGES}
              index={5}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
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

      <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />

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

        <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-8">
          <LightboxImage
            src="/brandstrategy/image (7).png"
            alt="Summit Point Roofing sales proposal and inspection materials"
            width={651}
            height={842}
            gallery={BRAND_STRATEGY_IMAGES}
            index={7}
            className="h-auto w-full border border-[#CFCFCF] object-contain"
          />

          <LightboxImage
            src="/brandstrategy/image (8).png"
            alt="Summit Point Roofing commercial roofing sales collateral"
            width={651}
            height={400}
            gallery={BRAND_STRATEGY_IMAGES}
            index={8}
            className="h-full w-full border border-[#CFCFCF] object-cover"
          />

          <LightboxImage
            src="/brandstrategy/image (9).png"
            alt="Summit Point Roofing customer education and sales material"
            width={651}
            height={400}
            gallery={BRAND_STRATEGY_IMAGES}
            index={9}
            className="h-full w-full border border-[#CFCFCF] object-cover"
          />
        </div>
      </section>

      <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />

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

        <div className="space-y-8">
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

          <div className="mx-auto w-full max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-[0_0_25px_0_rgba(0,0,0,0.1)]">
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

          <div className="grid gap-8 md:grid-cols-2">
            <LightboxImage
              src="/brandstrategy/image (11).png"
              alt="Summit Point Roofing print and digital marketing campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={11}
              className="h-auto w-full object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (12).png"
              alt="Summit Point Roofing social media campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={12}
              className="h-auto w-full object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (13).png"
              alt="Summit Point Roofing customer marketing campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={13}
              className="h-auto w-full border border-[#CFCFCF] bg-white object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (14).png"
              alt="Summit Point Roofing referral and promotional campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={14}
              className="h-auto w-full border border-[#CFCFCF] bg-white object-contain"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <LightboxImage
              src="/brandstrategy/image (15).png"
              alt="Summit Point Roofing recruitment campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={15}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
            />

            <LightboxImage
              src="/brandstrategy/image (16).png"
              alt="Summit Point Roofing customer acquisition campaign"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={16}
              className="h-auto w-full border border-[#CFCFCF] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />

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
            className="h-auto w-full border border-[#CFCFCF] object-contain"
          />
        </div>
      </section>

      <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />

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

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="border border-neutral-300 bg-[#FAFAFA] p-7.5">
            <p className="text-[32px] font-semibold text-primary md:text-[40px]">
              $30M
            </p>
            <p className="text-[24px] text-[#404040]">Organization</p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-7.5">
            <p className="text-[32px] font-semibold md:text-[40px]">04</p>
            <p className="text-[24px] text-[#404040]">Divisions</p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-7.5">
            <p className="text-[32px] font-semibold text-primary md:text-[40px]">
              03
            </p>
            <p className="text-[24px] text-[#404040]">Locations</p>
          </div>

          <div className="border border-neutral-300 bg-[#FAFAFA] p-7.5">
            <p className="text-[32px] font-semibold md:text-[40px]">10+</p>
            <p className="text-[24px] text-[#404040]">Service Lines</p>
          </div>
        </div>
      </section>
    </div>
  );
}
