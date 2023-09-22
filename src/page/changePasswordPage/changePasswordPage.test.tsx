import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import ChangePasswordPage from ".";
import { BrowserRouter } from "react-router-dom";
test("rendering change password page ",async()=>{
    const forgot = render(<BrowserRouter><ChangePasswordPage /></BrowserRouter>)
    expect(forgot).toBeDefined
 })