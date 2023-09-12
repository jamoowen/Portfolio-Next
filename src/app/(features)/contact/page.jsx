
"use client";

import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from "@material-tailwind/react";

import Link from "next/link";


export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-left">

                <div className="ml-10 p-5">
                    <h1 className="text-3xl font-bold font-pixel text-matrix-50">
                        contact
                    </h1>
                    <p className="font-mono">
                        You can contact me through any of the below methods
                    </p>

                </div>
                <div className="flex flex-col ml-10 p-5 font-mono">
                    <div className="mb-4 w-40">
                        <Menu>
                            <MenuHandler>
                                <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
                                    Email
                                </Button>
                            </MenuHandler>
                            <MenuList>

                                <MenuItem>
                                    <a
                                        href="#mailgo"
                                        data-address="011jamesowen"
                                        data-domain="gmail.com"
                                        data-subject="Website Interest"
                                        data-body="Hi James, after having a look throught your portfolio, I wanted to reach out!"
                                    >Email me</a>

                                </MenuItem>


                            </MenuList>
                        </Menu>
                    </div>
                    <div className="mb-4 w-40">
                        <Menu>
                            <MenuHandler>
                                <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
                                    LinkedIn</Button>
                            </MenuHandler>
                            <MenuList>

                                <MenuItem>
                                    <Link href="https://www.linkedin.com/in/jamesowen24/">linkedin.com/in/jamesowen24/</Link>

                                </MenuItem>


                            </MenuList>
                        </Menu>
                    </div>
                    <div className="mb-4 w-40">
                        <Menu>
                            <MenuHandler>
                                <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
                                    Twitter</Button>
                            </MenuHandler>
                            <MenuList>

                                <MenuItem>
                                    <Link href="https://twitter.com/jmsowen24/">twitter.com/jmsowen24/</Link>

                                </MenuItem>


                            </MenuList>
                        </Menu>
                    </div>
                    <div className="mb-4 w-40">
                        {/* <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
              Github
            </Button> */}
                        <Menu>
                            <MenuHandler>
                                <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
                                    Github</Button>
                            </MenuHandler>
                            <MenuList>

                                <MenuItem>
                                    <Link href="https://github.com/jamoowen/">github.com/jamoowen/</Link>

                                </MenuItem>


                            </MenuList>
                        </Menu>
                    </div>
                </div>
            </main>
        </>
    )
}
// ui-monospace', 'SFMono-Regular