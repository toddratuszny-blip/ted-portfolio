import GallerySection from "../../components/gallerysection";
import LightboxImage from "../../components/lightboximage";

const CREATIVE_GALLERY_IMAGES = ["/Creative.jpg"];

export default function CreativeGallery() {
  return (
    <main className="mx-auto mb-32 max-w-7xl px-4 font-sora md:mt-8 md:px-0">
      <section className="mb-14">
        <div className="mb-10 flex flex-col gap-7">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center rounded-full bg-primary px-5 py-2.5">
              <p className="whitespace-nowrap text-base text-white">
                Creative Gallery
              </p>
            </div>

            <div className="h-0.5 w-44 bg-linear-to-r from-primary to-white" />
          </div>

          <h1 className="font-sora text-[32px] font-semibold leading-tight md:text-6xl">
            Selected Creative Work Across Brand, Print & Digital
          </h1>

          <p className="max-w-5xl font-sora text-xl leading-relaxed text-[#404040]">
            A cross-section of brand identity, editorial design, advertising,
            digital experiences, illustration, and cause-based creative
            developed across diverse industries and audiences.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <LightboxImage
            src="/Creative3.jpg"
            alt="Creative gallery featuring brand identity, editorial design, advertising, digital work, illustration, and nonprofit campaigns"
            width={2048}
            height={1179}
            gallery={CREATIVE_GALLERY_IMAGES}
            index={0}
            className="block h-auto w-full object-contain"
          />
        </div>
      </section>

      <GallerySection />
    </main>
  );
}