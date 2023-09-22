import { ComponentMeta, ComponentStory } from "@storybook/react";
import PaymentCard from ".";
import receipt from "../../../../public/assets/icons/receipt-text.svg"
import ibutton from "../../../../public/assets/icons/info-circle.svg"
import React from "react";
import MuiImage from "../../atoms/image";
export default {
    title:"molecules/paymentcard",
    component: PaymentCard,
}as  ComponentMeta<typeof PaymentCard>
const Template:ComponentStory<typeof PaymentCard>=(args)=><PaymentCard {...args} />
export const paymentDueCard =  Template.bind({})
paymentDueCard.args={
    label:'Due in 30 day(s)',
    img1:<MuiImage src={receipt} alt="Not found"/>,
    text1:'Due - May 03, 2021',
    text2:'$14,204.55',
    ibutton:ibutton,
    width:'200px',

}