import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Panel from '.';
import Logo from "../../../../public/assets/icons/seederlogo.svg"
import Img1 from "../../../../public/assets/Images/businessAnalsis.svg"
import Img2 from "../../../../public/assets/Images/money.svg"
export default {
    title:'molecules/Panel',
    component: Panel,
}as ComponentMeta<typeof Panel>
const Template:ComponentStory<typeof Panel>=(args)=><Panel {...args} />
export const LoginPanel = Template.bind({})
LoginPanel.args={
    title:'Seeder',
    logo:Logo,
    img1:Img1,
}
export const PanelBeforeLogin= Template.bind({})
PanelBeforeLogin.args={
    title:'Seeder',
    logo:Logo,
    img1:Img2,
}