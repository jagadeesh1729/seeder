import React from "react";
import ButtonComp from "../../atoms/button";
import MuiTypography from "../../atoms/Typography";
import { MuiBox, MuiStack } from "./cssstyles";
import theme from "../../../themes/index"
interface Props {
  text1?: string;
  text2?: string| number;
  buttonText?: string;
  height?:string;
  buttonOnClick?:(event?: React.MouseEvent<HTMLButtonElement>) => void;
  width?:string;
}
const CashKickCard = ({text1,text2,buttonText,height,buttonOnClick,width}: Props) => {
  const typrography1Sx = {
    color: "customText.highEmp",
    width: "157px",
  };
  const typrography2Sx = {
    color: "customText.lowEmp",
    width: "242px",
    display:'inline',
  };
  const buttonSx = {
    padding: "20px 34px",
  };
  const buttonTextsx = {
    color: "white.500",
  };
  return (
    <MuiBox sx={{height:height,width:width}}>
      <MuiStack>
        <MuiTypography sx={typrography1Sx} variant="h2">
          {text1}
        </MuiTypography>
        <MuiTypography sx={typrography2Sx} variant="body2">
        You have upto <MuiTypography sx={{display:'inline',color:theme.palette.customText?.highEmp}} variant="body1">{text2}</MuiTypography> available for a new cash advance
        </MuiTypography>
        <ButtonComp
        width="276px"
          text={buttonText}
          variant="contained"
          buttonTextVarient="button1"
          sx={buttonSx}
          buttonTextSx={buttonTextsx}
          bgColor="purple.500"
          onClick={buttonOnClick}
        />
      </MuiStack>
    </MuiBox>
  );
};

export default CashKickCard;
