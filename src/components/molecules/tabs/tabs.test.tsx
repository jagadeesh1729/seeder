import React from "react";
import { screen, render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import MuiTabs from ".";
test("No of buttons on tab Rendering or not ",()=>{
    render(<MuiTabs types={["button1","button2","button3"]} content={{"button1":"sai","button2":"wow","button3":"nice"}}/>)
    const Button=screen.getAllByRole("button")
    expect(Button).toHaveLength(3)
})

  
  