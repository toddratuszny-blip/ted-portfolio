import Image from "next/image";
import FooterNav from "./footernav";
import MailArrow from "../Icons/mailarrow";
export default function Footer() {
  return (
    <div className="h-auto w-full bg-[url('/footerBg.png')] bg-cover bg-center pt-12 md:pt-24 pb-12 md:pb-8 grid gap-9.5 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-60">
        <div className="h-auto  grid gap-5 w-full">
          <div className="flex items-center justify-center md:justify-start w-full">
            <Image src="logowhite.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className="text-center md:text-start">
            <p className="text-lg text-[#D4D4D4] ">
              Explore selected case studies showing how strategy, creative
              direction, and marketing execution come together to support
              business growth. Explore selected case studies showing how
              strategy, creative direction, and marketing execution come
              together to support business growth.
            </p>
          </div>
        </div>
        <div className="text-center md:text-start space-y-3">
          <label className="font-medium text-xl text-white uppercase inline-block mb-b">
            Subscribe
          </label>
          <div className="w-full sm:w-92  pl-6 pr-2 pt-2 pb-2 flex items-center justify-between gap-4.5 rounded-[99px] border border-[#FFFFFF33] bg-[#FFFFFF29] backdrop-blur-[7px] transition-all duration-300 focus-within:border-primary/80">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-none outline-none text-white font-['Poppins'] font-medium text-[18px] placeholder-[#FFFFFF99] placeholder:font-normal"
            />
            <button
              type="submit"
              aria-label="Submit Email Address"
              className="w-9 h-9 bg-primary shrink-0 flex items-center justify-center rounded-full text-white shadow-md transition-transform active:scale-95"
            >
              <MailArrow />
            </button>
          </div>
        </div>
      </div>
      <div className="  grid gap-10.5">
        <div>
          <FooterNav />
        </div>

        <div className="px-6 lg:px-0 pb-6 md:pb-0">
          <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto gap-4">
            <p className="text-white text-center md:text-left text-sm md:text-base">
              © 2026 TR Portfolio. All rights reserved.
            </p>

            <div>
              <ul className="flex flex-wrap justify-center md:justify-end gap-2.5 md:gap-5 text-sm md:text-base">
                <li className="text-neutral-100 cursor-pointer hover:border-b border-b-0 border-white">
                  Terms & Conditions
                </li>
                <li className="text-neutral-100 cursor-pointer hover:border-b border-b-0 border-white">
                  Privacy Policy
                </li>
                <li className="text-neutral-100 cursor-pointer hover:border-b border-b-0 border-white">
                  Cookies Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
