import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiTypography from ".";


export default {
    title: "atoms/Typography",
    component:MuiTypography,
}as ComponentMeta<typeof MuiTypography>
const Template:ComponentStory<typeof MuiTypography> = (args) => <MuiTypography {...args} />

export const heading1 = Template.bind({});
export const body1 = Template.bind({});
export const subtitle1 = Template.bind({});
heading1.args = {
    children:"heading1",
    variant:"h1",
};
body1.args = {
    children:"body1",
    variant:"body1",
};
subtitle1.args = {
    children:"body1",
    variant:"h2",
};

