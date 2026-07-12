import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import OverViewSection from "../components/overviewsection";

export default function IndustrialBrand() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mb-32 md:mt-8 p-4 md:p-0 ">
        <div className="gap-7 flex flex-col mb-15">
          <div className="flex  items-center height-[36px]  gap-2.5">
            <div className=" bg-primary flex justify-center items-center  rounded-full py-2.5 px-5 ">
              <p className="text-white text-base whitespace-nowrap">
                Industrial Brand Ecosystem
              </p>
            </div>
            <div className="w-44 h-0.5 bg-linear-to-r from-primary to-white opacity-100" />
          </div>
          <h2 className="text-[32px] md:text-6xl leading-18 font-sora font-semibold">
            Brand Development • Multi-Brand Marketing • B2B Strategy
          </h2>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" w-full ">
            <Image
              src="/industrial1.png"
              alt="box"
              width={1512}
              height={2064}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-4 mt-6">
          <Image
            src="/global.png"
            alt="Global"
            width={292}
            height={116}
            className="h-fit max-h-29 border object-cover border-neutral-300"
          />
          <Image
            src="/conical2.png"
            alt="Conical"
            width={292}
            height={116}
            className="h-fit max-h-29 border object-cover border-neutral-300"
          />
          <Image
            src="/abrasives.png"
            alt="Abrasives"
            width={292}
            height={116}
            className="h-fit max-h-29 border object-cover border-neutral-300"
          />
          <Image
            src="/elite.png"
            alt="Elite"
            width={292}
            height={116}
            className="h-fit max-h-29 border object-cover border-neutral-300"
          />
        </div>
        <OverViewSection />
      </div>
      <Footer />
    </>
  );
}
