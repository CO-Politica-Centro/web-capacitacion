import type { Curso } from "./types";

export const cursos: Curso[] = [
  {
    slug: "estado-colombiano",
    ramaId: "instituciones",
    titulo: "Cómo funciona el Estado colombiano",
    resumen:
      "Un mapa claro de instituciones, territorio y rendición de cuentas para entender quién decide qué en Colombia.",
    objetivos: [
      "Explicar por qué el Estado organiza la vida cotidiana",
      "Distinguir las tres ramas y sus contrapesos",
      "Ubicar decisiones en nación, departamento y municipio",
      "Reconocer el ciclo electoral básico y la veeduría ciudadana",
    ],
    nivel: "intro",
    duracionMin: 50,
    status: "publicado",
    leccionesMeta: [
      {
        slug: "por-que-importa",
        titulo: "Por qué importa el Estado en tu vida",
        orden: 1,
        minutos: 10,
      },
      {
        slug: "tres-ramas",
        titulo: "Tres ramas y contrapesos",
        orden: 2,
        minutos: 12,
      },
      {
        slug: "territorio",
        titulo: "Nación, departamento, municipio",
        orden: 3,
        minutos: 10,
      },
      {
        slug: "elecciones",
        titulo: "Cómo se elige y se rinde cuentas",
        orden: 4,
        minutos: 10,
      },
      {
        slug: "mapa-personal",
        titulo: "Tu mapa institucional",
        orden: 5,
        minutos: 8,
      },
    ],
  },
  {
    slug: "centro-liberalismo-social",
    ramaId: "ideologias",
    titulo: "¿Qué es el centro? Liberalismo social",
    resumen:
      "Orientación sobre el mapa izquierda–derecha y los valores del centro con liberalismo social.",
    objetivos: [
      "Leer el espectro ideológico sin caricaturas",
      "Definir centro y liberalismo social en lenguaje claro",
      "Diferenciar el centro de extremos y populismos",
    ],
    nivel: "intro",
    duracionMin: 45,
    status: "publicado",
    leccionesMeta: [
      {
        slug: "mapa-ideologico",
        titulo: "El mapa izquierda–derecha",
        orden: 1,
        minutos: 10,
      },
      {
        slug: "que-es-centro",
        titulo: "Qué es el centro político",
        orden: 2,
        minutos: 10,
      },
      {
        slug: "liberalismo-social",
        titulo: "Liberalismo social en la práctica",
        orden: 3,
        minutos: 12,
      },
      {
        slug: "no-es",
        titulo: "Lo que el centro no es",
        orden: 4,
        minutos: 8,
      },
    ],
  },
  {
    slug: "participar-sin-candidato",
    ramaId: "ciudadania",
    titulo: "Participar sin ser candidato",
    resumen:
      "Herramientas ciudadanas: voto informado, petición, veeduría, asambleas y voluntariado cívico.",
    objetivos: [
      "Identificar formas legales de participación",
      "Usar el derecho de petición con claridad",
      "Entender veeduría y control social básico",
    ],
    nivel: "intro",
    duracionMin: 40,
    status: "publicado",
    leccionesMeta: [
      {
        slug: "voto-informado",
        titulo: "Voto informado sin agotarte",
        orden: 1,
        minutos: 10,
      },
      {
        slug: "derecho-peticion",
        titulo: "Derecho de petición útil",
        orden: 2,
        minutos: 10,
      },
      {
        slug: "veeduria",
        titulo: "Veeduría y control social",
        orden: 3,
        minutos: 10,
      },
      {
        slug: "asambleas-voluntariado",
        titulo: "Asambleas y voluntariado cívico",
        orden: 4,
        minutos: 10,
      },
    ],
  },
  {
    slug: "leer-politica-sin-ruido",
    ramaId: "medios",
    titulo: "Leer política sin caer en ruido",
    resumen:
      "Fuentes, sesgos y chequeo de afirmaciones para navegar el debate público.",
    objetivos: [
      "Separar hecho, opinión y rumor",
      "Detectar sesgos comunes en medios y redes",
      "Aplicar un método corto para verificar afirmaciones",
    ],
    nivel: "intro",
    duracionMin: 40,
    status: "publicado",
    leccionesMeta: [
      {
        slug: "fuentes",
        titulo: "Jerarquía de fuentes",
        orden: 1,
        minutos: 10,
      },
      {
        slug: "sesgos",
        titulo: "Sesgos que distorsionan",
        orden: 2,
        minutos: 10,
      },
      {
        slug: "desinformacion",
        titulo: "Desinformación: señales de alerta",
        orden: 3,
        minutos: 10,
      },
      {
        slug: "chequear",
        titulo: "Cómo chequear una afirmación",
        orden: 4,
        minutos: 10,
      },
    ],
  },
  {
    slug: "de-interesado-a-activo",
    ramaId: "primeros-pasos",
    titulo: "De interesado a activo",
    resumen:
      "Un mapa práctico para pasar del interés a la primera semana de acción en un movimiento.",
    objetivos: [
      "Desarmar mitos que frenan el primer paso",
      "Conocer roles reales en un movimiento",
      "Ejecutar un checklist de siete días",
      "Encontrar comunidades y canales oficiales",
    ],
    nivel: "intro",
    duracionMin: 45,
    status: "publicado",
    leccionesMeta: [
      {
        slug: "mitos",
        titulo: "Mitos que te frenan",
        orden: 1,
        minutos: 8,
      },
      {
        slug: "roles",
        titulo: "Roles reales en un movimiento",
        orden: 2,
        minutos: 10,
      },
      {
        slug: "primera-semana",
        titulo: "Tu primera semana",
        orden: 3,
        minutos: 10,
      },
      {
        slug: "comunidades",
        titulo: "Dónde encontrar gente",
        orden: 4,
        minutos: 8,
      },
      {
        slug: "siguiente-nivel",
        titulo: "Qué estudiar después",
        orden: 5,
        minutos: 9,
      },
    ],
  },
  {
    slug: "armar-sostener-nodo",
    ramaId: "organizacion",
    titulo: "Armar y sostener un nodo",
    resumen:
      "Reuniones útiles, roles, territorio, ritmo semanal y cuidados anti-burnout.",
    objetivos: [
      "Diseñar una reunión con propósito",
      "Repartir roles sin sobrecargar a pocas personas",
      "Sostener ritmo territorial realista",
    ],
    nivel: "intermedio",
    duracionMin: 50,
    status: "outline",
    leccionesMeta: [
      {
        slug: "reunion-util",
        titulo: "Una reunión que sirve",
        orden: 1,
        minutos: 10,
      },
      {
        slug: "roles-nodo",
        titulo: "Roles de un nodo local",
        orden: 2,
        minutos: 10,
      },
      {
        slug: "territorio",
        titulo: "Trabajo territorial básico",
        orden: 3,
        minutos: 12,
      },
      {
        slug: "ritmo",
        titulo: "Ritmo semanal sostenible",
        orden: 4,
        minutos: 10,
      },
      {
        slug: "burnout",
        titulo: "Cuidados anti-burnout",
        orden: 5,
        minutos: 8,
      },
    ],
  },
  {
    slug: "mensaje-claro-etico",
    ramaId: "comunicacion",
    titulo: "Mensaje claro y ético",
    resumen:
      "Pitch en 30 segundos, ética en redes y debate respetuoso sin perder firmeza.",
    objetivos: [
      "Formular un mensaje corto y memorable",
      "Comunicar en redes sin toxicidad",
      "Practicar debate con reglas éticas",
    ],
    nivel: "intermedio",
    duracionMin: 45,
    status: "outline",
    leccionesMeta: [
      {
        slug: "pitch-30s",
        titulo: "Tu mensaje en 30 segundos",
        orden: 1,
        minutos: 10,
      },
      {
        slug: "etica",
        titulo: "Ética de la comunicación política",
        orden: 2,
        minutos: 10,
      },
      {
        slug: "redes",
        titulo: "Redes sin toxicidad",
        orden: 3,
        minutos: 12,
      },
      {
        slug: "debate",
        titulo: "Debate respetuoso y firme",
        orden: 4,
        minutos: 10,
      },
    ],
  },
  {
    slug: "decidir-en-publico",
    ramaId: "liderazgo",
    titulo: "Decidir en público",
    resumen:
      "Prioridades, ética, transparencia y planeación básica orientada a valor público (eje ESAP-lite).",
    objetivos: [
      "Priorizar con criterios explícitos",
      "Tomar decisiones transparentes",
      "Planear a corto plazo con metas medibles",
    ],
    nivel: "intermedio",
    duracionMin: 50,
    status: "outline",
    leccionesMeta: [
      {
        slug: "etica-liderazgo",
        titulo: "Ética del liderazgo ciudadano",
        orden: 1,
        minutos: 10,
      },
      {
        slug: "prioridades",
        titulo: "Priorizar cuando todo parece urgente",
        orden: 2,
        minutos: 12,
      },
      {
        slug: "transparencia",
        titulo: "Rendición de cuentas básica",
        orden: 3,
        minutos: 10,
      },
      {
        slug: "planeacion",
        titulo: "Planeación corta y útil",
        orden: 4,
        minutos: 10,
      },
      {
        slug: "valor-publico",
        titulo: "Valor público en lenguaje simple",
        orden: 5,
        minutos: 8,
      },
    ],
  },
];
