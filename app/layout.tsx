import React from "react"
import type { Metadata, Viewport } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.macpower.com.co'),
  title: {
    default: 'MacPower IT Solutions | Apple Business Partner y Soluciones Empresariales',
    template: '%s | MacPower IT Solutions',
  },
  description: 'Somos tu aliado estratégico en tecnología. Apple Business Partner en Colombia, soluciones de infraestructura IT, ciberseguridad, y gestión MDM para empresas.',
  keywords: [
    'Apple Business Partner Colombia',
    'Mac para empresas',
    'Soluciones IT empresariales',
    'Infraestructura tecnológica',
    'Ciberseguridad empresarial',
    'MDM Apple',
    'Arrendamiento de computadores',
    'Soporte técnico Apple certificado',
    'Consultoría IT',
    'Transformación digital',
  ],
  authors: [{ name: 'MacPower IT Solutions', url: 'https://macpower.com.co' }],
  creator: 'MacPower IT Solutions',
  publisher: 'MacPower IT Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/es-CO',
    },
  },
  openGraph: {
    title: 'MacPower IT Solutions | Expertos en Tecnología Apple para Empresas',
    description: 'Transformamos tu empresa con el ecosistema Apple y soluciones IT de clase mundial. Ciberseguridad, infraestructura y soporte especializado.',
    url: 'https://www.macpower.com.co',
    siteName: 'MacPower IT Solutions',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/macpower-logo-color.svg', // Idealmente usar una imagen específica para OG (1200x630)
        width: 1200,
        height: 630,
        alt: 'MacPower IT Solutions - Apple Business Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MacPower IT Solutions | Apple Business Partner',
    description: 'Soluciones IT empresariales, Mac para empresas y soporte certificado en Colombia.',
    creator: '@macpower_it', // Si existe
    images: ['/images/macpower-logo-color.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${lato.className} antialiased`}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
