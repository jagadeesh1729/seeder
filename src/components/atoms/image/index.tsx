import React from "react";
import { ReactSVG } from "react-svg";
interface ImageProps {
    src:string ,
    alt:string | undefined,
    sx?:object;
}
const MuiImage = ({src,alt,sx}:ImageProps) => {
    return  <ReactSVG src={src} alt={alt} sx={sx} data-testid='Image' />
}
export default MuiImage