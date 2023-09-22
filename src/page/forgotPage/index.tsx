import Login from '../../components/templates/login';
import Panel from '../../components/molecules/panel';
import seederlogo from '../../../public/assets/icons/seederlogo.svg';
import password from '../../../public/assets/icons/passwordImg.svg';
import Forgotpassword from '../../components/organisms/forgotPassword';
import React from 'react';

const ForgotPasswordPage = () => {
    return(
        <Login left={<Panel img1={password} logo={seederlogo} title="seeder"sx={{height:'741px'}} />} right={<Forgotpassword text1='Login'/>} />
    )
}
export default ForgotPasswordPage