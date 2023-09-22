import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import ResetCodePage from ".";
import { BrowserRouter } from "react-router-dom";
test("testing reset code page",async()=>{
    const forgot = render(<BrowserRouter><ResetCodePage /></BrowserRouter>)
    expect(forgot).toBeDefined
 })