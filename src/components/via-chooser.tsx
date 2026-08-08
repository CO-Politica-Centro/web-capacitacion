import Link from "next/link";
import type { Via } from "@/content/types";
import { cn } from "@/lib/utils";

type ViaChooserProps = {
  vias: Via[];
  className?: string;
};

export function ViaChooser({ vias, className }: ViaChooserProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-3 sm:gap-4", className)}
      role="group"
      aria-label="Elegir vía de aprendizaje"
    >
      {vias.map((via) => (
        <Link
          key={via.id}
          href={`/via/${via.slug}`}
          className={cn(
            "inline-flex min-h-12 items-center rounded-lg px-6 py-3 text-base font-semibold transition-colors",
            via.id === "concientizacion"
              ? "bg-foreground text-background hover:bg-brand-green"
              : "border-border-strong bg-surface text-foreground hover:border-accent border-2",
          )}
        >
          {via.ctaLabel}
        </Link>
      ))}
    </div>
  );
}
