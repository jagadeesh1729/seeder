import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PasswordSucess from '.';
export default {
    title : 'organisms/passwordSuccess',
    component: PasswordSucess,
}
export const passwordSetSuccessful = () =><BrowserRouter><PasswordSucess /></BrowserRouter> 
