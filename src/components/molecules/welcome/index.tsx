import ButtonComp from "../../atoms/button";
import MuiTypography from "../../atoms/Typography";
import banner from "../../../../public/assets/Images/banner.svg"
import {
    Content,
    Stack,
    StyleModal,
} from "./styles"
import { ThemeProvider } from "@emotion/react";
import theme from "../../../themes"
import React from "react";

interface WelcomeProps{
    amount:number,
    onClick?:() => void
}
const Welcome = ({amount,onClick}:WelcomeProps) => {
    const am = `$${amount}M`
    return(
        <ThemeProvider theme={theme}>
          <StyleModal sx={{backgroundImage:`url(${banner})`,width:'750px',backgroundSize:'cover',height:'190px'}}>
        <Content>
          <Stack>
            <MuiTypography variant="h2" sx={{ color: "customText.main" }}>
              Congratulations you are ready to start!
            </MuiTypography>
            <MuiTypography variant="body1" sx={{ color: "customText.highEmp" }}>
              You are approved for funding. We are ready to advance you upto{" "}
              <MuiTypography
                component="span"
                variant="body1"
                sx={{ color: "customText.main" }}
              >{am}</MuiTypography>
            </MuiTypography>
          </Stack>
          <ButtonComp
            text="Learn More"
            onClick={onClick}
            variant="outlined"
            sx={{ padding: "20px",width:'max-content'}}
            buttonTextVarient="button1"
            buttonTextSx={{ color: "#E8E8E9" }}
          />
        </Content>
      </StyleModal>
        </ThemeProvider>
    )
}
export default Welcome;