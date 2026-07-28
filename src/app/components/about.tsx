import Image from "next/image";

interface AboutSectionProps {
  badgeText: string;
  heading: string;
  description: string;
  imgSrcOne?: string;
  imgSrcTwo?: string;
}

export default function About({
  badgeText,
  heading,
  description,
}: AboutSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#242424] px-4 pb-12 pt-8 md:pb-16 md:pt-20 lg:px-0">
      <Image
        src="/aboutUsIllu.svg"
        alt=""
        width={400}
        height={400}
        className="pointer-events-none absolute right-0 top-1/2 h-120 w-auto -translate-y-1/2 opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex w-fit items-center justify-center rounded-full border border-primary bg-[#B31F3C66] px-3">
          <p className="text-[20px] text-white">{badgeText}</p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="w-full overflow-hidden rounded-sm">
            <Image
              src="/extreme3.png"
              alt="Conical Tool brand identity system"
              width={1600}
              height={900}
              className="block h-auto w-full object-contain"
              priority
            />
          </div>

          <div className="w-full text-left">
            <h2 className="mb-4 font-sora text-3xl font-semibold leading-[1.15] text-white md:text-4xl">
              {heading}
            </h2>

            <h3 className="max-w-xl text-base font-light leading-[1.45] text-white md:text-2xl">
              {description}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
