# web-capacitacion

Plataforma de **capacitación política** de CO Politica Centro: dos vías (concientización y formación práctica), rutas guiadas, cursos, recursos y progreso opcional con cuenta.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Firebase Auth + Firestore (progreso de lecciones)
- `react-markdown` para lecciones y recursos
- Vitest, ESLint, Prettier, react-doctor
- Vercel Analytics
- GitHub Actions CI

## Desarrollo

```bash
pnpm install
cp .env.example .env.local
# Completa NEXT_PUBLIC_FIREBASE_* en .env.local
pnpm dev
```

Sin variables Firebase la web funciona igual (contenido público); solo se desactiva iniciar sesión y guardar progreso.

## Scripts

| Script              | Descripción                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Servidor local                           |
| `pnpm run ci`       | Lint + typecheck + format + test + build |
| `pnpm react:doctor` | Análisis React Doctor                    |

## Rutas

- `/` — elección de vía
- `/via/[via]` — hub de vía (`concientizacion` \| `practica`)
- `/ruta/[via]` — itinerario paso a paso (también `/ruta?via=` redirige)
- `/cursos` — catálogo (`?via=` / `?rama=`)
- `/cursos/[slug]` — detalle del curso
- `/cursos/[slug]/[leccion]` — lección (marcar progreso si hay sesión)
- `/recursos` — biblioteca (`?tipo=` / `?via=` / `?rama=`)
- `/cuenta/entrar` · `/cuenta/registro` · `/cuenta/progreso`

## Auth y progreso

- Contenido **siempre legible sin sesión**.
- Con cuenta (email + contraseña): marcar lecciones completadas; ver barras en ruta y resumen en `/cuenta/progreso`.
- Firestore: colección `capacitacionUsers/{uid}/lessonProgress/{curso__leccion}`.
- Variables: ver `.env.example`. En Vercel, configura las mismas `NEXT_PUBLIC_FIREBASE_*`.
- Dominios autorizados en Firebase Auth Console: `localhost` y el dominio de producción.

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
