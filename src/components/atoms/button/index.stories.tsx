import ButtonComp from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
export default {
  title: "atoms/Buttons",
  component: ButtonComp,
} as ComponentMeta<typeof ButtonComp>;
const Template: ComponentStory<typeof ButtonComp> = (args) => (
  <ButtonComp {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  width: "130px",
  height: "60px",
  color:'secondary',
  text: "Button",
  startIcon: <AddIcon />,
  endIcon: <AddIcon />,
  isDisable:false,
};
export const WhiteBackground = Template.bind({});
WhiteBackground.args = {
  variant: "contained",
  width: "130px",
  height: "60px",
  bgColor: "customText.main",
  text: "Button",
  startIcon: <AddIcon />,
};
