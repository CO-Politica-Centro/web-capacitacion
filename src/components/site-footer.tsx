import { BrandMark } from "@/components/brand-mark";
import { LinkUnderline } from "@/components/link-underline";
import Link from "next/link";

const aprenderLinks = [
  { href: "/via/concientizacion", label: "Concientización" },
  { href: "/via/practica", label: "Formación práctica" },
  { href: "/recursos", label: "Recursos" },
] as const;

const rutasLinks = [
  { href: "/ruta/concientizacion", label: "Concientización" },
  { href: "/ruta/practica", label: "Formación práctica" },
  { href: "/ruta", label: "Todas las rutas" },
] as const;

const movimientoLinks = [
  {
    href: "https://web-portal-co-politica.vercel.app",
    label: "Portal",
    external: true,
  },
  {
    href: "https://beacons.ai/centropd",
    label: "Comunidades",
    external: true,
  },
  {
    href: "/cuenta/entrar",
    label: "Cuenta",
    external: false,
  },
] as const;

const year = new Date().getFullYear();

function FooterNavLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "group text-muted hover:text-foreground inline-flex min-h-11 items-center";

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkUnderline from="start">{label}</LinkUnderline>
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <LinkUnderline from="start">{label}</LinkUnderline>
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground font-display text-sm font-semibold tracking-wide uppercase">
        {title}
      </h2>
      <nav aria-label={title} className="flex flex-col">
        {children}
      </nav>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-border bg-surface/80 border-t">
      <div className="mx-auto max-w-5xl px-6 pt-14 pb-8">
        <div className="border-border flex flex-col gap-8 border-b pb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <div className="flex max-w-md flex-col gap-3">
            <BrandMark
              name="Capacitación · Centro"
              size={36}
              className="text-foreground"
            />
            <p className="text-muted leading-relaxed">
              Escuela abierta de CO Politica Centro: rutas claras para entender
              y participar en la política colombiana.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end sm:text-right">
            <p className="text-muted text-sm">
              Publicidad y alianzas institucionales
            </p>
            <a
              href="mailto:rafaelsolanov@web.de"
              className="bg-foreground text-background hover:bg-brand-green inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md px-5 py-2.5 text-base font-semibold transition"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-3">
          <FooterColumn title="Aprender">
            {aprenderLinks.map((link) => (
              <FooterNavLink key={link.href} {...link} />
            ))}
          </FooterColumn>

          <FooterColumn title="Rutas">
            {rutasLinks.map((link) => (
              <FooterNavLink key={link.href} {...link} />
            ))}
          </FooterColumn>

          <FooterColumn title="Movimiento">
            {movimientoLinks.map((link) => (
              <FooterNavLink
                key={link.href}
                href={link.href}
                label={link.label}
                external={link.external}
              />
            ))}
          </FooterColumn>
        </div>

        <div className="text-muted border-border flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Capacitación · Centro — CO Politica Centro</p>
          <a
            href="https://beacons.ai/centropd"
            className="group hover:text-foreground inline-flex min-h-11 items-center sm:min-h-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkUnderline from="start">Hub de comunidades</LinkUnderline>
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
