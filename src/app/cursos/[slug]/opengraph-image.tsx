import { getCursoBySlug } from "@/lib/content";
import { ogContentType, ogSize, renderBrandOg } from "@/lib/og-brand";

export const alt = "Curso · Capacitación Centro";
export const size = ogSize;
export const contentType = ogContentType;

type Props = { params: Promise<{ slug: string }> };

export default async function CursoOpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);

  return renderBrandOg({
    eyebrow: "Curso · Capacitación Centro",
    title: curso?.titulo ?? "Curso político",
    subtitle:
      curso?.resumen ??
      "Formación práctica de CO Politica Centro para Colombia.",
  });
}
