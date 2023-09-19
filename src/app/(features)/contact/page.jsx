
"use client";

import {
    Button,

} from "@material-tailwind/react";

import { CollapsableEmailForm } from "@/app/components/CollapsableEmail";

export default function Contact() {

    const contactList = [
        { label: 'LinkedIn', path: 'https://www.linkedin.com/in/jamesowen24' },
        { label: 'GitHub', path: 'https://github.com/jamoowen' },
        { label: 'Twitter', path: 'https://twitter.com/jmsowen24' },
        { label: 'Medium', path: 'https://medium.com/@jamesowen.dev'},
    ]


    return (
        <main className="flex min-h-screen flex-col items-left">

            <div className="ml-10 p-5 mb-4">
                <h1 className="text-3xl font-bold font-pixel text-matrix-50 mb-4">
                    contact
                </h1>
                <p className="font-mono mb-4">
                    You can contact me through any of the below methods
                </p>
                {/* <a href="mailto:jamow.owen@gmail.com">TRY</a> */}

                <ul role="list" className="divide-slate-200">
                    <div className="mb-4" >
                        <CollapsableEmailForm />
                    </div>

                    {contactList.map((l, i) => (
                        <div className="mb-4" key={i}> {/* Add the key prop here */}
                            <a href={l.path} target="_blank">
                                <Button color="white" fullWidth={false} size="md" className="font-mono" variant="gradient" href={l.path}>
                                    {l.label}
                                </Button>
                            </a>
                        </div>
                    ))}
                </ul>
            </div>

        </main>

    )
}


// export default function Home() {
//     return (
//         <>
//             <main className="flex min-h-screen flex-col items-left">

//                 <div className="ml-10 p-5">
//                     <h1 className="text-3xl font-bold font-pixel text-matrix-50">
//                         contact
//                     </h1>
//                     <p className="font-mono">
//                         You can contact me through any of the below methods
//                     </p>

//                 </div>
//                 <div className="flex flex-col ml-10 p-5 font-mono">
//                     <div className="mb-4 w-40">
//                         <Menu>
//                             <MenuHandler>
//                                 <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
//                                     Email
//                                 </Button>
//                             </MenuHandler>
//                             <MenuList>

//                                 <MenuItem>
//                                 <a
//   href="mailto:011jamesowen@gmail.com?subject=Website%20Interest&body=Hi%20James%2C%20after%20having%20a%20look%20through%20your%20portfolio%2C%20I%20wanted%20to%20reach%20out!"
// >Email me</a>


//                                 </MenuItem>


//                             </MenuList>
//                         </Menu>
//                     </div>
//                     <div className="mb-4 w-40">
//                         <Menu>
//                             <MenuHandler>
//                                 <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
//                                     LinkedIn</Button>
//                             </MenuHandler>
//                             <MenuList>

//                                 <MenuItem>
//                                     <Link href="https://www.linkedin.com/in/jamesowen24/" target="_blank">linkedin.com/in/jamesowen24/</Link>

//                                 </MenuItem>


//                             </MenuList>
//                         </Menu>
//                     </div>
//                     <div className="mb-4 w-40">
//                         <Menu>
//                             <MenuHandler>
//                                 <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
//                                     Twitter</Button>
//                             </MenuHandler>
//                             <MenuList>

//                                 <MenuItem>
//                                     <Link href="https://twitter.com/jmsowen24/" target="_blank">twitter.com/jmsowen24/</Link>

//                                 </MenuItem>


//                             </MenuList>
//                         </Menu>
//                     </div>
//                     <div className="mb-4 w-40">
//                         {/* <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
//               Github
//             </Button> */}
//                         <Menu>
//                             <MenuHandler>
//                                 <Button color="white" fullWidth={true} size="md" className="font-mono" variant="gradient">
//                                     Github</Button>
//                             </MenuHandler>
//                             <MenuList>

//                                 <MenuItem>
//                                     <Link href="https://github.com/jamoowen/" target="_blank">github.com/jamoowen/</Link>

//                                 </MenuItem>


//                             </MenuList>
//                         </Menu>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }
// // ui-monospace', 'SFMono-Regular