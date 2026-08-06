import Image from "next/image";
import About from "../../components/about";
import AboutUsHeader from "../../components/aboutusheader";
import Talk from "../../components/talk";

export default function Aboutpage() {
  return (
    <div>
      <AboutUsHeader />

      <About
        imgSrcOne="/LTG Mask.png"
        badgeText="About Me"
        heading="Creative leadership grounded in practical execution."
        description={
          <>
            <p>
              Marketing is strongest when strategy and execution work together.
              I’ve led work across brand development, digital experiences, sales
              enablement, and campaign production.
            </p>

            <p className="mt-6">
              That experience helps me understand how decisions in one area
              affect the entire customer journey. It allows me to build
              marketing systems that are cohesive, practical, and aligned with
              business goals.
            </p>
          </>
        }
      />

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