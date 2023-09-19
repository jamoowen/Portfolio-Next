import Image from "next/image"
import Link from "next/link"

import HomeLinks from "./components/HomeLinks/HomeLinks"

// import { useState } from "react"


export default function Home() {
  
  return (
    <>

      <main className="flex min-h-screen flex-col items-center" >
        <div className="relative flex place-items-center p-5">
          <Link href='/' replace className="p-5">
  
            <Image
              className=""
              src="/images/logo_jo.png"
              alt="Logo"
              style={{ objectFit: "contain" }}
              width={300}
              height={50}
              priority
            />
          </Link>
        </div>
        <HomeLinks />

      </main>
    </>

  )
}
