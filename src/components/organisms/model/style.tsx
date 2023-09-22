import {styled} from "@mui/system"
export const StyleModal = styled("div")({
   boxSizing: "border-box",
   display: "flex",
   flexDirection: "column",
   alignitems: "flex-start",
   padding: "0px",
        position:'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
     background:"#262529",
    border: "1px solid #28272B",
    boxshadow: "0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    
   
})
export const ModalInside = styled("div")({
    display: "flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding: "24px 40px",
    gap:"8px",
    flex:"none",
    order:1,
    alignSelf:"stretch",
    flexGrow:0,
    background: "#262529",
})
export const Content1 = styled("div")({
    display: "flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding: "0px",
    gap:"10px",
    flex:"none",
    order:0,
    alignSelf:"stretch",
    flexGrow:0,
})
export const Content2 = styled("div")({
    display: "flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding: "0px",
    gap:"10px",
    flex:"none",
    order:0,
    alignSelf:"stretch",
    flexGrow:0,
})
export const Frame1 = styled("div")({
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding: "0px",
    gap:"32px",
    width: "560px",
    height: "307px",
    flex:"none",
    order:0,
    alignSelf:"stretch",
    flexGrow:0,
})
export const Frame2 = styled("div")({
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    padding: "0px",
    gap:"8px",
    flex:"none",
    order:1,
    alignSelf:"stretch",
    flexGrow:0,
})
export const Modalheader = styled("div")({
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding: "24px 40px",
    gap:"8px",
    flex:"none",
    order:0,
    alignSelf:"stretch",
    flexGrow:0,
})
export const Frame = styled("div")({
    display: "flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding: "0px",
    gap:"4px",
    flex:"none",
    order:0,
    flexGrow:1,
})
export const IconFrame = styled("div")({
    flex:"none",
    order:1,
    flexGrow:0,
    color:"#D4D2DE",
})
export const Modalfooter = styled("div")({
    boxSizing: "border-box",
    display: "flex",
    justifyContent:"flex-end",
    alignItems:"center",
    padding: "32px 40px 24px",
    gap:"8px",
    flex:"none",
    order:2,
    alignSelf:"stretch",
    flexGrow:0,
})