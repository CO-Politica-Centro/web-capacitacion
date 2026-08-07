import type { Leccion } from "../types";

export const leccionesArmarSostenerNodo: Leccion[] = [
  {
    cursoSlug: "armar-sostener-nodo",
    slug: "reunion-util",
    titulo: "Una reunión que sirve",
    minutos: 10,
    objetivos: [
      "Diseñar una reunión con propósito claro",
      "Evitar reuniones que solo agotan",
    ],
    sections: [
      {
        heading: "Propósito antes que agenda",
        body: `Una reunión útil responde: **¿qué decisión o coordinación no puede esperar al chat?** Si no hay respuesta, cancela o convierte el encuentro en trabajo asíncrono.

Estructura mínima (45–75 min):

1. Contexto (5 min).
2. Un tema central con dueño.
3. Decisiones y responsables.
4. Próximos pasos con fecha.`,
      },
      {
        heading: "Roles en la sala",
        body: `Facilitador, cronómetro, notas y “guardián del propósito”. Rotar roles evita que siempre cargue la misma persona.`,
      },
      {
        heading: "Después de la reunión",
        body: `Envía un resumen de 5–8 líneas el mismo día. Sin acta, la reunión no existió para quien no estuvo.`,
      },
    ],
    ejercicio: `Diseña la agenda de tu próxima reunión de nodo con propósito, tres bloques de tiempo y un dueño por bloque.`,
    siguientePaso: {
      label: "Siguiente: roles de un nodo",
      href: "/cursos/armar-sostener-nodo/roles-nodo",
    },
  },
  {
    cursoSlug: "armar-sostener-nodo",
    slug: "roles-nodo",
    titulo: "Roles de un nodo local",
    minutos: 10,
    objetivos: [
      "Repartir roles sin sobrecargar a pocas personas",
      "Nombrar funciones concretas y sustituibles",
    ],
    sections: [
      {
        heading: "Roles, no héroes",
        body: `Un nodo sano reparte: convocatoria, logística, comunicación, territorio, finanzas simples y cuidado del grupo. Si todo depende de una persona, no hay nodo: hay burnout anunciado.`,
      },
      {
        heading: "Cómo repartir",
        body: `Pregunta: ¿qué disfrutas? ¿qué puedes sostener 2 horas semanales? Documenta el rol en un párrafo. Entrena un reemplazo temprano.`,
      },
      {
        heading: "Conflictos de rol",
        body: `Cuando dos personas “hacen de todo”, negocien fronteras. La claridad es respeto.`,
      },
    ],
    ejercicio: `Lista 5 roles de tu nodo (real o ideal) y pon un nombre o “vacante” al lado de cada uno.`,
    siguientePaso: {
      label: "Siguiente: trabajo territorial",
      href: "/cursos/armar-sostener-nodo/territorio",
    },
  },
  {
    cursoSlug: "armar-sostener-nodo",
    slug: "territorio",
    titulo: "Trabajo territorial básico",
    minutos: 12,
    objetivos: [
      "Mapear un territorio pequeño y realista",
      "Elegir acciones de presencia sin sobreprometer",
    ],
    sections: [
      {
        heading: "Territorio = personas + lugares",
        body: `No empieces por “toda la ciudad”. Elige un barrio, una cuadra institucional (colegio, plaza, JAC) o un círculo de confianza ampliable.`,
      },
      {
        heading: "Presencia útil",
        body: `Conversaciones, escucha de problemas, apoyo a agendas locales, difusión ética. La política territorial se gana con constancia, no con un solo evento.`,
      },
      {
        heading: "Seguridad y ética",
        body: `No expongas datos sensibles. Respeta contextos de riesgo. Documenta acuerdos. El territorio no es un set para redes.`,
      },
    ],
    ejercicio: `Dibuja (o lista) tu microterritorio: 5 lugares clave y 3 personas o grupos a escuchar este mes.`,
    siguientePaso: {
      label: "Siguiente: ritmo semanal",
      href: "/cursos/armar-sostener-nodo/ritmo",
    },
  },
  {
    cursoSlug: "armar-sostener-nodo",
    slug: "ritmo",
    titulo: "Ritmo semanal sostenible",
    minutos: 10,
    objetivos: [
      "Definir un ritmo semanal realista",
      "Separar urgente de importante en el nodo",
    ],
    sections: [
      {
        heading: "Cadencia > intensidad",
        body: `Mejor 3 horas sostenidas cada semana que 20 horas un mes y silencio después. Define: reunión, terreno, comunicación y descanso.`,
      },
      {
        heading: "Tablero simple",
        body: `Tres columnas: esta semana / este mes / estacionado. Todo lo demás es ruido.`,
      },
      {
        heading: "Revisión quincenal",
        body: `¿Qué funcionó? ¿Qué abandonamos? ¿Quién necesita relevo? Sin revisión, el ritmo se inventa cada lunes.`,
      },
    ],
    ejercicio: `Escribe tu ritmo ideal de 7 días con horas máximas y un “no negociable” de descanso.`,
    siguientePaso: {
      label: "Siguiente: anti-burnout",
      href: "/cursos/armar-sostener-nodo/burnout",
    },
  },
  {
    cursoSlug: "armar-sostener-nodo",
    slug: "burnout",
    titulo: "Cuidados anti-burnout",
    minutos: 8,
    objetivos: [
      "Reconocer señales de agotamiento político",
      "Acordar prácticas de cuidado en el nodo",
    ],
    sections: [
      {
        heading: "Señales",
        body: `Irritabilidad permanente, dormir mal por el chat, culpa al descansar, sensación de que “si no estoy yo se cae todo”. Eso no es compromiso: es riesgo.`,
      },
      {
        heading: "Prácticas",
        body: `Límites de horario, rotación, pedir ayuda temprano, celebrar avances pequeños, desconectarse de hilos tóxicos. El cuidado es organización, no lujo.`,
      },
      {
        heading: "Puente",
        body: `Con el nodo en pie, el siguiente curso trabaja **mensaje claro y ético** para comunicar sin quemar al grupo ni al público.`,
      },
    ],
    ejercicio: `Acuerda contigo (o con tu nodo) una regla anti-burnout escrita en una frase y compártela.`,
    siguientePaso: {
      label: "Siguiente curso: Mensaje claro y ético",
      href: "/cursos/mensaje-claro-etico",
    },
  },
];
