import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'J0',
  description: 'James Owen',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" >
    
      <body className={`font-mono text-sm lg:text-2xl`} style={{backgroundImage: `url("/images/subtle.jpeg")`,
    
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
}}>
     
      {children}</body>
    </html>
  )
}