import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import MuiImage from "../../atoms/image";
import theme from "../../../themes/index";
import MuiTypography from "../../atoms/Typography";
import {  useNavigate } from 'react-router-dom';

const Menustyles = styled(ListItem)({
  color: theme.palette.customText?.lowEmp,
  width: "188px",
  "& .MuiListItemIcon-root": {
    color: theme.palette.customText?.lowEmp,
    minWidth: "25px",
  },
  "&:hover": {
    color: theme.palette.customText?.highEmp,
    "& .MuiListItemIcon-root": {
      color: theme.palette.customText?.highEmp,
    },
  },
  "& .Mui-selected": {
    borderRadius: "12px",
    color: theme.palette.customText?.highEmp,
    background: "#404040",
    "& .MuiListItemIcon-root": {
      color: theme.palette.customText?.highEmp,
    },
  },
});
interface Prop {
  icon: string;
  text: string | undefined;
  route?:string;
}
interface ListProp {
  data: Array<Prop>;
}
const AvatorDropDown = ({ data }: ListProp) => {
  const navigate = useNavigate();
  return (
    <Box>
      <List data-testid="avatorlist">
        {data.map((menuItem, index) => (
          <Menustyles disablePadding key={index}>
            {menuItem.icon === "-1" ? (
              <ListItemText sx={{ marginLeft: "18px" }}>
                {" "}
                <MuiTypography variant="body1">{menuItem.text}</MuiTypography>
              </ListItemText>
            ) : (
              <ListItemButton sx={{ padding: "0px", marginLeft: "18px" }} onClick={()=>navigate(`${menuItem.route}`)} aria-label={menuItem.text}>
                <ListItemIcon>
                  <MuiImage src={menuItem.icon} alt="not found" />
                </ListItemIcon>
                <ListItemText>
                  <MuiTypography variant="body1">{menuItem.text}</MuiTypography>
                </ListItemText>
              </ListItemButton>
            )}
          </Menustyles>
        ))}
      </List>
    </Box>
  );
};

export default AvatorDropDown;
