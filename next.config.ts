import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF désactivé volontairement — WebP uniquement pour garantir que ce qu'on
    // voit dans /admin-rotate corresponde exactement à ce que servent les pages
    // publiques. Next ne conserve pas d'AVIF sidecar ni ne génère d'AVIF à la
    // volée qui pourrait désyncher avec les rotations du WebP source.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chickencity41.fr",
      },
    ],
  },
  async redirects() {
    return [
      // Homepage redirect
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // Old WordPress livraison URLs -> new format
      {
        source: "/livraison/la-chapelle-saint-martin/",
        destination: "/livraison/la-chapelle-saint-martin",
        permanent: true,
      },
      // WordPress legal pages
      {
        source: "/mention-legales",
        destination: "/mentions-legales",
        permanent: true,
      },
      {
        source: "/charte-sur-la-protection-des-donnees-personnelles",
        destination: "/donnees-personnelles",
        permanent: true,
      },
      // Trailing slash normalization for all livraison pages
      {
        source: "/livraison/:city/",
        destination: "/livraison/:city",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
