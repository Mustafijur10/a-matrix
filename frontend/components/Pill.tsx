export default function Pill({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const tones = {
    light: "border-brand-500/60 text-brand-600",
    dark: "border-brand-400/60 text-brand-400",
  };
  return (
    <span
      className={`inline-block rounded-full border px-3.5 py-1 text-xs ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
