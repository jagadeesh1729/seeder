import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import im from "../../../../public/assets/Images/businessAnalsis.svg"
import Panel from ".";
test("Pic loaded or not ",async()=>{
    render(<Panel img1={im} logo={im}/>)
})