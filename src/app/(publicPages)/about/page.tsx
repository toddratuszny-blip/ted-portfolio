import Image from "next/image";
import About from "../../components/about";
import AboutUsHeader from "../../components/aboutusheader";
import Talk from "../../components/talk";

const capabilities = [
{
title: "Creative Direction",
description:
"Campaign concepts, visual systems, content development, production oversight, and direction of internal and external creative resources.",
},
{
title: "Brand Strategy & Design Systems",
description:
"Brand architecture, positioning, messaging, identity systems, standards, rebrands, and scalable frameworks that keep brands cohesive across touchpoints.",
},
{
title: "Integrated Campaigns",
description:
"Cross-channel creative spanning digital, email, content, print, promotions, customer communications, and sales support.",
},
{
title: "Creative Operations",
description:
"Creative intake, prioritization, workflows, resource coordination, agency and vendor management, and quality control across multidisciplinary work.",
},
{
title: "Content & Sales Enablement",
description:
"Web content, presentations, pitchbooks, proposals, educational materials, product communications, and customer-facing sales tools.",
},
{
title: "Digital & Ecommerce Experience",
description:
"Website strategy, ecommerce experiences, merchandising, product systems, marketplace creative, and digital customer journeys.",
},
];

export default function Aboutpage() {
return ( <div> <AboutUsHeader />

```
  <About
    imgSrcOne="/LTG Mask.png"
    badgeText="About Me"
    heading="A broader perspective on the work."
    description={
      <>
        <p>
          I began my career in design and art direction, building the
          hands-on creative foundation that still shapes how I work today.
          Over time, my responsibilities expanded into brand strategy,
          integrated campaigns, creative operations, digital experiences,
          content, and sales enablement.
        </p>

        <p className="mt-6">
          That range helps me see both the immediate creative challenge and
          the larger business context around it—then build work that is
          cohesive, strategically grounded, and practical to execute across
          teams, channels, and customer touchpoints.
        </p>
      </>
    }
  />

  <section className="bg-[#242424] px-4 pb-12 pt-3 md:pb-20 md:pt-8 lg:px-0">
    <div className="mx-auto max-w-7xl">
      <div className="border-t border-white/15 pt-10 md:pt-16">
        <div className="mb-8 max-w-4xl md:mb-10">
          <div className="mb-4 flex w-fit items-center justify-center rounded-full border border-primary bg-[#B31F3C66] px-3">
            <p className="text-[16px] text-white md:text-[18px]">
              Capabilities
            </p>
          </div>

          <h2 className="mb-4 font-sora text-3xl font-semibold leading-[1.15] text-white md:text-4xl">
            Where creative direction meets execution.
          </h2>

          <p className="text-base font-light leading-[1.55] text-white/80 md:hidden">
            Experience spanning creative direction, brand strategy,
            integrated campaigns, creative operations, content, sales
            enablement, and digital execution across B2B, B2C, and D2C
            organizations.
          </p>

          <p className="hidden text-base font-light leading-[1.6] text-white/80 md:block md:text-xl">
            My strongest work sits at the intersection of creative
            direction, brand systems, and integrated execution—supported by
            experience across content, digital, ecommerce, sales enablement,
            and cross-functional delivery.
          </p>
        </div>

        <div className="space-y-2 md:hidden">
          {capabilities.map((capability) => (
            <details
              key={capability.title}
              className="group rounded-lg border border-white/10 bg-white/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 [&::-webkit-details-marker]:hidden">
                <span className="font-sora text-[17px] font-semibold leading-tight text-white">
                  {capability.title}
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-xl font-light leading-none text-white/70 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="px-4 pb-4">
                <p className="border-t border-white/10 pt-3 text-[15px] font-light leading-[1.55] text-white/70">
                  {capability.description}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="mb-3 font-sora text-xl font-semibold leading-tight text-white">
                {capability.title}
              </h3>

              <p className="text-base font-light leading-[1.55] text-white/70">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-5xl border-l-2 border-primary pl-5 md:mt-12 md:pl-6">
          <p className="text-base font-light leading-[1.6] text-white/80 md:hidden">
            <span className="font-semibold text-white">15+ years</span> across
            agency and in-house environments, spanning B2B, B2C, and D2C
            organizations—from multi-brand portfolios and consumer
            ecommerce to a growing multi-division service business.
          </p>

          <p className="hidden font-sora text-lg font-normal leading-[1.55] text-white md:block md:text-xl">
            Experience across agency and in-house environments, spanning
            B2B, B2C, and D2C organizations—from multi-brand portfolios and
            consumer ecommerce to a growing multi-division service
            business.
          </p>
        </div>
      </div>
    </div>
  </section>

  <div className="relative">
    <Talk />

    <Image
      alt=""
      src="/letsTalkBg.png"
      width={2000}
      height={2000}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
  </div>
</div>

);
}
