import MuiTypography from "../../atoms/Typography";
import { Stack } from "@mui/material";
import { Stack1, Stack2, Stack3 } from "./styles";
import MuiTextfield from "../../atoms/textfield";
import ButtonComp from "../../atoms/button";
import theme from "../../../themes/index";
import { useState } from "react";
import EmailSentBox from "../../molecules/sentEmailBox";
import MuiImage from "../../atoms/image";
import emailImg from "../../../../public/assets/icons/email.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
interface PaswwordProps {
  text1: string;
}
const Forgotpassword = ({ text1 }: PaswwordProps) => {
    const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(true);
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
    if (validEmail.test(email)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  };
  const [show, setShow] = useState(false);
  return (
    <Stack>
      <Stack1>
        <MuiTypography
          variant="title"
          sx={{ color: theme.palette.customText?.highEmp }}
        >
          Forgot Password
        </MuiTypography>
        <MuiTypography
          variant="h3"
          sx={{ color: theme.palette.customText?.lowEmp, width: "400px" }}
        >
          No worries, we will send you link to your email id to reset your
          password
        </MuiTypography>
      </Stack1>
      <Stack3>
        {show === true ? (
          <EmailSentBox email={email} />
        ) : (
          <MuiTextfield
            placeholder="Enter your email id"
            iconStart={<MuiImage src={emailImg} alt="not found" />}
            value={email}
            onChange={(e) => handleChange(e)}
          />
        )}
        <ButtonComp
          variant="contained"
          text={show === true ? "continue" : "Reset password"}
          width="434px"
          height="60px"
          bgColor={theme.palette.purple?.[500]}
          sx={{ color: theme.palette.white?.[500],padding:'20px 40px' }}
          onClick={() => {
            setShow(true);
            if(show ===true){
              navigate("/resetcode")
            }
          }}
          isDisable={emailErr}
        />

        <Stack2>
          <MuiTypography
            variant="h3"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            Go back to
          </MuiTypography>
          <ButtonComp variant="text" text={text1} onClick={()=>{navigate("/login")}} buttonTextSx={{color:"#B4A9FF"}} buttonTextVarient="button1"
/>
        </Stack2>
      </Stack3>
    </Stack>
  );
};
export default Forgotpassword;
