import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Table from ".";

export default{
    title:"organisms/table",

    component:Table
} as ComponentMeta<typeof Table>

const Template:ComponentStory<typeof Table>= (args) => <Table {...args} />
export const table = Template.bind({})
const columns2= [
    {field:"cashkickName",headerName:"Name",sortable:false,flex:1},
    {field:"status",headerName:"Status",sortable:false,flex:1},
    {field:"maturity",headerName:"Maturity",sortable:false,flex:1},
    {field:"totalReceived",headerName:"Total received",sortable:false,flex:1},
    {field:"totalFinanced",headerName:"Total financed",sortable:false,flex:1}
  ];

table.args={
    autoHeight:true,
    checkbox:true,
    columns:columns2,
    rows:[{id:1,cashkickName:"first cashkick",status:"pending",maturity:"12sk",totalReceived:"123",totalFinanced:"456"}]
}