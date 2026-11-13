import Image from "next/image";
import Link from "next/link";

export default function ReachOutCta() {
  return (
    <section className="bg-surface px-5 py-12 sm:py-[58px]">
      <div className="relative isolate mx-auto flex max-w-[1200px] flex-col items-center overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#6a9fb0_0%,#7bb3ac_45%,#8dc5ad_100%)] px-6 py-14 text-center sm:min-h-[322px] sm:justify-center">
        {/* diagonal shapes: export from Figma */}
        <Image
          src="/images/news/cta-bg.png"
          alt=""
          fill
          sizes="1200px"
          className="-z-10 object-cover"
        />

        <h2 className="max-w-[400px] text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-white sm:text-[32px]">
          Are You Ready To Move Your Business Forward?
        </h2>
        <p className="mt-3 max-w-[390px] text-[13px] leading-[19px] text-white/90">
          Reach Out for Expert Advice. Tell us what&apos;s slowing your
          operations down, we&apos;ll tell you honestly how we can help.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex h-10 items-center rounded-xl bg-white px-5 text-sm text-ink shadow-sm transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Reach Out to Us
        </Link>
      </div>
    </section>
  );
}
