import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import ForgotPasswordPage from ".";
import { BrowserRouter } from "react-router-dom";
test("rendering forgot password page ",async()=>{
    const forgot = render(<BrowserRouter><ForgotPasswordPage /></BrowserRouter>)
    expect(forgot).toBeDefined
 })