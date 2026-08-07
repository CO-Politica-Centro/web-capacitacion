import { describe, expect, it } from "vitest";
import {
  courseProgressRatio,
  countCompletedLessons,
  parseProgressKey,
  progressKey,
} from "@/lib/progress";

describe("progress helpers", () => {
  const meta = [
    { slug: "a", titulo: "A", orden: 1, minutos: 5 },
    { slug: "b", titulo: "B", orden: 2, minutos: 5 },
    { slug: "c", titulo: "C", orden: 3, minutos: 5 },
  ];

  it("builds and parses progress keys", () => {
    const key = progressKey("estado-colombiano", "tres-ramas");
    expect(key).toBe("estado-colombiano__tres-ramas");
    expect(parseProgressKey(key)).toEqual({
      cursoSlug: "estado-colombiano",
      leccionSlug: "tres-ramas",
    });
    expect(parseProgressKey("bad")).toBeNull();
  });

  it("computes course progress ratio", () => {
    const completed = new Set([
      progressKey("curso", "a"),
      progressKey("curso", "c"),
    ]);
    expect(countCompletedLessons("curso", meta, completed)).toBe(2);
    expect(courseProgressRatio("curso", meta, completed)).toBeCloseTo(2 / 3);
    expect(courseProgressRatio("curso", meta, new Set())).toBe(0);
  });
});
