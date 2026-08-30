import Container from "@/components/layout/Container";
import { NAV_ITEMS, LEGAL_LINKS } from "@/lib/constants/nav";
import { SLOGAN_LINES } from "@/lib/constants/copy";

/**
 * LOOP 01 placeholder — structural skeleton.
 * Visual treatment scoped to LOOP 11 — Footer.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold">JGC.LABS</p>
            <p className="text-sm text-text-secondary">{SLOGAN_LINES.join(" ")}</p>
          </div>

          <nav aria-label="Enlaces" className="flex flex-wrap gap-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-text-secondary">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="text-xs text-text-muted">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
