import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Forgotpassword from '.';
import { BrowserRouter } from 'react-router-dom';
export default {
    title:'organisms/forgotpassword page',
    component:Forgotpassword ,
}as ComponentMeta<typeof Forgotpassword>
const Template:ComponentStory<typeof Forgotpassword>=(args)=> <BrowserRouter><Forgotpassword {...args} /></BrowserRouter>
export const Forgotpasswordpage = Template.bind({})
Forgotpasswordpage.args={
    text1:'Login',
}


