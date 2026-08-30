import type { TeamMember } from "@/lib/types";
import GlassCard from "@/components/ui/GlassCard";

/**
 * TeamCard — LOOP 06.
 * Fuente: MOCKUP_SPEC.md sección 9.
 *
 * Las tres cards comparten exactamente el mismo tamaño, tipografía y
 * jerarquía visual ("communicates collaboration, not hierarchy of
 * value") — la única variación entre ellas es el acento de color por
 * entidad (identidad), vía un borde superior sutil.
 *
 * `role` y `responsibility` son el mismo texto en los datos actuales
 * (el spec no provee una descripción de responsabilidad distinta del
 * rol), así que se muestra una sola vez para no duplicar contenido.
 */
const ACCENT_BORDER: Record<TeamMember["accent"], string> = {
  j: "border-t-accent-j",
  g: "border-t-accent-g",
  c: "border-t-accent-c",
};

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <GlassCard className={`animate-fade-up border-t-2 p-6 ${ACCENT_BORDER[member.accent]}`}>
      <p className="font-semibold">{member.name}</p>
      <p className="mt-1 text-sm text-text-secondary">{member.role}</p>
      {member.responsibility && member.responsibility !== member.role ? (
        <p className="mt-3 text-sm text-text-secondary">{member.responsibility}</p>
      ) : null}
    </GlassCard>
  );
}
