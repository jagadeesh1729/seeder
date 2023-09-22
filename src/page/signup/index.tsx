import { Box } from '@mui/material'
import React from 'react'
import Login from '../../components/templates/login'
import Panel from '../../components/molecules/panel'
import logo from "../../../public/assets/icons/seederlogo.svg"
import money from "../../../public/assets/Images/money.svg"
import MuiSignUp from '../../components/organisms/signup'
const SignUp = () => {
  return (
    <Box>
        <Login left={ <Panel img1={money} logo={logo} title="Seeder" />}
        right={ <MuiSignUp/>}
        />
       
    </Box>
  )
}

export default SignUp