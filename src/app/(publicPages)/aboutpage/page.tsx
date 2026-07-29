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
        imgSrcTwo="/whoWeAreTwo.png"
        badgeText="About Me"
        heading="Creative leadership grounded in practical execution."
        description="Marketing is strongest when strategy and execution work together. Because I've led everything from brand development and digital experiences to sales enablement and campaign production, I understand how decisions made in one area affect the entire customer journey. That perspective helps me build marketing systems that are cohesive, practical, and aligned with business goals."
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