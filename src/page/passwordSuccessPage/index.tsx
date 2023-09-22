import Login from '../../components/templates/login';
import Panel from '../../components/molecules/panel';
import seederlogo from '../../../public/assets/icons/seederlogo.svg';
import password from '../../../public/assets/icons/passwordImg.svg';
import PasswordSucess from '../../components/organisms/passwordResetSuccess';
import React from 'react';

const PasswordSuccessPage = () => {
    return(
        <Login left={<Panel img1={password} logo={seederlogo} title="seeder"sx={{height:'741px'}} />} right={<PasswordSucess />} />
    )
}
export default PasswordSuccessPage//[3]