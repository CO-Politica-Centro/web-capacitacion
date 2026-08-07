import Link from "next/link";
import { ViaChooser } from "@/components/via-chooser";
import { getRamasByVia, getVias } from "@/lib/content";

export default function HomePage() {
  const vias = getVias();

  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <div className="max-w-2xl space-y-6">
          <p className="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase">
            Capacitación · Centro
          </p>
          <h1 className="text-foreground text-5xl leading-[1.05] font-semibold sm:text-6xl">
            Elige tu vía. Aprende con claridad.
          </h1>
          <p className="text-muted max-w-lg text-lg leading-relaxed">
            Escuela abierta de CO Politica Centro: entiende la política
            colombiana o aprende cómo meterse — con rutas guiadas y pasos
            concretos.
          </p>
          <ViaChooser vias={vias} className="pt-2" />
        </div>

        <div className="mt-24 grid gap-12 border-t border-foreground/10 pt-14 lg:grid-cols-2">
          {vias.map((via) => {
            const ramas = getRamasByVia(via.slug);
            return (
              <section key={via.id} className="space-y-4">
                <h2 className="text-2xl font-semibold">{via.nombre}</h2>
                <p className="text-muted text-sm leading-relaxed">
                  {via.audiencia}. {via.descripcion}
                </p>
                <ul className="text-muted space-y-2 text-sm">
                  {ramas.map((rama) => (
                    <li key={rama.id}>
                      <span className="text-foreground font-medium">
                        {rama.nombre}.
                      </span>{" "}
                      {rama.resumen}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/ruta?via=${via.slug}`}
                  className="text-brand-green inline-flex text-sm font-semibold underline-offset-4 hover:underline"
                >
                  Ver ruta de {via.nombre.toLowerCase()}
                </Link>
              </section>
            );
          })}
        </div>

        <p className="text-muted mt-16 max-w-xl text-sm">
          ¿Solo quieres materiales sueltos?{" "}
          <Link
            href="/recursos"
            className="text-foreground font-medium underline-offset-4 hover:underline"
          >
            Ir a recursos
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
