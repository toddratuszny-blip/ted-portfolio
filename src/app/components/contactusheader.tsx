import Image from "next/image";
import ContactUsForm from "./contactusform";

export default function ContactUsHeader() {
  return (
    <div>
      <div className="relative w-full">
        {/* <Image
          alt=""
          src={"/contactUsIlluone.png"}
          className="absolute hidden md:block top-0 inset-e-0"
          width={240}
          height={240}
        /> */}
        <Image
          alt=""
          src={"/contactUsIlluTwo.png"}
          className="absolute hidden md:block bottom-0 left-0"
          width={240}
          height={240}
        />
        <div className="max-w-7xl mx-auto py-8 md:py-16">
          <div className="w-full flex flex-col gap-2 md:gap-6">
            <h1 className="text-black text-[40px] font-sora md:text-[80px] font-semibold text-center md:text-left">
              Contact <span className="text-primary">Us.</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-1 md:mt-0">
            <div className="w-full h-px bg-linear-to-r from-[#A4A4A4] to-white opacity-100 hidden md:block" />

            <h3 className="text-black text-[18px] md:text-[24px] leading-[144%] text-center md:text-left max-w-120">
              Creating a concise and effective design studio brief is crucial
              for outlining your business, its services.
            </h3>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 md:py-24 max-w-7xl mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
}
