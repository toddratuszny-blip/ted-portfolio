import Image from "next/image";

export default function AboutUsHeader() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-12 pt-5 md:gap-12 md:pb-20 md:pt-16 xl:px-0">
      <div className="max-w-6xl">
        <h1 className="text-center font-sora text-[40px] font-bold leading-[1.1] tracking-tight text-black sm:text-[64px] md:text-left md:text-[80px]">
          Creative at the Core.{" "}
          <span className="text-primary">Built for Business.</span>
        </h1>

        <div className="mt-6 max-w-2xl text-center text-[18px] leading-[1.6] text-[#404040] md:mt-8 md:text-left md:text-[22px]">
          <p>
            My career is rooted in design and art direction and has grown into
            creative leadership, brand strategy, integrated campaigns, and
            multidisciplinary execution.
          </p>

          <p className="mt-6">
            That foundation shapes how I approach the work: establish a clear
            brand direction, build cohesive creative systems, and connect ideas
            across channels so the execution serves both the audience and the
            business.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Desktop */}
        <Image
          src="/conical global brand4.jpg"
          alt="Selected creative, brand, and integrated marketing work"
          width={1216}
          height={480}
          className="hidden h-auto w-full md:block"
          priority
        />

        {/* Mobile */}
        <Image
          src="/conical global brand mobile3.jpg"
          alt="Selected creative, brand, and integrated marketing work"
          width={900}
          height={1600}
          className="block h-auto w-full md:hidden"
          priority
        />
      </div>
    </section>
  );
}