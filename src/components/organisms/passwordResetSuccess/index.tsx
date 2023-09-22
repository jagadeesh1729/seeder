import MuiTypography from '../../atoms/Typography';
import { Stack } from '@mui/material'
import { styled } from '@mui/system';
import ButtonComp from '../../atoms/button';
import React from 'react';
import theme from '../../../themes/index';
import PasswordSuccessBox from '../../molecules/passwordSuccess';
import { useNavigate } from 'react-router-dom';

export const Stack1 = styled(Stack)({
    display:'flex',
    top:'126px',
    right:'180px',
    position:'absolute',
    gap:'40px',
    width:'434px'
})
export const Stack2 = styled(Stack)({
    display:'flex',
    top:'86px',
    position:'absolute',
    gap:'20px',
    width:'434px'
})
const PasswordSucess = () => {
   const navigate=useNavigate()
    return (
        <Stack>
            <Stack1>
            <MuiTypography variant='title' sx={{color:theme.palette.customText?.highEmp}}>Forgot Password</MuiTypography>
            <Stack2>
            <PasswordSuccessBox /> 
            <ButtonComp variant='contained' onClick={()=>{navigate("/login")}} text='Login Now' height='60px' bgColor={theme.palette.purple?.[500]} sx={{color:theme.palette.white?.[500],padding:'20px 40px'}} />
            </Stack2>
            </Stack1>
        </Stack>
    )
}
export default PasswordSucess
