import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Button system — matches the Figma "Button Style" sheet (top → bottom):
 *  primary       teal radial-glow gradient, white text   (default CTA)
 *  white         white fill, dark text                    (on dark / teal sections)
 *  outline       teal border + teal text                  (secondary on light)
 *  outline-light white border + white text                (secondary on dark)
 *  outline-dark  navy border + navy text                  (neutral secondary on light)
 *
 * Use <Button href="..."> for links, or `buttonStyles()` on a native <button>
 * (e.g. form submit) so every button on the site shares one look.
 */
export type ButtonVariant =
  | "primary"
  | "white"
  | "outline"
  | "outline-light"
  | "outline-dark";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-[14px] font-normal whitespace-nowrap select-none transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-[radial-gradient(ellipse_70%_130%_at_50%_100%,#7bc9a7_0%,#3b9685_42%,#25786d_85%)] hover:brightness-110 active:brightness-95 focus-visible:outline-brand-500",
  white:
    "bg-white text-text-primary hover:bg-green-1 focus-visible:outline-white",
  outline:
    "border border-brand-600 text-brand-600 hover:bg-green-1 focus-visible:outline-brand-500",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
  "outline-dark":
    "border border-text-primary text-text-primary hover:bg-text-primary hover:text-white focus-visible:outline-text-primary",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-base",
  lg: "h-12 px-6 text-lg",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

type Props = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <Link {...props} className={buttonStyles({ variant, size, className })}>
      {children}
    </Link>
  );
}
