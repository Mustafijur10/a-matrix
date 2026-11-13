import Image from "next/image";
import Button from "./Button";
import Pill from "./Pill";

const steps = [
  { n: "01", img: "discover", title: "Discover", desc: "We map your current workflow, find where time and accuracy are being lost, and agree what success looks like.", pos: "left-1/2 -translate-x-1/2" },
  { n: "02", img: "design", title: "Design", desc: "We spec the solution around your existing tools and team, not the other way around.", pos: "left-[14%]" },
  { n: "03", img: "build", title: "Build & Automate", desc: "We build, test rigorously, and roll out in stages so your operations never stop.", pos: "right-[6%]" },
  { n: "04", img: "support", title: "Support & Scale", desc: "We stay on to monitor, refine and extend the system as your business grows.", pos: "left-1/2 -translate-x-1/2" },
];

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-surface bg-[url('/images/hex-pattern.png')] bg-cover px-5 py-14 sm:py-[72px]">
      <Image src="/images/deco/mark-big.png" alt="" width={900} height={900} className="pointer-events-none absolute -left-24 top-24 hidden opacity-70 lg:block" />

      <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_590px] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Pill>OUR APPROACH</Pill>
          <h2 className="mt-4 max-w-[400px] text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
            From First Conversation To Running System
          </h2>
          <p className="mt-4 max-w-[340px] text-[15px] leading-[22px] text-ink/75">
            Every engagement follows the same four stages, so you always know
            what&apos;s happening and why.
          </p>
          <Button href="/contact" className="mt-8 h-12 rounded-xl px-6 text-[15px]">
            Contact Us
          </Button>
        </div>

        <ol className="flex flex-col gap-5 pt-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-[28px] bg-white bg-[radial-gradient(#e4e4e4_1px,transparent_1px)] [background-size:14px_14px] p-5 pb-7"
            >
              <span
                className={`absolute -top-4 rounded-full border-4 border-white bg-[#c9efe6] px-4 py-1 text-sm text-brand-600 ${s.pos}`}
              >
                Step {s.n}
              </span>
              <div className="relative h-[160px] sm:h-[190px]">
                <Image
                  src={`/images/approach/${s.img}.png`}
                  alt=""
                  fill
                  sizes="560px"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-3 text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 max-w-[400px] text-sm leading-[22px] text-ink/75">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
