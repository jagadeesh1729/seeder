import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MuiModal from ".";
import '@testing-library/jest-dom/extend-expect';

test("render modal",()=>{
    const abc=jest.fn()
    const element = render(<BrowserRouter><MuiModal showModel={true} set={abc}/></BrowserRouter>)
    expect(element).toBeDefined()
})

test("fireEvent change", () => {
    const abc=jest.fn()
    render(<BrowserRouter><MuiModal showModel={true} set={abc}/></BrowserRouter>)
    const element = screen.getByPlaceholderText("Ex: markerting expenses")
    fireEvent.change(element,{target:{value:"computer"}})
})

test("fireEvent change button", async () => {
    const abc=jest.fn()
    render(<BrowserRouter><MuiModal showModel={true} set={abc}/></BrowserRouter>)
    const element = screen.getByPlaceholderText("Ex: markerting expenses")
    fireEvent.change(element,{target:{value:"computer"}})
    const button = screen.getByRole('button',{name:'Cancel'})
    expect(button).toBeDefined()
    fireEvent.click(button)
})

const mockCashKick = {
    id: 1,
    userId: 1,
    cashkickName: undefined,
    contracts: [],
    selectedAmount: 0,
    paybackAmount: 0,
    rateAmount: 0,
    total: 0,
    status: '',
    maturity: '',
    totalReceived: 0,
    totalFinanced: 0
  }

test('closes the modal when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<BrowserRouter><MuiModal showModel={true} set={handleClose} /></BrowserRouter>);
    const closeButton = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });