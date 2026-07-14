import Business from "../Icons/business";
import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Target from "../Icons/target";
import LightboxImage from "./lightboximage";

const MARYANN_IMAGES = [
  "/maryann01.png",
  "/maryann00.png",
  "/scope01.jpg",
  "/scope2.jpg",
  "/scope3.jpg",
  "/scope04.jpg",
  "/scope5.png",
  "/scope6.jpg",
];
export default function MaryAnnOverViewSection() {
  const ROLES = [
    "Brand Development",
    "Creative Direction",
    "Packaging Design",
    "Retail Marketing",
    "Catalog Design",
    "Print Production",
    "Vendor Coordination",
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
          <div className="space-y-3.5">
            <p className="text-xl font-sora">
              Mary Ann&apos;s Chocolates needed a cohesive brand system that
              could support retail growth, strengthen shelf presence, and create
              consistency across packaging, merchandising, and marketing
              materials.
            </p>
            <p className="text-xl font-sora">
              I led the development and execution of a consumer-facing brand
              program spanning packaging, retail displays, catalogs, promotional
              campaigns, and supporting collateral.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="space-y-5 md:space-y-10">
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
          <div className="grid md:grid-cols-6 gap-6 md:gap-10.5">
            <div className="w-full md:col-span-4 ">
              <div>
                <LightboxImage
                  src="/maryann01.png"
                  alt="packaging"
                  width={4000}
                  height={4000}
                  gallery={MARYANN_IMAGES}
                  index={0}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="md:col-span-2 ">
              <LightboxImage
                src="/maryann00.png"
                alt="packaging"
                width={4000}
                height={400}
                gallery={MARYANN_IMAGES}
                index={1}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-[42px]">
          <div className="grid gap-6">
            <div className="flex items-center gap-2.5">
              <Business />
              <h1 className="text-3xl md:text-5xl font-sora font-semibold">
                Scope<span className="text-primary">.</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-4">
              {SCOPE.map((scope) => (
                <RolePill key={scope} label={scope} />
              ))}
            </div>
          </div>
          <div className="space-y-10">
            <div className="">
              <LightboxImage
                src="/scope01.jpg"
                alt="packaging"
                width={640}
                height={448}
                gallery={MARYANN_IMAGES}
                index={2}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10.5">
              <div className="w-full">
                <LightboxImage
                  src="/scope2.jpg"
                  alt="packaging"
                  width={640}
                  height={448}
                  gallery={MARYANN_IMAGES}
                  index={3}
                  className="w-full h-auto"
                />
              </div>
              <div className=" w-full">
                <LightboxImage
                  src="/scope3.jpg"
                  alt="packaging"
                  width={640}
                  height={448}
                  gallery={MARYANN_IMAGES}
                  index={4}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="">
              <LightboxImage
                src="/scope04.jpg"
                alt="packaging"
                width={640}
                height={448}
                gallery={MARYANN_IMAGES}
                index={5}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10.5">
              <div className=" w-full">
                <LightboxImage
                  src="/scope5.png"
                  alt="packaging"
                  width={640}
                  height={448}
                  gallery={MARYANN_IMAGES}
                  index={6}
                  className="w-full h-auto"
                />
              </div>
              <div className=" w-full">
                <LightboxImage
                  src="/scope6.jpg"
                  alt="packaging"
                  width={640}
                  height={448}
                  gallery={MARYANN_IMAGES}
                  index={7}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Target />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Outcomes<span className="text-primary"> & Impact.</span>
            </h1>
          </div>
          <div>
            <p className="text-xl font-sora">
              The project established a unified visual system that connected
              packaging, retail merchandising, wholesale marketing, and
              promotional communications. The resulting brand architecture
              improved consistency across customer touchpoints while supporting
              both retail and wholesale sales efforts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
