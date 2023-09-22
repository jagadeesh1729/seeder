import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginBody from ".";

test("render welcome component", () => {
    const element=render(<BrowserRouter><LoginBody/></BrowserRouter>)
    expect(element).toBeDefined()
})

test("fireEvent change", () => {
    render(<BrowserRouter><LoginBody/></BrowserRouter>)
    const element = screen.getByPlaceholderText("Enter your email id")
    fireEvent.change(element,{target:{value:"computer"}})
})
test("fireEvent change", () => {
    render(<BrowserRouter><LoginBody/></BrowserRouter>)
    const element = screen.getByPlaceholderText("Enter your password")
    fireEvent.change(element,{target:{value:"computer"}})
})