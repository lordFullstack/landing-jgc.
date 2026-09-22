import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectCard from "@/components/sections/ProjectCard";
import { PROJECTS, PROJECTS_TITLE } from "@/lib/constants/projects";
/**
 * Projects — LOOP 08.
 * Fuente: MOCKUP_SPEC.md sección 11.
 *
 * Bento: el spec permite un layout bento "where it improves storytelling"
 * — es decir, tamaños de card variables cuando hay una jerarquía
 * narrativa real entre proyectos. Con los 5 proyectos actuales sin
 * descripción/categoría todavía (PENDIENTE), no existe base de contenido
 * para justificar qué proyecto merece una card más grande sin inventar
 * una jerarquía de importancia que no fue definida por Jorge. Se
 * mantiene un grid uniforme por ahora; revisar composición bento real
 * cuando exista copy y se sepa qué proyecto(s) tienen mayor peso narrativo.
 *
 * Mobile: single-column (sin clases de columna en el breakpoint base).
 */
export default function Projects() {
  return (
    <Section id="proyectos">
      <Container>
        <h2 className="text-heading font-semibold">{PROJECTS_TITLE}</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} project={project} staggerIndex={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
