import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import google from "../../../../public/assets/icons/google.svg"
import xero from "../../../../public/assets/icons/xero.svg"
import arrow from "../../../../public/assets/icons/arrowButton.svg"
import LogoGroup from ".";
test("Logo Group ", () => {
	const buttonComp=render(<LogoGroup src1={google} src2={xero} src3={arrow}/>);
    expect(buttonComp).toBeDefined();
});
test("button onclick event on google",()=>{
    render(<LogoGroup src1={google} src2={xero} src3={arrow}/>);
    const b1=screen.getByTestId("google")
    fireEvent.click(b1)
})
test("button onclick event on google",()=>{
    render(<LogoGroup src1={google} src2={xero} src3={arrow}/>);
    const b1=screen.getByTestId("stripe")
    fireEvent.click(b1)
})
test("button onclick event on google",()=>{
    render(<LogoGroup src1={google} src2={xero} src3={arrow}/>);
    const b1=screen.getByTestId("xero")
    fireEvent.click(b1)
})