import {
  Content,
  StyleLogin,
  TextIconFrame,
  Frame1,
  StyleLine,
  StyleTag,
  Frame2,
  Frame4,
} from "./styles";
import MuiImage from "../../atoms/image";
import MuiTypography from "../../atoms/Typography";
import theme from "../../../themes";
import MuiTextfield from "../../atoms/textfield";
import ButtonComp from "../../atoms/button";
import { useState } from "react";
import emailIcon from "../../../../public/assets/icons/directNotification.svg";
import lock from "../../../../public/assets/icons/lock.svg";
import { IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import google from "../../../../public/assets/icons/google.svg";
import stripe from "../../../../public/assets/icons/stripe.svg";
import xero from "../../../../public/assets/icons/xero.svg";
import LogoGroup from "../../molecules/logogroup";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBody = () => {
  const navigate = useNavigate();
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
    <StyleLogin>
      <Content>
        <TextIconFrame>
          <MuiTypography
            variant="title"
            sx={{ color: theme.palette.customText?.highEmp }}
          >
            Login to Seeder ✨
          </MuiTypography>
          <MuiTypography
            variant="h3"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            Enter your mail id and password to login
          </MuiTypography>
        </TextIconFrame>
        <Frame1>
          <MuiTextfield
            placeholder="Enter your email id"
            iconStart={<MuiImage src={emailIcon} alt="stripe logo" />}
            value={email}
            onChange={(e) => handleChange1(e)}
          />
          <MuiTextfield
            placeholder="Enter your password"
            iconStart={<MuiImage src={lock} alt="stripe logo" />}
            type={showPassword ? "text" : "password"}
            iconEnd={
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </IconButton>
            }
            value={password}
            onChange={(e) => handleChange2(e)}
          />
          <ButtonComp
            text="Forgot password?"
            onClick={()=>{navigate("/forgotpassword")}}
            variant="text"
            sx={{ color: "#B4A9FF" }}
            width="151px"
          />
          <ButtonComp
            text="Continue"
            variant="contained"
            onClick={() => {
              navigate("/home");
            }}
            sx={{ padding: "20px 40px", color: "#E8E8E9" }}
            height="60px"
            bgColor={theme.palette.purple?.[500]}
            isDisable={emailErr || pwdError}
          />
        </Frame1>
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
              Don’t have an account?
            </MuiTypography>
            <ButtonComp
              text="Sign Up"
              variant="text"
              sx={{ padding: "4px 12px", color: "#B4A9FF" }}
              onClick={() => {
                navigate("/signup");
              }}
            />
          </Frame4>
        </Frame2>
      </Content>
    </StyleLogin>
  );
};

export default LoginBody;
