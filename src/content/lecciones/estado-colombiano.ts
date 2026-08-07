import type { Leccion } from "../types";

export const leccionesEstadoColombiano: Leccion[] = [
  {
    cursoSlug: "estado-colombiano",
    slug: "por-que-importa",
    titulo: "Por qué importa el Estado en tu vida",
    minutos: 10,
    objetivos: [
      "Relacionar instituciones con servicios y reglas cotidianas",
      "Usar un marco mental simple: reglas, servicios y poder",
    ],
    sections: [
      {
        heading: "No es un tema abstracto",
        body: `El Estado aparece cuando pagas un impuesto, cruzas un semáforo, inscribes a alguien en un colegio público o exiges que se respete un derecho. No es un edificio lejano: es el conjunto de reglas, instituciones y personas que organizan la convivencia.

Cuando entendemos cómo funciona, dejamos de tratar la política como espectáculo y empezamos a verla como **infraestructura de la vida en común**.`,
      },
      {
        heading: "Tres ideas para empezar",
        body: `1. **Reglas:** normas que limitan y habilitan (Constitución, leyes, decretos).
2. **Servicios:** salud, educación, vías, seguridad, justicia.
3. **Poder:** quién decide, con qué mandato y bajo qué control.

Si puedes explicar un problema con estas tres lentes, ya estás pensando como ciudadana o ciudadano informado.`,
      },
      {
        heading: "Colombia: un Estado social de derecho",
        body: `La Constitución de 1991 define a Colombia como un Estado social de derecho. En la práctica eso significa que el poder público debe proteger derechos y organizar servicios, no solo “mandar”.

Esto no garantiza resultados automáticos. Garantiza un marco: hay derechos exigibles, separación de poderes y mecanismos de control. El resto depende de la calidad institucional y de la ciudadanía activa.`,
      },
    ],
    ejercicio: `Elige un problema concreto de tu barrio (basuras, seguridad, transporte, colegio). Anota en tres líneas: qué **regla** parece fallar, qué **servicio** está involucrado y qué **autoridad** debería responder.`,
    siguientePaso: {
      label: "Siguiente: tres ramas y contrapesos",
      href: "/cursos/estado-colombiano/tres-ramas",
    },
  },
  {
    cursoSlug: "estado-colombiano",
    slug: "tres-ramas",
    titulo: "Tres ramas y contrapesos",
    minutos: 12,
    objetivos: [
      "Distinguir ejecutivo, legislativo y judicial",
      "Explicar por qué existen contrapesos",
    ],
    sections: [
      {
        heading: "Por qué dividir el poder",
        body: `Concentrar todo el poder en una sola persona o institución es el camino más corto a abusos. Por eso las democracias separan funciones:

- **Ejecutivo:** gobierna y ejecuta políticas (Presidencia, ministerios, gobernaciones, alcaldías).
- **Legislativo:** hace leyes y ejerce control político (Congreso; asambleas y concejos en territorio).
- **Judicial:** resuelve conflictos y controla la legalidad (jueces, altas cortes).`,
      },
      {
        heading: "Contrapesos en la vida real",
        body: `Un contrapeso no es “obstruir por obstruir”. Es exigir que las decisiones pasen por reglas, debates y controles.

Ejemplos simples:

- El Congreso debate y aprueba leyes; el Ejecutivo las implementa.
- Los jueces pueden revisar si una norma o acto viola derechos.
- Organismos de control (como Contraloría o Procuraduría, en sus competencias) vigilan la gestión pública.

Cuando oigas “eso lo arregla el presidente solo”, pregunta: ¿qué rama debe intervenir y con qué límite?`,
      },
      {
        heading: "Cuidado con la caricatura",
        body: `Las ramas colaboran y se tensionan. Eso es normal en democracia. El problema no es el conflicto institucional; el problema es cuando se destruyen controles, se captura justicia o se legisla sin deliberación pública seria.

Tu trabajo ciudadano no es idolatrar una rama: es **exigir que cada una cumpla su función**.`,
      },
    ],
    ejercicio: `Toma una noticia política de esta semana. Clasifícala: ¿involucra sobre todo al ejecutivo, al legislativo o al judicial? Justifica en dos frases.`,
    siguientePaso: {
      label: "Siguiente: nación, departamento, municipio",
      href: "/cursos/estado-colombiano/territorio",
    },
  },
  {
    cursoSlug: "estado-colombiano",
    slug: "territorio",
    titulo: "Nación, departamento, municipio",
    minutos: 10,
    objetivos: [
      "Ubicar competencias territoriales básicas",
      "Saber a qué nivel dirigir una demanda ciudadana",
    ],
    sections: [
      {
        heading: "La política también es local",
        body: `Muchas decisiones que más sientes —vías locales, aseo, espacio público, parte de salud y educación— pasan por el municipio o el departamento. No todo es “Bogotá” o “el Gobierno nacional”.

Niveles básicos:

- **Nación:** políticas generales, defensa, relaciones exteriores, gran parte de la economía y normas nacionales.
- **Departamento:** coordinación regional, algunas competencias de desarrollo y acompañamiento a municipios.
- **Municipio / distrito:** lo más cercano a la vida diaria.`,
      },
      {
        heading: "Pregunta clave: ¿quién decide esto?",
        body: `Antes de protestar en abstracto, pregunta:

1. ¿Es una competencia nacional, departamental o municipal?
2. ¿Quién ejecuta el presupuesto?
3. ¿Quién tiene el mandato electoral más cercano al problema?

Dirigir la exigencia al nivel correcto aumenta la eficacia y reduce la frustración.`,
      },
      {
        heading: "Autonomía y coordinación",
        body: `Colombia es un Estado unitario con autonomía territorial. Eso significa: hay reglas nacionales comunes y márgenes locales de decisión. Cuando fallan servicios, a menudo hay mezcla de responsabilidades. Tu mapa institucional debe admitir esa complejidad sin paralizarte.`,
      },
    ],
    ejercicio: `Elige un servicio de tu ciudad (aseo, alumbrado, colegio oficial, hospital). Investiga o infiere: ¿quién lo administra principalmente? Anota el cargo (alcalde, gobernador, ministerio, etc.).`,
    siguientePaso: {
      label: "Siguiente: elecciones y rendición de cuentas",
      href: "/cursos/estado-colombiano/elecciones",
    },
  },
  {
    cursoSlug: "estado-colombiano",
    slug: "elecciones",
    titulo: "Cómo se elige y se rinde cuentas",
    minutos: 10,
    objetivos: [
      "Describir el ciclo electoral básico",
      "Conectar voto con veeduría entre elecciones",
    ],
    sections: [
      {
        heading: "El mandato no termina en la urna",
        body: `Elegir autoridades es el momento más visible de la democracia. Pero la democracia también se juega **entre** elecciones: seguimiento a promesas, transparencia, control social y debate público.

Ciclo simple:

1. Campaña e información.
2. Voto.
3. Ejercicio del cargo.
4. Control, evaluación y nueva elección.`,
      },
      {
        heading: "Qué vigilar después de votar",
        body: `- Plan de desarrollo y prioridades presupuestales.
- Cumplimiento de metas públicas.
- Conflictos de interés y contratación.
- Respuestas a peticiones ciudadanas.

La veeduría ciudadana no requiere ser experta: requiere constancia, fuentes y preguntas claras.`,
      },
      {
        heading: "Tu poder no es solo el voto",
        body: `Votar importa. También importan: organizarte, pedir información, apoyar veedurías, difundir datos verificados y participar en espacios locales. El Estado responde mejor cuando la ciudadanía es previsible, informada y persistente.`,
      },
    ],
    ejercicio: `Busca una promesa de campaña reciente en tu municipio o en el país. Anota: ¿cómo podrías verificar su avance en los próximos 90 días? (indicador, fuente, fecha).`,
    siguientePaso: {
      label: "Siguiente: tu mapa institucional",
      href: "/cursos/estado-colombiano/mapa-personal",
    },
  },
  {
    cursoSlug: "estado-colombiano",
    slug: "mapa-personal",
    titulo: "Tu mapa institucional",
    minutos: 8,
    objetivos: [
      "Construir un mapa personal de instituciones relevantes",
      "Definir un siguiente paso de aprendizaje o acción",
    ],
    sections: [
      {
        heading: "De teoría a brújula",
        body: `Este curso no busca que memorices organigramas. Busca que tengas un **mapa usable**:

- Qué problema te importa.
- Qué nivel territorial lo toca.
- Qué rama o institución responde.
- Qué puedes hacer esta semana (informarte, pedir, organizar, vigilar).`,
      },
      {
        heading: "Plantilla mínima",
        body: `Copia y completa:

1. Problema:
2. Nivel (nación / departamento / municipio):
3. Institución o cargo clave:
4. Fuente de información confiable:
5. Acción en 7 días:`,
      },
      {
        heading: "Qué sigue en la vía de concientización",
        body: `Con el mapa listo, profundiza en:

- **Ideologías y el centro** — para ubicar propuestas sin caricaturas.
- **Ciudadanía y participación** — para actuar sin candidatura.
- **Medios y desinformación** — para no navegar a ciegas.

Consulta siempre fuentes oficiales cuando necesites un dato normativo preciso.`,
      },
    ],
    ejercicio: `Completa la plantilla mínima con un solo problema real. Compártela con alguien de confianza y pídele que te señale un hueco (nivel, institución o fuente).`,
    siguientePaso: {
      label: "Siguiente curso: ¿Qué es el centro?",
      href: "/cursos/centro-liberalismo-social",
    },
  },
];
