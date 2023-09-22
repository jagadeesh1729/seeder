import React from "react";
import { screen, render,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import PasswordSucess from ".";
import { BrowserRouter } from "react-router-dom";
test("password success rendering ",async()=>{
   const forgot = render(<BrowserRouter><PasswordSucess/></BrowserRouter>)
   expect(forgot).toBeDefined
})
test("testing button", () => {
    render(<BrowserRouter><PasswordSucess/></BrowserRouter>)
    const button = screen.getByRole("button", {name:"Login Now"});
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(button).toHaveStyle('color:#E8E8E9');
})
test("searching for text", () => {
    render(<BrowserRouter><PasswordSucess/></BrowserRouter>)
    const element = screen.getByText("Forgot Password")
    expect(element).toBeInTheDocument();
})