import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "inverted";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: ButtonVariant;
};

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Source: MOCKUP_SPEC.md, section 15 (Button system).
 * Implements the required state set: default, hover, active, focus,
 * disabled. Touch target >= 44px per spec. Timing/easing from
 * design tokens (LOOP 02) — see docs/reference/DESIGN_SYSTEM.md.
 *
 * LOOP 05 QA fix: soporte opcional de `href` (retrocompatible).
 * LOOP 10: variante `inverted` — botón oscuro sólido para usar sobre
 * fondos vívidos (ej. el CTA de alto contraste de sección 13), sin
 * introducir un tema claro (se mantiene dentro del sistema dark, sección 13:
 * "strong contrast... but remain within the dark visual system").
 */
export default function Button({ variant = "primary", className = "", href, ...props }: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-sm px-5 text-sm font-medium " +
    "transition-colors duration-fast ease-smooth " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-g focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "disabled:pointer-events-none disabled:opacity-40";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-accent-j text-white hover:opacity-90 active:opacity-80",
    secondary:
      "border border-border bg-transparent text-text-primary hover:bg-surface active:bg-surface-elevated",
    inverted: "bg-background text-text-primary hover:opacity-90 active:opacity-80",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
}
