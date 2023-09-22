import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MuiTypography from '../../atoms/Typography';
import MuiIcon from '../../atoms/icon';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../themes/index';

const MailBox = styled(Box) ({
    width:'397px',
    height:'60px',
    borderRadius:'12px',
    border : `1px solid ${theme.palette.border?.lowEmp}`,
    padding:"20px 20px",
    background:theme.palette.grey[50],
})
const Stylestack1 = styled(Stack) ({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'11px',
})
const Stylestack2 = styled(Stack) ({
    display:'flex',
    flexDirection:'column',
})
const PasswordSuccessBox = () => {
    return (
        <MailBox>
            <Stylestack1>
            <MuiIcon icon={<CheckCircleOutlineIcon/>} sx={{width:'32px',height:'32px',color:theme.palette.primary.main}} />
            <Stylestack2>
            <MuiTypography sx={{color:theme.palette.customText?.highEmp}}>Password reset successful</MuiTypography>
            <MuiTypography sx={{color:theme.palette.customText?.lowEmp}}>Click on button below to proceed to login</MuiTypography>
            </Stylestack2>
            </Stylestack1>
        </MailBox>
    )
}
export default PasswordSuccessBox
