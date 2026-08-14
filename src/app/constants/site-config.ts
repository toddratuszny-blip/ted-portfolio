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
    copyright: "© 2026 Todd Ratuszny. All rights reserved.",
  },
  seo: {
    defaultTitle:
      "Portfolio | Strategic Brand Marketing & Creative Direction",
    defaultDescription:
      "Portfolio showcasing brand strategy, creative direction, integrated marketing, and content development for growing businesses.",
  },
  contact: {
    email: "toddratuszny@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/todd-ratuszny-19793512/",
    linkedinLabel:
      "linkedin.com/in/todd-ratuszny-19793512",
    resumeUrl: "/Todd Ratuszny Resume.pdf",
  },
  ctas: {
    contactUs: "Connect",
    viewCaseStudies: "View Case Studies",
    open: "Open",
    openResume: "Open PDF Resume",
  },
  footer: {
    description:
      "I'm currently seeking a remote opportunity where I can combine strategic thinking, creative leadership, and hands-on execution to help organizations build stronger brands and more effective marketing.",
    legalLinks: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies Policy", href: "#" },
    ] satisfies SiteLink[],
  },
} as const;

export const CASE_STUDY_LINKS: SiteLink[] = [
  {
    label: "Summit Point Roofing",
    href: "/brandstrategy",
  },
  {
    label: "Industrial Brand Ecosystem",
    href: "/industrialbrand",
  },
  {
    label: "Accelerate360",
    href: "/accelerate360",
  },
  {
    label: "Mary Ann's Chocolates",
    href: "/mary-anns-chocolates",
  },
  {
    label: "Creative Gallery",
    href: "/gallery",
  },
];

export const MAIN_NAV_ITEMS: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
];

export const FOOTER_NAV_ITEMS: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Case Studies",
    href: "/industrialbrand",
  },
  {
    label: "Resume",
    href: SITE_CONFIG.contact.resumeUrl,
    openInNewTab: true,
  },
  {
    label: "Connect",
    href: "/connect",
  },
];