import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MuiSignUp from ".";
export default {
    title:'organisms/SignUp',
    component: MuiSignUp,
}as ComponentMeta<typeof MuiSignUp>
const Template:ComponentStory<typeof MuiSignUp> = () => <BrowserRouter><MuiSignUp /></BrowserRouter>
export const SignUp = Template.bind({})