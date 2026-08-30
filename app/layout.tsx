import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * SEO base — LOOP 03.
 *
 * NO se define `metadataBase` ni og:image: requieren un dominio y un asset
 * de marca reales que Jorge aún no ha suministrado (ver docs/context/TODO.md).
 * Definirlos ahora sería inventar información de negocio. Next.js genera
 * URLs relativas mientras tanto; actualizar cuando el dominio esté confirmado.
 */
export const metadata: Metadata = {
  title: "JGC.LABS — Human vision. AI engineering. Real products.",
  description:
    "JGC.LABS es un AI-native product lab. Convertimos ideas en productos digitales reales.",
  openGraph: {
    title: "JGC.LABS — Human vision. AI engineering. Real products.",
    description:
      "JGC.LABS es un AI-native product lab. Convertimos ideas en productos digitales reales.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-background text-text-primary antialiased">
        {/*
          Skip link — accesibilidad base (LOOP 03). Visualmente oculto hasta
          recibir foco por teclado. Requiere que app/page.tsx exponga
          id="main-content" en el <main>.
        */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-accent-j focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
