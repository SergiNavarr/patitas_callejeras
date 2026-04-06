import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: 'Patitas | Rescate y Adopción de Animales',
  description: 'Organización sin fines de lucro dedicada al rescate, rehabilitación y adopción responsable de animales. Cambia una vida, adopta un amigo.',
  keywords: ['adopción de mascotas', 'rescate animal', 'perros', 'gatos', 'tránsito', 'donaciones', 'Argentina'],
  authors: [{ name: 'Navarrow' }],
  openGraph: {
    title: 'Patitas | Rescate y Adopción de Animales',
    description: 'Cambia una vida, adopta un amigo. Somos una organización dedicada al rescate y adopción responsable.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#c46f3c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
