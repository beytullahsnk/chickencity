import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { resolve } from "node:path";
import { cities } from "@/data/cities";

const BASE_URL = "https://chickencity41.fr";
const BUILD_TIME = new Date();

/**
 * Returns the mtime of a file in src/app/, fallback to build time.
 * Gives a realistic lastModified per route based on real code changes.
 */
function mtimeOf(relPath: string): Date {
  try {
    const full = resolve(process.cwd(), "src/app", relPath);
    return statSync(full).mtime;
  } catch {
    return BUILD_TIME;
  }
}

// Cities content is all in src/data/cities.ts, so they share one mtime.
function citiesMtime(): Date {
  try {
    return statSync(resolve(process.cwd(), "src/data/cities.ts")).mtime;
  } catch {
    return BUILD_TIME;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: mtimeOf("page.tsx"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/menus`,
      lastModified: mtimeOf("menus/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/halal`,
      lastModified: mtimeOf("halal/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/livraison`,
      lastModified: mtimeOf("livraison/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: mtimeOf("blog/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: mtimeOf("contact/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const cityMtime = citiesMtime();
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/livraison/${city.slug}`,
    lastModified: cityMtime,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages];
}
