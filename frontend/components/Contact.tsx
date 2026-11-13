import Image from "next/image";
import ContactForm from "./ContactForm";
import Pill from "./Pill";

const info = [
  {
    label: "Phone number",
    value: "+8809646111333",
    href: "tel:+8809646111333",
    icon: (
      <path d="M9 3h6a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 15 21H9a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 9 3Zm2.5 15.5h1" />
    ),
  },
  {
    label: "Email",
    value: "info@automatrixservices.com",
    href: "mailto:info@automatrixservices.com",
    icon: (
      <>
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
        <path d="m4 8 8 5.5L20 8" />
      </>
    ),
  },
  {
    label: "Address",
    value:
      "Automatrix Services Ltd, Grand Delvista South Block Level 8, Ploat 1A, Road -113 Gulshan-2, Dhaka-1212, Bangladesh",
    icon: (
      <>
        <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z" />
        <circle cx="12" cy="10" r="2.3" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface bg-[url('/images/hex-pattern.png')] bg-cover px-5 py-14 sm:py-[72px]"
    >
      <Image
        src="/images/deco/mark-big.png"
        alt=""
        width={900}
        height={900}
        className="pointer-events-none absolute -bottom-40 -left-20 hidden opacity-70 lg:block"
      />

      <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-between gap-12 lg:pt-4">
          <div>
            <Pill>Get in touch</Pill>
            <h2 className="mt-4 max-w-[330px] text-h4 text-text-primary sm:text-h3">
              Tell Us What You&apos;re Trying To Fix
            </h2>
            <p className="mt-4 max-w-[300px] text-[15px] leading-[22px] text-ink/75">
              Share a few details and we&apos;ll come back with next steps,
              usually within one business day.
            </p>
          </div>

          <ul className="flex max-w-[400px] flex-col gap-5 rounded-3xl p-1 lg:mb-6">
            {info.map((i) => {
              const Tag = i.href ? "a" : "div";
              return (
                <li key={i.label} className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-ink shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {i.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] text-ink/60">{i.label}</p>
                    <Tag
                      {...(i.href ? { href: i.href } : {})}
                      className="mt-0.5 block text-[15px] font-medium leading-[22px] text-ink hover:text-brand-600"
                    >
                      {i.value}
                    </Tag>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
