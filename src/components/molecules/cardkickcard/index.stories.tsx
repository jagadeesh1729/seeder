import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import CashKickCard from ".";
export default {
  title: "molecules/CashKickCard",
  component: CashKickCard,
} as ComponentMeta<typeof CashKickCard>;
const Template: ComponentStory<typeof CashKickCard> = (args) => (
  <CashKickCard {...args} />
);
export const card = Template.bind({});
card.args = {
  text1: "Launch a new Cash Kick",
  text2: "$709,546.00",
  buttonText: "New Cash Kick",
  width:"350px"
};
