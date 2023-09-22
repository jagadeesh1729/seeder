import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../../organisms/header";
import LeftNavBar from "../../organisms/leftNavBar";
interface Props {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}
const LandingPageTemplate = ({ top, bottom }: Props) => {
  return (
    <Box>
      <Grid container spacing={28} sx={{ backgroundColor: "#19181C" }}>
        <Grid item xs={2}>
          <LeftNavBar />
        </Grid>
        <Grid item xs={10}  container flexDirection="column">
          <Grid item >
            <Grid>
              <Header title={top} />
            </Grid>
            <Grid item>
              <Grid>{bottom}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPageTemplate;
