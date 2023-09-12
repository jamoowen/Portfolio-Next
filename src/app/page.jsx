"use client"; // This is a client component
import Image from "next/image"
import Link from "next/link"

import HomeLinks from "./components/HomeLinks/HomeLinks"
import { useState } from "react"


export default function Home() {
  

  const [attention, setAttention] = useState(0);


  return (
    <>

      <main className="flex min-h-screen flex-col items-center" >

        <div className="relative flex place-items-center p-5">
        {attention}

          <Link href='/' replace className="p-5">
            <Image
              className=""
              src="/images/logo_jo.png"
              alt="Logo"
              style={{ objectFit: "contain" }}


              width={200}
              height={50}


            />
          </Link>
        </div>
        <HomeLinks />




      </main>
    </>

  )
}
