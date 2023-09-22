import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CashAcclerationBody from ".";

export default{
    title:"organisms/CashAcclerationBody",
    component:CashAcclerationBody
} as ComponentMeta<typeof CashAcclerationBody>

const Template:ComponentStory<typeof CashAcclerationBody> = () => <BrowserRouter><CashAcclerationBody/></BrowserRouter>
export const CashAcclerationbody = Template.bind({})