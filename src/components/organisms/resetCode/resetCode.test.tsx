import React from "react";
import { screen, render,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import ResetCode from ".";
import { BrowserRouter } from "react-router-dom";
test("reset code rendering ",async()=>{
    const forgot = render(<BrowserRouter><ResetCode text1="Login"/></BrowserRouter>)
    expect(forgot).toBeDefined
 })
 test("testing button", () => {
     render(<BrowserRouter><ResetCode text1="Login"/></BrowserRouter>)
     const button = screen.getByRole("button", {name:"Reset Password"});
     expect(button).toBeInTheDocument();
     fireEvent.click(button)
     expect(button).toHaveStyle('color:#E8E8E9');
 })
 test("testing login button", () => {
     render(<BrowserRouter><ResetCode text1="Login"/></BrowserRouter>)
     const button = screen.getByRole("button", {name:"Login"});
     expect(button).toBeInTheDocument();
     fireEvent.click(button)
     expect(button).toHaveStyle('color:rgb(201, 200, 204)');
 })
 test("testing textbox", () => {
     render(<BrowserRouter><ResetCode text1="Login"/></BrowserRouter>)
     const button = screen.getByRole("textbox", {name:""});
     expect(button).toBeInTheDocument();
     fireEvent.click(button)
 })
 test("testing placeholder", () => {
     render(<BrowserRouter><ResetCode text1="Login"/></BrowserRouter>)
     const element = screen.getByPlaceholderText("Enter reset code")
     fireEvent.change(element,{target:{value:"computer"}})
 })
 test("searching for text", () => {
    render(<BrowserRouter><ResetCode text1="Login"/></BrowserRouter>)
    const element = screen.getByText("Enter Reset Code")
    expect(element).toBeInTheDocument();
})