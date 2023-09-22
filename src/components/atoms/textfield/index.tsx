import InputAdornment from '@mui/material/InputAdornment';
import { Box, TextField } from '@mui/material';
import { styled } from "@mui/system";
import React from 'react';
import theme from '../../../themes/index';
interface TextfieldProps {
    className?:string,
    placeholder?:string,
    iconStart?:React.ReactNode,
    iconEnd?:React.ReactNode,
    name?:string,
    value?:string,
    onChange?: (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    sx?:object;
    onClick?:React.MouseEventHandler<HTMLDivElement> | undefined;
    type?:string;
}

const StyleTextField = styled(TextField) ({
  input:{
    color:theme.palette.customText?.medEmp
  },
  '&.MuiTextField-root': {
    backgroundColor: theme.palette.grey[50],
    borderRadius:"12px",

    '& .MuiOutlinedInput-notchedOutline': {
      border:`1px solid ${theme.palette.customText?.lowEmp}`,
      borderRadius:"12px",
      
    },
    '& .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: theme.palette.customText?.lowEmp,
        opacity: 1,
      },
    },
    '.css-i4bv87-MuiSvgIcon-root': {
      color:theme.palette.customIcon?.lowEmp,
    },
    
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    '& .Mui-focused .css-i4bv87-MuiSvgIcon-root': {
      color:theme.palette.primary.main,
    },
    '& .Mui-focused .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'transparent',
      },
    },
  }
})
export default function MuiTextfield({placeholder,iconStart,iconEnd,name,value,onChange,type,sx,onClick}:TextfieldProps) {
  return (
    <Box>
    <StyleTextField 
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    onClick={onClick}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            {iconStart}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{cursor: 'pointer'}}>
             {iconEnd}
            </InputAdornment>
          ),
        }}
        variant="outlined"
        data-testid="inputfield"
        sx={{width:'434px',...sx}}
      />
    </Box>  
  );
}