import { render } from "@testing-library/react";
import React from "react"
import DataCard from ".";
import '@testing-library/jest-dom';

test("render analytics card", () => {
    const datacardel = render(<DataCard />);
    expect(datacardel).toBeDefined();
})
