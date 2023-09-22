import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MuiChip from ".";

export default {
    title:"atoms/Chip",
    component:MuiChip,
}as ComponentMeta<typeof MuiChip>

const Template:ComponentStory<typeof MuiChip>= (args) => <MuiChip {...args}/>
export const outlined = Template.bind({})
export const filled = Template.bind({})
outlined.args={
    label:"a chip",
    variant:"outlined",
    sx:{
        "width": "100px",
        "height": "50px",
      },
}
filled.args={
    label:"Available",
    variant:"filled",
    sx:{
        "width": "100px",
        "height": "50px",
      }
}