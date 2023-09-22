import MuiTypography from '../../atoms/Typography';
import React, { useState } from 'react';
import { Stack, IconButton } from '@mui/material';
import { Stack1, Stack2 } from './styles';
import MuiTextfield from '../../atoms/textfield';
import ButtonComp from '../../atoms/button';
import theme from '../../../themes/index';
import MuiImage from '../../atoms/image';
import eye from "../../../../public/assets/icons/eye.svg";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import passwordLogo from "../../../../public/assets/icons/password.svg";
import { useNavigate } from 'react-router-dom';

interface ChangePaswwordProps {
    text1:string,
}
const ChangePassword = ({text1}:ChangePaswwordProps) => {
    const navigate=useNavigate()
    const [password1,setpassword1]=useState("")
    const [password,setpassword]=useState("")
    const [password1Err, setpwd1Err] = useState(true);
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };

  const handleChange1=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setpassword1(e.target.value)
    if(validPassword.test(password1)){
        setpwd1Err(false)
    }
    else{
        setpwd1Err(true)
    }
}
const handleChange2=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setpassword(e.target.value)
}
    return (
       <>
       <Stack data-testid="show-password-button">
            <Stack2>
            <MuiTypography variant='title' sx={{color:theme.palette.customText?.highEmp}}>Change Password</MuiTypography> 
            < Stack1>
            <MuiTextfield placeholder='Enter new password' type={showPassword ? 'text' : 'password' } iconStart={<MuiImage src={passwordLogo} alt="not found" />} iconEnd={<IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{showPassword ? (<VisibilityOffOutlinedIcon />) : (<MuiImage alt="not found" src={eye}/>)}</IconButton>} value={password1} onChange={e => handleChange1(e)} />
            <MuiTextfield placeholder='Re-Enter password' iconStart={<MuiImage src={passwordLogo} alt="not found" />} value={password} onChange={e => handleChange2(e)} />
            <MuiTypography variant='body2' sx={{color:'#A5A5A6'}}>Password must contain at least 7 letters and 1 number</MuiTypography>
            </Stack1>
            <ButtonComp variant='contained' text={text1} height='60px' bgColor={theme.palette.purple?.[500]} sx={{color:theme.palette.white?.[500],padding:'20px 40px'}} isDisable={password1Err || password !== password1} onClick={()=>{navigate("/successfull")}}/>
            </Stack2>
        </Stack>
       </>
    )
}
export default ChangePassword;
