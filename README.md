<p align="center">
  <a href="README.md">Español</a> · <a href="README.en.md">English</a>
</p>

<h1 align="center">Capacitación</h1>

<p align="center">
  <img src="public/brand/og-social.jpg" alt="Imagen de marca de Capacitación, crema, oro y verde" width="100%">
</p>

<p align="center">Dos vías de formación política, con progreso si hay cuenta.</p>

Plataforma de CO Politica Centro en [web-capacitacion-co-politica.vercel.app](https://web-capacitacion-co-politica.vercel.app). Sin Firebase el contenido público sigue abierto.

<p align="center">
  <a href="https://github.com/CO-Politica-Centro/web-capacitacion/actions/workflows/ci.yml"><img src="https://github.com/CO-Politica-Centro/web-capacitacion/actions/workflows/ci.yml/badge.svg" alt="Estado de CI"></a>
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,firebase,pnpm&theme=dark&perline=6">
      <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,firebase,pnpm&theme=light&perline=6">
      <img alt="Next.js, React, TypeScript, Tailwind, Firebase, pnpm" src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,firebase,pnpm&perline=6">
    </picture>
  </a>
</p>

## Características

- Vías de concientización y formación práctica.
- Cursos, lecciones y biblioteca de recursos.
- Progreso opcional con Firebase. CI y `pnpm test`.

> [!NOTE]
> Sin `NEXT_PUBLIC_FIREBASE_*` la web abre igual. Solo se apagan la sesión y el progreso.

## Tecnologías

- **Next.js, React y Tailwind** — la plataforma.
- **Firebase** — sesión y progreso de lecciones.
- **pnpm 11.1.1** — Node 22 o superior.

## Inicio rápido

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

> [!IMPORTANT]
> `pnpm run ci` es el chequeo completo: lint, tipos, formato, pruebas y build.

## Uso

Las rutas públicas son `/`, `/via/[via]`, `/ruta/[via]`, `/cursos/[slug]` y `/recursos`. La cuenta vive en `/cuenta/entrar`.

> [!TIP]
> `pnpm test` basta para la suite. No hace falta Firebase.

## Contribuir

Repositorio de [CO Politica Centro](https://github.com/CO-Politica-Centro).

> [!WARNING]
> No subas `.env.local`.

## Licencia

Este repositorio no incluye un archivo de licencia.
