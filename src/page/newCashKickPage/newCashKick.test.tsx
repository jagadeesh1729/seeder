import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import NewCashKickPage from ".";
import { BrowserRouter } from "react-router-dom";
test("testing newCashKick page",async()=>{
    const forgot = render(<BrowserRouter><NewCashKickPage /></BrowserRouter>)
    expect(forgot).toBeDefined
 })