"use client";

import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import Link from "next/link";
import { useState } from "react";

import { articles } from "../../../../public/text/blog";

import { CustomAccordion } from "@/app/components/Accordion";
import { Collapsable } from "@/app/components/Collapsable";





// function to render the pdf if clicked
// articles = [ {header:..., body:...}]


export default function Home() {


    return (
        <>
            <main className="flex min-h-screen flex-col items-left text-white">

                <div className="flex-col ml-10 p-5">
                <div className="text-3xl w-min font-bold font-pixel p-3 -rotate-6 text-white bg-gradient-to-r from-sky-600 to-indigo-500">
                        <div className="rotate-6">Blog</div>
                    </div>


                </div>

                <div className="flex flex-col ml-10 mr-20 p-5 ">
                    <div className="mb-4 ">
                        You can read the summaries of some of my blog posts below.<br/>
                        They have links to the full article on my 
                        <a className="text-sky-500" href="https://medium.com/@jamesowen.dev" target="_blank"> Medium Blog.</a>
                        <br />


                    </div>
                    {articles.map((l, i) =>
                     

                            <CustomAccordion key={i} blogHeader={l.header} blogBody={l.body} />
                 
                    )}

                </div>
            </main>
        </>
    )
}
