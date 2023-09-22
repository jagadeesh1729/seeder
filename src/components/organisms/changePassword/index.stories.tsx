import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChangePassword from '.';
import { BrowserRouter } from 'react-router-dom';
export default {
    title:'organisms/changePassword',
    component:ChangePassword ,
}as ComponentMeta<typeof ChangePassword>
const Template:ComponentStory<typeof ChangePassword>=(args)=><BrowserRouter><ChangePassword {...args} /></BrowserRouter>
export const changePassword = Template.bind({})
changePassword.args={
    text1:'change password',
}