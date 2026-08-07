import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { BrandMark } from "@/components/brand-mark";
import { SiteHeader } from "@/components/site-header";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Capacitación política — CO Politica Centro",
    template: "%s · Capacitación Centro",
  },
  description:
    "Escuela abierta de CO Politica Centro: concientización política y formación práctica con rutas guiadas para Colombia.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  icons: {
    icon: [{ url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Capacitación · CO Politica Centro",
    title: "Capacitación política — CO Politica Centro",
    description:
      "Escuela abierta de CO Politica Centro: concientización política y formación práctica con rutas guiadas para Colombia.",
    images: [
      {
        url: "/brand/logo-flor-social.jpg",
        width: 1024,
        height: 1024,
        alt: "CO Politica Centro",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Capacitación política — CO Politica Centro",
    description:
      "Escuela abierta de CO Politica Centro: concientización política y formación práctica con rutas guiadas para Colombia.",
    images: ["/brand/logo-flor-social.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-foreground/10 text-muted border-t px-6 py-8 text-sm">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <BrandMark
                name="Capacitación · Centro"
                size={28}
                className="text-foreground"
              />
              <p>Capacitación política — CO Politica Centro.</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a
                className="hover:text-foreground underline-offset-4 hover:underline"
                href="https://web-portal-co-politica.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Portal
              </a>
              <a
                className="hover:text-foreground underline-offset-4 hover:underline"
                href="https://beacons.ai/centropd"
                target="_blank"
                rel="noreferrer"
              >
                Comunidades
              </a>
              <a
                className="hover:text-foreground underline-offset-4 hover:underline"
                href="mailto:rafaelsolanov@web.de"
              >
                Contacto
              </a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
