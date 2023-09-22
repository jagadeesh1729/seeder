import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiTypography from '../../atoms/Typography/index'
import { styled } from '@mui/system';
import { useState,useEffect } from 'react';
import theme from '../../../themes/index';
import {  useLocation, useNavigate } from 'react-router-dom';
interface MenuProps {
    icon1:React.ReactNode | undefined;
    icon2?:React.ReactNode | string;
    children1: string;
    children2?: string;
    sx?:object;
    route1?:string;
    route2?:string;
}


const Menustyles = styled(ListItem)  ({
  color:theme.palette.customText?.lowEmp,
  "& .MuiListItemIcon-root": {
    color: theme.palette.customText?.lowEmp,
  },
  "&:hover": {
    color:theme.palette.customText?.highEmp,
    "& .MuiListItemIcon-root": {
      color: theme.palette.customText?.highEmp
    }
  },
  '& .Mui-selected':{
    borderRadius:'12px',
    color: theme.palette.customText?.highEmp,
    background:'#404040',
    "& .MuiListItemIcon-root": {
      color:theme.palette.customText?.highEmp
    }
  }
});

export default function BasicList({icon1,icon2,children1,children2,sx,route1,route2}:MenuProps) {
  const navigate = useNavigate();
  const location=useLocation()
  const path=location.pathname

  const [select ,setselect] = useState<string|undefined>(path);
  useEffect(()=>{
    if(path==="/newcashkick"){
      setselect("/cashaccleration")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const handleClick = (location:string|undefined) => {
    setselect(location)
  }
 
  
  const menuList = [
    {icon:icon1,children: children1,route:route1},
    {icon:icon2,children: children2,route:route2},
]
  return (
    <Box sx={{
      display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "4px",
    width: "210px",
    height: "543px",
    }}>
        <List data-testid="menulist">
          {menuList.map((menuItem,index) => (
          <Menustyles key={index} disablePadding>
            <ListItemButton selected={select===menuItem.route} onClick={()=>{handleClick(menuItem?.route);navigate(`${menuItem.route}`)}}>
              <ListItemIcon>
              {menuItem.icon} 
              </ListItemIcon>
              <ListItemText>
                <MuiTypography variant='body1' sx={{whiteSpace:'nowrap',...sx}}>{menuItem.children}</MuiTypography>
              </ListItemText>
              </ListItemButton>
            </Menustyles>
            ))}
        </List>
    </Box>
  );
}