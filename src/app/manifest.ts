import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Capacitación · CO Politica Centro",
    short_name: "Capacitación Centro",
    description:
      "Aprende política con rutas guiadas: concientización y formación práctica para actuar en Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ec",
    theme_color: "#2f6b3a",
    lang: "es",
    icons: [
      {
        src: "/brand/logo-flor-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/brand/logo-flor-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/brand/logo-flor-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
