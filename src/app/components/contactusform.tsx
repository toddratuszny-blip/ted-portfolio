import Link from "next/link";
import ArrowRight from "../Icons/arrowright";
import LinkedIn from "../Icons/linkedin";
import Mail from "../Icons/mail";

const contactItems = [
  {
    title: "Email",
    value: "infoexample@gmail.com",
    href: "mailto:infoexample@gmail.com",
    icon: <Mail />,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "#",
    icon: <LinkedIn fill="currentColor" />,
  },
  {
    title: "Resume",
    value: "Open PDF Resume",
    href: "/resume.pdf",
    icon: <ArrowRight fill="currentColor" />,
    openInNewTab: true,
  },
];

export default function ContactUsForm() {
  return (
    <div className="grid gap-8 font-sora">
      <div className="space-y-3 text-center md:text-left">
        <h2 className="text-black text-3xl md:text-5xl font-bold leading-none">
          Contact <span className="text-primary">Details.</span>
        </h2>
        <p className="text-[16px] md:text-[20px] text-gray-700 max-w-3xl">
          Reach out directly by email, connect on LinkedIn, or open the resume
          in a new tab.
        </p>
      </div>

      <div className="grid gap-4">
        {contactItems.map((item) => {
          const classes =
            "flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl border border-neutral-200 bg-white px-5 py-5 md:px-7 md:py-6 shadow-[0_0_25px_0_rgba(0,0,0,0.05)] transition-colors hover:border-primary";

          const content = (
            <>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCEBEB] text-primary">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.12em] text-neutral-500">
                    {item.title}
                  </p>
                  <p className="text-[18px] md:text-[22px] font-semibold text-black break-all">
                    {item.value}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <span>Open</span>
                <ArrowRight />
              </div>
            </>
          );

          if (item.openInNewTab) {
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={classes}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={item.title} href={item.href} className={classes}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
