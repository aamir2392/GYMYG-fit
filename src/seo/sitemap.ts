import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const lastMod = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
