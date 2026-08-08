"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import { cn } from "@/lib/utils";

type AuthNavProps = {
  className?: string;
};

export function AuthNav({ className }: AuthNavProps) {
  const { user, loading, logOut, configured } = useAuth();

  if (!configured) return null;

  if (loading) {
    return (
      <span
        className={cn("text-muted text-sm", className)}
        aria-busy="true"
        aria-live="polite"
      >
        Cargando…
      </span>
    );
  }

  if (user) {
    return (
      <div className={cn("flex flex-wrap items-center gap-2", className)}>
        <Link
          href="/cuenta/progreso"
          className="text-muted hover:text-foreground inline-flex min-h-11 items-center text-sm"
        >
          Mi progreso
        </Link>
        <button
          type="button"
          onClick={() => void logOut()}
          className="border-border-strong text-foreground hover:bg-foreground/5 inline-flex min-h-11 items-center rounded-lg border-2 px-3.5 text-sm font-medium transition"
        >
          Salir
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/cuenta/entrar"
      className={cn(
        "border-border-strong text-foreground hover:bg-foreground/5 inline-flex min-h-11 items-center rounded-lg border-2 px-3.5 text-sm font-medium transition",
        className,
      )}
    >
      Entrar
    </Link>
  );
}
