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
        className={cn("text-muted hidden text-sm sm:inline", className)}
        aria-hidden
      >
        …
      </span>
    );
  }

  if (user) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Link
          href="/cuenta/progreso"
          className="text-muted hover:text-foreground hidden min-h-11 items-center text-sm sm:inline-flex"
        >
          Mi progreso
        </Link>
        <button
          type="button"
          onClick={() => void logOut()}
          className="border-foreground/15 text-foreground hover:bg-foreground/5 inline-flex min-h-11 items-center rounded-xl border px-3 text-sm font-medium transition"
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
        "border-foreground/15 text-foreground hover:bg-foreground/5 inline-flex min-h-11 items-center rounded-xl border px-3 text-sm font-medium transition",
        className,
      )}
    >
      Entrar
    </Link>
  );
}
