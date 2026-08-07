"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/auth-provider";
import {
  fetchCompletedLessonKeys,
  markLessonComplete,
  unmarkLessonComplete,
} from "@/lib/firebase/progress";
import { progressKey } from "@/lib/progress";

const EMPTY = new Set<string>();

export function useLessonProgress() {
  const { user, configured } = useAuth();
  const uid = user?.uid ?? null;
  const [cache, setCache] = useState<{
    uid: string;
    keys: Set<string>;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!configured || !uid) return;

    let cancelled = false;
    void fetchCompletedLessonKeys(uid)
      .then((keys) => {
        if (!cancelled) {
          setCache({ uid, keys });
          setError(null);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("No se pudo cargar el progreso.");
          setCache({ uid, keys: new Set() });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [configured, uid]);

  const completed = useMemo(() => {
    if (!uid) return EMPTY;
    if (cache?.uid === uid) return cache.keys;
    return EMPTY;
  }, [uid, cache]);

  const loading = Boolean(configured && uid && cache?.uid !== uid);

  const isComplete = useCallback(
    (cursoSlug: string, leccionSlug: string) =>
      completed.has(progressKey(cursoSlug, leccionSlug)),
    [completed],
  );

  const toggleComplete = useCallback(
    async (cursoSlug: string, leccionSlug: string) => {
      if (!uid) throw new Error("Debes iniciar sesión.");
      const key = progressKey(cursoSlug, leccionSlug);
      const currently = completed.has(key);
      if (currently) {
        await unmarkLessonComplete(uid, cursoSlug, leccionSlug);
        setCache((prev) => {
          const base = prev?.uid === uid ? prev.keys : new Set<string>();
          const next = new Set(base);
          next.delete(key);
          return { uid, keys: next };
        });
      } else {
        await markLessonComplete(uid, cursoSlug, leccionSlug);
        setCache((prev) => {
          const base = prev?.uid === uid ? prev.keys : new Set<string>();
          const next = new Set(base).add(key);
          return { uid, keys: next };
        });
      }
    },
    [uid, completed],
  );

  return {
    completed,
    loading,
    error,
    isComplete,
    toggleComplete,
  };
}
