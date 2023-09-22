import { Box, Stack } from '@mui/material'
import { styled } from '@mui/system'
import theme from "../../../themes/index"
export const MuiBox=styled(Box)(({
    backgroundColor:theme.palette.purple?.[600],
    width:'575px',
    border:'2px solid black',
    padding:'40px 50px',
    minHeight:'100vh'
}))
export const MuiStack=styled(Stack)(({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "2px 4px",
    gap: "8px",
    width:'210px',
    height:'36px',
    position:'absolute',
    top:"40px",
    left:'56px',
}))
export const MuiStack2=styled(Stack)(({
        paddingTop:'104px',
}))