import { ComponentMeta, ComponentStory } from '@storybook/react'
import LoginBody from '.'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
export default{
    title:"organisms/LoginBody",
    component:LoginBody
}as ComponentMeta<typeof LoginBody>

const Template:ComponentStory<typeof LoginBody> = () => <BrowserRouter><LoginBody /></BrowserRouter>

export const Loginbody = Template.bind({})