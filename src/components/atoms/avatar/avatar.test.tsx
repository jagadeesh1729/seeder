import { render,screen } from "@testing-library/react"
import React from "react"
import MuiAvatar from "."
import '@testing-library/jest-dom';

test("Testing Avatar",()=>{
    render(<MuiAvatar />)
    const Avatar = screen.getByTestId("avatar");
    expect(Avatar).toBeInTheDocument();
})