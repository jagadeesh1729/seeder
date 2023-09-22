import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from ".";
import GreetingTitle from "../greetingTitle";
export default {
    title:'organisms/Header',
    component: Header,
}as ComponentMeta<typeof Header>
const Template:ComponentStory<typeof Header> = (args) => <BrowserRouter><Header {...args} /></BrowserRouter>
export const HeaderStack = Template.bind({})
HeaderStack.args={
    title:<GreetingTitle/>,
}