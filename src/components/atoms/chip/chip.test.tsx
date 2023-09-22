import { render,screen } from "@testing-library/react";
import React from "react";
import MuiChip from ".";

test("render chip", () => {
    const chip=render(<MuiChip label="available"/>)
    expect(chip).toBeDefined()
})

test("render the correct label", () => {
    render(<MuiChip label="available"/>)
    const text= screen.getByText("available")
    expect(text.textContent).toEqual("available")
})

test("render Outlined chip", () => {
    const chip=render(<MuiChip label="available" variant="outlined"/>)
    expect(chip).toBeDefined()
})

test("render Filled chip", () => {
    const chip=render(<MuiChip label="available" variant="filled"/>)
    expect(chip).toBeDefined()
})