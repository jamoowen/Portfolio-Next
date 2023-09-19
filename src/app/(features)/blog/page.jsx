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
    const article1 = articles[0];
    const articleheader = article1.header

    return (
        <>
            <main className="flex min-h-screen flex-col items-left">

                <div className="flex-col ml-10 p-5">
                    <h1 className="text-3xl font-bold font-pixel text-matrix-50">
                        Blog
                    </h1>


                </div>

                <div className="flex flex-col ml-10 p-5 font-mono">
                    <div className="mb-4 font-mono">
                        You can read the summaries of some of my blog posts below. They have links to the full article
                        on my <a className="text-sky-600" href="https://medium.com/@jamesowen.dev"> Medium Blog.</a>
                        <br />


                    </div>
                    {articles.map((l, i) =>
                     
                        <CustomAccordion key={i} blogHeader={l.header} blogBody={l.body} />
                    )}
                    <div className="mb-4">

                    </div>
                    <div className="mb-4">

                    </div>

                </div>
            </main>
        </>
    )
}
