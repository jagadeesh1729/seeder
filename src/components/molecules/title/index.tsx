import { Box } from "@mui/material"
import {styled} from "@mui/system"
import React from "react"
import MuiTypography from "../../atoms/Typography"

const StyleStack = styled(Box)({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding:"0px",
    gap:"2px",
})

interface TopProps{
    title:string,
    description:string,
}

const Title = ({title,description}:TopProps) => {
    return(
        <StyleStack>
            <MuiTypography variant="title" sx={{color:"#E8E7F0"}}>{title}</MuiTypography>
            <MuiTypography variant="h3" sx={{color:"#A5A5A6"}}>{description}</MuiTypography>
        </StyleStack>
    )
}

export default Title;