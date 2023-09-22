import { render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import LandingPage from ".";
import { BrowserRouter } from "react-router-dom";
test("render home Page", () => {
    const home = render(<BrowserRouter><LandingPage/></BrowserRouter>);
    expect(home).toBeDefined();
})