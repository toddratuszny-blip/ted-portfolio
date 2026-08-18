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
        heading="Creative at the Core. Marketing-Minded by Experience."
        description={
          <>
            <p>
              I've built my career at the intersection of creative and marketing—starting in design and art direction and expanding into brand strategy, digital, ecommerce, content, and sales enablement.
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