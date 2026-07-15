import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "../constants/site-config";
import FooterNav from "./footernav";

export default function Footer() {
  return (
    <div className="h-auto w-full bg-[url('/footerBg.png')] bg-cover bg-center pt-12 md:pt-24 pb-12 md:pb-8 grid gap-9.5 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-60">
        <div className="h-auto grid gap-5 w-full">
          <div className="flex items-center justify-center md:justify-start w-full">
            <Image
              src="logowhite.svg"
              alt={SITE_CONFIG.brand.logoAlt}
              width={100}
              height={100}
            />
          </div>
          <div className="text-center md:text-start">
            <p className="text-lg text-[#D4D4D4] ">
              {SITE_CONFIG.footer.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10.5">
        <div>
          <FooterNav />
        </div>

        <div className="px-6 lg:px-0 pb-6 md:pb-0">
          <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto gap-4">
            <p className="text-white text-center md:text-left text-sm md:text-base">
              {SITE_CONFIG.brand.copyright}
            </p>

            <div>
              <ul className="flex flex-wrap justify-center md:justify-end gap-2.5 md:gap-5 text-sm md:text-base">
                {SITE_CONFIG.footer.legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-neutral-100 cursor-pointer hover:border-b border-b-0 border-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
