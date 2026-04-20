import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chicken City — Fast-Food à Mer (41500)",
    short_name: "Chicken City",
    description:
      "Fast-food spécialisé en poulet fait maison à Mer. Tenders, burgers, tacos, livraison, sur place ou à emporter.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#ffc045",
    lang: "fr",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["food", "restaurant", "lifestyle"],
  };
}
