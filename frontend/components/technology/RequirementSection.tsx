import Image from "next/image";
import Pill from "@/components/Pill";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import RequirementForm from "./RequirementForm";

const details = [
  { label: "Phone number", value: "+8809646111333", href: "tel:+8809646111333", Icon: PhoneIcon },
  { label: "Email", value: "info@automatrixservices.com", href: "mailto:info@automatrixservices.com", Icon: MailIcon },
  {
    label: "Address",
    value: "Automatrix Services Ltd, Grand Delvista South Block Level 8, Plot 1A, Road -113 Gulshan-2, Dhaka-1212, Bangladesh",
    Icon: PinIcon,
  },
];

export default function RequirementSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-surface bg-[url('/images/hex-pattern.png')] bg-cover px-5 py-16 sm:py-[88px]">
      {/* faint brand mark watermark */}
      <Image
        src="/images/logo-mark.png"
        alt=""
        aria-hidden
        width={520}
        height={520}
        className="pointer-events-none absolute -bottom-20 left-[8%] -z-10 hidden w-[420px] opacity-[0.07] lg:block"
      />

      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <Pill>What we build</Pill>
            <h2 className="mt-4 max-w-[440px] text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
              Have A Specific Requirement In Mind?
            </h2>
            <p className="mt-4 max-w-[330px] text-[15px] leading-[22px] text-ink/65">
              Share your requirement and our team will reply with clear next steps within one business day.
            </p>
          </div>

          <ul className="flex flex-col gap-5 lg:mt-24">
            {details.map(({ label, value, href, Icon }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-ink">
                  <Icon className="size-[18px]" />
                </span>
                <span>
                  <span className="block text-[11px] leading-4 text-ink/60">{label}</span>
                  {href ? (
                    <a href={href} className="block break-all text-base text-ink transition hover:text-brand-600">{value}</a>
                  ) : (
                    <address className="block max-w-[420px] text-base not-italic leading-6 text-ink">{value}</address>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <RequirementForm />
      </div>
    </section>
  );
}
