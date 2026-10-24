<p align="center">
  <a href="README.md">Español</a> · <a href="README.en.md">English</a>
</p>

<h1 align="center">Training</h1>

<p align="center">
  <img src="public/brand/og-social.jpg" alt="Training brand image, cream, gold, and green" width="100%">
</p>

<p align="center">Two tracks of political training, with progress when there is an account.</p>

CO Politica Centro platform at [web-capacitacion-co-politica.vercel.app](https://web-capacitacion-co-politica.vercel.app). Without Firebase the public content stays open.

<p align="center">
  <a href="https://github.com/CO-Politica-Centro/web-capacitacion/actions/workflows/ci.yml"><img src="https://github.com/CO-Politica-Centro/web-capacitacion/actions/workflows/ci.yml/badge.svg" alt="CI status"></a>
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

## Features

- Awareness and practical-training tracks.
- Courses, lessons, and a resource library.
- Optional progress with Firebase. CI and `pnpm test`.

> [!NOTE]
> Without `NEXT_PUBLIC_FIREBASE_*` the site still opens. Only sign-in and progress turn off.

## Tech stack

- **Next.js, React, and Tailwind** — the platform.
- **Firebase** — session and lesson progress.
- **pnpm 11.1.1** — Node 22 or newer.

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

> [!IMPORTANT]
> `pnpm run ci` is the full check: lint, types, format, tests, and build.

## Usage

The public routes are `/`, `/via/[via]`, `/ruta/[via]`, `/cursos/[slug]`, and `/recursos`. The account lives at `/cuenta/entrar`.

> [!TIP]
> `pnpm test` is enough for the suite. Firebase is not required.

## Contributing

Repository of [CO Politica Centro](https://github.com/CO-Politica-Centro).

> [!WARNING]
> Do not commit `.env.local`.

## License

This repository does not include a license file.
