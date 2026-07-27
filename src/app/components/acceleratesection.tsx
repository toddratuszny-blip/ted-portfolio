import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import LightboxImage from "./lightboximage";

const ACCELERATE_IMAGES = [
  "/accelerate/life1.png",
  "/accelerate/life2.jpg",
  "/accelerate/life3.png",
  "/accelerate/1000x1000 (1)B.jpg",
  "/accelerate/life5.png",
  "/accelerate/life6.png",
  "/accelerate/life7.jpg",
  "/accelerate/life8.jpg",
  "/accelerate/life9.png",
  "/accelerate/life10.png",
  "/accelerate/life11.png",
  "/accelerate/life12.png",
  "/accelerate/life13.png",
  "/accelerate/life14.png",
  "/accelerate/life15.jpg",
  "/accelerate/life16.png",
  "/accelerate/life17.png",
  "/accelerate/life18.jpg",
  "/accelerate/life19.png",
  "/accelerate/life20.png",
  "/accelerate/life21.jpg",
  "/accelerate/life22.png",
  "/accelerate/life22.jpg",
  "/accelerate/life23.png",
  "/accelerate/life24.png",
  "/accelerate/life25.jpg",
  "/accelerate/life26.png",
  "/accelerate/life27.png",
  "/accelerate/life28.png",
  "/accelerate/life29.png",
  "/accelerate/life30.png",
  "/accelerate/life31.jpg",
  "/accelerate/life32.jpg",
  "/accelerate/life33.png",
  "/accelerate/life34.png",
  "/accelerate/life35.png",
  "/accelerate/life36.png",
  "/accelerate/life37.png",
  "/accelerate/life38.jpg",
  "/accelerate/life39.jpg",
  "/accelerate/life40.png",
  "/accelerate/life41.png",
  "/accelerate/life42.jpg",
  "/accelerate/life43.jpg",
  "/accelerate/life44.png",
  "/accelerate/life45.png",
  "/accelerate/life46.png",
  "/accelerate/life47.png",
  "/accelerate/life48.png",
  "/accelerate/life49.jpg",
];

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
    <div className="my-14 h-px w-full bg-linear-to-r from-[#A4A4A4] to-white md:my-18" />
  );
}

function RolePill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-2.5 shadow-[0_0_25px_0_rgba(0,0,0,0.12)]">
      <p className="text-base font-sora md:text-lg">{label}</p>
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
            division, I supported the launch and marketing of 47 consumer brands
            spanning wellness, fitness, food, fashion, technology, and lifestyle
            products.
          </p>

          <p className="text-xl leading-relaxed">
            LifeToGo was both an owned consumer brand and an ecommerce
            storefront. I designed LifeToGo packaging and campaign assets while
            also creating advertising, merchandising, and promotional creative
            for partner products sold through the site.
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
            Developed the integrated launch system for LifeToGo Immunity Drink
            Mixes, a LifeToGo-owned product line. The work extended across
            packaging, product presentation, ecommerce, responsive advertising,
            publisher promotions, and campaign creative.
          </p>

          <p className="text-xl leading-relaxed">
            The campaign translated one product platform across multiple formats
            while maintaining consistent messaging, visual hierarchy, and
            product recognition.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl gap-6 md:gap-8">
          <div>
            <LightboxImage
              src="/accelerate/1000x1000 (1)B.jpg"
              alt="LifeToGo Immunity Drink Mix campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={3}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life5.png"
                alt="LifeToGo Immunity Drink Mix promotional banner"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={4}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life7.jpg"
                alt="LifeToGo Immunity and Calm campaign banner"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={6}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-3">
            {[16, 17, 19].map((imageNumber) => {
              const imageIndex =
                imageNumber === 16 ? 15 : imageNumber === 17 ? 16 : 18;

              return (
                <div key={imageNumber} className="flex items-center">
                  <LightboxImage
                    src={`/accelerate/life${imageNumber}.png`}
                    alt="LifeToGo Immunity campaign extension"
                    width={1512}
                    height={2064}
                    gallery={ACCELERATE_IMAGES}
                    index={imageIndex}
                    className="block h-auto w-full object-contain"
                  />
                </div>
              );
            })}
          </div>

          <div>
            <LightboxImage
              src="/accelerate/life21.jpg"
              alt="LifeToGo Immunity Drink Mix horizontal campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={20}
              className="block h-auto w-full object-contain"
            />
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
          Developed ecommerce and promotional creative for Performance Inspired
          products sold through LifeToGo, including campaign assets featuring
          cofounder Mark Wahlberg. The work adapted an established partner brand
          into the LifeToGo shopping and promotional environment.
        </p>

        <div className="mx-auto grid w-full max-w-5xl gap-6 md:gap-8">
          <div>
            <LightboxImage
              src="/accelerate/life39.jpg"
              alt="Performance Inspired campaign featuring Mark Wahlberg"
              width={1216}
              height={380}
              gallery={ACCELERATE_IMAGES}
              index={39}
              className="block aspect-[16/5] w-full border border-[#D9D9D9] object-cover"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life40.png"
                alt="Performance Inspired vertical promotional creative"
                width={400}
                height={400}
                gallery={ACCELERATE_IMAGES}
                index={40}
                className="block aspect-square w-full border border-[#D9D9D9] object-cover"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life42.jpg"
                alt="Performance Inspired ecommerce promotional creative"
                width={1066}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={42}
                className="block aspect-[16/9] w-full border border-[#D9D9D9] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Publisher Promotions
            <span className="text-primary"> & Lifestyle Content.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Produced promotional marketing assets connecting LifeToGo offers with
          Accelerate360 publisher properties, alongside lifestyle imagery and
          brand content that gave the storefront a broader consumer-facing
          identity.
        </p>

        <div className="mx-auto grid w-full max-w-5xl gap-6 md:gap-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life15.jpg"
                alt="The Telegraph LifeToGo promotional campaign"
                width={1216}
                height={686}
                gallery={ACCELERATE_IMAGES}
                index={14}
                className="block aspect-[16/9] w-full border border-[#D9D9D9] object-cover"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life18.jpg"
                alt="The Telegraph subscription and LifeToGo promotion"
                width={200}
                height={400}
                gallery={ACCELERATE_IMAGES}
                index={17}
                className="block aspect-[1/2] w-full border border-[#D9D9D9] object-cover"
              />
            </div>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-3">
            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life9.png"
                alt="LifeToGo seasonal giveaway campaign"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={8}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life8.jpg"
                alt="LifeToGo lifestyle brand ambassadors"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={7}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life13.png"
                alt="LifeToGo at-home lifestyle photography"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={12}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <LightboxImage
              src="/accelerate/life31.jpg"
              alt="LifeToGo wellness lifestyle banner"
              width={1216}
              height={244}
              gallery={ACCELERATE_IMAGES}
              index={31}
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
            Created product-launch and merchandising systems across technology,
            food, wellness, accessories, and lifestyle categories. The work
            included campaign banners, feature graphics, product imagery,
            marketplace assets, and promotional creative.
          </p>

          <p className="text-xl leading-relaxed">
            Partner brands retained their existing identities and packaging. My
            role was to present their products clearly and cohesively within the
            LifeToGo storefront and campaign environment.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl gap-6 md:gap-8">
          <div>
            <LightboxImage
              src="/accelerate/life25.jpg"
              alt="LifeToGo consumer technology campaign"
              width={1512}
              height={600}
              gallery={ACCELERATE_IMAGES}
              index={25}
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life26.png"
                alt="Anker portable charger ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={26}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life27.png"
                alt="Soundcore headphones ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={27}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-3">
            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life3.png"
                alt="Strong Coffee ecommerce promotional creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={2}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life33.png"
                alt="Shar Snacks ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={33}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life35.png"
                alt="Hope and Sesame ecommerce creative"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={35}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-3">
            <div className="flex items-center justify-center">
              <LightboxImage
                src="/accelerate/life43.jpg"
                alt="Barney Butter product photography"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={43}
                className="block h-auto w-full max-w-[220px] object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life44.png"
                alt="Barney Butter lifestyle product photography"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={44}
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center">
              <LightboxImage
                src="/accelerate/life23.png"
                alt="Strong Coffee partner-brand campaign"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={23}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
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
          Supported the launch and marketing of 47 consumer brands through the
          LifeToGo ecommerce division. Developed LifeToGo-owned packaging and
          campaign assets while producing partner-brand advertising, product
          imagery, ecommerce merchandising, publisher promotions, and
          cross-channel creative across multiple consumer categories.
        </p>
      </section>

      <section className="grid gap-6">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Takeaway<span className="text-primary">.</span>
          </h1>
        </div>

        <p className="max-w-6xl text-xl leading-relaxed">
          Accelerate360 demonstrates my ability to build integrated campaigns
          for an owned ecommerce brand while adapting established partner brands
          across marketplace, publisher, and promotional channels. The work
          combined packaging, campaign development, product marketing,
          merchandising, and high-volume hands-on creative production.
        </p>
      </section>
    </div>
  );
}
