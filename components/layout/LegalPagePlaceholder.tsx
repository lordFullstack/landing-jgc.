import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

/**
 * Placeholder honesto para páginas legales — LOOP 11.
 * Fuente del problema: MOCKUP_SPEC.md sección 14 lista "Política de
 * Privacidad" y "Términos y Condiciones" como links del Footer, pero
 * el spec no incluye el contenido legal real (no corresponde
 * inventarlo — texto legal fabricado puede ser peor que un 404).
 *
 * Esta página evita el 404 (hallazgo H3 del QA de LOOP 05) sin fingir
 * tener un documento legal real: dice explícitamente que está en
 * preparación. Reemplazar el contenido en cuanto Jorge provea el texto
 * legal real.
 */
export default function LegalPagePlaceholder({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section>
          <Container>
            <h1 className="text-heading font-semibold">{title}</h1>
            <p className="mt-4 max-w-xl text-text-secondary">
              Estamos preparando este documento. Todavía no está disponible —
              volvé pronto.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
