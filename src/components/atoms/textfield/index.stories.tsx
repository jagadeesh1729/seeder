import { ComponentMeta, ComponentStory } from "@storybook/react"
import MuiTextfield from ".";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import React from 'react';

export default {
    title:'atoms/Textfield',
    component:MuiTextfield,
}as ComponentMeta<typeof MuiTextfield>
const Template:ComponentStory<typeof MuiTextfield> = (args) => <MuiTextfield {...args}/>

export const icon_text = Template.bind({});
export const icon_text_icon = Template.bind({});
export const text = Template.bind({});
icon_text.args = {
    placeholder:"Email Adress",
    iconStart:<MarkEmailUnreadOutlinedIcon/>,
    name:'email',
    type:'email'
}
icon_text_icon.args = {
    placeholder:"Enter Password",
    iconStart:<HttpsOutlinedIcon/>,
    iconEnd:<RemoveRedEyeOutlinedIcon/>,
    name:'password',
    type:'password'
}
text.args = {
    placeholder:"Enter text Here",
    name:'lastname',
}

