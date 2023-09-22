import { render,screen } from "@testing-library/react"
import React from "react"
import MuiIcon from "."
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import '@testing-library/jest-dom';

test("Testing Icon",()=>{
    render(<MuiIcon icon=<MarkEmailUnreadOutlinedIcon/>/>)
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
});