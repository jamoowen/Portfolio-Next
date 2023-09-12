"use client";

import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
    Collapse,
    Card,
    CardBody,
} from "@material-tailwind/react";

import Link from "next/link";
import { useState } from "react";

import { Collapsable } from "@/app/components/Collapsable";

import { Experience,
        Stack,
        NextjsProject,
        SolidityProject, 
        BreadthFirstSearchProject
        } from "../../../../public/text/about";

// function to render the pdf if clicked
function RenderResume({ handleResumeClick }) {
    return (
        <>
            <div>
                <Button onClick={handleResumeClick} color="white" fullWidth={false} size="sm" width="20" className="font-mono" variant="gradient">Hide</Button>
            </div>

            <iframe className="" src="https://drive.google.com/file/d/15yfWN9GGNVtCx-q8-ivP1ILegWzO4rk1/preview" width="300" height="300" allow="autoplay"></iframe>
        </>
    )
}

export default function Home() {

    const [resumeVisibility, setResumeVisibility] = useState(false)

    const handleResumeClick = () => {
        setResumeVisibility((prevVisibility) => !prevVisibility);
    };



    return (
        <>
            <main className="flex min-h-screen flex-col items-left">

                <div className="flex-col ml-10 p-5">
                    <h1 className="text-3xl font-bold font-pixel text-matrix-50">
                        About
                    </h1>


                </div>
               
                <div className="flex flex-col ml-10 p-5 font-mono">
                <div className="mb-4">
                        I'm James, a fullstack developer. <br/>
                         Click the buttons find out more. 
            
                    </div>
                    <div className="mb-4">
                        <Collapsable btnName="My experience" fullWidth={true} text={Experience} _className="font-mono w-80" />
                    </div>
                    <div className="mb-4">
                        <Collapsable  btnName="Tech Stack" fullWidth={true} text={Stack} _className="font-mono w-80"/>
                    </div>
                    <div className="mb-4">
                        <Collapsable btnName="Projects" fullWidth={true} text={
                            <>
                        <Collapsable className="mb-4" btnName="Next.js App" text={NextjsProject} _className="font-mono w-64 mb-2"/>
                        <Collapsable className="mb-4" btnName="Smart Contracts" text={SolidityProject} _className="font-mono w-64 mb-2"/>
                        <Collapsable className="mb-4" btnName="Six Degrees of Separation" text={BreadthFirstSearchProject} _className="font-mono w-64 mb-2"/>
                        </>
                        } _className="font-mono w-80" />
                    </div>
                    



                    <div className="mb-4">
                        <Menu>
                            <MenuHandler>
                                <Button color="white" fullWidth={false} size="md" className="font-mono" variant="gradient">
                                    CV/Résumé</Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem onClick={handleResumeClick}>
                                    View
                                </MenuItem>

                                <MenuItem>
                                    <a href="https://drive.google.com/file/d/15yfWN9GGNVtCx-q8-ivP1ILegWzO4rk1/view?usp=sharing" target="_blank">Download PDF</a>
                                </MenuItem>

                            </MenuList>
                        </Menu>

                    </div>
                    <div className="flex flex-col ml-10 p-5 font-mono items-left">
                        {resumeVisibility && <RenderResume handleResumeClick={handleResumeClick} />}
                    </div>

                </div>
            </main>
        </>
    )
}
