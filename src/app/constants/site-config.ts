export type SiteLink = {
  label: string;
  href: string;
  openInNewTab?: boolean;
};

export type SiteNavItem = SiteLink & {
  dropdown?: SiteLink[];
};

export const SITE_CONFIG = {
  brand: {
    siteName: "TR Portfolio",
    logoAlt: "TR Portfolio Logo",
    appTitle: "TR Portfolio",
    copyright: "(c) 2026 TR Portfolio. All rights reserved.",
  },
  seo: {
    defaultTitle: "Portfolio | Strategic Brand Marketing & Creative Direction",
    defaultDescription:
      "Portfolio showcasing brand strategy, creative direction, integrated marketing, and content development for growing businesses.",
  },
  contact: {
    email: "infoexample@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    linkedinLabel: "linkedin.com/in/profile",
    resumeUrl: "/resume.pdf",
  },
  ctas: {
    contactUs: "Contact Us",
    viewCaseStudies: "View Case Studies",
    open: "Open",
    openResume: "Open PDF Resume",
  },
  footer: {
    description:
      "Explore selected case studies showing how strategy, creative direction, and marketing execution come together to support business growth.",
    legalLinks: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies Policy", href: "#" },
    ] satisfies SiteLink[],
  },
} as const;

export const CASE_STUDY_LINKS: SiteLink[] = [
  { label: "Industrial Brand Ecosystem", href: "/industrialbrand" },
  { label: "Mary Ann's Chocolates", href: "/customerbrand" },
  { label: "Summit Point Roofing", href: "/brandstrategy" },
  { label: "Accelerate360", href: "/accelerate" },
  { label: "Creative Gallery", href: "/gallery" },
];

export const MAIN_NAV_ITEMS: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutpage" },
  {
    label: "Case Studies",
    href: "/casestudies",
    dropdown: CASE_STUDY_LINKS,
  },
  {
    label: "Resume",
    href: SITE_CONFIG.contact.resumeUrl,
    openInNewTab: true,
  },
  { label: SITE_CONFIG.ctas.contactUs, href: "/contactus" },
];

export const FOOTER_NAV_ITEMS: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutpage" },
  { label: SITE_CONFIG.ctas.contactUs, href: "/contactus" },
];
