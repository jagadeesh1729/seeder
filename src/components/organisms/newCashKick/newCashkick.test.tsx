/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import NewCashKickBody from ".";
import '@testing-library/jest-dom';
import { fireEvent, render,screen, waitFor } from "@testing-library/react";
import { BrowserRouter, Route, Router, NavigateFunction } from "react-router-dom";
import axios, { AxiosResponse } from 'axios';

test('should render contracts data in the table', async () => {
    const data = [
      {
        id: '1',
        name: 'Contract 1',
        type: 'Type 1',
        perPayment: '$10',
        termLength: { time: '3', percent: '1.5' },
        paymentAmount: '$100'
      },
      {
        id: '2',
        name: 'Contract 2',
        type: 'Type 2',
        perPayment: '$20',
        termLength: { time: '6', percent: '2.0' },
        paymentAmount: '$200'
      }
    ];
    // Mocking the axios.get method to return mock data
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    render(<BrowserRouter><NewCashKickBody /></BrowserRouter>);
    // Wait for the data to be loaded and the table to be rendered
    await waitFor(() => expect(screen.getAllByRole('cell').length).toBe(6));
    expect(screen.getByText('Contract 1')).toBeInTheDocument();
    expect(screen.getByText('Type 1')).toBeInTheDocument();
    expect(screen.getByText('Contract 2')).toBeInTheDocument();
    expect(screen.getByText('Type 2')).toBeInTheDocument();
  });
  

test("render newcashkick", () => {
    const newCashkick = render(<BrowserRouter><NewCashKickBody /></BrowserRouter>);
    expect(newCashkick).toBeDefined();
    const testid = screen.getByTestId("newCashKick")
    expect(testid).toBeInTheDocument();
    expect(testid).toHaveStyle('padding:20px 40px')
})	
test("searching for grid and button", async () => {
    render(<BrowserRouter><NewCashKickBody /></BrowserRouter>);
    const linkElement = screen.getByRole("grid");
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = screen.getByRole("button", {name:"Back"} );
    expect(linkElement2).toBeInTheDocument();
    fireEvent.click(linkElement2)
})
test("searching for text", async () => {
    render(<BrowserRouter><NewCashKickBody /></BrowserRouter>);
    const linkElement = screen.getByText("Name");
    expect(linkElement).toBeInTheDocument();
    const ele = screen.findAllByText("MuiTypography")
    expect(ele).toBeDefined();
})
test("searching for reset button", async () => {
    render(<BrowserRouter><NewCashKickBody /></BrowserRouter>);
    const linkElement1 = screen.getByRole("button", {name:"Reset"} );
    expect(linkElement1).toBeInTheDocument();
    fireEvent.click(linkElement1)
})
test("searching for button", async () => {
    render(<BrowserRouter><NewCashKickBody /></BrowserRouter>);
    const linkElement1 = screen.getByRole("button", {name:"Review your cedit"} );
    expect(linkElement1).toBeInTheDocument();
})




