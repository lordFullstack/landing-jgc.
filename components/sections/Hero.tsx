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
 * globalmente (LOOP 01).
 */
export default function Hero() {
  return (
    <Section id="inicio">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="animate-fade-up text-sm text-accent-g [animation-delay:0ms]">
              {HERO_EYEBROW}
            </p>

            <h1 className="animate-fade-up mt-3 text-hero font-semibold tracking-tight [animation-delay:60ms]">
              {SLOGAN_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {HERO_SUPPORTING_COPY ? (
              <p className="animate-fade-up mt-6 max-w-md text-text-secondary [animation-delay:120ms]">
                {HERO_SUPPORTING_COPY}
              </p>
            ) : null}

            <div className="animate-fade-up mt-8 flex flex-wrap gap-4 [animation-delay:180ms]">
              <Button variant="primary">{HERO_CTA_PRIMARY}</Button>
              <Button variant="secondary">{HERO_CTA_SECONDARY}</Button>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}
