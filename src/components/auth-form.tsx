"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { useAuth } from "@/components/auth-provider";
import { cn } from "@/lib/utils";

type AuthFormMode = "entrar" | "registro";

type AuthFormProps = {
  mode: AuthFormMode;
  className?: string;
};

const MIN_PASSWORD = 8;

export function AuthForm({ mode, className }: AuthFormProps) {
  const { signIn, signUp, resetPassword, configured } = useAuth();
  const router = useRouter();
  const errorId = useId();
  const passwordHintId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [resetPending, setResetPending] = useState(false);

  const isRegister = mode === "registro";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setError(null);
    setInfo(null);

    if (password.length < MIN_PASSWORD) {
      setError(`La contraseña debe tener al menos ${MIN_PASSWORD} caracteres.`);
      return;
    }

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

  async function onResetPassword() {
    if (resetPending || pending) return;
    setError(null);
    setInfo(null);
    if (!email.trim()) {
      setError("Escribe tu correo para recuperar la contraseña.");
      return;
    }
    setResetPending(true);
    try {
      await resetPassword(email);
      setInfo(
        "Si el correo es válido, recibirás instrucciones para restablecer la contraseña.",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setResetPending(false);
    }
  }

  if (!configured) {
    return (
      <p className="text-muted text-sm leading-relaxed">
        La autenticación no está configurada en este entorno. Añade las
        variables{" "}
        <code className="text-foreground">NEXT_PUBLIC_FIREBASE_*</code> (ver{" "}
        <code className="text-foreground">.env.example</code>).
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
          aria-invalid={error ? true : undefined}
          aria-errormessage={error ? errorId : undefined}
          className="border-foreground/20 bg-surface text-foreground focus-visible:border-brand-green w-full rounded-md border px-3 py-2.5 text-sm"
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
          minLength={MIN_PASSWORD}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-errormessage={error ? errorId : undefined}
          aria-describedby={isRegister ? passwordHintId : undefined}
          className="border-foreground/20 bg-surface text-foreground focus-visible:border-brand-green w-full rounded-md border px-3 py-2.5 text-sm"
        />
        {isRegister ? (
          <p id={passwordHintId} className="text-muted text-xs">
            Mínimo {MIN_PASSWORD} caracteres.
          </p>
        ) : null}
      </div>

      {error ? (
        <p
          id={errorId}
          className="text-sm text-red-700 dark:text-red-300"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      {info ? (
        <p className="text-muted text-sm" role="status">
          {info}
        </p>
      ) : null}

      <button
        type="submit"
        aria-busy={pending}
        className={cn(
          "bg-foreground text-background hover:bg-brand-green inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition",
          pending && "pointer-events-none opacity-60",
        )}
      >
        {pending ? "Espera…" : isRegister ? "Crear cuenta" : "Iniciar sesión"}
      </button>

      {!isRegister ? (
        <button
          type="button"
          aria-busy={resetPending}
          onClick={() => void onResetPassword()}
          className={cn(
            "text-muted hover:text-foreground inline-flex min-h-11 w-full items-center justify-center text-sm underline-offset-4 hover:underline",
            resetPending && "pointer-events-none opacity-60",
          )}
        >
          {resetPending ? "Enviando…" : "¿Olvidaste tu contraseña?"}
        </button>
      ) : null}

      <p className="text-muted text-sm">
        {isRegister ? (
          <>
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/cuenta/entrar"
              className="text-foreground font-medium underline underline-offset-4"
            >
              Entrar
            </Link>
          </>
        ) : (
          <>
            ¿Primera vez?{" "}
            <Link
              href="/cuenta/registro"
              className="text-foreground font-medium underline underline-offset-4"
            >
              Crear cuenta
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
