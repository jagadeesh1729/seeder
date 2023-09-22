import React from "react";
import { Avatar } from '@mui/material';
interface AvatarProps {
    src?:string;
    sx?:object;
}
const MuiAvatar = ({src,sx}:AvatarProps) => {
    return(
        <Avatar src={src} sx={sx} data-testid='avatar' />
    )
}
export default MuiAvatar