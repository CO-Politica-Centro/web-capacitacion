import type { Leccion } from "../types";

export const leccionesDecidirEnPublico: Leccion[] = [
  {
    cursoSlug: "decidir-en-publico",
    slug: "etica-liderazgo",
    titulo: "Ética del liderazgo ciudadano",
    minutos: 10,
    objetivos: [
      "Definir liderazgo como servicio con límites",
      "Reconocer tentaciones típicas del poder informal",
    ],
    sections: [
      {
        heading: "Liderar sin pedestal",
        body: `En movimientos ciudadanos, liderazgo es **coordinar hacia un bien común** con mandato claro y revocable. No es acumular micrófono.`,
      },
      {
        heading: "Tentaciones",
        body: `Centralizar información, rodearse solo de aplausos, confundir lealtad con obediencia, usar recursos del grupo como propios. Nómbralas en voz alta para prevenirlas.`,
      },
      {
        heading: "Práctica",
        body: `Rinde cuentas, pide feedback, rota roles visibles. La ética se ve en hábitos, no en discursos.`,
      },
    ],
    ejercicio: `Escribe tu “código de liderazgo” en cinco viñetas y compártelo con alguien que te frene si lo incumples.`,
    siguientePaso: {
      label: "Siguiente: priorizar",
      href: "/cursos/decidir-en-publico/prioridades",
    },
  },
  {
    cursoSlug: "decidir-en-publico",
    slug: "prioridades",
    titulo: "Priorizar cuando todo parece urgente",
    minutos: 12,
    objetivos: [
      "Usar criterios explícitos para priorizar",
      "Decir no con transparencia",
    ],
    sections: [
      {
        heading: "Criterios > intuición sola",
        body: `Elige 3–4 criterios: impacto público, factibilidad, alineación con mandato, riesgo ético, capacidad del equipo. Puntúa opciones. Documenta.`,
      },
      {
        heading: "Matriz simple",
        body: `Impacto alto / esfuerzo bajo primero. Impacto alto / esfuerzo alto solo con plan. Esfuerzo alto / impacto bajo: aparcar.`,
      },
      {
        heading: "El costo de no priorizar",
        body: `Todo “sí” implícito es un “no” a otra cosa. Hacerlo visible evita resentimientos.`,
      },
    ],
    ejercicio: `Lista 5 iniciativas de tu grupo y ordénalas con dos criterios escritos. Explica el #1 y el #5.`,
    siguientePaso: {
      label: "Siguiente: transparencia",
      href: "/cursos/decidir-en-publico/transparencia",
    },
  },
  {
    cursoSlug: "decidir-en-publico",
    slug: "transparencia",
    titulo: "Rendición de cuentas básica",
    minutos: 10,
    objetivos: [
      "Diseñar una rendición de cuentas ligera y frecuente",
      "Separar secreto legítimo de opacidad",
    ],
    sections: [
      {
        heading: "Qué reportar",
        body: `Decisiones, plata (si hay), avances, errores y próximos pasos. Un informe de una página mensual suele bastar al inicio.`,
      },
      {
        heading: "A quién",
        body: `Al equipo, a la comunidad que representas y, cuando aplique, a aliados. No es lo mismo un chat interno que un comunicado público.`,
      },
      {
        heading: "Límites",
        body: `Datos personales, seguridad de personas en riesgo y estrategias sensibles no se publican a la ligera. Transparencia ≠ imprudencia.`,
      },
    ],
    ejercicio: `Redacta la plantilla de tu próximo informe breve (6 encabezados máximo).`,
    siguientePaso: {
      label: "Siguiente: planeación corta",
      href: "/cursos/decidir-en-publico/planeacion",
    },
  },
  {
    cursoSlug: "decidir-en-publico",
    slug: "planeacion",
    titulo: "Planeación corta y útil",
    minutos: 10,
    objetivos: [
      "Armar un plan de 30–90 días con metas medibles",
      "Evitar planes ornamentales",
    ],
    sections: [
      {
        heading: "Horizonte corto",
        body: `Para nodos y colectivos, 30–90 días es realista. Define: objetivo, indicadores, responsables, recursos y fechas de revisión.`,
      },
      {
        heading: "Metas SMART-lite",
        body: `Específica, medible, alcanzable, relevante, con tiempo. Si no puedes verificarla, no es meta: es deseo.`,
      },
      {
        heading: "Revisión",
        body: `Cada dos semanas: ¿seguimos? ¿ajustamos? ¿cerramos? La planeación sin revisión es teatro.`,
      },
    ],
    ejercicio: `Escribe un plan de 30 días con un solo objetivo y tres indicadores.`,
    siguientePaso: {
      label: "Siguiente: valor público",
      href: "/cursos/decidir-en-publico/valor-publico",
    },
  },
  {
    cursoSlug: "decidir-en-publico",
    slug: "valor-publico",
    titulo: "Valor público en lenguaje simple",
    minutos: 8,
    objetivos: [
      "Explicar valor público sin jerga",
      "Cerrar la vía práctica con una brújula usable",
    ],
    sections: [
      {
        heading: "Qué es",
        body: `Valor público es el beneficio que una decisión genera para la comunidad: mejor servicio, más confianza, más derechos efectivos, menos daño. No es “quedar bien en la foto”.`,
      },
      {
        heading: "Preguntas guía (eje ESAP-lite)",
        body: `1. ¿A quién sirve esto de verdad?
2. ¿Con qué recursos y límites?
3. ¿Cómo se rinde cuentas?
4. ¿Qué aprendizaje queda para la próxima decisión?`,
      },
      {
        heading: "Cierre de la vía práctica",
        body: `Pasaste de interesado a activo, armaste ritmo de nodo, comunicaste con ética y aprendiste a decidir. Vuelve a la ruta cuando necesites repasar un paso. La escuela abierta sigue disponible sin muro de pago ni de vanidad.`,
      },
    ],
    ejercicio: `Toma una decisión reciente de tu grupo y evalúala con las cuatro preguntas de valor público.`,
    siguientePaso: {
      label: "Volver a la ruta práctica",
      href: "/ruta/practica",
    },
  },
];
