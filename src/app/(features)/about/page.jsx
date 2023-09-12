
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

    const [openCollapse, setOpenCollapse] = useState(false);

    const toggleOpen = () => setOpenCollapse((cur) => !cur);



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


                    <Button color="white" fullWidth={false} size="md" className="font-mono" variant="gradient" onClick={toggleOpen}>My history</Button>
                    <Collapse open={openCollapse}>
                        <Card className="font-mono text-white bg-transparent">
                            <CardBody >
                                <Typography className="font-mono">
                                    I have extensive commercial experience as a backend developer primarily using Python and SQL. During my current tenure, I have worked on my company's proprietary data modeling software,
                                    developing new features in an agile environment. I wrote clean, testable code, adhering to the best practices of Software Development. Additionally, I ran many different 
                                    products on a weekly basis for our company which involved using a diverse tech stack. I have since become more interested in fullstack development and Web3 and 
                                    have been steadily learning and building projects to further my understanding. 
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                    </div>



                    <div className="mb-4 w-40">
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
