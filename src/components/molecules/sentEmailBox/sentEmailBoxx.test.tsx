import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import EmailSentBox from ".";
test("emailsent box rendering ",async()=>{
   const forgot = render(<EmailSentBox email="sample@gmail.com" />)
   expect(forgot).toBeDefined
})
test("searching for text", () => {
    render(<EmailSentBox email="sample@gmail.com" />)
    const element = screen.getByText("Reset email sent")
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle("color:#E8E7F0")
})