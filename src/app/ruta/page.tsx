import { permanentRedirect } from "next/navigation";
import { isViaSlug } from "@/lib/content";

type RutaIndexProps = {
  searchParams: Promise<{ via?: string }>;
};

/** Legacy `/ruta` and `/ruta?via=` redirect to path-based routes. */
export default async function RutaIndexPage({ searchParams }: RutaIndexProps) {
  const params = await searchParams;
  const via = isViaSlug(params.via) ? params.via : "concientizacion";
  permanentRedirect(`/ruta/${via}`);
}
