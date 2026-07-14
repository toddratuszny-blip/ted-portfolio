import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import LightboxImage from "./lightboximage";

const ACCELERATE_IMAGES = [
  "/accelerate/life1.png",
  "/accelerate/life2.jpg",
  "/accelerate/life22.png",
  "/accelerate/life4.png",
  "/accelerate/life5.png",
  "/accelerate/life6.png",
  "/accelerate/life7.jpg",
  "/accelerate/life8.jpg",
  "/accelerate/life9.png",
  "/accelerate/life14.png",
  "/accelerate/life10.png",
  "/accelerate/life11.png",
  "/accelerate/life12.png",
  "/accelerate/life13.png",
  "/accelerate/life15.jpg",
  "/accelerate/life16.png",
  "/accelerate/life17.png",
  "/accelerate/life18.png",
  "/accelerate/life19.png",
  "/accelerate/life20.png",
  "/accelerate/life21.jpg",
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

export default function AccelerateSection() {
  const ROLES = [
    "Integrated Marketing Campaign Development",
    "Creative Direction",
    "Campaign Strategy & Execution ",
    "Product Launch Support",
    "Digital Marketing",
    "Email Marketing",
    "Display Advertising",
    "Motion Graphics",
    "Ecommerce Creative",
    "Cross-functional Collaboration",
  ];
  const SCOPE = [
    "Brand Development",
    "Creative Direction",
    "Packaging Design",
    "Retail Marketing",
    "Catalog Design",
    "Print Production",
    "Vendor Coordination",
  ];
  function RolePill({ label }: { label: string }) {
    return (
      <div className=" px-4.5 py-2.5 rounded-full bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.12)] flex items-center justify-center whitespace-nowrap">
        <p className="text-lg font-sora">{label}</p>
      </div>
    );
  }
  return (
    <>
      <div className="max-w-7xl mx-auto font-sora">
        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            <OverView />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Overview.
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Accelerate360 partnered with nationally recognized consumer brands
              to launch products and execute integrated marketing campaigns
              across retail, publisher, ecommerce, and owned media channels.
              Working across dozens of brands required balancing speed,
              consistency, and creative quality while adapting messaging for
              different audiences, product categories, and digital platforms.
            </p>
            <p className="text-xl">
              This case study highlights the breadth of that work—from
              integrated product launches and ecommerce experiences to digital
              advertising, email marketing, publisher media, motion graphics,
              and creative production.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            <Setting />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              My<span className="text-primary"> Role.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-[16px] mt-4">
            {ROLES.map((role) => (
              <RolePill key={role} label={role} />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Life-To-Go –{" "}
              <span className="text-primary">Immunity Boosters.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              The Life-To-Go Immunity Boosters campaign is a strong example of
              integrated marketing execution. The campaign extended across
              ecommerce, digital advertising, promotional graphics, product
              marketing, and supporting creative assets, demonstrating how a
              single campaign could be adapted across multiple customer
              touchpoints while maintaining a consistent visual ident.{" "}
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life1.png"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={0}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life2.jpg"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={1}
                className="w-full "
              />
              <LightboxImage
                src="/accelerate/life22.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={2}
                className="h-full object-cover "
                // className="w-full md:h-[400px]  "
              />
            </div>
            <div className="grid md:grid-cols-3 justify-between gap-8">
              <LightboxImage
                src="/accelerate/life4.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={3}
                // className="w-full md:h-[400px] "
              />
              <LightboxImage
                src="/accelerate/life5.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={4}
                // className="w-full md:h-[400px] "
              />
              <LightboxImage
                src="/accelerate/life6.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={5}
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="">
              <LightboxImage
                src="/accelerate/life7.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={6}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              National Publisher Network.
              <span className="text-primary"> Publisher Network.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              In addition to consumer products, I supported creative production
              across Accelerate360’s publishing portfolio, producing promotional
              and digital marketing assets for nationally recognized media
              brands including Us Weekly, Men’s Journal, Life & Style, In Touch
              Weekly, Closer, and The Miami Herald. This required adapting
              creative for multiple audiences while maintaining campaign
              quality, consistency, and production efficiency.{" "}
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life8.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={7}

                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life9.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={8}
                className="object-cover"
                // className="w-full md:h-[400px] "
              />
              <LightboxImage
                src="/accelerate/life14.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={9}
                className="object-cover"
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <LightboxImage
                src="/accelerate/life10.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={10}
                className="object-cover"
                // className="w-full md:h-[400px] "
              />
              <LightboxImage
                src="/accelerate/life11.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={11}
                className="object-cover"
                // className="w-full md:h-[400px] "
              />
              <LightboxImage
                src="/accelerate/life12.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={12}
                className="object-cover"
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="">
              <LightboxImage
                src="/accelerate/life13.png"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={13}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              FOOD<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Supported national food and beverage brands through integrated
              marketing campaigns spanning promotional advertising, digital
              merchandising, email marketing, retail creative, and online
              commerce.{" "}
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life15.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={14}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life16.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={15}
                // className="w-full md:h-[400px] "
              />
              <LightboxImage
                src="/accelerate/life17.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={16}
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <LightboxImage
                src="/accelerate/life18.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={17}
              />
              <LightboxImage
                src="/accelerate/life19.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={18}
              />
              <LightboxImage
                src="/accelerate/life20.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={19}
              />
            </div>
            <div className="">
              <LightboxImage
                src="/accelerate/life21.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={20}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Kids<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Developed engaging campaign creative for children’s products
              across digital marketing, ecommerce, promotional content, and
              branded customer experiences.
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life22.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={21}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life23.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={22}
              />
              <LightboxImage
                src="/accelerate/life24.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={23}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Health <span className="text-primary">& Wellness.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Produced marketing assets supporting product launches, digital
              merchandising, advertising campaigns, and promotional initiatives
              for health and wellness brands serving diverse consumer audiences.
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life25.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={24}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life26.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={25}
              />
              <LightboxImage
                src="/accelerate/life27.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={26}
              />
            </div>{" "}
            <div className="grid md:grid-cols-3 gap-8">
              <LightboxImage
                src="/accelerate/life28.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={27}
              />
              <LightboxImage
                src="/accelerate/life29.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={28}
              />
              <LightboxImage
                src="/accelerate/life30.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={29}
              />
            </div>
            <div className="">
              <LightboxImage
                src="/accelerate/life31.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={30}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Fashion<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Created digital marketing campaigns, seasonal promotions,
              ecommerce assets, and lifestyle creative that strengthened product
              presentation and supported online retail initiatives.
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life32.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={31}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life33.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={32}
              />
              <LightboxImage
                src="/accelerate/life34.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={33}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <LightboxImage
                src="/accelerate/life35.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={34}
              />
              <LightboxImage
                src="/accelerate/life36.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={35}
              />
              <LightboxImage
                src="/accelerate/life37.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={36}
              />
            </div>
            <div className="">
              <LightboxImage
                src="/accelerate/life38.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={37}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Fitness<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Developed integrated campaign creative for fitness and lifestyle
              brands across ecommerce, advertising, promotional campaigns, and
              digital merchandising.
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life39.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={38}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life40.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={39}
              />
              <LightboxImage
                src="/accelerate/life41.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={40}
              />
            </div>

            <div className="">
              <LightboxImage
                src="/accelerate/life42.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={41}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white mb-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Beauty<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Produced creative supporting product launches, ecommerce
              experiences, advertising campaigns, and digital marketing
              initiatives for consumer beauty brands.{" "}
            </p>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <LightboxImage
                src="/accelerate/life43.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={42}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/accelerate/life44.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={43}
              />
              <LightboxImage
                src="/accelerate/life45.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={44}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <LightboxImage
                src="/accelerate/life46.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={45}
              />
              <LightboxImage
                src="/accelerate/life47.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={46}
              />
              <LightboxImage
                src="/accelerate/life48.png"
                alt="box"
                width={1512}
                height={2064}
                gallery={ACCELERATE_IMAGES}
                index={47}
              />
            </div>
            <div className="">
              <LightboxImage
                src="/accelerate/life49.jpg"
                alt="box"
                width={1512}
                height={600}
                gallery={ACCELERATE_IMAGES}
                index={48}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white mb-14" />
        <div className="grid gap-[24px] md:mb-[56px]">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Results <span className="text-primary">& Impact.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Supported integrated marketing initiatives across 47 consumer
              brands • Executed campaigns spanning ecommerce, email, display
              advertising, publisher media, and digital merchandising •
              Contributed to national product launches across multiple consumer
              categories • Produced marketing assets supporting retailer,
              publisher, and owned media channels • Collaborated
              cross-functionall:y to deliver campaigns at scale
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Takeaway<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-xl">
              Accelerate360 showcases my ability to execute integrated marketing
              campaigns at scale across a diverse portfolio of national consumer
              brands. Rather than supporting a single business, this role
              required adapting strategy, messaging, and creative execution
              across dozens of brands, multiple industries, and a wide range of
              digital marketing channels while maintaining consistency, speed,
              and quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
