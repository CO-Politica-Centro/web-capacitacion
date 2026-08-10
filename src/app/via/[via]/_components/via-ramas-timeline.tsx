import Link from "next/link";
import type { Curso, Rama } from "@/content/types";
import { cn } from "@/lib/utils";

export type ViaRamaStep = {
  rama: Rama;
  curso?: Curso;
};

type ViaRamasTimelineProps = {
  steps: ViaRamaStep[];
};

export function ViaRamasTimeline({ steps }: ViaRamasTimelineProps) {
  return (
    <ol className="border-foreground/15 relative ml-3 space-y-0 border-l">
      {steps.map((step, index) => {
        const { rama, curso } = step;
        const published = curso?.status === "publicado";
        return (
          <li
            key={rama.id}
            className="ruta-step relative pb-10 pl-8 last:pb-0"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span
              className={cn(
                "absolute top-1.5 -left-[5px] size-2.5 rounded-full",
                published ? "bg-accent" : "bg-foreground/25",
              )}
              aria-hidden
            />
            <p className="text-muted text-sm font-semibold tracking-wide uppercase">
              Paso {rama.orden}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{rama.nombre}</h3>
            <p className="text-muted mt-2 max-w-xl text-base leading-relaxed">
              {rama.resumen}
            </p>
            {curso ? (
              <p className="mt-3 text-base">
                <Link
                  href={`/cursos/${curso.slug}`}
                  className="text-brand-green font-semibold underline-offset-4 hover:underline"
                >
                  {curso.titulo}
                </Link>
                <span className="text-muted">
                  {" "}
                  · {curso.leccionesMeta.length} lecciones · {curso.duracionMin}{" "}
                  min
                </span>
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
