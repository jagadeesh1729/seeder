import { render,screen } from "@testing-library/react";
import React from "react";
import MuiSlider from ".";

test("render the slider",()=>{
    const element = render(<MuiSlider />)
    expect(element).toBeDefined()
})

test("default value test",()=>{
    const element = render(<MuiSlider defaultValue={40} />)
    expect(element).toBeDefined()
})