import Link from "next/link";
import type { Curso, Rama, Via } from "@/content/types";
import { cn } from "@/lib/utils";

export type RutaTimelineItem = {
  orden: number;
  rama: Rama;
  curso: Curso;
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
        <h2
          id={`ruta-${via.slug}`}
          className="text-3xl font-semibold sm:text-4xl"
        >
          {via.tagline}
        </h2>
        <p className="text-muted text-base leading-relaxed">
          {via.descripcion}
        </p>
        {nextPublished ? (
          <Link
            href={`/cursos/${nextPublished.curso.slug}`}
            className="bg-foreground text-background hover:bg-brand-green inline-flex rounded-md px-5 py-2.5 text-sm font-semibold transition"
          >
            Empezar: {nextPublished.curso.titulo}
          </Link>
        ) : null}
      </div>

      <ol className="border-foreground/15 relative ml-3 space-y-0 border-l">
        {items.map((item, index) => {
          const published = item.curso.status === "publicado";
          return (
            <li
              key={item.curso.slug}
              className="ruta-step relative pb-10 pl-8 last:pb-0"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span
                className={cn(
                  "absolute top-1.5 -left-[5px] size-2.5 rounded-full",
                  published ? "bg-brand-green" : "bg-foreground/25",
                )}
                aria-hidden
              />
              <p className="text-muted text-xs font-semibold tracking-wide uppercase">
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
              <p className="text-muted mt-2 max-w-xl text-sm leading-relaxed">
                {item.curso.resumen}
              </p>
              <p className="mt-2 text-sm">
                {published ? (
                  <Link
                    href={`/cursos/${item.curso.slug}`}
                    className="text-brand-green font-semibold underline-offset-4 hover:underline"
                  >
                    Abrir curso · {item.curso.duracionMin} min
                  </Link>
                ) : (
                  <span className="text-muted">
                    Próximamente · outline disponible
                  </span>
                )}
                {!published ? (
                  <>
                    {" · "}
                    <Link
                      href={`/cursos/${item.curso.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      Ver objetivos
                    </Link>
                  </>
                ) : null}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
