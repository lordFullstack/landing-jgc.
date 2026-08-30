import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site-config";

/**
 * SEO base — LOOP 03, actualizado tras D-026 (dominio confirmado:
 * Jorge no comprará dominio propio, el sitio queda permanentemente en
 * Vercel). `metadataBase` y `openGraph.url` ya pueden fijarse con una
 * URL real. `og:image` sigue sin definirse — falta el asset de marca,
 * eso no cambió con esta decisión.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JGC.LABS — Human vision. AI engineering. Real products.",
  description:
    "JGC.LABS es un AI-native product lab. Convertimos ideas en productos digitales reales.",
  openGraph: {
    title: "JGC.LABS — Human vision. AI engineering. Real products.",
    description:
      "JGC.LABS es un AI-native product lab. Convertimos ideas en productos digitales reales.",
    url: SITE_URL,
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
