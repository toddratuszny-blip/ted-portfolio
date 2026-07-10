// import Image from "next/image";
// import ArrowUpRight from "../Icons/arrowupright";

// export default function CaseStudyWork() {
//     return (

//         <div className="max-w-7xl mx-auto grid gap-[24px] md:gap-[48px] mt-[24px] md:mt-[48px] px-0 xl:px-0">
//             <div className="flex flex-col md:flex-row justify-between gap-[24px] md:gap-0">
//                 <div className="relative w-full md:w-[584px] h-[400px] md:h-[560px] group cursor-pointer overflow-hidden">
//                     <Image
//                         src="/work.png"
//                         alt="box"
//                         fill
//                         className="object-cover"
//                     />
//                     <div
//                         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
//                         style={{
//                             background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)"
//                         }}
//                     >
//                         <h3 className="text-white text-2xl md:text-[32px] font-semibold leading-tight">
//                             From Idea to Impact Name<br />Project Success.
//                         </h3>
//                     </div>
//                 </div>
//                 <div className="relative w-full md:w-[584px] h-auto md:h-[560px] group cursor-pointer overflow-hidden">
//                     <Image
//                         src="/work2.png"
//                         alt="box"
//                         width={584}
//                         height={560}
//                         className="w-full h-auto object-cover"
//                     />
//                     <div
//                         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
//                         style={{
//                             background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)"
//                         }}
//                     >
//                         <h3 className="text-white text-2xl md:text-[32px] font-semibold leading-tight">
//                             From Idea to Impact Name<br />Project Success.
//                         </h3>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className="relative w-full h-[300px] md:h-[560px] border border-[#D4D4D4] overflow-hidden py-4 bg-white">
//                     <div className="relative w-full h-full group cursor-pointer overflow-hidden">
//                         <Image
//                             src="/work3.png"
//                             alt="Case study work preview"
//                             fill
//                             priority
//                             className="object-cover"
//                         />
//                         <div
//                             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
//                             style={{
//                                 background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)"
//                             }}
//                         >
//                             <h3 className="text-white text-2xl md:text-[32px] font-semibold leading-tight">
//                                 From Idea to Impact Name Project Success.
//                             </h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col md:flex-row justify-between gap-[24px] md:gap-0">
//                 <div className="relative w-full md:w-[584px] h-auto md:h-[560px] group cursor-pointer overflow-hidden">
//                     <Image src="/work4.png" alt="box" width={584} height={560} className="w-full h-auto object-cover" />
//                     <div
//                         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
//                         style={{
//                             background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)"
//                         }}
//                     >
//                         <h3 className="text-white text-2xl md:text-[32px] font-semibold leading-tight">
//                             From Idea to Impact Name<br />Project Success.
//                         </h3>
//                     </div>
//                 </div>
//                 <div className="relative w-full md:w-[584px] h-auto md:h-[560px] group cursor-pointer overflow-hidden">
//                     <Image src="/work5.png" alt="box" width={584} height={560} className="w-full h-auto object-cover" />
//                     <div
//                         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
//                         style={{
//                             background: "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)"
//                         }}
//                     >
//                         <h3 className="text-white text-2xl md:text-[32px] font-semibold leading-tight">
//                             From Idea to Impact Name<br />Project Success.
//                         </h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-full h-auto md:h-[190px] flex items-center md:items-end justify-center py-[40px] md:py-0">
//                 <div className="bg-primary rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform"> <ArrowUpRight /> <p className="text-white text-[14px] md:text-[16px] leading-[15px] w-[56px] text-center pt-1">See All Work</p></div>
//             </div>
//         </div>
//     );
// }

import Image from "next/image";
import ArrowUpRight from "../Icons/arrowupright";
import Link from "next/link";

const works = [
  {
    src: "/homecasestudy/cs1.1.png",
    alt: "Work 1",
    title: "Industrial Brand Ecosystem",
    layout: "half",
    useFill: true,
    hasBorder: true,
    href: "/industrialbrand",
  },
  {
    src: "/homecasestudy/cs2.png",
    alt: "Work 2",
    title: "Mary Ann's Chocolates",
    layout: "half",
    useFill: false,
    hasBorder: true,
    href: "/customerbrand",
  },
  {
    src: "/homecasestudy/cs3.png",
    alt: "Case study work preview",
    title: "Summit Point Roofing",
    layout: "full",
    useFill: true,
    hasBorder: true,
    href: "/brandstrategy",
  },
  {
    src: "/homecasestudy/cs4.png",
    alt: "Work 4",
    title: "Accelerate360",
    layout: "half",
    useFill: false,
    hasBorder: true,
    href: "/accelerate",
  },
  {
    src: "/homecasestudy/cs5.png",
    alt: "Work 5",
    title: "Creative Gallery",
    layout: "half",
    useFill: false,
    hasBorder: true,
    href: "/gallery",
  },
];

const overlay = (
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
    style={{
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)",
    }}
  />
);

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
        className={`block relative w-full  overflow-hidden  bg-white ${item.hasBorder ? "border border-[#D4D4D4]" : ""}`}
      >
        <div className="relative w-full h-full group cursor-pointer overflow-hidden">
          <Image
            src={item.src}
            alt={item.alt}
            // fill
            width={1000}
            height={1000}
            priority
            className="w-full h-full"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          >
            <h3 className="text-white text-2xl md:text-[32px] font-semibold leading-tight">
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
      className={`relative w-full group cursor-pointer overflow-hidden block ${item.hasBorder ? "border border-[#D4D4D4]" : ""}`}
    >
      {item.useFill ? (
        <Image src={item.src} alt={item.alt} fill className="object-cover" />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          width={584}
          height={560}
          className="w-full h-full object-cover"
        />
      )}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) -23.89%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      >
        <h3 className="text-white text-2xl md:text-[32px] font-semibold leading-tight">
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
    <div className="max-w-7xl mx-auto grid gap-6 md:gap-12 mt-6 md:mt-12 px-0 xl:px-0">
      {/* Row 1: first 2 half items */}
      <div className="flex flex-col md:flex-row justify-between  gap-6 md:gap-12">
        {halfWorks.slice(0, 2).map((item, i) => (
          <WorkCard key={i} item={item as WorkItem} />
        ))}
      </div>

      {/* Full width items */}
      {fullWorks.map((item, i) => (
        <WorkCard key={i} item={item as WorkItem} />
      ))}

      {/* Row 2: last 2 half items */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
        {halfWorks.slice(2).map((item, i) => (
          <WorkCard key={i} item={item as WorkItem} />
        ))}
      </div>

      <div className="w-full h-auto md:h-47.5 flex items-center md:items-end justify-center py-10 md:py-0">
        <Link
          href="/industrialbrand"
          className="w-full h-auto md:h-47.5 flex items-center md:items-end justify-center py-10 md:py-0"
        >
          <div className="bg-primary rounded-full w-25 h-25 md:w-30 md:h-30 flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform">
            <ArrowUpRight />
            <p className="text-white text-[14px] md:text-[16px] leading-3.75 w-14 text-center pt-1">
              See All Work
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
