import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import img from "../../../../public/assets/icons/add.svg"
import PaymentCard from ".";
test("Checking text loaded or not",()=>{
    render(<PaymentCard ibutton={img} img1="img1.svg" label="None"/>)
    const Text=screen.getByText(/None/i)
    expect(Text).toBeInTheDocument()
})
test("checking Img",()=>{
    render(<PaymentCard ibutton={img} img1="img1.svg" label="None"/>)
    const imgTest=screen.getByTestId("img")
    expect(imgTest).toBeInTheDocument()

})