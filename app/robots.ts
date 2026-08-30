import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/** SEO base — LOOP 03, actualizado tras D-026 (dominio confirmado). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
