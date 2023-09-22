import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MuiTypography from '../../atoms/Typography';
import MuiIcon from '../../atoms/icon';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../themes/index';

interface EmailBoxProps {
    email:string,
}
const MailBox = styled(Box) ({
    width:'397px',
    height:'101px',
    borderRadius:'12px',
    border : `1px solid ${theme.palette.border?.lowEmp}`,
    padding:"20px 20px",
    background:'#3A3A3D',
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
const Stylestack3 = styled(Stack) ({
    display:'flex',
    flexDirection:'row',
    gap:'3px'

})

const EmailSentBox = ({email}:EmailBoxProps) => {
    return (
        <MailBox>
            <Stylestack1>
            <MuiIcon icon=<CheckCircleOutlineIcon/> sx={{width:'32px',height:'32px',color:theme.palette.primary.main}} />
            <Stylestack2>
            <MuiTypography sx={{color:theme.palette.customText?.highEmp}}>Reset email sent</MuiTypography>
            <Stylestack3>
            <MuiTypography sx={{color:theme.palette.customText?.lowEmp}}>We have sent mail to</MuiTypography>
            <MuiTypography sx={{color:theme.palette.primary.main}}>{email}</MuiTypography>
            </Stylestack3>
            <MuiTypography sx={{color:theme.palette.customText?.lowEmp}}>with reset password instructions</MuiTypography>
            </Stylestack2>
            </Stylestack1>
        </MailBox>
    )

}
export default EmailSentBox
