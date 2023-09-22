import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ResetCode from '.';
import { BrowserRouter } from 'react-router-dom';
export default {
    title:'organisms/resetCode',
    component:ResetCode ,
}as ComponentMeta<typeof ResetCode>
const Template:ComponentStory<typeof ResetCode>=(args)=><BrowserRouter><ResetCode {...args} /></BrowserRouter>
export const resetCode = Template.bind({})
resetCode.args={
    text1:'Login'
}