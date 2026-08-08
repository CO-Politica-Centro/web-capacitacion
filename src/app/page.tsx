import type { Metadata } from "next";
import { ViaCard } from "@/app/_components/via-card";
import { BrandMark } from "@/components/brand-mark";
import { ViaChooser } from "@/components/via-chooser";
import { getVias } from "@/lib/content";
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
          {vias.map((via) => (
            <ViaCard key={via.id} via={via} />
          ))}
        </div>
      </div>
    </div>
  );
}
