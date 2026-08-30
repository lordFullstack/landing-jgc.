import type { ReactNode } from "react";

/**
 * Applies the global content max-width and responsive horizontal padding.
 * Source: MOCKUP_SPEC.md, section 4.
 */
export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-container px-5 sm:px-6 lg:px-12">
      {children}
    </div>
  );
}
