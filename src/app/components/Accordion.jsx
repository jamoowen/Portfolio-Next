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
      <Accordion open={alwaysOpen}>
        <AccordionHeader className="text-sky-800 hover:text-sky-500" onClick={handleAlwaysOpen}>{blogHeader}</AccordionHeader>
        <AccordionBody className="text-white">
       {blogBody}
        </AccordionBody>
      </Accordion>
    
    </>
  );
}