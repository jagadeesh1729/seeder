import { render,screen } from "@testing-library/react"
import React from "react"
import MuiImage from "."
import '@testing-library/jest-dom'

test("Testing Image",()=>{
    render(<MuiImage src='./image.svg' alt='sample image'/>)
    const Isimage = screen.getByTestId("Image");
    expect(Isimage).toBeInTheDocument();
})
test("Testing Image",()=>{
    render(<MuiImage src='./image.svg' alt='sample image'/>)
    const Isimage = screen.getByTestId("Image");
    expect(Isimage).toHaveAttribute('alt', 'sample image');
})