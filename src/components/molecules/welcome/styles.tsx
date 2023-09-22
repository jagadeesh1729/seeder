import {styled} from "@mui/system"
const StyleModal = styled("div")({
    paddingBottom:"40px",
    padding:"32px",
    borderRadius: "12px",
    backgroundRepeat:"no-repeat",
})
const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignitems: "flex-start",
    padding: "0px",
    gap:"20px",
    width: "277px",
height: "193px",
})
const Stack = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignitems: "flex-start",
    padding: "0px",
    gap:"12px",
    flex:"none",
    order:0,
    flexGrow:0,
})

export{
    Content,
    Stack,
    StyleModal,
}