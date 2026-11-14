import Link from "next/link";

type Props = {
  title: string;
  text: string;
  label?: string;
  href?: string;
  secondary?: { label: string; href: string };
};

export default function CtaBanner({ title, text, label = "Get a Free Consultation", href = "/contact", secondary }: Props) {
  return (
    <section className="bg-surface px-5 py-14 sm:py-16">
      <div className="relative isolate mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#6a9eae_0%,#68ab9f_45%,#66b392_100%)] px-6 py-16 text-center sm:py-[88px]">
        <span aria-hidden className="absolute left-[6%] top-0 -z-10 h-full w-24 skew-x-[35deg] bg-white/10" />
        <span aria-hidden className="absolute left-[16%] top-0 -z-10 h-full w-14 skew-x-[35deg] bg-white/5" />
        <span aria-hidden className="absolute right-[6%] top-0 -z-10 h-full w-24 -skew-x-[35deg] bg-white/10" />
        <span aria-hidden className="absolute right-[16%] top-0 -z-10 h-full w-14 -skew-x-[35deg] bg-white/5" />

        <h2 className="mx-auto max-w-[520px] text-3xl font-medium leading-[1.15] text-white sm:text-[40px]">{title}</h2>
        <p className="mx-auto mt-4 max-w-[430px] text-base leading-6 text-white/90">{text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={href} className="inline-flex h-12 items-center rounded-xl bg-white px-6 text-[15px] text-ink transition hover:bg-white/90">
            {label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="inline-flex h-12 items-center rounded-xl border border-white/70 px-6 text-[15px] text-white transition hover:bg-white/10">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
