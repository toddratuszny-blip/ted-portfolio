import Image from "next/image";
import ArrowDown from "../Icons/arrowdown";
import ArrowRight from "../Icons/arrowright";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="h-auto py-12 md:py-24 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-3 bg-neutral-100 px-7.5 pt-7.5 md:pt-14 md:px-14  flex-col md:flex-row justify-between items-center md:items-stretch gap-10 md:gap-12 border border-[#D4D4D4] rounded-xl md:rounded-none">
        <div className="w-full col-span-2 flex flex-col justify-between text-center pb-7.5 md:pb-14 md:text-left gap-8 md:gap-0">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl font-sora md:text-5xl leading-[130%]">
              Creative marketing for brands that{" "}
              <span className="text-primary">need clarity and momentum.</span>
            </h1>
            <h2 className="text-base font-sora md:text-xl leading-[160%]">
              Explore selected case studies showing how strategy, creative
              direction, and marketing execution come together to support
              business growth.
            </h2>
          </div>
          <Link href={"/contactus"}>
            <div className="bg-primary h-[56px] w-[186px] flex items-center justify-center rounded-full gap-[12px]  cursor-pointer py-[16px] px-[24px] mx-auto md:mx-0">
              <p className="text-white text-[16px]">Get In Touch</p>
              <ArrowRight />
            </div>
          </Link>
        </div>
        <div className="w-[80%] md:w-auto flex justify-center">
          <Image
            src="/mobile.png"
            alt="box"
            width={386}
            height={500}
            className="mt-[5px] w-full h-auto object-contain max-h-[400px] md:max-h-full"
          />
        </div>
      </div>
    </div>
  );
}
