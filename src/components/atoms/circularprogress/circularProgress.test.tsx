import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import MuiCircularProgress from ".";
import theme from "../../../themes/index"
test("Checking % in CirculrProgress", () => {
	render(<MuiCircularProgress progressValue={60}/>);

	const ProgressPercentage = screen.getByTestId("CircularDataDisplay");
	expect(ProgressPercentage).toBeInTheDocument();
	screen.debug();
});
test("Checking percentage color",()=>{
	render(<MuiCircularProgress progressValue={60}/>);
	const ProgressPercentage=screen.getByText("60%");
	expect(ProgressPercentage).toHaveStyle({ color:theme.palette.accent?.aquaBlue });
})

  
