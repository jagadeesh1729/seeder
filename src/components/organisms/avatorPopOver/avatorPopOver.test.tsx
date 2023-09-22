import { fireEvent, render } from "@testing-library/react";
import React from "react"
import '@testing-library/jest-dom';
import AvatorPopOver from ".";
import { MemoryRouter } from "react-router";
describe("AvatarPopOver", () => {
    it("should display avatar and dropdown menu", () => {
      const { getByTestId, getByText, queryByText } = render(<MemoryRouter><AvatorPopOver /></MemoryRouter>);
      const avatarButton = getByTestId("avatar-button");
  
      expect(avatarButton).toBeInTheDocument();
  
      fireEvent.click(avatarButton);
  
      const dropdownItem1 = getByText("Manage Subscriptions");
      const dropdownItem2 = getByText("Help");
      const dropdownItem3 = getByText("Settings");
      const dropdownItem4 = getByText("Log Out");
  
      expect(dropdownItem1).toBeInTheDocument();
      expect(dropdownItem2).toBeInTheDocument();
      expect(dropdownItem3).toBeInTheDocument();
      expect(dropdownItem4).toBeInTheDocument();
  
      fireEvent.click(avatarButton);
  
      expect(queryByText("Manage Subscriptions")).not.toBeNull();
      expect(queryByText("Help")).not.toBeNull();
      expect(queryByText("Settings")).not.toBeNull();
      expect(queryByText("Log Out")).not.toBeNull();
    });
    it("should display avatar and dropdown menu, and close when backdrop is clicked", () => {
        const setAnchorEl = jest.fn();
        const { getByTestId, queryByText } = render(<MemoryRouter><AvatorPopOver /></MemoryRouter>);
    
        const avatarButton = getByTestId("avatar-button");
        fireEvent.click(avatarButton);
    
        const backdrop = getByTestId("backdrop");
        fireEvent.click(backdrop);
    
        const dropdownItems = ["Manage Subscriptions", "Help", "Settings", "Log Out"];
    
        dropdownItems.forEach(item => {
          expect(queryByText(item)).not.toBeNull();
        });
        expect(setAnchorEl).toHaveBeenCalledTimes(0);
      });
    });


  
