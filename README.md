# web-capacitacion

Plataforma de **capacitación política** de CO Politica Centro: dos vías (concientización y formación práctica), rutas guiadas, cursos y recursos.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- `react-markdown` para lecciones y recursos
- Vitest, ESLint, Prettier, react-doctor
- Vercel Analytics
- GitHub Actions CI

## Desarrollo

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Scripts

| Script              | Descripción                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Servidor local                           |
| `pnpm run ci`       | Lint + typecheck + format + test + build |
| `pnpm react:doctor` | Análisis React Doctor                    |

## Rutas

- `/` — elección de vía
- `/ruta?via=concientizacion|practica` — itinerario guiado
- `/cursos` — catálogo (`?via=` / `?rama=`)
- `/cursos/[slug]` — detalle (publicado u outline)
- `/cursos/[slug]/[leccion]` — lección
- `/recursos` — biblioteca (`?tipo=` / `?via=` / `?rama=`)

## Contenido

Los datos viven en `src/content/` (vías, ramas, cursos, recursos, lecciones). Los helpers están en `src/lib/content.ts`.

### Cómo añadir una lección a un curso publicado

1. Añade o ajusta la entrada en `src/content/cursos.ts` (`leccionesMeta` + `status: "publicado"`).
2. Crea o edita `src/content/lecciones/<curso-slug>.ts` exportando el array de lecciones.
3. Registra el array en `leccionesByCurso` dentro de `src/lib/content.ts` si es un curso nuevo.
4. Corre `pnpm test` y `pnpm build`.

## Despliegue (Vercel)

- Producción actual: https://web-capacitacion-co-politica.vercel.app
- Proyecto: `web-capacitacion-co-politica` (team Fravelz)

Para deploys automáticos desde GitHub, instala la [GitHub App de Vercel](https://github.com/apps/vercel) en la org `CO-Politica-Centro` y vincula este repo en Project → Settings → Git.

Dominio custom: Project → Settings → Domains.
