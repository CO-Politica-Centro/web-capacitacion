import Link from "next/link";
import type { LeccionMeta } from "@/content/types";

type LeccionNavProps = {
  cursoSlug: string;
  prev: LeccionMeta | null;
  next: LeccionMeta | null;
};

export function LeccionNav({ cursoSlug, prev, next }: LeccionNavProps) {
  return (
    <nav
      className="border-foreground/10 mt-12 flex flex-wrap items-start justify-between gap-4 border-t pt-6 text-base"
      aria-label="Navegación de lecciones"
    >
      <div>
        {prev ? (
          <Link
            href={`/cursos/${cursoSlug}/${prev.slug}`}
            className="hover:text-brand-green group block max-w-xs underline-offset-4 hover:underline"
          >
            <span className="text-muted block text-sm">Anterior</span>
            <span className="font-semibold">{prev.titulo}</span>
          </Link>
        ) : (
          <span className="text-muted text-sm">Inicio del curso</span>
        )}
      </div>
      <div className="text-right">
        {next ? (
          <Link
            href={`/cursos/${cursoSlug}/${next.slug}`}
            className="hover:text-brand-green group block max-w-xs underline-offset-4 hover:underline"
          >
            <span className="text-muted block text-sm">Siguiente</span>
            <span className="font-semibold">{next.titulo}</span>
          </Link>
        ) : (
          <span className="text-muted text-sm">Fin del curso</span>
        )}
      </div>
    </nav>
  );
}
