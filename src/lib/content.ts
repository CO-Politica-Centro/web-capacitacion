import { cursos } from "@/content/cursos";
import { leccionesDeInteresadoAActivo } from "@/content/lecciones/de-interesado-a-activo";
import { leccionesEstadoColombiano } from "@/content/lecciones/estado-colombiano";
import { ramas } from "@/content/ramas";
import { recursos } from "@/content/recursos";
import type {
  Curso,
  CursoFilters,
  Leccion,
  LeccionNav,
  Recurso,
  RecursoFilters,
  RutaStep,
  Via,
  ViaSlug,
} from "@/content/types";
import { vias } from "@/content/vias";

const leccionesByCurso: Record<string, Leccion[]> = {
  "estado-colombiano": leccionesEstadoColombiano,
  "de-interesado-a-activo": leccionesDeInteresadoAActivo,
};

const rutaOrder: Record<ViaSlug, string[]> = {
  concientizacion: [
    "estado-colombiano",
    "centro-liberalismo-social",
    "participar-sin-candidato",
    "leer-politica-sin-ruido",
  ],
  practica: [
    "de-interesado-a-activo",
    "armar-sostener-nodo",
    "mensaje-claro-etico",
    "decidir-en-publico",
  ],
};

export function getVias(): Via[] {
  return vias;
}

export function getViaBySlug(slug: string): Via | undefined {
  return vias.find((via) => via.slug === slug);
}

export function getRamasByVia(viaId: ViaSlug) {
  return ramas
    .filter((rama) => rama.viaId === viaId)
    .sort((a, b) => a.orden - b.orden);
}

export function getRamaById(id: string) {
  return ramas.find((rama) => rama.id === id);
}

export function getRamaBySlug(slug: string) {
  return ramas.find((rama) => rama.slug === slug);
}

export function getCursos(filters: CursoFilters = {}): Curso[] {
  return cursos.filter((curso) => {
    const rama = getRamaById(curso.ramaId);
    if (!rama) return false;
    if (filters.via && rama.viaId !== filters.via) return false;
    if (filters.rama && rama.slug !== filters.rama && rama.id !== filters.rama) {
      return false;
    }
    return true;
  });
}

export function getCursoBySlug(slug: string): Curso | undefined {
  return cursos.find((curso) => curso.slug === slug);
}

export function getLeccion(
  cursoSlug: string,
  leccionSlug: string,
): Leccion | undefined {
  const curso = getCursoBySlug(cursoSlug);
  if (!curso || curso.status !== "publicado") return undefined;
  return leccionesByCurso[cursoSlug]?.find((l) => l.slug === leccionSlug);
}

export function getLeccionesForCurso(cursoSlug: string): Leccion[] {
  const curso = getCursoBySlug(cursoSlug);
  if (!curso || curso.status !== "publicado") return [];
  return [...(leccionesByCurso[cursoSlug] ?? [])].sort((a, b) => {
    const ordenA =
      curso.leccionesMeta.find((m) => m.slug === a.slug)?.orden ?? 0;
    const ordenB =
      curso.leccionesMeta.find((m) => m.slug === b.slug)?.orden ?? 0;
    return ordenA - ordenB;
  });
}

export function getLeccionNav(
  cursoSlug: string,
  leccionSlug: string,
): LeccionNav {
  const curso = getCursoBySlug(cursoSlug);
  if (!curso) return { prev: null, next: null };

  const meta = [...curso.leccionesMeta].sort((a, b) => a.orden - b.orden);
  const index = meta.findIndex((m) => m.slug === leccionSlug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? meta[index - 1]! : null,
    next: index < meta.length - 1 ? meta[index + 1]! : null,
  };
}

export function getRecursos(filters: RecursoFilters = {}): Recurso[] {
  return recursos.filter((recurso) => {
    if (filters.tipo && recurso.tipo !== filters.tipo) return false;
    // Match via, or keep general items (no viaId) when filtering by via.
    if (filters.via && recurso.viaId && recurso.viaId !== filters.via) {
      return false;
    }
    if (filters.rama) {
      if (!recurso.ramaId) return false;
      const rama = getRamaById(recurso.ramaId);
      if (!rama) return false;
      if (rama.slug !== filters.rama && rama.id !== filters.rama) return false;
    }
    return true;
  });
}

export function getRutaSteps(viaSlug: ViaSlug): RutaStep[] {
  const order = rutaOrder[viaSlug] ?? [];
  return order.flatMap((cursoSlug, index) => {
    const curso = getCursoBySlug(cursoSlug);
    if (!curso) return [];
    return [
      {
        orden: index + 1,
        ramaId: curso.ramaId,
        cursoSlug: curso.slug,
      },
    ];
  });
}

export function isViaSlug(value: string | undefined | null): value is ViaSlug {
  return value === "concientizacion" || value === "practica";
}
