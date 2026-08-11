import Image from "next/image";
import Link from "next/link";

const works = [
  {
    src: "/homecasestudy/industrial-hero-CS.jpg",
    alt: "Industrial Brand Ecosystem case study",
    title: "Industrial Brand\nEcosystem",
    layout: "half",
    useFill: true,
    hasBorder: true,
    href: "/industrialbrand",
  },
  {
    src: "/homecasestudy/mary_home.png",
    alt: "Mary Ann's Chocolates case study",
    title: "Mary Ann's\nChocolates",
    layout: "half",
    useFill: false,
    hasBorder: true,
    href: "/mary-anns-chocolates",
  },
  {
    src: "/homecasestudy/SPR-Home.jpg",
    alt: "Summit Point Roofing case study",
    title: "Summit Point\nRoofing",
    layout: "full",
    useFill: true,
    hasBorder: true,
    href: "/brandstrategy",
  },
  {
    src: "/homecasestudy/lifetogo_homepage_1200.png",
    alt: "Accelerate360 LifeToGo case study",
    title: "Accelerate360\nLifeToGo",
    layout: "half",
    useFill: false,
    hasBorder: true,
    href: "/accelerate360",
  },
  {
    src: "/homecasestudy/creative.jpg",
    alt: "Creative Gallery",
    title: "Creative\nGallery",
    layout: "half",
    useFill: false,
    hasBorder: true,
    href: "/gallery",
  },
];

interface WorkItem {
  src: string;
  alt: string;
  title: string;
  layout: "half" | "full";
  useFill: boolean;
  hasBorder?: boolean;
  href: string;
}

function WorkCard({ item }: { item: WorkItem }) {
  const titleLines = item.title.split("\n");

  if (item.layout === "full") {
    return (
      <Link
        href={item.href}
        className={`relative block w-full overflow-hidden bg-white ${
          item.hasBorder ? "border border-[#D4D4D4]" : ""
        }`}
      >
        <div className="group relative w-full cursor-pointer overflow-hidden">
          <Image
            src={item.src}
            alt={item.alt}
            width={1200}
            height={560}
            priority
            className="block h-auto w-full object-cover"
          />

          <div
            className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          >
            <h3 className="text-2xl font-semibold leading-tight text-white md:text-[32px]">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h3>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      className={`group relative block aspect-[584/560] w-full cursor-pointer overflow-hidden ${
        item.hasBorder ? "border border-[#D4D4D4]" : ""
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      >
        <h3 className="text-2xl font-semibold leading-tight text-white md:text-[32px]">
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h3>
      </div>
    </Link>
  );
}

export default function CaseStudyWork() {
  const halfWorks = works.filter((w) => w.layout === "half");
  const fullWorks = works.filter((w) => w.layout === "full");

  return (
    <div className="mx-auto mt-6 grid max-w-7xl gap-6 px-0 md:mt-12 md:gap-12 xl:px-0">
      {/* Row 1 */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-12">
        {halfWorks.slice(0, 2).map((item) => (
          <WorkCard key={item.href} item={item as WorkItem} />
        ))}
      </div>

      {/* Full-width case studies */}
      {fullWorks.map((item) => (
        <WorkCard key={item.href} item={item as WorkItem} />
      ))}

      {/* Row 2 */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-12">
        {halfWorks.slice(2).map((item) => (
          <WorkCard key={item.href} item={item as WorkItem} />
        ))}
      </div>
    </div>
  );
}