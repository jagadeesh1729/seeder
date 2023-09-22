import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmailSentBox  from '.';
export default {
    title : 'molecules/EmailBox',
    component: EmailSentBox,
}as ComponentMeta<typeof EmailSentBox>
const Template:ComponentStory<typeof EmailSentBox>=(args)=><EmailSentBox {...args} />
export const Menu =  Template.bind({})
Menu.args = {
    email:'yourmail@gmail.com',
}