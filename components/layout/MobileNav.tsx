"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import Button from "@/components/ui/Button";
import { NAV_ITEMS, NAV_CTA_LABEL } from "@/lib/constants/nav";
import { WHATSAPP_URL } from "@/lib/site-config";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

/**
 * Panel de navegación mobile — LOOP 04.
 * Fuente: MOCKUP_SPEC.md sección 7 ("accessible full-width panel or sheet",
 * touch target mínimo 44px).
 *
 * Accesibilidad implementada:
 * - Escape cierra el panel y devuelve foco al trigger.
 * - Foco inicial en el primer link al abrir.
 * - Focus trap simple (Tab/Shift+Tab no se escapan del panel).
 * - aria-modal + role="dialog" ya que cubre el contenido debajo del header.
 *
 * LOOP 03 (paquete dinámico): el panel ya tenía animación de entrada
 * (`animate-panel-in`) pero al cerrar se desmontaba de golpe (`return
 * null`), sin salida — inconsistente con el principio "entrance/exit"
 * del sistema de motion. Ahora se queda montado el tiempo de
 * `--duration-fast` reproduciendo `animate-panel-out` antes de
 * desmontarse de verdad.
 */
export default function MobileNav({ isOpen, onClose, triggerRef }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, triggerRef]);

  if (!shouldRender) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      aria-hidden={!isOpen}
      onAnimationEnd={() => {
        if (!isOpen) setShouldRender(false);
      }}
      className={`fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-background md:hidden ${
        isOpen ? "animate-panel-in" : "animate-panel-out"
      }`}
    >
      <nav aria-label="Navegación principal (mobile)" className="flex flex-col px-5 py-4">
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            ref={index === 0 ? firstLinkRef : undefined}
            onClick={onClose}
            className="flex min-h-[44px] items-center rounded-sm border-b border-border text-base text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-g focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {item.label}
          </a>
        ))}

        <Button
          variant="primary"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-6 w-full"
        >
          {NAV_CTA_LABEL}
        </Button>
      </nav>
    </div>
  );
}
