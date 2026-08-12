import { SITE_SEO } from "@/lib/seo";
import { ogContentType, ogSize, renderBrandOg } from "@/lib/og-brand";

export const alt = SITE_SEO.ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderBrandOg({
    eyebrow: "Escuela abierta",
    title: "Capacitación · Centro",
    subtitle: "Rutas guiadas para entender y actuar en política colombiana.",
  });
}
