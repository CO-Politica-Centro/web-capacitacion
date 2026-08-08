import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RutaTimelineWithProgress } from "@/components/ruta-timeline-with-progress";
import {
  getCursoBySlug,
  getRamaById,
  getRutaSteps,
  getViaBySlug,
  getVias,
  isViaSlug,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type RutaViaPageProps = {
  params: Promise<{ via: string }>;
};

export async function generateStaticParams() {
  return [{ via: "concientizacion" }, { via: "practica" }];
}

export async function generateMetadata({
  params,
}: RutaViaPageProps): Promise<Metadata> {
  const { via: viaParam } = await params;
  if (!isViaSlug(viaParam)) return { title: "Ruta de aprendizaje" };
  const via = getViaBySlug(viaParam);
  if (!via) return { title: "Ruta de aprendizaje" };
  return pageMetadata({
    title: `Ruta · ${via.nombre}`,
    description: via.descripcion,
    path: `/ruta/${via.slug}`,
  });
}

export default async function RutaViaPage({ params }: RutaViaPageProps) {
  const { via: viaParam } = await params;
  if (!isViaSlug(viaParam)) notFound();
  const activeVia = getViaBySlug(viaParam);
  if (!activeVia) notFound();

  const vias = getVias();
  const items = getRutaSteps(viaParam).flatMap((step) => {
    const curso = getCursoBySlug(step.cursoSlug);
    const rama = getRamaById(step.ramaId);
    if (!curso || !rama) return [];
    return [{ orden: step.orden, curso, rama }];
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: `Ruta · ${activeVia.nombre}` },
        ]}
      />
      <div className="mb-10 flex flex-wrap gap-2 sm:mb-12">
        {vias.map((via) => {
          const active = via.slug === viaParam;
          return (
            <Link
              key={via.id}
              href={`/ruta/${via.slug}`}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md px-4 py-2 text-base font-semibold transition",
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

      <RutaTimelineWithProgress via={activeVia} items={items} />

      <p className="text-muted mt-14 text-base">
        Explora el{" "}
        <Link
          href={`/via/${viaParam}`}
          className="text-foreground underline-offset-4 hover:underline"
        >
          hub de la vía
        </Link>
        , el{" "}
        <Link
          href={`/cursos?via=${viaParam}`}
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
