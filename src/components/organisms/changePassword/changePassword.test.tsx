import React from "react";
import { screen, render,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import ChangePassword from ".";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
test("change password rendering ",async()=>{
   const forgot = render(<BrowserRouter><ChangePassword text1="change password"/></BrowserRouter>)
   expect(forgot).toBeDefined
})
test("testing button", () => {
    render(<BrowserRouter><ChangePassword text1="change password"/></BrowserRouter>)
    const button = screen.getByRole("button", {name:"change password"});
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(button).toHaveStyle('color:#E8E8E9');
})
test("testing text box", () => {
    render(<BrowserRouter><ChangePassword text1="change password"/></BrowserRouter>)
    const button = screen.getByRole("textbox", {name:""});
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
})
test("fireEvent change for text", () => {
    render(<BrowserRouter><ChangePassword text1="change password"/></BrowserRouter>)
    const element = screen.getByPlaceholderText("Enter new password")
    fireEvent.change(element,{target:{value:"computer"}})
})
test("fireEvent change", () => {
    render(<BrowserRouter><ChangePassword text1="change password"/></BrowserRouter>)
    const element = screen.getByPlaceholderText("Re-Enter password")
    fireEvent.change(element,{target:{value:"computer"}})
})
test("searching for text", () => {
    render(<BrowserRouter><ChangePassword text1="change password"/></BrowserRouter>)
    const element = screen.getByText("Change Password")
    expect(element).toBeInTheDocument();
})
it('should toggle showPassword state when "show password" button is clicked', () => {
    const { getByTestId } = render(<BrowserRouter><ChangePassword text1="change password"/></BrowserRouter>);
    const showPasswordButton = getByTestId('show-password-button');
    fireEvent.click(showPasswordButton);
    expect(screen.getByRole("button", {name:"change password"}).getAttribute('type')).toBe('button');
    fireEvent.click(showPasswordButton);
    expect(screen.getByRole("button", {name:""}).getAttribute('type')).toBe('button');
  });
 
  
  test('button is enabled when passwords match and meet the password requirements', () => {
    render(
      <BrowserRouter>
        <ChangePassword text1="Submit" />
      </BrowserRouter>
    );
    const newPasswordInput = screen.getByPlaceholderText('Enter new password');
    const reenteredPasswordInput = screen.getByPlaceholderText('Re-Enter password');
    const submitButton = screen.getByText('Submit');

    userEvent.type(newPasswordInput, 'newPassword1');
    userEvent.type(reenteredPasswordInput, 'newPassword1');

    expect(submitButton).toBeEnabled();
  });

  test('handleChange1 function updates password1 and sets password1Err correctly', () => {
    render(
      <BrowserRouter>
        <ChangePassword text1="Submit" />
      </BrowserRouter>
    );
    const newPasswordInput = screen.getByPlaceholderText('Enter new password');
    
    fireEvent.change(newPasswordInput, { target: { value: 'newPassword1' } });

    expect(newPasswordInput).toHaveValue('newPassword1');
    
    fireEvent.change(newPasswordInput, { target: { value: 'new' } });

    expect(newPasswordInput).toHaveValue('new');
    expect(screen.getByText(/Password must contain/)).toBeVisible();
  });

