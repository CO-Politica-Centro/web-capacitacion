import type { MetadataRoute } from "next";
import { cursos } from "@/content/cursos";
import { vias } from "@/content/vias";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/recursos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const viaRoutes: MetadataRoute.Sitemap = vias.flatMap((via) => [
    {
      url: `${base}/via/${via.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/ruta/${via.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
  ]);

  const published = cursos.filter((c) => c.status === "publicado");

  const cursoRoutes: MetadataRoute.Sitemap = published.map((curso) => ({
    url: `${base}/cursos/${curso.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const leccionRoutes: MetadataRoute.Sitemap = published.flatMap((curso) =>
    curso.leccionesMeta.map((leccion) => ({
      url: `${base}/cursos/${curso.slug}/${leccion.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  );

  return [...staticRoutes, ...viaRoutes, ...cursoRoutes, ...leccionRoutes];
}
