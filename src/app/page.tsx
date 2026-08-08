import Link from "next/link";
import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";
import { ViaChooser } from "@/components/via-chooser";
import { getRamasByVia, getVias } from "@/lib/content";
import { defaultSiteDescription, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Capacitación política — CO Politica Centro",
  description: defaultSiteDescription,
  path: "/",
});

export default function HomePage() {
  const vias = getVias();

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(72vh,40rem)] bg-[radial-gradient(ellipse_at_18%_0%,rgb(232_197_71_/_0.32),transparent_55%),radial-gradient(ellipse_at_92%_8%,rgb(47_107_58_/_0.18),transparent_48%)] dark:bg-[radial-gradient(ellipse_at_18%_0%,rgb(224_176_32_/_0.14),transparent_55%),radial-gradient(ellipse_at_92%_8%,rgb(109_184_122_/_0.12),transparent_48%)]"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:py-24">
        <div className="home-reveal max-w-3xl space-y-6 sm:space-y-8">
          <BrandMark
            name="Capacitación · Centro"
            size={56}
            nameClassName="font-display text-foreground text-2xl font-semibold tracking-tight sm:text-3xl"
            className="gap-3.5"
            priority
          />
          <h1 className="text-foreground font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Elige tu vía. Aprende con claridad.
          </h1>
          <p className="text-muted max-w-xl text-lg leading-relaxed sm:text-xl">
            Escuela abierta de CO Politica Centro: entiende la política
            colombiana o aprende cómo meterse — con rutas guiadas y pasos
            concretos.
          </p>
          <ViaChooser vias={vias} className="home-reveal-delay pt-2" />
        </div>

        <div className="home-reveal-delay-2 mt-16 grid gap-5 sm:mt-20 sm:gap-6 lg:grid-cols-2">
          {vias.map((via) => {
            const ramas = getRamasByVia(via.slug);
            const headingId = `via-${via.slug}-heading`;
            return (
              <section
                key={via.id}
                className="panel flex flex-col gap-5"
                aria-labelledby={headingId}
              >
                <div className="space-y-3">
                  <h2
                    id={headingId}
                    className="text-2xl font-semibold sm:text-[1.65rem]"
                  >
                    {via.nombre}
                  </h2>
                  <p className="text-muted text-base leading-relaxed">
                    <span className="text-foreground font-medium">
                      {via.audiencia}.
                    </span>{" "}
                    {via.descripcion}
                  </p>
                </div>

                <ul className="border-border divide-border divide-y border-y">
                  {ramas.map((rama) => (
                    <li key={rama.id} className="py-3.5 first:pt-3 last:pb-3">
                      <p className="text-foreground text-base leading-snug font-semibold">
                        {rama.nombre}
                      </p>
                      <p className="text-muted mt-1 text-sm leading-relaxed">
                        {rama.resumen}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1">
                  <Link
                    href={`/via/${via.slug}`}
                    className="text-brand-green inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    Explorar vía
                  </Link>
                  <Link
                    href={`/ruta/${via.slug}`}
                    className="text-foreground inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    Ver ruta paso a paso
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        <div className="border-border bg-surface mt-12 rounded-2xl border px-5 py-5 sm:mt-14 sm:px-6">
          <p className="text-muted text-base leading-relaxed">
            ¿Solo quieres materiales sueltos?{" "}
            <Link
              href="/recursos"
              className="text-foreground font-semibold underline-offset-4 hover:underline"
            >
              Ir a recursos
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
