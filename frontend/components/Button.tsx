import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & { size?: "md" | "lg" };

export default function Button({
  size = "md",
  className = "",
  children,
  ...props
}: Props) {
  const sizes = {
    md: "h-12 px-6 text-base",
    lg: "h-12 px-6 text-lg md:h-[48px] md:px-6",
  };
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-brand-500 to-brand-600 font-normal text-white shadow-[0_8px_24px_-6px_rgba(63,165,149,0.55)] ring-1 ring-white/10 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
