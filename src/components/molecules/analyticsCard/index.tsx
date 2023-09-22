import React, { ReactNode } from "react"
import {
    IconStack,
    DatablockStack,
    BgIcon,
    Content,
    Stack1,
} from "./styles"
import MuiTypography from "../../atoms/Typography";
import theme from '../../../themes/index';

interface DatablockProps{
    Icon1?:ReactNode,
    Icon2?:ReactNode,
    text1?:string,
    text2?:string,
}

const Datablock = ({Icon1,Icon2,text1,text2}:DatablockProps) => {
    return (
        <DatablockStack>
        <BgIcon>
          {Icon1}
        </BgIcon>
        <Stack1>
          <Content>
            <MuiTypography sx={{color:theme.palette.customText?.medEmp}} variant="body1">{text1}</MuiTypography>
           <IconStack>
            {Icon2}
            </IconStack>
          </Content>
          <MuiTypography sx={{color:theme.palette.customText?.highEmp}} variant="h2">{text2}</MuiTypography>
        </Stack1>
      </DatablockStack>
    );
}
export default Datablock;