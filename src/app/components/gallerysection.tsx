import type { ReactNode } from "react";
import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import LightboxImage from "./lightboximage";

const GALLERY_IMAGES = [
  "/gallery/gallery3.png",
  "/gallery/gallery2.png",
  "/gallery/gallery1.png",
  "/gallery/gallery4.png",
  "/gallery/gallery5.png",
  "/gallery/gallery6.png",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.png",
  "/gallery/gallery11.png",
  "/gallery/gallery12.1.png",
  "/gallery/gallery13.png",
  "/gallery/gallery14.png",
  "/gallery/gallery16.png",
  "/gallery/gallery15.png",
  "/gallery/gallery17B.png",
  "/gallery/conical_23.png",
  "/gallery/gallery18.jpg",
  "/MT2.png",
  "/MT1.png",
];

const CAPABILITIES = [
  "Brand Identity",
  "Editorial Design",
  "Campaign Creative",
  "Digital Design",
  "Illustration",
  "Print Production",
];

function Divider() {
  return (
    <div className="my-10 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-20" />
  );
}

function CapabilityPill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-full bg-white px-4 py-2.5 shadow-[0_0_25px_0_rgba(0,0,0,0.12)] md:px-4.5">
      <p className="whitespace-nowrap font-sora text-sm sm:text-base md:text-lg">
        {label}
      </p>
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

export default function GallerySection() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Overview */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <OverView />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Overview.
          </h2>
        </div>

        <div className="max-w-6xl space-y-5">
          <p className="font-sora text-xl leading-relaxed">
            A curated selection of creative work spanning brand identity,
            editorial design, advertising, digital experiences, illustration,
            packaging, and print production.
          </p>

          <p className="font-sora text-xl leading-relaxed">
            Together, these projects demonstrate the breadth of hands-on
            creative execution supporting brands across business-to-business,
            consumer, ecommerce, nonprofit, publishing, manufacturing, and
            professional-services environments. The gallery complements the
            strategic case studies by showing the design craft behind broader
            brand and marketing programs.
          </p>
        </div>
      </section>

      <Divider />

      {/* Capabilities */}
      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <Setting />

          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Creative<span className="text-primary"> Capabilities.</span>
          </h2>
        </div>

        <p className="max-w-5xl font-sora text-xl leading-relaxed">
          Selected disciplines represented in the gallery. The work spans
          concept development, art direction, design execution, production, and
          final delivery across print and digital channels.
        </p>

        <MobileDisclosure label="View creative capabilities">
          <div className="flex flex-wrap gap-3">
            {CAPABILITIES.map((capability) => (
              <CapabilityPill key={capability} label={capability} />
            ))}
          </div>
        </MobileDisclosure>

        <div className="hidden flex-wrap gap-3 md:flex md:gap-4">
          {CAPABILITIES.map((capability) => (
            <CapabilityPill key={capability} label={capability} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Print and Publication Design */}
      <section className="grid gap-8">
        <div className="space-y-5">
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Print &amp;
            <span className="text-primary"> Publication Design.</span>
          </h2>

          <p className="max-w-6xl font-sora text-xl leading-relaxed">
            Editorial systems, catalogs, books, brochures, direct mail, and
            printed collateral designed to organize information, support
            campaigns, and create memorable brand experiences.
          </p>
        </div>

        <div className="grid gap-7 md:gap-10.5">
          <LightboxImage
            src="/gallery/gallery3.png"
            alt="Editorial and publication design portfolio"
            width={1512}
            height={600}
            gallery={GALLERY_IMAGES}
            index={0}
            className="block h-auto w-full object-contain"
          />

          <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8">
            <LightboxImage
              src="/gallery/gallery2.png"
              alt="Print publication design spread"
              width={1512}
              height={2064}
              gallery={GALLERY_IMAGES}
              index={1}
              className="block h-auto w-full object-contain"
            />

            <div className="hidden md:block">
              <LightboxImage
                src="/gallery/gallery1.png"
                alt="Publication and packaging design details"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={2}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Campaign and Marketing Creative */}
      <section className="grid gap-8">
        <div className="space-y-5">
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Campaign &
            <span className="text-primary"> Marketing Creative.</span>
          </h2>

          <p className="max-w-6xl font-sora text-xl leading-relaxed">
            Integrated campaign creative developed across advertising, sales
            materials, digital content, product marketing, and promotional
            channels for business-to-business and consumer audiences.
          </p>
        </div>

        <div className="grid gap-7 md:gap-10.5">
          <LightboxImage
            src="/gallery/gallery4.png"
            alt="Furniture advertising and campaign creative"
            width={1512}
            height={600}
            gallery={GALLERY_IMAGES}
            index={3}
            className="block h-auto w-full object-contain"
          />

          <div className="hidden md:block">
            <LightboxImage
              src="/gallery/gallery10.png"
              alt="Furniture marketing catalog and campaign spread"
              width={1512}
              height={600}
              gallery={GALLERY_IMAGES}
              index={9}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8">
            <LightboxImage
              src="/gallery/gallery5.png"
              alt="Furniture campaign design and product details"
              width={1512}
              height={2064}
              gallery={GALLERY_IMAGES}
              index={4}
              className="block h-auto w-full object-contain"
            />

            <LightboxImage
              src="/gallery/gallery6.png"
              alt="Furniture campaign design and product imagery"
              width={1512}
              height={2064}
              gallery={GALLERY_IMAGES}
              index={5}
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* Keep all three posters together on mobile */}
          <div className="grid grid-cols-3 items-stretch gap-3 md:gap-8">
            <div className="overflow-hidden border border-[#CFCFCF] bg-white">
              <LightboxImage
                src="/gallery/gallery7.jpg"
                alt="Haworth charitable campaign advertisement featuring awareness wristbands"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={6}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="overflow-hidden border border-[#CFCFCF] bg-white">
              <LightboxImage
                src="/gallery/gallery8.jpg"
                alt="Haworth charitable campaign advertisement featuring cause bracelets"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={7}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="overflow-hidden border border-[#CFCFCF] bg-white">
              <LightboxImage
                src="/gallery/gallery9.jpg"
                alt="Haworth charitable campaign advertisement featuring awareness ribbons"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={8}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Brand Identity */}
      <section className="grid gap-8">
        <div className="space-y-5">
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Brand<span className="text-primary"> Identity.</span>
          </h2>

          <p className="max-w-6xl font-sora text-xl leading-relaxed">
            Identity systems ranging from startups to established
            organizations, including logo development, visual standards, custom
            illustration, and supporting brand assets. Each system was designed
            to communicate distinct positioning while providing a practical
            foundation for consistent execution.
          </p>
        </div>

        <div className="grid gap-8 md:gap-9">
          {/* Family Tree */}
          <div className="mx-auto w-[88%] max-w-2xl md:w-full">
            <LightboxImage
              src="/gallery/gallery11.png"
              alt="Family Tree Therapies brand identity"
              width={1512}
              height={600}
              gallery={GALLERY_IMAGES}
              index={10}
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* Green Fork and EBS */}
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 items-center gap-5 md:gap-6">
            <div className="flex items-center justify-center">
              <LightboxImage
                src="/gallery/gallery12.1.png"
                alt="Green Fork brand identity"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={11}
                className="mx-auto block h-auto w-[88%] object-contain md:max-h-56 md:w-full"
              />
            </div>

            <div className="flex items-center justify-center">
              <LightboxImage
                src="/gallery/gallery13.png"
                alt="EBS Environmental Business Solutions brand identity"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={12}
                className="mx-auto block h-auto w-[84%] object-contain md:max-h-56 md:w-full"
              />
            </div>
          </div>

{/* Supporting logos stay in one row on mobile */}
<div className="mx-auto grid w-full max-w-6xl grid-cols-3 items-center gap-3 md:gap-8">
  <div className="flex items-center justify-center">
    <LightboxImage
      src="/gallery/gallery14.png"
      alt="Kramer Medical Supplies brand identity"
      width={1512}
      height={500}
      gallery={GALLERY_IMAGES}
      index={13}
      className="mx-auto block h-auto w-full object-contain md:max-w-[320px]"
    />
  </div>

  <div className="flex items-center justify-center">
    <LightboxImage
      src="/gallery/gallery16.png"
      alt="Rapid Metal Solutions brand identity"
      width={1512}
      height={500}
      gallery={GALLERY_IMAGES}
      index={14}
      className="mx-auto block h-auto w-full object-contain md:max-w-[320px]"
    />
  </div>

  <div className="flex items-center justify-center">
    <LightboxImage
      src="/gallery/gallery15.png"
      alt="Waterfront Mills brand identity"
      width={1512}
      height={500}
      gallery={GALLERY_IMAGES}
      index={15}
      className="mx-auto block h-auto w-full object-contain md:max-w-[320px]"
    />
  </div>
</div>        </div>
      </section>

      <Divider />

      {/* Illustration and Visual Systems */}
      <section className="grid gap-8">
        <div className="space-y-5">
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Illustration
            <span className="text-primary"> &amp; Visual Systems.</span>
          </h2>

          <p className="max-w-6xl font-sora text-xl leading-relaxed">
            Custom illustration, iconography, and repeatable visual systems
            created to make complex information easier to navigate while
            extending a consistent brand language.
          </p>
        </div>

        <div className="grid gap-9 md:gap-12">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-5xl">
              <LightboxImage
                src="/gallery/gallery17B.png"
                alt="Custom illustrated icon and visual system"
                width={1512}
                height={800}
                gallery={GALLERY_IMAGES}
                index={16}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex w-full justify-center">
            <div className="w-[90%] max-w-[640px] md:w-full md:-translate-x-[22px]">
              <LightboxImage
                src="/gallery/conical_23.png"
                alt="Technical product icon and visual system for cutting tools"
                width={2048}
                height={1325}
                gallery={GALLERY_IMAGES}
                index={17}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Cause-Based Campaigns */}
      <section className="grid gap-8">
        <div className="space-y-5">
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Cause-Based
            <span className="text-primary"> Campaigns.</span>
          </h2>

          <p className="max-w-6xl font-sora text-xl leading-relaxed">
            Emotionally grounded campaign creative developed for nonprofit and
            community organizations, balancing human storytelling, clear calls
            to action, and respectful visual communication.
          </p>
        </div>

<div className="grid gap-7 md:gap-10.5">
  <div className="mx-auto w-[64%] md:w-full">
    <LightboxImage
      src="/gallery/gallery18.jpg"
      alt="Mel Trotter Ministries cause-based advertising campaign"
      width={1512}
      height={600}
      gallery={GALLERY_IMAGES}
      index={18}
      className="block h-auto w-full object-contain"
    />
  </div>

  <div className="grid grid-cols-2 items-start gap-4 md:gap-8">
    <div className="flex items-center justify-center md:h-[500px]">
      <LightboxImage
        src="/MT2.png"
        alt="Mel Trotter Ministries nonprofit campaign"
        width={1512}
        height={2064}
        gallery={GALLERY_IMAGES}
        index={19}
        className="block h-auto max-h-full w-full object-contain"
      />
    </div>

    <div className="flex items-center justify-center md:h-[500px]">
      <LightboxImage
        src="/MT1.png"
        alt="Mel Trotter Ministries awareness campaign"
        width={1512}
        height={2064}
        gallery={GALLERY_IMAGES}
        index={20}
        className="block h-auto max-h-full w-full object-contain"
      />
    </div>
  </div>
</div>
</section>
</div>
);
}