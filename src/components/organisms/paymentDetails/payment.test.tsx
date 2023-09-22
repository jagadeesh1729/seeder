import { render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import LandingPageBottom from ".";
import { BrowserRouter } from "react-router-dom";
test("render LandingPageBottom", () => {
    
    const LandingBottom = render(<BrowserRouter><LandingPageBottom/></BrowserRouter>);
    expect(LandingBottom).toBeDefined();
})
