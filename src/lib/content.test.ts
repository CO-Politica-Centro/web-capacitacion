import { describe, expect, it } from "vitest";
import {
  getCursoBySlug,
  getCursos,
  getLeccion,
  getLeccionNav,
  getLeccionesForCurso,
  getRamasByVia,
  getRecursos,
  getRutaSteps,
  getViaBySlug,
  getVias,
  isViaSlug,
} from "@/lib/content";

describe("content helpers", () => {
  it("expone las dos vías estables", () => {
    const vias = getVias();
    expect(vias).toHaveLength(2);
    expect(getViaBySlug("concientizacion")?.nombre).toMatch(/Concientización/);
    expect(getViaBySlug("practica")?.ctaLabel).toBe("Quiero meterse");
    expect(isViaSlug("practica")).toBe(true);
    expect(isViaSlug("otra")).toBe(false);
  });

  it("ordena ramas por vía", () => {
    const ramas = getRamasByVia("concientizacion");
    expect(ramas).toHaveLength(4);
    expect(ramas.map((r) => r.slug)).toEqual([
      "instituciones",
      "ideologias",
      "ciudadania",
      "medios",
    ]);
  });

  it("filtra cursos por vía y rama", () => {
    const practica = getCursos({ via: "practica" });
    expect(practica).toHaveLength(4);
    expect(practica.every((c) => c.ramaId)).toBe(true);

    const instituciones = getCursos({ rama: "instituciones" });
    expect(instituciones.map((c) => c.slug)).toEqual(["estado-colombiano"]);
  });

  it("distingue publicado vs outline", () => {
    expect(getCursoBySlug("estado-colombiano")?.status).toBe("publicado");
    expect(getCursoBySlug("decidir-en-publico")?.status).toBe("outline");
  });

  it("carga lecciones semilla con secciones", () => {
    const lecciones = getLeccionesForCurso("estado-colombiano");
    expect(lecciones.length).toBeGreaterThanOrEqual(3);
    expect(lecciones.every((l) => l.sections.length > 0)).toBe(true);

    const leccion = getLeccion("estado-colombiano", "tres-ramas");
    expect(leccion?.titulo).toMatch(/ramas/);

    expect(getLeccion("decidir-en-publico", "etica-liderazgo")).toBeUndefined();
  });

  it("navega prev/next dentro del curso", () => {
    const mid = getLeccionNav("de-interesado-a-activo", "roles");
    expect(mid.prev?.slug).toBe("mitos");
    expect(mid.next?.slug).toBe("primera-semana");

    const first = getLeccionNav("de-interesado-a-activo", "mitos");
    expect(first.prev).toBeNull();
    expect(first.next?.slug).toBe("roles");
  });

  it("arma pasos de ruta por vía", () => {
    const steps = getRutaSteps("practica");
    expect(steps).toHaveLength(4);
    expect(steps[0]?.cursoSlug).toBe("de-interesado-a-activo");
    expect(steps[3]?.cursoSlug).toBe("decidir-en-publico");
  });

  it("filtra recursos sin romper query vacía", () => {
    expect(getRecursos().length).toBeGreaterThanOrEqual(8);
    expect(
      getRecursos({ tipo: "glosario" }).some((r) => r.id === "glosario-base"),
    ).toBe(true);
    expect(getRecursos({ via: "practica" }).length).toBeGreaterThan(0);
  });
});
