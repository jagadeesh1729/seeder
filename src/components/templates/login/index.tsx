import { Grid } from "@mui/material";
import React from "react";
import theme from "../../../themes/index";
interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
}
const Login = ({ left, right }: Props) => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{ background: theme.palette.customBackground?.elevation1,overflow:'hidden'}}
      data-testid="grid"
    >
      <Grid item xs={6} sx={{maxHeight:'100vh'}}>
        {left}
      </Grid>
      <Grid item xs={6} sx={{maxHeight:'100vh'}}>
        {right}
      </Grid>
    </Grid>
  );
};
export default Login;
