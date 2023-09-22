import { render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import GreetingTitle from ".";
test("render Greeting Title", () => {
    const greeting = render(<GreetingTitle/>);
    expect(greeting).toBeDefined();
})