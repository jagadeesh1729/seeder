import { fireEvent, render, screen, waitFor, } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CashAcclerationBody from "."

test("render body",()=> {
    const element = render(<BrowserRouter><CashAcclerationBody /></BrowserRouter>)
    expect(element).toBeDefined()
})

test("test button",()=>{
    render(<BrowserRouter><CashAcclerationBody /></BrowserRouter>)
    const button = screen.getByRole("button", {name:"New Cash Kick"});
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(window.location.pathname).toEqual("/newcashkick");
})

test('should rende table', async () => {
    const data = [
        {
                  "id": 6,
                  "name": "Contract 6",
                  "status":"Available",
                  "totalFinanced":"-",
                  "type": "Monthly",
                  "perPayment": 6000,
                  "termLength": {
                    "time": 12,
                    "percent": 12
                  },
                  "paymentAmount": 63360
                },
                {
                    "id": 7,
                    "name": "Contract 6",
                    "status":"Available",
                    "totalFinanced":"-",
                    "type": "Monthly",
                    "perPayment": 6000,
                    "termLength": {
                      "time": 12,
                      "percent": 12
                    },
                    "paymentAmount": 63360
                  }
    ];
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    render(<BrowserRouter><CashAcclerationBody /></BrowserRouter>);
    await waitFor(() => expect(screen.getAllByRole('cell').length).toBe(18));
    screen.debug()
  });