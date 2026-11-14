import SectionBadge from "./SectionBadge";
import TechHero from "@/components/technology/TechHero";

type Props = {
  title: React.ReactNode;
  subtitle: string;
  badge?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
};

/** Kept for Careers / Insights pages: same API, now renders the shared hero + main Navbar. */
export default function PageHero({ title, subtitle, badge, breadcrumb, children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1440px] p-2 sm:p-3">
      <TechHero
        crumbs={breadcrumb}
        badge={badge ? <SectionBadge dark>{badge}</SectionBadge> : undefined}
        title={title}
        subtitle={subtitle}
      >
        {children}
      </TechHero>
    </div>
  );
}
