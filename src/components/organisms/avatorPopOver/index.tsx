import { Box, Button, Popover, Stack, styled } from "@mui/material";
import React from "react";
import MuiAvatar from "../../atoms/avatar";
import MuiImage from "../../atoms/image";
import settings from "../../../../public/assets/icons/settings.svg";
import logout from "../../../../public/assets/icons/logout.svg";
import arrowButton from "../../../../public/assets/icons/arrowButton.svg";
import Avator from "../../../../public/assets/Images/avatar.svg";
import AvatorDropDown from "../../molecules/avatordropdown";
import MuiTypography from "../../atoms/Typography";
import ButtonComp from "../../atoms/button";
const MuiStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px",
  gap: "8px",
  width: "56px",
  height: "32px",
});
const MuiPopOver = styled(Popover)({
  "& .MuiPopover-paper": {
    backgroundColor: "#262529",
    background: "#262529",
    border: "1px solid #28272B",
    boxShadow:
      "0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
  },
});
const Divider = styled("hr")({
  width: "178px",
  height: "0px",
  backgroundColor: "#413F4D",
  marginLeft: "18px",
});
const MuiAvatorAndText = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px",
  width: "126px",
  height: "42px",
  margin: "0px,",
});
const MuiAvatorAndTextBox = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  margin: "0px",
  gap: "12px",
  width: "210px",
  height: "74px",
  borderRadius: "12px",
  minWidth: "150px",
});
const AvatorPopOver = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const data2 = [
    { text: "Settings", icon: settings },
    { text: "Log Out", icon: logout,route:'/login' },
  ];
  const data1 = [
    { text: "Manage Subscriptions", icon: "-1" },
    { text: "Help", icon: "-1" },
  ];
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box>
      <MuiStack>
        <Button  data-testid="avatar-button" onClick={handleClick}>
          <MuiAvatar src={Avator} />
          <MuiImage src={arrowButton} alt="not found" />
        </Button>
      </MuiStack>
      <MuiPopOver
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        data-testid="backdrop"
      >
        <MuiAvatorAndTextBox>
            <MuiAvatar src={Avator} data-testid="avatar-button"/>
            <MuiAvatorAndText>
              <MuiTypography variant="h3" sx={{ color: "#E8E7F0" }}>
                Kane Cooper
              </MuiTypography>
              <ButtonComp
                text="Edit Profile"
                buttonTextVarient="caption"
                variant="text"
                sx={{ color: "#B4A9FF" }}
              />
            </MuiAvatorAndText>
          </MuiAvatorAndTextBox>
          <Divider />
          <AvatorDropDown data={data1} />
          <Divider />
          <AvatorDropDown data={data2} />
      </MuiPopOver>
    </Box>
  );
};

export default AvatorPopOver;
