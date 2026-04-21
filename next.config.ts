import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only. AVIF a été testé plusieurs fois mais causait des rendus
    // "de travers" non reproductibles en local (possible bug d'encodage sharp
    // ou cache navigateur AVIF tenace). WebP suffit amplement : supporté par
    // Safari 14+ et tous les navigateurs modernes, gain ~85% vs PNG/JPG.
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
      // /menu → /menus (ancien slug)
      {
        source: "/menu",
        destination: "/menus",
        permanent: true,
      },
      {
        source: "/menu/:path*",
        destination: "/menus/:path*",
        permanent: true,
      },
      // Old city slugs (raccourcis) → new full slugs
      {
        source: "/livraison/la-chapelle-saint-martin",
        destination: "/livraison/la-chapelle-saint-martin-en-plaine",
        permanent: true,
      },
      {
        source: "/livraison/la-chapelle-saint-martin/",
        destination: "/livraison/la-chapelle-saint-martin-en-plaine",
        permanent: true,
      },
      {
        source: "/livraison/saint-laurent",
        destination: "/livraison/saint-laurent-nouan",
        permanent: true,
      },
      {
        source: "/livraison/saint-laurent/",
        destination: "/livraison/saint-laurent-nouan",
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
