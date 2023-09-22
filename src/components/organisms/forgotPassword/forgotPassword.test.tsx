import React from "react";
import { screen, render,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Forgotpassword from ".";
import { BrowserRouter } from "react-router-dom";
test("forgot password rendering ",async()=>{
    const forgot = render(<BrowserRouter><Forgotpassword text1="Login"/></BrowserRouter>)
    expect(forgot).toBeDefined
 })
 test("testing button", () => {
     render(<BrowserRouter><Forgotpassword text1="Login"/></BrowserRouter>)
     const button = screen.getByRole("button", {name:"Reset password"});
     expect(button).toBeInTheDocument();
     fireEvent.click(button)
     expect(button).toHaveStyle('color:#E8E8E9');
 })
 test("testing login button", () => {
     render(<BrowserRouter><Forgotpassword text1="Login"/></BrowserRouter>)
     const button = screen.getByRole("button", {name:"Login"});
     expect(button).toBeInTheDocument();
     fireEvent.click(button)
     expect(button).toHaveStyle('color:rgb(201, 200, 204)');
 })
 test("searching for textbox", () => {
     render(<BrowserRouter><Forgotpassword text1="Login"/></BrowserRouter>)
     const button = screen.getByRole("textbox", {name:""});
     expect(button).toBeInTheDocument();
     fireEvent.click(button)
 })
 test("searching for text", () => {
     render(<BrowserRouter><Forgotpassword text1="Login"/></BrowserRouter>)
     const element = screen.getByPlaceholderText("Enter your email id")
     fireEvent.change(element,{target:{value:"computer"}})
 })