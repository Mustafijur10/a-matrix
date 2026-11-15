import Image from "next/image";
import Link from "next/link";

const explore = [
  { label: "About Us", href: "/about" },
  { label: "Meet the Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];
const experience = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
];

// Icons are exported from Figma -> public/images/social/<name>.svg
const socials = [
  { label: "X", href: "#", src: "/images/social/x.svg" },
  { label: "LinkedIn", href: "#", src: "/images/social/linkedin.svg" },
  { label: "Instagram", href: "#", src: "/images/social/instagram.svg" },
  { label: "YouTube", href: "#", src: "/images/social/youtube.svg" },
];

function ColHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-normal leading-7 text-white lg:text-[22px]">{children}</h3>;
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-4 text-[15px] leading-6 text-white lg:mt-9 lg:gap-6 lg:text-base">
      {items.map((l) => (
        <li key={l.label}>
          <Link href={l.href} className="transition hover:text-brand-400">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0",
};

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] bg-surface p-2 sm:p-4">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-brand-950 px-5 pt-12 sm:rounded-[40px] sm:px-10 lg:px-24 lg:pt-20">
        {/* bottom teal glow */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-[300px] bg-[radial-gradient(ellipse_65%_100%_at_50%_100%,rgba(63,165,149,0.85),rgba(31,110,98,0.35)_55%,transparent_80%)]"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[328fr_155fr_155fr_202fr] lg:gap-0">
          {/* brand column */}
          <div className="col-span-2 flex flex-col justify-between gap-8 lg:col-span-1 lg:gap-10">
            <div>
              <Link href="/" aria-label="AutoMatrix home" className="inline-block">
                <Image
                  src="/images/logo-white.svg"
                  alt="AutoMatrix"
                  width={226}
                  height={43}
                  className="h-auto w-[160px] sm:w-[180px] lg:w-[226px]"
                />
              </Link>
              <p className="mt-6 max-w-[420px] text-sm leading-5 text-white/90 lg:mt-8 lg:max-w-[330px]">
                Automatrix Services Ltd. is a next-generation IT and digital
                services company committed to helping businesses achieve
                transformative growth and operational excellence.
              </p>
            </div>
            <ul className="flex items-center gap-6 lg:gap-[26px]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="block opacity-60 transition hover:opacity-100">
                    <Image src={s.src} alt="" width={26} height={26} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Explore">
            <ColHeading>Explore</ColHeading>
            <LinkList items={explore} />
          </nav>

          <nav aria-label="Experience">
            <ColHeading>Experience</ColHeading>
            <LinkList items={experience} />
          </nav>

          <div className="col-span-2 lg:col-span-1">
            <ColHeading>Contact</ColHeading>
            <ul className="mt-6 flex flex-col gap-5 text-[15px] leading-6 text-white lg:mt-9 lg:gap-7 lg:text-base">
              <li className="flex items-center gap-4">
                <svg {...iconProps}><path d="M9 3h6a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 15 21H9a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 9 3Zm2.5 15.5h1" /></svg>
                <a href="tel:+8809646111333">+880 964 611 1333</a>
              </li>
              <li className="flex items-center gap-4">
                <svg {...iconProps}><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="m4 8 8 5.5L20 8" /></svg>
                <a href="mailto:info@automatrixservices.com" className="break-all">info@automatrixservices.com</a>
              </li>
              <li className="flex items-start gap-4">
                <svg {...iconProps} className="mt-0.5 shrink-0"><path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z" /><circle cx="12" cy="10" r="2.3" /></svg>
                <address className="max-w-[240px] not-italic">
                  Grand Delvista, South Block L8, Gulshan-2, Dhaka-1212
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-dashed border-white/25 pt-6 text-sm text-[#8fb3b0]/80 sm:flex-row sm:items-center sm:justify-between sm:text-base sm:text-[#8fb3b0]/60 lg:mt-9 lg:pt-8">
          <p>2026 Automatrix Services Ltd. All rights reserved.</p>
          <Link href="/terms" className="transition hover:text-white/80">
            Terms of Service
          </Link>
        </div>

        {/* big wordmark (export from Figma, keep its baked-in opacity) */}
        <div className="mt-8 pb-4 lg:mt-14 lg:pb-5">
          <Image
            src="/images/footer-wordmark.png"
            alt=""
            width={940}
            height={140}
            className="mx-auto h-auto w-full max-w-[940px]"
          />
        </div>
      </div>
    </footer>
  );
}
