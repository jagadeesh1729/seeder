import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import CashKickCard from "./index"
import '@testing-library/jest-dom'
test("checking amount has loaded or not",()=>{
    render(<CashKickCard text2={2345}/>)
    const Text=screen.getByText(/2345/i)
    expect(Text).toBeInTheDocument()
})
test("Checking button on click",()=>{
    render(<CashKickCard buttonText="SUBMIT"/>)
    const Button = screen.getByRole("button",{name:/SUBMIT/})
    fireEvent.click(Button)
})