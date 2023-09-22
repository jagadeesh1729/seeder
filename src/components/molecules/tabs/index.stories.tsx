import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MuiTabs from ".";
import { BrowserRouter } from "react-router-dom";
import MuiTypography from "../../atoms/Typography";
export default {
    title:"molecules/Tab",
    component:MuiTabs,
}as ComponentMeta<typeof MuiTabs>

const Template : ComponentStory<typeof MuiTabs>= (args) => <BrowserRouter><MuiTabs {...args}/></BrowserRouter>
export const tabs = Template.bind({})
tabs.args={
    types:["My contact","My cash Kicks"],
    content:{"My contact":<MuiTypography>Hello</MuiTypography>,"My cash Kicks":<MuiTypography>TAbs here</MuiTypography>}
}