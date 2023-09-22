import { Stack,styled } from '@mui/material';
import React from 'react'
import MuiImage from '../../atoms/image';
import MuiTypography from '../../atoms/Typography';
import theme from "../../../themes/index"
interface Props{
    src1:string;
    src2:string;
    src3:string;
    children1?:string;
    children2?:string;
    children3?:string;
    sx?:object;
}
 const Muistack3 = styled(Stack)({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'18px',
    width:'429px',
    height:'96px',
    
});
export const BgIcon = styled(Stack)({
    display: "flex",
    alignItems:'center',
    textAlign:'center',
    justifyContent: "center",
    flexDirection:'column',
    padding: "20px 40px",
    width: "35px",
    height: "35px",
    background: theme.palette.grey[100],
    border: `1px solid ${theme.palette.border?.lowEmp}`,
    borderRadius: "12px",
    flex: "none",
    color:theme.palette.customText?.medEmp,
    order: 0,
    flexGrow: 1,
    "&:hover":{
        scale:"1.1",
    },
    cursor:'pointer'
  });
const LogoGroup = ({src1,src2,src3,children1,children2,children3,sx}:Props) => {
  return (
    <Muistack3 sx={sx}>
                    <BgIcon onClick={()=>{location.href="https://www.google.co.in/"}} data-testid="google">
                        <MuiImage src={src1} alt="google logo" />
                        <MuiTypography variant='button1'>{children1}</MuiTypography>
                    </BgIcon>
                    <BgIcon onClick={()=>{location.href="https://www.google.co.in/"}} data-testid="stripe">
                        <MuiImage src={src2} alt="stripe logo" />
                        <MuiTypography variant='button1'>{children2}</MuiTypography>
                    </BgIcon>
                    <BgIcon onClick={()=>{location.href="https://www.google.co.in/"}} data-testid="xero">
                        <MuiImage src={src3} alt="xero logo" />
                        <MuiTypography variant='button1'>{children3}</MuiTypography>
                    </BgIcon>
                </Muistack3>
  )
}

export default LogoGroup