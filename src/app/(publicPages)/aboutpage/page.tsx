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
        badgeText="Who We Are"
        heading="Axleo is a business that provides services related to online marketing."
        description="Digital agencies can vary in size andspecialization. Some may focusonspecificniches, such as healthcare ore-commerce, while others may offeracomprehensive."
      />
      <div className="relative">
        <Talk />
        <Image
          alt=""
          src={"/letsTalkBg.png"}
          width={"2000"}
          height={"2000"}
          className="absolute top-0"
        />
      </div>
    </div>
  );
}
