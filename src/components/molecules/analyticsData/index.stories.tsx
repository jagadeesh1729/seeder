import { ComponentMeta, ComponentStory } from "@storybook/react";
import DataCard from ".";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import theme from '../../../themes/index';
export default {
    title:'molecules/analyticsData',
    component: DataCard,
}as ComponentMeta<typeof DataCard>

const Template:ComponentStory<typeof DataCard> = (args) => <DataCard {...args} />

export const Datacard = Template.bind({});

Datacard.args={
    Icon1:<CalendarMonthOutlinedIcon sx={{width: "40px",height: "40px",color:theme.palette.customIcon?.highEmp}}/>,
    Icon2:<InfoOutlinedIcon/>,
    Icon3:<AssignmentReturnedOutlinedIcon sx={{width: "40px",height: "40px",color:theme.palette.accent?.aquaBlue}}/>,
    Icon4:<InfoOutlinedIcon/>,
    Icon5:<PercentOutlinedIcon sx={{width: "40px",height: "40px",color:theme.palette.accent?.peachYellow}}/>,
    Icon6:<InfoOutlinedIcon/>,
    Text1:"Term cap",
    Text2:"12 months",
    Text3:"Available credit",
    Text4:"$880.0k",
    Text5:"Max interest rate",
    Text6:"12.00%",
}