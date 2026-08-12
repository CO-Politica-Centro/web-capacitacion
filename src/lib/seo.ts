import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://web-capacitacion-co-politica.vercel.app";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_SEO = {
  titleDefault: "Capacitación Centro — Escuela política abierta",
  titleTemplate: "%s · Capacitación Centro",
  description:
    "Aprende política con rutas guiadas: concientización y formación práctica para actuar en Colombia.",
  siteName: "Capacitación · CO Politica Centro",
  ogAlt: "Capacitación Centro — Escuela abierta de CO Politica Centro",
} as const;

export const defaultSiteDescription = SITE_SEO.description;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute URL or path under public/. Omit to use root opengraph-image. */
  image?: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
};

/** Shared title/description/canonical/OG/Twitter for route pages. */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  robots,
}: PageMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    robots,
    openGraph: {
      title,
      description,
      url: canonical,
      type,
      locale: "es_CO",
      siteName: SITE_SEO.siteName,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
