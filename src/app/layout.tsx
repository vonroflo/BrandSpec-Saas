import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: 'BrandSpec - Generate Beautiful Brand Guidelines',
  description: 'Create consistent brand specifications that developers actually use. Export to Markdown, Tailwind, or Figma tokens.',
  keywords: ['brand guidelines', 'design system', 'tailwind', 'figma tokens', 'brand spec'],
  authors: [{ name: 'BrandSpec Team' }],
  openGraph: {
    title: 'BrandSpec - Generate Beautiful Brand Guidelines',
    description: 'Create consistent brand specifications in minutes',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerifDisplay.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
