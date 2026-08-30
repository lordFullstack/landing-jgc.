import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

/**
 * Source: MOCKUP_SPEC.md, section 15 (Button system).
 * Implements the required state set: default, hover, active, focus,
 * disabled. Touch target >= 44px per spec. Timing/easing from
 * design tokens (LOOP 02) — see docs/reference/DESIGN_SYSTEM.md.
 */
export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-sm px-5 text-sm font-medium " +
    "transition-colors duration-fast ease-smooth " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-g focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "disabled:pointer-events-none disabled:opacity-40";

  const variants = {
    primary: "bg-accent-j text-white hover:opacity-90 active:opacity-80",
    secondary:
      "border border-border bg-transparent text-text-primary hover:bg-surface active:bg-surface-elevated",
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
