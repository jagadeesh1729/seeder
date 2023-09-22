import { render,screen } from "@testing-library/react";
import IconLabel from ".";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import React from "react";

test("render IconLabel", () => {
    const element=render(<IconLabel Text="Your Payments" Icon={<InfoOutlined />}/>)
    expect(element).toBeDefined()
})

test("render IconLabel", async () => {
    render(<IconLabel Text="Your Payments" Icon={<InfoOutlined />}/>)
    const element = await screen.findByText("Your Payments")
    expect(element.textContent).toEqual("Your Payments")
})