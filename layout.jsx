// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Bricolage_Grotesque } from 'next/font/google'
import { Syne } from 'next/font/google'
import './styles.css'

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage_grotesque',
})
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage_grotesque.variable + ' ' + syne.variable}>
        {children}
      </body>
    </html>
  )
}
