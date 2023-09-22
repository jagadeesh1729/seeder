import React from "react";
import { screen, render } from "@testing-library/react";
import ButtonComp from ".";
import '@testing-library/jest-dom'
test("Button text check", () => {
	render(<ButtonComp text="Click Me"  />);

	const textElement = screen.getByText(/click me/i);
	expect(textElement).toBeInTheDocument();
});
test("Button checking Active",()=>{
	render(<ButtonComp active/>);
	const bgcolor=screen.getByTestId("buttonId")
	expect(bgcolor).toHaveStyle('background:#393552')
})
test("Button checking not active Color",()=>{
	render(<ButtonComp isDisable/>);
	const bgcolor=screen.getByTestId("buttonId")
	expect(bgcolor).toHaveStyle('background:#6c5dd3,opacity:0.56,color:')
})


