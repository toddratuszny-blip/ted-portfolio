import Image from "next/image";

export default function AboutUsHeader() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16 px-4 xl:px-0 pt-8 pb-12 md:pt-14 md:pb-20">
      <div className="max-w-6xl">
        <h1 className="text-black text-[40px] md:text-[72px] font-semibold leading-[1.08] tracking-[-0.04em] font-sora text-center md:text-left">
          Connecting Strategy, Creativity,{" "}
          <span className="text-primary">
            and Execution.
          </span>
        </h1>

        <p className="max-w-3xl mt-6 md:mt-8 text-[#404040] text-[18px] md:text-[22px] leading-[1.6] text-center md:text-left">
          My experience spans the full marketing ecosystem—from brand strategy and product marketing to digital experiences, content, ecommerce, and creative direction. That breadth allows me to connect business strategy with creative execution, helping organizations build stronger brands, create more cohesive customer experiences, and deliver measurable business results.
        </p>
      </div>

      <div className="relative w-full">
        {/* Desktop */}
        <Image
          src="/Elite Brand System2.jpg"
          alt="Selected creative and marketing work"
          width={1216}
          height={480}
          className="hidden h-auto w-full md:block"
          priority
        />

        {/* Mobile */}
        <Image
          src="/Elite Branding System3.png"
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