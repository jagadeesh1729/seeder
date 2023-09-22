import { render,screen } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import Login from ".";
import { BrowserRouter } from "react-router-dom";
test("render Login org", () => {
    const LogIn = render(<BrowserRouter><Login/></BrowserRouter>);
    expect(LogIn).toBeDefined();
})
test("checking background colour of grid",()=>{
    render(<BrowserRouter><Login/></BrowserRouter>)
    const grid=screen.getByTestId("grid")
    expect(grid).toHaveStyle('background:#201F24')
})