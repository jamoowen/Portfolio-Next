import '../globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'J0',
  description: 'James Owen',
}

export default function RootLayout({ children }) {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' },
    // { label: 'Donate', path: '/donate' },
    // { label: 'Store', path: '/merch' },

  ]
// import su from "../../../public/images/subtle"

  return (
    <>
    
    <main>

      <nav className="flex sm:justify space-x-4 font-pixel font-white">

        {links.map((l, i) =>
          <Link className='text-white hover:bg-matrix-50' style={{
            padding: '0.9rem',
            font: 'font-mono'
          }}
            key={i}
            href={l.path}>


            {l.label}
          </Link>
        )}

      </nav>


      {children}


    </main>
    </>
  )
}
