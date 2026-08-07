import Link from "next/link";
import type { Rama, Via } from "@/content/types";
import { cn } from "@/lib/utils";

type CatalogFiltersProps = {
  vias: Via[];
  ramas: Rama[];
  activeVia?: string;
  activeRama?: string;
};

export function CatalogFilters({
  vias,
  ramas,
  activeVia,
  activeRama,
}: CatalogFiltersProps) {
  const buildHref = (via?: string, rama?: string) => {
    const params = new URLSearchParams();
    if (via) params.set("via", via);
    if (rama) params.set("rama", rama);
    const q = params.toString();
    return q ? `/cursos?${q}` : "/cursos";
  };

  const ramasForVia = activeVia
    ? ramas.filter((r) => r.viaId === activeVia)
    : ramas;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <Link
          href="/cursos"
          className={cn(
            "font-semibold underline-offset-4 hover:underline",
            !activeVia ? "text-foreground" : "text-muted",
          )}
        >
          Todas las vías
        </Link>
        {vias.map((via) => (
          <Link
            key={via.id}
            href={buildHref(via.slug)}
            className={cn(
              "font-semibold underline-offset-4 hover:underline",
              activeVia === via.slug ? "text-foreground" : "text-muted",
            )}
          >
            {via.nombre}
          </Link>
        ))}
      </div>
      {ramasForVia.length > 0 ? (
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link
            href={buildHref(activeVia)}
            className={cn(
              "underline-offset-4 hover:underline",
              !activeRama ? "text-foreground font-medium" : "text-muted",
            )}
          >
            Todas las ramas
          </Link>
          {ramasForVia.map((rama) => (
            <Link
              key={rama.id}
              href={buildHref(rama.viaId, rama.slug)}
              className={cn(
                "underline-offset-4 hover:underline",
                activeRama === rama.slug
                  ? "text-foreground font-medium"
                  : "text-muted",
              )}
            >
              {rama.nombre}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
