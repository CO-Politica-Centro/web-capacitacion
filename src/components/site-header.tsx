"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AuthNav } from "@/components/auth-nav";
import { BrandMark } from "@/components/brand-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/cursos", label: "Cursos", match: "/cursos" },
  { href: "/recursos", label: "Recursos", match: "/recursos" },
  { href: "/ruta/concientizacion", label: "Ruta", match: "/ruta" },
] as const;

const brandName = "Capacitación · Centro";

function isActive(pathname: string, match: string) {
  return pathname === match || pathname.startsWith(`${match}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function onPointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-chrome border-border sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-6 py-3.5">
        <Link
          href="/"
          aria-label={brandName}
          className="min-h-11 shrink-0"
          onClick={closeMenu}
        >
          <BrandMark
            name={brandName}
            size={36}
            priority
            nameClassName="hidden text-base font-semibold sm:inline md:text-lg"
          />
        </Link>

        <nav
          aria-label="Principal"
          className="text-muted hidden items-center gap-x-5 text-[0.9375rem] md:flex"
        >
          {links.map((link) => {
            const active = isActive(pathname, link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center transition-colors",
                  "underline-offset-4 hover:underline",
                  active
                    ? "text-foreground font-semibold"
                    : "hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="border-border hidden items-center gap-2 border-l pl-3 sm:gap-2.5 sm:pl-4 md:flex">
            <AuthNav />
            <ThemeToggle />
          </div>

          <ThemeToggle className="md:hidden" />

          <button
            ref={menuButtonRef}
            type="button"
            className="border-border-strong text-foreground hover:bg-foreground/5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-2 md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "bg-foreground block h-0.5 w-5 transition",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "bg-foreground block h-0.5 w-5 transition",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "bg-foreground block h-0.5 w-5 transition",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        id={menuId}
        hidden={!open}
        className="border-border bg-surface/95 border-t px-6 py-4 md:hidden"
      >
        <nav aria-label="Principal móvil" className="flex flex-col gap-1">
          {links.map((link) => {
            const active = isActive(pathname, link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-md px-2 text-base transition-colors",
                  active
                    ? "text-foreground font-semibold"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-border mt-3 flex flex-col gap-2 border-t pt-3">
          <AuthNav className="w-full justify-start" />
        </div>
      </div>
    </header>
  );
}
