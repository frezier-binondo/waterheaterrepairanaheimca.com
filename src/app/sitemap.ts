import { MetadataRoute } from "next";
import { SERVICES, LOCATIONS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://waterheaterrepairanaheimca.com";
  const lastModified = "2026-11-17T00:00:00.000Z";

  // Core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 12 Service Pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Location Hub Pages
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
