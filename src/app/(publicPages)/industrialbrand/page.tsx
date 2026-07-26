import LightboxImage from "../../components/lightboximage";
import OverViewSection from "../../components/overviewsection";

const INDUSTRIAL_IMAGES = ["/industrial-hero.jpg"];

export default function IndustrialBrand() {
  return (
    <main className="mx-auto mb-32 max-w-7xl px-4 md:mt-8 md:px-0">
      <section className="mb-14">
        <div className="mb-10 flex flex-col gap-7">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Industrial Brand Ecosystem
              </p>
            </div>

            <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
          </div>

          <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
            Brand Strategy • Creative Direction • Multi-Brand Marketing
          </h1>

          <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
            Brand development, product marketing, ecommerce, digital marketing,
            and acquisition integration across a portfolio of manufacturing and
            distribution companies.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <LightboxImage
            src="/industrial-hero3.jpg"
            alt="Industrial brand ecosystem featuring websites, ecommerce platforms, catalogs, packaging, trade show materials, and product marketing"
            width={2048}
            height={1179}
            gallery={INDUSTRIAL_IMAGES}
            index={0}
            className="block h-auto w-full object-contain"
          />
        </div>
      </section>

      <OverViewSection />
    </main>
  );
}