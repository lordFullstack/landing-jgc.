import type { MetadataRoute } from "next";

/**
 * SEO base — LOOP 03. No se referencia un dominio absoluto porque aún no
 * está confirmado (ver docs/context/TODO.md). El sitemap se referencia
 * como ruta relativa; Next.js la resuelve contra el host de despliegue.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "/sitemap.xml",
  };
}
