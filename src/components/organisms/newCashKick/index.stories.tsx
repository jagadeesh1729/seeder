import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Datagrid from '.'
export default{
    title:"organisms/dataGrid",
    component:Datagrid
}as ComponentMeta<typeof Datagrid>

const Template:ComponentStory<typeof Datagrid> = () =><BrowserRouter><Datagrid  /></BrowserRouter> 

export const NewCashkick = Template.bind({})

