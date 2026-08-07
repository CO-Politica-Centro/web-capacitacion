import Link from "next/link";
import { CursoStatusBadge } from "@/components/curso-status-badge";
import type { Curso, Rama } from "@/content/types";

type CursoCardProps = {
  curso: Curso;
  rama: Rama;
};

export function CursoCard({ curso, rama }: CursoCardProps) {
  return (
    <article className="border-foreground/10 border-b py-6 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <CursoStatusBadge status={curso.status} />
        <span className="text-muted text-xs">{rama.nombre}</span>
      </div>
      <h2 className="mt-2 text-xl font-semibold">
        <Link
          href={`/cursos/${curso.slug}`}
          className="hover:text-brand-green underline-offset-4 hover:underline"
        >
          {curso.titulo}
        </Link>
      </h2>
      <p className="text-muted mt-2 max-w-2xl text-sm leading-relaxed">
        {curso.resumen}
      </p>
      <p className="text-muted mt-3 text-sm">
        {curso.leccionesMeta.length} lecciones · {curso.duracionMin} min ·{" "}
        {curso.nivel === "intro" ? "Introducción" : "Intermedio"}
      </p>
    </article>
  );
}
