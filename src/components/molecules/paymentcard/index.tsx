import React from "react";
import MuiTypography from "../../atoms/Typography";
import theme from "../../../themes/index";
import MuiImage from "../../atoms/image";
import { ImageBox, MuiBox, MuiBox2, MuiBox3, MuiBox4, StyledChip } from "./cssstyles";
interface Props {
  label?: string;
  img1:React.ReactNode;
  text2?:string;
  text1?:string; 
  ibutton:string;
  width?:string;
}

const PaymentCard = ({ label,img1,text2,text1,ibutton,width}: Props) => {
    const chipsx={
        backgroundColor: "accent.pink",
          color: "customBackground.elevation1",
    }
    const typosx1={
        color:theme.palette.customText?.medEmp
    }
    const typosx2={
        color:theme.palette.customText?.highEmp
    }
  return (
    <MuiBox sx={{width:width}}>
      <MuiBox2>
            <ImageBox data-testid="img">
                {img1}
            </ImageBox>
                <MuiBox3>
                    <MuiBox4>
                        <MuiTypography variant="body1" sx={typosx1}>{text1}</MuiTypography>
                        <MuiImage src={ibutton} alt="not found" />
                    </MuiBox4>
                    <MuiTypography variant="h2" sx={typosx2}>{text2}</MuiTypography>
                </MuiBox3>
      </MuiBox2>
      {label?
      <StyledChip
        label={<MuiTypography variant="body2">{label}</MuiTypography>}
        sx={chipsx}
      />:<></>
}
    </MuiBox>
  );
};

export default PaymentCard;
