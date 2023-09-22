import React from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import theme from "./themes/index";
import LoginPage from "./page/login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./page/signup";
import LandingPage from "./page/landingPage";
import CashAcclerationPage from "./page/cashAccleration";
import NewCashKickPage from "./page/newCashKickPage";
import ForgotPasswordPage from "./page/forgotPage";
import ResetCodePage from "./page/resetcodePage";
import ChangePasswordPage from "./page/changePasswordPage";
import PasswordSuccessPage from "./page/passwordSuccessPage";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/cashaccleration" element={<CashAcclerationPage/>}/>
        <Route path="/newcashkick" element={<NewCashKickPage/>}/>
        <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
        <Route path="/resetcode" element={<ResetCodePage/>}/>
        <Route path="/changepassword" element={<ChangePasswordPage/>}/>
        <Route path="/successfull" element={<PasswordSuccessPage/>}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
