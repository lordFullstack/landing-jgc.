import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import {
  CTA_SECTION_HEADLINE,
  CTA_SECTION_SUBHEADLINE,
  CTA_SECTION_ACTION,
} from "@/lib/constants/copy";
import { WHATSAPP_URL } from "@/lib/site-config";

/**
 * CTA — LOOP 10 (Contacto, per roadmap LOOP_00.md).
 * Fuente: MOCKUP_SPEC.md sección 13. Mensaje y acción son copy exacta
 * ya aprobada (sin cambios).
 *
 * "Visual treatment: strong contrast against surrounding content, but
 * remain within the dark visual system" — resuelto con un fondo de
 * gradiente vívido usando los 3 acentos ya aprobados (J/G/C), en vez de
 * la superficie neutra de LOOP 01. El botón usa la variante `inverted`
 * (oscuro sólido) para máximo contraste sobre el gradiente sin introducir
 * un tema claro — se mantiene dentro del sistema dark.
 *
 * Canal de contacto: WhatsApp (D-029, confirmado por Jorge). El botón
 * abre wa.me con un mensaje inicial ya escrito, en una pestaña nueva.
 */
export default function CTA() {
  return (
    <Section id="contacto">
      <Container>
        <div className="reveal-on-scroll rounded-xl bg-gradient-to-br from-accent-j via-accent-c to-accent-g p-10 text-center md:p-16">
          <h2 className="text-heading font-semibold text-white">{CTA_SECTION_HEADLINE}</h2>
          <p className="mt-2 text-white/80">{CTA_SECTION_SUBHEADLINE}</p>
          <div className="mt-8 flex justify-center">
            <Button variant="inverted" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {CTA_SECTION_ACTION}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
