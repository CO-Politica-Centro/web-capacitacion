import type { Metadata } from "next";
import Link from "next/link";
import { RecursoList } from "@/components/recurso-list";
import { ramas } from "@/content/ramas";
import type { RecursoTipo } from "@/content/types";
import { getRecursos, getVias, isViaSlug } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Biblioteca de guías, lecturas, glosario y enlaces para formación ciudadana.",
};

const tipos: RecursoTipo[] = ["guia", "lectura", "glosario", "enlace"];

const tipoLabel: Record<RecursoTipo, string> = {
  guia: "Guías",
  lectura: "Lecturas",
  glosario: "Glosario",
  enlace: "Enlaces",
};

type RecursosPageProps = {
  searchParams: Promise<{ tipo?: string; rama?: string; via?: string }>;
};

export default async function RecursosPage({
  searchParams,
}: RecursosPageProps) {
  const params = await searchParams;
  const tipo = tipos.includes(params.tipo as RecursoTipo)
    ? (params.tipo as RecursoTipo)
    : undefined;
  const via = isViaSlug(params.via) ? params.via : undefined;
  const rama = params.rama || undefined;
  const recursos = getRecursos({ tipo, via, rama });
  const vias = getVias();

  const hrefFor = (next: { tipo?: string; via?: string; rama?: string }) => {
    const q = new URLSearchParams();
    if (next.tipo) q.set("tipo", next.tipo);
    if (next.via) q.set("via", next.via);
    if (next.rama) q.set("rama", next.rama);
    const s = q.toString();
    return s ? `/recursos?${s}` : "/recursos";
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <div className="max-w-2xl space-y-3">
        <h1 className="text-4xl font-semibold">Recursos</h1>
        <p className="text-muted leading-relaxed">
          Biblioteca curada para acompañar las rutas: glosario, guías rápidas,
          lecturas de refuerzo y enlaces oficiales.
        </p>
      </div>

      <div className="mt-10 space-y-4 text-sm">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href={hrefFor({ via, rama })}
            className={cn(
              "font-semibold underline-offset-4 hover:underline",
              !tipo ? "text-foreground" : "text-muted",
            )}
          >
            Todos los tipos
          </Link>
          {tipos.map((t) => (
            <Link
              key={t}
              href={hrefFor({ tipo: t, via, rama })}
              className={cn(
                "font-semibold underline-offset-4 hover:underline",
                tipo === t ? "text-foreground" : "text-muted",
              )}
            >
              {tipoLabel[t]}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href={hrefFor({ tipo, rama })}
            className={cn(
              "underline-offset-4 hover:underline",
              !via ? "text-foreground font-medium" : "text-muted",
            )}
          >
            Todas las vías
          </Link>
          {vias.map((v) => (
            <Link
              key={v.id}
              href={hrefFor({ tipo, via: v.slug })}
              className={cn(
                "underline-offset-4 hover:underline",
                via === v.slug ? "text-foreground font-medium" : "text-muted",
              )}
            >
              {v.nombre}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href={hrefFor({ tipo, via })}
            className={cn(
              "underline-offset-4 hover:underline",
              !rama ? "text-foreground font-medium" : "text-muted",
            )}
          >
            Todas las ramas
          </Link>
          {(via ? ramas.filter((r) => r.viaId === via) : ramas).map((r) => (
            <Link
              key={r.id}
              href={hrefFor({ tipo, via: r.viaId, rama: r.slug })}
              className={cn(
                "underline-offset-4 hover:underline",
                rama === r.slug ? "text-foreground font-medium" : "text-muted",
              )}
            >
              {r.nombre}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <RecursoList recursos={recursos} />
      </div>
    </div>
  );
}
