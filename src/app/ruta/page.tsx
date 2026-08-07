import type { Metadata } from "next";
import Link from "next/link";
import { RutaTimeline } from "@/components/ruta-timeline";
import {
  getCursoBySlug,
  getRamaById,
  getRutaSteps,
  getViaBySlug,
  getVias,
  isViaSlug,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ruta de aprendizaje",
  description:
    "Itinerarios guiados de concientización política y formación práctica.",
};

type RutaPageProps = {
  searchParams: Promise<{ via?: string }>;
};

export default async function RutaPage({ searchParams }: RutaPageProps) {
  const params = await searchParams;
  const vias = getVias();
  const activeSlug = isViaSlug(params.via) ? params.via : "concientizacion";
  const activeVia = getViaBySlug(activeSlug)!;

  const items = getRutaSteps(activeSlug).flatMap((step) => {
    const curso = getCursoBySlug(step.cursoSlug);
    const rama = getRamaById(step.ramaId);
    if (!curso || !rama) return [];
    return [{ orden: step.orden, curso, rama }];
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <div className="mb-12 flex flex-wrap gap-2">
        {vias.map((via) => {
          const active = via.slug === activeSlug;
          return (
            <Link
              key={via.id}
              href={`/ruta?via=${via.slug}`}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition",
                active
                  ? "bg-foreground text-background"
                  : "border-foreground/15 bg-surface text-muted hover:text-foreground border",
              )}
              aria-current={active ? "page" : undefined}
            >
              {via.nombre}
            </Link>
          );
        })}
      </div>

      <RutaTimeline via={activeVia} items={items} />

      <p className="text-muted mt-14 text-sm">
        También puedes explorar el{" "}
        <Link
          href={`/cursos?via=${activeSlug}`}
          className="text-foreground underline-offset-4 hover:underline"
        >
          catálogo de cursos
        </Link>{" "}
        o la{" "}
        <Link
          href="/recursos"
          className="text-foreground underline-offset-4 hover:underline"
        >
          biblioteca de recursos
        </Link>
        .
      </p>
    </div>
  );
}
