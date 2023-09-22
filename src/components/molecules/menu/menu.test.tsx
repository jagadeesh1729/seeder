import { fireEvent, render,screen } from "@testing-library/react";
import React from "react"
import BasicList from ".";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
test("render menu", () => {
    const menu = render(<BrowserRouter><BasicList icon1={<HomeOutlinedIcon/>} children1="Home" /></BrowserRouter>);
    expect(menu).toBeDefined();
})
test("Testing Menu",()=>{
    render(<BrowserRouter><BasicList icon1={<HomeOutlinedIcon/>} children1="Home"/></BrowserRouter>)
    const menulistEl = screen.getByTestId("menulist");
    expect(menulistEl).toBeInTheDocument();
})
test("list items count", () => {
    render(<BrowserRouter><BasicList children1="Home" icon1={<HomeOutlinedIcon/>}/></BrowserRouter>)
    const menulistEl = screen.getByRole("button", {name:"Home"});
    expect(menulistEl).toBeInTheDocument();
    fireEvent.click(menulistEl)
    expect(menulistEl).toHaveStyle("color:#E8E7F0")
})
