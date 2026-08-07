import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CursoStatusBadge } from "@/components/curso-status-badge";
import { cursos } from "@/content/cursos";
import {
  getCursoBySlug,
  getRamaById,
  getViaBySlug,
} from "@/lib/content";

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
  return {
    title: curso.titulo,
    description: curso.resumen,
  };
}

export default async function CursoDetailPage({ params }: CursoPageProps) {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);
  if (!curso) notFound();

  const rama = getRamaById(curso.ramaId);
  const via = rama ? getViaBySlug(rama.viaId) : undefined;
  const published = curso.status === "publicado";
  const firstLesson = curso.leccionesMeta[0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <nav className="text-muted mb-8 text-sm">
        <Link href="/cursos" className="hover:text-foreground underline-offset-4 hover:underline">
          Cursos
        </Link>
        {via ? (
          <>
            {" · "}
            <Link
              href={`/ruta?via=${via.slug}`}
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Ruta {via.nombre}
            </Link>
          </>
        ) : null}
      </nav>

      <div className="max-w-2xl space-y-4">
        <CursoStatusBadge status={curso.status} />
        <h1 className="text-4xl font-semibold leading-tight">{curso.titulo}</h1>
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
        <ol className="mt-4 space-y-3">
          {curso.leccionesMeta
            .slice()
            .sort((a, b) => a.orden - b.orden)
            .map((leccion) => (
              <li
                key={leccion.slug}
                className="border-foreground/10 flex flex-wrap items-baseline justify-between gap-2 border-b py-3"
              >
                <div>
                  <span className="text-muted text-xs">
                    {leccion.orden}.{" "}
                  </span>
                  {published ? (
                    <Link
                      href={`/cursos/${curso.slug}/${leccion.slug}`}
                      className="font-semibold underline-offset-4 hover:underline"
                    >
                      {leccion.titulo}
                    </Link>
                  ) : (
                    <span className="font-semibold">{leccion.titulo}</span>
                  )}
                </div>
                <span className="text-muted text-xs">{leccion.minutos} min</span>
              </li>
            ))}
        </ol>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        {published && firstLesson ? (
          <Link
            href={`/cursos/${curso.slug}/${firstLesson.slug}`}
            className="bg-foreground text-background hover:bg-brand-green rounded-md px-5 py-2.5 text-sm font-semibold transition"
          >
            Empezar curso
          </Link>
        ) : (
          <Link
            href={via ? `/ruta?via=${via.slug}` : "/ruta"}
            className="bg-foreground text-background hover:bg-brand-green rounded-md px-5 py-2.5 text-sm font-semibold transition"
          >
            Volver a la ruta
          </Link>
        )}
        <Link
          href="/cursos"
          className="border-foreground/20 bg-surface rounded-md border px-5 py-2.5 text-sm font-semibold transition hover:border-accent"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}
