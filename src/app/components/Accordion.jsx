import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function CustomAccordion({blogHeader, blogBody}) {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(false);
 
  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion className="font-mono text-sm lg:text-2xl text-white" open={alwaysOpen}>
        <AccordionHeader className="text-sky-600 hover:text-sky-400 text-sm lg:text-2xl" onClick={handleAlwaysOpen}>{blogHeader}</AccordionHeader>
        <AccordionBody className="font-mono text-sm lg:text-2xl text-white">
       {blogBody}
        </AccordionBody>
      </Accordion>
    
    </>
  );
}