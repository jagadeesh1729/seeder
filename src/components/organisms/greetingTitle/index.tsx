import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MuiTypography from '../../atoms/Typography';
import theme from "../../../themes/index"
const GreetingTitle = () => {
    const [greeting, setGreeting] = useState("");
    const displayGreeting=()=> {
      const now = new Date();
      const hour = now.getHours();
      if (0 <= hour && hour < 12) {
        setGreeting("Good morning ✋");
      } else if (hour >= 12 && hour < 16) {
        setGreeting("Good afternoon ✋");
      } else {
        setGreeting("Good evening ✋");
      }
    }
    useEffect(() => {
      displayGreeting();
    }, []);
    const getMonth= ()=>{
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const now = new Date();
      const month = now.getMonth();
      const year = now.getFullYear();
      const day = now.getDate();
  
      return monthList[month] + " " + day + "," + year;
    }
  return (
    <Box>
          <MuiTypography
            variant="title"
            sx={{ color: theme.palette.customText?.highEmp }}
          >
            {greeting}
          </MuiTypography>
          <MuiTypography
            variant="h3"
            sx={{ color: theme.palette.customText?.lowEmp }}
          >
            {getMonth()}
          </MuiTypography>
    </Box>
  )
}

export default GreetingTitle