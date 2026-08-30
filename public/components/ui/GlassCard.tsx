import type { ReactNode } from "react";

/**
 * Source: MOCKUP_SPEC.md, sections 6 (Surfaces) and 20.
 * Glass effect kept restrained per spec: "Glassmorphism MUST NOT
 * reduce text readability." Full visual tuning belongs to LOOP 02.
 */
export default function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface/60 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
