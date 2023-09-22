import { Box, Stack, styled } from "@mui/material";
import MuiChip from "../../atoms/chip";
import theme from "../../../themes/index";
export const StyledChip = styled(MuiChip)({
    position: "absolute",
    height: "25px",
    top: "20px",
    right: "20px",
    padding: "4px 8px",
    color: theme.palette.customBackground?.elevation1,
    backgroundColor: theme.palette.accent?.pink,
    borderRadius: "4px",
  });
 export const MuiBox = styled(Box)({
   boxSizing: "border-box",
    position: "relative",
    height: "240px",
    //width: "340px",
    borderRadius: "12px",
    padding: "32px",
    background: theme.palette.customBackground?.elevation1,
    border: `1px solid ${theme.palette.border?.lowEmp}`,
    minWidth:'33%'
  });
  export const ImageBox=styled(Box)(({
      width: "80px",
  height: "80px",
  background: theme.palette.grey[100],
  border: `1px solid border.500`,
  borderRadius: '12px',
  boxSizing: 'border-box',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  gap: "20px",
  }))
 export const MuiBox2=styled(Box)(({
      height: "168px",
  width: "276px",
  position:'relative',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px",
  gap: "24px",
  marginTop:'10px',
  }))
 export const MuiBox3=styled(Stack)(({
      height: "64px",
      width: "164px",
      left: "0px",
      whiteSpace: "nowrap",
      padding:'0',
      top:'134px',
  }))
 export const MuiBox4=styled(Box)(({
      height:"22px",
      width: "164px",
      left:'0',
      top: "104px",
      display:'flex',
      gap:'8px',
      flexDirection: "row",
      alignItems: "center",
  }))