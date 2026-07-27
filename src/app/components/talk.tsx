import Link from "next/link";
import LinkedIn from "../Icons/linkedin";
import LongArrow from "../Icons/longarrow";
import { SITE_CONFIG } from "../constants/site-config";

export default function Talk() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24 xl:px-0">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.4fr] md:gap-16">
        <div>
          <h2 className="font-sora text-[42px] font-bold leading-none tracking-tight text-black md:text-[64px]">
            How <span className="font-normal text-primary">I Work</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-[#404040] text-[18px] md:text-[22px] leading-[1.6]">
              My career has never fit neatly into a single discipline. I&apos;ve
              worked across branding, creative direction, digital experiences,
              content, ecommerce, photography, communications, and sales
              enablement. That breadth helps me understand how individual
              projects connect to the larger customer experience.
            </p>

            <p className="text-[#404040] text-[18px] md:text-[22px] leading-[1.6]">
              I begin by understanding the problem behind the assignment. From
              there, I focus on simplifying complexity, developing practical
              solutions, and carrying ideas from early strategy through final
              execution with consistency and attention to detail.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <p className="font-sora text-base font-semibold text-primary md:text-lg">
              Connect on LinkedIn
            </p>

            <div className="hidden sm:block">
              <LongArrow />
            </div>

            <Link
              href={SITE_CONFIG.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Todd Ratuszny on LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-black transition-colors hover:bg-black hover:text-white"
            >
              <LinkedIn fill="currentColor" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}