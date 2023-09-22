import { styled } from "@mui/system"
import React, { ReactNode } from "react"
import MuiTypography from "../../atoms/Typography"
import { Box, ThemeProvider } from "@mui/material"
import theme from "../../../themes"
import MuiIcon from "../../atoms/icon"
import ibutton from "../../../../public/assets/icons/info-circle.svg"
import MuiImage from "../../atoms/image"

interface IconLabelProps{
    Text:string,
    Icon?:ReactNode,
    typoVariant?:"title"| "h1"| "h2"|"h3"|"body1"|"body2"| "caption" | "button1"|"button2",
    typoSx?:object;
    iconSx?:object;
} 
const IconLabel = ({Text,Icon,typoSx,typoVariant,iconSx}:IconLabelProps) => {
    const Stack=styled(Box)({
        display:"flex",
        gap:"8px",
        alignItems:"center",
    })
    return(
        <ThemeProvider theme={theme}>
        <Stack>
            <MuiTypography variant={typoVariant} sx={typoSx}>{Text}</MuiTypography>
            {Icon?<MuiIcon icon={Icon} sx={iconSx}/>: <MuiImage src={ibutton} alt="not found"/>}
            
            
        </Stack>
        </ThemeProvider>
    )
}

export default IconLabel;