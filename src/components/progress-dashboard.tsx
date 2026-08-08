"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import { useLessonProgress } from "@/hooks/use-lesson-progress";
import { getCursos, getRamaById, getVias } from "@/lib/content";
import { courseProgressRatio, progressKey } from "@/lib/progress";
import { cn } from "@/lib/utils";

type ProgressDashboardProps = {
  className?: string;
};

export function ProgressDashboard({ className }: ProgressDashboardProps) {
  const { user, loading: authLoading, configured } = useAuth();
  const { completed, loading } = useLessonProgress();
  const vias = getVias();
  const cursos = getCursos();

  if (!configured) {
    return (
      <p className={cn("text-muted text-base", className)}>
        Firebase no está configurado en este entorno.
      </p>
    );
  }

  if (authLoading || loading) {
    return (
      <p className={cn("text-muted text-base", className)}>
        Cargando progreso…
      </p>
    );
  }

  if (!user) {
    return (
      <div className={cn("space-y-4", className)}>
        <p className="text-muted text-base leading-relaxed">
          Inicia sesión para ver y guardar tus avances.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cuenta/entrar"
            className="bg-foreground text-background hover:bg-brand-green inline-flex min-h-11 items-center rounded-md px-5 py-2.5 text-base font-semibold transition"
          >
            Entrar
          </Link>
          <Link
            href="/cuenta/registro"
            className="border-foreground/20 bg-surface text-foreground inline-flex min-h-11 items-center rounded-md border px-5 py-2.5 text-base font-semibold"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    );
  }

  const totalLessons = cursos.reduce(
    (acc, curso) => acc + curso.leccionesMeta.length,
    0,
  );
  const doneCount = completed.size;

  return (
    <div className={cn("space-y-10", className)}>
      <p className="text-base">
        <span className="font-semibold">{doneCount}</span>
        <span className="text-muted">
          {" "}
          de {totalLessons} lecciones completadas · {user.email}
        </span>
      </p>

      {vias.map((via) => {
        const viaCursos = cursos.filter((curso) => {
          const rama = getRamaById(curso.ramaId);
          return rama?.viaId === via.id;
        });
        return (
          <section key={via.id} className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold">{via.nombre}</h2>
              <Link
                href={`/ruta/${via.slug}`}
                className="text-brand-green text-base font-semibold underline-offset-4 hover:underline"
              >
                Ver ruta
              </Link>
            </div>
            <ul className="space-y-0">
              {viaCursos.map((curso) => {
                const ratio = courseProgressRatio(
                  curso.slug,
                  curso.leccionesMeta,
                  completed,
                );
                const doneLessons = curso.leccionesMeta.filter((meta) =>
                  completed.has(progressKey(curso.slug, meta.slug)),
                ).length;
                return (
                  <li
                    key={curso.slug}
                    className="border-foreground/10 border-b py-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <Link
                        href={`/cursos/${curso.slug}`}
                        className="font-semibold underline-offset-4 hover:underline"
                      >
                        {curso.titulo}
                      </Link>
                      <span className="text-muted text-sm">
                        {doneLessons}/{curso.leccionesMeta.length}
                      </span>
                    </div>
                    <div
                      className="bg-foreground/10 mt-2 h-1.5 max-w-md overflow-hidden rounded-full"
                      role="progressbar"
                      aria-valuenow={Math.round(ratio * 100)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuetext={`${doneLessons} de ${curso.leccionesMeta.length} lecciones`}
                      aria-label={`Progreso de ${curso.titulo}`}
                    >
                      <div
                        className="bg-brand-green h-full rounded-full"
                        style={{ width: `${Math.round(ratio * 100)}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
