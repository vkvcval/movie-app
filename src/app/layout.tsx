import './globals.css'
import type { Metadata } from 'next'
import { inter, rowdies, kanit } from '@/lib/fonts'
import StoreProvider from '@/lib/redux/StoreProvider'
import NavBar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Movie app',
  description: 'Find your new favorites!'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rowdies.variable} ${kanit.variable} bg-black`}
      >
        <StoreProvider>
          <NavBar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
