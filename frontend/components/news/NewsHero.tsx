import Link from "next/link";
import Navbar from "../Navbar";

export default function NewsHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[28px] bg-brand-950 pb-16 sm:rounded-[40px] lg:min-h-[452px]">
      {/* glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,#1f7a6d_0%,rgba(11,58,54,0.55)_50%,transparent_100%)]"
      />
      {/* faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:132px_132px] [mask-image:radial-gradient(ellipse_80%_90%_at_50%_30%,black,transparent)]"
      />
      {/* diamonds */}
      <span
        aria-hidden
        className="absolute right-[9%] top-[190px] -z-10 hidden size-[60px] rotate-45 border border-white/10 lg:block"
      >
        <span className="absolute inset-[18px] bg-white/10" />
      </span>
      <span
        aria-hidden
        className="absolute bottom-[80px] left-[17%] -z-10 hidden size-7 rotate-45 bg-white/[0.08] lg:block"
      />

      <Navbar />

      <div className="mx-auto flex max-w-[760px] flex-col items-center px-5 pt-14 text-center lg:pt-[88px]">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-1.5 text-[11px] text-white"
        >
          <Link href="/" className="text-brand-500 hover:underline">Home</Link>
          <Chevron />
          <Link href="/about" className="text-brand-500 hover:underline">About Us</Link>
          <Chevron />
          <span aria-current="page">News &amp; Events</span>
        </nav>

        <h1 className="mt-6 text-[40px] font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[64px]">
          News &amp; Events
        </h1>

        <p className="mt-5 max-w-[430px] text-base leading-[24px] text-white/90 sm:text-[18px]">
          Company updates, press mentions, and upcoming events from AutoMatrix.
        </p>
      </div>
    </section>
  );
}

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M4.5 2.5 8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
