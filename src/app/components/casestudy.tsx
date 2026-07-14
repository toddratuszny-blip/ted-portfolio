"use client";

import { useState } from "react";
import CaseStudyWork from "./casestudywork";

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("Dribble");

  return (
    <div className="w-full bg-[#FAFAFA] px-4  py-10 md:py-24">
      <div className="max-w-7xl mx-auto flex items-center justify-center py-4 md:py-8">
        <div className="relative h-auto w-fit px-4 text-center">
          <h1 className="text-3xl md:text-[100px] font-black font-sora text-[#171717] tracking-tight leading-none">
            Our Case Studies.
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="w-full md:w-131.5 text-center md:text-left">
          <h3 className="text-lg md:text-2xl">
            We partner with bold brands to create unforgettable identities and
            experiences.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-2 w-fit ">
          <button
            onClick={() => setActiveTab("Dribble")}
            className={`w-25 md:w-26.5 h-8 rounded-full cursor-pointer flex items-center justify-center border border-[#E5E5E5] transition-colors ${activeTab === "Dribble" ? "bg-primary text-white" : "bg-white text-black"}`}
          >
            <p className="text-[14px] md:text-[16px]">Dribble</p>
          </button>
          <button
            onClick={() => setActiveTab("Behance")}
            className={`w-25 md:w-26.5 h-8 rounded-full flex cursor-pointer items-center justify-center border border-[#E5E5E5] transition-colors ${activeTab === "Behance" ? "bg-primary text-white" : "bg-white text-black"}`}
          >
            <p className="text-[14px] md:text-[16px]">Behance</p>
          </button>
          <button
            onClick={() => setActiveTab("Pinterest")}
            className={`w-25 md:w-26.5 h-8 rounded-full flex cursor-pointer items-center justify-center border border-[#E5E5E5] transition-colors ${activeTab === "Pinterest" ? "bg-primary text-white" : "bg-white text-black"}`}
          >
            <p className="text-[14px] md:text-[16px]">Pinterest</p>
          </button>
        </div>
      </div>

      <CaseStudyWork />
    </div>
  );
}
