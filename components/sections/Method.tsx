import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import MethodStep from "@/components/sections/MethodStep";
import { METHOD_STAGES, METHOD_TITLE } from "@/lib/constants/method";

/**
 * Method — LOOP 07.
 * Fuente: MOCKUP_SPEC.md sección 10.
 * Desktop: grid de 3 columnas con nodos numerados conectados (bento +
 * timeline). Mobile: stack vertical simple (grid sin columnas explícitas
 * por debajo de sm).
 */
const DESKTOP_COLUMNS = 3;

export default function Method() {
  return (
    <Section id="metodo">
      <Container>
        <h2 className="text-heading font-semibold">{METHOD_TITLE}</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {METHOD_STAGES.map((stage, index) => (
            <MethodStep
              key={stage.number}
              stage={stage}
              isLastInRow={(index + 1) % DESKTOP_COLUMNS === 0}
              staggerIndex={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
