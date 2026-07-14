import MaryAnnOverViewSection from "../../components/maryannoverviewsection";
import LightboxImage from "../../components/lightboximage";

const CUSTOMER_BRAND_IMAGES = ["/maryannhero.jpg"];

export default function CustomerBrand() {
  return (
    <>
      <div className="max-w-7xl mx-auto mb-32 md:mt-8 p-4 md:p-0 ">
        <div className="gap-7 flex flex-col mb-15">
          <div className="flex  items-center height-[36px]  gap-2.5">
            <div className=" bg-primary flex justify-center items-center  rounded-full py-2.5 px-5 ">
              <p className="text-white text-base whitespace-nowrap">
                Mary Ann&apos;s Chocolates
              </p>
            </div>
            <div className="w-44 h-0.5 bg-linear-to-r from-primary to-white opacity-100" />
          </div>
          <h2 className="text-[32px] md:text-6xl leading-18 font-sora font-semibold">
            Consumer Branding • Packaging • Retail Marketing
          </h2>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" w-full ">
            <LightboxImage
              src="/maryannhero.jpg"
              alt="box"
              width={1512}
              height={2064}
              gallery={CUSTOMER_BRAND_IMAGES}
              index={0}
              className="w-full h-full"
            />
          </div>
        </div>
        <MaryAnnOverViewSection />
      </div>
    </>
  );
}
