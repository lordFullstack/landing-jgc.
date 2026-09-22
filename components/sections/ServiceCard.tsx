import type { ServiceBlock } from "@/lib/types";
import GlassCard from "@/components/ui/GlassCard";

/**
 * ServiceCard — LOOP 09.
 * Fuente: MOCKUP_SPEC.md sección 12 ("compact visual blocks", "avoid
 * long service catalogues"). Padding reducido respecto a las cards de
 * Team/Method/Projects para reforzar que son mensajes cortos, no
 * descripciones largas. Acento único (no por-identidad, a diferencia de
 * Team) porque estos 4 mensajes representan a JGC.LABS como conjunto,
 * no a una entidad individual.
 */
export default function ServiceCard({
  service,
  staggerIndex = 0,
}: {
  service: ServiceBlock;
  staggerIndex?: number;
}) {
  return (
    <GlassCard
      className={`reveal-on-scroll stagger-${Math.min(staggerIndex % 4, 5)} border-t-2 border-t-accent-g p-5 text-center`}
    >
      <p className="font-semibold">{service.title}</p>
      {service.description ? (
        <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
      ) : null}
    </GlassCard>
  );
}
