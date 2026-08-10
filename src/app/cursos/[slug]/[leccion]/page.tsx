import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { LeccionArticle } from "@/components/leccion-article";
import { cursos } from "@/content/cursos";
import {
  getCursoBySlug,
  getLeccion,
  getLeccionNav,
  getRamaById,
} from "@/lib/content";
import { getSiteUrl, pageMetadata } from "@/lib/seo";

type LeccionPageProps = {
  params: Promise<{ slug: string; leccion: string }>;
};

export function generateStaticParams() {
  const params: { slug: string; leccion: string }[] = [];
  for (const curso of cursos) {
    if (curso.status !== "publicado") continue;
    for (const leccion of curso.leccionesMeta) {
      params.push({ slug: curso.slug, leccion: leccion.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: LeccionPageProps): Promise<Metadata> {
  const { slug, leccion: leccionSlug } = await params;
  const curso = getCursoBySlug(slug);
  const leccion = getLeccion(slug, leccionSlug);
  if (!curso || !leccion) return { title: "Lección" };
  return pageMetadata({
    title: leccion.titulo,
    description: leccion.objetivos[0] ?? curso.resumen,
    path: `/cursos/${curso.slug}/${leccion.slug}`,
    type: "article",
  });
}

export default async function LeccionPage({ params }: LeccionPageProps) {
  const { slug, leccion: leccionSlug } = await params;
  const curso = getCursoBySlug(slug);
  const leccion = getLeccion(slug, leccionSlug);
  if (!curso || !leccion) notFound();

  const nav = getLeccionNav(slug, leccionSlug);
  const rama = getRamaById(curso.ramaId);
  const viaSlug = rama?.viaId ?? "concientizacion";
  const siteUrl = getSiteUrl();

  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Ruta", href: `/ruta/${viaSlug}` },
    { label: curso.titulo, href: `/cursos/${curso.slug}` },
    { label: leccion.titulo },
  ];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <JsonLd data={breadcrumbLd} />
      <Breadcrumbs items={breadcrumbItems} />
      <LeccionArticle leccion={leccion} prev={nav.prev} next={nav.next} />
    </div>
  );
}
