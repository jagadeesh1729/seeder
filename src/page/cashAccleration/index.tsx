import LandingPageTemplate from "../../components/templates/landingPage";
import CashAcclerationBody from "../../components/organisms/cashAccelerationBody";
import React from "react";
import Title from "../../components/molecules/title";

const CashAcclerationPage = () => {
  return(
    <LandingPageTemplate top={<Title title="Cash accleration" description="Place to create new cash kicksto run your business" />} bottom={<CashAcclerationBody />} />
  )
}
export default CashAcclerationPage;