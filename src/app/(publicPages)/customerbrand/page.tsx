import LightboxImage from "../../components/lightboximage";
import MaryAnnOverViewSection from "../../components/maryannoverviewsection";

const CUSTOMER_BRAND_IMAGES = ["/Mary-Anns.jpg"];

export default function CustomerBrand() {
  return (
    <main className="mx-auto mb-32 max-w-7xl px-4 md:mt-8 md:px-0">
      <section className="mb-14">
        <div className="mb-10 flex flex-col gap-7">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Mary Ann&apos;s Chocolates
              </p>
            </div>

            <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
          </div>

          <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
            Consumer Branding • Packaging • Retail Marketing
          </h1>

          <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
            Consumer branding, packaging, retail merchandising, and sales
            materials for a premium chocolate brand.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <LightboxImage
            src="/Mary-Anns3.jpg"
            alt="Mary Ann's Chocolates case study featuring consumer branding, product packaging, retail displays, catalogs, collateral, and promotional marketing"
            width={2048}
            height={1179}
            gallery={CUSTOMER_BRAND_IMAGES}
            index={0}
            className="block h-auto w-full object-contain"
          />
        </div>
      </section>

      <MaryAnnOverViewSection />
    </main>
  );
}