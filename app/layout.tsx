import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'JGC.LABS — Human vision. AI engineering. Real products.',
  description: 'JGC.LABS es un AI-native product lab. Convertimos ideas en productos digitales reales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={geist.variable}>
      <body>{children}</body>
    </html>
  )
}
