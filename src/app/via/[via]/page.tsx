import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViaRamasTimeline } from "@/app/via/[via]/_components/via-ramas-timeline";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  getCursos,
  getRamasByVia,
  getViaBySlug,
  isViaSlug,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type ViaPageProps = {
  params: Promise<{ via: string }>;
};

export async function generateStaticParams() {
  return [{ via: "concientizacion" }, { via: "practica" }];
}

export async function generateMetadata({
  params,
}: ViaPageProps): Promise<Metadata> {
  const { via: viaParam } = await params;
  if (!isViaSlug(viaParam)) return { title: "Vía" };
  const via = getViaBySlug(viaParam);
  if (!via) return { title: "Vía" };
  return pageMetadata({
    title: via.nombre,
    description: via.descripcion,
    path: `/via/${via.slug}`,
  });
}

export default async function ViaHubPage({ params }: ViaPageProps) {
  const { via: viaParam } = await params;
  if (!isViaSlug(viaParam)) notFound();
  const via = getViaBySlug(viaParam);
  if (!via) notFound();

  const ramas = getRamasByVia(via.slug);
  const cursos = getCursos({ via: via.slug });

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-20">
      <Breadcrumbs
        items={[{ label: "Inicio", href: "/" }, { label: via.nombre }]}
      />
      <div className="max-w-2xl space-y-4">
        <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
          Vía · {via.nombre}
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {via.tagline}
        </h1>
        <p className="text-muted text-base leading-relaxed">
          {via.descripcion}
        </p>
        <p className="text-muted text-base">{via.audiencia}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={`/ruta/${via.slug}`}
            className="bg-foreground text-background hover:bg-brand-green inline-flex min-h-12 items-center rounded-lg px-6 py-3 text-base font-semibold transition-colors"
          >
            Ver ruta paso a paso
          </Link>
          <Link
            href="/recursos"
            className="border-border-strong bg-surface text-foreground hover:border-accent inline-flex min-h-12 items-center rounded-lg border-2 px-6 py-3 text-base font-semibold transition-colors"
          >
            Biblioteca de recursos
          </Link>
        </div>
      </div>

      <section
        className="mt-14 space-y-6 sm:mt-16"
        aria-labelledby="ramas-heading"
      >
        <h2 id="ramas-heading" className="text-2xl font-semibold">
          Ruta de esta vía
        </h2>
        <ViaRamasTimeline
          steps={ramas.map((rama) => ({
            rama,
            curso: cursos.find((c) => c.ramaId === rama.id),
          }))}
        />
      </section>

      <p className="text-muted mt-12 text-base leading-relaxed">
        También puedes abrir la{" "}
        <Link
          href={`/ruta/${via.slug}`}
          className="text-foreground font-semibold underline-offset-4 hover:underline"
        >
          ruta guiada
        </Link>{" "}
        o la{" "}
        <Link
          href="/recursos"
          className="text-foreground font-semibold underline-offset-4 hover:underline"
        >
          biblioteca de recursos
        </Link>
        .
      </p>
    </div>
  );
}
