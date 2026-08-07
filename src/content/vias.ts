/**
 * IDs/slugs estables de vías:
 * - concientizacion → público general (entender)
 * - practica → quien quiere meterse y no sabe cómo
 */
import type { Via } from "./types";

export const vias: Via[] = [
  {
    id: "concientizacion",
    slug: "concientizacion",
    nombre: "Concientización política",
    tagline: "Entender para participar con claridad",
    descripcion:
      "Instituciones, ideas, ciudadanía y lectura crítica del debate público. Para quien quiere comprender la política colombiana sin ruido inútil.",
    audiencia: "Público general, primera aproximación o refresco serio",
    ctaLabel: "Quiero entender",
  },
  {
    id: "practica",
    slug: "practica",
    nombre: "Formación práctica",
    tagline: "Del interés a la acción",
    descripcion:
      "Roles, primera semana, organización, comunicación y decisión en público. Para quien quiere meterse y necesita un mapa concreto.",
    audiencia: "Voluntariado, militancia y liderazgo ciudadano",
    ctaLabel: "Quiero meterse",
  },
];
