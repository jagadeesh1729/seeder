import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../themes/index";
import styled from "@emotion/styled";
export const MuiBox = styled(Box)({
  boxSizing: "border-box",
  backgroundColor: theme.palette.customBackground?.elevation1,
  border: `1px solid ${theme.palette.border?.lowEmp}`,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "20px 40px",
  gap: "20px",
});
export const MuiStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px",
  gap: "12px",
});
