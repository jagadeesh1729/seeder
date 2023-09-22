import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiSlider from ".";

export default{
    title:"atoms/Slider",
    component:MuiSlider,
}as ComponentMeta<typeof MuiSlider>

const Template:ComponentStory<typeof MuiSlider> = (args) => <MuiSlider {...args} />
export const Slider = Template.bind({});

Slider.args={
    max:100,
    defaultValue:0,
    min:0,
    sx:{width:"286px",height:"23px"}
}
