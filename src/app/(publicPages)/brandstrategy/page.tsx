import BrandStrategySection from "../../components/brandstrategysection";
import LightboxImage from "../../components/lightboximage";

const SUMMIT_IMAGES = ["/SPR.jpg"];

export default function BrandStrategy() {
  return (
    <main className="mx-auto mb-32 max-w-7xl px-4 md:mt-8 md:px-0">
      <section className="mb-14">
        <div className="mb-10 flex flex-col gap-7">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Summit Point Roofing
              </p>
            </div>

            <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
          </div>

          <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
            Brand Strategy • Creative Direction • Integrated Marketing
          </h1>

          <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
            Brand strategy, digital experience, sales enablement, integrated
            campaigns, and marketing operations for a multi-division roofing
            organization.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <LightboxImage
            src="/SPR3.jpg"
            alt="Summit Point Roofing case study featuring website strategy, commercial sales materials, referral marketing, brand assets, and marketing operations"
            width={2048}
            height={1179}
            gallery={SUMMIT_IMAGES}
            index={0}
            className="block h-auto w-full object-contain"
          />
        </div>
      </section>

      <BrandStrategySection />
    </main>
  );
}