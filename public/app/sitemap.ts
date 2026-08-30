import type { MetadataRoute } from "next";

/**
 * SEO base — LOOP 03. Landing de una sola página (secciones ancla).
 * Sin dominio absoluto confirmado, se usa ruta relativa "/".
 * Actualizar cuando exista dominio oficial.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
