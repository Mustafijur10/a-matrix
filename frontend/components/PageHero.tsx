import Link from "next/link";
import Navbar from "./Navbar";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-[28px] bg-brand-950 pb-16 sm:rounded-[40px] lg:min-h-[470px]">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,#1b6b60_0%,rgba(11,58,54,0.55)_50%,transparent_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:140px_140px]" />

      <Navbar />

      <div className="mx-auto flex max-w-[900px] flex-col items-center px-5 pt-14 text-center sm:pt-[70px]">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="text-white/70">
                    <path d="m3.5 2 3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {c.href ? (
                  <Link href={c.href} className="text-brand-400 hover:underline">{c.label}</Link>
                ) : (
                  <span className="text-white" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-5 text-5xl font-medium leading-none tracking-[-0.03em] text-white sm:text-6xl lg:text-[72px]">
          {title}
        </h1>
        {subtitle && <p className="mt-5 text-base text-white/90 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
