import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import LandingPageBottom from ".";
export default {
    title:'organisms/PaymentDetails',
    component: LandingPageBottom,
}as ComponentMeta<typeof LandingPageBottom>
const Template:ComponentStory<typeof LandingPageBottom> = () => <BrowserRouter><LandingPageBottom /></BrowserRouter>
export const LandingPage = Template.bind({})