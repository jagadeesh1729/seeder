import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import HeaderText from '.'
export default{
    title:"molecules/headerTitle",
    component:HeaderText
}as ComponentMeta<typeof HeaderText>

const Template:ComponentStory<typeof HeaderText> = (args) => <HeaderText {...args} />

export const HeaderTitle = Template.bind({})

HeaderTitle.args = {
  text1:"New Cash Kick",
  text2:"Lets setup a new cash kick to power your Saas"
}