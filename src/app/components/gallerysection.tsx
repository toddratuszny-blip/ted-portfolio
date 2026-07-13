import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Image from "next/image";

export default function GallerySection() {
  const ROLES = [
    "Brand Identity",
    "Print Design",
    "Campaign Creative",
    "Digital",
    "Illustration",
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
        <div className="grid gap-[24px]">
          <div className="flex items-center gap-[10px]">
            <OverView />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Overview.
            </h1>
          </div>
          <div className="grid gap-3.5">
            <p className="text-[20px]">
              A curated selection of creative work from across branding, print,
              editorial, advertising, illustration, nonprofit, and other visual
              communication projects.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-[24px]">
          <div className="flex items-center gap-[10px]">
            <Setting />
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Capabilities<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-[16px] mt-4">
            {ROLES.map((role) => (
              <RolePill key={role} label={role} />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-[24px]">
          <div className="flex items-center gap-[10px]">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Print & <span className="text-primary">Publication Design.</span>
            </h1>
          </div>

          <div className="grid gap-[42px]">
            <div className="">
              <Image
                src="/gallery/gallery1.png"
                alt="box"
                width={1512}
                height={600}
                className="w-full border border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/gallery/gallery2.png"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
              <Image
                src="/gallery/gallery3.png"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-[24px]">
          <div className="flex items-center gap-[10px]">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Campaign &
              <span className="text-primary"> Marketing Creative.</span>
            </h1>
          </div>
          <div className="grid gap-[42px]">
            <div className="">
              <Image
                src="/gallery/gallery4.png"
                alt="box"
                width={1512}
                height={600}
                className="w-full border border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/gallery/gallery5.png"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
              <Image
                src="/gallery/gallery6.png"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Image
                src="/gallery/gallery7.jpg"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
              <Image
                src="/gallery/gallery8.jpg"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
              <Image
                src="/gallery/gallery9.jpg"
                alt="box"
                width={1512}
                height={2064}
                className="w-full border border-[#D4D4D4]"
              />
            </div>
            <div className="">
              <Image
                src="/gallery/gallery10.png"
                alt="box"
                width={1512}
                height={600}
                className="w-full border border-[#D4D4D4]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-[24px]">
          <div className="flex items-center gap-[10px]">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Brand<span className="text-primary"> Identity.</span>
            </h1>
          </div>
          <div className="grid gap-[42px] ">
            <div className="border-[1px] border-[#D4D4D4]">
              <Image
                src="/gallery/gallery11.png"
                alt="box"
                width={1512}
                className="p-4"
                height={600}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/gallery/gallery12.1.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/gallery/gallery13.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Image
                src="/gallery/gallery14.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/gallery/gallery15.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/gallery/gallery16.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-[24px]">
          <div className="flex items-center gap-[10px]">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Illustration
              <span className="text-primary"> & Visual Systems.</span>
            </h1>
          </div>
          <div className="grid gap-[42px] ">
            <div className="">
              <Image
                src="/gallery/gallery17.png"
                alt="box"
                width={1512}
                height={600}
                // className="w-full h-[200px] md:h-[600px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white my-14" />
        <div className="grid gap-[24px]">
          <div className="flex items-center gap-[10px]">
            {/* <Laptop /> */}
            <h1 className="text-3xl md:text-5xl font-sora font-semibold">
              Cause-Based<span className="text-primary"> Campaigns.</span>
            </h1>
          </div>

          <div className="grid gap-[42px]">
            <div className="border-[1px] border-[#D4D4D4]">
              <Image
                src="/gallery/gallery18.jpg"
                alt="box"
                width={1512}
                height={600}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Image
                src="/gallery/gallery19.png"
                alt="box"
                width={1512}
                height={2064}
              />
              <Image
                src="/gallery/gallery20.png"
                alt="box"
                width={1512}
                height={2064}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
