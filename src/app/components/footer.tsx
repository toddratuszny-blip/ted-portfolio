import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "../constants/site-config";
import FooterNav from "./footernav";

export default function Footer() {
  return (
    <footer className="w-full bg-[url('/footerBg.png')] bg-cover bg-center px-4 py-16 md:py-24 lg:px-0">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-16">
          <Image
            src="/logowhite.svg"
            alt={SITE_CONFIG.brand.logoAlt}
            width={110}
            height={110}
          />

          <h2 className="mt-8 text-white text-3xl md:text-5xl font-sora font-light leading-tight">
            Let's build something meaningful.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
            Great marketing happens when strategy, creativity, and execution work together—not in silos.
          </p>
        </div>

        <FooterNav />

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-400 text-sm md:text-base">
            {SITE_CONFIG.brand.copyright}
          </p>

          <ul className="flex flex-wrap justify-center gap-5 text-sm md:text-base">
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