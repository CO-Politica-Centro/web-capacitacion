import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Ruta",
};

export default function RutaPage() {
  return (
    <ComingSoon
      title="Ruta de aprendizaje"
      description="Itinerario guiado para quienes empiezan en política ciudadana. Stub listo para niveles y hitos."
    />
  );
}
