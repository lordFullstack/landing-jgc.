import type { Config } from "tailwindcss";

/**
 * JGC.LABS — Tailwind foundation tokens.
 *
 * Scope note (LOOP 01): this defines only the foundational tokens required
 * for the project to compile with a coherent palette (colors, radius).
 * The full design system (spacing scale, typography scale, component
 * variants, motion tokens) is the scope of LOOP 02 — Design System, and
 * should extend this file rather than duplicate it.
 *
 * Source of truth: docs/reference/MOCKUP_SPEC.md (sections 2, 3, 4, 5, 21).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090A0F",
        surface: "#11131A",
        "surface-elevated": "#151821",
        border: "rgba(255,255,255,0.1)",
        "text-primary": "#F5F6F8",
        "text-secondary": "#A8AEBB",
        "text-muted": "#6B7280",
        "accent-j": "#3B6CFF",
        "accent-g": "#20D6C7",
        "accent-c": "#8B5CF6",
      },
      borderRadius: {
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      maxWidth: {
        container: "1280px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Geist Sans", "sans-serif"],
      },
      /**
       * Fluid typography (LOOP 02).
       * Ranges match MOCKUP_SPEC.md section 3:
       * hero 36-44px mobile / 38-48px tablet / 48-72px desktop, weight 600-700.
       * heading 28-36px mobile / 32-48px desktop, weight 600-700.
       * Weights are applied via font-semibold/font-bold in components, not here.
       */
      fontSize: {
        hero: ["clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem)", { lineHeight: "1" }],
        heading: ["clamp(1.75rem, 1.35rem + 1.8vw, 3rem)", { lineHeight: "1.1" }],
      },
      /**
       * Motion tokens (LOOP 02). MOCKUP_SPEC.md section 16 specifies timing
       * ranges (fast UI ~150-220ms, content reveal ~350-600ms) and asks for
       * "smooth, natural" easing without a locked bezier curve. The values
       * below are the mid-range/standard picks — PROVISIONAL until Jorge
       * confirms an exact curve.
       */
      transitionDuration: {
        fast: "200ms",
        content: "450ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
