import { render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import SignUp from ".";
import { BrowserRouter } from "react-router-dom";

test("render SignUp Page", () => {
    const Signup = render(<BrowserRouter><SignUp/></BrowserRouter>);
    expect(Signup).toBeDefined();
})