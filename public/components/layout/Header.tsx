"use client";

import { useRef, useState } from "react";
import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import Button from "@/components/ui/Button";
import MenuIcon from "@/components/ui/MenuIcon";
import { NAV_ITEMS, NAV_CTA_LABEL } from "@/lib/constants/nav";

/**
 * Header — LOOP 04.
 * Fuente: MOCKUP_SPEC.md sección 7.
 *
 * Desktop: logo izquierda, nav centro/derecha, CTA "Hablemos". Liviano,
 * sin barra sobredimensionada (spec explícito).
 * Mobile: logo izquierda, trigger de menú derecha (44px mínimo), abre
 * MobileNav como panel de ancho completo.
 *
 * Sticky: el spec permite sticky "si mejora la navegación" — se activa
 * aquí con fondo semitransparente + blur sutil (sección 6, glass
 * restringido, no reduce legibilidad).
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="font-semibold tracking-tight">
            JGC.LABS
          </a>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6">
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

          <div className="hidden md:block">
            <Button variant="primary">{NAV_CTA_LABEL}</Button>
          </div>

          <button
            ref={triggerRef}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-text-primary md:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </Container>

      <div id="mobile-nav-panel">
        <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} triggerRef={triggerRef} />
      </div>
    </header>
  );
}
