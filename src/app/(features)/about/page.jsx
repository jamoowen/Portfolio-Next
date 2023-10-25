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

import { Collapsable } from "@/app/components/Collapsable";

import {
    Experience,
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
                <Button onClick={handleResumeClick} color="white" fullWidth={false} size="sm" width="20" className="" variant="gradient">Hide</Button>
            </div>

            <iframe className="" src="https://drive.google.com/file/d/1WFtwIqwT4EQ-oV51h5ZgFbcLxgz5uqIT/preview" width="300" height="300" allow="autoplay"></iframe>
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
            <main className="flex min-h-screen flex-col items-left text-white">

                <div className="flex-col ml-10 p-5">
                    <div className="text-3xl w-min font-bold font-pixel p-3 -rotate-6 text-white bg-gradient-to-r from-sky-600 to-indigo-500">
                        <div className="rotate-6">About</div>
                    </div>
                </div>

                <div className="flex flex-col ml-10 p-5 ">
                    <div className="mb-10 ">
                        {"I'm James, a Full Stack Developer."} <br />
                        Click the buttons to find out more

                    </div>
                    <div className="mb-4">
                        <Collapsable btnName="My experience" fullWidth={true} text={Experience} _className=" w-80" />
                    </div>
                    <div className="mb-4">
                        <Collapsable btnName="Tech Stack" fullWidth={true} text={Stack} _className=" w-80" />
                    </div>
                    <div className="mb-4">
                        <Collapsable btnName="Projects" fullWidth={true} text={
                            <>
                                <Collapsable className="mb-4" btnName="Next.js App" text={NextjsProject} _className=" w-64 mb-2" />
                                <Collapsable className="mb-4" btnName="Smart Contracts" text={SolidityProject} _className=" w-64 mb-2" />
                                <Collapsable className="mb-4" btnName="Six Degrees of Separation" text={BreadthFirstSearchProject} _className=" w-64 mb-2" />
                            </>
                        } _className=" w-80" />
                    </div>




                    <div className="mb-4">
                        <Menu>
                            <MenuHandler>
                                <Button color="white" fullWidth={false} size="md" className="font-mono " style={{ textTransform: "none" }} variant="gradient">
                                    CV/Resume</Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem onClick={handleResumeClick}>
                                    View
                                </MenuItem>

                                <MenuItem>
                                    <a href="https://drive.google.com/file/d/1WFtwIqwT4EQ-oV51h5ZgFbcLxgz5uqIT/view?usp=sharing" target="_blank">Download PDF</a>
                                </MenuItem>

                            </MenuList>
                        </Menu>

                    </div>
                    <div className="flex flex-col ml-10 p-5  items-left">
                        {resumeVisibility && <RenderResume handleResumeClick={handleResumeClick} />}
                    </div>

                </div>
            </main>
        </>
    )
}
