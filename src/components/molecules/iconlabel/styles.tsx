import {styled} from "@mui/system";
const Content = styled("div")({
    display: "flex",
    alignitems: "center",
    padding: "0px",
    gap: "8px",
    width: "204px",
    height: "22px",
    flex: "none",
    alignSelf:"stretch",
    order: 0,
    flexGrow: 0,
  });
  const IconStack = styled("div")({
    display: "flex",
    alignitems: "flexStart",
    padding: "0px opx 3px",
    gap: "8px",
    width: "12px",
    height: "12px",
    color: "#727080",
    flex: "none",
    order: 1,
    flexGrow: 0,
  });

  export {
    Content,
    IconStack,
  }