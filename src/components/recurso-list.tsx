import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Recurso, RecursoTipo } from "@/content/types";

const tipoLabel: Record<RecursoTipo, string> = {
  guia: "Guía",
  lectura: "Lectura",
  glosario: "Glosario",
  enlace: "Enlace",
};

function isExternal(href?: string) {
  return Boolean(href && /^https?:\/\//.test(href));
}

type RecursoListProps = {
  recursos: Recurso[];
};

export function RecursoList({ recursos }: RecursoListProps) {
  if (recursos.length === 0) {
    return (
      <p className="text-muted text-sm">No hay recursos con ese filtro.</p>
    );
  }

  return (
    <ul className="divide-foreground/10 divide-y">
      {recursos.map((recurso) => {
        const external = isExternal(recurso.href);
        return (
          <li
            key={recurso.id}
            id={recurso.tipo === "glosario" ? "glosario" : undefined}
            className="py-6"
          >
            <p className="text-brand-green text-xs font-semibold tracking-wide uppercase">
              {tipoLabel[recurso.tipo]}
            </p>
            <h2 className="mt-1 text-xl font-semibold">
              {recurso.href ? (
                <Link
                  href={recurso.href}
                  className="hover:text-brand-green underline-offset-4 hover:underline"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {recurso.titulo}
                  {external ? " ↗" : ""}
                </Link>
              ) : (
                recurso.titulo
              )}
            </h2>
            <p className="text-muted mt-2 max-w-2xl text-sm leading-relaxed">
              {recurso.resumen}
            </p>
            {recurso.cuerpo ? (
              <div className="text-foreground/90 mt-4 max-w-[65ch] space-y-2 text-sm leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5">
                <ReactMarkdown>{recurso.cuerpo}</ReactMarkdown>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
