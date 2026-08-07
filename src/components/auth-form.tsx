"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useAuth } from "@/components/auth-provider";
import { cn } from "@/lib/utils";

type AuthFormMode = "entrar" | "registro";

type AuthFormProps = {
  mode: AuthFormMode;
  className?: string;
};

export function AuthForm({ mode, className }: AuthFormProps) {
  const { signIn, signUp, configured } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const isRegister = mode === "registro";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);
    try {
      if (isRegister) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      router.push("/cuenta/progreso");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setPending(false);
    }
  }

  if (!configured) {
    return (
      <p className="text-muted text-sm leading-relaxed">
        La autenticación no está configurada en este entorno. Añade las
        variables <code className="text-foreground">NEXT_PUBLIC_FIREBASE_*</code>{" "}
        (ver <code className="text-foreground">.env.example</code>).
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("max-w-md space-y-4", className)}
      noValidate
    >
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-foreground/20 bg-surface text-foreground focus:border-brand-green w-full rounded-md border px-3 py-2.5 text-sm outline-none"
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="password" className="text-sm font-medium">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={isRegister ? "new-password" : "current-password"}
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-foreground/20 bg-surface text-foreground focus:border-brand-green w-full rounded-md border px-3 py-2.5 text-sm outline-none"
        />
        {isRegister ? (
          <p className="text-muted text-xs">Mínimo 6 caracteres.</p>
        ) : null}
      </div>

      {error ? (
        <p className="text-sm text-red-700 dark:text-red-300" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="bg-foreground text-background hover:bg-brand-green inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition disabled:opacity-60"
      >
        {pending
          ? "Espera…"
          : isRegister
            ? "Crear cuenta"
            : "Iniciar sesión"}
      </button>

      <p className="text-muted text-sm">
        {isRegister ? (
          <>
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/cuenta/entrar"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Entrar
            </Link>
          </>
        ) : (
          <>
            ¿Primera vez?{" "}
            <Link
              href="/cuenta/registro"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Crear cuenta
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
