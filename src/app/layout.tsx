import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { AuthProvider } from "@/components/auth-provider";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl, SITE_SEO } from "@/lib/seo";
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
    default: SITE_SEO.titleDefault,
    template: SITE_SEO.titleTemplate,
  },
  description: SITE_SEO.description,
  metadataBase: new URL(getSiteUrl()),
  applicationName: SITE_SEO.siteName,
  authors: [{ name: "CO Politica Centro" }],
  creator: "CO Politica Centro",
  keywords: [
    "capacitación política",
    "formación ciudadana",
    "CO Politica Centro",
    "escuela política",
    "Colombia",
  ],
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE_SEO.siteName,
    title: SITE_SEO.titleDefault,
    description: SITE_SEO.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_SEO.titleDefault,
    description: SITE_SEO.description,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = getSiteUrl();
  const organizationLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "CO Politica Centro",
        url: "https://beacons.ai/centropd",
        logo: `${siteUrl}/brand/logo-flor-512.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Capacitación · CO Politica Centro",
        url: siteUrl,
        inLanguage: "es-CO",
        description:
          "Aprende política con rutas guiadas: concientización y formación práctica para actuar en Colombia.",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd data={organizationLd} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <AuthProvider>
          <a href="#contenido-principal" className="skip-link">
            Saltar al contenido
          </a>
          <SiteHeader />
          <main
            id="contenido-principal"
            tabIndex={-1}
            className="contenido-principal flex-1"
          >
            {children}
          </main>
          <SiteFooter />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
