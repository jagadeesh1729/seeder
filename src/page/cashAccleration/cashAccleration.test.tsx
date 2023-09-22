import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CashAcclerationPage from ".";

test("render page",()=>{
    const element = render(<BrowserRouter><CashAcclerationPage /></BrowserRouter>)
    expect(element).toBeDefined()
})