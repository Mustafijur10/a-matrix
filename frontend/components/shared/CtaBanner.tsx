import Link from "next/link";

type Props = { title: string; text: string; label: string; href: string; tone?: "white" | "gray" };

export default function CtaBanner({ title, text, label, href, tone = "white" }: Props) {
  return (
    <section className={`px-5 py-16 ${tone === "gray" ? "bg-[#F5F5F5]" : "bg-white"}`}>
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#659DAE] via-[#66B19B] to-[#62B391] px-6 py-16 text-center sm:py-20">
        {/* Export the diagonal light-beam shapes from Figma */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/careers/cta-shapes.svg')] bg-cover bg-center" aria-hidden />
        <h2 className="relative max-w-md text-3xl font-medium text-white sm:text-4xl">{title}</h2>
        <p className="relative mt-3 max-w-md text-sm text-white/90">{text}</p>
        <Link href={href} className="relative mt-7 rounded-lg bg-white px-6 py-3 text-sm text-[#0F1A2B] transition hover:bg-white/90">{label}</Link>
      </div>
    </section>
  );
}
