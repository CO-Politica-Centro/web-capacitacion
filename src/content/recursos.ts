import type { Recurso } from "./types";

export const recursos: Recurso[] = [
  {
    id: "glosario-base",
    titulo: "Glosario político corto",
    tipo: "glosario",
    resumen:
      "Diez términos esenciales para leer instituciones, ideología y participación sin atascarte.",
    href: "/recursos#glosario",
    cuerpo: `**Constitución:** norma superior que organiza el Estado y reconoce derechos. En Colombia, la de 1991.

**Congreso:** órgano legislativo nacional (Senado y Cámara) que hace leyes y ejerce control político.

**Estado social de derecho:** forma de Estado que combina imperio de la ley con protección de derechos y funciones sociales.

**Ramas del poder:** ejecutivo, legislativo y judicial; se controlan entre sí (contrapesos).

**Centro político:** orientación que busca equilibrios democráticos entre extremos; evita polarización dogmática.

**Liberalismo social:** defensa de libertades individuales junto con políticas que amplían oportunidades y protección social.

**Veeduría:** control social ciudadano sobre la gestión pública y el cumplimiento de metas.

**Derecho de petición:** herramienta para solicitar información o actuaciones a autoridades.

**Plan de desarrollo:** hoja de ruta de un gobierno electo con prioridades y metas.

**Desinformación:** contenido falso o engañoso difundido para confundir o manipular el debate público.

**Territorio:** nivel local/regional donde ocurren muchas decisiones que afectan la vida diaria.

**Valor público:** resultados útiles para la ciudadanía, no solo actividad administrativa.`,
  },
  {
    id: "guia-proyecto-ley",
    titulo: "Cómo leer un proyecto de ley en 15 minutos",
    tipo: "guia",
    ramaId: "instituciones",
    viaId: "concientizacion",
    resumen:
      "Método rápido: título, objeto, artículos clave, impacto y quién gana/pierde.",
    cuerpo: `1. Lee el **título** y el **objeto** (qué dice que quiere lograr).
2. Busca definiciones y ámbito de aplicación.
3. Identifica 3–5 artículos operativos (obligaciones, prohibiciones, plazos).
4. Pregunta: ¿quién implementa? ¿con qué recursos?
5. Anota riesgos y beneficios en lenguaje simple.
6. Contrasta con una fuente oficial o resumen técnico confiable.`,
  },
  {
    id: "enlace-beacons",
    titulo: "Comunidades CO Politica Centro",
    tipo: "enlace",
    viaId: "practica",
    ramaId: "primeros-pasos",
    resumen: "Directorio actualizado de canales y puntos de encuentro del movimiento.",
    href: "https://beacons.ai/centropd",
  },
  {
    id: "enlace-portal",
    titulo: "Portal del movimiento",
    tipo: "enlace",
    resumen: "Sitio oficial del movimiento de centro (propuestas, equipo, contacto).",
    href: "https://web-portal-co-politica.vercel.app",
  },
  {
    id: "lectura-estado",
    titulo: "Refuerzo: mapa del Estado en una página",
    tipo: "lectura",
    viaId: "concientizacion",
    ramaId: "instituciones",
    resumen:
      "Resumen compañero del curso *Cómo funciona el Estado colombiano*.",
    href: "/cursos/estado-colombiano",
    cuerpo: `Recuerda el trío **reglas / servicios / poder**, ubica el nivel territorial y pregunta siempre qué rama responde. Usa el ejercicio del mapa personal al final del curso.`,
  },
  {
    id: "lectura-activo",
    titulo: "Refuerzo: primera semana activa",
    tipo: "lectura",
    viaId: "practica",
    ramaId: "primeros-pasos",
    resumen: "Checklist condensado del curso *De interesado a activo*.",
    href: "/cursos/de-interesado-a-activo",
    cuerpo: `Define tu causa en una frase, elige un rol pequeño, entra a Beacons, preséntate con claridad y completa una tarea observable en siete días.`,
  },
  {
    id: "guia-peticion",
    titulo: "Guía rápida: derecho de petición",
    tipo: "guia",
    ramaId: "ciudadania",
    viaId: "concientizacion",
    resumen: "Estructura mínima para pedir información o actuación a una autoridad.",
    cuerpo: `Incluye: destinatario, identificación, hechos claros, petición concreta, fundamentos breves, notificación y anexos. Sé específico en lo que pides y en el plazo razonable.`,
  },
  {
    id: "guia-chequear",
    titulo: "Chequeo rápido de una afirmación política",
    tipo: "guia",
    ramaId: "medios",
    viaId: "concientizacion",
    resumen: "Cuatro preguntas para no viralizar ruido.",
    cuerpo: `1. ¿Quién lo afirma y con qué evidencia?
2. ¿Hay fuente primaria (dato oficial, documento, audio completo)?
3. ¿Qué omiten el titular o el recorte?
4. ¿Lo confirman medios o verificadores serios?

Si no puedes responder, no amplifiques.`,
  },
  {
    id: "enlace-esap-eag",
    titulo: "Referencia: Escuela de Alto Gobierno (ESAP)",
    tipo: "enlace",
    ramaId: "liderazgo",
    viaId: "practica",
    resumen:
      "Eje institucional de capacitación en decisión y liderazgo público (referencia, no equivalencia).",
    href: "https://www.esap.edu.co/esap/escuela-de-alto-gobierno/",
  },
];
