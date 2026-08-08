import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Crear cuenta",
  description:
    "Regístrate para guardar progreso en cursos y rutas de capacitación.",
  path: "/cuenta/registro",
  robots: { index: false, follow: false },
});

export default function RegistroPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20">
      <div className="max-w-lg space-y-3">
        <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
          Cuenta
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Crear cuenta</h1>
        <p className="text-muted text-sm leading-relaxed">
          Usa un correo y una contraseña. Luego podrás marcar lecciones
          completadas.
        </p>
      </div>
      <AuthForm mode="registro" className="mt-8" />
      <p className="text-muted mt-10 text-sm">
        <Link
          href="/"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Volver al inicio
        </Link>
      </p>
    </div>
  );
}
