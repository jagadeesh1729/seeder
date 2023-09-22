import { Box } from "@mui/material";
import React from "react";
import LandingPageTemplate from "../../components/templates/landingPage";
import LandingPageBottom from "../../components/organisms/paymentDetails";
import GreetingTitle from "../../components/organisms/greetingTitle";
const LandingPage = () => {
  return (
    <Box>
      <LandingPageTemplate top={<GreetingTitle/>}
      bottom={<LandingPageBottom/>}
      />
    </Box>
  );
};

export default LandingPage;
