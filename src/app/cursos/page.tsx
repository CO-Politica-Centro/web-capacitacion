import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Cursos",
};

export default function CursosPage() {
  return (
    <ComingSoon
      title="Cursos"
      description="Catálogo de cursos de capacitación política. La estructura está lista para módulos, lecciones y evaluaciones."
    />
  );
}
