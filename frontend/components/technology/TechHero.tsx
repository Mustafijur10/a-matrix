import Link from "next/link";
import Navbar from "@/components/Navbar";

type Crumb = { label: string; href?: string };

type Props = {
  crumbs: Crumb[];
  title: React.ReactNode;
  subtitle: string;
  /** Extra bottom padding etc. (e.g. room for an overlapping product mockup) */
  className?: string;
  /** Rendered under the subtitle (CTA button) */
  children?: React.ReactNode;
};

export default function TechHero({ crumbs, title, subtitle, className = "pb-16 lg:min-h-[480px]", children }: Props) {
  return (
    <section className={`relative isolate overflow-hidden rounded-[28px] bg-brand-950 sm:rounded-[40px] ${className}`}>
      {/* glow + grid, same treatment as the other page heroes */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,#1b6b60_0%,rgba(11,58,54,0.55)_50%,transparent_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:140px_140px]" />
      <span aria-hidden className="absolute right-[8%] top-[46%] -z-10 hidden size-12 rotate-45 rounded-md border border-white/10 lg:block" />
      <span aria-hidden className="absolute left-[18%] top-[38%] -z-10 hidden size-4 rotate-45 rounded-sm bg-white/10 lg:block" />

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

        <h1 className="mt-5 text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-6xl lg:text-[64px]">
          {title}
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-6 text-white/90 sm:text-[17px] sm:leading-7">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
