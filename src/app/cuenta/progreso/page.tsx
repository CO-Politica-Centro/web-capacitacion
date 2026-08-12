import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProgressDashboard } from "@/components/progress-dashboard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tu progreso en la escuela",
  description:
    "Revisa qué cursos y lecciones ya avanzaste en Capacitación Centro.",
  path: "/cuenta/progreso",
  robots: { index: false, follow: false },
});

export default function ProgresoPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20">
      <Breadcrumbs
        items={[{ label: "Inicio", href: "/" }, { label: "Mi progreso" }]}
      />
      <div className="max-w-2xl space-y-3">
        <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
          Cuenta
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Mi progreso</h1>
        <p className="text-muted text-base leading-relaxed">
          Resumen de lecciones completadas. Sin sesión, el contenido sigue
          disponible en cursos y rutas.
        </p>
      </div>
      <ProgressDashboard className="mt-10" />
    </div>
  );
}
