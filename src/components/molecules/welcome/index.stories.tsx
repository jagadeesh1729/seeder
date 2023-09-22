import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Welcome from ".";

export default{
    title:"molecules/Welcome",
    component:Welcome
} as ComponentMeta<typeof Welcome>

const Template:ComponentStory<typeof Welcome> = (args) => <Welcome {...args}/>

export const welcome = Template.bind({})
welcome.args={
    amount:8.3
}