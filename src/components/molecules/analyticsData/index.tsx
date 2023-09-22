import { ReactNode } from "react";
import {styled} from "@mui/system";
import Datablock from "../analyticsCard/index";
import React from 'react';
import { Stack } from "@mui/material";
import theme from '../../../themes/index';
interface DataCardProps{
    Icon1?:ReactNode,
    Icon2?:ReactNode,
    Icon3?:ReactNode,
    Icon4?:ReactNode,
    Icon5?:ReactNode,
    Icon6?:ReactNode,
    Text1?:string,
    Text2?:string,
    Text3?:string,
    Text4?:string,
    Text5?:string,
    Text6?:string,
}
const StyleDataCard = styled( Stack)({
    display: "flex",
    flexDirection:'row',
    alignitems: "center",
    padding: "32px",
    width:"710px",
    gap: "12px",
    background: theme.palette.customBackground?.elevation1,
    border: `1px solid ${theme.palette.border?.lowEmp}`,
    borderRadius: "12px",
})

const DataCard = ({Icon1,Icon2,Icon3,Icon4,Icon5,Icon6,Text1,Text2,Text3,Text4,Text5,Text6}:DataCardProps) => {
    const analyticsData = [
        {icon1:Icon1,icon2:Icon2,text1:Text1,text2:Text2},
        {icon1:Icon3,icon2:Icon4,text1:Text3,text2:Text4},
        {icon1:Icon5,icon2:Icon6,text1:Text5,text2:Text6},
    ]
    return(
        <StyleDataCard>
            {analyticsData.map((dataItem, type) => (
                <Datablock key={type} Icon1={dataItem.icon1} Icon2={dataItem.icon2} text1={dataItem.text1} text2={dataItem.text2}/>
            ))};
            
        </StyleDataCard>
    )
}
export default DataCard;