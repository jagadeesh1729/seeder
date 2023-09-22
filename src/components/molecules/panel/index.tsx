import React from 'react'
import MuiImage from "../../atoms/image/index";
import MuiTypography from '../../atoms/Typography';
import { MuiBox,MuiStack,MuiStack2} from './cssstyles';
interface Props{
    logo:string;
    img1:string;
    title?:string;
    sx?:object;
}

const Panel = ({logo,img1,title,sx}:Props) => {
    const typographySx={
        color:'customText.highEmp'
    }
  return (
    <MuiBox sx={sx}>
        <MuiStack>
            <MuiImage src={logo} alt="not found"  data-testid="logo"/>
            <MuiTypography variant='title' sx={typographySx}>{title}</MuiTypography>
        </MuiStack>
        <MuiStack2>
        <MuiImage src={img1} alt="not found"/>
        </MuiStack2>
    </MuiBox>
  )
}

export default Panel