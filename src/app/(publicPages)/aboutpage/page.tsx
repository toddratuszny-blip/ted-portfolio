import Image from "next/image";
import About from "../../components/about";
import AboutUsHeader from "../../components/aboutusheader";
import Talk from "../../components/talk";

export default function Aboutpage() {
  return (
    <div>
      <AboutUsHeader />

      <About
        imgSrcOne="/whoWeAreOne.png"
        imgSrcTwo="/whoWeAreTwo.png"
        badgeText="About Me"
        heading="Creative leadership grounded in practical execution."
        description="My background is intentionally broad. I’ve led brand development, campaign creative, ecommerce, websites, content, photography, packaging, sales materials, and digital marketing across organizations ranging from small businesses to national brands. That range helps me see how every part of the customer experience connects—and how to turn strategy into work that can actually be implemented."
      />

      <div className="relative">
        <Talk />

        <Image
          alt=""
          src="/letsTalkBg.png"
          width={2000}
          height={2000}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>
    </div>
  );
}