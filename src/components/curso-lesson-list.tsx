"use client";

import Link from "next/link";
import { useLessonProgress } from "@/hooks/use-lesson-progress";
import type { LeccionMeta } from "@/content/types";
import { progressKey } from "@/lib/progress";
import { cn } from "@/lib/utils";

type CursoLessonListProps = {
  cursoSlug: string;
  lecciones: LeccionMeta[];
  published: boolean;
};

export function CursoLessonList({
  cursoSlug,
  lecciones,
  published,
}: CursoLessonListProps) {
  const { completed } = useLessonProgress();
  const sorted = [...lecciones].sort((a, b) => a.orden - b.orden);

  return (
    <ol className="mt-4 space-y-3">
      {sorted.map((leccion) => {
        const done = completed.has(progressKey(cursoSlug, leccion.slug));
        return (
          <li
            key={leccion.slug}
            className="border-foreground/10 flex flex-wrap items-baseline justify-between gap-2 border-b py-3"
          >
            <div className="flex min-w-0 items-baseline gap-2">
              <span className="text-muted text-xs">{leccion.orden}. </span>
              {published ? (
                <Link
                  href={`/cursos/${cursoSlug}/${leccion.slug}`}
                  className={cn(
                    "font-semibold underline-offset-4 hover:underline",
                    done && "text-brand-green",
                  )}
                >
                  {leccion.titulo}
                </Link>
              ) : (
                <span className="font-semibold">{leccion.titulo}</span>
              )}
              {done ? (
                <span className="text-brand-green text-xs font-semibold">
                  Hecha
                </span>
              ) : null}
            </div>
            <span className="text-muted text-xs">{leccion.minutos} min</span>
          </li>
        );
      })}
    </ol>
  );
}
