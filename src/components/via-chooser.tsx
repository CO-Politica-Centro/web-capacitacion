import Link from "next/link";
import type { Via } from "@/content/types";
import { cn } from "@/lib/utils";

type ViaChooserProps = {
  vias: Via[];
  className?: string;
};

export function ViaChooser({ vias, className }: ViaChooserProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {vias.map((via) => (
        <Link
          key={via.id}
          href={`/ruta?via=${via.slug}`}
          className={cn(
            "inline-flex min-h-11 items-center rounded-md px-5 py-2.5 text-sm font-semibold transition",
            via.id === "concientizacion"
              ? "bg-foreground text-background hover:bg-brand-green"
              : "border-foreground/20 bg-surface text-foreground hover:border-accent border",
          )}
        >
          {via.ctaLabel}
        </Link>
      ))}
    </div>
  );
}
