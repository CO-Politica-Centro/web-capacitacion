export type ViaId = "concientizacion" | "practica";

export type ViaSlug = ViaId;

export type CursoStatus = "publicado" | "outline";

export type CursoNivel = "intro" | "intermedio";

export type RecursoTipo = "guia" | "lectura" | "glosario" | "enlace";

export type Via = {
  id: ViaId;
  slug: ViaSlug;
  nombre: string;
  tagline: string;
  descripcion: string;
  audiencia: string;
  ctaLabel: string;
};

export type Rama = {
  id: string;
  viaId: ViaId;
  slug: string;
  nombre: string;
  orden: number;
  resumen: string;
};

export type LeccionMeta = {
  slug: string;
  titulo: string;
  orden: number;
  minutos: number;
};

export type Curso = {
  slug: string;
  ramaId: string;
  titulo: string;
  resumen: string;
  objetivos: string[];
  nivel: CursoNivel;
  duracionMin: number;
  status: CursoStatus;
  leccionesMeta: LeccionMeta[];
};

export type LeccionSection = {
  heading?: string;
  body: string;
};

export type SiguientePaso = {
  label: string;
  href: string;
};

export type Leccion = {
  cursoSlug: string;
  slug: string;
  titulo: string;
  minutos: number;
  objetivos: string[];
  sections: LeccionSection[];
  ejercicio?: string;
  siguientePaso?: SiguientePaso;
};

export type Recurso = {
  id: string;
  titulo: string;
  tipo: RecursoTipo;
  ramaId?: string;
  viaId?: ViaId;
  resumen: string;
  href?: string;
  cuerpo?: string;
};

export type RutaStep = {
  orden: number;
  ramaId: string;
  cursoSlug: string;
};

export type LeccionNav = {
  prev: LeccionMeta | null;
  next: LeccionMeta | null;
};

export type CursoFilters = {
  via?: ViaSlug;
  rama?: string;
};

export type RecursoFilters = {
  tipo?: RecursoTipo;
  rama?: string;
  via?: ViaSlug;
};
