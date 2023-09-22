import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AvatorPopOver from ".";
export default {
    title:'organisms/avatorPopOver',
    component: AvatorPopOver,
}as ComponentMeta<typeof AvatorPopOver>
const Template:ComponentStory<typeof AvatorPopOver> = () => <BrowserRouter><AvatorPopOver /></BrowserRouter>
export const AvatorList = Template.bind({})