import Login from "../../components/templates/login";
import Panel from "../../components/molecules/panel";
import LoginBody from "../../components/organisms/login";
import seederlogo from "../../../public/assets/icons/seederlogo.svg"
import businessAnalsis from "../../../public/assets/Images/businessAnalsis.svg"
import React from "react";
const LoginPage =()=>{
    return(
        <Login left={<Panel img1={businessAnalsis} logo={seederlogo} title="Seeder"/>} right={<LoginBody />}/>
    )
}

export default LoginPage;