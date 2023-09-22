import { StandardLonghandProperties } from "csstype";
import { ButtonProps } from "@mui/material";
export  type ButtonProp <C extends React.ElementType> = ButtonProps<C, { component?: C }> &{
  variant?: "contained" | "text" | "outlined";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  width?: StandardLonghandProperties<string | number, string>["width"];
  height?: StandardLonghandProperties<string | number, string>["height"];
  color?: string;
  text?: string| number;
  bgColor?: string;
  sx?:object;
  isDisable?:boolean;
  buttonTextVarient?:"title"| "h1"| "h2"|"h3"|"body1"|"body2"| "caption" | "button1"|"button2";
  buttonTextSx?:object;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  active?:boolean;
}
export default ButtonProp
