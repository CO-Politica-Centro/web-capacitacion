import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">
        <div className="space-y-6">
          <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
            Formación ciudadana · Colombia
          </p>
          <h1 className="text-foreground max-w-xl text-5xl leading-[1.05] font-semibold sm:text-6xl">
            Capacitación política
          </h1>
          <p className="text-muted max-w-lg text-lg leading-relaxed">
            Plantilla de alta calidad para cursos, rutas de aprendizaje y
            recursos del movimiento de centro. Lista para contenido educativo
            profundo — sin material publicado aún.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/cursos"
              className="bg-foreground text-background hover:bg-brand-green rounded-md px-5 py-2.5 text-sm font-semibold transition"
            >
              Explorar cursos
            </Link>
            <Link
              href="/ruta"
              className="border-foreground/20 bg-surface text-foreground hover:border-accent rounded-md border px-5 py-2.5 text-sm font-semibold transition"
            >
              Ver ruta
            </Link>
          </div>
        </div>
        <aside className="border-foreground/10 bg-surface rounded-2xl border p-6 shadow-[0_20px_60px_-40px_rgba(26,31,22,0.45)]">
          <p className="text-muted text-sm">Enfoque</p>
          <p className="mt-2 text-2xl font-semibold">
            Aprender para participar
          </p>
          <p className="text-muted mt-3 text-sm leading-relaxed">
            Democracia, instituciones, comunicación política y liberalismo
            social — arquitectura lista para módulos serios.
          </p>
          <ul className="text-muted mt-6 space-y-2 text-sm">
            <li>· Cursos estructurados</li>
            <li>· Recursos descargables</li>
            <li>· Ruta de aprendizaje guiada</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
