import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Vertical rhythm wrapper for landing sections.
 * Source: MOCKUP_SPEC.md, section 4 (recommended section spacing).
 */
export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-36 ${className}`}>
      {children}
    </section>
  );
}
