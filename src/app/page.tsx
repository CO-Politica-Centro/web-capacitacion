import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ViaChooser } from "@/components/via-chooser";
import { getRamasByVia, getVias } from "@/lib/content";

export default function HomePage() {
  const vias = getVias();

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(70vh,36rem)] bg-[radial-gradient(ellipse_at_20%_0%,rgb(232_197_71_/_0.28),transparent_55%),radial-gradient(ellipse_at_90%_10%,rgb(47_107_58_/_0.16),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_20%_0%,rgb(224_176_32_/_0.12),transparent_55%),radial-gradient(ellipse_at_90%_10%,rgb(109_184_122_/_0.1),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl space-y-6">
          <BrandMark
            name="Capacitación · Centro"
            size={44}
            nameClassName="text-brand-green text-sm font-semibold tracking-[0.18em] uppercase sm:text-sm"
            className="gap-3"
            priority
          />
          <h1 className="text-foreground font-display text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Elige tu vía. Aprende con claridad.
          </h1>
          <p className="text-muted max-w-lg text-base leading-relaxed sm:text-lg">
            Escuela abierta de CO Politica Centro: entiende la política
            colombiana o aprende cómo meterse — con rutas guiadas y pasos
            concretos.
          </p>
          <ViaChooser vias={vias} className="pt-2" />
        </div>

        <div className="border-foreground/10 mt-20 grid gap-10 border-t pt-12 sm:mt-24 sm:gap-12 sm:pt-14 lg:grid-cols-2">
          {vias.map((via) => {
            const ramas = getRamasByVia(via.slug);
            return (
              <section key={via.id} className="space-y-4">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  {via.nombre}
                </h2>
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
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                  <Link
                    href={`/ruta?via=${via.slug}`}
                    className="text-brand-green inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    Ver ruta de {via.nombre.toLowerCase()}
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        <p className="text-muted mt-14 max-w-xl text-sm sm:mt-16">
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
