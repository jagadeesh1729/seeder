import { Box,styled,Tabs } from '@mui/material'
import React,{useState} from 'react'
import { TabContext,TabPanel } from '@mui/lab'
import ButtonComp from '../../atoms/button'
interface Props{
    types:string[],
    content:any;
}
const MuiTabes=styled(Tabs)(({
    "&.MuiTabs-root":{
        textTransform: "capitalize",
    },
    ".css-heg063-MuiTabs-flexContainer":{
        gap:"12px"
    },
    disply:'flex',
}))

const MuiTabs = ({types,content}:Props) => {
    
  const [active, setActive] = useState(types?.[0]);
  const [value, setValue] = useState(types?.[0])
  return (
    <Box sx={{width:"100%",display:"flex",flexDirection:"column",gap:"20px",padding:"0px"}}>
        <TabContext value={value}>
            <MuiTabes >
            {types?.map(type => (
      <ButtonComp
        key={type}
        active={active === type}
        onClick={() => { setActive(type);setValue(type)}}
        variant="contained"
        text={type}
        width="153px"
        bgColor='grey.100'
        buttonTextVarient='button1'
        value={type}
        sx={{marginLeft:'10px',padding:"12px 24px",border:"1px solid #413F4D"}}
        />
    ))}
            </MuiTabes>
            {types?.map(type =>(
                <TabPanel key={type}value={type} sx={{padding:"0px 14px"}}>{content[type]}</TabPanel>
            ))}
        </TabContext>
    </Box>
  )
}

export default MuiTabs