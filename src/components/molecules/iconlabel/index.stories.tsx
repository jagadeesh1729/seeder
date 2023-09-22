import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import IconLabel from '.'
//import Info from "../../../../public/assets/icons/add.svg"
export default{
    title:"molecules/IconLabel",
    component:IconLabel
}as ComponentMeta<typeof IconLabel>

const Template:ComponentStory<typeof IconLabel> = (args) => <IconLabel {...args} />

export const Iconlabel = Template.bind({})

Iconlabel.args = {
    Text:"Your payments",
    Icon:<InfoOutlinedIcon/>
}