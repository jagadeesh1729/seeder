import { render,screen } from "@testing-library/react"
import React from "react"
import CheckBox from "."
import '@testing-library/jest-dom'
test("Testing checkbox",()=>{
    render(<CheckBox />)
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

})