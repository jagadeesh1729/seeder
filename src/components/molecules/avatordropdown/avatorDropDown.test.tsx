import {  fireEvent, render,screen, waitFor } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import AvatorDropDown from ".";
import logout from "../../../../public/assets/icons/add.svg"
import { BrowserRouter, MemoryRouter } from "react-router-dom";
const data1 = [
    { text: "Manage Subscriptions", icon: "-1" },
    { text: "Help", icon: "-1" },
  ];
test("render menu", () => {
    const menu = render(<BrowserRouter><AvatorDropDown data={data1}/></BrowserRouter>);
    expect(menu).toBeDefined();
})
test("Testing Menu",()=>{
    render(<BrowserRouter><AvatorDropDown data={[]}/></BrowserRouter>)
    const menulistEl = screen.getByTestId("avatorlist");
    expect(menulistEl).toBeInTheDocument();
})
const data2 = [
    { text: "Log Out", icon: logout,route:'/login' },
  ];
test("Checking Button Navigation Login",async ()=>{
    render(<MemoryRouter><AvatorDropDown data={data2}/></MemoryRouter>);
    const button1=screen.getByLabelText(/Log out/i)
    //expect(button1).toHaveStyle("color:#A5A5A6")
    fireEvent.click(button1)
    await waitFor(() => expect(window.location.pathname).toBe('/'));
})
