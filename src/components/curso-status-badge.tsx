import type { CursoStatus } from "@/content/types";
import { cn } from "@/lib/utils";

const labels: Record<CursoStatus, string> = {
  publicado: "Disponible",
  outline: "Próximamente",
};

export function CursoStatusBadge({
  status,
  className,
}: {
  status: CursoStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex text-xs font-semibold tracking-wide uppercase",
        status === "publicado" ? "text-brand-green" : "text-muted",
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}
