import { render,screen } from "@testing-library/react";
import React from "react";
import MuiTypography from ".";

test("render Typography", () => {
    const element= render(<MuiTypography children="hello"/>)
    expect(element).toBeDefined()
})

test("render with correct children", () => {
    render(<MuiTypography children="hello"/>)
    const element=screen.getByText("hello")
    expect(element.textContent).toEqual("hello")
})

test("render body1", () => {
    const element= render(<MuiTypography children="hello" variant="body1"/>)
    expect(element).toBeDefined()
})

test("render button1", () => {
    const element= render(<MuiTypography children="hello" variant="button1"/>)
    expect(element).toBeDefined()
})

test("render caption", () => {
    const element= render(<MuiTypography children="hello" variant="caption"/>)
    expect(element).toBeDefined()
})

test("render heading", () => {
    const element= render(<MuiTypography children="hello" variant="h1"/>)
    expect(element).toBeDefined()
})