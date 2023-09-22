import { render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import GreetingTitle from "../greetingTitle";
import Header from ".";
test("render Greeting Title", () => {
    const greeting = render(<Header title={<GreetingTitle/>}/>);
    expect(greeting).toBeDefined();
})