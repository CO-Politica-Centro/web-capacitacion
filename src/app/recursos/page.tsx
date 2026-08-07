import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Recursos",
};

export default function RecursosPage() {
  return (
    <ComingSoon
      title="Recursos"
      description="Biblioteca de guías, lecturas y materiales de apoyo. Preparada para contenido curado de alta calidad."
    />
  );
}
