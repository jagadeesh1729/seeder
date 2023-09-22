import { render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import LeftNavBar from ".";
import { BrowserRouter } from "react-router-dom";

test("render Left Nav Bar", () => {
    const LeftNav = render(<BrowserRouter><LeftNavBar/></BrowserRouter>);
    expect(LeftNav).toBeDefined();
})