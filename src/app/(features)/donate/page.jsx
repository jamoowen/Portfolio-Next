
"use client";

import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Spinner
} from "@material-tailwind/react";

import Link from "next/link";


export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-left">

                <div className="ml-10 p-5">
                    <h1 className="text-3xl font-bold font-pixel text-white shadow-2xl mb-4">
                        Donate
                    </h1>
                    <div className=" mb-4">
                        Coming soon... <Spinner color="green" />
                    </div>

                </div>
                <div className="flex flex-col ml-10 p-5 ">
                  
                </div>
            </main>
        </>
    )
}
// ui-monospace', 'SFMono-Regular