import React from 'react';
import MuiAvatar from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../../../../public/assets/Images/avatar.svg';
export default {
    title:'atoms/Avatar',
    component:MuiAvatar,
}as ComponentMeta<typeof MuiAvatar>
const Template:ComponentStory<typeof MuiAvatar>=(args)=><MuiAvatar {...args}/>
export const Avatar = Template.bind({})
Avatar.args={
    src:image,
    sx:{width: 24, height: 24}
}