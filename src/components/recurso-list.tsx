import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { MarkdownLink } from "@/components/markdown-link";
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

const markdownComponents = { a: MarkdownLink };

type RecursoListProps = {
  recursos: Recurso[];
};

export function RecursoList({ recursos }: RecursoListProps) {
  if (recursos.length === 0) {
    return (
      <p className="text-muted text-base">No hay recursos con ese filtro.</p>
    );
  }

  return (
    <ul className="divide-foreground/10 divide-y">
      {recursos.map((recurso) => {
        const external = isExternal(recurso.href);
        return (
          <li
            key={recurso.id}
            id={
              recurso.tipo === "glosario" ? `glosario-${recurso.id}` : undefined
            }
            className="py-6"
          >
            <p className="text-brand-green text-sm font-semibold tracking-wide uppercase">
              {tipoLabel[recurso.tipo]}
            </p>
            <h2 className="mt-1 text-xl font-semibold">
              {recurso.href ? (
                <Link
                  href={recurso.href}
                  className="hover:text-brand-green underline underline-offset-4"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {recurso.titulo}
                  {external ? (
                    <>
                      {" "}
                      <span aria-hidden>↗</span>
                      <span className="sr-only">
                        {" "}
                        (se abre en una pestaña nueva)
                      </span>
                    </>
                  ) : null}
                </Link>
              ) : (
                recurso.titulo
              )}
            </h2>
            <p className="text-muted mt-2 max-w-2xl text-base leading-relaxed">
              {recurso.resumen}
            </p>
            {recurso.cuerpo ? (
              <div className="text-foreground/90 [&_a]:text-brand-green mt-4 max-w-[65ch] space-y-2 text-base leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5">
                <ReactMarkdown components={markdownComponents}>
                  {recurso.cuerpo}
                </ReactMarkdown>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
