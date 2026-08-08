import Link from "next/link";
import type { SiguientePaso } from "@/content/types";

export function ProximoPaso({ paso }: { paso: SiguientePaso }) {
  return (
    <div className="border-foreground/10 bg-surface mt-10 border-t pt-8">
      <p className="text-muted text-base">Siguiente paso</p>
      <Link
        href={paso.href}
        className="text-brand-green mt-2 inline-flex text-lg font-semibold underline-offset-4 hover:underline"
      >
        {paso.label}
      </Link>
    </div>
  );
}
