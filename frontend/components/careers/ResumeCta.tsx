import Link from "next/link";

export default function ResumeCta({ href = "#" }: { href?: string }) {
  return (
    <section className="bg-white px-5 py-16">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#659DAE] via-[#66B19B] to-[#62B391] px-6 py-16 text-center sm:py-20">
        {/* Export the diagonal light-beam shapes from Figma */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/careers/cta-shapes.svg')] bg-cover bg-center" aria-hidden />
        <h2 className="relative text-3xl font-medium text-white sm:text-4xl">Not Sure Where You Fit In?</h2>
        <p className="relative mt-3 text-sm text-white/90">Drop us your resume anyway for our People &amp; Culture Team to review.</p>
        <Link href={href} className="relative mt-7 rounded-lg bg-white px-6 py-3 text-sm text-[#0F1A2B] transition hover:bg-white/90">
          Submit Your Resume
        </Link>
      </div>
    </section>
  );
}
