import MuiTypography from '../../atoms/Typography';
import { Stack } from '@mui/material';
import MuiTextfield from '../../atoms/textfield';
import ButtonComp from '../../atoms/button';
import React from 'react';
import theme from '../../../themes/index';
import { useState } from 'react';
import { StyleStack1, Stack2, Stack3 } from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

interface PaswwordProps {
    text1:string,
}
const ResetCode = ({text1}:PaswwordProps) => {
    const navigate=useNavigate()
    const [code, setCode] = useState('')
    const [codeError, setcodeError] = useState(true);
    const validCode = new RegExp('^(?=.?[0-9]).{7,}$');
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCode(e.target.value)
        if (validCode.test(code)) {
            setcodeError(false);
         }
         else{
            setcodeError(true)
         } 
    }
    return (
        <Stack>
            <StyleStack1>
                <MuiTypography variant='title' sx={{color:theme.palette.customText?.highEmp}}>Enter Reset Code</MuiTypography>
                <MuiTypography variant='h3' sx={{color:theme.palette.customText?.lowEmp, width:'400px'}}>Please enter reset code sent to your email to proceed further</MuiTypography>
            </StyleStack1>
            <Stack3>
            <MuiTextfield placeholder='Enter reset code' iconStart={<MoreHorizIcon />} value={code} onChange={e => handleChange(e)} />
            <ButtonComp variant='contained' text='Reset Password' height='60px' bgColor={theme.palette.purple?.[500]} sx={{color:theme.palette.white?.[500],padding:'20px 40px'}} isDisable={codeError} onClick={()=>{navigate("/changepassword")}} />
            <Stack2>
                <MuiTypography variant='h3' sx={{color:theme.palette.customText?.lowEmp}}>Go back to</MuiTypography>
                <ButtonComp variant="text" text={text1} onClick={()=>{navigate("/login")}} buttonTextSx={{color:"#B4A9FF"}} buttonTextVarient="button1"/>

            </Stack2>
            </Stack3>
        </Stack>
    )
}
export default ResetCode
