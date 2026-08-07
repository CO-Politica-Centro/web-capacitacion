import type { LeccionMeta } from "@/content/types";

export function progressKey(cursoSlug: string, leccionSlug: string): string {
  return `${cursoSlug}__${leccionSlug}`;
}

export function parseProgressKey(key: string): {
  cursoSlug: string;
  leccionSlug: string;
} | null {
  const idx = key.indexOf("__");
  if (idx <= 0 || idx >= key.length - 2) return null;
  return {
    cursoSlug: key.slice(0, idx),
    leccionSlug: key.slice(idx + 2),
  };
}

export function countCompletedLessons(
  cursoSlug: string,
  leccionesMeta: LeccionMeta[],
  completed: ReadonlySet<string>,
): number {
  return leccionesMeta.filter((meta) =>
    completed.has(progressKey(cursoSlug, meta.slug)),
  ).length;
}

export function courseProgressRatio(
  cursoSlug: string,
  leccionesMeta: LeccionMeta[],
  completed: ReadonlySet<string>,
): number {
  if (leccionesMeta.length === 0) return 0;
  return (
    countCompletedLessons(cursoSlug, leccionesMeta, completed) /
    leccionesMeta.length
  );
}
