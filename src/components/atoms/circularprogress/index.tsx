import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import MuiTypography from '../Typography';
import theme from "../../../themes/index"
interface Props{
  progressValue:number|undefined;
}
function FacebookCircularProgress({progressValue}:Props) {
  const boxSx1={
    position: 'relative', display: 'inline-flex' 
  }
  const boxSx2={
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const cpSx={
    color:'accent.aquaBlue',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
    [`& .${circularProgressClasses.circle}`]: {
      strokeLinecap: 'round',
    },
  }
  const textSx={
    color:theme.palette.accent?.aquaBlue,
  }
  return (
    <Box sx={boxSx1}>
      <CircularProgress
        variant="determinate"
        sx={{
         color:'grey.50'
        }}
        size={50}
        thickness={6}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={cpSx}
        size={50}
        thickness={6}
        value={progressValue}
        data-testid="CircularDataDisplay"
      />
       <Box
        sx={boxSx2}
      >
        <MuiTypography
          variant="body2" sx={textSx}
        >{`${progressValue}%`}</MuiTypography>
      </Box>
    </Box>
  );
}

export default function MuiCircularProgress({progressValue}:Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress progressValue={progressValue}/>
    </Box>
  );
}
