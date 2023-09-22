import { Box } from '@mui/material';
import React from 'react';
import LandingPageTemplate from '../../components/templates/landingPage';
import HeaderText from '../../components/molecules/headerTitle';
import Datagrid from '../../components/organisms/newCashKick';
const NewCashKickPage = () => {
    return (
        <Box>
            <LandingPageTemplate top= {<HeaderText text1='New Cash Kick'/>} bottom={<Datagrid/>} />
        </Box>
    )
}
export default NewCashKickPage