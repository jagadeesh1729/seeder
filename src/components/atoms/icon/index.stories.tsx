import React from 'react';
import MuiIcon from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
export default {
    title:'atoms/Icon',
    component:MuiIcon,
}as ComponentMeta<typeof MuiIcon>
const Template:ComponentStory<typeof MuiIcon>=(args)=><MuiIcon {...args} />
export const Email = Template.bind({})
Email.args={
    icon:<MarkEmailUnreadOutlinedIcon/>
}