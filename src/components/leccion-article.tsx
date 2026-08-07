import ReactMarkdown from "react-markdown";
import { LeccionNav } from "@/components/leccion-nav";
import { LessonProgressToggle } from "@/components/lesson-progress-toggle";
import { ProximoPaso } from "@/components/proximo-paso";
import type { Leccion, LeccionMeta } from "@/content/types";

type LeccionArticleProps = {
  leccion: Leccion;
  prev: LeccionMeta | null;
  next: LeccionMeta | null;
};

export function LeccionArticle({ leccion, prev, next }: LeccionArticleProps) {
  return (
    <article className="mx-auto max-w-[65ch]">
      <p className="text-muted text-sm">{leccion.minutos} min de lectura</p>
      <h1 className="mt-2 text-4xl leading-tight font-semibold">
        {leccion.titulo}
      </h1>
      {leccion.objetivos.length > 0 ? (
        <ul className="text-muted mt-6 list-disc space-y-1 pl-5 text-sm">
          {leccion.objetivos.map((objetivo) => (
            <li key={objetivo}>{objetivo}</li>
          ))}
        </ul>
      ) : null}

      <div className="leccion-prose mt-10 space-y-8">
        {leccion.sections.map((section, index) => (
          <section key={`${section.heading ?? "s"}-${index}`}>
            {section.heading ? (
              <h2 className="mb-3 text-2xl font-semibold">{section.heading}</h2>
            ) : null}
            <div className="text-foreground/90 [&_a]:text-brand-green space-y-3 text-base leading-relaxed [&_a]:underline-offset-4 hover:[&_a]:underline [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
              <ReactMarkdown>{section.body}</ReactMarkdown>
            </div>
          </section>
        ))}
      </div>

      {leccion.ejercicio ? (
        <aside className="border-foreground/15 bg-surface border-l-brand-green mt-10 border-l-2 px-5 py-4">
          <p className="text-sm font-semibold tracking-wide uppercase">
            Ejercicio
          </p>
          <div className="text-muted [&_a]:text-brand-green mt-2 text-sm leading-relaxed">
            <ReactMarkdown>{leccion.ejercicio}</ReactMarkdown>
          </div>
        </aside>
      ) : null}

      <LessonProgressToggle
        cursoSlug={leccion.cursoSlug}
        leccionSlug={leccion.slug}
        className="mt-10"
      />

      {leccion.siguientePaso ? (
        <ProximoPaso paso={leccion.siguientePaso} />
      ) : null}

      <LeccionNav cursoSlug={leccion.cursoSlug} prev={prev} next={next} />
    </article>
  );
}
