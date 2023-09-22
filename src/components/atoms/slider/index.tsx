import { Slider,SliderProps } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)`
.MuiSlider-thumb {
    box-sizing: border-box;
    width: 23px;
    height: 23px;
    background: #6C5DD3;
    border: 3px solid #B4A9FF;
    box-shadow: 0px 4px 4px rgba(16, 12, 46, 0.6);
    border-radius: 8px;
  }
  .MuiSlider-rail{
    background: #3A3A3D;
    border-radius: 8px;
    height: 8px;
  }
    .MuiSlider-track{
    background: #6C5DD3;
    border-radius: 8px;
    height: 8px;
    }
`;

const MuiSlider = (props:SliderProps) => {
  return (
      <StyledSlider {...props} />
  );
}
export default MuiSlider;