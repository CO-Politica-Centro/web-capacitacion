import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeccionArticle } from "@/components/leccion-article";
import { cursos } from "@/content/cursos";
import {
  getCursoBySlug,
  getLeccion,
  getLeccionNav,
  getRamaById,
} from "@/lib/content";

type LeccionPageProps = {
  params: Promise<{ slug: string; leccion: string }>;
};

export function generateStaticParams() {
  return cursos
    .filter((curso) => curso.status === "publicado")
    .flatMap((curso) =>
      curso.leccionesMeta.map((leccion) => ({
        slug: curso.slug,
        leccion: leccion.slug,
      })),
    );
}

export async function generateMetadata({
  params,
}: LeccionPageProps): Promise<Metadata> {
  const { slug, leccion: leccionSlug } = await params;
  const curso = getCursoBySlug(slug);
  const leccion = getLeccion(slug, leccionSlug);
  if (!curso || !leccion) return { title: "Lección" };
  return {
    title: `${leccion.titulo} · ${curso.titulo}`,
    description: leccion.objetivos[0] ?? curso.resumen,
  };
}

export default async function LeccionPage({ params }: LeccionPageProps) {
  const { slug, leccion: leccionSlug } = await params;
  const curso = getCursoBySlug(slug);
  const leccion = getLeccion(slug, leccionSlug);
  if (!curso || !leccion) notFound();

  const nav = getLeccionNav(slug, leccionSlug);
  const rama = getRamaById(curso.ramaId);
  const viaSlug = rama?.viaId ?? "concientizacion";

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <nav className="text-muted mb-8 text-sm">
        <Link
          href={`/cursos/${curso.slug}`}
          className="hover:text-foreground underline-offset-4 hover:underline"
        >
          {curso.titulo}
        </Link>
        {" · "}
        <Link
          href={`/ruta/${viaSlug}`}
          className="hover:text-foreground underline-offset-4 hover:underline"
        >
          Ruta
        </Link>
      </nav>

      <LeccionArticle leccion={leccion} prev={nav.prev} next={nav.next} />
    </div>
  );
}
