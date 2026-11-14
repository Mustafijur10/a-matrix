import TechHero from "@/components/technology/TechHero";

type Crumb = { label: string; href?: string };

/** Standard inner-page hero. Same component as TechHero so every page matches. */
export default function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return <TechHero crumbs={crumbs} title={title} subtitle={subtitle ?? ""} />;
}
