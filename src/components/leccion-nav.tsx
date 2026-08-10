import Link from "next/link";
import type { LeccionMeta, SiguientePaso } from "@/content/types";

type LeccionNavProps = {
  cursoSlug: string;
  prev: LeccionMeta | null;
  next: LeccionMeta | null;
  /** Used at end of course when bridging to the next course or path */
  siguientePaso?: SiguientePaso;
};

export function LeccionNav({
  cursoSlug,
  prev,
  next,
  siguientePaso,
}: LeccionNavProps) {
  const nextHref = next
    ? `/cursos/${cursoSlug}/${next.slug}`
    : (siguientePaso?.href ?? null);
  const nextLabel = next
    ? next.titulo
    : (siguientePaso?.label.replace(/^Siguiente:\s*/i, "") ?? null);
  const nextEyebrow = next
    ? "Siguiente"
    : siguientePaso
      ? "Siguiente paso"
      : null;

  return (
    <nav
      className="border-foreground/10 mt-12 flex flex-wrap items-start justify-between gap-6 border-t pt-6 text-base"
      aria-label="Navegación de lecciones"
    >
      <div className="max-w-sm min-w-0">
        {prev ? (
          <Link
            href={`/cursos/${cursoSlug}/${prev.slug}`}
            className="hover:text-brand-green group block underline-offset-4 hover:underline"
          >
            <span className="text-muted block text-sm">Anterior</span>
            <span className="font-semibold">{prev.titulo}</span>
          </Link>
        ) : (
          <Link
            href={`/cursos/${cursoSlug}`}
            className="hover:text-brand-green group block underline-offset-4 hover:underline"
          >
            <span className="text-muted block text-sm">Curso</span>
            <span className="font-semibold">Volver al inicio del curso</span>
          </Link>
        )}
      </div>
      <div className="max-w-sm min-w-0 text-right">
        {nextHref && nextLabel && nextEyebrow ? (
          <Link
            href={nextHref}
            className="hover:text-brand-green group block underline-offset-4 hover:underline"
          >
            <span className="text-muted block text-sm">{nextEyebrow}</span>
            <span className="font-semibold">{nextLabel}</span>
          </Link>
        ) : (
          <span className="text-muted text-sm">Fin del curso</span>
        )}
      </div>
    </nav>
  );
}
