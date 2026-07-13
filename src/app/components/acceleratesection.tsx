import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Image from "next/image";

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
              <Image
                src="/accelerate/life1.png"
                alt="box"
                width={1512}
                height={600}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life2.jpg"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
              <Image
                src="/accelerate/life22.png"
                alt="box"
                width={1512}
                height={2064}
                className="h-full object-cover border border-[#D4D4D4]"
                // className="w-full md:h-[400px]  "
              />
            </div>
            <div className="grid md:grid-cols-3 justify-between gap-8">
              <Image
                src="/accelerate/life4.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
              <Image
                src="/accelerate/life5.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
              <Image
                src="/accelerate/life6.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="">
              <Image
                src="/accelerate/life7.jpg"
                alt="box"
                width={1512}
                height={600}
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
              <Image
                src="/accelerate/life8.jpg"
                alt="box"
                width={1512}
                height={600}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life9.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
              <Image
                src="/accelerate/life14.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Image
                src="/accelerate/life10.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
              <Image
                src="/accelerate/life11.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
              <Image
                src="/accelerate/life12.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="">
              <Image
                src="/accelerate/life13.png"
                alt="box"
                width={1512}
                height={600}
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
              <Image
                src="/accelerate/life15.jpg"
                alt="box"
                width={1512}
                height={600}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life16.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
              <Image
                src="/accelerate/life17.png"
                alt="box"
                width={1512}
                height={2064}
                // className="w-full md:h-[400px] "
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Image
                src="/accelerate/life18.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life19.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life20.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
            <div className="">
              <Image
                src="/accelerate/life21.jpg"
                alt="box"
                width={1512}
                height={600}
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
              <Image
                src="/accelerate/life22.jpg"
                alt="box"
                width={1512}
                height={600}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life23.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life24.png"
                alt="box"
                width={1512}
                height={2064}
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
              <Image
                src="/accelerate/life25.jpg"
                alt="box"
                width={1512}
                height={600}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life26.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life27.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>{" "}
            <div className="grid md:grid-cols-3 gap-8">
              <Image
                src="/accelerate/life28.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life29.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life30.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
            <div className="">
              <Image
                src="/accelerate/life31.jpg"
                alt="box"
                width={1512}
                height={600}
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
              <Image
                src="/accelerate/life32.jpg"
                alt="box"
                width={1512}
                height={600}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life33.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life34.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Image
                src="/accelerate/life35.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life36.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life37.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
            <div className="">
              <Image
                src="/accelerate/life38.jpg"
                alt="box"
                width={1512}
                height={600}
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
              <Image
                src="/accelerate/life39.jpg"
                alt="box"
                width={1512}
                height={600}
                // className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life40.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life41.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>

            <div className="">
              <Image
                src="/accelerate/life42.jpg"
                alt="box"
                width={1512}
                height={600}
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
              <Image
                src="/accelerate/life43.jpg"
                alt="box"
                width={1512}
                height={600}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/accelerate/life44.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life45.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Image
                src="/accelerate/life46.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life47.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/accelerate/life48.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
            <div className="">
              <Image
                src="/accelerate/life49.jpg"
                alt="box"
                width={1512}
                height={600}
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
