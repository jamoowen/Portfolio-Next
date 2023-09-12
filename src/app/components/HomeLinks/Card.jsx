import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import Image from "next/image";
import { useState } from "react";

// const bgColors = ["light-blue-600", "light-blue-400", "purple-400", "red-400"]


export default function CardDefault({ name, path, detail }) {


  return (
    <div className="flex bg-red-900 font-pixel mb-2 hover:bg-matrix-50">
      {name}
    </div>
  );
}

{/* <Card variant="gradient" className={` w-96 h-24 bg-gradient-to-tr from-sky-50 to-sky-200 hover:bg-red-900`} shadow={true}>
<CardBody>

  <Typography variant="h5"  color="blue-gray" className="font-pixel mb-2">
    {name}
  </Typography>
  <Typography>
    {detail[name]}
  </Typography>
</CardBody>

</Card> */}