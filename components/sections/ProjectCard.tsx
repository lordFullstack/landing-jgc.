import type { Project } from "@/lib/types";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

/**
 * ProjectCard — LOOP 08.
 * Fuente: MOCKUP_SPEC.md sección 11. Campos disponibles por card: name,
 * category, description, technology tags, visual/preview, demo link —
 * todos condicionales salvo `name`, ya que ninguno está suministrado
 * todavía (PENDIENTE, sin inventar).
 *
 * El bloque "visual/preview" es un placeholder decorativo (superficie
 * vacía del design system) reservando el espacio para una captura real
 * del proyecto cuando Jorge la suministre — no es un ícono ni una marca
 * inventada.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="reveal-on-scroll flex flex-col gap-4 p-6">
      <div
        aria-hidden="true"
        className="aspect-video w-full rounded-md border border-border bg-surface"
      />

      <div>
        <p className="font-semibold">{project.name}</p>
        {project.category ? (
          <p className="mt-1 text-sm text-text-secondary">{project.category}</p>
        ) : null}
      </div>

      {project.description ? (
        <p className="text-sm text-text-secondary">{project.description}</p>
      ) : null}

      {project.technologies.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      ) : null}

      {project.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm text-sm font-medium text-accent-g underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-g focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ver demo →
        </a>
      ) : null}
    </GlassCard>
  );
}
