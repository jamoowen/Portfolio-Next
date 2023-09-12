import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'J0',
  description: 'James Owen',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${inter.className} bg-gradient-to-tr from-stone-950 to-stone-800`}>
     
      {children}</body>
    </html>
  )
}