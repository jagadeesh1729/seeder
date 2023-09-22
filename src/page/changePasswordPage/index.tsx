import Login from '../../components/templates/login';
import Panel from '../../components/molecules/panel';
import seederlogo from '../../../public/assets/icons/seederlogo.svg';
import password from '../../../public/assets/icons/passwordImg.svg';
import ResetCode from '../../components/organisms/changePassword';
import React from 'react';

const ChangePasswordPage = () => {
    return(
        <Login left={<Panel img1={password} logo={seederlogo} title="seeder"sx={{height:'741px'}} />} right={<ResetCode text1='Change Password'/>} />
    )
}
export default ChangePasswordPage