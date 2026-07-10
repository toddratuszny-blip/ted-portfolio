import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import CaseStudy from "./components/casestudy";
import Approach from "./components/approach";
import GetInTouch from "./components/getintouch";
import Footer from "./components/footer";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About
        badgeText="About Us."
        heading="A Portfolio Built Around Business Stories, Not Just Visual Work."
        description="My work sits at the intersection of brand strategy, creative direction, integrated marketing, and content development. Each project reflects how creative decisions support business goals, improve brand consistency, and help teams communicate more effectively across channels."
      />{" "}
      <CaseStudy />
      <Approach />
      <GetInTouch />
      <Footer />
    </>
  );
}
