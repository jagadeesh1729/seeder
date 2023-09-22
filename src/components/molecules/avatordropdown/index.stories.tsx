import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AvatorDropDown from ".";
export default {
    title:'molecules/avatorDropDown',
    component: AvatorDropDown,
}as ComponentMeta<typeof AvatorDropDown>
const Template:ComponentStory<typeof AvatorDropDown> = (args) => <BrowserRouter><AvatorDropDown {...args} /></BrowserRouter>
export const AvatorList = Template.bind({})
  const data1 = [
    { text: "Manage Subscriptions", icon: "-1" },
    { text: "Help", icon: "-1" },
  ];
AvatorList.args ={
    data:data1
}