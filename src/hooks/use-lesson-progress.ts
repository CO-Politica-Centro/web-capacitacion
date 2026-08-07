"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/components/auth-provider";
import {
  fetchCompletedLessonKeys,
  markLessonComplete,
  unmarkLessonComplete,
} from "@/lib/firebase/progress";
import { progressKey } from "@/lib/progress";

export function useLessonProgress() {
  const { user, configured } = useAuth();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!configured || !user) {
      setCompleted(new Set());
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    void fetchCompletedLessonKeys(user.uid)
      .then((keys) => {
        if (!cancelled) setCompleted(keys);
      })
      .catch(() => {
        if (!cancelled) {
          setError("No se pudo cargar el progreso.");
          setCompleted(new Set());
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [configured, user]);

  const isComplete = useCallback(
    (cursoSlug: string, leccionSlug: string) =>
      completed.has(progressKey(cursoSlug, leccionSlug)),
    [completed],
  );

  const toggleComplete = useCallback(
    async (cursoSlug: string, leccionSlug: string) => {
      if (!user) throw new Error("Debes iniciar sesión.");
      const key = progressKey(cursoSlug, leccionSlug);
      const currently = completed.has(key);
      if (currently) {
        await unmarkLessonComplete(user.uid, cursoSlug, leccionSlug);
        setCompleted((prev) => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      } else {
        await markLessonComplete(user.uid, cursoSlug, leccionSlug);
        setCompleted((prev) => new Set(prev).add(key));
      }
    },
    [user, completed],
  );

  return {
    completed,
    loading,
    error,
    isComplete,
    toggleComplete,
  };
}
