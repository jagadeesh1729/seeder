import React from "react";
import { Box, Button} from "@mui/material";
import ButtonProp from "./props";
import styled from "@emotion/styled";
import MuiTypography from "../Typography";
import theme from "../../../themes/index"
export function ButtonComp<C extends React.ElementType>(
  {width,
  height,
  endIcon,
  startIcon,
  variant,
  text,
  bgColor,
  sx,
  isDisable,
  buttonTextVarient,
  buttonTextSx,
  onClick,
  active,
}:ButtonProp<C>){
  const stylesForButton = {
    width: "100%",
    alignItems: "center",
    backgroundColor:active?'#393552':bgColor,
    color:active?"#B4A9FF":' #C9C8CC',
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: `${bgColor}`,
    },
    "&:active":{
      border:"1px solid #B4A9FF",
    },
    ...sx,
  };
  const stylesForBox = {
    width: width,
    height: height,
  };
  const MuiButton= styled(Button)(({
      "&.Mui-disabled":{
        backgroundColor:theme.palette.purple?.[500],
        color:theme.palette.white?.[500],
        opacity: "0.56",
      },
      "&.MuiButton-root":{
      // width: "100%",
      //     height: "100%",
          textTransform: "none",
          backgroundColor:`${bgColor}`,
          "&:hover": {
           backgroundColor:`${bgColor}`,
          },
          
        }
  }))
  return (
    <Box sx={stylesForBox}>
      <MuiButton
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        sx={stylesForButton}
        disabled={isDisable}
        onClick={onClick}
        data-testid="buttonId"
      >
        <MuiTypography  sx={buttonTextSx}variant={buttonTextVarient}>{text}</MuiTypography>   
      </MuiButton>
    </Box>
  );
}


export default ButtonComp;
