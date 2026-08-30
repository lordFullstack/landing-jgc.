import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * SEO base — LOOP 03, actualizado tras D-026 (dominio confirmado).
 * Landing de una sola página (secciones ancla).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
