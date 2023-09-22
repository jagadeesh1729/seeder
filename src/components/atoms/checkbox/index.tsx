import { Box, Checkbox,CheckboxProps } from '@mui/material'
import React from 'react'
const CheckBox = ({sx,size,checked}:CheckboxProps) => {
  const styleBox={
    ...sx,
  }
  return (
    <Box>
        <Checkbox sx={styleBox} size={size}  checked={checked} data-testid="checkbox"/>
    </Box>
  )
}

export default CheckBox