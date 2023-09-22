import { ComponentMeta, ComponentStory } from "@storybook/react";
import Datablock from ".";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import theme from '../../../themes/index';

export default {
    title:'molecules/analyticsCard',
    component: Datablock,
}as ComponentMeta<typeof Datablock>
const Template:ComponentStory<typeof Datablock> = (args) => <Datablock {...args}/>

export const CalendarDatablock = Template.bind({});
CalendarDatablock.args={
    Icon1: <CalendarMonthOutlinedIcon  sx={{width: "40px",height: "40px", color:theme.palette.customIcon?.highEmp}} />,
    text1: "Term cap",
    text2: "12 months",
    Icon2:<InfoOutlinedIcon/>
}