import Link from "next/link";
import type { Curso, Rama, Via } from "@/content/types";
import { cn } from "@/lib/utils";

export type RutaTimelineItem = {
  orden: number;
  rama: Rama;
  curso: Curso;
  /** 0–1 fraction of lessons completed when progress is available */
  progressRatio?: number;
};

type RutaTimelineProps = {
  via: Via;
  items: RutaTimelineItem[];
};

export function RutaTimeline({ via, items }: RutaTimelineProps) {
  const nextPublished = items.find((item) => item.curso.status === "publicado");

  return (
    <section className="space-y-8" aria-labelledby={`ruta-${via.slug}`}>
      <div className="max-w-2xl space-y-3">
        <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
          Ruta · {via.nombre}
        </p>
        <h1
          id={`ruta-${via.slug}`}
          className="text-3xl font-semibold sm:text-4xl"
        >
          {via.tagline}
        </h1>
        <p className="text-muted text-base leading-relaxed">
          {via.descripcion}
        </p>
        {nextPublished ? (
          <Link
            href={`/cursos/${nextPublished.curso.slug}`}
            className="bg-foreground text-background hover:bg-brand-green inline-flex min-h-11 items-center rounded-md px-5 py-2.5 text-base font-semibold transition"
          >
            Empezar: {nextPublished.curso.titulo}
          </Link>
        ) : null}
      </div>

      <ol className="border-foreground/15 relative ml-3 space-y-0 border-l">
        {items.map((item, index) => {
          const published = item.curso.status === "publicado";
          const ratio = item.progressRatio;
          const hasProgress = typeof ratio === "number";
          const done = hasProgress && ratio >= 1;
          return (
            <li
              key={item.curso.slug}
              className="ruta-step relative pb-10 pl-8 last:pb-0"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span
                className={cn(
                  "absolute top-1.5 -left-[5px] size-2.5 rounded-full",
                  done
                    ? "bg-brand-green"
                    : published
                      ? "bg-accent"
                      : "bg-foreground/25",
                )}
                aria-hidden
              />
              <p className="text-muted text-sm font-semibold tracking-wide uppercase">
                Paso {item.orden} · {item.rama.nombre}
              </p>
              <h3 className="mt-1 text-xl font-semibold">
                {published ? (
                  <Link
                    href={`/cursos/${item.curso.slug}`}
                    className="hover:text-brand-green underline-offset-4 hover:underline"
                  >
                    {item.curso.titulo}
                  </Link>
                ) : (
                  item.curso.titulo
                )}
              </h3>
              <p className="text-muted mt-2 max-w-xl text-base leading-relaxed">
                {item.curso.resumen}
              </p>
              {hasProgress && published ? (
                <div className="mt-3 max-w-xs">
                  <div
                    className="bg-foreground/10 h-1.5 overflow-hidden rounded-full"
                    role="progressbar"
                    aria-valuenow={Math.round(ratio * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuetext={`${Math.round(ratio * 100)} por ciento completado`}
                    aria-label={`Progreso del curso ${item.curso.titulo}`}
                  >
                    <div
                      className="bg-brand-green h-full rounded-full transition-[width]"
                      style={{ width: `${Math.round(ratio * 100)}%` }}
                    />
                  </div>
                  <p className="text-muted mt-1 text-sm">
                    {Math.round(ratio * 100)}% completado
                  </p>
                </div>
              ) : null}
              <p className="mt-2 text-sm">
                {published ? (
                  <span className="text-muted">
                    {item.curso.duracionMin} min
                  </span>
                ) : (
                  <>
                    <span className="text-muted">
                      Próximamente · outline disponible
                    </span>
                    {" · "}
                    <Link
                      href={`/cursos/${item.curso.slug}`}
                      className="underline underline-offset-4"
                    >
                      Ver objetivos
                    </Link>
                  </>
                )}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
