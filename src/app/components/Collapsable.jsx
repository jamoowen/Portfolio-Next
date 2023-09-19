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

import { useState } from "react";

export function Collapsable({ btnName, text, _className }) {
    const [openCollapse, setOpenCollapse] = useState(false);
    const [openColor, setOpenColor] = useState("white");
    

    const toggleOpen = () => {
        setOpenCollapse((cur) => !cur);
        setOpenColor((curColor) => (curColor === "white" ? "gray" : "white")); // Toggle color
      };
      
    return (
        <>

            <Button color={openColor} fullWidth={true} size="lg" className={`${_className} font-mono`} style={{textTransform:"none"}} variant="gradient" onClick={toggleOpen}>{btnName}</Button>
            <Collapse open={openCollapse}>
                <Card className=" text-white bg-transparent">
                    <CardBody >
        
                            {text}
               
                    </CardBody>
                </Card>
            </Collapse>
        </>
    )
}