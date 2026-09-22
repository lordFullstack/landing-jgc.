"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy — LOOP 02 (paquete JGC_WEB_DYNAMIC_LOOPS).
 * Devuelve el id de la sección actualmente "activa" (la que cruza una
 * franja horizontal cerca del centro vertical del viewport), para
 * resaltar el link de nav correspondiente. No depende de contenido
 * pendiente — funciona con las secciones ya existentes.
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
