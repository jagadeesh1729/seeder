import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import PasswordSuccessBox from ".";
test("password success box rendering ",async()=>{
   const forgot = render(<PasswordSuccessBox />)
   expect(forgot).toBeDefined()
})
test("searching for text", () => {
    render(<PasswordSuccessBox />)
    const element = screen.getByText("Password reset successful")
    expect(element).toBeInTheDocument();
})
test("finding text", () => {
    render(<PasswordSuccessBox />)
    const element = screen.getByText(/Click on button below to proceed to login/i)
    expect(element).toBeInTheDocument();
})