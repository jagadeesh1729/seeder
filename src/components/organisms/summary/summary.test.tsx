import { fireEvent, render,screen } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import SummaryCard from ".";
import MuiSlider from "../../atoms/slider";

test("render Summary card", () => {
    const summaryCard = render(<SummaryCard payout={30000} onSliderChange={jest.fn()} wantSlider={true} updateData={jest.fn()} />);
    expect(summaryCard).toBeDefined();
    const linkElement = screen.getByRole("button", {name:"Reset"} );
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement)
})
test("test component", () => {
    render(<SummaryCard payout={30000} onSliderChange={jest.fn()} wantSlider={true} updateData={jest.fn()} />);  
    const ele = screen.findAllByText("MuiTypography")
    expect(ele).toBeDefined();
    const testid = screen.getByTestId("summaryCard")
    expect(testid).toBeInTheDocument();
})
test("testing test-id", () => {
    render(<SummaryCard payout={30000} onSliderChange={jest.fn()} wantSlider={true} updateData={jest.fn()} />);  
    const testid = screen.getByTestId("summaryCard")
    expect(testid).toBeInTheDocument();
    expect(testid).toHaveStyle('color: "#B4A9FF"')
})
test("testing summary card",  async () => {
    render(<SummaryCard payout={30000} onSliderChange={jest.fn()} wantSlider={true} updateData={jest.fn()} />)
    const role = screen.getByRole("slider", {name:""});
    const role1 = screen.getByRole("separator", {name:""});
    expect(role).toBeInTheDocument();
    expect(role).toHaveStyle('padding:0px')
    fireEvent.click(role)
    fireEvent.click(role1)
})
test("render Summary card button", () => {
    render(<SummaryCard payout={30000} onSliderChange={jest.fn()} wantSlider={true} updateData={jest.fn()}/>)
    const linkElement1 = screen.getByRole("button", {name:"Review your cedit"} );
    expect(linkElement1).toBeInTheDocument();
    fireEvent.click(linkElement1)
})
test('changing the slider value should call the onChange handler', () => {
  const payout = 500;
  const amount = 1000;
  const onSliderChange = jest.fn();
  const { getByRole } = render(<MuiSlider value={payout} onChange={(event, number) => onSliderChange(number)} max={amount} />);
  const slider = getByRole('slider');
  const newValue = 750;
  fireEvent.change(slider, { target: { value: newValue } });
  expect(onSliderChange).toHaveBeenCalledWith(newValue);
});


describe('Test Suite for Component', () => {
  it('Test modelClick function to set the hide state to true', () => {
    render(<SummaryCard  payout={30000} onSliderChange={jest.fn()} wantSlider={true} updateData={jest.fn()} />);
    const button = screen.getByTestId('summaryCard');
    fireEvent.click(button);
    expect(screen.getByTestId('summaryCard')).not.toHaveAttribute('hidden');
  });
  it('Test the sum of payment amounts of selected data', () => {
    const selectedData = [
      { id: 1, paymentAmount: 100 },
      { id: 2, paymentAmount: 200 },
      { id: 3, paymentAmount: 300 },
    ];
    render(<SummaryCard  payout={30000} onSliderChange={jest.fn()} wantSlider={true} selectedData={selectedData}updateData={jest.fn()} />);
    const sumElement = screen.getByTestId('summaryCard');
    expect(sumElement).toHaveTextContent('600');
  });
});


