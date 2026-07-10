import Link from "next/link";
import BE from "@/app/Icons/BE";
import LinkedIn from "../Icons/linkedin";
import Instagram from "../Icons/instagram";
import FaceBook from "../Icons/facebook";
export default function FooterNav() {
  return (
    <nav className="max-w-7xl mx-auto flex justify-center  bg-transparent select-none">
      <div className="w-full px-4 md:px-7 py-4 md:py-4.5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 bg-white/08 border border-white/32 backdrop-blur-[3.5px] rounded-3xl md:rounded-[99px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex flex-row divide-x divide-gray-50 flex-wrap justify-center items-center gap-2.5 md:gap-4.5">
          <Link
            href="/"
            className="font-sora font-normal pe-4 text-base md:text-lg text-neutral-300 hover:text-white "
          >
            Home
          </Link>

          {/* <span className="w-px h-[15.5px] bg-white/20 hidden md:block" /> */}

          <Link
            href="/aboutpage"
            className="font-sora font-normal pe-4 text-base md:text-lg text-neutral-300 hover:text-white "
          >
            About Us
          </Link>

          {/* <span className="w-px h-[15.5px] bg-white/20 hidden md:block" /> */}

          <Link
            href="/contactus"
            className="font-sora font-normal text-base md:text-lg text-neutral-300 hover:text-white "
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-start gap-3">
          <Link
            href="#"
            className="w-10.5 cursor-pointer h-10.5 flex items-center justify-center bg-white/16 border border-white/16 rounded-full text-white hover:bg-white/30 "
          >
            <FaceBook fill="currentColor" />
          </Link>

          <Link
            href="#"
            className="w-10.5 cursor-pointer h-10.5 flex items-center justify-center bg-white/16 border border-white/16 rounded-full text-white hover:bg-white/30 "
          >
            <Instagram fill="currentColor" />
          </Link>

          <Link
            href="#"
            className="w-10.5 cursor-pointer h-10.5 flex items-center justify-center bg-white/16 border border-white/16 rounded-full text-white hover:bg-white/30 "
          >
            <LinkedIn fill="currentColor" />
          </Link>

          <Link
            href="#"
            className="w-10.5 cursor-pointer h-10.5 flex items-center justify-center bg-white/16 border border-white/16 rounded-full text-white hover:bg-white/30 "
          >
            <BE fill="currentColor" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
