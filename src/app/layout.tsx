import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prendete al Camino - Santiago de Compostela',
  description: 'Descubre el Camino de Santiago con nuestros viajes organizados y experiencias únicas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}
      <script src="https://elfsightcdn.com/platform.js" async></script>
      </body>
    </html>
  )
}
