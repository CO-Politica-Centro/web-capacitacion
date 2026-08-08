import type { Metadata } from "next";
import { CatalogFilters } from "@/components/catalog-filters";
import { CursoCard } from "@/components/curso-card";
import { ramas } from "@/content/ramas";
import { getCursos, getRamaById, getVias, isViaSlug } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cursos",
  description:
    "Catálogo de cursos de concientización política y formación práctica.",
  path: "/cursos",
});

type CursosPageProps = {
  searchParams: Promise<{ via?: string; rama?: string }>;
};

export default async function CursosPage({ searchParams }: CursosPageProps) {
  const params = await searchParams;
  const via = isViaSlug(params.via) ? params.via : undefined;
  const rama = params.rama || undefined;
  const cursos = getCursos({ via, rama });
  const vias = getVias();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <div className="max-w-2xl space-y-3">
        <h1 className="text-4xl font-semibold">Cursos</h1>
        <p className="text-muted leading-relaxed">
          Catálogo por vías y ramas. Los cursos disponibles se pueden leer
          completo; los outlines muestran objetivos y lecciones planeadas.
        </p>
      </div>

      <div className="mt-10">
        <CatalogFilters
          vias={vias}
          ramas={ramas}
          activeVia={via}
          activeRama={rama}
        />
      </div>

      <div className="mt-10">
        {cursos.length === 0 ? (
          <p className="text-muted text-sm">No hay cursos con ese filtro.</p>
        ) : (
          cursos.map((curso) => {
            const cursoRama = getRamaById(curso.ramaId);
            if (!cursoRama) return null;
            return (
              <CursoCard key={curso.slug} curso={curso} rama={cursoRama} />
            );
          })
        )}
      </div>
    </div>
  );
}
