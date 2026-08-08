import Link from "next/link";
import type { Via } from "@/content/types";
import { cn } from "@/lib/utils";

type ViaCardProps = {
  via: Via;
};

export function ViaCard({ via }: ViaCardProps) {
  const headingId = `via-${via.slug}-heading`;

  return (
    <Link
      href={`/via/${via.slug}`}
      aria-labelledby={headingId}
      className={cn(
        "panel group relative flex flex-col gap-5 overflow-hidden",
        "transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out",
        "hover:border-brand-green/45 motion-safe:hover:-translate-y-1.5",
        "hover:shadow-[0_18px_40px_-24px_rgb(26_31_22_/_0.45)]",
        "dark:hover:shadow-[0_18px_40px_-24px_rgb(0_0_0_/_0.65)]",
        "focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] focus-visible:outline-none",
      )}
    >
      <span
        aria-hidden
        className="bg-brand-green/0 absolute inset-x-0 top-0 h-0.5 transition-[background-color] duration-300 group-hover:bg-[var(--brand-green)]"
      />

      <div className="space-y-3">
        <h2
          id={headingId}
          className="text-2xl font-semibold transition-colors duration-300 sm:text-[1.65rem]"
        >
          {via.nombre}
        </h2>
        <p className="text-muted text-base leading-relaxed">
          <span className="text-foreground font-medium">{via.audiencia}.</span>{" "}
          {via.descripcion}
        </p>
      </div>

      <span className="text-brand-green mt-auto inline-flex min-h-11 items-center gap-2 pt-1 text-base font-semibold">
        Explorar vía
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}
