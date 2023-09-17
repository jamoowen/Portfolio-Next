"use client"

import {
    Button,
    Collapse,
    Card,
    CardBody,
    Input,
    Textarea

} from "@material-tailwind/react";

import { useState } from "react";

export function CollapsableEmailForm() {
    const [openCollapse, setOpenCollapse] = useState(false);
    const [openColor, setOpenColor] = useState("white");
    const [emailSubmitDisabled, setEmailSubmitDisabled] = useState(false)
    const [messageValidity, setMessageValidty] = useState("")
    const [validityColor, setValidityColor] = useState("font-mono text-red")


    // button color changes when collapse is opened
    const toggleOpen = () => {
        setOpenCollapse((cur) => !cur);
        setOpenColor((curColor) => (curColor === "white" ? "gray" : "white")); // Toggle color
    };

    // sends request to api (created in api/email)
    // sends formData object
    async function handleEmailClick(event) {
        event.preventDefault();

        const formData = new FormData(event.target)
        try {
            setEmailSubmitDisabled(true)

            const response = await fetch('/api/email', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            const responseData = await response.json();
    
            alert('Thanks for reaching out! I will respond to your message as soon as possible');
        } catch (err) {
            console.error(err);
            alert("We can't submit the form, try again later?");
        }
        setEmailSubmitDisabled(false)
        toggleOpen()
    };

    return (
        <>

            <Button color={openColor} fullWidth={false} size="md" className="font-mono" variant="gradient" onClick={toggleOpen}>Email</Button>
            <Collapse open={openCollapse}>
                <Card className="font-mono text-white bg-white">
                    <CardBody className="flex">

                        <form onSubmit={handleEmailClick} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6 ">
                                <label htmlFor="form-name">
                                    <Input autoComplete="name" maxLength={50} size="lg" label="Name" name="name" id="form-name" />
                                </label>
                                <label htmlFor="form-email">
                                    <Input autoComplete="email" maxLength={80} name="email" label="Email address" type="email" id="form-email" required />
                                </label>
                                <label htmlFor="form-message">
                                    <Textarea label="Message" className="" name="message" required id="form-message" />
                                </label>
                            </div>


                            <Button disabled={emailSubmitDisabled} type="submit" className="mt-6 font-mono">
                                Send mail
                            </Button>

                        </form>



                    </CardBody>
                </Card>
            </Collapse>
        </>
    )
}
//  <div className={validityColor}>
//                                 {messageValidity === true ? "Email sent!" : messageValidity === false ? "Invalid! Please ensure you've entered a valid email and a message to send" : ""}
//                             </div> 