import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import LogoGroup from ".";
import google from "../../../../public/assets/icons/google.svg"
import stripe from "../../../../public/assets/icons/stripe.svg"
import xero from "../../../../public/assets/icons/xero.svg"
export default {
    title:'molecules/logoGroup',
    component: LogoGroup,
}as ComponentMeta<typeof LogoGroup>
const Template:ComponentStory<typeof LogoGroup> = (args) => <LogoGroup {...args} />
export const LogoGroupButton = Template.bind({})
LogoGroupButton.args={
    children1:"Google",
    children2:"stripe",
    children3:"xero",
    src1:google,
    src2:stripe,
    src3:xero,
}