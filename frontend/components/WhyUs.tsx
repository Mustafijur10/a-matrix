import Button from "./Button";
import Pill from "./Pill";

const points = [
  {
    title: "Cross-Industry Delivery Experience",
    desc: "We've delivered technology projects across telecom, banking, e-commerce, and the public sector, giving us the range to understand",
  },
  {
    title: "Future-Proof Vision & Transformation",
    desc: "We align with our clients' vision to drive digital transformation and stay ahead of emerging technologies.",
  },
  {
    title: "Collaborative Long-Term Partnerships",
    desc: "A client-centric approach that fosters collaboration, feedback, and long-term partnerships.",
  },
  {
    title: "Seamless Tailored Digital Solutions",
    desc: "Seamless integration of tailored digital solutions to achieve specific business goals.",
  },
  {
    title: "Uncompromising Quality & Testing",
    desc: "Uncompromising quality ensured through rigorous testing.",
  },
];

function CheckIcon() {
  return (
    <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-brand-400/10">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="6.5" stroke="#3fa595" strokeWidth="1.1" />
        <path d="m5.2 8.2 1.9 1.9 3.7-3.9" stroke="#3fa595" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className="relative bg-white bg-[url('/images/hex-pattern.png')] bg-cover bg-bottom px-5 py-14 sm:py-[72px]">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_680px] lg:gap-8">
        <div>
          <Pill>Why AUTOMATRIX</Pill>
          <h2 className="mt-4 max-w-[300px] text-[40px] font-medium leading-[48px] tracking-[-0.02em] text-ink">
            What Sets Us Apart
          </h2>
          <p className="mt-5 max-w-[420px] text-[15px] leading-[22px] text-ink/80">
            We are committed to driving innovation, delivering strategic
            solutions, and ensuring impactful digital transformation for
            long-term business success.
          </p>
          <Button href="/contact" className="mt-8 h-12 rounded-xl px-6 text-[15px]">
            Schedule a Call
          </Button>
        </div>

        <ul className="flex flex-col gap-3.5">
          {points.map((p) => (
            <li
              key={p.title}
              className="flex gap-3 rounded-[20px] bg-surface px-5 py-5"
            >
              <CheckIcon />
              <div>
                <h3 className="text-xl font-medium text-ink sm:text-[22px]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-[22px] text-ink/75">
                  {p.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
