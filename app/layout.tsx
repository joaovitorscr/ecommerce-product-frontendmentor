import './styles/main.scss'
import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Sneakers',
  description: 'Buy your sneakers in the best place'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>{children}</body>
    </html>
  )
}
