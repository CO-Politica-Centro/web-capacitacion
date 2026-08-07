import type { Leccion } from "../types";

export const leccionesLeerPoliticaSinRuido: Leccion[] = [
  {
    cursoSlug: "leer-politica-sin-ruido",
    slug: "fuentes",
    titulo: "Jerarquía de fuentes",
    minutos: 10,
    objetivos: [
      "Priorizar fuentes según cercanía al hecho",
      "Distinguir documento primario de comentario",
    ],
    sections: [
      {
        heading: "No todas las fuentes pesan igual",
        body: `Jerarquía útil (de más a menos cercana al hecho):

1. Documento oficial, dato abierto, sentencia, contrato.
2. Reportaje con método y fuentes nombradas.
3. Análisis de especialistas con evidencia.
4. Opinión, hilos anónimos, “me dijeron”.

Empezar por abajo es el atajo hacia el ruido.`,
      },
      {
        heading: "Medios y sesgos de agenda",
        body: `Todo medio elige encuadres. Eso no invalida el periodismo: te obliga a **contrastar**. Lee al menos dos coberturas serias sobre el mismo hecho antes de compartir.`,
      },
      {
        heading: "Primario primero",
        body: `Si alguien cita “un estudio” o “una ley”, busca el texto. Un pantallazo sin contexto es señal de alerta, no prueba.`,
      },
    ],
    ejercicio: `Toma una afirmación política de redes. Clasifica la fuente en la jerarquía y busca (si existe) un documento primario relacionado.`,
    siguientePaso: {
      label: "Siguiente: sesgos que distorsionan",
      href: "/cursos/leer-politica-sin-ruido/sesgos",
    },
  },
  {
    cursoSlug: "leer-politica-sin-ruido",
    slug: "sesgos",
    titulo: "Sesgos que distorsionan",
    minutos: 10,
    objetivos: [
      "Reconocer sesgos cognitivos comunes en política",
      "Aplicar un freno antes de compartir",
    ],
    sections: [
      {
        heading: "Tu cerebro también hace campaña",
        body: `Sesgos frecuentes:

- **Confirmación:** buscas lo que ya crees.
- **Disponibilidad:** lo más viral parece lo más cierto.
- **Grupo:** “los míos nunca mienten”.
- **Autoridad mal puesta:** fama ≠ expertise.`,
      },
      {
        heading: "Antídoto simple",
        body: `Antes de compartir, pregunta: ¿qué me haría cambiar de opinión? Si la respuesta es “nada”, estás en modo hinchada, no en modo ciudadanía.`,
      },
      {
        heading: "Hecho, opinión, rumor",
        body: `**Hecho:** verificable con evidencia. **Opinión:** valoración legítima. **Rumor:** afirmación sin soporte suficiente. Mezclarlos es la fábrica del ruido.`,
      },
    ],
    ejercicio: `Escribe un ejemplo personal reciente de sesgo de confirmación (político o no) y cómo lo detectarías hoy.`,
    siguientePaso: {
      label: "Siguiente: señales de desinformación",
      href: "/cursos/leer-politica-sin-ruido/desinformacion",
    },
  },
  {
    cursoSlug: "leer-politica-sin-ruido",
    slug: "desinformacion",
    titulo: "Desinformación: señales de alerta",
    minutos: 10,
    objetivos: [
      "Detectar patrones comunes de desinformación",
      "Responder sin amplificar el daño",
    ],
    sections: [
      {
        heading: "Señales de alerta",
        body: `- Urgencia emocional (“comparte YA”).
- Autoría opaca o cuenta recién creada.
- Datos sin fecha, lugar ni fuente.
- Imágenes viejas presentadas como nuevas.
- Ataques personales en lugar de evidencia.`,
      },
      {
        heading: "Intención y efecto",
        body: `A veces hay error; a veces hay manipulación. Para la ciudadanía importa el **efecto**: polarizar, desalentar el voto, destruir confianza. Actúa sobre el efecto: verifica y no amplifiques.`,
      },
      {
        heading: "Cómo responder",
        body: `Si puedes, aporta la corrección con fuente. Si el hilo es un basurero, no entres: pierdes tiempo y das oxígeno. Reporta cuando las plataformas lo permitan.`,
      },
    ],
    ejercicio: `Guarda (sin compartir) un ejemplo de contenido sospechoso y marca tres señales de alerta concretas.`,
    siguientePaso: {
      label: "Siguiente: cómo chequear",
      href: "/cursos/leer-politica-sin-ruido/chequear",
    },
  },
  {
    cursoSlug: "leer-politica-sin-ruido",
    slug: "chequear",
    titulo: "Cómo chequear una afirmación",
    minutos: 10,
    objetivos: [
      "Aplicar un método corto de verificación",
      "Cerrar la vía de concientización con un hábito usable",
    ],
    sections: [
      {
        heading: "Método en cinco pasos",
        body: `1. **Aísla** la afirmación (una sola).
2. **Busca** fuente primaria o cobertura seria.
3. **Contrasta** con una segunda fuente independiente.
4. **Contextualiza** (fecha, lugar, cifras completas).
5. **Decide**: compartir, corregir o ignorar.`,
      },
      {
        heading: "Herramientas",
        body: `Buscadores, sitios de chequeo reconocidos, portales oficiales y archivos de medios. No necesitas ser periodista: necesitas **paciencia de cinco minutos**.`,
      },
      {
        heading: "Cierre de la vía",
        body: `Con instituciones, ideas, participación y lectura crítica tienes base de concientización. Si quieres pasar a la acción organizada, abre la vía de **formación práctica**.`,
      },
    ],
    ejercicio: `Aplica el método de cinco pasos a una afirmación política que hayas visto esta semana. Anota el resultado en cinco viñetas.`,
    siguientePaso: {
      label: "Explorar vía práctica",
      href: "/via/practica",
    },
  },
];
