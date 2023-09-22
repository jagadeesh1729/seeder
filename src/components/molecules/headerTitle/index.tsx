import React from 'react';
import MuiTypography from '../../atoms/Typography';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Style1 = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:'5px',
    padding:'0px 40px',
})
interface TitleProps {
    text1:string;
    text2?:string;
}

const HeaderText = ({text1,text2}:TitleProps) => {
    return(
        <Style1>
            <MuiTypography sx={{color:'#E8E7F0'}} variant="title">{text1}</MuiTypography>
            <MuiTypography sx={{color:'#A5A5A6'}} variant='h3'>{text2?text2:"Lets setup a new cash kick to power your Saas"}</MuiTypography>
        </Style1>
    )

}
export default HeaderText