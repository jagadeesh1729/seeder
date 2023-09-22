import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Title from ".";

export default{
    title:"molecules/Title",
    component:Title
} as ComponentMeta<typeof Title>

const Template:ComponentStory<typeof Title> = () => <Title title="it is the title" description="it is the description"/>
export const title = Template.bind({})