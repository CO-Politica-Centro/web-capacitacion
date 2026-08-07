import type { Leccion } from "../types";

export const leccionesMensajeClaroEtico: Leccion[] = [
  {
    cursoSlug: "mensaje-claro-etico",
    slug: "pitch-30s",
    titulo: "Tu mensaje en 30 segundos",
    minutos: 10,
    objetivos: [
      "Formular un pitch corto y memorable",
      "Separar identidad, problema y llamado a la acción",
    ],
    sections: [
      {
        heading: "Estructura del pitch",
        body: `1. Quiénes somos (en una frase).
2. Qué problema concreto abordamos.
3. Qué pedimos ahora (escuchar, unirse, firmar, venir).

Si no cabe en 30–45 segundos, aún no está listo.`,
      },
      {
        heading: "Prueba de cocina",
        body: `Dilo en voz alta a alguien fuera de la política. Si pregunta “¿y eso qué es?”, simplifica. La claridad no es superficialidad.`,
      },
      {
        heading: "Versiones",
        body: `Ten una versión para plaza, una para chat y una para presentación formal. Mismo núcleo; distinto detalle.`,
      },
    ],
    ejercicio: `Escribe tu pitch en 60–80 palabras y léelo en voz alta cronometrando.`,
    siguientePaso: {
      label: "Siguiente: ética de la comunicación",
      href: "/cursos/mensaje-claro-etico/etica",
    },
  },
  {
    cursoSlug: "mensaje-claro-etico",
    slug: "etica",
    titulo: "Ética de la comunicación política",
    minutos: 10,
    objetivos: [
      "Fijar límites éticos no negociables",
      "Rechazar atajos que destruyen confianza",
    ],
    sections: [
      {
        heading: "Reglas mínimas",
        body: `- No inventar cifras.
- No difamar.
- No manipular imágenes o audios.
- No humillar para “ganar”.
- Corregir errores en público cuando toque.`,
      },
      {
        heading: "Por qué importa",
        body: `La ética no es marketing: es infraestructura de confianza. Un movimiento que miente “un poquito” enseña a su base a desconfiar de todo, incluido él mismo.`,
      },
      {
        heading: "Firmeza sin crueldad",
        body: `Se puede ser duro con ideas y cuidadoso con personas. La firmeza ataca argumentos; la crueldad busca espectáculo.`,
      },
    ],
    ejercicio: `Escribe tres “nunca” de comunicación para tu equipo y pégalos donde planifican contenido.`,
    siguientePaso: {
      label: "Siguiente: redes sin toxicidad",
      href: "/cursos/mensaje-claro-etico/redes",
    },
  },
  {
    cursoSlug: "mensaje-claro-etico",
    slug: "redes",
    titulo: "Redes sin toxicidad",
    minutos: 12,
    objetivos: [
      "Diseñar presencia en redes sin alimentar el basurero",
      "Elegir batallas y formatos útiles",
    ],
    sections: [
      {
        heading: "Objetivo de cada publicación",
        body: `Informar, convocar, explicar o humanizar. Si el único objetivo es “humillar al otro bando”, estás trabajando para el algoritmo, no para la ciudadanía.`,
      },
      {
        heading: "Higiene operativa",
        body: `Horarios, responsables, banco de fuentes, revisión de datos. Un error viral cuesta semanas de explicación.`,
      },
      {
        heading: "Cuándo no responder",
        body: `Cuentas anónimas agresoras, trampas de mala fe, hilos que solo buscan engagement. Bloquear y seguir no es cobardía: es gestión de atención.`,
      },
    ],
    ejercicio: `Planifica 3 publicaciones de la próxima semana con objetivo, audiencia y fuente de dato si aplica.`,
    siguientePaso: {
      label: "Siguiente: debate respetuoso",
      href: "/cursos/mensaje-claro-etico/debate",
    },
  },
  {
    cursoSlug: "mensaje-claro-etico",
    slug: "debate",
    titulo: "Debate respetuoso y firme",
    minutos: 10,
    objetivos: [
      "Practicar reglas de debate usable en plaza y en línea",
      "Preparar el paso a liderazgo y decisión",
    ],
    sections: [
      {
        heading: "Reglas de cancha",
        body: `Escucha el argumento completo. Reformula antes de responder. Separa persona y tesis. Pide evidencia. Concede lo que sea cierto.`,
      },
      {
        heading: "Técnica STEEL",
        body: `**S**ituación, **T**esis del otro, **E**videncia, **E**valuación, **L**ímite propio. Te obliga a entender antes de atacar.`,
      },
      {
        heading: "Puente",
        body: `Comunicar bien prepara para **decidir en público**: prioridades, transparencia y valor público.`,
      },
    ],
    ejercicio: `Elige un desacuerdo real y escribe la tesis del otro en su mejor versión (sin ironía). Luego responde en cinco líneas.`,
    siguientePaso: {
      label: "Siguiente curso: Decidir en público",
      href: "/cursos/decidir-en-publico",
    },
  },
];
