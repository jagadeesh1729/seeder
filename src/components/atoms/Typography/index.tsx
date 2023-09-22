import React, { ElementType, ReactNode } from "react";
import { Typography } from "@mui/material";


interface TypographyProps{
    variant?:"title"| "h1"| "h2"|"h3"|"body1"|"body2"| "caption" | "button1"|"button2",
    children:ReactNode,
    sx?: object,
    component?:ElementType<any>,
    testId?:string,
}

const MuiTypography = ({variant,sx,children,component,testId}:TypographyProps) => (
  <Typography data-testid={testId} variant={variant} component={component?component : "p"} sx={sx}>{children}</Typography>
)

export default MuiTypography;
