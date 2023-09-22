import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import React from 'react'
import MuiImage from "../../atoms/image";
import MuiTypography from "../../atoms/Typography";
import logo from "../../../../public/assets/icons/seederlogo.svg";
import flash from "../../../../public/assets/icons/flash.svg";
import home from "../../../../public/assets/icons/home.svg";
import coin from "../../../../public/assets/icons/coin.svg";
import theme from "../../../themes/index";
import BasicList from "../../molecules/menu";
const MuiStack = styled(Stack)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "2px 4px",
    gap: "8px",
     maxWidth: "210px",
  });
  const MuiBox = styled(Box)({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px 20px",
    position:"fixed",
    msOverflowX:"hidden",
    gap: "40px",
    maxWidth:'250px',
    background: theme.palette.customBackground?.elevation1,
    borderRight: `1px solid #222124`,
    maxHeight:'100vh',
  });
const LeftNavBar = () => {
  return (
    <MuiBox>
            <MuiStack>
              <MuiImage src={logo} alt="not found" />
              <MuiTypography
                variant="title"
                sx={{ color: theme.palette.customText?.highEmp }}
              >
                Seeder
              </MuiTypography>
            </MuiStack>
            <BasicList
              children1="Home"
              children2="Cash Accleration"
              icon1={<MuiImage src={home} alt="Not fpund" />}
              icon2={<MuiImage src={coin} alt="Not fpund" />}  
             route1="/home"
             route2="/cashaccleration" 
            />
            <MuiStack>
              <MuiImage src={flash} alt="not found" />
              <MuiTypography
                variant="button2"
                sx={{ color: theme.palette.customText?.lowEmp }}
              >
                Watch how to
              </MuiTypography>
            </MuiStack>
          </MuiBox>
  )
}

export default LeftNavBar

