import React from 'react';
import MuiImage from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../../../../public/assets/Images/image.svg'
export default {
    title:'atoms/Image',
    component:MuiImage,
}as ComponentMeta<typeof MuiImage>
const Template:ComponentStory<typeof MuiImage>=(args)=><MuiImage {...args} />
export const Image = Template.bind({})
Image.args={
    src:image,
    alt:'logo',
}