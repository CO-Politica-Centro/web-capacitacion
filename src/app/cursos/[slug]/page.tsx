import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CursoLessonList } from "@/components/curso-lesson-list";
import { CursoStatusBadge } from "@/components/curso-status-badge";
import { JsonLd } from "@/components/json-ld";
import { cursos } from "@/content/cursos";
import { getCursoBySlug, getRamaById, getViaBySlug } from "@/lib/content";
import { getSiteUrl, pageMetadata } from "@/lib/seo";

type CursoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cursos.map((curso) => ({ slug: curso.slug }));
}

export async function generateMetadata({
  params,
}: CursoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);
  if (!curso) return { title: "Curso" };
  return pageMetadata({
    title: curso.titulo,
    description: curso.resumen,
    path: `/cursos/${curso.slug}`,
    type: "article",
  });
}

export default async function CursoDetailPage({ params }: CursoPageProps) {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);
  if (!curso) notFound();

  const rama = getRamaById(curso.ramaId);
  const via = rama ? getViaBySlug(rama.viaId) : undefined;
  const published = curso.status === "publicado";
  const firstLesson = curso.leccionesMeta[0];
  const siteUrl = getSiteUrl();

  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/cursos" },
    ...(via
      ? [{ label: `Ruta ${via.nombre}`, href: `/ruta/${via.slug}` }]
      : []),
    { label: curso.titulo },
  ];

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: curso.titulo,
    description: curso.resumen,
    url: `${siteUrl}/cursos/${curso.slug}`,
    inLanguage: "es-CO",
    provider: {
      "@type": "Organization",
      name: "CO Politica Centro",
      url: "https://beacons.ai/centropd",
    },
    timeRequired: `PT${curso.duracionMin}M`,
  };

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
      <JsonLd data={[courseLd, breadcrumbLd]} />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-2xl space-y-4">
        <CursoStatusBadge status={curso.status} />
        <h1 className="text-4xl leading-tight font-semibold">{curso.titulo}</h1>
        <p className="text-muted text-lg leading-relaxed">{curso.resumen}</p>
        <p className="text-muted text-sm">
          {rama?.nombre} · {curso.duracionMin} min ·{" "}
          {curso.nivel === "intro" ? "Introducción" : "Intermedio"}
        </p>
      </div>

      <section className="mt-10 max-w-2xl">
        <h2 className="text-xl font-semibold">Objetivos</h2>
        <ul className="text-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {curso.objetivos.map((objetivo) => (
            <li key={objetivo}>{objetivo}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="text-xl font-semibold">Lecciones</h2>
        <CursoLessonList
          cursoSlug={curso.slug}
          lecciones={curso.leccionesMeta}
          published={published}
        />
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        {published && firstLesson ? (
          <Link
            href={`/cursos/${curso.slug}/${firstLesson.slug}`}
            className="bg-foreground text-background hover:bg-brand-green inline-flex min-h-11 items-center rounded-md px-5 py-2.5 text-sm font-semibold transition"
          >
            Empezar curso
          </Link>
        ) : (
          <Link
            href={via ? `/ruta/${via.slug}` : "/ruta/concientizacion"}
            className="bg-foreground text-background hover:bg-brand-green inline-flex min-h-11 items-center rounded-md px-5 py-2.5 text-sm font-semibold transition"
          >
            Volver a la ruta
          </Link>
        )}
        <Link
          href="/cursos"
          className="border-foreground/20 bg-surface hover:border-accent inline-flex min-h-11 items-center rounded-md border px-5 py-2.5 text-sm font-semibold transition"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}
