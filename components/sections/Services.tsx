import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ServiceCard from "@/components/sections/ServiceCard";
import { SERVICES } from "@/lib/constants/services";

/**
 * Services — LOOP 09.
 * Fuente: MOCKUP_SPEC.md sección 12.
 *
 * El spec no da un heading de marketing para esta sección (a diferencia
 * de Team/Method/Projects) — solo el rótulo de documento "SERVICES /
 * DIFFERENTIATORS". No se inventa un título visible; se agrega un
 * heading `sr-only` puramente estructural (landmark de accesibilidad
 * para lectores de pantalla), no es copy aprobada. Si Jorge quiere un
 * título visible, se agrega en una revisión de copy, no en este loop.
 *
 * "Compact visual blocks" + "avoid long service catalogues": 4 bloques
 * cortos en grid, sin descripciones largas (siguen PENDIENTE, y cuando
 * existan deben ser breves).
 */
export default function Services() {
  return (
    <Section id="servicios">
      <Container>
        <h2 className="sr-only">Servicios y diferenciadores</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} staggerIndex={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
