"use client";

import {
  RutaTimeline,
  type RutaTimelineItem,
} from "@/components/ruta-timeline";
import { useLessonProgress } from "@/hooks/use-lesson-progress";
import type { Via } from "@/content/types";
import { courseProgressRatio } from "@/lib/progress";

type RutaTimelineWithProgressProps = {
  via: Via;
  items: Omit<RutaTimelineItem, "progressRatio">[];
};

export function RutaTimelineWithProgress({
  via,
  items,
}: RutaTimelineWithProgressProps) {
  const { completed, loading } = useLessonProgress();

  const withProgress: RutaTimelineItem[] = items.map((item) => ({
    ...item,
    progressRatio: loading
      ? undefined
      : courseProgressRatio(
          item.curso.slug,
          item.curso.leccionesMeta,
          completed,
        ),
  }));

  return <RutaTimeline via={via} items={withProgress} />;
}
