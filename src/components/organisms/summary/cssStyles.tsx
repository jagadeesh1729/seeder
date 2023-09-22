import { Box, Stack, styled } from "@mui/material";
import theme from "../../../themes/index";

export const MuiBox1 = styled(Box)({
    backgroundColor: theme.palette.customBackground?.elevation1,
    border: `1px solid ${theme.palette.border?.lowEmp}`,
    borderRadius: "12px",
    padding: "32px",
    width: "365px",
    height:'515px',
    boxSizing: "border-box",
    gap:'20px',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start'
  });
 export const MuiStack1 = styled(Stack)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "12px",
    width: "276px",
    height: "56px",
  });
 export const StackBox1 = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: "0px",
    gap: "12px",
    width: "276px",
    height: "29px",
  });