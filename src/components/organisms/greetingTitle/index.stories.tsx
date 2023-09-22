import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import GreetingTitle from ".";
export default {
    title:'organisms/GreetingTitle',
    component: GreetingTitle,
}as ComponentMeta<typeof GreetingTitle>
const Template:ComponentStory<typeof GreetingTitle> = () => <GreetingTitle />
export const Greeting = Template.bind({})