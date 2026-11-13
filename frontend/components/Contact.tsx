import Image from "next/image";
import ContactForm from "./ContactForm";
import Pill from "./Pill";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";

const info = [
  { label: "Phone number", value: "+8809646111333", Icon: PhoneIcon },
  { label: "Email", value: "info@automatrixservices.com", Icon: MailIcon },
  {
    label: "Address",
    value:
      "Automatrix Services Ltd, Grand Delvista South Block Level 8, Ploat 1A, Road -113 Gulshan-2, Dhaka-1212, Bangladesh",
    Icon: PinIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface bg-[url('/images/hex-pattern.png')] bg-cover px-5 py-14 sm:py-[72px]"
    >
      <Image src="/images/deco/mark-big.png" alt="" width={700} height={700} className="pointer-events-none absolute -left-20 bottom-0 hidden opacity-70 lg:block" />

      <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_610px] lg:gap-12">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <Pill>Get in touch</Pill>
            <h2 className="mt-4 max-w-[340px] text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
              Tell Us What You&apos;re Trying To Fix
            </h2>
            <p className="mt-4 max-w-[340px] text-[15px] leading-[22px] text-ink/75">
              Share a few details and we&apos;ll come back with next steps ,
              usually within one business day.
            </p>
          </div>

          <ul className="flex max-w-[500px] flex-col gap-5 rounded-3xl bg-white/30 p-5">
            {info.map(({ label, value, Icon }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-ink">
                  <Icon />
                </span>
                <div>
                  <p className="text-xs text-ink/60">{label}</p>
                  <p className="text-base font-medium leading-6 text-ink">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
