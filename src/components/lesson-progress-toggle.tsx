"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { useLessonProgress } from "@/hooks/use-lesson-progress";
import { cn } from "@/lib/utils";

type LessonProgressToggleProps = {
  cursoSlug: string;
  leccionSlug: string;
  className?: string;
};

export function LessonProgressToggle({
  cursoSlug,
  leccionSlug,
  className,
}: LessonProgressToggleProps) {
  const { user, loading: authLoading, configured } = useAuth();
  const { isComplete, toggleComplete, loading } = useLessonProgress();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!configured) return null;

  if (authLoading || loading) {
    return (
      <p className={cn("text-muted text-sm", className)}>Cargando progreso…</p>
    );
  }

  if (!user) {
    return (
      <p className={cn("text-muted text-sm leading-relaxed", className)}>
        ¿Quieres guardar tu avance?{" "}
        <Link
          href="/cuenta/entrar"
          className="text-brand-green font-semibold underline-offset-4 hover:underline"
        >
          Inicia sesión
        </Link>{" "}
        o{" "}
        <Link
          href="/cuenta/registro"
          className="text-foreground font-semibold underline-offset-4 hover:underline"
        >
          crea una cuenta
        </Link>
        . Puedes seguir leyendo sin registrarte.
      </p>
    );
  }

  const done = isComplete(cursoSlug, leccionSlug);

  return (
    <div className={cn("space-y-2", className)}>
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          setError(null);
          setPending(true);
          void toggleComplete(cursoSlug, leccionSlug)
            .catch(() => setError("No se pudo actualizar el progreso."))
            .finally(() => setPending(false));
        }}
        className={cn(
          "inline-flex min-h-11 items-center rounded-md px-5 py-2.5 text-sm font-semibold transition disabled:opacity-60",
          done
            ? "border-brand-green text-brand-green border bg-transparent"
            : "bg-brand-green text-background hover:bg-foreground",
        )}
      >
        {pending
          ? "Guardando…"
          : done
            ? "Completada · desmarcar"
            : "Marcar como completada"}
      </button>
      {error ? (
        <p className="text-sm text-red-700 dark:text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
