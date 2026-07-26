import ArrowRight from "../Icons/arrowright";
import LinkedIn from "../Icons/linkedin";
import Mail from "../Icons/mail";
import { SITE_CONFIG } from "../constants/site-config";

const contactItems = [
  {
    title: "Email",
    value: SITE_CONFIG.contact.email,
    href: `mailto:${SITE_CONFIG.contact.email}`,
    icon: <Mail />,
    action: "Email",
  },
  {
    title: "LinkedIn",
    value: SITE_CONFIG.contact.linkedinLabel,
    href: SITE_CONFIG.contact.linkedin,
    icon: <LinkedIn fill="currentColor" />,
    action: "View",
    openInNewTab: true,
  },
  {
    title: "Resume",
    value: "Todd Ratuszny Resume",
    href: SITE_CONFIG.contact.resumeUrl,
    icon: <ArrowRight fill="currentColor" />,
    action: "Open",
    openInNewTab: true,
  },
];

export default function ContactUsForm() {
  return (
    <div className="grid gap-10 font-sora">
      <div className="space-y-3 text-center md:text-left">
        <h2 className="text-3xl font-bold leading-none text-black md:text-5xl">
          Contact <span className="text-primary">Options.</span>
        </h2>

        <p className="max-w-3xl text-[16px] leading-relaxed text-gray-700 md:text-[20px]">
          Email is the best way to reach me regarding remote opportunities.
          You can also connect with me on LinkedIn or review my resume for a
          detailed overview of my experience in brand strategy, creative
          direction, and integrated marketing.
        </p>
      </div>

      <div className="grid gap-4">
        {contactItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.openInNewTab ? "_blank" : undefined}
            rel={item.openInNewTab ? "noopener noreferrer" : undefined}
            className="group flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white px-5 py-5 shadow-[0_0_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-xl md:flex-row md:items-center md:justify-between md:px-7 md:py-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCEBEB] text-primary">
                {item.icon}
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-[0.12em] text-neutral-500">
                  {item.title}
                </p>

                <p className="break-all text-[18px] font-semibold text-black md:text-[22px]">
                  {item.value}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 font-semibold text-primary transition-transform group-hover:translate-x-1">
              <span>{item.action}</span>
              <ArrowRight />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}