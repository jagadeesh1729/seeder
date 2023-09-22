import { SvgIcon } from "@mui/material";
import React from "react";
interface IconProps {
    icon:React.ReactNode;
    sx?:object;
}
const MuiIcon = ({icon,sx}:IconProps) => {
    return(
        <SvgIcon sx={sx} data-testid='icon'>
            {icon}
        </SvgIcon> 
    )
}
export default MuiIcon