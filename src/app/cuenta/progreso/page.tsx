import type { Metadata } from "next";
import { ProgressDashboard } from "@/components/progress-dashboard";

export const metadata: Metadata = {
  title: "Mi progreso",
  description: "Avances guardados en cursos y rutas de capacitación.",
};

export default function ProgresoPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20">
      <div className="max-w-2xl space-y-3">
        <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
          Cuenta
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Mi progreso</h1>
        <p className="text-muted text-sm leading-relaxed">
          Resumen de lecciones completadas. Sin sesión, el contenido sigue
          disponible en cursos y rutas.
        </p>
      </div>
      <ProgressDashboard className="mt-10" />
    </div>
  );
}
