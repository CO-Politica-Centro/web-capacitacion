import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Entra y guarda tu avance",
  description:
    "Inicia sesión para conservar tu progreso en las rutas de capacitación política de Centro.",
  path: "/cuenta/entrar",
  robots: { index: false, follow: false },
});

export default function EntrarPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20">
      <div className="max-w-lg space-y-3">
        <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
          Cuenta
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Iniciar sesión</h1>
        <p className="text-muted text-base leading-relaxed">
          Los cursos son públicos. La cuenta solo guarda tu progreso y avances.
        </p>
      </div>
      <AuthForm mode="entrar" className="mt-8" />
      <p className="text-muted mt-10 text-base">
        <Link
          href="/"
          className="text-foreground font-medium underline-offset-4 hover:underline"
        >
          Volver al inicio
        </Link>
      </p>
    </div>
  );
}
