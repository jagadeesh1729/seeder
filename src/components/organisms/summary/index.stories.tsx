import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SummaryCard from ".";
export default {
    title:"organisms/summary",
    component:SummaryCard,
}as ComponentMeta<typeof SummaryCard>

const Template:ComponentStory<typeof SummaryCard>= (args) => <SummaryCard {...args}/>
export const withSlider = Template.bind({})
export const withoutSlider = Template.bind({})
withSlider.args={
wantSlider:true,
noOfContacts:3,
payBackAmount:288003.3,
term:'12 months',
}
withoutSlider.args={
wantSlider:false,
noOfContacts:3,
payBackAmount:288003.3,
term:'12 months',
}