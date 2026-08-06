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
            <p className="text-[18px] leading-[1.6] text-[#404040] md:text-[22px]">
              Every project starts by understanding the business problem—not the
              deliverable.
            </p>

            <p className="text-[18px] leading-[1.6] text-[#404040] md:text-[22px]">
              Whether the solution is a website, campaign, product launch, sales
              tool, or brand refresh, I focus on simplifying complexity,
              aligning stakeholders, and creating work that serves a clear
              business purpose.
            </p>

            <p className="font-sora text-[19px] font-semibold leading-[1.5] text-black md:text-[24px]">
              Strategy guides the direction. Execution brings it to life.
            </p>

            <p className="text-[18px] leading-[1.6] text-[#404040] md:text-[22px]">
              From there, I develop practical solutions and carry ideas from
              early strategy through final execution with consistency, clarity,
              and attention to detail.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href={SITE_CONFIG.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Todd Ratuszny on LinkedIn"
              className="group inline-flex items-center gap-4 rounded-full border border-primary px-5 py-3 font-sora text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white md:text-lg"
            >
              <span>Connect on LinkedIn</span>

              <span className="hidden transition-transform group-hover:translate-x-1 sm:block">
                <LongArrow className="text-primary transition-colors group-hover:text-white" />
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
                <LinkedIn fill="currentColor" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}