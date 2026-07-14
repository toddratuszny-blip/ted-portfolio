import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Target from "../Icons/target";
import Laptop from "../Icons/laptop";
import Sales from "../Icons/sales";
import Mic from "../Icons/mic";
import Sparcles from "../Icons/sparkles";
import LightboxImage from "./lightboximage";

const BRAND_STRATEGY_IMAGES = [
  "/brandstrategy/image.png",
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
export default function BrandStrategySection() {
  const ROLES = [
    "Brand Strategy",
    "Creative Direction",
    "Product Marketing",
    "Sales Enablemen",
    "Website & Ecommerce",
    "Website & Ecommerce Support",
    "Content Development",
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
      <div className="max-w-7xl mx-auto ">
        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <OverView />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Overview.
            </h1>
          </div>
          <p className="text-xl font-sora">
            Developed and supported a portfolio of industrial brands including
            Elite Abrasives, Lehigh Valley Abrasives, Conical Tool, Global
            Cutting Tools, and Industrial Tool Crib. Work spanned brand
            development, ecommerce, product marketing, sales enablement, and
            digital marketing across multiple channels.
          </p>
        </div>
        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            <Setting />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              My<span className="text-primary"> Role.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-4">
            {ROLES.map((role) => (
              <RolePill key={role} label={role} />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Laptop />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Digital<span className="text-primary"> Experience.</span>
            </h1>
          </div>
          <div className="grid gap-10.5">
            <div className="w-full">
              <LightboxImage
                src="/brandstrategy/image.png"
                alt="box"
                width={1512}
                height={600}
                gallery={BRAND_STRATEGY_IMAGES}
                index={0}
                className="w-full! "
              />
            </div>
            <div className=" grid md:grid-cols-2 gap-10.5">
              <LightboxImage
                src="/brandstrategy/image (1).png"
                alt="box"
                width={1512}
                height={2064}
                gallery={BRAND_STRATEGY_IMAGES}
                index={1}
              />
              <LightboxImage
                src="/brandstrategy/image (2).png"
                alt="box"
                width={1512}
                height={2064}
                gallery={BRAND_STRATEGY_IMAGES}
                index={2}
              />
            </div>
            <div className=" grid md:grid-cols-3 gap-8.5">
              <LightboxImage
                src="/brandstrategy/image (3).png"
                alt="box"
                width={1512}
                height={2064}
                gallery={BRAND_STRATEGY_IMAGES}
                index={3}
              />
              <LightboxImage
                src="/brandstrategy/image (4).png"
                alt="box"
                width={1512}
                height={2064}
                gallery={BRAND_STRATEGY_IMAGES}
                index={4}
              />
              <LightboxImage
                src="/brandstrategy/image (5).png"
                alt="box"
                width={1512}
                height={2064}
                gallery={BRAND_STRATEGY_IMAGES}
                index={5}
              />
            </div>
            <div className="">
              <LightboxImage
                src="/brandstrategy/image (6).png"
                alt="box"
                width={1512}
                height={600}
                gallery={BRAND_STRATEGY_IMAGES}
                index={6}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5 font-sora">
            <Sales />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Sales<span className="text-primary"> Enablement.</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-3 items-stretch gap-5 md:gap-8">
            <div className="">
              <LightboxImage
                src="/brandstrategy/image (7).png"
                alt="box"
                width={651}
                height={842}
                gallery={BRAND_STRATEGY_IMAGES}
                index={7}
                // className="w-full h-fit"
              />
            </div>
            <LightboxImage
              src="/brandstrategy/image (8).png"
              alt="box"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={8}
              className="object-cover h-full "
            />
            <LightboxImage
              src="/brandstrategy/image (9).png"
              alt="box"
              width={651}
              height={400}
              gallery={BRAND_STRATEGY_IMAGES}
              index={9}
              className="object-cover h-full"
            />
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5 font-sora">
            <Mic />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Integrated
              <span className="text-primary"> Marketing Campaigns.</span>
            </h1>
          </div>
          <div className="space-y-8">
            <div className="w-full">
              <LightboxImage
                src="/brandstrategy/image (10).png"
                alt="box"
                width={651}
                height={842}
                gallery={BRAND_STRATEGY_IMAGES}
                index={10}
                className="w-full h-full"
                // className="w-full md:h-[600px] object-cover object-top border-[1px] border-[#D4D4D4]"
              />
            </div>
            <div className=" grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/brandstrategy/image (11).png"
                alt="box"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={11}
              />
              <LightboxImage
                src="/brandstrategy/image (12).png"
                alt="box"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={12}
              />

              <LightboxImage
                src="/brandstrategy/image (13).png"
                alt="box"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={13}
              />
              <LightboxImage
                src="/brandstrategy/image (14).png"
                alt="box"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={14}
              />
            </div>
            <div className=" grid md:grid-cols-2 gap-8">
              <LightboxImage
                src="/brandstrategy/image (15).png"
                alt="box"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={15}
              />
              <LightboxImage
                src="/brandstrategy/image (16).png"
                alt="box"
                width={651}
                height={400}
                gallery={BRAND_STRATEGY_IMAGES}
                index={16}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5 font-sora">
            <Sparcles />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Integrated
              <span className="text-primary"> Marketing Campaigns.</span>
            </h1>
          </div>
          <div className="w-full">
            <LightboxImage
              src="/brandstrategy/image (17).png"
              alt="box"
              width={651}
              height={842}
              gallery={BRAND_STRATEGY_IMAGES}
              index={17}
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-6">
          <div className="flex items-center gap-2.5">
            <Target />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Outcomes<span className="text-primary"> & Impact.</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border border-neutral-300 p-7.5 bg-[#FAFAFA] min-w-71.5">
              <h1 className="text-[32px] md:text-[40px] font-semibold text-primary">
                $30M
              </h1>
              <h3 className="text-[24px] text-[#404040]">Organization</h3>
            </div>
            <div className="border border-neutral-300 p-7.5 bg-[#FAFAFA] min-w-71.5">
              <h1 className="text-[32px] md:text-[40px] font-semibold">04</h1>
              <h3 className="text-[24px] text-[#404040]">Divisions</h3>
            </div>
            <div className="border border-neutral-300 p-7.5 bg-[#FAFAFA] min-w-71.5">
              <h1 className="text-[32px] md:text-[40px] font-semibold text-primary">
                03
              </h1>
              <h3 className="text-[24px] text-[#404040]">Location</h3>
            </div>
            <div className="border border-neutral-300 p-7.5 bg-[#FAFAFA] min-w-71.5">
              <h1 className="text-[32px] md:text-[40px] font-semibold">10+</h1>
              <h3 className="text-[24px] text-[#404040]">Service lines</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
