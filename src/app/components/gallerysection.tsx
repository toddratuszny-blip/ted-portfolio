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
  "/gallery/gallery18.jpg",
  "/gallery/gallery19.png",
  "/gallery/11_03_Campaign_2 copy",
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
    <div className="my-20 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white" />
  );
}

function CapabilityPill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-full bg-white px-4.5 py-2.5 shadow-[0_0_25px_0_rgba(0,0,0,0.12)]">
      <p className="whitespace-nowrap font-sora text-base md:text-lg">
        {label}
      </p>
    </div>
  );
}

export default function GallerySection() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* <Divider /> */}

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

        <div className="flex flex-wrap gap-4">
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

        <div className="grid gap-10.5">
          <LightboxImage
            src="/gallery/gallery3.png"
            alt="Editorial and publication design portfolio"
            width={1512}
            height={600}
            gallery={GALLERY_IMAGES}
            index={0}
            className="block h-auto w-full object-contain"
          />

          <div className="grid items-start gap-8 md:grid-cols-2">
            <LightboxImage
              src="/gallery/gallery2.png"
              alt="Print publication design spread"
              width={1512}
              height={2064}
              gallery={GALLERY_IMAGES}
              index={1}
              className="block h-auto w-full object-contain"
            />

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
      </section>

      <Divider />

      {/* Campaign and Marketing Creative */}
      <section className="grid gap-8">
        <div className="space-y-5">
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Campaign &<span className="text-primary"> Marketing Creative.</span>
          </h2>

          <p className="max-w-6xl font-sora text-xl leading-relaxed">
            Integrated campaign creative developed across advertising, sales
            materials, digital content, product marketing, and promotional
            channels for business-to-business and consumer audiences.
          </p>
        </div>

        <div className="grid gap-10.5">
          <LightboxImage
            src="/gallery/gallery4.png"
            alt="Furniture advertising and campaign creative"
            width={1512}
            height={600}
            gallery={GALLERY_IMAGES}
            index={3}
            className="block h-auto w-full object-contain"
          />

          <LightboxImage
            src="/gallery/gallery10.png"
            alt="Furniture marketing catalog and campaign spread"
            width={1512}
            height={600}
            gallery={GALLERY_IMAGES}
            index={9}
            className="block h-auto w-full object-contain"
          />

          <div className="grid items-start gap-8 md:grid-cols-2">
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

          <div className="grid items-stretch gap-8 md:grid-cols-3">
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
            Identity systems ranging from startups to established organizations,
            including logo development, visual standards, custom illustration,
            and supporting brand assets. Each system was designed to communicate
            distinct positioning while providing a practical foundation for
            consistent execution.
          </p>
        </div>

        <div className="grid gap-9">
          {/* Family Tree Therapies logo reduced */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
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
          </div>

          {/* Green Fork and EBS logos reduced and standardized */}
          <div className="mx-auto grid w-full max-w-4xl items-center gap-6 md:grid-cols-2">
            <div className="flex min-h-48 items-center justify-center">
              <LightboxImage
                src="/gallery/gallery12.1.png"
                alt="Green Fork brand identity"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={11}
                className="block h-auto max-h-56 w-full object-contain"
              />
            </div>

            <div className="flex min-h-48 items-center justify-center">
              <LightboxImage
                src="/gallery/gallery13.png"
                alt="EBS Environmental Business Solutions brand identity"
                width={1512}
                height={2064}
                gallery={GALLERY_IMAGES}
                index={12}
                className="block h-auto max-h-56 w-full object-contain"
              />
            </div>
          </div>

          <div className="mx-auto -mt-2 grid w-full max-w-6xl items-center gap-8 md:grid-cols-3">
            <div className="flex min-h-[180px] items-center justify-center px-6">
              <LightboxImage
                src="/gallery/gallery14.png"
                alt="Kramer Medical Supplies brand identity"
                width={1512}
                height={500}
                gallery={GALLERY_IMAGES}
                index={13}
                className="block h-auto w-full max-w-[320px] object-contain"
              />
            </div>

            <div className="flex min-h-[180px] items-center justify-center px-6">
              <LightboxImage
                src="/gallery/gallery16.png"
                alt="Rapid Metal Solutions brand identity"
                width={1512}
                height={500}
                gallery={GALLERY_IMAGES}
                index={14}
                className="block h-auto w-full max-w-[320px] object-contain"
              />
            </div>

            <div className="flex min-h-[180px] items-center justify-center px-6">
              <LightboxImage
                src="/gallery/gallery15.png"
                alt="Waterfront Hills brand identity"
                width={1512}
                height={500}
                gallery={GALLERY_IMAGES}
                index={15}
                className="block h-auto w-full max-w-[320px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Illustration and Visual Systems */}
      <section className="grid gap-8">
        <div className="space-y-5">
          <h2 className="font-sora text-3xl font-semibold md:text-5xl">
            Illustration
            <span className="text-primary"> & Visual Systems.</span>
          </h2>

          <p className="max-w-6xl font-sora text-xl leading-relaxed">
            Custom illustration, iconography, and repeatable visual systems
            created to make complex information easier to navigate while
            extending a consistent brand language.
          </p>
        </div>

        {/* Natural ratio retained to prevent icon distortion */}
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

        <div className="grid gap-10.5">
          <LightboxImage
            src="/gallery/gallery18.jpg"
            alt="Mel Trotter Ministries cause-based advertising campaign"
            width={1512}
            height={600}
            gallery={GALLERY_IMAGES}
            index={17}
            className="block h-auto w-full object-contain"
          />

          <div className="grid items-start gap-8 md:grid-cols-2">
            <LightboxImage
              src="/gallery/gallery19.png"
              alt="Mel Trotter Ministries nonprofit campaign"
              width={1512}
              height={2064}
              gallery={GALLERY_IMAGES}
              index={18}
              className="block h-auto w-full object-contain"
            />

            <LightboxImage
              src="/gallery/11_03_Campaign_2 copy2.jpg"
              alt="Mel Trotter Ministries awareness campaign"
              width={1512}
              height={2064}
              gallery={GALLERY_IMAGES}
              index={19}
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
