// "use client";


import '../../globals.css'
// import { Inter } from 'next/font/google'
// import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'


// import { useState } from 'react';


export default function HomeLinks() {
    const links = [
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Blog', path: '/blog' },
        // { label: 'Store', path: '/merch' },
        // { label: 'Donate', path: '/donate' },
    ]
    const detail = {
        'About': 'Find out about me',
        'Contact': 'Get in contact',
        'Store': 'Merch for sale',
        'Donate': 'Help support my journey with a donation'
    }



    return (

        <ul role="list" className="divide-slate-200">

            {links.map((l, i) =>

                <Link className='' style={{
                }}
                    key={i}
                    href={l.path}>
                    <div className='font-pixel text-white sm:text-lg hover:text-matrix-50 p-5 mb-4'>


                        {l.label}

                    </div>

                </Link>
            )}
        </ul>
    )
}


