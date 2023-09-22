import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import LeftNavBar from ".";
export default {
    title:'organisms/LeftNavBar',
    component: LeftNavBar,
}as ComponentMeta<typeof LeftNavBar>
const Template:ComponentStory<typeof LeftNavBar> = () => <BrowserRouter><LeftNavBar /></BrowserRouter>
export const NavBar = Template.bind({})