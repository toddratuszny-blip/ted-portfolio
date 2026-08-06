"use client";

import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../Icons/linkedin";
import ArrowRight from "../Icons/arrowright";
import ArrowDown from "../Icons/arrowdown";
import { SITE_CONFIG } from "../constants/site-config";

export default function Header() {
  return (
    <section className="relative w-full overflow-hidden bg-white md:pb-8 md:pt-16">
      <Image
        src="/heroEllipse.png"
        alt=""
        width={800}
        height={800}
        className="absolute left-0 top-0 h-fit"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-start px-4 xl:px-0">
        <div className="col-span-12 text-center lg:col-span-11 lg:text-left">
          <h1 className="font-sora text-[40px] font-bold leading-[1.1] tracking-tight text-black sm:text-[64px] md:text-[80px]">
            Strategic Thinking. <br className="hidden md:block" />
            <span className="text-primary">Creative Leadership.</span>{" "}
            <br className="hidden md:block" />
            Marketing Execution.
          </h1>
        </div>

        <div className="col-span-12 flex flex-row items-center justify-center gap-5 pt-8 lg:col-span-1 lg:justify-self-end lg:pt-4">
          <div className="flex h-10.5 w-10.5 items-center justify-center rounded-full border-[1.17px] border-[#E5E5E5] bg-neutral-100 text-black transition-opacity hover:bg-black hover:text-white hover:opacity-80">
            <Link
              href={SITE_CONFIG.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn fill="currentColor" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-6 grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:mt-16 md:grid-cols-[0.9fr_1.1fr] xl:px-0">
        <div className="flex w-full flex-col items-center gap-8 text-center md:items-start md:text-left lg:ml-[18%] lg:max-w-[500px]">
          <p className="text-[18px] font-normal leading-relaxed text-[#171717] sm:text-xl md:text-[24px]">
            I build brands, marketing systems, and digital experiences that
            help organizations communicate more clearly, compete more
            effectively, and grow with confidence.
          </p>

          <Link
            href="/industrialbrand"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-medium text-white"
          >
            <span>{SITE_CONFIG.ctas.viewCaseStudies}</span>
            <ArrowRight />
          </Link>
        </div>

        <div className="flex w-full justify-center md:justify-end">
          <div className="w-full max-w-[620px]">
            <Image
              src="/home hero.png"
              alt="Conical catalog spreads"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-sm"
              sizes="(max-width: 768px) 100vw, 620px"
              priority
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
        className="relative z-10 mx-auto mb-4 mt-6 flex w-full max-w-7xl cursor-pointer select-none items-center justify-center gap-2 px-4 md:mb-0 md:mt-12 lg:justify-start xl:px-0"
      >
        <span className="text-[18px] font-semibold tracking-wide text-black transition-colors duration-200 hover:text-primary">
          Scroll
        </span>

        <div className="flex h-[26px] w-[36px] items-center justify-center rounded-full bg-black px-[9px] py-[4px] text-white transition-colors duration-200 hover:bg-primary">
          <ArrowDown />
        </div>
      </button>
    </section>
  );
}