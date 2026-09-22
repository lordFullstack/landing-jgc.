import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import HeroVisual from "@/components/sections/HeroVisual";
import {
  SLOGAN_LINES,
  HERO_EYEBROW,
  HERO_SUPPORTING_COPY,
  HERO_CTA_PRIMARY,
  HERO_CTA_SECONDARY,
} from "@/lib/constants/copy";

/**
 * Hero — LOOP 05.
 * Fuente: MOCKUP_SPEC.md sección 8.
 *
 * Desktop: composición de dos zonas (texto izquierda, visual derecha).
 * Mobile: columna única, orden de prioridad exacto del spec —
 * 1. marca (eyebrow) 2. headline 3. mensaje de soporte 4. CTA 5. visual.
 * El grid de Tailwind ya resuelve ese orden en mobile porque el bloque
 * de texto precede al visual en el DOM y ambos son de ancho completo
 * hasta el breakpoint md.
 *
 * Motion: fade + translateY sutil al entrar, dentro del rango de
 * "content reveal" (350–600ms) de la sección 16. Sin retrasar el
 * contenido (aparece casi de inmediato) y respeta prefers-reduced-motion
 * globalmente (LOOP 01). Stagger vía clases `.stagger-N` (LOOP 03,
 * paquete dinámico) en vez de los `[animation-delay:Nms]` arbitrarios
 * que había antes — mismos valores (0/60/120/180ms), ahora en un token
 * reutilizable (`--stagger-step`) en vez de números sueltos por elemento.
 *
 * LOOP 05 — FINAL QA (2026-08-30), dos fixes aplicados sobre producción:
 * 1. Los 2 CTAs no tenían href/onClick (no hacían nada al hacer click).
 *    Ahora apuntan a anclas reales ya existentes en la página: primario
 *    → #contacto, secundario → #metodo.
 * 2. El h1 usaba 3 <span className="block"> sin espacio de texto real
 *    entre ellos — el layout visual (line-break por display:block) no
 *    garantiza el mismo resultado en el nombre accesible ni en texto
 *    copiado. Se agregó aria-label con el slogan exacto y se marcaron
 *    los spans visuales como aria-hidden, garantizando fidelidad 1:1
 *    del texto fuente para lectores de pantalla independientemente del
 *    tratamiento visual.
 */
export default function Hero() {
  return (
    <Section id="inicio">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="animate-fade-up stagger-0 text-sm text-accent-g">
              {HERO_EYEBROW}
            </p>

            <h1
              className="animate-fade-up stagger-1 mt-3 text-hero font-semibold tracking-tight"
              aria-label={SLOGAN_LINES.join(" ")}
            >
              {SLOGAN_LINES.map((line) => (
                <span key={line} className="block" aria-hidden="true">
                  {line}
                </span>
              ))}
            </h1>

            {HERO_SUPPORTING_COPY ? (
              <p className="animate-fade-up stagger-2 mt-6 max-w-md text-text-secondary">
                {HERO_SUPPORTING_COPY}
              </p>
            ) : null}

            <div className="animate-fade-up stagger-3 mt-8 flex flex-wrap gap-4">
              <Button variant="primary" href="#contacto">
                {HERO_CTA_PRIMARY}
              </Button>
              <Button variant="secondary" href="#metodo">
                {HERO_CTA_SECONDARY}
              </Button>
            </div>
          </div>

          <div className="animate-fade-up stagger-2">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}
