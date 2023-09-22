import { fireEvent, render,screen, waitFor} from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import MuiSignUp from ".";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("render SignUp org", () => {
    const signUp = render(<BrowserRouter><MuiSignUp/></BrowserRouter>);
    expect(signUp).toBeDefined();
})
test("Checking textfeild ",()=>{
    render(<BrowserRouter><MuiSignUp/></BrowserRouter>);
    const signup=screen.getByPlaceholderText(/Email Address/i)
    fireEvent.change(signup,{target:{value:'jagadeesh@gmail.com'}})
    expect(signup.getAttribute("value")).toBe("jagadeesh@gmail.com")
})
test("Checking Password ",()=>{
    render(<BrowserRouter><MuiSignUp/></BrowserRouter>);
    const password=screen.getByPlaceholderText(/Password/i)
    fireEvent.change(password,{target:{value:'rockstar@1729'}})
    expect(password.getAttribute("value")).toBe("rockstar@1729")
})
test("Checking Button Navigation Login",async ()=>{
    render(<MemoryRouter><MuiSignUp/></MemoryRouter>);
    const button1=screen.getByRole("button",{name:/Login/i})
    fireEvent.click(button1)
    await waitFor(() => expect(window.location.pathname).toBe('/'));
  
})
test("Checking SignUp Button Navigation",async ()=>{
    render(<MemoryRouter><MuiSignUp/></MemoryRouter>);
    const button2=screen.getByRole("button",{name:/Sign Up/i})
    fireEvent.click(button2)
    await waitFor(() => expect(window.location.pathname).toBe('/'));
})
test("checking icon buton",()=>{
    render(<BrowserRouter><MuiSignUp/></BrowserRouter>);
    const button=screen.getByLabelText(/iconButton/i)
    const preventDefault = jest.fn();
    const event = { preventDefault };
    fireEvent.mouseDown(button)
    expect(preventDefault).not.toHaveBeenCalled();
})