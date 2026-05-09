import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Bloquer explicitement les chemins de l'ancien WordPress pour éviter
        // que Google continue de tenter de les crawler (rapport 404 inutile
        // dans Search Console).
        disallow: [
          "/api/",
          "/wp-admin/",
          "/wp-content/",
          "/wp-includes/",
          "/admin-rotate",
          "/api/rotate-image",
        ],
      },
    ],
    sitemap: "https://chickencity41.fr/sitemap.xml",
  };
}
