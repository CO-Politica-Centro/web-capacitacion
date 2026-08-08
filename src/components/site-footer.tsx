import { BrandMark } from "@/components/brand-mark";
import Link from "next/link";

const internalLinks = [
  { href: "/cursos", label: "Cursos" },
  { href: "/recursos", label: "Recursos" },
  { href: "/ruta/concientizacion", label: "Ruta" },
] as const;

const externalLinks = [
  {
    href: "https://web-portal-co-politica.vercel.app",
    label: "Portal",
  },
  {
    href: "https://beacons.ai/centropd",
    label: "Comunidades",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-border bg-surface/80 border-t px-6 py-12 text-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2.5">
          <BrandMark
            name="Capacitación · Centro"
            size={32}
            className="text-foreground"
          />
          <p className="text-muted max-w-sm leading-relaxed">
            Capacitación política — CO Politica Centro.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <nav
            aria-label="Navegación del pie"
            className="text-muted flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground inline-flex min-h-11 items-center underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav
            aria-label="Enlaces externos del pie"
            className="text-muted flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {externalLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-foreground inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            ))}
            <a
              className="hover:text-foreground inline-flex min-h-11 items-center underline-offset-4 hover:underline"
              href="mailto:rafaelsolanov@web.de"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
