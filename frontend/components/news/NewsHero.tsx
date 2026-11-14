import TechHero from "@/components/technology/TechHero";

export default function NewsHero() {
  return (
    <TechHero
      crumbs={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "News & Events" },
      ]}
      title="News & Events"
      subtitle="Company updates, press mentions, and upcoming events from AutoMatrix."
    />
  );
}
