import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Header from '@/components/Header'

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
})

export default function Layout({ children }) {
  return (
      <html lang="en">

      <body
          className={cn(
              'antialiased',
              fontHeading.variable,
              fontBody.variable
          )}
      >
        <Header />
      {children}
      </body>
      </html>
  )
}