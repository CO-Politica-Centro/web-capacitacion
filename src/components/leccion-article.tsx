import ReactMarkdown from "react-markdown";
import { LeccionNav } from "@/components/leccion-nav";
import { LessonProgressToggle } from "@/components/lesson-progress-toggle";
import { MarkdownLink } from "@/components/markdown-link";
import type { Leccion, LeccionMeta } from "@/content/types";

const markdownComponents = { a: MarkdownLink };

type LeccionArticleProps = {
  leccion: Leccion;
  prev: LeccionMeta | null;
  next: LeccionMeta | null;
};

export function LeccionArticle({ leccion, prev, next }: LeccionArticleProps) {
  return (
    <article>
      <p className="text-muted text-base">{leccion.minutos} min de lectura</p>
      <h1 className="mt-2 text-4xl leading-tight font-semibold">
        {leccion.titulo}
      </h1>
      {leccion.objetivos.length > 0 ? (
        <ul className="text-muted mt-6 list-disc space-y-1 pl-5 text-base">
          {leccion.objetivos.map((objetivo) => (
            <li key={objetivo}>{objetivo}</li>
          ))}
        </ul>
      ) : null}

      <div className="leccion-prose mt-10 space-y-8">
        {leccion.sections.map((section) => (
          <section
            key={
              section.heading
                ? `${leccion.slug}:${section.heading}`
                : `${leccion.slug}:${section.body.slice(0, 48)}`
            }
          >
            {section.heading ? (
              <h2 className="mb-3 text-2xl font-semibold">{section.heading}</h2>
            ) : null}
            <div className="text-foreground/90 [&_a]:text-brand-green space-y-3 text-base leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
              <ReactMarkdown components={markdownComponents}>
                {section.body}
              </ReactMarkdown>
            </div>
          </section>
        ))}
      </div>

      {leccion.ejercicio ? (
        <aside className="border-foreground/15 bg-surface border-l-brand-green mt-10 border-l-2 px-5 py-4">
          <p className="text-sm font-semibold tracking-wide uppercase">
            Ejercicio
          </p>
          <div className="text-muted [&_a]:text-brand-green mt-2 text-base leading-relaxed [&_a]:underline [&_a]:underline-offset-4">
            <ReactMarkdown components={markdownComponents}>
              {leccion.ejercicio}
            </ReactMarkdown>
          </div>
        </aside>
      ) : null}

      <LessonProgressToggle
        cursoSlug={leccion.cursoSlug}
        leccionSlug={leccion.slug}
        className="mt-10"
      />

      <LeccionNav
        cursoSlug={leccion.cursoSlug}
        prev={prev}
        next={next}
        siguientePaso={next ? undefined : leccion.siguientePaso}
      />
    </article>
  );
}
