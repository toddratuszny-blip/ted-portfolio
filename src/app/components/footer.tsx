import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "../constants/site-config";
import FooterNav from "./footernav";

export default function Footer() {
  return (
    <footer className="w-full bg-[url('/footerBg.png')] bg-cover bg-center px-4 py-10 md:py-24 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl md:mb-16">
          <Image
            src="/logowhite.svg"
            alt={SITE_CONFIG.brand.logoAlt}
            width={96}
            height={96}
            className="md:h-auto md:w-[110px]"
          />

          <h2 className="mt-6 font-sora text-3xl font-light leading-tight text-white md:mt-8 md:text-5xl">
            Let's build something meaningful.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 md:mt-6 md:text-xl">
            Great marketing happens when strategy, creativity, and execution
            work together—not in silos.
          </p>
        </div>

        <FooterNav />

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:mt-16 md:flex-row md:gap-6 md:pt-8">
          <p className="text-sm text-neutral-400 md:text-base">
            {SITE_CONFIG.brand.copyright}
          </p>

          <ul className="flex flex-wrap justify-center gap-4 text-sm md:gap-5 md:text-base">
            {SITE_CONFIG.footer.legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}