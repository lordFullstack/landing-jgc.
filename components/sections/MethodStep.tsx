import type { MethodStage } from "@/lib/types";
import GlassCard from "@/components/ui/GlassCard";

interface MethodStepProps {
  stage: MethodStage;
  /** Oculta la línea conectora en la última columna de cada fila (lg, 3 cols). */
  isLastInRow?: boolean;
  staggerIndex?: number;
}

/**
 * MethodStep — LOOP 07.
 * Fuente: MOCKUP_SPEC.md sección 10 ("Bento/grid/timeline hybrid" en
 * desktop). La card resuelve el "bento"; el nodo numerado + línea
 * conectora resuelven el "timeline". La línea solo se muestra en
 * desktop (lg) — en mobile el spec pide secuencia vertical simple, sin
 * conector.
 */
export default function MethodStep({ stage, isLastInRow = false, staggerIndex = 0 }: MethodStepProps) {
  return (
    <GlassCard className={`reveal-on-scroll stagger-${Math.min(staggerIndex % 3, 5)} p-6`}>
      <div className="flex items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-c text-sm text-accent-c">
          {stage.number}
        </span>
        {!isLastInRow ? (
          <span className="ml-3 hidden h-px flex-1 bg-border lg:block" aria-hidden="true" />
        ) : null}
      </div>

      <p className="mt-4 font-semibold">{stage.title}</p>
      {stage.description ? (
        <p className="mt-2 text-sm text-text-secondary">{stage.description}</p>
      ) : null}
    </GlassCard>
  );
}
