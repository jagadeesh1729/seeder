import React from "react"
import HeaderText from ".";
import { render } from "@testing-library/react";

test("render newcashkick", () => {
    const header = render(<HeaderText text1="New cash kick" />);
    expect(header).toBeDefined();
})