import Image from "next/image";
import Button from "./Button";
import Navbar from "./Navbar";
import ServiceCarousel from "./ServiceCarousel";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[28px] bg-brand-950 pb-16 sm:rounded-[40px] lg:min-h-[925px]">
      {/* Background: glow + network pattern (export from Figma) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,#1b6b60_0%,rgba(11,58,54,0.6)_45%,transparent_100%)]"
      />
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="1440px"
        className="-z-10 object-cover object-bottom opacity-80"
      />

      <Navbar />

      <div className="mx-auto flex max-w-[1100px] flex-col items-center px-5 pt-14 text-center sm:pt-[57px]">
        <span className="rounded-full border border-brand-400/70 px-4 py-1.5 text-xs text-brand-400 shadow-[0_0_30px_-6px_rgba(31,224,192,0.4)] sm:text-[13px]">
          IT &amp; Business Process Automation
        </span>

        <h1 className="mt-5 text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[80px] lg:leading-[84px]">
          Automate The Work That
          <br className="hidden sm:block" /> Slows Your Business Down
        </h1>

        <p className="mt-8 max-w-[710px] text-base leading-7 text-white/90 sm:text-lg sm:leading-[29px]">
          AutoMatrix designs and runs the digital systems, AI workflows and
          outsourced operations that let growing businesses move faster with
          less manual overhead.
        </p>

        <Button href="/contact" size="lg" className="mt-9">
          Schedule a Call
        </Button>
      </div>

      <ServiceCarousel />
    </section>
  );
}
