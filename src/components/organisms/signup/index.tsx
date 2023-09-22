import {IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import MuiTextfield from "../../atoms/textfield";
import MuiTypography from "../../atoms/Typography";
import smile from "../../../../public/assets/icons/smile.svg";
import directNotification from "../../../../public/assets/icons/directNotification.svg";
import passwordLogo from "../../../../public/assets/icons/password.svg";
import eye from "../../../../public/assets/icons/eye.svg";
import MuiImage from "../../atoms/image";
import { styled } from "@mui/material";
import ButtonComp from "../../atoms/button";
import LogoGroup from "../../molecules/logogroup";
import google from "../../../../public/assets/icons/google.svg";
import stripe from "../../../../public/assets/icons/stripe.svg";
import xero from "../../../../public/assets/icons/xero.svg";
import theme from "../../../themes/index";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";
const MuiStack = styled(Stack)({
  width: "434px",
  height: "208px",
  gap: "20px",
  display: "flex",
  flexDirection: "column",
});
const MuiText = styled(MuiTextfield)({
  height: "56px",
  width: "434px",
  padding: "16px 15px 16px 15px",
});
const StyleLine = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  isolation: "isolate",
  width:'423px',
  marginTop:'90px',
});
const StyleTag = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 8px",
  gap: "10px",
  order: 0,
  zIndex: 1,
});
const Frame2 = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0px",
  gap: "32px",
});
const Frame4 = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  padding: "0px",
});
const StyleLogin = styled("div")({
  display: "flex",
  padding: "96px 208px 64px 154px",
  background: theme.palette.customBackground?.elevation1,
  paddingBottom: "40px",
});
const Content = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0px",
  gap: "35px",
});
interface Props{
  sx?:object;
}
const MuiSignUp = ({sx}:Props) => {
  const naviagte = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailErr, setEmailErr] = useState(true);
  const [pwdError, setPwdError] = useState(true);
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleChange1 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setemail(e.target.value);
    if (validEmail.test(email)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
    if (validPassword.test(password)) {
      setPwdError(false);
    } else {
      setEmailErr(true);
    }
  };
  const handleChange2 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setpassword(e.target.value);
    if (validEmail.test(email)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
    if (validPassword.test(password)) {
      setPwdError(false);
    } else {
      setEmailErr(true);
    }
  };
  return (
    <StyleLogin sx={sx}>
      <Content>
        <Stack
          sx={{
            width: "434px",
            height: "42px",
          }}
        >
          <MuiTypography
            variant="h1"
            sx={{ color: theme.palette.customText?.highEmp }}
          >
            Sign Up ✨
          </MuiTypography>
        </Stack>
        <MuiStack>
          <MuiText
            placeholder="Your Name"
            iconStart={<MuiImage src={smile} alt="not found" />}
          />
          <MuiText
            placeholder="Email Address"
            iconStart={<MuiImage src={directNotification} alt="not found" />}
            value={email}
            onChange={(e) => handleChange1(e)}
          />
          <MuiText
            placeholder="Password"
            iconStart={<MuiImage src={passwordLogo} alt="not found" />}
            type={showPassword ? "text" : "password"}
            iconEnd={
              <IconButton
              aria-label="iconButton"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <MuiImage alt="not found" src={eye} />
                )}
              </IconButton>
            }
            value={password}
            onChange={(e) => handleChange2(e)}
          />
          <ButtonComp
            text="Sign Up"
            variant="contained"
            sx={{
              padding: "20px 40px",
            }}
            bgColor={theme.palette.purple?.[500]}
            isDisable={emailErr || pwdError}
            onClick={() => {
              naviagte("/home");
            }}
          />
        </MuiStack>

        <StyleLine>
          <hr
            style={{
              width: "190px",
              height: "0px",
              border: "0.5px solid #413F4D",
              order: 0,
            }}
          />
          <StyleTag>
            <MuiTypography
              variant="body1"
              sx={{ color: theme.palette.customText?.medEmp }}
            >
              Or
            </MuiTypography>
          </StyleTag>
          <hr
            style={{
              width: "190px",
              height: "0px",
              border: "0.5px solid #413F4D",
              order: 0,
            }}
          />
        </StyleLine>

        <Frame2>
          <LogoGroup
            src1={google}
            children1="Google"
            children2="Stripe"
            children3="Xero"
            src2={stripe}
            src3={xero}
          />
          <Frame4>
            <MuiTypography
              variant="h3"
              sx={{ color: theme.palette.customText?.lowEmp }}
            >
              Already have an account?
            </MuiTypography>
            <ButtonComp
              text="Login"
              buttonTextVarient="button1"
              buttonTextSx={{ color: "#B4A9FF" }}
              onClick={() => {
                naviagte("/login");
              }}
            />
          </Frame4>
        </Frame2>
      </Content>
    </StyleLogin>
  );
};

export default MuiSignUp;
