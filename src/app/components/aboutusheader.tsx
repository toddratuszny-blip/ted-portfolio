import Image from "next/image";

export default function AboutUsHeader() {
  return (
<section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-12 pt-5 md:gap-12 md:pb-20 md:pt-16 xl:px-0">      <div className="max-w-6xl">
        <h1 className="text-center font-sora text-[40px] font-bold leading-[1.1] tracking-tight text-black sm:text-[64px] md:text-left md:text-[80px]">
          Connecting Strategy, Creativity,{" "}
          <span className="text-primary">and Execution.</span>
        </h1>

        <div className="mt-6 max-w-2xl text-center text-[18px] leading-[1.6] text-[#404040] md:mt-8 md:text-left md:text-[22px]">
          <p>
            My experience spans the full marketing ecosystem—from brand strategy
            and product marketing to digital experiences, ecommerce, content,
            and creative direction.
          </p>

          <p className="mt-6">
            I help connect business strategy with creative execution to build
            stronger brands, more cohesive customer experiences, and measurable
            business results.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Desktop */}
        <Image
          src="/conical global brand4.jpg"
          alt="Selected creative and marketing work"
          width={1216}
          height={480}
          className="hidden h-auto w-full md:block"
          priority
        />

        {/* Mobile */}
        <Image
          src="/conical global brand mobile3.jpg"
          alt="Selected creative and marketing work"
          width={900}
          height={1600}
          className="block h-auto w-full md:hidden"
          priority
        />
      </div>
    </section>
  );
}