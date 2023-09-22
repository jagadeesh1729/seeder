import { fireEvent, render,screen } from "@testing-library/react";
import React from "react";
import Welcome from ".";

test("render welcome component", () => {
    const element=render(<Welcome amount={2.3} />)
    expect(element).toBeDefined()
})
test("button", async () => {
    const handleClick=jest.fn()
    const element=render(<Welcome amount={2.3} onClick={handleClick}/>)
    const button=await screen.findByText("Learn More")
    fireEvent.click(button)
    expect(handleClick).toBeCalled()
})