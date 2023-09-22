import { render } from "@testing-library/react";
import React from "react";
import Title from ".";

test("render Title",()=>{
    const element = render(<Title title="it is the title" description="it is the description"/>)
    expect(element).toBeDefined()
})