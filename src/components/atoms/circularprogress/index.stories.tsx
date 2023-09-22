import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MuiCircularProgress from ".";
export default {
    title:"atoms/CircularProgressBar",
    component:MuiCircularProgress,
}as ComponentMeta<typeof MuiCircularProgress>

const Template:ComponentStory<typeof MuiCircularProgress>= (args) => <MuiCircularProgress {...args}/>
export const CircularProgress1 = Template.bind({})
CircularProgress1.args={
    progressValue:30
}