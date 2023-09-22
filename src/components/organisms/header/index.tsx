import { Grid, Box } from "@mui/material";
import React from "react";
import AvatorPopOver from "../../organisms/avatorPopOver";
interface Props {
  title: React.ReactNode | undefined;
}
const Header = ({ title }: Props) => {
  return (
    <Box>
      <Grid container sx={{ display: "flex", justifyContent: "space-between",paddingTop:'40px',paddingRight:'31px'}}>
        <Grid item>{title}</Grid>
        <Grid item>
          <AvatorPopOver />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
