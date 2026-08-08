import Link from "next/link";
import { CursoStatusBadge } from "@/components/curso-status-badge";
import type { Curso, Rama } from "@/content/types";

type CursoCardProps = {
  curso: Curso;
  rama: Rama;
};

export function CursoCard({ curso, rama }: CursoCardProps) {
  return (
    <article className="panel mb-4 last:mb-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <CursoStatusBadge status={curso.status} />
        <span className="text-muted text-sm font-medium tracking-wide uppercase">
          {rama.nombre}
        </span>
      </div>
      <h2 className="mt-3 text-xl font-semibold sm:text-[1.35rem]">
        <Link
          href={`/cursos/${curso.slug}`}
          className="hover:text-brand-green underline-offset-4 hover:underline"
        >
          {curso.titulo}
        </Link>
      </h2>
      <p className="text-muted mt-2 max-w-2xl text-base leading-relaxed">
        {curso.resumen}
      </p>
      <p className="text-muted mt-4 text-base">
        {curso.leccionesMeta.length} lecciones · {curso.duracionMin} min ·{" "}
        {curso.nivel === "intro" ? "Introducción" : "Intermedio"}
      </p>
    </article>
  );
}
