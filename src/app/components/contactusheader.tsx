import Image from "next/image";
import ContactUsForm from "./contactusform";

export default function ContactUsHeader() {
  return (
    <div>
      <section className="relative w-full overflow-hidden">
        <Image
          alt=""
          src="/contactUsIlluTwo.png"
          className="pointer-events-none absolute bottom-0 left-0 hidden md:block"
          width={240}
          height={240}
        />

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-20 xl:px-0">
          <div className="flex flex-col gap-8 md:gap-12">
            <h1 className="text-center font-sora text-[48px] font-semibold leading-none tracking-tight text-black md:text-left md:text-[80px]">
              Let&apos;s <span className="text-primary">Connect.</span>
            </h1>

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="hidden h-px flex-1 bg-linear-to-r from-[#A4A4A4] to-white md:block" />

              <p className="max-w-2xl text-center font-sora text-base leading-relaxed text-gray-800 md:text-left md:text-xl">
                I&apos;m currently exploring remote opportunities in brand,
                creative, and marketing. Reach out by email, connect with me on
                LinkedIn, or view my resume below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:py-20 xl:px-0">
        <ContactUsForm />
      </section>
    </div>
  );
}