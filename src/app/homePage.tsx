import Header from "./components/header";
import About from "./components/about";
import CaseStudy from "./components/casestudy";
import Approach from "./components/approach";
import GetInTouch from "./components/getintouch";

export default function HomePage() {
  return (
    <>
      <Header />

      <About
        badgeText="About"
        heading="A Broad Marketing Background. A Creative Point of View."
        description={
          <>
            <p>
              For 15+ years, I’ve worked across brand strategy, creative
              direction, ecommerce, web, content, and sales enablement.
            </p>

            <p className="mt-8">
              I connect business goals to clear positioning, cohesive creative
              systems, and practical execution across every customer touchpoint.
            </p>
          </>
        }
      />

      <CaseStudy />
      <Approach />
      <GetInTouch />
    </>
  );
}