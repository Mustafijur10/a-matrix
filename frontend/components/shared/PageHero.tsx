import Link from "next/link";
import SectionBadge from "./SectionBadge";
import SiteNavbar from "@/components/layout/SiteNavbar";

type Props = {
  title: React.ReactNode;
  subtitle: string;
  badge?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
};

export default function PageHero({ title, subtitle, badge, breadcrumb, children }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] p-3 sm:p-5">
      <div className="relative overflow-hidden rounded-[28px] bg-[#031D21] pb-16 sm:rounded-[36px] sm:pb-24">
        {/* glow + grid, same treatment as the homepage hero */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(63,160,140,0.55),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:112px_112px]" />
        <span className="pointer-events-none absolute right-[8%] top-[42%] hidden h-14 w-14 rotate-45 rounded-md border border-white/10 md:block" />
        <span className="pointer-events-none absolute left-[18%] bottom-[22%] hidden h-5 w-5 rotate-45 bg-white/10 md:block" />

        <div className="relative px-3 pt-3 sm:px-5 sm:pt-5">
          <SiteNavbar />
        </div>

        <div className="relative mx-auto mt-14 flex max-w-4xl flex-col items-center px-5 text-center sm:mt-20">
          {badge && <SectionBadge dark>{badge}</SectionBadge>}
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs">
              {breadcrumb.map((b, i) => (
                <span key={b.label} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden className="text-white/60">›</span>}
                  {b.href ? (
                    <Link href={b.href} className="text-[#4FD8B5] hover:underline">{b.label}</Link>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="mt-5 text-4xl font-medium leading-[1.15] text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
