import {styled} from "@mui/system"
import theme from "../../../themes"

const StyleLogin = styled("div")({
    display:"flex",
    padding:"96px 208px 64px 154px",
    background:theme.palette.customBackground?.elevation1,
    paddingBottom:"40px",
})
const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    gap:"35px",
})
const TextIconFrame = styled("div")({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding:"0px",
    gap:"4px",
})
const Frame1 = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"20px",
})
const StyleLine= styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"0px",
    isolation:"isolate",
})
const StyleTag = styled("div")({
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    padding:"4px 8px",
    gap:"10px",
    order:0,
    zIndex:1,
})
const Frame2 = styled("div")({
    display:"flex",
    flexDirection:"column",
    padding:"0px",
    gap:"32px",
})
const Frame4 = styled("div")({
    display:"flex",
    alignItems:"flex-start",
    padding:"0px",
})

export{
    StyleLogin,
    TextIconFrame,
    Content,
    Frame1,
    StyleLine,
    StyleTag,
    Frame2,
    Frame4,
}