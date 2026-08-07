import type { Leccion } from "../types";

export const leccionesParticiparSinCandidato: Leccion[] = [
  {
    cursoSlug: "participar-sin-candidato",
    slug: "voto-informado",
    titulo: "Voto informado sin agotarte",
    minutos: 10,
    objetivos: [
      "Diseñar un método corto para informar el voto",
      "Evitar la sobrecarga de información de campaña",
    ],
    sections: [
      {
        heading: "Informarte no es leerlo todo",
        body: `El voto informado no exige consumir 40 horas de debate. Exige un **método**:

1. Elige 2–3 temas que te importan.
2. Busca propuestas concretas (números, plazos, responsables).
3. Contrasta con trayectoria y hechos verificables.
4. Decide y documenta por qué.`,
      },
      {
        heading: "Señales útiles",
        body: `- Propuestas con costo y fuente.
- Equipo y plan, no solo eslogan.
- Respeto a reglas electorales e institucionales.
- Capacidad de admitir límites (“esto no puedo hacerlo solo”).`,
      },
      {
        heading: "Señales de ruido",
        body: `Insultos permanentes, teorías conspirativas sin evidencia, “soluciones” sin presupuesto y promesas que contradicen competencias legales. Si no cabe en un plan de desarrollo o en una ley, pregunta cómo se haría.`,
      },
    ],
    ejercicio: `Antes de la próxima elección (o en retrospectiva), anota tus 3 temas prioritarios y una pregunta concreta para cada candidato o lista.`,
    siguientePaso: {
      label: "Siguiente: derecho de petición",
      href: "/cursos/participar-sin-candidato/derecho-peticion",
    },
  },
  {
    cursoSlug: "participar-sin-candidato",
    slug: "derecho-peticion",
    titulo: "Derecho de petición útil",
    minutos: 10,
    objetivos: [
      "Redactar una petición clara y accionable",
      "Conocer el sentido básico del derecho de petición en Colombia",
    ],
    sections: [
      {
        heading: "Una herramienta cotidiana",
        body: `El derecho de petición permite solicitar información o actuación a autoridades. Bien usado, obliga a responder. Mal usado (vago, agresivo o sin datos), se pierde en el trámite.

Estructura mínima:

1. A quién va dirigida.
2. Qué pides (información o acción).
3. Hechos relevantes y fechas.
4. Fundamento breve (si lo conoces).
5. Datos de contacto.`,
      },
      {
        heading: "Claridad gana",
        body: `Prefiere: “Solicito copia del contrato X y el cronograma de ejecución a la fecha” antes que “Exijo que arreglen todo el barrio”. Lo segundo puede ser justo emocionalmente; lo primero es **procesable**.`,
      },
      {
        heading: "Después de enviar",
        body: `Guarda radicado o constancia. Si no responden en términos legales, conoce vías de insistencia o tutela cuando aplique — y busca asesoría confiable. Este curso no reemplaza consejo jurídico personalizado.`,
      },
    ],
    ejercicio: `Redacta un borrador de petición de 8–12 líneas sobre un problema local real (aunque no la envíes aún).`,
    siguientePaso: {
      label: "Siguiente: veeduría y control social",
      href: "/cursos/participar-sin-candidato/veeduria",
    },
  },
  {
    cursoSlug: "participar-sin-candidato",
    slug: "veeduria",
    titulo: "Veeduría y control social",
    minutos: 10,
    objetivos: [
      "Entender veeduría como seguimiento organizado",
      "Identificar fuentes públicas útiles para vigilar",
    ],
    sections: [
      {
        heading: "Vigilar no es perseguir",
        body: `La veeduría ciudadana es seguimiento informado a obras, contratos, programas y servicios. Busca **calidad pública**, no celebridad en redes.

Ingredientes: pregunta clara, documentos, ritmo de seguimiento y difusión responsable.`,
      },
      {
        heading: "Dónde mirar",
        body: `Según el caso: portales de contratación, planes de desarrollo, actas de concejo, reportes de gestión, datos abiertos municipales. Empieza por una obra o programa visible en tu entorno.`,
      },
      {
        heading: "Ética del control",
        body: `No inventes cifras. No difames. Separa denuncia documentada de rumor. Si hay indicios serios de irregularidad, canalízalos por vías institucionales y periodismo serio cuando corresponda.`,
      },
    ],
    ejercicio: `Elige una obra o programa local. Anota: fuente donde buscarías avance, indicador simple y fecha de revisión en 30 días.`,
    siguientePaso: {
      label: "Siguiente: asambleas y voluntariado",
      href: "/cursos/participar-sin-candidato/asambleas-voluntariado",
    },
  },
  {
    cursoSlug: "participar-sin-candidato",
    slug: "asambleas-voluntariado",
    titulo: "Asambleas y voluntariado cívico",
    minutos: 10,
    objetivos: [
      "Valorar espacios colectivos sin candidatura",
      "Elegir un rol de voluntariado realista",
    ],
    sections: [
      {
        heading: "Participar también es organizar",
        body: `Asambleas barriales, JAC, mesas de víctimas, colectivos ambientales, veedurías y nodos de movimiento son escuelas de ciudadanía. No hace falta un cargo electivo para influir.`,
      },
      {
        heading: "Roles útiles",
        body: `Facilitar reuniones, tomar notas, mapear vecinos, comunicar con ética, apoyar logística, revisar documentos. Elige un rol que puedas sostener 4–8 semanas.`,
      },
      {
        heading: "Puente a medios",
        body: `La participación se debilita si el debate público es solo ruido. El siguiente curso de la vía enseña a **leer política sin caer en desinformación**.`,
      },
    ],
    ejercicio: `Identifica un espacio cívico cercano (físico o digital oficial). Anota un rol concreto que podrías ofrecer en las próximas dos semanas.`,
    siguientePaso: {
      label: "Siguiente curso: Leer política sin ruido",
      href: "/cursos/leer-politica-sin-ruido",
    },
  },
];
