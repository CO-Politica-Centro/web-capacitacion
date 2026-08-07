"use client";

import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/cursos", label: "Cursos" },
  { href: "/recursos", label: "Recursos" },
  { href: "/ruta", label: "Ruta" },
] as const;

const brandName = "Capacitación · Centro";

export function SiteHeader() {
  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 p-3 sm:p-4">
        <div
          className={cn(
            "site-chrome pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-2 sm:gap-3",
            "rounded-full border border-foreground/10 px-3 py-2 shadow-[0_8px_30px_rgb(0_0_0_/0.08)] backdrop-blur-md sm:px-5 sm:py-2.5",
          )}
        >
          <Link href="/" aria-label={brandName} className="min-h-11 shrink-0">
            <BrandMark
              name={brandName}
              size={32}
              priority
              nameClassName="hidden text-base sm:inline md:text-lg"
            />
          </Link>

          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <nav
              aria-label="Principal"
              className="text-muted hidden items-center gap-4 text-sm sm:flex"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "hover:text-foreground inline-flex min-h-11 items-center transition-colors",
                    "underline-offset-4 hover:underline",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav
              aria-label="Principal móvil"
              className="text-muted flex max-w-[min(100%,14rem)] flex-wrap items-center justify-end gap-x-2 gap-y-0 text-xs sm:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground inline-flex min-h-11 items-center px-0.5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="h-[4.75rem] sm:h-[5.25rem]" aria-hidden="true" />
    </>
  );
}
