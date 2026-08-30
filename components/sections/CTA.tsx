import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import {
  CTA_SECTION_HEADLINE,
  CTA_SECTION_SUBHEADLINE,
  CTA_SECTION_ACTION,
} from "@/lib/constants/copy";

/** LOOP 01 placeholder. Strong-contrast visual treatment scoped to LOOP 10 — Contacto. */
export default function CTA() {
  return (
    <Section id="contacto">
      <Container>
        <div className="rounded-xl border border-border bg-surface-elevated p-10 text-center md:p-16">
          <h2 className="text-heading font-semibold">{CTA_SECTION_HEADLINE}</h2>
          <p className="mt-2 text-text-secondary">{CTA_SECTION_SUBHEADLINE}</p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary">{CTA_SECTION_ACTION}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
