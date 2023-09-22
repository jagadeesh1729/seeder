import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import PasswordSuccessPage from ".";
import { BrowserRouter } from "react-router-dom";
test("testing password success page",async()=>{
    const forgot = render(<BrowserRouter><PasswordSuccessPage /></BrowserRouter>)
    expect(forgot).toBeDefined
 })