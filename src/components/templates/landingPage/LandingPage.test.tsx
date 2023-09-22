import { render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import LandingPageTemplate from ".";
import GreetingTop from "../../organisms/greetingTitle/index"
import LandingPageBottom from "../../organisms/paymentDetails";
import { BrowserRouter } from "react-router-dom";
test("render Landing Page", () => {
    const landing = render(<BrowserRouter><LandingPageTemplate top={<GreetingTop/>} bottom={<LandingPageBottom/>}/></BrowserRouter>);
    expect(landing).toBeDefined();
})