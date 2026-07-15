"use client";
import Image from "next/image";
import Link from "next/link";
import FaceBook from "../Icons/facebook";
import Instagram from "../Icons/instagram";
import LinkedIn from "../Icons/linkedin";
import BE from "../Icons/BE";
import ArrowRight from "../Icons/arrowright";
import ArrowDown from "../Icons/arrowdown";
import { SITE_CONFIG } from "../constants/site-config";

export default function Header() {
  return (
    <section className="w-full relative md:pt-16 md:pb-8 bg-white overflow-hidden">
      <Image
        alt=""
        width={800}
        height={800}
        className="h-fit absolute left-0 top-0 "
        src={"/heroEllipse.png"}
      />
      <div className="max-w-7xl  mx-auto grid grid-cols-12 items-start px-4 xl:px-0 relative">
        <div className="col-span-12 lg:col-span-11 text-center lg:text-left">
          <h1 className="text-[40px] sm:text-[64px] md:text-[80px] font-bold text-black leading-[1.1] tracking-tight font-sora">
            Strategic Brand <br className="hidden md:block" />
            <span className="text-primary">Marketing & Creative</span>{" "}
            <br className="hidden md:block" />
            Direction For Growing <br className="hidden md:block" />
            Businesses.
          </h1>
        </div>

        <div className="col-span-12 lg:col-span-1 flex flex-row lg:flex-col items-center justify-center lg:justify-self-end gap-5 pt-8 lg:pt-4">
          {/* <div className="hover:opacity-80 transition-opacity text-black hover:text-white w-10.5 h-10.5 bg-neutral-100 hover:bg-black flex items-center justify-center rounded-full border-[#E5E5E5] border-[1.17px]">
            <Link href="#">
              <FaceBook fill="currentColor" />
            </Link>
          </div>
          <div className="hover:opacity-80 transition-opacity text-black hover:text-white w-10.5 h-10.5 bg-neutral-100 hover:bg-black flex items-center justify-center rounded-full border-[#E5E5E5] border-[1.17px]">
            <Link href="#">
              <Instagram fill="currentColor" />
            </Link>
          </div> */}
          <div className="hover:opacity-80 transition-opacity text-black hover:text-white w-10.5 h-10.5 bg-neutral-100 hover:bg-black flex items-center justify-center rounded-full border-[#E5E5E5] border-[1.17px]">
            <Link
              href={SITE_CONFIG.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn fill="currentColor" />
            </Link>
          </div>
          {/* <div className="hover:opacity-80 transition-opacity text-black hover:text-white w-10.5 h-10.5 bg-neutral-100 hover:bg-black flex items-center justify-center rounded-full border-[#E5E5E5] border-[1.17px]">
            <Link href="#">
              <BE fill="currentColor" />
            </Link>
          </div> */}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 md:mt-16 items-end max-w-7xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 w-full md:w-[514px] lg:ml-[25%]">
          <p className="text-[#171717] text-[18px] md:text-[24px] sm:text-xl leading-relaxed font-400">
            I help brands clarify their positioning, build stronger marketing
            systems, and create cohesive creative experiences across digital,
            content, ecommerce, and sales channels.
          </p>
          <Link
            href="/industrialbrand"
            className="inline-flex items-center gap-3 bg-primary  text-white font-medium px-6 py-3.5 rounded-full "
          >
            <span>{SITE_CONFIG.ctas.viewCaseStudies}</span>
            <ArrowRight />
          </Link>
        </div>

        <div className="flex justify-center md:justify-end w-full">
          <div className="overflow-hidden rounded-sm shadow-sm max-w-[320px] w-full h-60 relative">
            <Image
              src="/female.png"
              alt="Creative team collaborating at desktop workspace"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 560px"
              priority
            />
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
        className="relative z-10 flex items-center justify-center lg:justify-start gap-2 mt-6 md:mt-12 self-start select-none group cursor-pointer max-w-7xl mx-auto px-4 xl:px-0 mb-4 md:mb-8 md:mb-0 w-full"
      >
        <span className="text-[18px] font-semibold tracking-wide text-black group-hover:text-primary transition-colors duration-200">
          Scroll
        </span>
        <div className="w-[36px] h-[26px] rounded-full bg-black flex items-center justify-center text-white px-[9px] py-[4px] group-hover:bg-primary transition-colors duration-200 ">
          <ArrowDown />
        </div>
      </button>
    </section>
  );
}
