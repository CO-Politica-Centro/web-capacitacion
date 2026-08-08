import Link from "next/link";
import type { Rama, Via } from "@/content/types";
import { cn } from "@/lib/utils";

type CatalogFiltersProps = {
  vias: Via[];
  ramas: Rama[];
  activeVia?: string;
  activeRama?: string;
};

function buildHref(via?: string, rama?: string) {
  const params = new URLSearchParams();
  if (via) params.set("via", via);
  if (rama) params.set("rama", rama);
  const q = params.toString();
  return q ? `/cursos?${q}` : "/cursos";
}

const chipClass =
  "inline-flex min-h-11 items-center underline-offset-4 hover:underline";

export function CatalogFilters({
  vias,
  ramas,
  activeVia,
  activeRama,
}: CatalogFiltersProps) {
  const ramasForVia = activeVia
    ? ramas.filter((r) => r.viaId === activeVia)
    : ramas;

  return (
    <div className="space-y-4">
      <nav
        aria-label="Filtrar por vía"
        className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
      >
        <Link
          href="/cursos"
          aria-current={!activeVia ? "true" : undefined}
          className={cn(
            chipClass,
            "font-semibold",
            !activeVia ? "text-foreground" : "text-muted",
          )}
        >
          Todas las vías
        </Link>
        {vias.map((via) => (
          <Link
            key={via.id}
            href={buildHref(via.slug)}
            aria-current={activeVia === via.slug ? "true" : undefined}
            className={cn(
              chipClass,
              "font-semibold",
              activeVia === via.slug ? "text-foreground" : "text-muted",
            )}
          >
            {via.nombre}
          </Link>
        ))}
      </nav>
      {ramasForVia.length > 0 ? (
        <nav
          aria-label="Filtrar por rama"
          className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
        >
          <Link
            href={buildHref(activeVia)}
            aria-current={!activeRama ? "true" : undefined}
            className={cn(
              chipClass,
              !activeRama ? "text-foreground font-medium" : "text-muted",
            )}
          >
            Todas las ramas
          </Link>
          {ramasForVia.map((rama) => (
            <Link
              key={rama.id}
              href={buildHref(rama.viaId, rama.slug)}
              aria-current={activeRama === rama.slug ? "true" : undefined}
              className={cn(
                chipClass,
                activeRama === rama.slug
                  ? "text-foreground font-medium"
                  : "text-muted",
              )}
            >
              {rama.nombre}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
