import Image from "next/image";

export default function AboutUsHeader() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16 px-4 xl:px-0 pt-8 pb-12 md:pt-14 md:pb-20">
      <div className="max-w-6xl">
        <h1 className="text-black text-[40px] md:text-[72px] font-semibold leading-[1.08] tracking-[-0.04em] font-sora text-center md:text-left">
          A Broad Marketing Background.{" "}
          <span className="text-primary">
            A Creative Point of View.
          </span>
        </h1>

        <p className="max-w-3xl mt-6 md:mt-8 text-[#404040] text-[18px] md:text-[22px] leading-[1.6] text-center md:text-left">
          For more than 15 years, I’ve worked across brand strategy,
          creative direction, ecommerce, web, content, and sales enablement.
          My experience spans strategic planning and hands-on execution,
          allowing me to connect business goals with clear positioning,
          cohesive creative systems, and practical marketing solutions.
        </p>
      </div>

      <div className="relative w-full">
        <Image
          src="/Subtract3.png"
          alt="Selected creative and marketing work"
          width={1216}
          height={480}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}