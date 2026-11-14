import MainCtaBanner from "@/components/CtaBanner";

type Props = { title: string; text: string; label: string; href: string; tone?: "white" | "gray" };

/** Kept for Careers / Insights pages: renders the one shared CTA banner. */
export default function CtaBanner({ title, text, label, href }: Props) {
  return <MainCtaBanner title={title} text={text} label={label} href={href} />;
}
