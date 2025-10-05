import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webinator365 | Software Solutions That Never Stop',
  description: 'Sviluppiamo soluzioni digitali complete: web, mobile, blockchain, automazioni. Il tuo partner tecnologico disponibile 365 giorni l\'anno.',
  keywords: 'sviluppo software, web development, app mobile, blockchain, automazioni, integrazioni API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
