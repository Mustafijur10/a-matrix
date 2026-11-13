import Image from "next/image";
import Navbar from "./Navbar";
import Pill from "./Pill";

/**
 * Compact inner-page hero (Contact, About, Careers…).
 * Same rounded dark card + Navbar as the homepage Hero, just shorter.
 * `bgSrc` = grid lines + diamonds exported from Figma (transparent PNG/WebP).
 */
export default function PageHero({
  pill,
  title,
  description,
  bgSrc,
}: {
  pill: string;
  title: React.ReactNode;
  description?: string;
  bgSrc?: string;
}) {
  return (
    <div className="p-2 sm:p-3">
      <section className="relative isolate overflow-hidden rounded-[28px] bg-brand-950 pb-14 sm:rounded-[40px] sm:pb-[72px]">
        {/* top teal glow (same as homepage hero) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#1b6b60_0%,rgba(11,58,54,0.6)_45%,transparent_100%)]"
        />
        {bgSrc && (
          <Image
            src={bgSrc}
            alt=""
            fill
            priority
            sizes="1440px"
            className="-z-10 object-cover object-center"
          />
        )}

        <Navbar />

        <div className="mx-auto flex max-w-[1100px] flex-col items-center px-5 pt-12 text-center sm:pt-14">
          <Pill
            tone="dark"
            className="shadow-[0_0_30px_-6px_rgba(31,224,192,0.4)]"
          >
            {pill}
          </Pill>

          <h1 className="mt-5 text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[80px] lg:leading-[84px]">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-[480px] text-base leading-7 text-white/90 sm:mt-8 sm:text-lg sm:leading-[28px]">
              {description}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
