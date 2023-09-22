import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BasicList  from '.';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { BrowserRouter } from 'react-router-dom';

export default {
    title : 'molecules/Menu',
    component: BasicList,
}as ComponentMeta<typeof BasicList>
const Template:ComponentStory<typeof BasicList>=(args)=><BrowserRouter><BasicList {...args} /></BrowserRouter>
export const Menu =  Template.bind({})
Menu.args = {
    icon1:<HomeOutlinedIcon/>,
    children1:'Home',
    icon2:<MonetizationOnOutlinedIcon/>,
    children2:'cash'
}