import type { ReactNode } from "react";

/** Source: MOCKUP_SPEC.md, section 20 (component boundaries). */
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border px-3 py-1 text-xs text-text-secondary">
      {children}
    </span>
  );
}
