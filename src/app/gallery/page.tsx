import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import GallerySection from "../components/gallerysection";

export default function Accelerate() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto mb-32 md:mt-8 p-4 md:p-0 font-sora">
        <div className="gap-7 flex flex-col mb-15">
          <div className="flex  items-center height-[36px]  gap-2.5">
            <div className=" bg-primary flex justify-center items-center  rounded-full py-2.5 px-5 ">
              <p className="text-white text-base whitespace-nowrap">
                Creative Gallery
              </p>
            </div>
            <div className="w-44 h-0.5 bg-linear-to-r from-primary to-white opacity-100" />
          </div>
          <h2 className="text-[32px] md:text-6xl leading-18 font-sora font-semibold">
            Range across formats, industries, and audiences.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" w-full ">
            <Image
              src="/gallery/galleryhero.png"
              alt="box"
              width={1512}
              height={2064}
              className="w-full h-full"
            />
          </div>
        </div>
        <GallerySection />
      </div>
      <Footer />
    </>
  );
}
