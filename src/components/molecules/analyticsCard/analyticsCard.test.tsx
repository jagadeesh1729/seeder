import { render,screen } from "@testing-library/react";
import React from "react"
import Datablock from ".";
import '@testing-library/jest-dom';

test("render analytics card", () => {
    const datacardel = render(<Datablock />);
    expect(datacardel).toBeDefined();
})
test('render text1 in data card', () => {
    render(<Datablock text1="Term cap" />)
    const text = screen.getByText("Term cap")
    expect(text).toBeInTheDocument();
})