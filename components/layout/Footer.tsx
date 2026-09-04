import Container from "@/components/layout/Container";
import { NAV_ITEMS, LEGAL_LINKS } from "@/lib/constants/nav";
import { SLOGAN_LINES } from "@/lib/constants/copy";

/**
 * Footer — LOOP 11.
 * Fuente: MOCKUP_SPEC.md sección 14. "Footer must not become visually
 * dense" — se mantiene el layout de 3 bloques de LOOP 01 (marca+slogan,
 * links, legal), sin agregar columnas ni contenido no solicitado (ej.
 * sin copyright line — el spec no lo pide).
 *
 * LOOP 11 agrega: estados de hover consistentes con el resto del sitio
 * (Header ya los tenía desde LOOP 04) y resuelve H3 (QA LOOP 05) — los
 * links legales ahora apuntan a páginas reales (ver
 * app/privacidad, app/terminos) en vez de 404.
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
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary transition-colors duration-fast ease-smooth hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-text-muted transition-colors duration-fast ease-smooth hover:text-text-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
