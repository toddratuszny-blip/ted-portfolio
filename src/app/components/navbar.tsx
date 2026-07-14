"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Call from "../Icons/call";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  openInNewTab?: boolean;
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileCaseOpen, setIsMobileCaseOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const caseStudies = [
    { label: "Industrial Brand Ecosystem", href: "/industrialbrand" },
    { label: "Mary Ann's Chocolates", href: "/customerbrand" },
    { label: "Summit Point Roofing", href: "/brandstrategy" },
    { label: "Accelerate360", href: "/accelerate" },
    { label: "Creative Gallery", href: "/gallery" },
  ];

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/aboutpage" },
    {
      label: "Case Studies",
      href: "/casestudies",
      dropdown: caseStudies,
    },
    { label: "Resume", href: "/resume.pdf", openInNewTab: true },
    { label: "Contact Us", href: "/contactus" },
  ];

  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full px-4 md:px-8  md:py-6 flex items-center justify-between sticky top-0 z-50 bg-white font-sora">
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-1 select-none z-20"
      >
        <div className="flex items-center">
          <Image
            src="logo.svg"
            alt="Logo"
            width={1200}
            height={1200}
            className="w-12.5 md:w-19.5 h-20"
          />
        </div>
      </Link>

      {/* Mobile hamburger */}
      <div className="md:hidden z-20 flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 ">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.dropdown && item.dropdown.some((d) => pathname === d.href));

          if (item.dropdown) {
            return (
              <li
                key={item.label}
                ref={dropdownRef}
                className="relative flex items-center h-full"
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-1 text-lg font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-primary"
                      : "text-[#5C5E62] hover:text-[#A11B35]"
                  }`}
                >
                  {item.label}
                  {/* Chevron icon */}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isActive && (
                  <div className="absolute -bottom-2 -left-1.25 -right-1.25 h-0.25 bg-primary" />
                )}

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-68 bg-white rounded-xl shadow-2xl border border-[#F0F0F0] py-2 z-50 animate-fadeIn">
                    {item.dropdown.map((dropItem) => {
                      const isDropActive = pathname === dropItem.href;
                      return (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className={`block px-5 py-3 text-[15px] font-medium transition-all duration-150 ${
                            isDropActive
                              ? "text-primary bg-[#FFF5F7]"
                              : "text-[#3a3a3a] hover:text-primary hover:bg-[#FFF5F7]"
                          }`}
                        >
                          {dropItem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          }

          return (
            <li
              key={item.label}
              className="relative px-2 flex items-center h-full"
            >
              {item.openInNewTab ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-[#5C5E62] hover:text-[#A11B35]"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-[#5C5E62] hover:text-[#A11B35]"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {isActive && (
                <div className="absolute -bottom-2 -left-1.25 -right-1.25 h-px bg-primary" />
              )}
            </li>
          );
        })}
      </ul>

      <Link
        href="/contactus"
        className="hidden md:flex items-center gap-2 bg-black text-white font-medium pl-5.5 pr-6 py-4 rounded-full "
      >
        <Call />
        <span className="text-sm tracking-wide text-[16px]">Contact Us</span>
      </Link>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-15 left-0 w-full bg-white flex flex-col items-center shadow-lg py-6 gap-2 z-10 md:hidden">
          <ul className="flex flex-col items-center gap-1 w-full">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;

              if (item.dropdown) {
                return (
                  <li
                    key={item.label}
                    className="flex flex-col items-center w-full"
                  >
                    <button
                      onClick={() => setIsMobileCaseOpen(!isMobileCaseOpen)}
                      className={`flex items-center gap-1 py-3 text-[18px] font-semibold transition-colors duration-200 ${isActive ? "text-primary" : "text-[#5C5E62]"}`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isMobileCaseOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isMobileCaseOpen && (
                      <div className="flex flex-col items-center gap-1 pb-2">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            onClick={() => {
                              setActiveItem(item.label);
                              setIsMobileMenuOpen(false);
                              setIsMobileCaseOpen(false);
                            }}
                            className="text-[15px] font-medium text-[#5C5E62] hover:text-primary py-2 px-4 transition-colors"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className="flex items-center w-full justify-center"
                >
                  {item.openInNewTab ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => {
                        setActiveItem(item.label);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-[18px] font-semibold transition-colors duration-200 py-3 ${isActive ? "text-primary" : "text-[#5C5E62] hover:text-[#A11B35]"}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.label);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-[18px] font-semibold transition-colors duration-200 py-3 ${isActive ? "text-primary" : "text-[#5C5E62] hover:text-[#A11B35]"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/contactus"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-full transition-all duration-200 mt-3"
          >
            <span className="text-sm tracking-wide">Contact Us</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
