import {render} from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "."

test("render welcome component", () => {
    const element=render(<BrowserRouter><LoginPage/></BrowserRouter>)
    expect(element).toBeDefined()
})