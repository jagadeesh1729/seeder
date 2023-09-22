import { Chip,ChipProps } from "@mui/material";
import React from "react";
const MuiChip = (props:ChipProps) => {
    return(
        <>
        <Chip {...props}/>
        </>
    )
}

export default MuiChip;